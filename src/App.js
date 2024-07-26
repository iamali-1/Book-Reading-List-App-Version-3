import React, { useState, useEffect } from "react";
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import useBooksContext from "./Hooks/use-books-context";

function App() {

  const {fetchBooks} = useBooksContext()
 
  useEffect(( )=> {
    fetchBooks();
  } ,[])

 
  return (
    <>
        <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </>
  );
}

export default App;
