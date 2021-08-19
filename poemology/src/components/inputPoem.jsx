import React, { useState } from "react";
import axios from "axios";
import "../styles/InputPoem.css";

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
      <form action="submit" onSubmit={handleSubmit} className="login-form">
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
        <textarea
          rows={8}
          cols={20}
          name="content"
          value={content}
          // style={{ width: content.length * 15 + "px" }}
          onChange={handleChangeContent}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default InputPoem;
