import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import HeroCarousel from "../components/HeroCarousel";
import HealthCalculator from "../components/HealthCalculator";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { featuredProducts } = useProducts();
  const productsSectionRef = useRef(null);
  const location = useLocation();

  // Efecto para desplazarse a la sección de productos si la ruta es "/productos"
  useEffect(() => {
    if (location.pathname === "/productos" && productsSectionRef.current) {
      // Pequeño retraso para asegurar que la página se ha renderizado completamente
      setTimeout(() => {
        productsSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Reemplazada por el carrusel */}
      <section className="py-5 bg-success bg-opacity-10">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.h1
                className="display-4 fw-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Impulsa tu bienestar
              </motion.h1>
              <motion.p
                className="lead mb-4 fs-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Potencia tu vida con Vital Plus Energy. Suplementos de alta
                calidad formulados para optimizar tu salud y rendimiento.
              </motion.p>
              <motion.a
                href="#productos"
                className="btn btn-success btn-lg px-4 py-3 rounded-pill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                Descubre nuestros productos
              </motion.a>
            </div>
            <div className="col-lg-6">
              <HeroCarousel /> {/* Usa el nuevo componente de carrusel aquí */}
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de calculadora */}
      <HealthCalculator />

      {/* Products Section - Con ref para navegación */}
      <section 
        id="productos" 
        className="py-5 bg-white"
        ref={productsSectionRef}  // Añadimos la referencia aquí
      >
        <div className="container py-4">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="fw-bold display-4 mb-3">Nuestros Productos</h2>
            <p className="text-muted fs-5">
              Selecciona el suplemento que mejor se adapte a tus necesidades
            </p>
          </motion.div>

          <motion.div
            className="row g-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="col-md-6 col-lg-3"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="fw-bold display-4 mb-3">
              ¿Por qué elegir Vital Plus?
            </h2>
          </motion.div>

          <div className="row g-4">
            {[
              {
                icon: "bi bi-check-circle-fill",
                color: "success",
                title: "Calidad Premium",
                text: "Ingredientes de la más alta calidad y pureza.",
              },
              {
                icon: "bi bi-lightning-charge-fill",
                color: "warning",
                title: "Resultados Comprobados",
                text: "Formulaciones respaldadas por investigación científica.",
              },
              {
                icon: "bi bi-truck",
                color: "primary",
                title: "Envíos Rápidos",
                text: "Recibe tus productos en 24-48 horas.",
              },
              {
                icon: "bi bi-shield-check",
                color: "info",
                title: "Garantía de Satisfacción",
                text: "30 días para probar nuestros productos.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <div className="text-center p-4 bg-white rounded shadow-sm h-100">
                  <i
                    className={`${item.icon} text-${item.color} fs-1 mb-3`}
                  ></i>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mb-0">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;