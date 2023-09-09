import {useState} from 'react';

export default function RandomColor({colors}) {
    const [random, setRandom] = useState(Math.floor(Math.random() * 16));
    const ColorChage = () =>{
        const newRandom = Math.floor(Math.random()*16)
        setRandom(newRandom);
    }

    return <div style={{backgroundColor:colors[random]}} onClick={ColorChage} className='w-20 h-20'></div>
}


// 