import "./App.css";

import React, { useState, useEffect } from "react";
import useInterval from "./utils/useInterval";
import Grid from "./components/Grid";
import Menu from "./components/Menu";

const App = () => {
  const [generation, setGeneration] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [delay, setDelay] = useState(100);
  const numRows = 30;
  const numCols = 50;
  const [wrapAround, setWrapAround] = useState(false);

  const [grid, setGrid] = useState(generateDefaultGrid(numRows, numCols));

  const toggleSquare = (row, col) => {
    let updatedGrid = JSON.parse(JSON.stringify(grid));
    updatedGrid[row][col] = !updatedGrid[row][col];
    setGrid(updatedGrid);
  };

  const randomizeGrid = () => {
    let randomizedGrid = JSON.parse(JSON.stringify(grid));
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (Math.floor(Math.random() * 4) === 1) {
          randomizedGrid[row][col] = true;
        } else {
          randomizedGrid[row][col] = false;
        }
      }
    }
    setGrid(randomizedGrid);
  };

  const nextGeneration = () => {
    let updatedGrid = JSON.parse(JSON.stringify(grid));

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const neighbors = countNeighbors(row, col);
        console.log("row" + row + "col" + col + "neighbors" + neighbors);

        // Any live cell with two or three live neighbours survives
        if (grid[row][col] && (neighbors === 2 || neighbors === 3)) {
          updatedGrid[row][col] = true;

          // Any dead cell with three live neighbours becomes a live cell
        } else if (!grid[row][col] && neighbors === 3) {
          updatedGrid[row][col] = true;

          // All other live cells die in the next generation
          // Similarly, all other dead cells stay dead
        } else {
          updatedGrid[row][col] = false;
        }
      }
    }
    setGrid(updatedGrid);
    setGeneration(generation + 1);
  };

  const speed = 200 - delay;
  useInterval(nextGeneration, isRunning ? speed : null);

  const changeDelay = (changeEvent) => {
    setDelay(changeEvent.target.value);
  };

  const inBounds = (row, col) => {
    if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
      return true;
    }
    return false;
  };

  const isNeighbor = (row, col) => {
    if (
      wrapAround &&
      grid[(row + numRows) % numRows][(col + numCols) % numCols]
    ) {
      return 1;
    }
    if (!wrapAround && inBounds(row, col) && grid[row][col]) {
      return 1;
    }
    return 0;
  };

  const countNeighbors = (row, col) => {
    let neighbors = 0;
    neighbors += isNeighbor(row - 1, col - 1);
    neighbors += isNeighbor(row - 1, col);
    neighbors += isNeighbor(row - 1, col + 1);
    neighbors += isNeighbor(row, col - 1);
    neighbors += isNeighbor(row, col + 1);
    neighbors += isNeighbor(row + 1, col - 1);
    neighbors += isNeighbor(row + 1, col);
    neighbors += isNeighbor(row + 1, col + 1);
    return neighbors;
  };

  useEffect(() => {
    randomizeGrid();
  }, []);

  const resetGrid = () => {
    setGrid(generateDefaultGrid(numRows, numCols));
    setGeneration(0);
  };

  const toggleWrapAround = () => {
    setWrapAround(!wrapAround);
  };

  return (
    <div className="App">
      <h1 id="title">Game Of Life</h1>
      <Menu
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        delay={delay}
        changeDelay={changeDelay}
        resetGrid={resetGrid}
        randomizeGrid={randomizeGrid}
        wrapAround={wrapAround}
        toggleWrapAround={toggleWrapAround}
      />
      <Grid
        grid={grid}
        numRows={numRows}
        numCols={numCols}
        toggleSquare={toggleSquare}
      />
      <h4 id="gen-counter">
        Total generations:
        <span id="gen-counter--label">{generation}</span>
      </h4>
    </div>
  );
};

const generateDefaultGrid = (rows, cols) => {
  const defaultGrid = new Array(rows);
  for (let row = 0; row < rows; row++) {
    defaultGrid[row] = new Array(cols);
    for (let col = 0; col < cols; col++) {
      defaultGrid[row][col] = false;
    }
  }
  return defaultGrid;
};

export default App;
