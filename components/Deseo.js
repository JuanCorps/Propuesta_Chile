import { motion } from 'framer-motion';

export default function Objetivo() {
  return (
    <motion.section 
      className="py-10 sm:py-20 bg-cover bg-center text-white text-center font-sans relative"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backgroundBlendMode: 'overlay',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        src="/pacific-assets/Videobosque.mp4" 
        autoPlay 
        loop 
        muted 
      />
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"
      />
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 relative">
          ¿El objetivo?
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-full sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed relative">
          Construir una empresa donde las personas estén en el centro, donde el liderazgo se entrene, la salud mental se cuide.
        </p>
      </div>
    </motion.section>
  );
}
