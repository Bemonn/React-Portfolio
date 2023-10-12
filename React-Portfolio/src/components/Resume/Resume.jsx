import React from 'react';
import './Resume.css';

function Resume() {
    const proficiencies = [
        'HTML5', 'CSS', 'JavaScript', 'APIs', 'Bootstrap', 'GIT', 
        'Node.Js', 'Jest', 'Express.js', 'MySQL', 'Sequelize', 
        'Object-Relational Mapping(ORM)', 'Model-View-Controller (MVC)', 
        'NoSQL', 'Progressive Web Applications (PWA)', 'MongoDB', 
        'Mongoose', 'GraphQL', 'React', 'MERN', 'State'
    ];

    return (
        <div className="resume-container">
            <h2>Resume</h2>
            <a href="/Resume.pdf" download="Tristan-Resume" className="resume-link">Download My Resume</a>
            
            <h3>Proficiencies</h3>
            <ul className="proficiencies-list">
                {proficiencies.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Resume;