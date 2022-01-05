import React, { useContext } from "react";

import classes from "./Form.module.css";
import { BookContext } from "../../store/Books/BooksProvider";

const DUMMY_DATABASE = [
  {
    id: 1,
    name: "test",
  },
  {
    id: 1,
    name: "test2",
  },
  {
    id: 1,
    name: "test3",
  },
];

const Form = (_) => {
  const [books, setBooks] = useContext(BookContext);
  function submitHandler(event) {
    event.preventDefault();
    setBooks(DUMMY_DATABASE);
    console.log(books);
  }

  return (
    <form className={classes.align_form} onSubmit={submitHandler}>
      <label htmlFor="Book Finder">Book Finder</label>
      <input type="text" />
      <button>Send</button>
    </form>
  );
};

export default Form;
