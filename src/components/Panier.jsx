import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Panier = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderMessage, setOrderMessage] = useState('');
  const [previousOrders, setPreviousOrders] = useState([]);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('previousOrders')) || [];
    setPreviousOrders(savedOrders);
  }, []);

  const handleRemove = (id, title) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${title} ?`)) {
      try {
        removeFromCart(id);
        setMessage(`${title} a été supprimé avec succès.`);
      } catch (error) {
        setMessage(`Erreur lors de la suppression de ${title}.`);
      } finally {
        setTimeout(() => setMessage(''), 3000);
      }
    }
  };

  const handleQuantityChange = (id, quantity) => {
    if (!Number.isInteger(quantity) || quantity < 0 || quantity > 99) {
      setMessage('La quantité doit être comprise entre 0 et 99.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    updateQuantity(id, quantity);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderMessage('Demande en cours de traitement...');
    console.log('Formulaire soumis :', { ...formData, cart, total });

    setTimeout(() => {
      console.log('Commande passée :', { ...formData, cart, total });
      const newOrder = { ...formData, cart, total, date: new Date().toLocaleString() };
      const updatedOrders = [...previousOrders, newOrder];
      localStorage.setItem('previousOrders', JSON.stringify(updatedOrders));
      setPreviousOrders(updatedOrders);
      setOrderConfirmed(true);
      cart.forEach(item => removeFromCart(item.id));
      setFormData({ name: '', address: '', phone: '' });
      setOrderMessage('');
    }, 2000);
  };

  const handleClearOrders = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vider toutes les commandes précédentes ?')) {
      localStorage.removeItem('previousOrders');
      setPreviousOrders([]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Votre Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <span>{item.title} - {item.price} DH - quantité : </span>
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value, 10) || 0)
                    }
                    style={{ width: '60px' }}
                  />
                </div>
                <span className="badge bg-secondary">{item.price * item.quantity} DH</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(item.id, item.title)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: {total} DH</h4>
          {message && <p className="text-success mt-2">{message}</p>}
        </>
      )}

      <hr />
      {cart.length === 0 ? (
        <p>Votre panier est vide. <a href="/">Retourner aux produits</a></p>
      ) : (
        <>
          <h4>Vos informations :</h4>
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Adresse</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Téléphone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Confirmer la commande
            </button>
          </form>

          {orderMessage && (
            <div className="alert alert-info mt-4" role="alert">
              {orderMessage}
            </div>
          )}

          {orderConfirmed && (
            <div className="alert alert-success mt-4" role="alert">
              Votre commande a été confirmée ! Merci pour votre achat.
            </div>
          )}
        </>
      )}

      {previousOrders.length > 0 && (
        <div className="mt-5">
          <h4>Commandes précédentes :</h4>
          <ul className="list-group">
            {previousOrders.map((order, index) => (
              <li key={index} className="list-group-item">
                <strong>Commande du {order.date} :</strong>
                <p><strong>Nom :</strong> {order.name}</p>
                <ul>
                  {order.cart.map((item) => (
                    <li key={item.id}>{item.title} - {item.quantity} x {item.price} DH</li>
                  ))}
                </ul>
                <p>Total : {order.total} DH</p>
                <p>Adresse : {order.address}</p>
                <p>Téléphone : {order.phone}</p>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-danger mt-4"
            onClick={handleClearOrders}
          >
            Vider les commandes
          </button>
        </div>
      )}
    </div>
  );
};

export default Panier;
