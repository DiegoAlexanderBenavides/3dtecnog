import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Llaveros from './components/Llaveros';
import Cuadros from './components/Cuadros';
import Carrito from './components/Carrito';
import products from './mock/products';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const handleCategoryClick = (category) => {
    switch(category) {
      case 'llaveros':
        setCurrentView('llaveros');
        break;
      case 'cuadros':
        setCurrentView('cuadros');
        break;
      case 'cajoneras':
        setCurrentView('llaveros');
        break;
      default:
        break;
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.findIndex(item => item.name === product.name);
    if (existingProduct > -1) {
      const updatedCart = [...cart];
      updatedCart[existingProduct].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const renderView = () => {
    const commonProps = { addToCart };
    switch(currentView) {
      case 'home':
        return <Home onCategoryClick={handleCategoryClick} />;
      case 'productos':
        return <Productos {...commonProps} />;
      case 'contacto':
        return <Contacto />;
      case 'llaveros':
        return <Llaveros {...commonProps} />;
      case 'cuadros':
        return <Cuadros {...commonProps} />;
      case 'cajoneras':
        return <Home {...commonProps} />;
      default:
        return <Home onCategoryClick={handleCategoryClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigation={handleNavigation} 
        toggleCart={toggleCart}
        cartItemCount={cart.length}
      />
      {renderView()}
      {showCart && (
        <Carrito 
          cart={cart} 
          removeFromCart={removeFromCart}
          onClose={toggleCart}
        />
      )}
    </div>
  );
};

export default App;

// DONE