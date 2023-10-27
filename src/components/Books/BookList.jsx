import BookShow from "./BookShow"

export default function BookList({books, onDelete}) {
    const renderBooks=books.map((book)=>{
        return <BookShow key={book.id} book={book} onDelete={onDelete}/>
    })
    return <div>{renderBooks}</div>
};
