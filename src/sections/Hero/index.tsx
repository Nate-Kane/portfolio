import useCodeTime from '../../hooks/useCodeTime';

const startDate = new Date(2020, 10, 1); // November 1, 2020

const Hero = () => {
  const time = useCodeTime(startDate);

  const formatTime = () => {
    const parts = [];
    if (time.years > 0) {
      parts.push(`${time.years} year${time.years !== 1 ? 's' : ''}`);
    }
    if (time.months > 0) {
      parts.push(`${time.months} month${time.months !== 1 ? 's' : ''}`);
    }
    if (time.days > 0) {
      parts.push(`${time.days} day${time.days !== 1 ? 's' : ''}`);
    }
    parts.push(`${time.hours} hour${time.hours !== 1 ? 's' : ''}`);
    
    return parts.join(', ');
  };

  return (
    <section className="hero-section">
      <h1>Nate Kane</h1>
      <p>A software engineer for <span className="coding-time">{formatTime()}</span></p>
    </section>
  );
};

export default Hero; 