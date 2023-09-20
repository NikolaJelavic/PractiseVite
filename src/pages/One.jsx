import PropertyList from "../components/PropertyList";
import Clicker from "../components/Clicker";
import Rating from '@mui/material/Rating';
import RandomPokemon from "../components/RandomPokemon";
import { useState } from "react";

const properties = [
  { id: 10, name: "Desert  Yurt", rating: 4.9, price: 150 },
  { id: 11, name: "Lone mountain cabin", rating: 4.8, price: 250 },
  { id: 12, name: "Cactus retreat", rating: 4.75, price: 300 },
  { id: 13, name: "Redwood Treehouse", rating: 4.9, price: 120 },
  { id: 14, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 15, name: "Miner Campground", rating: 4.69, price: 96 },
];

export default function One() {
  const [value, setValue] = useState(2);
  return (
    <>
      <Clicker message="Hi!" buttonText="CLick me" />
      <PropertyList properties={properties} />
      
      <RandomPokemon />
      <h1>Curresnt Score: {value}</h1>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
}
