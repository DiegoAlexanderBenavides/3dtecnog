import React from 'react';

const ProductModal = ({ category, products, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{category}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-600 hover:text-black transition"
          >
            ✕
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;