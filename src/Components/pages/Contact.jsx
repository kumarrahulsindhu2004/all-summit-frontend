import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-badge">CONTACT US</span>

          <h1>
            Let’s <span>Connect</span>
          </h1>

          <p>
            Have questions about the event or need assistance?
            Reach out to us and our team will get back to you shortly.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> support@forall summit.com</p>
            <p><strong>Location:</strong> Mumbai, India</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message" rows="4" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
