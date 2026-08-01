import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader';

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
                  {detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}
                </div>
              </div>
            ))}
          </div>
          <form className="brief reveal" onSubmit={handleSubmit}>
            <span className="form-eyebrow">Start a Campaign Brief</span>
            <div className="form-row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="field">
                <label>Company</label>
                <input type="text" name="company" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" name="phone" />
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
              <textarea rows="4" name="brief"></textarea>
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
