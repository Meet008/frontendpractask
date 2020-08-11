import React from "react";
import "./App.css";
import Form from "./components/Form";
import TimeFrame from "./components/TimeFrame";
import ProjectType from "./components/ProjectType";
function App() {
  return (
    <div className="App">
      <h1 className="title">Let's craft your product.</h1>
      <div className="frame">
        <div className="col1">
          <div>
            <TimeFrame />
          </div>
          <div>
            <ProjectType />
          </div>
        </div>
        <div className="col2">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
