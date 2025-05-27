import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/HeroSection';
import BienvenidoSection from '../components/BienvenidoSection';
import CallToActionSection from '../components/CallToActionSection';

const slides = [
  {
    video: '/luker/cacao2.mp4',
    text: 'Sembrando Futuro Financiero.\nAprender, Liderar, tranformar.',
    style: {
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      backgroundBlendMode: 'overlay',
    },
  },
  {
    image: '/luker/cacao3.jpg',
    text: 'Personas que construyen futuro,\ncon propósito y raíz.',
    noButton: true,
    style: {
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      backgroundBlendMode: 'overlay',
    },
  },
  {
    video: '/pacific-assets/videoMundo.mp4',
    text: 'Desde Colombia al mundo:\nsostenibilidad con propósito.',
    noButton: true,
    style: {
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      backgroundBlendMode: 'overlay',
    },
  },
];

export default function Luker() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: false });
  const { ref: bienvenidoRef, inView: bienvenidoInView } = useInView({ triggerOnce: false });
  const { ref: callToActionRef, inView: callToActionInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-black text-white">
      <nav className="border-b border-white bg-black p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="https://www.casaluker.com/" target="_blank" rel="noopener noreferrer">
            <img src="/backgrounds/CASALUKER-NARANJA.svg" alt="Logo Casa Luker" className="h-8" />
          </a>
          <a href="/" className="text-white text-sm font-medium hover:underline">
            Inicio
          </a>
        </div>
        <div className="flex gap-6">
          <a href="/contacto-luker" className="text-white text-sm font-medium hover:underline">
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
            </div>
          </div>
        ))}
      </div>

      <div
        ref={heroRef}
        className={`transition-opacity duration-1000 ease-in-out ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <HeroSection />
      </div>

      <div
        ref={bienvenidoRef}
        className={`transition-opacity duration-1000 ease-in-out ${
          bienvenidoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <BienvenidoSection />
      </div>

      <div
        ref={callToActionRef}
        className={`transition-opacity duration-1000 ease-in-out ${
          callToActionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <CallToActionSection />
      </div>
    </div>
  );
}
