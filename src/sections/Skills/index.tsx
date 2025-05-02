import './Skills.css';

interface SkillBadgeProps {
  name: string;
  logo?: string;
}

const SkillBadge = ({ name, logo }: SkillBadgeProps) => (
  <div className="skill-badge">
    {logo && <img src={logo} alt={`${name} logo`} className="skill-logo" />}
    {name}
  </div>
);

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-header">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <br/>
          <h3>Specialization</h3>
          <div className="skill-badges">
            <SkillBadge name="JavaScript" logo="/logos/javascript.svg" />
            <SkillBadge name="HTML" logo="/logos/html.svg" />
            <SkillBadge name="CSS" logo="/logos/css.svg" />
            <SkillBadge name="TypeScript" logo="/logos/typescript.svg" />
            <SkillBadge name="React" logo="/logos/react.svg" />
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Toolkit</h3>
          <div className="skill-badges">
            <SkillBadge name="GitHub" logo="/logos/github.svg" />
            <SkillBadge name="Scrum/Agile" logo="/logos/scrum-agile.svg" />
            <SkillBadge name="Firebase" logo="/logos/firebase.svg" />
            <SkillBadge name="Vite" logo="/logos/vite.svg" />
            <SkillBadge name="Prompt Engineering" logo="/logos/prompt-engineering.svg" />
            <SkillBadge name="Solution Research" logo="/logos/solution-research.svg" />
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Extended capabilities</h3>
          <div className="skill-badges">
            <SkillBadge name="React Native" logo="/logos/react.svg" />
            <SkillBadge name="SQL" logo="/logos/sql.svg" />
            <SkillBadge name="AEM" logo="/logos/aem.svg" />
            <SkillBadge name="CMS Platforms" logo="/logos/cms.svg" />
          </div>
        </div>
        <br/>
      </div>
    </section>
  );
};

export default Skills; 