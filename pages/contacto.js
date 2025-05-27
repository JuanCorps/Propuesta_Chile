export default function Contacto() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const response = await fetch('/api/saveContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const alertBox = document.createElement('div');
      alertBox.textContent = '¡Datos enviados exitosamente!';
      alertBox.className = 'fixed top-4 right-4 bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg transition-opacity duration-500';
      document.body.appendChild(alertBox);

      setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => alertBox.remove(), 500);
      }, 3000);

      e.target.reset();
    } else {
      alert('Hubo un error al enviar los datos.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-8">Contáctanos</h1>
      <form onSubmit={handleSubmit} className="bg-black/80 p-8 rounded-xl shadow-md max-w-lg w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Tu mensaje"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium transition duration-300"
        >
          Enviar
        </button>
      </form>
      <div className="fixed bottom-4 right-4">
        <a
          href="/pacific"
          className="bg-white text-black py-2 px-4 rounded-full text-sm font-medium shadow-md hover:bg-gray-200 transition duration-300"
        >
          Atrás
        </a>
      </div>
    </div>
  );
}
