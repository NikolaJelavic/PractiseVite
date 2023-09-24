const URL= "http://inspo-quotes-api.herokuapp.com/quotes/random"

import { useEffect, useState } from "react";

export default function Quotes() {
    const [quote,setQuote] = useState({text:"",author:""})

    useEffect(()=>{
      fetchQuote();
    }, [])

    async function fetchQuote(){
        const response = await fetch (URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return <div>
        <button onClick={fetchQuote}>Get Quote Using handler</button>
        <h2>{quote.text}</h2>
        <h3>{quote.author}</h3>
    </div>
};
