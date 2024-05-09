import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Construindo experiências digitais que inspiram</h2>
        <p>
        Desenvolvedor Front-end e Mobile Apaixonado | Transformando Ideias em Soluções Web e Mobile Fluidas e Visualmente Impressionantes
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="left-icon">
            <div className="tech-icon">
              <img src="./assets/images/img05.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/img01.png" alt="" />
            </div>
          </div>
          <img src="./assets/images/img12.jpeg" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img06.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
