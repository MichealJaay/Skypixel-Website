import React from 'react';
import SectionHeader from './ui/SectionHeader';

export default function Capabilities({ items, waypoints }) {
  return (
    <section id="capabilities">
      <div className="wrap">
        <SectionHeader eyebrow="Technical Expertise" title="Built to deliver, end to end" />
        <div className="capabilities-top">
          {items.map((item) => (
            <div className="imgph reveal" key={item.label} data-src={item.image}>
              <img
                className="imgph-photo"
                src={item.image}
                alt={item.alt}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="imgph-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="12" cy="12" r="5" />
                </svg>
                <span className="imgph-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="waypoints">
          {waypoints.map((waypoint) => (
            <div className="waypoint reveal" key={waypoint.code}>
              <div className="waypoint-marker">{waypoint.code}</div>
              <div>
                <h3>{waypoint.title}</h3>
                <p>{waypoint.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
