import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-blue-600 font-bold mt-2">${product.price.toFixed(2)}</p>
        <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

