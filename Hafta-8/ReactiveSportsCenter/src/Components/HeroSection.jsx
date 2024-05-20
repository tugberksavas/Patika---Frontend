import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="container">
          <h6 className="power">
            <p>POWERFULL</p>
          </h6>
          <h1>
            Group Practice
            <br />
            With Trainer
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus odit aut iste. Velit porro rerum, unde modi ipsam
            exercitationem laudantium illum. Id, laborum? Totam, dicta nisi.
            Voluptates, vero id. Perferendis.
          </p>
        </div>
        <div className="home-buttons">
          <button className="sign">Sign Up</button>
          <button className="details">Details</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
