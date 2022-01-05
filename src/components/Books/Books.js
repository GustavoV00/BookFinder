import React, { Fragment } from "react";

// import { Container } from './styles';

function Books(props) {
  return (
    <Fragment>
      {props.books.map((book) => (
        <span key={book.id}>{book.name}</span>
      ))}
    </Fragment>
  );
}

export default Books;
