import React from "react";
import { ButtonToolbar, Form } from "react-bootstrap";

const Menu = ({
  proceed,
  setProceed,
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
        {proceed ? (
          <button
            className="p-2 btn play-pause-btn"
            onClick={() => setProceed(false)}
          >
            Pause
          </button>
        ) : (
          <button
            className="p-2 btn play-pause-btn"
            onClick={() => setProceed(true)}
          >
            Play
          </button>
        )}

        <Form.Range
          className="mx-3 p-0 slider"
          min="1"
          max="200"
          value={delay}
          onChange={changeDelay}
        />
        <button className="mx-3 p-2 btn" onClick={randomizeGrid}>
          Randomize
        </button>
        <button className="mx-3 p-2 btn" onClick={resetGrid}>
          Reset
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
