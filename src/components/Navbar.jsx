import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";

export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };
  return (
    <nav className="w-full bg-blue-600 flex p-5 h-20">
      <ul className="flex justify-around w-full">
        <Link
          to="/"
          className="text-stone-900 font-black hover:text-green-600 text-xl"
        >
          Home
        </Link>
        {/* <Link to="/one" className="text-stone-900 hover:text-green-600 font-black text-xl">One</Link> */}
        {/* <Link to="/two" className="text-stone-900 hover:text-green-600 font-black text-xl">Two</Link> */}
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-stone-900 font-black hover:text-green-600 text-xl"
        >
          <div>Dropdown1</div>
          {isDropdownVisible && <Dropdown1 />}
        </Link>
        <Link
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className="text-stone-900 font-black hover:text-green-600 text-xl"
        >
          <div>Dropdown2</div>
          {isDropdownVisible2 && <Dropdown2 />}
        </Link>
        {/* <Link
          to="/games"
          className="text-stone-900 hover:text-green-600 font-black text-xl"
        >
          Games
        </Link> */}
        <Link
          to="/ButtonPage"
          className="text-stone-900 hover:text-green-600 font-black text-xl"
        >
          ButtonPage
        </Link>
      </ul>
    </nav>
  );
}
