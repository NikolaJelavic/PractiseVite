import {useState, useContext} from 'react';
import BooksContext from '../context/books';

export default function BookCreate() {
    const [title,setTitle]= useState('');
    const {createBook} = useContext(BooksContext);

    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }


    return <div className='border-2 border-slate-200 m-3 rounded-xl w-1/2'>
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input value={title} onChange={handleChange} className='border-2 border-slate-200 m-3'/>
            <button >Create!</button>
        </form>
    </div>
};
