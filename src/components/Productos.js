import React, { useState } from 'react';
import ProductModal from './ProductModal';
import products from '../mock/products';

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos Personalizados</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(products).map(category => (
          <div 
            key={category} 
            onClick={() => handleCategoryClick(category)}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl duration-300"
          >
            <img 
              src={products[category].image} 
              alt={products[category].category} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{products[category].category}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <ProductModal 
          category={products[selectedCategory].category}
          products={products[selectedCategory].items}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Productos;