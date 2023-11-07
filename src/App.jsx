import './App.css'
import Navbar from './components/Navbar';
import One from "./pages/One"
import Two from './pages/Two';
import Home from "./pages/Home"
import Games from "./pages/Games"
import { Route, Routes } from "react-router-dom"
import ButtonPage from './pages/ButtonPage';

export default function App() {

  return <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/games" element={<Games />} />
          <Route path="/ButtonPage" element={<ButtonPage />} />
        </Routes>
      </div>
    <div className='w-60'>
    
    
    </div>

    </>
}