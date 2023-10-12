import React from 'react';

// Functional component to render individual project
const Project = ({ data }) => {
    return (
        <div className="project">
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <a href={data.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    );
}

// Export Project component
export default Project