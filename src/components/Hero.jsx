import React from 'react';
import ActionButton from './ui/ActionButton';

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

export default function Hero({ video, poster }) {
  return (
    <section className="hero">
      <video className="hero-bg" src={video} poster={poster} autoPlay muted loop playsInline />
      <div className="hero-overlay"></div>
      <div className="radar"></div>
      <div className="radar-rings"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="bar"></span>Powered by Caverton Helicopters · Lagos, Nigeria
          </div>
          <h1>
            We turn the <span className="accent">night sky</span> into a canvas.
          </h1>
          <p className="lead">
            Drone light shows, LED digital billboards, and landmark outdoor installations —
            delivering high-impact brand visibility across Nigeria and Africa.
          </p>
          <div className="hero-ctas">
            <ActionButton href="#services" variant="primary">
              Explore Our Services
            </ActionButton>
            <ActionButton href="#contact" variant="ghost">
              Book a Campaign
            </ActionButton>
          </div>
          <div className="badge-row">
            <div className="badge">Licensed &amp; Insured</div>
            <div className="badge">Custom Campaign Design</div>
            <div className="badge">Nationwide Coverage</div>
            <div className="badge">Fast Turnaround</div>
          </div>
        </div>
      </div>
    </section>
  );
}
