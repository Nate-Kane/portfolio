import { useState } from 'react';
import './Projects.css';
import ProjectCard from './components/ProjectCard';

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    imageUrl: '/projectImages/guitarHelp/guitar_practices.png',
    title: 'Guitar Practice Assistant',
    description: 'A web app purposed with helping users master guitar. I designed and built practices that break users out of bad habits and help them learn complex patterns more simply.',
    projectUrl: 'https://guitarhelp.web.app',
    technologies: ['React JS', 'TypeScript', 'HTML', 'CSS', 'Vite', 'Firebase']
  },
  {
    imageUrl: '/projectImages/siWidgetDemo/widgetDemos.png',
    title: 'ShipInsure Widget Demos',
    description: "An idea I pitched to, then built for, one of my employers. One of ShipInsure's core product is a widget. This site allows clients to view and customize any version of the widget.",
    projectUrl: 'https://shipinsure.github.io/demo-widgets/widget-demos.html',
    technologies: ['Vanilla JS', 'HTML', 'CSS']
  },
  {
    imageUrl: '/projectImages/nkOfficial/nkOfficialLanding.png',
    title: 'NK Offical Music',
    description: 'My side passion is music! I built this site as a hub for all things relating to my music; scheduling and advertising upcoming shows, marketing my music, and sharing my latest music projects.',
    projectUrl: 'https://www.natekaneofficial.com',
    technologies: ['Wix']
  },
  {
    imageUrl: '/projectImages/sss/sss.png',
    title: 'Silver Streak Sounds',
    description: "Simple static site built for a friend's music venue. A visually pleasing, playful site showcasing a dynamically changing sunrise/sunset background (based of time of day).",
    projectUrl: 'https://silverstreaksounds.web.app',
    technologies: ['Vanilla JS', 'HTML', 'CSS']
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const getNextIndex = (currentIndex: number, offset = 1) => {
    return (currentIndex + offset) % projectsData.length;
  };
  
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="projects-section">
      <h2 className="section-header">Projects</h2>
      <div className="projects-container">
        <div className="card-slider">
          <div className="main-card-wrapper">
            <ProjectCard
              imageUrl={projectsData[activeIndex].imageUrl}
              title={projectsData[activeIndex].title}
              description={projectsData[activeIndex].description}
              projectUrl={projectsData[activeIndex].projectUrl}
              technologies={projectsData[activeIndex].technologies}
            />
          </div>
          
          <div className="preview-cards">
            <div 
              className="preview-card" 
              onClick={() => handleCardClick(getNextIndex(activeIndex))}
            >
              <div className="preview-image">
                <img 
                  src={projectsData[getNextIndex(activeIndex)].imageUrl} 
                  alt={`${projectsData[getNextIndex(activeIndex)].title} preview`} 
                />
              </div>
            </div>
            
            <div 
              className="preview-card secondary" 
              onClick={() => handleCardClick(getNextIndex(activeIndex, 2))}
            >
              <div className="preview-image">
                <img 
                  src={projectsData[getNextIndex(activeIndex, 2)].imageUrl} 
                  alt={`${projectsData[getNextIndex(activeIndex, 2)].title} preview`} 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-indicators">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`project-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
              aria-label={`View ${projectsData[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 