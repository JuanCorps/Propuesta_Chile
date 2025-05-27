import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function CallToActionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

return (
    <>
        <div
            id="slide1"
            className="relative w-full min-h-[70vh] bg-black text-white py-12 px-6 text-center"
            style={{
                backgroundImage: "url('/luker/imagen33.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl font-bold mb-8">Propuesta de Valor</h1>
                <p className="text-lg font-light max-w-3xl mx-auto mb-6">
                    Esta estrategia no solo mejora el conocimiento financiero, sino que fortalece el liderazgo, la asociatividad y la confianza local, haciendo que las prácticas perduren en el tiempo.

                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-black/80 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Formación adecuada</h2>
                        <p className="text-gray-300">Que enseñan con ejemplos prácticos y que siente las bases de un conocimiento sólido.</p>
                    </div>
                    <div className="bg-black/80 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Digitalización</h2>
                        <p className="text-gray-300">Implementamos herramientas para la eficiencia.</p>
                    </div>
                    <div className="bg-black/80 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Red de productores mentores</h2>
                        <p className="text-gray-300">Que ya cuenten con buenas prácticas financieras.</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="final-proposal"
            className="relative w-full min-h-[50vh] bg-black text-white py-12 px-6 text-center"
            style={{
          backgroundImage: "url('/luker/imagen44.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl font-bold mb-6">Empoderamiento</h2>
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        <div className="w-full flex-shrink-0">
                            <p className="text-lg font-light max-w-3xl mx-auto">
                                Queremos trabajar con ustedes para implementar este modelo en piloto con fincas aliadas. Con su apoyo, podemos transformar realidades y sembrar un futuro financiero más sólido para las comunidades cacaoteras.
                            </p>
                        </div>
                        <div className="w-full flex-shrink-0">
                            <p className="text-lg font-light max-w-3xl mx-auto">
                                No se trata solo de enseñar finanzas, sino de empoderar familias. Y Casa Luker tiene el poder y la responsabilidad de liderar esta transformación desde el corazón del cacao colombiano.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-4">
                    {[0, 1].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/40'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    </>
);
}
