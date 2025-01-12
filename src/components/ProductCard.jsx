import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/styles.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={product.image} className="card-img-top product-image" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price} DH</p>
          <button
            className="btn btn-custom"
            onClick={() => addToCart(product)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
