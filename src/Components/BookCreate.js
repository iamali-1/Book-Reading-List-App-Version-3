import React, { useState } from "react";
import './BookCreate.css';
import useBooksContext from "../Hooks/use-books-context";

function BookCreate() {

  const [title, setTitle] = useState('');

 const {createBook} = useBooksContext()

  const handleChange = (event) => {

    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    createBook(title);

    setTitle('');
  };

  return (
    <div className="create-book-container">
      <form onSubmit={handleSubmit}>

        <h3>Add a Title</h3>

        <label>Title</label><br />

        <input className="input-field" value={title} onChange={handleChange} /><br /><br />

        <button className="create-button">Create!</button>

      </form>
    </div>
  );
}

export default BookCreate;
