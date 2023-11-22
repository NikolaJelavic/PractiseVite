import { GoBell } from "react-icons/go";
// import { GoCloudDownload, GoDatabase } from "react-icons/go";
import { useState } from "react";

import Button from "../components/Button/Button";
import Accordion from "../components/Button/Accordion";
import Dropdown from "../components/Button/Dropdown";
import ModalPage from "../components/Button/ModalPage";
import Table from "../components/Button/Table";

export default function ButtonPage() {
  const [selection, setSelection] = useState(null);

  const items = [
    {
      id: 1,
      label: "Can I use React on a project",
      content: "You can use React on any project you want",
    },
    {
      id: 2,
      label: "Can I use JS on a project",
      content: "You can use JS on any project you want",
    },
    {
      id: 3,
      label: "Can I use CSS on a project",
      content: "You can use CSS on any project you want",
    },
  ];

  const handleClick = () => {
    console.log("Click");
  };

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Name", render: (data) => data.name },
    { label: "Color", render:(data) => data.color},
    { label: "Score", render:(data) => data.score },
  ];

  return (
    <div>
      <div className="flex">
        <div>
          <Button success outline rounded onClick={handleClick}>
            <GoBell />
            Click me
          </Button>
        </div>
        <div>
          <Button danger outline>
            {/* <GoCloudDownload /> */}
            Buy now
          </Button>
        </div>
        <div>
          <Button warning outline>
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
      <div className="m-5 border w-1/2">
        <Accordion items={items} />
      </div>
      <div className="flex m-5">
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>
      <div className="m-5">
        <ModalPage />
      </div>
      <div className="m-5">
        <Table data={data} config={config} />
      </div>
    </div>
  );
}
