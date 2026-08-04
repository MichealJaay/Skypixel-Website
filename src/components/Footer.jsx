import React from 'react';

function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" />
      </svg>
    );
  }
  if (type === 'x') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 4l16 16M20 4 4 20" />
      </svg>
    );
  }
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

export default function Footer({ logo, socials }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img src={logo} alt="SkyPixels Ltd logo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <p>
              Sky Pixels Ltd is an innovative outdoor advertising and media technology company delivering high-impact brand visibility through digital billboards, aerial drone displays, and experiential marketing - powered by Caverton Helicopters.
            </p>
            <p className="tagline">We turn the night sky into a canvas.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>Navigate</h5>
              <a href="#services">Services</a>
              <a href="#compliance">Compliance</a>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
            <div className="footer-col">
              <h5>Follow</h5>
              <div className="social-row">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={social.label}
                    className="social-icon"
                  >
                    <SocialIcon type={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>(c) 2026 SkyPixels Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
