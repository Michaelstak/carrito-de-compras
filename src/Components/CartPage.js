import React, { useState } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // Actualizar la cantidad del producto existente en el carrito
      const updatedItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      // Agregar un nuevo producto al carrito
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedItems);
  };

  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
