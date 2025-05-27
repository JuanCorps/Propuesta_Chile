import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Diagnostico from '../components/Deseo';
import Propuesta from '../components/Propuesta';
import Inspiracion from '../components/Inspiracion';
import Accion from '../components/Indicadores';
import LlamadoAccion from '../components/LlamadoAccion';

const slides = [
  {
    video: '/pacific-assets/videoL.mp4',
    text: 'Cultura que crece con los bosques.\nConfianza, propósito y sostenibilidad.',
    style: {
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      backgroundBlendMode: 'overlay',
    },
  },
  {
    video: '/pacific-assets/video3.mp4',
    text: 'Personas que construyen futuro,\ncon propósito y raíz.',
    noButton: true,
    style: {
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      backgroundBlendMode: 'overlay',
    },
  },
  {
    video: '/pacific-assets/videoMundo.mp4',
    text: 'Desde Chile al mundo:\nsostenibilidad con propósito.',
    noButton: true,
    style: {
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      backgroundBlendMode: 'overlay',
    },
  },
];

export default function Pacific() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [showSecondSlide, setShowSecondSlide] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentCarouselIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000); 

    return () => clearInterval(carouselInterval);
  }, []);

  const handleIniciemosClick = () => {
    const secondContainer = document.getElementById('bienvenido');
    if (secondContainer) {
      secondContainer.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMessage(false);
    setShowSecondSlide(false);

    setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowSecondSlide(true);
      }, 2000);
    }, 500);
  };

  return (
    <div className="font-sans bg-black text-white">
      <nav className="border-b border-white bg-black p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="https://pacificforest.cl/" target="_blank" rel="noopener noreferrer">
            <img src="/backgrounds/logo_footer.svg" alt="Logo Pacific Forest" className="h-8" />
          </a>
          <a href="/" className="text-white text-sm font-medium hover:underline">
            Inicio
          </a>
        </div>
        <div className="flex gap-6">
          <a href="/contacto" className="text-white text-sm font-medium hover:underline">
            Contacto
          </a>
        </div>
      </nav>

      <div className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center transition-opacity duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={slide.style}
          >
            {slide.video ? (
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                src={slide.video}
                autoPlay
                loop
                muted
              ></video>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            )}
            <div className="absolute bottom-20 left-10 text-left max-w-xl p-4">
              <h1 className="text-4xl font-extrabold text-white leading-tight">
                {slide.text.split('\n')[0]}
              </h1>
              <p className="text-lg font-light text-white mt-2">
                {slide.text.split('\n')[1]}
              </p>
              {!slide.noButton && (
                <button
                  onClick={handleIniciemosClick}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold text-sm rounded-full shadow-lg hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                  ¡Iniciemos!
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        id="bienvenido"
        className="w-full min-h-[70vh] flex flex-col lg:flex-row justify-between bg-black text-white relative shadow-lg rounded-lg p-6"
      >
        <motion.div
          className="flex flex-col justify-center items-center w-full lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${showMessage && !showSecondSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <h2 className="text-5xl font-semibold text-white mt-4">
              Bienvenido a Pacific Forest
            </h2>
            <p className="text-xl font-light text-gray-300 mt-4 text-justify max-w-2xl">
              Explora la sostenibilidad y el liderazgo empático.
            </p>
          </div>

          <div
            className={`absolute inset-0 flex flex-col items-start justify-center transition-opacity duration-500 ease-in-out px-10 transform ${showSecondSlide ? 'opacity-100 z-10 scale-100 translate-y-0' : 'opacity-0 z-0 scale-95 translate-y-5'}`}
          >
            <h2 className="text-5xl font-semibold text-white mt-4">
              Evolucionar es natural.
            </h2>
            <div className="text-xl font-light text-gray-300 mt-4 text-justify max-w-2xl space-y-4">
              <p>
                En un mundo que exige sostenibilidad, liderazgo empático y bienestar real,
                en Pacific Forest decidimos dar un paso firme hacia el futuro.
              </p>
              <p>
                Lo hacemos con una estrategia que busca capacitar al 100% de los líderes de equipo
                en el nuevo modelo de evaluación y retroalimentación continua.
              </p>
            </div>
          </div>
        </motion.div>

        {showSecondSlide && (
          <motion.div
            className="flex flex-col justify-center items-center w-full lg:w-[500px] mt-6 bg-black/80 backdrop-blur p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[500px] h-[300px] overflow-hidden rounded-lg shadow-md">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentCarouselIndex * 500}px)`, width: '1500px' }}
              >
                {[21, 22, 24].map((num, i) => (
                  <div
                    key={i}
                    className="w-[500px] h-[300px] flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={`/pacific-assets/imagen${num}.png`}
                      alt={`Imagen ${num}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentCarouselIndex === index ? 'bg-white scale-110' : 'bg-gray-500'
                  }`}
                  onClick={() => setCurrentCarouselIndex(index)}
                ></button>
              ))}
            </div>
          </motion.div>
        )}
        {showSecondSlide && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              onClick={() => {
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="animate-bounce text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      <Hero />
      <Diagnostico />
      <Propuesta />
      <Inspiracion />
      <Accion />
      <LlamadoAccion />
    </div>
  );
}