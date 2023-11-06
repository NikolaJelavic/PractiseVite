
import BookShow from "./BookShow";
import useBooksContext from "../../hooks/use-books-context";




export default function BookList() {
const {books} = useBooksContext();

  const renderBooks = books.map((book) => {
    return ( 
      <BookShow key={book.id} book={book} />
    );
  });
  return <div className="flex">
    {renderBooks}
    </div>;
}
