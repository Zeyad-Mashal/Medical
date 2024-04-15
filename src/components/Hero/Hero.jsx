import React from "react";
import "./Hero.css";
import heroImage from "../../images/hero-banner.png";
const Hero = () => {
  return (
    <section class="hero">
      <div class="hero_container">
        <div class="hero_container_content">
          <h4>Lorem ipsum dolor sit amet.</h4>
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum fugit
            inventore accusantium quo architecto iure magni aspernatur velit
            ipsa voluptate.
          </p>
          <button>Emergency</button>
        </div>
        <div class="hero_container_image">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
