import React, { useState } from 'react';

const AuthGoogle = ({ onLogin }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleGoogleLogin = () => {
    // Simulación de autenticación con Google
    const googleUser = {
      name: 'Usuario Demo',
      email: 'usuario@demo.com',
      picture: 'https://via.placeholder.com/150',
      token: 'demo-token-123'
    };

    try {
      localStorage.setItem('craftmaster_user', JSON.stringify(googleUser));
      setUser(googleUser);
      onLogin(googleUser);
    } catch (err) {
      setError('Error al guardar los datos del usuario');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('craftmaster_user');
    setUser(null);
    onLogin(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
      {user ? (
        <div className="text-center">
          <img 
            src={user.picture} 
            alt={user.name} 
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-4">Inicia sesión con Google</h3>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center bg-white border border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-50 transition"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google Logo" 
              className="w-5 h-5 mr-2"
            />
            Continuar con Google
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <p className="text-sm text-gray-500 mt-4">
            * Los datos se guardarán solo en este navegador
          </p>
        </>
      )}
    </div>
  );
};

export default AuthGoogle;