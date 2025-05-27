import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    image: '/pacific-assets/Spoti.jpg',
    text: 'Nos inspiramos en Spotify para fomentar la creatividad y la innovación.'
  },
  {
    image: '/pacific-assets/Micro.jpg',
    text: 'Microsoft nos enseña el poder de la tecnología para transformar vidas.'
  },
  {
    image: '/pacific-assets/unilever.jpg',
    text: 'Unilever nos inspira con su compromiso con la sostenibilidad.'
  }
];

export default function Inspiracion() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <motion.section
      className="py-40 text-white text-center font-montserrat relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 w-full h-full flex transition-transform duration-1000 ease-in-out" style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        filter: 'brightness(0.5)'
      }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold mb-8 text-white">
          Inspiración
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-xl mx-auto px-4">
          {slides[currentSlide].text}
        </p>
      </div>
    </motion.section>
  );
}
