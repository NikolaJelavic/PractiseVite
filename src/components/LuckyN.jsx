import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

function d6(){
    return Math.floor(Math.random()*6+1)
}
function getRolls(n){
    return Array.from({length:n}, ()=>d6())
}


export default function LuckyN({title="Dice Game", numDice=2 , winCheck}) {
    const [dice, setDice]=useState(getRolls(numDice))
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice))

    return <main>
        <h1>{title} {isWinner && "You win!"}</h1>
        <Dice dice={dice}/>
        {/* <button onClick={roll}> Re-roll Dice</button> */}
        <Button clickFunc={roll} label={"Re-roll"}/>
    </main>

};
