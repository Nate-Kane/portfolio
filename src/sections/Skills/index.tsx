import './Skills.css';

// interface SkillBadgeProps {
//   name: string;
//   logo?: string;
// }

// const SkillBadge = ({ name, logo }: SkillBadgeProps) => (
//   <div className="skill-badge">
//     {logo && <img src={logo} alt={`${name} logo`} className="skill-logo" />}
//     {name}
//   </div>
// );

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-header">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Specialization</h3>
          <div className="skill-badges">
            {/* <SkillBadge name="JavaScript" logo="/logos/javascript.svg" /> */}
            <div className="skill-badge">HTML</div>
            <div className="skill-badge">CSS</div>
            <div className="skill-badge">TypeScript</div>
            <div className="skill-badge">React</div>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Toolkit</h3>
          <div className="skill-badges">
            <div className="skill-badge">GitHub</div>
            <div className="skill-badge">Scrum/Agile</div>
            <div className="skill-badge">Firebase</div>
            <div className="skill-badge">Vite</div>
            <div className="skill-badge">Prompt Engineering</div>
            <div className="skill-badge">Solution Research</div>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Extended capabilities</h3>
          <div className="skill-badges">
            <div className="skill-badge">React Native</div>
            <div className="skill-badge">SQL</div>
            <div className="skill-badge">AEM</div>
            <div className="skill-badge">CMS (Wix, Shopify)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 