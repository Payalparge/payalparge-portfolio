import React from 'react';

const ProjectsCard = ({ details }) => {
  // Function to handle click and open link
  const handleProjectClick = () => {
    if (details.projectLink) {
      window.open(details.projectLink, '_blank'); // Open in new tab
    }
  };

  return (
    <div className='project-card'>
      <h4>{details.title}</h4>

      {/* Clickable button or div to open project */}
      {details.projectLink && (
        <button
          onClick={handleProjectClick}
          className="project-link-button"
        >
          🔗 View Live Project
        </button>
      )}

      <h2 className='project-techno'>{details.useTechnologies}</h2>

      <ul>
        {details.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsCard;
