import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us on our social media.</p>
      <a href="https://facebook.com" className="social-link"><i className="fab fa-facebook"></i> Facebook</a>
      <a href="https://instagram.com" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
      <a href="mailto:contact@mystore.com" className="social-link"><i className="fas fa-envelope"></i> Email</a>
    </div>
  );
}

export default Contact;
