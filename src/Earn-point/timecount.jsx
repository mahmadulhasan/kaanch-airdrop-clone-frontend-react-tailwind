import React, { useEffect, useState } from "react";

const Timecount = () => {
  const [timePassed, setTimePassed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2023-08-08T00:00:00"); 

    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate; // difference in ms

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimePassed({ days, hours, minutes, seconds });
    };

    updateTimer(); // run once immediately
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[90%] text-white text-[clamp(32px,10vw,10rem)] text-ibm flex flex-row gap-5 lg:gap-10 font-extrabold text-darkshade items-center justify-around">
      <span>{timePassed.days}<span className="text-[clamp(20px,4vw,5rem)]">d</span> </span>
      <span>{timePassed.hours}<span className="text-[clamp(20px,4vw,5rem)]">h</span></span>
      <span>{timePassed.minutes}<span className="text-[clamp(20px,4vw,5rem)]">m</span></span>
      <span>{timePassed.seconds}<span className="text-[clamp(20px,4vw,5rem)]">s</span></span>
    </div>
  );
};

export default Timecount;
