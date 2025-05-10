import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className="card h-100 border-0 shadow-sm overflow-hidden"
    >
      <div className="card-img-top bg-light p-4 d-flex align-items-center justify-content-center" 
           style={{ height: '280px' }}>
        <motion.img 
          src={`/images/${product.image}`} 
          alt={product.name}
          className="img-fluid"
          style={{ 
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-dark fw-bold mb-3">{product.name}</h5>
        <ul className="list-unstyled small text-muted mb-4 flex-grow-1">
          {product.benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {benefit}
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-bold text-primary fs-4">${product.price}</span>
          <Link 
            to={`/producto/${product.id}`} 
            className="btn btn-success rounded-pill px-3 py-2"
          > Ver más
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard