

import { useState, useEffect } from 'react';
import Quotes from '../components/Quotes';
import ToDo from '../components/ToDo';
import NavbarTodo from '../components/NavbarTodo';

export default function Two() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
      }, []);
    
      const formattedTime = currentTime.toLocaleTimeString();
    return <div>
    <h1>Clock App</h1>
    <p>Current Time: {formattedTime}</p>

    <Quotes/>
    <NavbarTodo/>
    <ToDo />
  </div>
};
