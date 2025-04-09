import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/30">
        <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Contáctanos
        </h1>
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'message'].map(field => (
            <div key={field} className="mb-4">
              <label 
                htmlFor={field} 
                className="block text-gray-700 text-sm font-bold mb-2 capitalize"
              >
                {field}
              </label>
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              ) : (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                ></textarea>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;

// DONE