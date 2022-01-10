import React, { useContext } from "react";
import axios from "axios";

import { BookContext } from "../../store/Books/BooksProvider";

const Form = (_) => {
  const [books, setBooks] = useContext(BookContext);

  const getRequestHandler = async (inputValue) => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputValue}`
    );
    const { data } = result;
    const { items } = data;
    return items;
  };

  function submitHandler(event) {
    event.preventDefault();
    let test = [];
    const inputValue = event.target.input.value;

    if (inputValue) {
      const result = getRequestHandler(inputValue);

      result.then((items) => {
        items.forEach((item) => {
          const obj = {
            id: item.id,
            title: item.volumeInfo.title,
            categories: item.volumeInfo.categories,
            authors: item.volumeInfo.authors,
            published: item.volumeInfo.publishedDate,
            description: item.volumeInfo.description
              ? item.volumeInfo.description
              : "",
          };

          try {
            obj.image = item.volumeInfo.imageLinks.smallThumbnail;
          } catch {
            obj.image = "";
          }

          test.push(obj);
        });
        setBooks(test);
      });
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="input" />
      <button>Search</button>
    </form>
  );
};

export default Form;
