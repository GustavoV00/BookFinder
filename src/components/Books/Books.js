import React, { useContext } from "react";

import { BookContext } from "../../store/Books/BooksProvider";
import classes from "./Books.module.css";

function Books() {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div className={classes.card}>
      {books.map((book) => (
        <div className={classes.book} key={book.id}>
          {book.title}
        </div>
      ))}
    </div>
  );
}

export default Books;
