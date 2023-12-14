import { Link } from "react-router-dom";

export default function Dropdown2() {

  const links = [
    { label: "Games", path: "/games" },
    { label: "TypeScript", path: "/typescript" },
    { label: "Jest", path: "/jest" },
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
