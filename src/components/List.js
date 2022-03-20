import React from "react";
import Card from "./Card";

const List = ({ data, updateGameData }) => {
  console.log("List", data);
  return (
    <div className="list">
      {data.map((data, index) => (
        <div className="card" key={data.name}>
          <Card data={data} updateGameData={updateGameData} />
        </div>
      ))}
    </div>
  );
};

export default List;
