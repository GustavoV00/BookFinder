import React, { useContext } from "react";

import { BookContext } from "../../store/Books/BooksProvider";

import Books from "../Books/Books";

const Main = (_) => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <main>
      <h1>OI POVO</h1>
      <Books books={books} />
    </main>
  );
};

export default Main;
