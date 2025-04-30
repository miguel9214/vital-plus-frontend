import { createContext, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Calci Shake",
      image: "calci-shake.png",
      nutritionImage: "calci-shake-table.png",
      description: "Fórmula avanzada con colágeno hidrolizado y calcio para fortalecer huesos, articulaciones y mejorar la salud muscular",
      benefits: [
        "Combina proteínas de alta calidad con colágeno tipo I y II",
        "Alto contenido de calcio para densidad ósea",
        "Mejora la elasticidad de la piel y tejidos",
        "Promueve recuperación muscular acelerada",
        "Fácil digestión y absorción rápida"
      ],
      highlights: [
        "✓ 15g de proteína por porción",
        "✓ 500mg de calcio elemental",
        "✓ 5g de colágeno hidrolizado",
        "✓ Enriquecido con vitamina D",
        "✓ Rico sabor a vainilla"
      ],
      usage: "Mezclar 1 medida (30g) en 250ml de agua o leche. Consumir preferentemente en el desayuno o como snack post-entrenamiento.",
      price: 115000,
      contains: "Proteína de leche, colágeno hidrolizado, carbonato de calcio, vitamina D3, magnesio, zinc, vitaminas del complejo B",
      featured: true,
      nutritionalFacts: {
        servingSize: "30g (2 cucharadas dosificadoras)",
        servingsPerContainer: 49,
        calories: {
          per100g: 372,
          perServing: 112
        },
        nutrients: [
          { name: "Calorías (Kcal)", per100g: "372", perServing: "112" },
          { name: "Grasa Total", per100g: "0g", perServing: "0g" },
          { name: "Grasa poliinsaturada", per100g: "0g", perServing: "0g" },
          { name: "Grasa Saturada", per100g: "0g", perServing: "0g" },
          { name: "Grasa Trans", per100g: "0g", perServing: "0g" },
          { name: "Carbohidratos totales", per100g: "43g", perServing: "13g" },
          { name: "Fibra dietaria", per100g: "0g", perServing: "0g" },
          { name: "Azúcares totales", per100g: "0g", perServing: "0g" },
          { name: "Azúcares añadidos", per100g: "0g", perServing: "0g" },
          { name: "Proteína", per100g: "50g", perServing: "15g" },
          { name: "Sodio", per100g: "0mg", perServing: "0mg" },
          { name: "Calcio", per100g: "1667mg", perServing: "500mg" },
          { name: "Zinc", per100g: "37mg", perServing: "11mg" },
          { name: "Vitamina D", per100g: "2000UI", perServing: "600UI" },
          { name: "Biotina", per100g: "100Ug", perServing: "30Ug" },
          { name: "Vitamina E", per100g: "30mg", perServing: "9mg" },
          { name: "Vitamina C", per100g: "277mg", perServing: "83mg" },
          { name: "Magnesio", per100g: "1034mg", perServing: "310mg" },
          { name: "Colágeno Marino", per100g: "17g", perServing: "5g" }
        ],
        additionalInfo: "NO ES FUENTE SIGNIFICATIVA DE VITAMINA A, HIERRO Y VITAMINA B1.",
        keyNutrients: [
          { name: "Proteína", perServing: "15g", importance: "Reparación muscular" },
          { name: "Calcio", perServing: "500mg", importance: "Salud ósea" },
          { name: "Colágeno", perServing: "5g", importance: "Articulaciones y piel" },
          { name: "Vitamina D", perServing: "600UI", importance: "Absorción de calcio" }
        ],
        allergens: "Contiene leche. Puede contener trazas de soja."
      }
    },
    {
      id: 2,
      name: "Power Whey",
      image: "power-whey.png",
      nutritionImage: "power-whey-table.png",
      description: "Proteína premium de suero de leche para maximizar el desarrollo muscular y la recuperación post-entrenamiento",
      benefits: [
        "24g de proteína por servicio para construcción muscular",
        "Perfil completo de aminoácidos esenciales",
        "Absorción rápida - ideal para post-entrenamiento",
        "Bajo en lactosa y fácil digestión",
        "Mezcla cremosa y deliciosa en múltiples sabores"
      ],
      highlights: [
        "✓ 24g de proteína por scoop",
        "✓ 5.5g de BCAA naturales",
        "✓ 4g de glutamina por porción",
        "✓ Menos de 1g de azúcar",
        "✓ Enzimas digestivas incluidas"
      ],
      usage: "Mezclar 1 scoop (30g) con 250-300ml de agua o leche. Consumir inmediatamente después del entrenamiento o entre comidas como snack proteico.",
      price: 115000,
      contains: "Concentrado de proteína de suero de leche, cacao en polvo, lecitina de soja, enzimas digestivas (lactasa), stevia",
      featured: true,
      nutritionalFacts: {
        servingSize: "1 Vaso (8g) + 250 ml de agua / 3 Cucharadas dosificadoras (17g)",
        servingsPerContainer: 29,
        calories: {
          per100ml: "6",
          perServing: "177"
        },
        nutrients: [
          { name: "Calorías (Kcal)", per100ml: "6", perServing: "177" },
          { name: "Grasa Total", per100ml: "0.03g", perServing: "1.0g" },
          { name: "Grasa Saturada", per100ml: "0.3g", perServing: "0.6g" },
          { name: "Carbohidratos Totales", per100ml: "3.3g", perServing: "10g" },
          { name: "Azúcares Totales", per100ml: "1.3g", perServing: "4g" },
          { name: "Azúcares Añadidos", per100ml: "0.1g", perServing: "3g" },
          { name: "Proteína", per100ml: "10g", perServing: "30g" },
          { name: "Vitamina A", per100ml: "20μg", perServing: "60μg" },
          { name: "Calcio", per100ml: "25mg", perServing: "75mg" },
          { name: "Hierro", per100ml: "1mg", perServing: "3mg" },
          { name: "Vitamina D3", per100ml: "15UI", perServing: "45UI" },
          { name: "Vitamina E", per100ml: "0.23mg", perServing: "0.7mg" },
          { name: "Vitamina B1", per100ml: "0.03mg", perServing: "0.09mg" },
          { name: "Vitamina B2", per100ml: "0.03mg", perServing: "0.09mg" },
          { name: "Vitamina B3", per100ml: "0.37mg", perServing: "1.13mg" },
          { name: "Ácido Pantoténico", per100ml: "0.13mg", perServing: "0.38mg" },
          { name: "Vitamina B6", per100ml: "0.03mg", perServing: "0.1mg" },
          { name: "Vitamina B9", per100ml: "0.17μg", perServing: "0.5μg" },
          { name: "Fósforo", per100ml: "12mg", perServing: "36mg" },
          { name: "Yodo", per100ml: "10μg", perServing: "31μg" },
          { name: "Zinc", per100ml: "0.03mg", perServing: "0.08mg" },
          { name: "Manganeso", per100ml: "0.03mg", perServing: "0.1mg" },
          { name: "Selenio", per100ml: "1.8μg", perServing: "5.3μg" },
          { name: "Biotina", per100ml: "5μg", perServing: "15μg" }
        ],
        additionalNutritionalInfo: [
          { name: "Glutamina", value: "3000mg" },
          { name: "Creatina monohidrato", value: "3000mg" }
        ],
        additionalInfo: "No es fuente significativa de Grasa Trans, Fibra Dietaria y Sodio.",
        keyNutrients: [
          { name: "Proteína", perServing: "30g", importance: "Reparación y crecimiento muscular" },
          { name: "Glutamina", perServing: "3000mg", importance: "Salud intestinal e inmunidad" },
          { name: "Creatina", perServing: "3000mg", importance: "Rendimiento muscular y fuerza" }
        ],
        allergens: "Contiene leche y soja. Puede contener trazas de nueces."
      }
    },
    {
      id: 3,
      name: "Sure Shake Omega 3-6-9",
      image: "sure-shake.png",
      nutritionImage: "sure-shake-table.png",
      description: "Suplemento nutricional completo con ácidos grasos esenciales Omega 3-6-9, vitaminas y minerales para un bienestar integral",
      benefits: [
        "Fórmula completa con 48g de proteína por 100g",
        "Fortificado con 29 vitaminas y minerales esenciales",
        "Contiene HMB y DHA para desarrollo muscular y cognitivo",
        "Mejora la salud cardiovascular y función cerebral",
        "Promueve recuperación muscular y energía sostenida",
        "Sin azúcares añadidos ni grasas trans"
      ],
      highlights: [
        "✓ 12g de proteína por porción",
        "✓ 22 vitaminas y minerales",
        "✓ 100mg de DHA (Omega-3)",
        "✓ 100mg de HMB para músculos",
        "✓ 0g de azúcar añadido"
      ],
      usage: "Mezclar 1½ cucharadas dosificadoras (25g) en 250ml de agua o leche. Consumir 1-2 veces al día, preferiblemente en el desayuno o post-entrenamiento.",
      price: 115000,
      contains: "Proteína de alta calidad, Omega 3-6-9, vitaminas A, C, D, E, complejo B, minerales esenciales, HMB, DHA, L-Triptófano",
      featured: true,
      nutritionalFacts: {
        servingSize: "1½ Cucharada dosificadora (25g)",
        servingsPerContainer: 59,
        calories: {
          per100g: 352,
          perServing: 91
        },
        nutrients: [
          { name: "Calorías (Kcal)", per100g: "352", perServing: "91" },
          { name: "Grasa total", per100g: "4.00g", perServing: "1.5g" },
          { name: "Grasa poliinsaturada", per100g: "0g", perServing: "0g" },
          { name: "Grasa saturada", per100g: "0g", perServing: "0g" },
          { name: "Grasa trans", per100g: "0mg", perServing: "0mg" },
          { name: "Carbohidratos totales", per100g: "21g", perServing: "5.25g" },
          { name: "Fibra dietaria", per100g: "1.0g", perServing: "0.25g" },
          { name: "Azúcares totales", per100g: "0g", perServing: "0g" },
          { name: "Azúcares añadidos", per100g: "0g", perServing: "0g" },
          { name: "Proteína", per100g: "48g", perServing: "12g" },
          { name: "Sodio", per100g: "0mg", perServing: "0mg" },
          { name: "Vitamina A", per100g: "2942UI", perServing: "750UI" },
          { name: "Hierro", per100g: "20mg", perServing: "5.0mg" },
          { name: "Calcio", per100g: "2.0g", perServing: "500mg" },
          { name: "Ácido Fólico", per100g: "400mcg", perServing: "100mcg" },
          { name: "Ácido Pantoténico", per100g: "5.0mg", perServing: "1.2mg" },
          { name: "Vitamina B3 (Niacina)", per100g: "12mg", perServing: "3.0mg" },
          { name: "Vitamina B1", per100g: "1.2mg", perServing: "0.30mg" },
          { name: "Vitamina B2", per100g: "1.2mg", perServing: "0.30mg" },
          { name: "Vitamina B6", per100g: "1.2mg", perServing: "0.30mg" },
          { name: "Vitamina E", per100g: "18UI", perServing: "4.5UI" },
          { name: "Vitamina D3", per100g: "480UI", perServing: "120UI" },
          { name: "Vitamina B9", per100g: "58.8Ug", perServing: "14.7Ug" },
          { name: "Vitamina B12", per100g: "3.0mcg", perServing: "0.75mcg" },
          { name: "Vitamina C", per100g: "240mg", perServing: "60mg" },
          { name: "Zinc", per100g: "60mg", perServing: "15mg" },
          { name: "Colágeno", per100g: "12g", perServing: "3g" },
          { name: "Yodo", per100g: "120mcg", perServing: "30mcg" },
          { name: "Magnesio", per100g: "320mg", perServing: "80mg" },
          { name: "Cobre", per100g: "800mcg", perServing: "200mcg" },
          { name: "Selenio", per100g: "60mcg", perServing: "15mcg" },
          { name: "Potasio", per100g: "2000mg", perServing: "500mg" },
          { name: "B-metil-B-metilbutirato (HMB)", per100g: "400mg", perServing: "100mg" },
          { name: "Aceite De Pescado (DHA)", per100g: "400mg", perServing: "100mg" },
          { name: "L-Triptófano", per100g: "80mg", perServing: "20mg" },
          { name: "Cromo", per100g: "80mcg", perServing: "20mcg" }
        ],
        additionalInfo: "Este Producto es Un Complemento Alimenticio y No Debe ser usado como Sustituto de una Dieta Equilibrada",
        keyNutrients: [
          { name: "Proteína", perServing: "12g", importance: "Construcción y reparación muscular" },
          { name: "DHA (Omega-3)", perServing: "100mg", importance: "Salud cerebral y cardiovascular" },
          { name: "HMB", perServing: "100mg", importance: "Prevención del catabolismo muscular" },
          { name: "Vitamina D3", perServing: "120UI", importance: "Salud ósea y sistema inmunológico" },
          { name: "Complejo B", perServing: "Variado", importance: "Producción de energía y metabolismo" }
        ],
        allergens: "Puede contener trazas de leche, soja y pescado."
      }
    },
    {
      id: 4,
      name: "Colágeno Marino Hidrolizado ",
      image: "colageno-hidrolizado.png",
      nutritionImage: "colageno-table.png",
      description: "Fórmula avanzada de colágeno hidrolizado tipo I y III para rejuvenecimiento celular y salud articular",
      benefits: [
        "Péptidos de colágeno bioactivos de alta absorción",
        "Mejora visiblemente la elasticidad de la piel en 8 semanas",
        "Fortalece uñas y cabello desde la raíz",
        "Alivia dolores articulares y mejora movilidad",
        "Sin sabor y fácil de incorporar en cualquier bebida"
      ],
      highlights: [
        "✓ 10g de colágeno hidrolizado por porción",
        "✓ Tipo I y III para piel y articulaciones",
        "✓ Enriquecido con vitamina C",
        "✓ Péptidos de bajo peso molecular",
        "✓ 0g de azúcar y sin aditivos"
      ],
      usage: "Mezclar 10g (1 cucharada) en agua, jugo, café o batido. Consumir preferentemente en ayunas o antes de dormir para máxima absorción.",
      price: 115000,
      contains: "Colágeno hidrolizado tipo I y III, ácido ascórbico (vitamina C), extracto de bambú (silicio)",
      featured: true,
      nutritionalFacts: {
        servingSize: "1½ Cucharada dosificadora (25g)",
        servingsPerContainer: 59,
        calories: {
          per100g: 352,
          perServing: 91
        },
        nutrients: [
          { name: "Calorías (Kcal)", per100g: "352", perServing: "91" },
          { name: "Grasa total", per100g: "4.00g", perServing: "1.5g" },
          { name: "Grasa poliinsaturada", per100g: "0g", perServing: "0g" },
          { name: "Grasa saturada", per100g: "0g", perServing: "0g" },
          { name: "Grasa trans", per100g: "0mg", perServing: "0mg" },
          { name: "Carbohidratos totales", per100g: "21g", perServing: "7g" },
          { name: "Fibra dietaria", per100g: "1.0g", perServing: "0.4g" },
          { name: "Azúcares totales", per100g: "0g", perServing: "0g" },
          { name: "Azúcares añadidos", per100g: "0g", perServing: "0g" },
          { name: "Proteína", per100g: "48g", perServing: "12g" },
          { name: "Sodio", per100g: "0mg", perServing: "0mg" },
          { name: "Vitamina A", per100g: "2942UI", perServing: "750UI" },
          { name: "Hierro", per100g: "20mg", perServing: "5.0mg" },
          { name: "Calcio", per100g: "2.0g", perServing: "500mg" },
          { name: "Ácido Fólico", per100g: "400mcg", perServing: "100mcg" },
          { name: "Ácido Pantoténico", per100g: "5.0mg", perServing: "1.2mg" },
          { name: "Vitamina B3 (Niacina)", per100g: "12mg", perServing: "3.0mg" },
          { name: "Vitamina B1", per100g: "1.2mg", perServing: "0.30mg" },
          { name: "Vitamina B2", per100g: "1.2mg", perServing: "0.30mg" },
          { name: "Vitamina B6", per100g: "1.2mg", perServing: "0.30mg" },
          { name: "Vitamina E", per100g: "18UI", perServing: "4.5UI" },
          { name: "Vitamina D3", per100g: "480UI", perServing: "120UI" },
          { name: "Vitamina B9", per100g: "58.8Ug", perServing: "14.7Ug" },
          { name: "Vitamina B12", per100g: "2.0mcg", perServing: "0.50mcg" },
          { name: "Vitamina C", per100g: "88mg", perServing: "22mg" },
          { name: "Zinc", per100g: "12mg", perServing: "3.0mg" },
          { name: "Yodo", per100g: "120mcg", perServing: "30mcg" },
          { name: "Magnesio", per100g: "320mg", perServing: "80mg" },
          { name: "Cobre", per100g: "800mcg", perServing: "200mcg" },
          { name: "Selenio", per100g: "60mcg", perServing: "15mcg" },
          { name: "Potasio", per100g: "2000mg", perServing: "500mg" },
          { name: "Vitamina K", per100g: "60mcg", perServing: "15mcg" },
          { name: "B-metil-B-metilbutirato (HMB)", per100g: "400mg", perServing: "100mg" },
          { name: "Aceite de Pescado (DHA)", per100g: "400mg", perServing: "100mg" },
          { name: "L-Triptófano", per100g: "80mg", perServing: "20mg" },
          { name: "Cromo", per100g: "80mcg", perServing: "20mcg" }
        ],
        additionalInfo: "Este Producto es Un Complemento Alimenticio y No Debe ser usado como Sustituto de una Dieta Equilibrada",
        keyNutrients: [
          { name: "Colágeno Hidrolizado", perServing: "10g", importance: "Regeneración de tejidos" },
          { name: "Vitamina C", perServing: "22mg", importance: "Síntesis de colágeno" },
          { name: "Silicio", perServing: "20mg", importance: "Fortalecimiento óseo" }
        ],
        allergens: "Libre de alérgenos comunes. Apto para veganos (excepto por el colágeno)."
      }
    }
  ];

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  const featuredProducts = products.filter(product => product.featured);

  const formatPriceCOP = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      featuredProducts, 
      getProductById,
      formatPriceCOP 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);