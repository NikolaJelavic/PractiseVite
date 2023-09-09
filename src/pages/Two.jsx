import Slot from "../components/Slot"

// import Navbar from "../components/Navbar"

export default function Two() {
    return <>
    {/* <Navbar/> */}
    
  <div className='w-60'>
  {/* <RandomPokemon/> */}
  {/* <Practise array={[1,2,3]} /> */}
  {/* <Practise array={["a","b","c"]} /> */}
  <Slot  val1="🍒" val2="🍌" val3="🍉"/>
  <Slot  val1="🍒" val2="🍌" val3="🍉"/>
  <Slot  val1="🍒" val2="🍌" val3="🍉"/>
  </div>

  </>
  }