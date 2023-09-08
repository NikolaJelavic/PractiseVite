import './App.css'
import RandomPokemon from './components/RandomPokemon';
import Practise from './components/Practise';
import Slot from './components/Slot';
export default function App() {

  return (
    <div className='w-60'>
    {/* <RandomPokemon/> */}
    {/* <Practise array={[1,2,3]} /> */}
    {/* <Practise array={["a","b","c"]} /> */}
    <Slot  val1="🍒" val2="🍌" val3="🍉"/>
    <Slot  val1="🍒" val2="🍌" val3="🍉"/>
    <Slot  val1="🍒" val2="🍌" val3="🍉"/>
    </div>
  )
}