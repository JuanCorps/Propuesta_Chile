export default function Bienvenido({ showMessage, showSecondSlide, currentCarouselIndex, setCurrentCarouselIndex }) {
if (!showMessage || showSecondSlide || currentCarouselIndex !== 0) return null;

return (
    <div id="bienvenido" className="w-full min-h-[70vh] flex flex-col lg:flex-row justify-between bg-black text-white relative shadow-lg rounded-lg p-6">
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-4 text-center">
                Bienvenido a Pacific Forest
            </h2>
            <div className="mt-4 text-base sm:text-lg md:text-xl font-light text-gray-300 text-center max-w-2xl mx-auto space-y-4">
                <p>
                    En un mundo que exige sostenibilidad, liderazgo empático y bienestar real,
                    en Pacific Forest decidimos dar un paso firme hacia el futuro.
                </p>
                <p>
                    Lo hacemos con una estrategia que busca capacitar al 100% de los líderes de equipo
                    en el nuevo modelo de evaluación y retroalimentación continua.
                </p>
            </div>
        </div>
    </div>
);
}
