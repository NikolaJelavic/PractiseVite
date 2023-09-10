import {useState} from 'react'

export default function RandomColor({colors}) {
    const [random, setRandom] = useState(Math.floor(Math.random() * 4));

    return <div className={colors}>1</div>
}
