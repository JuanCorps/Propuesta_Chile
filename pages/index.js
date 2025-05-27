import { useState } from 'react';

export default function Home() {
  const [background, setBackground] = useState('');
  const [transitionBackground, setTransitionBackground] = useState('');

  const handleMouseEnter = (image) => {
    setTimeout(() => setTransitionBackground(image), 100);
    setBackground(image);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setTransitionBackground(''), 100);
    setBackground('');
  };

  return (
    <>

      <div className="relative min-h-screen overflow-hidden font-sans bg-black text-center">
        {/* Fondo dinámico */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700 bg-cover bg-center"
          style={{
            backgroundImage: transitionBackground ? `url(${transitionBackground})` : 'none',
            opacity: transitionBackground ? 1 : 0,
          }}
        />

        {/* Contenido principal */}
        <main className="relative z-20 flex flex-col items-center justify-between min-h-screen px-6 py-20 text-white">
          <section className="max-w-4xl bg-black/80 backdrop-blur p-8 rounded-xl shadow-md">
            <h1 className="text-5xl md:text-7xl font-semibold text-white mb-8 leading-tight">
              Impulsa el cambio empresarial
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Dos soluciones, un mismo propósito: transformar cultura organizacional y educación financiera.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Botón Pacific Forest */}
              <a
                href="/pacific"
                onMouseEnter={() => handleMouseEnter('/backgrounds/imagen1.png')}
                onMouseLeave={handleMouseLeave}
                className="relative bg-white hover:bg-[#006400] text-black py-4 px-10 rounded-2xl text-lg font-medium transition duration-300 shadow-lg glow-button hover:font-montserrat"
              >
                Pacific Forest
              </a>

              {/* Botón Casa Luker */}
              <a
                href="/luker"
                onMouseEnter={() => handleMouseEnter('/backgrounds/Imagen2.png')}
                onMouseLeave={handleMouseLeave}
                className="bg-white hover:bg-[#E94E1B] text-black py-4 px-10 rounded-2xl text-lg font-medium transition duration-300 shadow-lg"
              >
                Casa Luker
              </a>
            </div>
          </section>

          <footer className="mt-20 text-sm text-gray-400 bg-black/70 p-4 rounded-xl">
            © 2025 Equipo 2 - Universidad de Manizales. Todos los derechos reservados.
          </footer>
        </main>

        {/* CSS interno */}
        <style jsx>{`
          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 0px rgba(0, 100, 0, 0.5);
            }
            50% {
              box-shadow: 0 0 20px rgba(0, 100, 0, 0.6);
            }
            100% {
              box-shadow: 0 0 0px rgba(0, 100, 0, 0.5);
            }
          }

          .glow-button {
            animation: glowPulse 2.5s ease-in-out infinite;
          }

          .hover\\:font-montserrat:hover {
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 0.5px;
            font-weight: 700;
          }
        `}</style>
      </div>
    </>
  );
}
