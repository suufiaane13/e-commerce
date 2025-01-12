import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { message } = useCart();

  useEffect(() => {
    const mockProducts = [
      { id: 1, title: 'Laptop', price: 7999, image: `${process.env.PUBLIC_URL}/images/laptob.jpeg` },
      { id: 2, title: 'Smartphone', price: 2999, image: `${process.env.PUBLIC_URL}/images/smartphone.jpeg` },
      { id: 3, title: 'Headphones', price: 299, image: `${process.env.PUBLIC_URL}/images/headphone.jpeg` },
      { id: 4, title: 'JBL', price: 699, image: `${process.env.PUBLIC_URL}/images/jbl.jpeg` },
      { id: 5, title: 'I-Pad', price: 5999, image: `${process.env.PUBLIC_URL}/images/ipad.jpeg` },
      { id: 6, title: 'Canon Camera', price: 499, image: `${process.env.PUBLIC_URL}/images/canon.jpeg` },
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
