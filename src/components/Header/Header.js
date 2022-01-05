import React from "react";
import { Link } from "react-router-dom";

import Form from "../Form/Form";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={classes.change}>
          <h1>BookManager</h1>
          <Form />
        </div>
      </div>
    </header>
  );
};

export default Header;
