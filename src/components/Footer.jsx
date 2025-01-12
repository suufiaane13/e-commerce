import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p>&copy; 2025 E-Shop. Tous droits réservés.</p>
      <div>
        <a 
          href="/" 
          className="footer-btn btn btn-light btn-sm mx-1"
        >
          Accueil
        </a>
        <a 
          href="/about" 
          className="footer-btn btn btn-light btn-sm mx-1"
        >
          À propos
        </a>
        <a 
          href="/contact" 
          className="footer-btn btn btn-light btn-sm mx-1"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
