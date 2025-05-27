import { motion } from 'framer-motion';

export default function Propuesta() {
  return (
    <motion.section 
      id="propuesta" 
      className="py-16 sm:py-24 bg-cover bg-center text-white text-center font-montserrat relative"
      style={{ 
        backgroundImage: "url('/pacific-assets/imagen24.png')", 
        backgroundColor: "rgba(0, 0, 0, 0.55)", 
        backgroundBlendMode: "overlay" 
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Propuesta de Valor
      </motion.h2>
      <motion.p 
        className="text-base sm:text-lg md:text-xl max-w-full sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Creamos una cultura organizacional basada en liderazgo empático, digitalización y bienestar.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 relative">
        {[
          { title: "Liderazgo Empático", description: "Fomentamos líderes que inspiran y conectan." },
          { title: "Digitalización", description: "Implementamos herramientas para la eficiencia." },
          { title: "Bienestar", description: "Promovemos un entorno saludable y sostenible." },
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="w-full sm:w-64 p-6 bg-black/70 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
