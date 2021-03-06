import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <CardShadow className="card-shadow">
      <motion.div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img key={screen.id} src={screen.image} alt="game" />
          ))}
        </div>
      </motion.div>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: orange;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  .detail {
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
      width: 100%;
    }
    .stats {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .info {
        text-align: center;
        .platforms {
          display: flex;
          justify-content: space-evenly;
          img {
            margin-left: 3rem;
          }
        }
      }
    }
    .media {
      margin-top: 5rem;
      img {
        width: 100%;
      }
    }
    .description {
      margin: 5rem 0rem;
    }
  }
`;

export default GameDetail;
