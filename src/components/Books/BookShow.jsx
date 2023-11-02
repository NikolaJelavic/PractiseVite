

export default function BookShow({book,onDelete}) {
    const handleClick = () => {
        onDelete(book.id)
    }

    return <div className="border-2 border-slate-200 w-1/3 m-2 p-1 rounded-xl flex justify-between">
        {book.title}
        {/* <div className=""> */}
        <button onClick={handleClick} className="flex items-center justify-center w-6 h-6">
        x
      </button>
        {/* </div> */}
        </div>
}
