import React from 'react';
import CategoryCard from './CategoryCard';
import products from '../mock/products';

const Home = ({ onCategoryClick }) => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <section className="text-center mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
          Bienvenido a 3DTECNOG
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Transforma tus ideas en productos únicos y personalizados con un toque de magia.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(products).map(category => (
            <CategoryCard 
              key={category}
              category={products[category].category}
              image={products[category].image}
              onClick={() => onCategoryClick(category)}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              title: 'Calidad Garantizada',
              description: 'Productos premium con atención al detalle'
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ),
              title: 'Personalización Total',
              description: 'Diseños únicos que reflejan tu estilo'
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M13 5.5a4 4 0 00-4 4v6a4 4 0 004 4v0a4 4 0 004-4v-6a4 4 0 00-4-4v0z" />
                </svg>
              ),
              title: 'Precios Accesibles',
              description: 'Calidad excepcional a tu alcance'
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;