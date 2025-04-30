import { FaWhatsapp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const WhatsAppButton = ({ product }) => {
  const handleClick = () => {
    const phoneNumber = '573178519427'; // Reemplaza con tu número
    const message = `Hola, estoy interesado en comprar ${product.name} (${product.price ? '$' + new Intl.NumberFormat('es-CO').format(product.price) : ''}). ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    Swal.fire({
      title: `¿Comprar ${product.name}?`,
      text: `Serás redirigido a WhatsApp para completar tu pedido`,
      imageUrl: `/images/${product.image}`,
      imageHeight: 100,
      imageAlt: product.name,
      showCancelButton: true,
      confirmButtonColor: '#25D366',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Ir a WhatsApp',
      cancelButtonText: 'Seguir viendo',
      background: '#f8f9fa',
      backdrop: `
        rgba(0,0,0,0.4)
        url("/images/loader.gif")
        center top
        no-repeat
      `
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(whatsappUrl, '_blank');
      }
    });
  };

  return (
    <motion.button 
      onClick={handleClick}
      className="btn btn-success w-100 py-3 fw-bold rounded-pill mt-3"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <FaWhatsapp className="me-2 fs-5" /> Comprar por WhatsApp
    </motion.button>
  );
};

export default WhatsAppButton;