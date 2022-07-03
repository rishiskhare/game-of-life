import React from "react";
import Square from "./Square";

const Grid = ({ grid, numRows, numCols, toggleSquare }) => {
  let gridArray = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const id = `${row}, ${col}`;
      const deadOrAlive = grid[row][col] ? "alive" : "dead";

      gridArray.push(
        <Square
          row={row}
          col={col}
          toggleSquare={toggleSquare}
          squareClass={`square ${deadOrAlive}`}
          key={id}
          id={id}
        />
      );
    }
  }

  return <div className="grid">{gridArray}</div>;
};

export default Grid;
