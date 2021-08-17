import { useContext } from "react";
import Poem from "../components/Poem";
import Context from "../context";

const PoemPage = (props) => {
  const { poems, like } = useContext(Context);
  const poem = poems.find(({ _id }) => _id === props.match.params.poemId);

  console.log({ props, poem });
  return <Poem {...poem} like={like} />;
};

export default PoemPage;
