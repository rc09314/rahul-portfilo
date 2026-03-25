import React, { useState, useEffect } from 'react';
import { heroData } from '../data';

const AnimatedRole = ({ text }) => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setKey(prev => prev + 1);
        }, text.length * 50 + 5000);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <span key={key} style={{ display: 'inline-block' }}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="animate-letter"
                    style={{
                        animationDelay: `${index * 0.05}s`,
                        display: 'inline-block',
                        whiteSpace: 'pre'
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="section-padding hero-section">
            <div className="container hero-content">
                <div className="text-content fade-in">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name text-gradient">{heroData.name}</h1>
                    <h2 className="role"><AnimatedRole text={heroData.role} /></h2>
                    <p className="intro">{heroData.intro}</p>

                    <div className="cta-group">
                        <a href={heroData.resumeLink} className="btn-primary" download>
                            Download Resume
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="visual-content fade-in">
                    <div className="circle-glow"></div>
                    <div className="hero-profile-container">
                        <div className="tech-ring"></div>
                        <img
                            src="/logo.jpeg"
                            alt={heroData.name}
                            className="hero-profile-img"
                            onError={(e) => {
                                if (e.target.src.includes('profile.png')) {
                                    e.target.src = "/profile.jpg";
                                } else {
                                    e.target.src = "https://ui-avatars.com/api/?name=" + heroData.name + "&background=0D8ABC&color=fff";
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
