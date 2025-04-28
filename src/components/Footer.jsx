import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <motion.h5 
              className="text-success mb-3 fw-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Vital Plus Energy
            </motion.h5>
            <motion.p 
              className="small"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Impulsa tu bienestar. Potencia tu vida con Vital Plus Energy.
            </motion.p>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <motion.h5 
              className="text-success mb-3 fw-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Contacto
            </motion.h5>
            <motion.ul 
              className="list-unstyled small"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <li className="mb-2"><i className="bi bi-envelope me-2"></i>info@vitalplus.com</li>
              <li className="mb-2"><i className="bi bi-phone me-2"></i>+54 9 11 1234-5678</li>
              <li><i className="bi bi-geo-alt me-2"></i>Buenos Aires, Argentina</li>
            </motion.ul>
          </div>
          
          <div className="col-md-4">
            <motion.h5 
              className="text-success mb-3 fw-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Síguenos
            </motion.h5>
            <motion.div 
              className="d-flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {['facebook', 'instagram', 'tiktok'].map((social, index) => (
                <motion.a 
                  key={social}
                  href="#" 
                  className="text-white fs-4"
                  whileHover={{ y: -3, color: '#28a745' }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`bi bi-${social}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.hr 
          className="my-4 opacity-10"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        <motion.div 
          className="text-center small"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="mb-0">&copy; {currentYear} Vital Plus Energy. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer