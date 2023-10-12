import React from 'react';

const Project = ({ data }) => {
    return (
        <div className="project">
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <a href={data.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href={data.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    );
}

export default Project