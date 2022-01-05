import React, { Fragment } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="page_layout">
      <Header />
      <Main />
    </div>
  );
}

export default App;
