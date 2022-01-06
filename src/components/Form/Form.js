import React, { useContext } from "react";
import axios from "axios";

import { BookContext } from "../../store/Books/BooksProvider";
const DUMMY_DATABASE = [
  {
    id: 1,
    volumeInfo: {
      title: "test",
    },
  },
];

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
      console.log(result);

      result.then((items) => {
        items.forEach((item) => {
          test.push({
            id: item.id,
            title: item.volumeInfo.title,
            categories: item.volumeInfo.categories,
            authors: item.volumeInfo.authors,
            published: item.volumeInfo.publishedDate,
          });
        });
        setBooks(test);
      });
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <select>
        <option value="Keyword">Keyword</option>
        <option value="Title">Title</option>
        <option value="Author">Author</option>
        <option value="Publisher">Publisher</option>
        <option value="URL">URL</option>
      </select>
      <input type="text" name="input" />
      <button>Search</button>
    </form>
  );
};

export default Form;
