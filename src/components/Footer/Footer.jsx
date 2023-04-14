import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <p className="text-center">
          &copy; COVID MASHUP PROJECT {new Date().getFullYear()} - TAYEEB ISLAM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
