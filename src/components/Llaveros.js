import React, { useState } from 'react';
import products from '../mock/products';
import LlaveroPersonalizacion from './LlaveroPersonalizacion';
import ModalProducto from './ModalProducto';

const Llaveros = ({ addToCart }) => {
  const llaveros = products.llaveros.items;
  const [activeTab, setActiveTab] = useState(' catalogo');
  const [selectedLlavero, setSelectedLlavero] = useState(null);

  const handleClickImagen = (llavero) => {
    setSelectedLlavero(llavero);
  };

  const cerrarModal = () => {
    setSelectedLlavero(null);
  };

  const renderCatalogo = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {llaveros.map(llavero => (
        <div 
          key={llavero.id} 
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src={llavero.image} 
            alt={llavero.name} 
            className="w-full h-64 object-cover cursor-pointer"
            onClick={() => handleClickImagen(llavero)}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{llavero.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{llavero.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-bold text-lg">${llavero.price.toFixed(2)}</span>
              <button 
                onClick={() => addToCart(llavero)}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
        Llaveros
      </h1>

      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-full p-1 flex space-x-2 shadow-md">
          <button
            onClick={() => setActiveTab('catalogo')}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === 'catalogo' 
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Catálogo
          </button>
          <button
            onClick={() => setActiveTab('personalizar')}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === 'personalizar' 
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Personalizar
          </button>
        </div>
      </div>

      {activeTab === 'catalogo' ? renderCatalogo() : <LlaveroPersonalizacion addToCart={addToCart} />}

      {/* Modal reutilizable */}
      <ModalProducto 
        producto={selectedLlavero}
        onClose={cerrarModal}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Llaveros;

