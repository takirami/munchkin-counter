import React from "react";
const Card = ({ data, updateGameData }) => {
  return (
    <div className="wrapper">
      <div className="name">{data.name}</div>
      <div className="score">{data.score}</div>
      <div className="buttons">
        <button onClick={() => updateGameData("REMOVE", data.name)}>-</button>
        <button onClick={() => updateGameData("ADD", data.name)}>+</button>
      </div>
    </div>
  );
};

export default Card;
