import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

export function Provider(props) {
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

  const like = (id) => {
    const findPoem = poems.find(({ _id }) => _id === id);
    const addLike = findPoem.likes + 1;
    axios
      .patch(`https://poemology-api.herokuapp.com/poem/${id}`, {
        likes: addLike,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));

    const updatedPoems = [...poems];
    const poem = updatedPoems.find(({ _id }) => _id === id);
    poem.liked = !poem.liked;
    setPoems(updatedPoems);
  };

  return <Context.Provider value={{ poems, like }} {...props} />;
}

export default Context;
