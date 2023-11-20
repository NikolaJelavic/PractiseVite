import { Link } from "react-router-dom";

export default function Dropdown2() {
  return (
    <div className="text-stone-900 font-black hover:text-green-600 text-xl">
      <ul>
        <li>
          <Link
            to="/games"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            Games
          </Link>
        </li>
        <li>
          <Link
            to="/x"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            X
          </Link>
        </li>
        <li>
          <Link
            to="/y"
            className="text-stone-900 hover:text-green-600 font-black text-xl"
          >
            Y
          </Link>
        </li>
      </ul>
    </div>
  );
}
