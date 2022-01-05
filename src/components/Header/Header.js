import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>BookManager</h1>

      <nav>
        <ul>
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
    </header>
  );
};

export default Header;
