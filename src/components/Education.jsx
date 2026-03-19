import React from 'react';
import { educationData } from '../data';

const Education = () => {
    return (
        <section id="education" className="section-padding">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="education-card glass-card">
                            <h3>{edu.degree}</h3>
                            <h4>{edu.institute}</h4>
                            <span className="year">{edu.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
