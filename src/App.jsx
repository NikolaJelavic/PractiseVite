import './App.css'
import Navbar from './components/Navbar';
import One from "./pages/One"
import Two from './pages/Two';
import Three from './pages/Three';
import Home from "./pages/Home"
import Games from "./pages/Games"
import { Route, Routes } from "react-router-dom"
import ButtonPage from './pages/ButtonPage';
import Typescript from './pages/Typescript';
import Jest from './pages/Jest';

export default function App() {

  return <>
      <Navbar/>
      {/* <div className="container"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/games" element={<Games />} />
          <Route path="/ButtonPage" element={<ButtonPage />} />
          <Route path="/typescript" element={<Typescript />} />
          <Route path="/jest" element={<Jest/>} />

          
        </Routes>
      {/* </div> */}
    <div className='w-60'>
    
    
    </div>

    </>
}