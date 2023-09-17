// import Slot from "../components/Slot";
// import ScoreKeeper from "../components/ScoreKeeper";

import LuckyN from "../components/LuckyN";

export default function Games() {
  return (
    <>
      <div className="w-60 ">
        {/* <Practise array={[1,2,3]} /> */}
        {/* <Practise array={["a","b","c"]} /> */}
        {/* <div>
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
        </div> */}

        <LuckyN numDice={2} goal={7}/>
        <LuckyN numDice={3} goal={11}/>

        {/* <ScoreKeeper numPlayers={10} target={5} /> */}

      </div>
    </>
  );
}
