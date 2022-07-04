import React from "react";
import { ButtonToolbar, Form } from "react-bootstrap";

const Menu = ({
  isRunning,
  setIsRunning,
  delay,
  changeDelay,
  resetGrid,
  randomizeGrid,
  wrapAround,
  toggleWrapAround,
}) => {
  return (
    <div className="menu">
      <ButtonToolbar className="d-flex flex-row align-items-center justify-content-center">
        {isRunning ? (
          <button
            className="mx-2 p-2 btn play-pause-btn"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
        ) : (
          <button
            className="mx-2 p-2 btn play-pause-btn"
            onClick={() => setIsRunning(true)}
          >
            Play
          </button>
        )}

        <Form.Range
          className="mx-2 p-2 slider"
          min="1"
          max="200"
          value={delay}
          onChange={changeDelay}
        />
        <button className="mx-2 p-2 btn" onClick={randomizeGrid}>
          Randomize
        </button>
        <button className="mx-2 p-2 btn" onClick={resetGrid}>
          Reset
        </button>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Wrap-around"
          value={wrapAround}
          onClick={toggleWrapAround}
          className="ml-2 p-2"
        />
      </ButtonToolbar>
    </div>
  );
};

export default Menu;
