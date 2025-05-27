import { motion } from 'framer-motion';

export default function LlamadoAccion() {
  return (
    <motion.section
      id="llamado"
      className="py-20 bg-cover bg-center text-white text-center font-montserrat relative"
      style={{ backgroundImage: "url('/pacific-assets/imagen%20final.png')" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative">
        <h2 className="text-4xl font-bold mb-8">Conoce nuestra hoja de ruta cultural</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Descubre cómo podemos transformar tu organización para un futuro sostenible y exitoso.
        </p>
        <a
          href="https://juanthecreator.github.io/Chile/" // Cambiado para apuntar a la URL externa
          className="inline-block bg-white text-[#0a0a0a] py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-200 hover:scale-105 transition duration-300 transform"
        >
          Previsualización
        </a>
        <div className="my-6"></div>
        <a
          href="https://umanizaleseduco-my.sharepoint.com/:f:/r/personal/josoriog_umanizales_edu_co/Documents/Yellow%20Team_Become%20Glocal/Entregas/Actividad%20RA2?csf=1&web=1&e=tEHunr"
          className="inline-block bg-white text-[#000000] py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-200 hover:scale-105 transition duration-300 transform"
        >
          Guía Cultural
        </a>
      </div>
    </motion.section>
  );
}
