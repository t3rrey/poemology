import { useContext } from "react";
import Context from "../context";
import FullPagePoem from "../components/fullPagePoem";

const PoemPage = (props) => {
  const { poems, like } = useContext(Context);
  const poem = poems.find(({ _id }) => _id === props.match.params.poemId);

  console.log({ props, poem });
  return <FullPagePoem {...poem} like={like} />;
};

export default PoemPage;
