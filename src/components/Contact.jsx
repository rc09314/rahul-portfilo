import React from 'react';
import { socialData } from '../data';
import { heroData } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container contact-wrapper">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content glass-card">
                    <p>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="contact-details">
                        <a href={`mailto:${socialData.email}`} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#fff', color: '#333' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                            Contact on Gmail
                        </a>
                    </div>

                    <div className="social-links">
                        <a href={socialData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={socialData.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
                <footer className="footer">
                    <p>© {new Date().getFullYear()} {heroData.name}. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};


export default Contact;
