import './About.css';

const About = () => {
  const features = [
    {
      icon: '☕',
      title: 'Premium Coffee',
      description: 'Sourced from the finest coffee beans around the world'
    },
    {
      icon: '🥐',
      title: 'Fresh Pastries',
      description: 'Baked fresh daily using traditional recipes'
    },
    {
      icon: '🌟',
      title: 'Cozy Atmosphere',
      description: 'Comfortable seating and warm, inviting ambiance'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Baristas',
      description: 'Skilled professionals crafting your perfect cup'
    }
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Welcome to Gautham Cafe, where passion meets perfection in every cup. 
              Established in 2024, we've been dedicated to serving the finest coffee 
              and creating memorable experiences for our community.
            </p>
            <p className="about-description">
              Our journey began with a simple dream: to create a warm, welcoming space 
              where people could enjoy exceptional coffee and delicious treats. Today, 
              we're proud to be your local destination for premium beverages, fresh 
              pastries, and memorable moments.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/cafe-interior.jpg" alt="Gautham Cafe Interior" />
          </div>
        </div>

        <div className="features">
          <h3 className="features-title">Why Choose Us</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 