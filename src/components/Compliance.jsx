import React from 'react';
import SectionHeader from './ui/SectionHeader';

function ComplianceCard({ card }) {
  return (
    <div className="compliance-card reveal">
      <div className="imgph" data-src={card.image}>
        <img
          className="imgph-photo"
          src={card.image}
          alt={card.alt}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="imgph-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M9 12l2 2 4-4" />
            <rect x="3" y="4" width="18" height="16" rx="1" />
          </svg>
          <span className="imgph-label">{card.alt}</span>
        </div>
      </div>
      {card.stamp ? <span className="compliance-stamp">{card.stamp}</span> : null}
      <span className="compliance-sub">{card.sub}</span>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}

export default function Compliance({ cards }) {
  return (
    <section id="compliance" className="alt">
      <div className="wrap">
        <SectionHeader
          eyebrow="Safety &amp; Responsibility"
          title="Compliance & trust framework"
          description="Every campaign we run is safe, approved, and environmentally responsible — no exceptions."
        />
        <div className="compliance-grid">
          {cards.map((card) => (
            <ComplianceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
