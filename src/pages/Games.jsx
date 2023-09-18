// import Slot from "../components/Slot";
// import ScoreKeeper from "../components/ScoreKeeper";

import LuckyN from "../components/LuckyN";

function sum(nums){
  return nums.reduce((prev,cur)=>prev+cur,0)
}

function lessThan4(dice){
  return sum(dice)<4;
}
function allSameValue(dice){
  return dice.every(v=>v===dice[0])
}


export default function Games() {
  return (
    <>
      <div className="w-64 ">
        {/* <Practise array={[1,2,3]} /> */}
        {/* <Practise array={["a","b","c"]} /> */}
        {/* <div>
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
        </div> */}

        <LuckyN winCheck={lessThan4} title={"Less than 4"}/>
        <LuckyN winCheck={allSameValue} title={"All same"}/>
        {/* <LuckyN numDice={3} goal={11}/> */}

        {/* <ScoreKeeper numPlayers={10} target={5} /> */}

      </div>
    </>
  );
}
