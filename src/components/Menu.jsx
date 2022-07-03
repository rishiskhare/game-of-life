import React from "react";
import { ButtonToolbar, Form } from "react-bootstrap";

const Menu = ({
  isRunning,
  setIsRunning,
  delay,
  changeDelay,
  clearGrid,
  randomizeGrid,
  wrapAround,
  toggleWrapAround,
}) => {
  return (
    <div className="menu">
      <ButtonToolbar className="d-flex flex-row align-items-center justify-content-xl-between">
        {isRunning ? (
          <button
            style={{ width: "80px" }}
            className="mx-3 p-2 btn btn-default"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
        ) : (
          <button
            style={{ width: "80px" }}
            className="mx-3 p-2 btn btn-default"
            onClick={() => setIsRunning(true)}
          >
            Play
          </button>
        )}

        <Form.Range
          className="mx-3 p-2 slider"
          min="1"
          max="200"
          value={delay}
          onChange={changeDelay}
        />
        <button className="mx-3 p-2 btn btn-default" onClick={randomizeGrid}>
          Randomize
        </button>
        <button className="mx-3 p-2 btn btn-default" onClick={clearGrid}>
          Clear
        </button>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Wrap-around"
          value={wrapAround}
          onClick={toggleWrapAround}
          className="ml-3 p-2"
        />
      </ButtonToolbar>
    </div>
  );
};

export default Menu;
