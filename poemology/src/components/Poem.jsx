import "../poem.css";

const poem = (props) => {
  return (
    <div className="poem-wrapper">
      <div className="color-Banner"></div>
      <div className="main-Info-wrapper">
        <div className="title-wrapper">
          <h1 className="poemName">{props.title}</h1>
        </div>
        <div className="author-wrapper">{props.author}</div>
        <div className="poem-content-wrapper">{props.content}</div>
      </div>
      <div className="like-content-wrapper">{props.likes}</div>
    </div>
  );
};

export default poem;
