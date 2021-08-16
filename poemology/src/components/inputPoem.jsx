import React, { useState } from "react";
import axios from "axios";

const InputPoem = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };
  const handleChangeContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://poemology-api.herokuapp.com/poem", {
        title: title,
        author: author,
        content: content,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="Title">Title: </label>
        <input
          type="text"
          name="Title"
          value={title}
          onChange={handleChangeTitle}
        />
        <label htmlFor="Author">Author: </label>
        <input
          type="text"
          name="Author"
          value={author}
          onChange={handleChangeAuthor}
        />
        <label htmlFor="content">Poem: </label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleChangeContent}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default InputPoem;
