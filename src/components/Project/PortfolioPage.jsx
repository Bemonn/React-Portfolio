import React from 'react';
// Import project data and individual Project component
import projectsData from './ProjectsData';
import Project from './Project';
import './Project.css';

// PortfolioPage component to render the grid of projects
const PortfolioPage = () => {
    return (
        <div className="projects-page">
            {projectsData.map((project, index) => (
                <Project key={index} data={project} />
            ))}
        </div>
    );
}

// Export PortfolioPage component
export default PortfolioPage;