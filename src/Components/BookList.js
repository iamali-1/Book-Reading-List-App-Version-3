import React from 'react';
import BookShow from "./BookShow";
import './BookList.css';
import useBooksContext from '../Hooks/use-books-context';

function BookList() {

  const{books} = useBooksContext();

  const renderBooks = books.map((book) => (

    <BookShow key={book.id} book={book}  />

  ));

  return (
    <div className="book-list">
     {renderBooks}
    </div>
  );
}

export default BookList;
