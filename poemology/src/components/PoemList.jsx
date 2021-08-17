import React, { useContext } from "react";
import Poem from "./Poem";
import Context from "../context";

const PoemList = () => {
  const { poems, like } = useContext(Context);

  return poems.map((poem) => <Poem key={poem._id} like={like} {...poem} />);
};

export default PoemList;
