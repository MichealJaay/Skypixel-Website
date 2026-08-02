import React, { useRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import ActionButton from './ui/ActionButton';
import { youtubeCta } from '../assets/siteData';

function PortfolioCard({ item, onOpenVideo }) {
  const videoRef = useRef(null);

  const playPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  };

  const pausePreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpenVideo(item.video);
    }
  };

  return (
    <div
      className="portfolio-card"
      data-video={item.video}
      tabIndex={0}
      role="button"
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      onFocus={playPreview}
      onBlur={pausePreview}
      onClick={() => onOpenVideo(item.video)}
      onKeyDown={handleKeyDown}
    >
      <div className="imgph" data-src={item.cover}>
        <img
          className="imgph-photo"
          src={item.cover}
          alt={item.alt}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <video className="portfolio-video" ref={videoRef} src={item.video} muted loop playsInline preload="none" />
        <div className="imgph-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="12" cy="12" r="5" />
          </svg>
          <span className="imgph-label">
            <b>Your image here</b>
            <br />
            {item.alt}
          </span>
        </div>
        <div className="portfolio-play-badge">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="portfolio-body">
        <span className="portfolio-tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function Portfolio({ items, onOpenVideo }) {
  return (
    <section id="portfolio">
      <div className="wrap">
        <SectionHeader
          eyebrow="Proof of Work"
          title="Past campaigns"
          description="A selection of drone shows we've delivered. Hover a card to preview the show, click to watch the full video."
        />
        <div className="portfolio-scroll reveal">
          {items.map((item) => (
            <PortfolioCard key={item.title} item={item} onOpenVideo={onOpenVideo} />
          ))}
        </div>
        <div className="portfolio-more reveal">
          <a
            className="link-underline"
            href={youtubeCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch More
          </a>
        </div>
        <div className="scroll-hint reveal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          Scroll to see more work
        </div>
      </div>
    </section>
  );
}
