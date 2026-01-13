import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <span className="about-badge">ABOUT THE EVENT</span>

        <h1>
          Building a Culture of <span>Trust & Excellence</span>
        </h1>

        <p className="about-description">
          The <strong>For All Summit</strong> brings together leaders,
          innovators, and change-makers to celebrate workplace culture,
          leadership excellence, and human potential.
        </p>

        <div className="about-stats">
          <div className="stat">
            <h2>5K+</h2>
            <p>Attendees</p>
          </div>
          <div className="stat">
            <h2>120+</h2>
            <p>Speakers</p>
          </div>
          <div className="stat">
            <h2>40+</h2>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
