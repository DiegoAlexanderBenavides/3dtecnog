import React from 'react';

const CategoryCard = ({ category, image, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl duration-300"
    >
      <img 
        src={image} 
        alt={category} 
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">{category}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;