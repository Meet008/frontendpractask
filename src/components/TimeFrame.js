import React from "react";
import "./TimeFrame.css";

function TimeFrame() {
  return (
    <div className="container">
      <h1>Timeframe</h1>
      <div>
        <input type="radio" value="1" name="gender" /> 1 month
      </div>
      <div>
        <input type="radio" value="2" name="gender" /> 2-3 months
      </div>
      <div>
        <input type="radio" value="3" name="gender" /> 4+ months
      </div>
    </div>
  );
}

export default TimeFrame;
