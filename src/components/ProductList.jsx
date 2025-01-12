import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { message } = useCart();

  useEffect(() => {
    const mockProducts = [
      { id: 1, title: 'Laptop', price: 7999, image: 'images/laptob.jpeg' },
      { id: 2, title: 'Smartphone', price: 2999, image: 'images/smartphone.jpeg' },
      { id: 3, title: 'Headphones', price: 299, image: 'images/headphone.jpeg' },
      { id: 4, title: 'JBL', price: 699, image: 'images/jbl.jpeg' },
      { id: 5, title: 'I-Pad', price: 5999, image: 'images/ipad.jpeg' },
      { id: 6, title: 'Canon Camera', price: 499, image: 'images/canon.jpeg' },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="container mt-4">
      {message && (
        <div className="alert alert-success text-center" role="alert">
          {message}
        </div>
      )}
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
