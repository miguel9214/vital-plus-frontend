import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const HealthCalculator = () => {
  const [activeTab, setActiveTab] = useState('imc');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Efecto para animaciones de carga
  useEffect(() => {
    if (isCalculating) {
      const timer = setTimeout(() => setIsCalculating(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isCalculating]);

  const calculateIMC = () => {
    const heightInMeters = height / 100;
    const imc = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    let category = '';
    
    if (imc < 18.5) category = 'Bajo peso';
    else if (imc >= 18.5 && imc < 25) category = 'Peso normal';
    else if (imc >= 25 && imc < 30) category = 'Sobrepeso';
    else category = 'Obesidad';
    
    return {
      value: imc,
      category: category,
      type: 'imc'
    };
  };

  const calculateCalories = () => {
    let bmr = gender === 'male' 
      ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    return {
      value: Math.round(bmr * multipliers[activityLevel]),
      type: 'calories'
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Pequeña demora para la animación
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const calculatedResult = activeTab === 'imc' ? calculateIMC() : calculateCalories();
    setResult(calculatedResult);
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setResult(null);
    setCopied(false);
  };

  const getShareText = () => {
    if (!result) return '';
    
    return result.type === 'imc'
      ? `Mi IMC es ${result.value} (${result.category}). Calculado con Vital Plus Energy. ¡Descubre tus resultados!`
      : `Mi requerimiento calórico diario es ${result.value} kcal. Calculado con Vital Plus Energy. ¡Descubre el tuyo!`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareText());
    setCopied(true);
    Swal.fire({
      icon: 'success',
      title: 'Copiado',
      text: 'El resultado ha sido copiado al portapapeles',
      timer: 2000,
      showConfirmButton: false,
      background: '#f8f9fa',
      backdrop: `
        rgba(0,0,0,0.4)
        url("/images/loader.gif")
        center top
        no-repeat
      `
    });
    
    setTimeout(() => setCopied(false), 3000);
  };

  const shareOnSocial = (platform) => {
    const text = getShareText();
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  // Animaciones
  const tabContentVariants = {
    initial: { y: 10, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(40, 167, 69, 0.5)" }
  };

  return (
    <section className="py-5 bg-gradient" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container">
        <motion.h2 
          className="text-center mb-5 fw-bold display-4 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Calculadora de Salud
        </motion.h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div 
              className="card shadow-lg border-0 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-header bg-white py-3">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <motion.button
                      className={`nav-link ${activeTab === 'imc' ? 'active' : ''}`}
                      onClick={() => setActiveTab('imc')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-speedometer2 me-2"></i> Calculadora IMC
                    </motion.button>
                  </li>
                  <li className="nav-item">
                    <motion.button
                      className={`nav-link ${activeTab === 'calories' ? 'active' : ''}`}
                      onClick={() => setActiveTab('calories')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-fire me-2"></i> Calculadora Calórica
                    </motion.button>
                  </li>
                </ul>
              </div>
              
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      variants={tabContentVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="row g-4">
                        <div className="col-md-6">
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="form-label fw-bold text-muted">Peso (kg)</label>
                            <motion.input
                              type="number"
                              className="form-control form-control-lg border-2"
                              value={weight}
                              onChange={(e) => setWeight(e.target.value)}
                              required
                              min="30"
                              max="300"
                              variants={inputVariants}
                              whileFocus="focus"
                              style={{ borderColor: '#dee2e6' }}
                            />
                            <div className="mt-2">
                              <input 
                                type="range" 
                                className="form-range" 
                                min="30" 
                                max="300" 
                                value={weight || 70}
                                onChange={(e) => setWeight(e.target.value)}
                              />
                            </div>
                          </motion.div>
                        </div>
                        
                        <div className="col-md-6">
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="form-label fw-bold text-muted">Altura (cm)</label>
                            <motion.input
                              type="number"
                              className="form-control form-control-lg border-2"
                              value={height}
                              onChange={(e) => setHeight(e.target.value)}
                              required
                              min="100"
                              max="250"
                              variants={inputVariants}
                              whileFocus="focus"
                              style={{ borderColor: '#dee2e6' }}
                            />
                            <div className="mt-2">
                              <input 
                                type="range" 
                                className="form-range" 
                                min="100" 
                                max="250" 
                                value={height || 170}
                                onChange={(e) => setHeight(e.target.value)}
                              />
                            </div>
                          </motion.div>
                        </div>
                        
                        {activeTab === 'calories' && (
                          <>
                            <div className="col-md-6">
                              <motion.div whileHover={{ scale: 1.01 }}>
                                <label className="form-label fw-bold text-muted">Edad</label>
                                <motion.input
                                  type="number"
                                  className="form-control form-control-lg border-2"
                                  value={age}
                                  onChange={(e) => setAge(e.target.value)}
                                  required
                                  min="10"
                                  max="120"
                                  variants={inputVariants}
                                  whileFocus="focus"
                                  style={{ borderColor: '#dee2e6' }}
                                />
                              </motion.div>
                            </div>
                            
                            <div className="col-md-6">
                              <motion.div whileHover={{ scale: 1.01 }}>
                                <label className="form-label fw-bold text-muted">Género</label>
                                <div className="btn-group w-100" role="group">
                                  <motion.button
                                    type="button"
                                    className={`btn ${gender === 'male' ? 'btn-success' : 'btn-outline-success'}`}
                                    onClick={() => setGender('male')}
                                    whileHover={{ scale: 1.03 }}
                                  >
                                    <i className="bi bi-gender-male me-2"></i> Masculino
                                  </motion.button>
                                  <motion.button
                                    type="button"
                                    className={`btn ${gender === 'female' ? 'btn-success' : 'btn-outline-success'}`}
                                    onClick={() => setGender('female')}
                                    whileHover={{ scale: 1.03 }}
                                  >
                                    <i className="bi bi-gender-female me-2"></i> Femenino
                                  </motion.button>
                                </div>
                              </motion.div>
                            </div>
                            
                            <div className="col-12">
                              <motion.div whileHover={{ scale: 1.01 }}>
                                <label className="form-label fw-bold text-muted">Nivel de Actividad</label>
                                <div className="activity-levels">
                                  {[
                                    { value: 'sedentary', label: 'Sedentario', icon: 'bi bi-person-slash' },
                                    { value: 'light', label: 'Ligero', icon: 'bi bi-person-walk' },
                                    { value: 'moderate', label: 'Moderado', icon: 'bi bi-bicycle' },
                                    { value: 'active', label: 'Activo', icon: 'bi bi-person-run' },
                                    { value: 'veryActive', label: 'Muy Activo', icon: 'bi bi-lightning-charge' }
                                  ].map((item) => (
                                    <motion.div
                                      key={item.value}
                                      className={`activity-card ${activityLevel === item.value ? 'active' : ''}`}
                                      onClick={() => setActivityLevel(item.value)}
                                      whileHover={{ y: -5 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <i className={`${item.icon} activity-icon`}></i>
                                      <span>{item.label}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="text-center mt-5">
                    <motion.button
                      type="submit"
                      className="btn btn-success btn-lg px-5 py-3 rounded-pill fw-bold"
                      whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(40, 167, 69, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isCalculating}
                    >
                      {isCalculating ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Calculando...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-calculator-fill me-2"></i> Calcular Ahora
                        </>
                      )}
                    </motion.button>
                    
                    <motion.button
                      type="button"
                      className="btn btn-outline-secondary btn-lg px-5 py-3 rounded-pill fw-bold ms-3"
                      onClick={resetForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-arrow-repeat me-2"></i> Reiniciar
                    </motion.button>
                  </div>
                </form>
                
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 p-4 bg-white rounded-3 shadow-sm border border-success border-opacity-25"
                    >
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <h3 className="fw-bold text-gradient mb-3">
                            <i className="bi bi-clipboard2-pulse me-2"></i> Tus Resultados
                          </h3>
                          
                          {result.type === 'imc' ? (
                            <div>
                              <div className="d-flex align-items-center mb-3">
                                <h4 className="fw-bold mb-0 me-3">IMC: {result.value}</h4>
                                <span className={`badge rounded-pill py-2 px-3 ${
                                  result.category === 'Bajo peso' ? 'bg-info' :
                                  result.category === 'Peso normal' ? 'bg-success' :
                                  result.category === 'Sobrepeso' ? 'bg-warning' : 'bg-danger'
                                }`}>
                                  {result.category}
                                </span>
                              </div>
                              
                              <div className="progress mb-3" style={{ height: '25px', borderRadius: '12px' }}>
                                <div
                                  className={`progress-bar progress-bar-striped progress-bar-animated ${
                                    result.value < 18.5 ? 'bg-info' :
                                    result.value < 25 ? 'bg-success' :
                                    result.value < 30 ? 'bg-warning' : 'bg-danger'
                                  }`}
                                  role="progressbar"
                                  style={{ width: `${Math.min(100, (result.value / 40) * 100)}%` }}
                                  aria-valuenow={result.value}
                                ></div>
                              </div>
                              
                              <div className="d-flex justify-content-between small text-muted">
                                <span>Bajo peso: &lt;18.5</span>
                                <span>Normal: 18.5-24.9</span>
                                <span>Sobrepeso: 25-29.9</span>
                                <span>Obesidad: ≥30</span>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="d-flex align-items-center mb-3">
                                <h4 className="fw-bold mb-0">Calorías Diarias:</h4>
                                <motion.span 
                                  className="display-5 fw-bold text-success ms-3"
                                  initial={{ scale: 0.8 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: 'spring', stiffness: 300 }}
                                >
                                  {result.value} kcal
                                </motion.span>
                              </div>
                              
                              <div className="row g-3">
                                <div className="col-md-6">
                                  <div className="p-3 bg-light rounded-3">
                                    <h6 className="fw-bold text-success">
                                      <i className="bi bi-droplet-half me-2"></i> Hidratación recomendada
                                    </h6>
                                    <p className="mb-0">
                                      {Math.round(result.value / 30)} - {Math.round(result.value / 20)} ml de agua al día
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="p-3 bg-light rounded-3">
                                    <h6 className="fw-bold text-success">
                                      <i className="bi bi-egg-fried me-2"></i> Equivalente en alimentos
                                    </h6>
                                    <p className="mb-0">
                                      Aprox. {Math.round(result.value / 250)} porciones de 250 kcal cada una
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="col-md-4">
                          <div className="d-flex flex-column gap-3">
                            <motion.button
                              className="btn btn-outline-primary d-flex align-items-center justify-content-center py-3"
                              onClick={copyToClipboard}
                              whileHover={{ y: -3 }}
                            >
                              {copied ? (
                                <>
                                  <i className="bi bi-check2-circle-fill text-success me-2"></i> ¡Copiado!
                                </>
                              ) : (
                                <>
                                  <i className="bi bi-clipboard2-plus me-2"></i> Copiar Resultado
                                </>
                              )}
                            </motion.button>
                            
                            <div className="d-grid gap-2">
                              <motion.button
                                className="btn btn-success d-flex align-items-center justify-content-center py-3"
                                onClick={() => shareOnSocial('whatsapp')}
                                whileHover={{ y: -3 }}
                              >
                                <i className="bi bi-whatsapp me-2"></i> Compartir en WhatsApp
                              </motion.button>
                              
                              <motion.button
                                className="btn btn-primary d-flex align-items-center justify-content-center py-3"
                                onClick={() => shareOnSocial('facebook')}
                                whileHover={{ y: -3 }}
                              >
                                <i className="bi bi-facebook me-2"></i> Compartir en Facebook
                              </motion.button>
                              
                              <motion.button
                                className="btn btn-info text-white d-flex align-items-center justify-content-center py-3"
                                onClick={() => shareOnSocial('twitter')}
                                whileHover={{ y: -3 }}
                              >
                                <i className="bi bi-twitter me-2"></i> Compartir en Twitter
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-4 p-4 bg-white rounded-3 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h5 className="fw-bold text-gradient mb-3">
                <i className="bi bi-info-circle-fill me-2"></i> Información Importante
              </h5>
              
              {activeTab === 'imc' ? (
                <div className="row">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 mb-3">
                      <h6 className="fw-bold text-success">
                        <i className="bi bi-check-circle me-2"></i> Sobre el IMC
                      </h6>
                      <p className="mb-0">
                        El Índice de Masa Corporal es una medida útil pero no considera masa muscular. Consulta a un profesional para una evaluación completa.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 mb-3">
                      <h6 className="fw-bold text-success">
                        <i className="bi bi-heart-pulse me-2"></i> Recomendaciones
                      </h6>
                      <p className="mb-0">
                        Mantén un IMC saludable combinando alimentación balanceada con ejercicio regular y descanso adecuado.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 mb-3">
                      <h6 className="fw-bold text-success">
                        <i className="bi bi-lightbulb me-2"></i> ¿Cómo usar esta información?
                      </h6>
                      <p className="mb-0">
                        Estas calorías son una estimación. Ajusta según tus objetivos (ganar, mantener o perder peso) y consulta a un nutricionista.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 mb-3">
                      <h6 className="fw-bold text-success">
                        <i className="bi bi-activity me-2"></i> Distribución recomendada
                      </h6>
                      <p className="mb-0">
                        Para una dieta balanceada: 45-65% carbohidratos, 20-35% grasas y 10-35% proteínas.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        .text-gradient {
          background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .activity-levels {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
        }
        .activity-card {
          padding: 15px 10px;
          border-radius: 10px;
          background: #f8f9fa;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #dee2e6;
        }
        .activity-card.active {
          background: #28a745;
          color: white;
          border-color: #28a745;
        }
        .activity-card.active .activity-icon {
          color: white;
        }
        .activity-icon {
          font-size: 1.5rem;
          color: #28a745;
          display: block;
          margin-bottom: 5px;
        }
        .nav-pills .nav-link.active {
          background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
          color: white;
        }
        .form-range::-webkit-slider-thumb {
          background: #28a745;
        }
        .form-range::-moz-range-thumb {
          background: #28a745;
        }
      `}</style>
    </section>
  );
};

export default HealthCalculator;