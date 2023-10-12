import React from 'react';
import projectsData from './ProjectsData';
import Project from './Project';
import './Project.css';

const PortfolioPage = () => {
    return (
        <div className="projects-page">
            {projectsData.map((project, index) => (
                <Project key={index} data={project} />
            ))}
        </div>
    );
}

export default PortfolioPage;