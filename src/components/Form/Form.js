import React, { useContext } from "react";

import { BookContext } from "../../store/Books/BooksProvider";

const DUMMY_DATABASE = [
  {
    id: 1,
    name: "test",
  },
  {
    id: 2,
    name: "test2",
  },
  {
    id: 3,
    name: "test3",
  },
];

const Form = (_) => {
  const [book, setBooks] = useContext(BookContext);
  function submitHandler(event) {
    event.preventDefault();
    setBooks(DUMMY_DATABASE);
    console.log(book);
  }

  return (
    <form onSubmit={submitHandler}>
      <select>
        <option value="Keyword">Keyword</option>
        <option value="Title">Title</option>
        <option value="Author">Author</option>
        <option value="Publisher">Publisher</option>
        <option value="URL">URL</option>
      </select>
      <input type="text" />
      <button>Search</button>
    </form>
  );
};

export default Form;
