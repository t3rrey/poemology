import "../styles/Header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="main-logo">
      <h1 className="main-logo-header">Poemology.</h1>
      <Link to="/add">
        <button className="main-addPoem-btn">
          <svg
            className="svg-add"
            x="0px"
            y="0px"
            viewBox="0 0 455 455"
            width="30"
            height="30"
          >
            <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 " />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default header;
