import useCodeTime from '../../hooks/useCodeTime';
import './Hero.css';

const startDate = new Date(2020, 10, 1); // November 1, 2020. When I started coding

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
    if (time.hours > 0) {
      parts.push(`${time.hours} hour${time.hours !== 1 ? 's' : ''}`);
    }
    
    return parts.join(', ');
  };

  return (
    <section className="hero-section">
      <h1>Nate Kane</h1>
      <div className="developer-status">
        <div className="role-text">Software Engineer | Web Developer</div>
        <div className="time-container">
          <div className="coding-time">{formatTime()}</div>
          <div className="ticking-seconds">{time.minutes} minutes and {time.seconds} seconds</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 