import React from 'react';
import { experienceData } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="timeline-item glass-card">
                            <div className="timeline-header">
                                <h3>{exp.role}</h3>
                                <span className="date">{exp.period}</span>
                            </div>
                            <h4 className="company">{exp.company}</h4>
                            <p>{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
