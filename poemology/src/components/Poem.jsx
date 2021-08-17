import { useHistory } from "react-router-dom";
import "../styles/poem.css";
import "../styles/like.css";

const Poem = (props) => {
  let history = useHistory();

  return (
    <div className="poem-wrapper" onClick={() => history.push(`/${props._id}`)}>
      <div className="color-Banner"></div>
      <div className="main-Info-wrapper">
        <div className="title-wrapper">
          <h1 className="poemName">{props.title}</h1>
        </div>
        <div className="author-wrapper">{props.author}</div>
        <div className="poem-content-wrapper">{props.content}</div>
      </div>
      <div className="like-content-wrapper">
        <div
          className="like-btn"
          onClick={(event) => {
            event.stopPropagation();
            props.like(props._id);
          }}
        >
          <i className={`fas fa-heart ${props.liked ? " press" : ""}`}>
            {props.likes}
          </i>
          <span className={`${props.liked ? " press" : ""}`}>liked!</span>
        </div>
      </div>
    </div>
  );
};

export default Poem;
