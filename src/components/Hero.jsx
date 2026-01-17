import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import '../styles/Hero.scss';
import profileImg from '../assets/images/profile.jpg';
import LazyImage from './LazyImage';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero__grid">
        <div className="hero__image-wrapper">
          <LazyImage
            src={profileImg}
            alt="Professional portrait of a male developer"
            className="hero__image"
            aspectRatio="4/5"
            borderRadius="0.75rem"
          />
        </div>
        
        <div className="hero__content">
          <div className="hero__header">
            <span className="hero__label">Software Engineer</span>
            <h1 className="hero__title">
              I build clean, functional, and user-centric web experiences.
            </h1>
          </div>
          
          <div className="hero__bio">
            <p>
              Hi, I'm Azis. I am an engineer focused on creating minimalist digital products with a focus on performance and usability. With over 8 years of experience, I blend technical expertise with a keen eye for aesthetics.
            </p>
            <p>
              My approach is rooted in Swiss design principles: clarity, objectivity, and hierarchy. I believe that great software shouldn't just work well—it should be an effortless experience for the end user.
            </p>
          </div>
          
          <div className="hero__actions">
            <a href="#projects" className="hero__link">
              <span>See my work</span>
              <LuArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
