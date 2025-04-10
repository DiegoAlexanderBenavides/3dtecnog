import React, { useState } from 'react';

const CuadroPersonalizacion = ({ cuadro, onAddToCart, onCancel }) => {
  const [personalizacion, setPersonalizacion] = useState({
    texto: '',
    colorMarco: 'negro',
    tamaño: 'mediano',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalizacion(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    onAddToCart({ ...cuadro, personalizacion });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative">
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Personalizar {cuadro.name}
        </h2>

        {/* Vista previa con fondo y overlay */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-gray-100 shadow-inner">
          <img
            src="/images/cuadros/cuadrosFondoIluminado/azul.png" // tu fondo base
            alt="Fondo"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <img
            src={cuadro.overlay}
            alt="Overlay del cuadro"
            className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
          />
        </div>

        {/* Controles de personalización */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Texto personalizado
            </label>
            <input
              type="text"
              name="texto"
              value={personalizacion.texto}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Ej: Para Juan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color del marco
            </label>
            <select
              name="colorMarco"
              value={personalizacion.colorMarco}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="negro">Negro</option>
              <option value="blanco">Blanco</option>
              <option value="madera">Madera</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tamaño
            </label>
            <select
              name="tamaño"
              value={personalizacion.tamaño}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="pequeño">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Añadir Cuadro Personalizado al Carrito
        </button>
      </div>
    </div>
  );
};

export default CuadroPersonalizacion;
