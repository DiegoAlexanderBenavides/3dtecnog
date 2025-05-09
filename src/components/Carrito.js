import React, { useState } from 'react';
import FormularioPedido from './FormularioPedido';

const Carrito = ({ cart, removeFromCart, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleProceedToCheckout = () => {
    setShowForm(true);
  };

  const handleSubmitOrder = (formData) => {
    const { nombre, email, telefono, direccion, notas } = formData;
    
    const productosTexto = cart.map(item => (
      `🔹 ${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
    )).join('\n');
  
    const totalTexto = ` Total (con IVA): $${(total ).toFixed(2)}`;
  
    const mensaje = 
      ` *Nuevo Pedido desde 3DTECNOG* \n\n` +
      ` *Productos:*\n {productosTexto}\n\n` + 
      `${totalTexto}\n\n` +
      ` *Cliente:* ${nombre}\n Email: ${email}\n Teléfono: ${telefono}\n Dirección: ${direccion}\n Notas: ${notas || 'Ninguna'}\n`;
  
    const mensajeCodificado = encodeURIComponent(mensaje);
  
    const numeroTelefono = '573215024462'; // <-- Cambia esto por tu número con código de país (sin +)
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
  
    window.open(urlWhatsApp, '_blank'); // Abre WhatsApp en nueva pestaña
    onClose(); // Cierra el carrito
  };

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl z-50 p-6 overflow-y-auto">
      {showForm ? (
        <FormularioPedido 
          cart={cart}
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmitOrder}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Carrito de Compras
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              Tu carrito está vacío
            </div>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between border-b py-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center space-x-4">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg">
                        <span className="text-2xl font-bold text-gray-400">
                          {item.personalizacion?.letra || 'P'}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-6 bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold">${(total ).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t pt-2 mt-2">
                  <span>Total</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                    ${(total * 1).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition"
              >
                Proceder al Pago
              </button>
              
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carrito;

// DONE