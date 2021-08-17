import React from "react";
import "../styles/fullPagePoem.css";

const fullPagePoem = (props) => {
  return (
    <div>
      <div className="fp-header-wrapper">
        <h1 className="fp-header-title">{props.title}</h1>
        <h2 className="fp-header-author">{props.author}</h2>
      </div>
      <div className="fp-content-wrapper">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default fullPagePoem;
