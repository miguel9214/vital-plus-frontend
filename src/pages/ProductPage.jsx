import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import WhatsAppButton from '../components/WhatsAppButton'
import { motion } from 'framer-motion'

const ProductPage = () => {
  const { id } = useParams()
  const { getProductById } = useProducts()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Producto no encontrado</h2>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <motion.div 
              className="bg-light p-5 rounded d-flex align-items-center justify-content-center"
              style={{ 
                height: '500px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={`/src/assets/images/${product.image}`} 
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
              <h1 className="fw-bold mb-3 display-4">{product.name}</h1>
              <p className="lead text-muted mb-4">{product.description}</p>
              
              <div className="mb-4">
                <h4 className="fw-bold mb-3 text-success">Beneficios</h4>
                <ul className="list-unstyled">
                  {product.benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="fw-bold mb-3 text-success">Modo de Uso</h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {product.usage}
                </motion.p>
              </div>
              
              <div className="mb-4">
                <h4 className="fw-bold mb-3 text-success">Composición</h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {product.contains}
                </motion.p>
              </div>
              
              <motion.div 
                className="d-flex align-items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="display-5 fw-bold text-success me-3">${product.price.toFixed(2)}</span>
                <span className="badge bg-success rounded-pill px-3 py-2 fs-6">Disponible</span>
              </motion.div>
              
              <WhatsAppButton product={product} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductPage