import PropertyList from "../components/PropertyList";
// import Clicker from "../components/Clicker";
import Quotes from "../components/Quotes";
import SearchBar from "../components/Cars/SearchBar";
import ImageList from "../components/Cars/ImageList";
import searchImages from "../api";

import BookCreate from "../components/Books/BookCreate";
import BookList from "../components/Books/BookList";

import { useState, useEffect } from "react";
import { BookSharp } from "@mui/icons-material";
import axios from "axios";

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
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }

  useEffect(()=>{
    fetchBooks();
  },[])

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title:newTitle,
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    
        const updateBooks=[
          ...books,
          response.data
        ]
        setBooks(updateBooks);
        // console.log('Need to add book with:', title);
  };


  const handleSubmit = async (term) => {
    // console.log("Do a search with", term);
    const result = await searchImages(term);
    setImages(result);
    console.log(result);
  };

  return (
    <div>
      {/* <Clicker message="Hi!" buttonText="CLick me" /> */}
      {/* <PropertyList properties={properties} /> */}

      {/* <Quotes /> */}
      {/* <SearchBar onSubmit={handleSubmit} /> */}
      {/* <ImageList images={images} /> */}
      <BookCreate onCreate={createBook} />
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}
