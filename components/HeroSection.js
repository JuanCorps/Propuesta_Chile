import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BienvenidoSection({ showMessage, showSecondSlide }) {
const slides = [
    {
        title: "Muchas familias cacaocultoras producen uno de los ingredientes más valiosos del país, pero aún no alcanzan una rentabilidad sostenible por la falta de educación financiera básica.",
        paragraphs: ["Esto limita el crecimiento de sus cultivos y su calidad de vida"]
    },
    {
        title: "En nuestra investigación descubrimos que muchas familias no cuentan con prácticas financieras básicas como presupuestar, registrar gastos o evaluar inversiones, lo cual limita el crecimiento de sus cultivos y su calidad de vida.\n",
        paragraphs: [
        ]
    }
];

const [current, setCurrent] = React.useState(0);
const { ref, inView } = useInView({ triggerOnce: false });

const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

return (
    <div
        id="bienvenido"
        className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-black text-white relative shadow-lg rounded-lg p-6"
        style={{
            backgroundImage: "url('/luker/cacao4.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
            key={current}
            className="relative flex flex-col justify-center items-center w-full max-w-4xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
        >
            <div className="text-center px-6">
                {slides[current].title && (
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        {slides[current].title}
                    </h2>
                )}
                {slides[current].paragraphs.map((p, idx) => (
                    <p key={idx} className={`text-lg font-light text-gray-300 max-w-3xl${idx > 0 ? " mt-4" : ""}`}>
                        {p}
                    </p>
                ))}
            </div>
        </motion.div>
        <div className="relative z-10 flex gap-4 mt-8">
            <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded transition"
                aria-label="Anterior"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded transition"
                aria-label="Siguiente"
            >
                &#8594;
            </button>
        </div>
        <div className="flex gap-2 mt-4">
            {slides.map((_, idx) => (
                <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/40"}`}
                />
            ))}
        </div>
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* ...existing code... */}
        </div>
    </div>
);
}

