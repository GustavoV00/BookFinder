import React, { useContext } from "react";

import { BookContext } from "../../store/Books/BooksProvider";
import classes from "./Books.module.css";

function Books(props) {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div className={classes.card}>
      {books.map((book) => (
        <div className={classes.book} key={book.id}>
          <h4>{book.title}</h4>
          <div className={classes.book_card}>
            {book.image === "" ? (
              <div className={classes.image}>No image</div>
            ) : (
              <img src={book.image} alt="Book" className={classes.image} />
            )}

            <ul>
              <li>Categories: {book.categories}</li>
              <li>Authors: {book.authors}</li>
              <li>Published: {book.published}</li>
            </ul>
            {/* <button onClick={() => props.onSetModal(true)}>More Infos</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
