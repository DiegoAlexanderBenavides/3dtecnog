import React from 'react';
import products from '../mock/products';

const Cuadros = ({ addToCart }) => {
  const cuadros = products.cuadros.items;

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
        Nuestra Colección de Cuadros
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cuadros.map(cuadro => (
          <div 
            key={cuadro.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300"
          >
            <img 
              src={cuadro.image} 
              alt={cuadro.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{cuadro.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{cuadro.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-lg">${cuadro.price.toFixed(2)}</span>
                <button 
                  onClick={() => addToCart(cuadro)}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuadros;