import React from 'react';

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <header className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </header>
  );
}
