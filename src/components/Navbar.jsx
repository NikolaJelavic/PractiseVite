import { Link } from "react-router-dom"
// import { useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 flex p-8 ">
      <ul className="flex justify-around w-full">
        <Link to="/" className="text-stone-900 font-black hover:text-orange-400 text-xl">Home</Link>
        <Link to="/one" className="text-stone-900 hover:text-orange-400 font-black text-xl">One</Link>
        <Link to="/two" className="text-stone-900 hover:text-orange-400 font-black text-xl">Two</Link>
      </ul>
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }