import React from 'react';
import Bienvenido from './Bienvenido';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div>
      <div
        className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: "none",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/luker/video1 (2).mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold text-white leading-tight mb-4">
            Proponemos una estrategia basada en aprendizaje multimodal, con actividades prácticas, simulaciones, visitas a fincas modelo y juegos de rol, adaptados a su realidad cotidiana.
          </h1>
          <p className="text-lg font-light text-gray-300 max-w-3xl">
            Con esta estrategia buscamos lograr que el 70% de las familias realicen planificación financiera activa.
          </p>
        </div>
      </div>
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Bienvenido />
      </div>
    </div>
  );
}