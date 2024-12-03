import React, { useState, useEffect } from "react";
import productsData from './products.json';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productsData);

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} تم إضافته إلى السلة`);
  };

  return (
    <div>
      <h2>the products</h2>
      <div className="products-container" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ margin: "10px", width: "200px" }}>
            <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px" }} />
            <h3>{product.name}</h3>
            <p>the price: {product.price}pound</p>
            <button onClick={() => addToCart(product)}>Add to basket</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Basket</h3>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - {item.price} Eg</p>
            </div>
          ))
        ) : (
          <p>There are no products in the basket</p>
        )}
      </div>
    </div>
  );
};

export default Products;
