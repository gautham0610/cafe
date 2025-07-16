import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, setIsCartOpen } = useCart();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-brand">
          <h1>Cozy Cup Cafe</h1>
        </div>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          <a href="#home" className="navbar-item">Home</a>
          <a href="#menu" className="navbar-item">Menu</a>
          <a href="#about" className="navbar-item">About</a>
          <a href="#contact" className="navbar-item">Contact</a>
          <button 
            className="cart-button"
            onClick={() => setIsCartOpen(true)}
          >
            🛒 Cart
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 