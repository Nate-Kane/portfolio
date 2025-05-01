import { useState, useEffect } from 'react';

type TimeObject = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Custom hook to calculate time since a specific date with live ticking
 * @param startDate (will pass the date I started coding)
 * @returns Object containing years, months, days, hours, minutes, seconds that updates in real-time
 */
const useCodeTime = (startDate: Date): TimeObject => {
  const [time, setTime] = useState<TimeObject>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateInitialTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

      return { years, months, days, hours, minutes, seconds };
    };

    const initialTime = calculateInitialTime();
    setTime(initialTime);
    
    const timer = setInterval(() => {
      setTime(prevTime => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;
        let newMonths = prevTime.months;
        let newYears = prevTime.years;
        
        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
          
          if (newMinutes >= 60) {
            newMinutes = 0;
            newHours += 1;
            
            if (newHours >= 24) {
              newHours = 0;
              newDays += 1;
              
              if (newDays >= 30) {
                newDays = 0;
                newMonths += 1;
                
                if (newMonths >= 12) {
                  newMonths = 0;
                  newYears += 1;
                }
              }
            }
          }
        }
        
        return {
          years: newYears,
          months: newMonths,
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return time;
};

export default useCodeTime; 