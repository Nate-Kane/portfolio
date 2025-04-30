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
 * Custom hook to calculate time since a specific date
 * @param startDate The date you started coding
 * @returns Object containing years, months, days, hours, minutes, seconds
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
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

      setTime({ years, months, days, hours, minutes, seconds });
    };

    // Calculate time immediately
    calculateTime();
    
    // Update every minute instead of every second (60000ms = 1 minute)
    const interval = setInterval(calculateTime, 60000);

    return () => clearInterval(interval);
  }, [startDate]);

  return time;
};

export default useCodeTime; 