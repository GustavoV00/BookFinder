import React, { useContext } from "react";

import { BookContext } from "../store/Books/BooksProvider";

const Main = (_) => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div>
      {books.map((book) => (
        <p>{book.name}</p>
      ))}
    </div>
  );
};

export default Main;
