import React from 'react';
import { LuLink, LuTerminal, LuShare2 } from 'react-icons/lu';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__label">Get in touch</span>
          <h2 className="contact__title">Let's build something extraordinary.</h2>
          <p className="contact__text">
            Currently available for selective freelance projects and collaborations. If you have an idea, let's make it a reality.
          </p>
        </div>
        
        <a href="mailto:naivonsiza@gmail.com" className="contact__email">
          naivonsiza@gmail.com
        </a>
        
        <div className="contact__socials">
          <a href="#" className="contact__social-link" aria-label="Link">
            <LuLink />
          </a>
          <a href="#" className="contact__social-link" aria-label="Terminal">
            <LuTerminal />
          </a>
          <a href="#" className="contact__social-link" aria-label="Share">
            <LuShare2 />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
