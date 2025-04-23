import React, { useState } from 'react';

const FormularioPedido = ({ cart, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    notas: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const itemsDetails = cart.map(item => {
      let details = `- ${item.name} (${item.quantity} x $${item.price.toFixed(2)})`;
      
      if (item.personalizacion) {
        details += `\n  Personalización:`;
        details += `\n  Letra: ${item.personalizacion.letra}`;
        details += `\n  Color Principal: ${item.personalizacion.colorPrincipal}`;
        if (item.personalizacion.colorSecundario) {
          details += `\n  Color Secundario: ${item.personalizacion.colorSecundario}`;
        }
        details += `\n  Estilo: ${item.personalizacion.estiloLetra}`;
      } else if (item.category === 'cuadros') {
        details += `\n  Tipo: Cuadro con luz de neón flex`;
      }
      
      return details;
    }).join('\n\n');

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 1.16;

    return `Nuevo pedido de ${formData.nombre}:\n\n` +
           ` Productos:\n${itemsDetails}\n\n` +
           ` Total: $${total.toFixed(2)}\n\n` +
           ` Notas: ${formData.notas || 'Ninguna'}\n\n` /*+
           ` Contacto: ${formData.telefono}\n` +
           ` Email: ${formData.email}\n` +
           ` Dirección: ${formData.direccion}`*/;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/573215024462?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Finalizar Pedido
        </h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Al enviar el pedido se abrirá WhatsApp para confirmar los detalles. Por favor verifica que toda la información sea correcta.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
           {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dirección de Envío *
              </label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>*/}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notas adicionales
            </label>
            <textarea
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Resumen del Pedido</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              {cart.map((item, index) => (
                <div key={index} className="mb-2">
                  <p className="font-medium">{item.name} x{item.quantity}</p>
                  {item.personalizacion && (
                    <div className="ml-4 text-sm text-gray-600">
                      <p>Letra: {item.personalizacion.letra}</p>
                      <p>Color: {item.personalizacion.colorPrincipal}</p>
                      {item.personalizacion.colorSecundario && (
                        <p>Color Secundario: {item.personalizacion.colorSecundario}</p>
                      )}
                      <p>Estilo: {item.personalizacion.estiloLetra}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Enviar Pedido por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioPedido;