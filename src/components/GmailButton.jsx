import React from 'react';
import './GmailButton.css';
import { socialData } from '../data';

const GmailButton = () => {
  return (
    <a href={`mailto:${socialData.email}`} className="gmail-float" title="Email Me">
      <div className="gmail-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" />
      </div>
      <div className="gmail-text">Email Me</div>
    </a>
  );
};

export default GmailButton;
