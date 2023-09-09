import Slot from "../components/Slot"
import RandomPokemon from '../components/RandomPokemon'

export default function Two() {
    return <>
        
  <div className='w-60'>
  {/* <Practise array={[1,2,3]} /> */}
  {/* <Practise array={["a","b","c"]} /> */}
  <Slot  val1="🍒" val2="🍌" val3="🍉"/>
  <Slot  val1="🍒" val2="🍌" val3="🍉"/>
  <Slot  val1="🍒" val2="🍌" val3="🍉"/>
  <RandomPokemon/>
  </div>

  </>
  }