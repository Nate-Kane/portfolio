import React from 'react';

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => (
  <div className="tech-badge">
    {name}
  </div>
);

export interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description,
  projectUrl,
  technologies,
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={imageUrl} 
          alt={`${title} screenshot`} 
          className="project-screenshot"
        />
      </div>
      <h3 className="project-title">
        {title}
        <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
        >
          <img 
            src="/projectImages/link.svg" 
            alt="Visit project" 
            className="link-icon" 
          />
        </a>
      </h3>
      <p className="project-description">
        {description}
      </p>
      <div className="project-tech-stack">
        {technologies.map((tech, index) => (
          <TechBadge key={index} name={tech} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard; 