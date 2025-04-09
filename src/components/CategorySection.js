import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../mock/products';

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('llaveros');

  const categories = ['llavero', 'cuadros', 'cajoneras'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products[selectedCategory].map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;