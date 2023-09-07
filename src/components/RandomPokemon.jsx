import { useState } from 'react';

export default function RandomPokemon() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 151));

  const handleRefresh = () => {
    const newRandom = Math.floor(Math.random() * 151);
    setRandom(newRandom);
  };

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`;

  return (
    <div className='border-solid border-black border-2'>
      <h1>Pokemon #{random}</h1>
      <img src={url} alt={`Pokemon #${random}`} />
      <button onClick={handleRefresh} className='m-10'>Refresh</button>
    </div>
  );
}