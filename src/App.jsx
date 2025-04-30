import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage'; // Importa la nueva página
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Home />} />
          <Route path="/producto/:id" element={<ProductPage />} />
          <Route path="/contacto" element={<ContactPage />} /> {/* Nueva ruta */}
        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;