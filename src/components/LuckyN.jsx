import { useState } from "react";
import Dice from "./Dice";

function d6(){
    return Math.floor(Math.random()*6+1)
}
function getRolls(n){
    return Array.from({length:n}, ()=>d6())
}
function sum(nums){
    return nums.reduce((prev,cur)=>prev+cur,0)
}

export default function LuckyN({numDice=3, goal=10}) {
    const [dice, setDice]=useState(getRolls(numDice))
    const isWinner = sum(dice) === goal;
    const roll = () => setDice(getRolls(numDice))
    return <main>
        <h1>Lucky {goal} {isWinner && "You win!"}</h1>
        <Dice dice={dice}/>
        <button onClick={roll}> Re-roll Dice</button>
    </main>

};
