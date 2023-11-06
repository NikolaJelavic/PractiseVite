import { useState, useEffect } from "react";

import ToDo from "../components/ToDo";
import NavbarTodo from "../components/NavbarTodo";
import Button from "../components/Button/Button";

import { GoBell  } from "react-icons/go";
// import { GoCloudDownload, GoDatabase } from "react-icons/go";


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


  const handleClick=()=>{
    console.log('Click');
  }
  const formattedTime = currentTime.toLocaleTimeString();
  return (
    <div>
      <h1>Clock App</h1>
      <p>Current Time: {formattedTime}</p>

      <NavbarTodo />
      <ToDo />

      <div>
        <div>
          <Button success outline rounded onClick={handleClick} >
            <GoBell />
            Click me
          </Button>
        </div>
        <div>
          <Button danger outline >
            {/* <GoCloudDownload /> */}
            Buy now
          </Button>
        </div>
        <div>
          <Button warning outline >
            {/* <GoDatabase /> */}
            See Deal
          </Button>
        </div>
        <div>
          <Button secondary>Hide Ads</Button>
        </div>
        <div>
          <Button primary>Something</Button>
        </div>
      </div>
    </div>
  );
}
