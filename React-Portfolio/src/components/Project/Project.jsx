import React from 'react';
import './Project.css';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink}>Deployed App</a>
      <a href={repoLink}>GitHub Repository</a>
    </div>
  );
}

export default Project;