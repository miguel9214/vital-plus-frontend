import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef();
  const location = useLocation();

  useEffect(() => {
    // Cerrar el menú hamburguesa al cambiar de ruta
    const navbarCollapse = navbarRef.current.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  }, [location.pathname]);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    const navbarCollapse = navbarRef.current.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow" ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <motion.span 
            className="fw-bold fs-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Vital Plus Energy
          </motion.span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link className="nav-link px-3" to="/" onClick={closeMenu}>Inicio</Link>
            </motion.li>
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link className="nav-link px-3" to="/productos" onClick={closeMenu}>Productos</Link>
            </motion.li>
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link className="nav-link px-3" to="/contacto" onClick={closeMenu}>Contacto</Link>
            </motion.li>
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* <Link className="nav-link px-3" to="/carrito" onClick={closeMenu}>
                <FaShoppingCart className="fs-5" />
              </Link> */}
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;