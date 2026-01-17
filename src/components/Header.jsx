import React, { useEffect, useState } from 'react';
import { LuTerminal, LuSun, LuMoon } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or default to light as per html class="light"
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="header__logo-icon">
              <LuTerminal />
            </div>
            <h2>Azis Novian</h2>
          </Link>
        </div>
        
        <nav className="header__nav">
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <a href="#contact">Contact</a>
        </nav>
        
        <div className="header__actions">
          {/* <button 
            className="header__theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            style={{ padding: '0.5rem', display: 'flex', alignItems: 'center' }}
          >
            {isDark ? <LuSun /> : <LuMoon />}
          </button> */}
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header__cta"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
