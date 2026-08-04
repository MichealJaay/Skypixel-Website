import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader';

function ContactIcon({ type }) {
  const commonProps = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, 'aria-hidden': true };
  if (type === 'Phone') {
    return (
      <svg {...commonProps} className="contact-icon">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.21.38 2.4.77 3.53a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.55-1.55a2 2 0 0 1 2.11-.45c1.13.39 2.32.65 3.53.77A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }
  if (type === 'Email') {
    return (
      <svg {...commonProps} className="contact-icon">
        <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" />
        <path d="M21 7.5L12 13 3 7.5" />
      </svg>
    );
  }
  // default: address / location
  return (
    <svg {...commonProps} className="contact-icon">
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact({ details }) {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name') || '';
    const company = data.get('company') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const service = data.get('service') || '';
    const brief = data.get('brief') || '';

    const subject = `Campaign Brief - ${name || 'New enquiry'}${company ? ' / ' + company : ''}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service of Interest: ${service}`,
      '',
      'Campaign Brief:',
      brief,
    ].join('\n');

    window.location.href = `mailto:enquiries@skypixelsltd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      'Opening your email app to send this brief to enquiries@skypixelsltd.com - please hit send there to complete it.',
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-head reveal">
          <h2>Ready to own the sky?</h2>
          <p>
            Whether it's a drone light show for your product launch or a network of LED billboards across Nigeria - let's design a campaign that makes your brand impossible to ignore.
          </p>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            {details.map((detail) => (
              <div className="contact-info-item" key={detail.label}>
                <div>
                  <span className="ci-label">{detail.label}</span>
                  <div className="ci-value">
                    <ContactIcon type={detail.label} />
                    {detail.href ? <a href={detail.href}>{detail.value}</a> : <span>{detail.value}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form className="brief reveal" onSubmit={handleSubmit}>
            <span className="form-eyebrow">Start a Campaign Brief</span>
            <div className="form-row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Your name here" required />
              </div>
              <div className="field">
                <label>Company</label>
                <input type="text" name="company" placeholder="Your company here" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="Your email here" required />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+234 8012345678" />
              </div>
            </div>
            <div className="field full" style={{ marginBottom: '18px' }}>
              <label>Service of Interest</label>
              <select name="service" defaultValue="Select a service">
                <option>Select a service</option>
                <option>Aerial Drone Display</option>
                <option>Digital LED Billboard</option>
                <option>Outdoor Infrastructure</option>
                <option>Brand Activation</option>
                <option>Multiple Services</option>
              </select>
            </div>
            <div className="field full" style={{ marginBottom: '8px' }}>
              <label>Campaign Brief</label>
              <textarea rows="4" name="brief" placeholder="Please provide a detailed brief about your campaign requirements..."></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit Campaign Brief
            </button>
            <p className={`form-status ${status ? 'show' : ''}`}>{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
