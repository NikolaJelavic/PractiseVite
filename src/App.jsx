import './App.css'
import Navbar from './components/Navbar';
import One from "./pages/One"
import Two from './pages/Two';
import Home from "./pages/Home"
import Games from "./pages/Games"
import { Route, Routes } from "react-router-dom"

export default function App() {

  return <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    <div className='w-60'>
    
    
    </div>

    </>
}