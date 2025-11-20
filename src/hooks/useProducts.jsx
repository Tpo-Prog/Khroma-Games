import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API = '/productos.json'; 

async function fetchProducts() {
  const res = await fetch(API);
  if (!res.ok) throw new Error('Error al obtener productos');
  const data = await res.json();
  return data.products; 
}

export default function useProducts() {
  const qc = useQueryClient();

  // Lectura: este es para obtener los productos
  const query = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts,
  staleTime: 1000 * 60,
  retry: 1,
});

  // Crear un producto
  const createMutation = useMutation({
  mutationFn: (newProduct) =>
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    }).then((r) => {
      if (!r.ok) throw new Error('Error al crear producto');
      return r.json();
    }),
  onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] }),
});

  // Actualizar un producto
  const updateMutation = useMutation({
  mutationFn: ({ id, data }) =>
    fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((r) => {
      if (!r.ok) throw new Error('Error al actualizar producto');
      return r.json();
    }),
  onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] }),
});

const deleteMutation = useMutation({
  mutationFn: (id) =>
    fetch(`${API}/${id}`, { method: 'DELETE' }).then((r) => {
      if (!r.ok) throw new Error('Error al eliminar producto');
      return r.json();
    }),
  onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] }),
});

  return {
    // Valores de useQuery
    ...query, // data, isLoading, isError, error, refetch, etc.
    // Mutations (promesas)
    createProduct: createMutation.mutateAsync,
    updateProduct: updateMutation.mutateAsync,
    deleteProduct: deleteMutation.mutateAsync,
  };
}