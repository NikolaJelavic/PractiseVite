import { Link } from "react-router-dom";

export default function Dropdown2() {

  const links = [
    { label: "Games", path: "/one" },
    { label: "X", path: "/x" },
    { label: "Y", path: "/y" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="text-stone-900 hover:text-green-600 font-black text-xl flex"
      >
        {link.label}
      </Link>
    );
  });
    
  return (
    <div className="text-stone-900 font-black hover:text-green-600 text-xl">
      
          {/* <Link
            to="/games"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            Games
          </Link>
        
          <Link
            to="/x"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            X
          </Link>
        
          <Link
            to="/y"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            Y
          </Link>
        */}
        {renderedLinks}
    </div>
  );
}
