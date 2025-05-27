import { motion } from 'framer-motion';

export default function Accion() {
  return (
    <motion.section
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white font-montserrat"
      style={{ backgroundImage: "url('/pacific-assets/imagen23.png')" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl px-6 text-left">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          ¿Quieres ser parte de una organización que no solo habla de sostenibilidad, sino que la vive en su gente, sus procesos y su impacto?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Únete a nuestra visión.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Indicadores clave para medir el impacto de nuestras acciones.
        </p>
        <p className="text-lg leading-relaxed">
          Vive Pacific Evoluciona.
        </p>
      </div>
    </motion.section>
  );
}
