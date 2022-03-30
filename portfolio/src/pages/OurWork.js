import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <Work>
      <div className="movie">
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="3">
          <img src={athlete} alt="athlete" />
        </Link>
      </div>
      <div className="movie">
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="3">
          <img src={theracer} alt="theracer" />
        </Link>
      </div>
      <div className="movie">
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="3">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </div>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  .movie {
    padding-bottom: 10rem;
    .line {
      height: 0.5rem;
      background: #cccccc;
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
`;

export default OurWork;