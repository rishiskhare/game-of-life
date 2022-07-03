import React from "react";

const Square = ({ row, col, toggleSquare, squareClass, id }) => {
  return (
    <div
      id={id}
      className={squareClass}
      onClick={() => toggleSquare(row, col)}
    ></div>
  );
};

export default Square;
