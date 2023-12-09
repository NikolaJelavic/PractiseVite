import { Link } from "react-router-dom";

export default function Dropdown1() {

    const links = [
        { label: "One", path: "/one" },
        { label: "Two", path: "/two" },
        { label: "ButtonPage", path: "/ButtonPage" },
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
