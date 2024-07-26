import React, { useState } from "react";
import useBooksContext from "../Hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title || "");
  const { editBookById } = useBooksContext(); // Corrected function name

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
