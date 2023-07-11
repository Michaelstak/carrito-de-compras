import React from 'react';


const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className='cart-container'>
      <h3>Productos en el Carrito:</h3>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} ({item.price * item.quantity} USD)
              <button onClick={() => removeFromCart(item)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
