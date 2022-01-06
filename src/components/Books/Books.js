import React, { useContext } from "react";

import { BookContext } from "../../store/Books/BooksProvider";
import classes from "./Books.module.css";

function Books() {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div className={classes.card}>
      {books.map((book) => (
        <div className={classes.book} key={book.id}>
          <h4>{book.title}</h4>
          <div className={classes.book_card}>
            <div className={classes.image}></div>
            <ul>
              <li>{book.categories}</li>
              <li>{book.authors}</li>
              <li>{book.published}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
