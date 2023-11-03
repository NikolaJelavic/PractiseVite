import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="border-2 border-slate-200 w-1/6 m-2 p-1 rounded-xl flex flex-col">
      <div className="flex justify-end">
        <button
          onClick={handleEditClick}
          className="flex items-center justify-center w-6 h-6"
        >
          Edit
        </button>
        <button
          onClick={handleClick}
          className="flex items-center justify-center w-6 h-6"
        >
          x
        </button>
      </div>
      <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="books" />
      <div>{content}</div>
      {/* <div className=""> */}
      {/* </div> */}
    </div>
  );
}
