import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BookProvider from "./store/Books/BooksProvider";
import "./App.css";

function App() {
  return (
    <div className="page_layout">
      <BookProvider>
        <Header />
        <Main />
      </BookProvider>
    </div>
  );
}

export default App;
