import React from 'react';
import SectionHeader from './ui/SectionHeader';

export default function WhySection({ features, comparisonRows }) {
  return (
    <section id="why" className="alt">
      <div className="wrap">
        <SectionHeader
          eyebrow="The SkyPixels Advantage"
          title="Why choose SkyPixels over conventional agencies?"
        />
        <div className="why-grid">
          <div className="imgph reveal" data-src="/images/why/drone-show-corporate-event.jpg">
            <img
              className="imgph-photo"
              src="/images/why/drone-show-corporate-event.jpg"
              alt="Drone show corporate event"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="imgph-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 1 0 18" />
              </svg>
              <span className="imgph-label">
                <b>Your image here</b>
                <br />
                Drone light show over a corporate event
              </span>
            </div>
          </div>

          <div className="reveal">
            <div className="compare-wrap">
              <table className="compare">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Traditional</th>
                    <th>SkyPixels</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row}>
                      <th>{row}</th>
                      <td className="no">✕</td>
                      <td className="yes">✓</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="why-features">
              {features.map((feature) => (
                <div className="why-feat" key={feature.title}>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
