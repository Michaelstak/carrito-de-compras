import React from 'react';


const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 }
  ];

  return (
    <div className='product-list-container'>
      <h3>Productos Disponibles:</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} ({product.price} USD)
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
