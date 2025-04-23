import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Llaveros from './components/Llaveros';
import Cuadros from './components/Cuadros';
import Carrito from './components/Carrito';
import AuthGoogle from './components/AuthGoogle';
import UserProfile from './components/UserProfile';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('craftmaster_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('craftmaster_user', JSON.stringify(userData));
    setCurrentView('profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('craftmaster_user');
    setUser(null);
    setCurrentView('auth');
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const handleCategoryClick = (category) => {
    switch (category) {
      case 'llaveros':
        setCurrentView('llaveros');
        break;
      case 'cuadros':
        setCurrentView('cuadros');
        break;
      case 'cajoneras':
        setCurrentView('llaveros'); // ¿Quizás esto debería ser 'cajoneras'?
        break;
      default:
        setCurrentView('home');
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

    switch (currentView) {
      case 'auth':
        return <AuthGoogle onLogin={handleLogin} />;
      case 'profile':
        return user ? <UserProfile /> : <AuthGoogle onLogin={handleLogin} />;
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
        return <Home onCategoryClick={handleCategoryClick} />;
      default:
        return <Home onCategoryClick={handleCategoryClick} />;
    }
  };

  if (loading) {
    return <div className="text-center py-8">Cargando aplicación...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        user={user}
        onNavigation={handleNavigation}
        onLogout={handleLogout}
        toggleCart={toggleCart}
        cartItemCount={cart.length}
      />
      <main className="container mx-auto px-4 py-8">
        {renderView()}
      </main>
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
