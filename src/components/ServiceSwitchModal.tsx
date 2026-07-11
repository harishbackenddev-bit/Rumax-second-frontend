"use client";

import { useState } from "react";
import "./ServiceSwitchModal.css";

interface ServiceSwitchModalProps {
  message: string;
  switchHref: string;
}

export function ServiceSwitchModal({
  message,
  switchHref,
}: ServiceSwitchModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="ssm-overlay" role="presentation" onClick={handleClose}>
      <div
        className="ssm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-switch-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="ssm-close-button"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>

        <p id="service-switch-title" className="ssm-text">
          {message}
        </p>

        <div className="ssm-actions">
          <a href={switchHref} className="ssm-switch-button">
            Switch
          </a>
          <button
            type="button"
            className="ssm-stay-button"
            onClick={handleClose}
          >
            Stay Here
          </button>
        </div>
      </div>
    </div>
  );
}
