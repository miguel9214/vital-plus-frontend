import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const location = useLocation();
  
  // Efecto para scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      {/* Hero Section */}
      <section className="contact-hero py-5 bg-success bg-opacity-10">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.h1 
                className="display-4 fw-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Contáctanos
              </motion.h1>
              <motion.p 
                className="lead mb-4 fs-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Estamos aquí para ayudarte. ¡Hablemos sobre cómo podemos mejorar tu bienestar!
              </motion.p>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <img 
                  src="/images/contact-hero.jpg" 
                  alt="Equipo de Vital Plus Energy" 
                  className="img-fluid rounded shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle mx-auto mb-3">
                  <FaMapMarkerAlt size={24} />
                </div>
                <h4 className="fw-bold">Ubicación</h4>
                <p className="text-muted">Carrera 15a 9 61, Aguachica, Colombia</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-success mt-auto"
                >
                  Ver en mapa
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle mx-auto mb-3">
                  <FaPhoneAlt size={24} />
                </div>
                <h4 className="fw-bold">Teléfono</h4>
                <p className="text-muted">+57 317 851 9427</p>
                <a 
                  href="tel:+573178519427" 
                  className="btn btn-outline-success mt-auto"
                >
                  Llamar ahora
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle mx-auto mb-3">
                  <FaClock size={24} />
                </div>
                <h4 className="fw-bold">Horario</h4>
                <p className="text-muted">Lunes a Viernes: 8am - 6pm<br />Sábados: 9am - 2pm</p>
                <button className="btn btn-outline-success mt-auto">
                  Agendar cita
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div 
                className="card border-0 shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="row g-0">
                  <div className="col-md-6 d-none d-md-block">
                    <img 
                      src="/images/contact-form.jpg" 
                      alt="Contacta a Vital Plus Energy" 
                      className="img-fluid h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 p-md-5">
                      <h3 className="fw-bold mb-4">Escríbenos</h3>
                      <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Nombre completo</label>
                          <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Correo electrónico</label>
                          <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Teléfono</label>
                          <input type="tel" className="form-control" id="phone" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">Mensaje</label>
                          <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <motion.button
                          type="submit"
                          className="btn btn-success w-100 py-3"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Enviar mensaje
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
          background-color: #25D366;
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
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(255, 255, 255, 1) 100%);
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

export default ContactPage;