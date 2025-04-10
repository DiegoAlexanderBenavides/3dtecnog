import React, { useState, useRef, useEffect } from 'react';

const CuadroPersonalizacion = ({ cuadro, onAddToCart, onCancel }) => {
  const imagenRef = useRef(null);
  const [dimensionesImagen, setDimensionesImagen] = useState({ ancho: 20, alto: 0 });

  // Márgenes extra para el marco (imagen iluminada)
  const margenAncho = 0;
  const margenAlto = 40;

  const [personalizacion, setPersonalizacion] = useState({
    texto: '',
    colorMarco: 'negro',
    tamaño: 'mediano',
  });

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensionesImagen({ ancho: width, alto: height });
      }
    });

    if (imagenRef.current) {
      observer.observe(imagenRef.current);
    }

    return () => {
      if (imagenRef.current) {
        observer.unobserve(imagenRef.current);
      }
    };
  }, [cuadro.overlay]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalizacion(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    onAddToCart({ ...cuadro, personalizacion });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-10xl max-w-3xl w-full p-6 relative overflow-auto max-h-[95vh]">
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Personalizar {cuadro.name}
        </h2>

        {/* Vista previa */}
        <div className="relative flex justify-center items-center w-full mb-6">
          <div className="relative">
            {/* Marco (imagen iluminada de fondo) */}
            <img
               src={`${process.env.PUBLIC_URL}/images/cuadros/cuadrosFondoIluminado/rojo.png`}
              alt="Marco iluminado"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain z-10 pointer-events-none"
              style={{
                width: `${dimensionesImagen.ancho + margenAncho}px`,
                height: `${dimensionesImagen.alto + margenAlto}px`,
               // maxWidth: '95vw',
               // maxHeight: '85vh',
              }}
            />

            {/* Imagen principal */}
            <img
              ref={imagenRef}
              src={cuadro.overlay}
              alt="Overlay del cuadro"
              className="w-[85vw] max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain z-20 pointer-events-none relative"
            />
          </div>
        </div>

        {/* Controles */}
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
