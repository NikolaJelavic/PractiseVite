import { useState, useEffect } from 'react';

import ToDo from '../components/ToDo';
import NavbarTodo from '../components/NavbarTodo';
import Button from '../components/Button/Button';

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

    
    <NavbarTodo/>
    <ToDo />


    <div>
      <div>
        <Button success rounded>Click here</Button>
      </div>
      <div>
        <Button>2</Button>
      </div>
      <div>
        <Button>3</Button>
      </div>
      <div>
        <Button>4</Button>
      </div>
      <div>
        <Button>5</Button>
      </div>
    </div>
  </div>
};
