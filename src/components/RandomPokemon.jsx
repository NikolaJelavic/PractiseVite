import { useState } from 'react';

export default function RandomPokemon() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 151));

  const handleRefresh = () => {
    const newRandom = Math.floor(Math.random() * 151);
    setRandom(newRandom);
  };

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`;

  return (
    <>
    <div className="border-solid border-black border-2 rounded-xl w-36">
      <h2>Pokemon #{random}</h2>
      <img src={url} alt={`Pokemon #${random}`} />
      <button onClick={handleRefresh} className='m-5 bg-red-500 border-solid border-black border-2'>Refresh</button>

    </div>
  </>
  );
}