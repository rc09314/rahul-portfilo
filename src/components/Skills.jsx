import React from 'react';
import { skillsData } from '../data';

const getSkillIcon = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('html')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
    if (nameLower.includes('css')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
    if (nameLower.includes('javascript')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
    if (nameLower.includes('react')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
    if (nameLower.includes('tailwind')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg";
    if (nameLower.includes('bootstrap')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
    if (nameLower.includes('git')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
    return "";
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((skill) => (
                        <div key={skill.name} className="skill-card glass-card">
                            <div className="skill-info">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {getSkillIcon(skill.name) && (
                                        <img src={getSkillIcon(skill.name)} alt={skill.name} className="skill-icon" style={{ width: '24px', height: '24px' }} />
                                    )}
                                    <span>{skill.name}</span>
                                </div>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="progress-bg">
                                <div
                                    className="progress-bar animated-progress"
                                    style={{ '--target-width': `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
