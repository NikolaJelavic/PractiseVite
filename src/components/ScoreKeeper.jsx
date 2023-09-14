import { useState } from "react";

export default function ScoreKeeper({numPlayers, target}) {
    
    // const [players, setPlayers] = useState(0);
    const [points, setPoints] = useState(new Array(numPlayers).fill(0));


    const increment = (idx) =>{
        setPoints((prevPoints)=>{
            return prevPoints.map((point,i)=>{
                if (i===idx) return point+1;
            return point;
            })
        })
    }

    const reset = () =>{
        setPoints(new Array(numPlayers).fill(0))
    }
    return <>
    <h1>Score keeper</h1>
        <ul>
            {points.map((point,idx)=>{
                return (
                    <li key={idx} className="w-24">
                        Player {idx+1}: {point}
                        <button onClick={()=>increment(idx)}>+1</button>
                        {point>=target && "Winner"}
                    </li>
                );
            })}
        </ul>
        <button onClick={reset}>Reset</button>
        {/* <div>
        {numPlayers.map((points)=>(<div key={numPlayers}>
            <p>Player {points}: Points{points}</p>
            <button onClick={increment}>+1</button>
        </div>))}
        </div> */}
    </>
};
