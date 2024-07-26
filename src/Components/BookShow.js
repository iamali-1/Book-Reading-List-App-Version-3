import React, { useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import BookEdit from './BookEdit';
import './BookShow.css';
import useBooksContext from "../Hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext(); // Corrected function name

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-container">
      <img alt="Books" src={`https://picsum.photos/seed/${book.id}/300/200`} /> {/* Fixed URL syntax */}
      <div className="book-content">
        {content}
        <button className="edit-button" onClick={handleEditClick}><FaEdit /></button>
        <button className="delete-button" onClick={handleDeleteClick}><FaTimes /></button>
      </div>
    </div>
  );
}

export default BookShow;
