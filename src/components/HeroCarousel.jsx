import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    fade: true
  }

  const products = [
    { id: 1, name: "Vital Plus Calci Shake", image: "/images/calci-shake.png" },
    { id: 2, name: "Power Whey", image: "/images/power-whey.png" },
    { id: 3, name: "Sure Shake Omega 3-6-9", image: "/images/sure-shake.png" },
    { id: 4, name: "Colágeno Hidrolizado", image: "/images/colageno-hidrolizado.png" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="rounded shadow-lg overflow-hidden"
    >
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="position-relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="img-fluid w-100"
              style={{ 
                height: '400px',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div className="position-absolute bottom-0 start-0 p-4 bg-dark bg-opacity-50 w-100">
              <h3 className="text-white fw-bold">{product.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  )
}

export default HeroCarousel