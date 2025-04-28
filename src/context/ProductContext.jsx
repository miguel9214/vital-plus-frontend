import { createContext, useContext } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Vital Plus Calci Shake",
      image: "calci-shake.png",
      description: "Alimento en polvo granulado a base de leche y proteína vegetal con colágeno",
      benefits: [
        "Fortalece huesos y músculos",
        "Mejora la salud articular",
        "Fuente de calcio y proteínas",
        "Ayuda a la recuperación muscular"
      ],
      usage: "Tomar 1 medida diaria disuelta en agua o leche",
      price: 29.99,
      contains: "Contiene edulcorantes",
      featured: true
    },
    {
      id: 2,
      name: "Power Whey",
      image: "power-whey.png",
      description: "Proteína de suero de leche de alta calidad",
      benefits: [
        "Ayuda al crecimiento muscular",
        "Recuperación post-entrenamiento",
        "Alto valor biológico",
        "Bajo en lactosa"
      ],
      usage: "Mezclar 1 scoop con 250ml de agua o leche",
      price: 39.99,
      contains: "Sabor a vainilla",
      featured: true
    },
    {
      id: 3,
      name: "Sure Shake Omega 3-6-9",
      image: "sure-shake.png",
      description: "Complejo de ácidos grasos esenciales",
      benefits: [
        "Mejora la salud cardiovascular",
        "Apoya la función cerebral",
        "Promueve piel saludable",
        "Reduce inflamación"
      ],
      usage: "Tomar 1 cucharada al día con alimentos",
      price: 24.99,
      contains: "Derivado de aceites vegetales",
      featured: true
    },
    {
      id: 4,
      name: "Colágeno Hidrolizado",
      image: "colageno-hidrolizado.png",
      description: "Suplemento de colágeno tipo I y III",
      benefits: [
        "Mejora la elasticidad de la piel",
        "Fortalece uñas y cabello",
        "Protege las articulaciones",
        "Ayuda a reducir arrugas"
      ],
      usage: "Diluir 10g en agua, jugo o batido",
      price: 34.99,
      contains: "Sin sabor, fácil de mezclar",
      featured: true
    }
  ]

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
  }

  const featuredProducts = products.filter(product => product.featured)

  return (
    <ProductContext.Provider value={{ products, featuredProducts, getProductById }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)