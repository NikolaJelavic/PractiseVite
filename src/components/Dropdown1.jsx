import { Link } from "react-router-dom";

export default function Dropdown1() {

    const links = [
        { label: "One", path: "/one" },
        { label: "Two", path: "/two" },
        { label: "Three", path: "/three" },
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
      {/* <ul>
        <li>
          <Link
            to="/one"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            One
          </Link>
        </li>
        <li>
          <Link
            to="/two"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            Two
          </Link>
        </li>
        <li>
          <Link
            to="/three"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            Three
          </Link>
        </li>
      </ul> */}
      {renderedLinks}
    </div>
  );
}
