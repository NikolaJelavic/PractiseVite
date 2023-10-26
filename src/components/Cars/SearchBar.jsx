import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit('asdf');
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className='border-2 border-indigo-600'>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
