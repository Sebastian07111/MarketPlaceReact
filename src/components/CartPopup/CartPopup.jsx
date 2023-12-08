import React, { useState } from 'react';
import './CartPopup.css';

function CartPopup({ cart, onClose, removeFromCart }) {
  const [compraExitosa, setCompraExitosa] = useState(false);

  const handleCompra = () => {
    // Realizar acciones de compra aquí (puede ser una llamada a una API, etc.)
    // Por ahora, solo marcamos la compra como exitosa.
    setCompraExitosa(true);

    // Limpiar el carrito al realizar la compra
    cart.forEach(item => removeFromCart(item));
  };

  return (
    <div className="cart-popup">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity}
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Botón de compra */}
      <button onClick={handleCompra}>Comprar</button>

      {/* Mensaje de compra exitosa */}
      {compraExitosa && <p>¡Compra exitosa! Gracias por tu compra.</p>}

      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default CartPopup;


