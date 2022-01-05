import React, { useContext } from "react";

const DUMMY_DATABASE = [
  {
    id: 1,
    name: "test",
  },
  {
    id: 1,
    name: "test2",
  },
  {
    id: 1,
    name: "test3",
  },
];

const Form = (_) => {
  function submitHandler(event) {
    event.preventDefault();
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
      <input type="text" />
      <button>Search</button>
    </form>
  );
};

export default Form;
