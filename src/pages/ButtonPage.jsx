

import { GoBell  } from "react-icons/go";
// import { GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button/Button";


export default function ButtonPage(params) {
     
    const handleClick=()=>{
        console.log('Click');
      }
    return <div>
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
};
