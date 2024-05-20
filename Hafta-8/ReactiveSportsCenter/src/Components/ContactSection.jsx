import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>CONTACT US</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Amet consectetur adipisicing elit
        </p>
        <div className="message-container">
          <div className="phone-container">
            <h6>
              Mobile Number &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
              Address
            </h6>
            <span>+135 773 321 4442&nbsp; &nbsp; &nbsp;demo@demo.com</span>
            <div className="input-container">
              <h3>Make An Appointment</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                rows="5"
                cols="50"
                name="text"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="googleMap">
          <iframe
              width="100%"
              height="300"
              style={{ border: '0' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.415875119398!2d-0.12764768421974877!3d51.50732110731601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ebe32b34fb%3A0x40a82991916b159a!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1624556747964!5m2!1sen!2suk"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
