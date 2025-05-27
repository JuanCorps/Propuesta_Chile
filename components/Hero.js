import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showSecondSlide, setShowSecondSlide] = useState(false);

  const steps = [
    {
      description: 'Creación del Departamento de Gestión Humana',
    },
    {
      description: 'Diagnóstico interno (encuestas y entrevistas)',
    },
    {
      description: 'Rediseño procesos (selección, desempeño)',
    },
    {
      description: 'Cultura, liderazgo, salud mental, bienestar',
    },
    {
      description: 'Evaluación del impacto con indicadores reales',
    },
  ];

  const handleScrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
      setShowSecondSlide(false); // Ensure the first slide is shown
    }
  };

  return (
    <section id="hero" className="py-[400px] md:py-[400px] lg:py-[400px] bg-black text-white text-center font-montserrat relative">
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${showSecondSlide ? 'hidden' : ''}`} style={{ top: '-10%' }}>
        <div className="max-w-full px-4 sm:max-w-2xl md:max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
            Exportamos más que productos
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Reconocemos que no basta con exportar productos: queremos exportar confianza, innovación y propósito.
          </p>
          <button
            className="bg-white text-black font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 mt-8"
            onClick={() => setShowSecondSlide(true)}
          >
            Estrategia
          </button>
        </div>
      </div>

      {showSecondSlide && (
        <div id="second-slide" className="text-white text-center font-montserrat">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 leading-snug"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Por eso creamos: <br /> <br /> <span className="text-green-500">PACIFIC EVOLUCIONA</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 px-4 sm:px-8 lg:px-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Una hoja de ruta que nos lleva desde la mejora interna hasta el impacto global.
          </motion.p>
          <div className="relative px-4 sm:px-8 lg:px-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <motion.div
                  className="ml-8 bg-gray-800 p-6 rounded-lg shadow-lg w-full hover:bg-gray-700 transition duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">Etapa {index + 1}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
