import React from "react";

const fullPagePoem = (props) => {
  return (
    <div>
      <div className="header-main">
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>{props.likes}</p>
      </div>
      <div className="content-main">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default fullPagePoem;
