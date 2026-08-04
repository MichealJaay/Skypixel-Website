import React, { useEffect } from 'react';

export default function ImageLightboxModal({ open, src, alt, onClose }) {
  useEffect(() => {
    document.body.classList.toggle('modal-open', open);
    return () => document.body.classList.remove('modal-open');
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="image-lightbox open" onClick={onClose}>
      <div className="image-lightbox-inner" onClick={(event) => event.stopPropagation()}>
        <button className="video-lightbox-close" type="button" aria-label="Close image" onClick={onClose}>
          ×
        </button>
        <img src={src || ''} alt={alt || 'Compliance image'} />
      </div>
    </div>
  );
}
