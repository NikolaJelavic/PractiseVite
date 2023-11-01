import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="border-2 border-slate-200 w-1/3 m-3"
      >
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={handleChange}
          className="border-2 border-indigo-600 m-3 "
        />
      </form>
    </div>
  );
}

export default SearchBar;
