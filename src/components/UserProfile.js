import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('craftmaster_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const updateUserInfo = (newInfo) => {
    const updatedUser = { ...user, ...newInfo };
    localStorage.setItem('craftmaster_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-8">
        <p>Por favor inicia sesión para ver tu perfil</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img 
            src={user.picture} 
            alt={user.name} 
            className="h-32 w-32 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dirección
              </label>
              <input
                type="text"
                value={user.address || ''}
                onChange={(e) => updateUserInfo({ address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Ingresa tu dirección"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                value={user.phone || ''}
                onChange={(e) => updateUserInfo({ phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Ingresa tu teléfono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;