import React from "react";
import BookProvider from "./store/Books/BooksProvider";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <BookProvider>
      <div className="page_layout">
        <Header />
        <Main />
      </div>
    </BookProvider>
  );
}

export default App;
