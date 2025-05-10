import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import WhatsAppButton from '../components/WhatsAppButton';
import NutritionTable from '../components/NutritionTable';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProductPage = () => {
  const { id } = useParams();
  const { getProductById, formatPriceCOP } = useProducts();
  const product = getProductById(id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-6">
            <motion.div 
              className="bg-light p-4 p-md-5 rounded-3 d-flex align-items-center justify-content-center"
              style={{ 
                height: '500px', 
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={`/images/${product.image}`} 
                alt={product.name}
                className="img-fluid"
                style={{ 
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="fw-bold mb-3 display-4" style={{
                background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {product.name}
              </h1>
              
              <p className="lead text-muted mb-4">{product.description}</p>
              
              <div className="mb-4">
                <h4 className="fw-bold mb-3 d-flex align-items-center text-success">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Beneficios Principales
                </h4>
                <ul className="list-unstyled">
                  {product.benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="mb-2 ps-3 position-relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <i className="bi bi-check2-circle text-success position-absolute" style={{ left: 0, top: '4px' }}></i>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="d-flex flex-wrap align-items-center mb-4 gap-3">
                <motion.div
                  className="d-flex align-items-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="display-5 fw-bold text-success me-2">
                    {formatPriceCOP(product.price)}
                  </span>
                </motion.div>
                
                <span className="badge bg-success rounded-pill px-3 py-2 fs-6">
                  <i className="bi bi-check2-circle me-1"></i> Disponible
                </span>
              </div>
              
              <WhatsAppButton product={product} />
            </motion.div>
          </div>
        </div>
        
        <NutritionTable product={product} />
      </div>

            {/* WhatsApp Float Button */}
            <motion.div
              className="whatsapp-float"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a
                href="https://wa.me/573178519427?text=Hola,%20estoy%20interesado%20en%20más%20información%20sobre%20los%20productos."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={28} className="text-white" />
              </a>
            </motion.div>
      
            <style jsx>{`
              .whatsapp-float {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background-color: #25d366;
                border-radius: 50%;
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
                z-index: 100;
              }
      
              .whatsapp-float a {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
      
              .contact-hero {
                background: linear-gradient(
                  135deg,
                  rgba(40, 167, 69, 0.1) 0%,
                  rgba(255, 255, 255, 1) 100%
                );
              }
      
              .icon-wrapper {
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
      
              .object-fit-cover {
                object-fit: cover;
              }
            `}</style>
    </motion.div>
  );
};

export default ProductPage;