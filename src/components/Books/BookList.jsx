import { useContext } from "react";
import BooksContext from "../context/books"; 
import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {


    const {count,incrementCount} = useContext(BooksContext);

  const renderBooks = books.map((book) => {
    return ( 
      <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    );
  });
  return <div className="flex">
    {count}
    <button onClick={incrementCount}>Click</button>
    {renderBooks}
    </div>;
}
