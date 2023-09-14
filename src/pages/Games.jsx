import Slot from "../components/Slot";
import ScoreKeeper from "../components/ScoreKeeper";

export default function Games() {
  return (
    <>
      <div className="w-60 flex">
        {/* <Practise array={[1,2,3]} /> */}
        {/* <Practise array={["a","b","c"]} /> */}
        <div>
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
        </div>
        <ScoreKeeper numPlayers={10} target={5} />
      </div>
    </>
  );
}
