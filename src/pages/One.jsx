import PropertyList from "../components/PropertyList";
// import Clicker from "../components/Clicker";
import Quotes from "../components/Quotes";
import SearchBar from "../components/Cars/SearchBar";
import ImageList from '../components/Cars/ImageList'
import searchImages from "../api";

import BookCreate from "../components/Books/BookCreate";
import BookList from "../components/Books/BookList";

import { useState } from 'react';
import { BookSharp } from "@mui/icons-material";


const properties = [
  { id: 10, name: "Desert  Yurt", rating: 4.9, price: 150 },
  { id: 11, name: "Lone mountain cabin", rating: 4.8, price: 250 },
  { id: 12, name: "Cactus retreat", rating: 4.75, price: 300 },
  { id: 13, name: "Redwood Treehouse", rating: 4.9, price: 120 },
  { id: 14, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 15, name: "Miner Campground", rating: 4.69, price: 96 },
];

export default function One() {

  const [images, setImages] = useState([]);
  const [books,setBooks] = useState([]);

  const createBook = (title)=> {
    const updateBooks=[
      ...books,
      {id:Math.round(Math.random()*9999),
         title} //  == title:title
    ]
    setBooks(updateBooks);
    console.log('Need to add book with:', title);
  }

  const deleteBookById = (id) => {
const updatedBooks = books.filter((book)=>{
  return book.id !==id;
})
setBooks(updatedBooks)
  }

  const handleSubmit = async (term) => {
    // console.log("Do a search with", term);
    const result = await searchImages(term);
    setImages(result);
    console.log(result);
  };

  return (
    <div >
      {/* <Clicker message="Hi!" buttonText="CLick me" /> */}
      {/* <PropertyList properties={properties} /> */}

      {/* <Quotes /> */}
      {/* <SearchBar onSubmit={handleSubmit} /> */}
      {/* <ImageList images={images} /> */}
      <BookCreate onCreate={createBook}/>
      <BookList books={books} onDelete={deleteBookById}/>
    </div>
  );
}
