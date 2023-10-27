import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return ( 
      <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    );
  });
  return <div className="flex">{renderBooks}</div>;
}
