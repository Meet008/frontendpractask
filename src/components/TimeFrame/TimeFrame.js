import React from "react";
// import "./TimeFrame.css";

function TimeFrame({ onRadioCheck }) {
  return (
    <div>
      <h1>Timeframe</h1>
      <div>
        <label className="container">
          1 month
          <input
            type="radio"
            value="1"
            name="month"
            onChange={onRadioCheck}
          />{" "}
          <span className="checkmark"></span>
        </label>
      </div>
      <div>
        <label className="container">
          2-3 months
          <input
            type="radio"
            value="2-3"
            name="month"
            onChange={onRadioCheck}
          />{" "}
          <span className="checkmark"></span>
        </label>
      </div>
      <div>
        <label className="container">
          4+ months
          <input
            type="radio"
            value="4+"
            name="month"
            onChange={onRadioCheck}
          />{" "}
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default TimeFrame;
