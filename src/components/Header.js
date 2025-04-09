import React from 'react';

const Header = ({ onNavigation, toggleCart, cartItemCount }) => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg py-4 px-6 flex justify-between items-center flex-wrap">
      <div className="text-2xl font-bold text-white w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
        3DTECNOG
      </div>
      <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto items-center">
        {[
          { name: 'home', label: 'Inicio' },
          { name: 'productos', label: 'Productos' },
          { name: 'llaveros', label: 'Llaveros' },
          { name: 'cuadros', label: 'Cuadros' },
          { name: 'cajoneras', label: 'Cajoneras' },
          { name: 'contacto', label: 'Contacto' }
        ].map(item => (
          <button 
            key={item.name}
            onClick={() => onNavigation(item.name)} 
            className="text-white hover:bg-white/20 px-3 py-1 rounded-full transition duration-300"
          >
            {item.label}
          </button>
        ))}
        <button 
          onClick={toggleCart}
          className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100 transition relative"
        >
          Carrito
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItemCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;

// DONE