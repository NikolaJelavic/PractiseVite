

import { Link } from "react-router-dom";

export default function Dropdown3() {

  const links = [
    { label: "1", path: "/1" },
    { label: "2", path: "/2" },
    { label: "3", path: "/3" },
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
        {renderedLinks}
    </div>
  );
}
