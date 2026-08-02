import React, { useState } from 'react';
import ActionButton from './ui/ActionButton';

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setFlipped((value) => !value);
    }
  };

  return (
    <div
      className={`team-card ${flipped ? 'flipped' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`${member.name}, ${member.role} — click to flip`}
      onClick={() => setFlipped((value) => !value)}
      onKeyDown={handleKeyDown}
    >
      <div className="team-inner">
        <div className="team-face team-front">
          <div className="imgph" data-src={member.image}>
            <img
              className="imgph-photo"
              src={member.image}
              alt={member.alt}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="imgph-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
              </svg>
              <span className="imgph-label">
                <b>Your image here</b>
                <br />
                Photo of {member.name}
              </span>
            </div>
          </div>
          <div className="team-caption">
            <h4>{member.name}</h4>
            <span>{member.role}</span>
          </div>
        </div>
        <div className="team-face team-back">
          <h4>{member.name}</h4>
          <span className="team-back-role">{member.role}</span>
          <p>{member.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function About({ members, downloadProfile }) {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span className="bar"></span>Who We Are
          </div>
          <h2>The team behind the sky</h2>
          <p>
            Click on a team member's photo to read more about them, or download
            the full profile with photos and roles.
          </p>
          <ActionButton
            href={downloadProfile}
            variant="download"
            className="profile-download-btn"
            target="_blank"
            rel="noopener noreferrer"
            download
            icon={<DownloadIcon />}
          >
            Download Profile
          </ActionButton>
        </div>

        <div className="team-grid">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <div className="scroll-hint reveal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          Scroll to see the full team
        </div>
      </div>
    </section>
  );
}
