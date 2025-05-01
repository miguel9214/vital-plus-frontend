import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import { ProductProvider } from './context/ProductContext';
import { Routes, Route } from 'react-router-dom';
import { initGA, trackPage } from './analytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Inicializa GA una sola vez
  }, []);

  useEffect(() => {
    trackPage(location.pathname + location.search); // Rastrear ruta actual
  }, [location]);

  return (
    <ProductProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Home />} />
        <Route path="/producto/:id" element={<ProductPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </ProductProvider>
  );
}

export default App;
