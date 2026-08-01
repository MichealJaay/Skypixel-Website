import React from 'react';

function MenuIcon() {
  return (
    <svg className="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function Navbar({ logo, links, open, onToggle, onClose }) {
  return (
    <header>
      <nav className="wrap">
        <a href="#" className="logo" aria-label="SkyPixels home">
          <img src={logo} alt="SkyPixels Ltd logo" onError={(e) => e.currentTarget.style.display = 'none'} />
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open ? 'true' : 'false'}
          aria-controls="navLinks"
          onClick={onToggle}
        >
          <MenuIcon />
          <CloseIcon />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`} id="navLinks">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      <div className={`nav-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
    </header>
  );
}
