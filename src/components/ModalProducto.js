// src/components/ModalProducto.js
import React from 'react';

const ModalProducto = ({ producto, onClose, onAddToCart }) => {
  if (!producto) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // evita cierre al hacer clic dentro
      >
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        <img 
          src={producto.image} 
          alt={producto.name} 
          className="w-full h-auto mb-4 rounded-lg"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">{producto.name}</h2>
        <p className="text-gray-600 mb-4">{producto.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">${producto.price.toFixed(2)}</span>
          <button 
            onClick={() => {
              onAddToCart(producto);
              onClose();
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProducto;
