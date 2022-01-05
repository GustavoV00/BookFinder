import React from "react";
import BookProvider from "../../store/Books/BooksProvider";

import Form from "../Form/Form";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header_style}>
      <Form />
    </header>
  );
};

export default Header;
