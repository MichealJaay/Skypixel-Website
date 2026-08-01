import React from 'react';

export default function SectionHeader({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-head reveal ${className}`.trim()}>
      <div className="eyebrow">
        <span className="bar"></span>
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
