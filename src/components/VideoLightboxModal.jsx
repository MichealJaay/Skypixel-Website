import React, { useEffect } from 'react';

export default function VideoLightboxModal({ open, src, onClose }) {
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
    <div className="video-lightbox open" onClick={onClose}>
      <div className="video-lightbox-inner" onClick={(event) => event.stopPropagation()}>
        <button className="video-lightbox-close" type="button" aria-label="Close video" onClick={onClose}>
          x
        </button>
        <video src={src || ''} controls playsInline autoPlay preload="none" />
      </div>
    </div>
  );
}
