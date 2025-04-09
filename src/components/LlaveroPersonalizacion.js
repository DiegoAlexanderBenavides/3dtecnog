import React, { useState } from 'react';

const LlaveroPersonalizacion = ({ addToCart }) => {
  const [letra, setLetra] = useState('');
  const [colorPrincipal, setColorPrincipal] = useState('#000000');
  const [colorSecundario, setColorSecundario] = useState('#FF0000');
  const [usarDegradado, setUsarDegradado] = useState(false);
  const [direccionDegradado, setDireccionDegradado] = useState('to right');

  const colores = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00',
    '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'
  ];

  const direcciones = [
    { value: 'to right', label: 'Horizontal' },
    { value: 'to bottom', label: 'Vertical' }
  ];

  const handlePersonalizarLlavero = () => {
    if (!letra) {
      alert('Por favor, selecciona una letra');
      return;
    }

    const personalizadoLlavero = {
      id: `personalizado-${Date.now()}`,
      name: `Llavero Personalizado - ${letra}`,
      description: `Llavero con letra ${letra}, color ${usarDegradado ? `${colorPrincipal} a ${colorSecundario}` : colorPrincipal}`,
      price: 50,
      image: null,
      personalizacion: {
        letra,
        colorPrincipal,
        colorSecundario: usarDegradado ? colorSecundario : null,
        direccionDegradado: usarDegradado ? direccionDegradado : null
      }
    };

    addToCart(personalizadoLlavero);
  };

  const getLetraStyle = () => {
    const baseStyle = {
      fontSize: '10rem',
      fontFamily: '"Arial Black", Gadget, sans-serif',
      display: 'inline-block'
    };
  
    if (usarDegradado) {
      return {
        ...baseStyle,
        background: `linear-gradient(${direccionDegradado}, ${colorPrincipal} 50%, ${colorSecundario} 50%)`,
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      };
    } else {
      return {
        ...baseStyle,
        color: colorPrincipal,
        background: 'none',
        WebkitBackgroundClip: 'initial',
        WebkitTextFillColor: 'initial'
      };
    }
  };
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Vista previa */}
      <div className="flex items-center justify-center bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-center w-full h-96 bg-white">
        <span 
  key={`${colorPrincipal}-${colorSecundario}-${direccionDegradado}-${usarDegradado}`}
  style={getLetraStyle()}
>
  {letra || 'A'}
</span>
</div>
      </div>

      {/* Panel de personalización */}
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Letra</label>
          <input 
            type="text" 
            maxLength="1"
            value={letra}
            onChange={(e) => setLetra(e.target.value.toUpperCase())}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Introduce una letra"
          />
        </div>

        {/* Color principal */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Color Principal</label>
          <div className="flex flex-wrap gap-2">
            {colores.map(color => (
              <button
                key={color}
                onClick={() => setColorPrincipal(color)}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border ${colorPrincipal === color ? 'ring-2 ring-purple-500' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Activar degradado */}
        <div className="mb-4 flex items-center">
          <input 
            type="checkbox"
            checked={usarDegradado}
            onChange={() => setUsarDegradado(!usarDegradado)}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Usar degradado de color</label>
        </div>

        {/* Color secundario + dirección degradado */}
        {usarDegradado && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Color Secundario</label>
              <div className="flex flex-wrap gap-2">
                {colores.map(color => (
                  <button
                    key={color}
                    onClick={() => setColorSecundario(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border ${colorSecundario === color ? 'ring-2 ring-purple-500' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección del Degradado</label>
              <select
                value={direccionDegradado}
                onChange={(e) => setDireccionDegradado(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {direcciones.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <button
          onClick={handlePersonalizarLlavero}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Añadir Llavero Personalizado
        </button>
      </div>
    </div>
  );
};

export default LlaveroPersonalizacion;
