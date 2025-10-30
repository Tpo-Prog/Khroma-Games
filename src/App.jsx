// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // si tenés una página principal
import Prod from './Productos.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Prod />} />
      </Routes>
    </>
  );
}
