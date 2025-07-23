import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Menu.css';

// const[toggle, setToggle] = useState(true);
const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    category: 'coffee',
    price: 3.50,
    description: 'Rich and bold single shot of espresso',
    image: '/images/espresso.jpg'
  },
  {
    id: 2,
    name: 'Cappuccino',
    category: 'coffee',
    price: 4.50,
    description: 'Espresso with steamed milk and foam',
    image: '/images/cappuccino.jpg'
  },
  {
    id: 3,
    name: 'Croissant',
    category: 'pastries',
    price: 3.00,
    description: 'Buttery, flaky French pastry',
    image: '/images/croissant.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Cake',
    category: 'desserts',
    price: 5.50,
    description: 'Rich chocolate layer cake',
    image: '/images/chocolate-cake.jpg'
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart, setIsCartOpen } = useCart();
  const categories = ['all', 'coffee', 'pastries', 'desserts'];
  const[toggle, setToggle] = useState(false);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item) => {
    addToCart(item);
    setIsCartOpen(true);
  };

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        <div className="menu-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`menu-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item card">
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-item-footer">
                  <span className="price">${item.price.toFixed(2)}</span>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
{/*       <div classname='toggle-div'>{toggle?<h1>show</h1>:""}</div>
      <button onClick={()=>setToggle(!toggle)}>Click</button> */}
      </div>
    </section>
  );
};

export default Menu; 
