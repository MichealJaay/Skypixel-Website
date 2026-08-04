import React from 'react';
import SectionHeader from './ui/SectionHeader';

function ServiceCard({ service }) {
  return (
    <div className="pillar-card reveal">
      <div className="imgph" data-src={service.image}>
        <img
          className="imgph-photo"
          src={service.image}
          alt={service.alt}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="imgph-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" />
            <circle cx="12" cy="12" r="5" />
          </svg>
          <span className="imgph-label">
            <b>Your image here</b>
            <br />
            {service.alt}
          </span>
        </div>
      </div>
      <div className="pillar-body">
        <span className="pillar-tag">{service.tag}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
}

export default function Services({ items }) {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHeader
          eyebrow="What We Offer"
          title="Four pillars of brand visibility"
          description="From the sky to the street - a complete outdoor advertising ecosystem built for maximum impact."
        />
        <div className="pillars">
          {items.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
