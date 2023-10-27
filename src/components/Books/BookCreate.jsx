import {useState} from 'react';

export default function BookCreate({onCreate}) {
    const [title,setTitle]= useState('')

    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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
