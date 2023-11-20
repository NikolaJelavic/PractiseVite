import { Link } from "react-router-dom";

export default function Dropdown1() {
  return (
    <div className="text-stone-900 font-black hover:text-green-600 text-xl">
      <ul>
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
      </ul>
    </div>
  );
}
