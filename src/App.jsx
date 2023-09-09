import './App.css'
// import RandomPokemon from './components/RandomPokemon';
// import Practise from './components/Practise';
// import Slot from './components/Slot';
import Navbar from './components/Navbar';

import One from "./pages/One"
import Home from "./pages/Home"
import Two from "./pages/Two"
import { Route, Routes } from "react-router-dom"

export default function App() {

  return <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
        </Routes>
      </div>
    <div className='w-60'>
    {/* <RandomPokemon/> */}
    {/* <Practise array={[1,2,3]} /> */}
    {/* <Practise array={["a","b","c"]} /> */}
    {/* <Slot  val1="🍒" val2="🍌" val3="🍉"/>
    <Slot  val1="🍒" val2="🍌" val3="🍉"/>
    <Slot  val1="🍒" val2="🍌" val3="🍉"/> */}
    
    </div>

    </>
}