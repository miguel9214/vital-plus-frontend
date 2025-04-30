import { motion } from 'framer-motion';

const NutritionTable = ({ product }) => {
  if (!product.nutritionalFacts) return null;

  return (
    <motion.div 
      className="mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card border-0 shadow-lg overflow-hidden">
        <div className="card-header bg-success text-white py-3">
          <h3 className="mb-0 d-flex align-items-center">
            <i className="bi bi-clipboard2-pulse fs-4 me-2"></i>
            Información Nutricional - {product.name}
          </h3>
        </div>
        
        <div className="card-body p-0">
          {/* Imagen de la tabla nutricional */}
          {product.nutritionImage && (
            <div className="text-center p-4 bg-light">
              <img 
                src={`/images/${product.nutritionImage}`} 
                alt={`Tabla nutricional de ${product.name}`}
                className="img-fluid rounded shadow-sm border"
                style={{ maxHeight: '600px' }}
              />
              <p className="text-muted small mt-3">
                <i className="bi bi-info-circle me-1"></i>
                Este producto es un complemento alimenticio y no debe ser usado como sustituto de una dieta equilibrada.
              </p>
            </div>
          )}
          
          {/* Resumen nutricional destacado */}
          <div className="row g-0">
            <div className="col-lg-6 p-4">
              <div className="pe-lg-3">
                <h4 className="text-success mb-3 d-flex align-items-center">
                  <i className="bi bi-star-fill me-2"></i>
                  Beneficios Clave
                </h4>
                <ul className="list-unstyled">
                  {product.highlights?.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="mb-2 ps-3 position-relative"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <i className="bi bi-check-circle-fill text-success position-absolute" style={{ left: 0, top: '4px' }}></i>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                
                <h4 className="text-success mt-4 mb-3 d-flex align-items-center">
                  <i className="bi bi-journal-check me-2"></i>
                  Modo de Uso Recomendado
                </h4>
                <p className="ps-3">{product.usage}</p>
              </div>
            </div>
            
            <div className="col-lg-6 bg-light p-4">
              <div className="ps-lg-3">
                <h4 className="text-success mb-3 d-flex align-items-center">
                  <i className="bi bi-nutrition me-2"></i>
                  Nutrientes Destacados
                </h4>
                <div className="table-responsive">
                  <table className="table table-sm table-hover align-middle">
                    <thead className="table-success">
                      <tr>
                        <th width="30%">Nutriente</th>
                        <th width="25%">Por Porción</th>
                        <th width="45%">Beneficio Principal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nutritionalFacts.keyNutrients.map((nutrient, index) => (
                        <tr key={index}>
                          <td className="fw-bold">{nutrient.name}</td>
                          <td>{nutrient.perServing}</td>
                          <td className="small">{nutrient.importance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="alert alert-warning mt-4">
                  <h5 className="alert-heading d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Importante
                  </h5>
                  <p className="mb-1 small">
                    <strong>Contiene:</strong> {product.contains}
                  </p>
                  {product.nutritionalFacts.allergens && (
                    <p className="mb-0 small">
                      <strong>Alérgenos:</strong> {product.nutritionalFacts.allergens}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NutritionTable;