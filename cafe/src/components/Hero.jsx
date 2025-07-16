import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Welcome to Cozy Cup Cafe </h1>
          <p>Experience the perfect blend of artisanal coffee and delicious treats in a cozy atmosphere</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View Menu</button>
            <button className="btn btn-secondary">Make a Reservation</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-coffee.jpg" alt="Delicious coffee and pastries" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 