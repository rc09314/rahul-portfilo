import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content glass-card">
                    <p>
                        I am a passionate <strong>Frontend Developer</strong> who loves converting designs into responsive websites and continuously learning new frontend technologies.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        My focus is on writing clean, elegant, and efficient code. I stay updated with the latest trends in web development to deliver the best user experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
