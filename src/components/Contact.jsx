import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="text-center mt-5">
        <div className="d-flex justify-content-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/laptob.jpeg`} // Corrected syntax
            alt="Profil"
            className="rounded-circle border border-5 border-light shadow-lg"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '50%',
              borderColor: '#f8f9fa',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
        <br />
        <h3 className="mb-4">HAJJI Soufiane</h3>

        <p className="mt-3 fs-5 text-muted" style={{ lineHeight: '1.6' }}>
          Bonjour ! J'ai créé cette boutique en ligne pour offrir une expérience d'achat agréable tout en développant mes compétences en développement web.
        </p>

        <ul className="list-unstyled mt-2">
          <li>
            <strong>Passionné de technologie</strong> - Toujours à la recherche de nouvelles tendances et d'innovations pour améliorer l'expérience utilisateur.
          </li>
        </ul>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <a
            href="https://www.instagram.com/suuf.iaane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark rounded-circle"
            style={{
              fontSize: '24px',
              width: '50px',
              height: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://wa.me/212602353136"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success rounded-circle"
            style={{
              fontSize: '24px',
              width: '50px',
              height: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://www.snapchat.com/add/suufi.aane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning rounded-circle"
            style={{
              fontSize: '24px',
              width: '50px',
              height: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
          >
            <i className="fab fa-snapchat"></i>
          </a>

          <a
            href="mailto:hjisfn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-danger rounded-circle"
            style={{
              fontSize: '24px',
              width: '50px',
              height: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
