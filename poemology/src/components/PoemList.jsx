import React, { useState, useEffect } from "react";
import axios from "axios";
import Poem from "./Poem";

const PoemList = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    axios
      .get("https://poemology-api.herokuapp.com/poem")
      .then((res) => {
        console.log(res);
        setPoems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return poems.map((poem) => (
    <Poem
      key={poem.id}
      title={poem.title}
      author={poem.author}
      content={poem.content}
      likes={poem.likes}
    />
  ));
};

export default PoemList;
