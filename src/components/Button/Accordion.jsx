import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items }) {
  const [expendedIndex, setExpandedIndex] = useState(3);

  const handleClick = (otherIndex) => {
    console.log(expendedIndex);
    if (expendedIndex===otherIndex){
      setExpandedIndex(3)
    }else{
    setExpandedIndex(otherIndex);
  }
  };

  const renderedItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;

    const icon = (
      <span>{isExpended ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.id} className="">
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {item.label}
          {icon}
        </div>
        {isExpended && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
