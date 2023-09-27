import Slot from "../components/Slot";
import ScoreKeeper from "../components/ScoreKeeper";
import RandomColor from "../components/RandomColor";

import LuckyN from "../components/LuckyN";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import RandomPokemon from "../components/RandomPokemon";
import { useState } from "react";

function sum(nums){
  return nums.reduce((prev,cur)=>prev+cur,0)
}

function lessThan4(dice){
  return sum(dice)<4;
}
function allSameValue(dice){
  return dice.every(v=>v===dice[0])
}
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

export default function Games() {
  const [value, setValue] = useState(2);
  return (
    <div className="flex">
      <div className="w-64 ">
        {/* <Practise array={[1,2,3]} /> */}
        {/* <Practise array={["a","b","c"]} /> */}
       

        <LuckyN winCheck={lessThan4} title={"Less than 4"}/>
        <LuckyN winCheck={allSameValue} title={"All same"}/>
        {/* <LuckyN numDice={3} goal={11}/> */}

        {/* <ScoreKeeper numPlayers={10} target={5} /> */}

      </div>
      <Box sx={{ border: "1px solid red", p: 2, width: 250, m: 2 }}>
        <h1 className="pb-2">Rating: {value}</h1>
        <RandomPokemon />
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <div >
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
          <Slot val1="🍒" val2="🍌" val3="🍉" />
        </div>
        <div className="flex justify-center flex-wrap w-96 h-80 m-20">
        {colors.map((color, index) => (
          <RandomColor key={index} colors={colors} />
        ))}
      </div>
    </div>
  );
}
