import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
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
  );
}

export default Nav;
