import React from "react";

import Form from "../Form/Form";
// import Nav from "../Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      {/* <Nav /> */}
      <div className={classes.change}>
        <h1>BookManager</h1>
        <Form />
      </div>
    </header>
  );
};

export default Header;
