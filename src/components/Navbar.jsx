import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <motion.span 
            className="fw-bold fs-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Vital Plus Energy
          </motion.span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
              <Link className="nav-link px-3" to="/">Inicio</Link>
            </motion.li>
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link className="nav-link px-3" to="/productos">Productos</Link>
            </motion.li>
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link className="nav-link px-3" to="/contacto">Contacto</Link>
            </motion.li>
            <motion.li 
              className="nav-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link className="nav-link px-3" to="/carrito">
                <FaShoppingCart className="fs-5" />
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;