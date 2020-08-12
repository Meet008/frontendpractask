import React from "react";
import "./ProjectType.css";

function ProjectType({ onCheckboxChange }) {
  return (
    <div>
      <h1>Project Type</h1>

      <label class="container">
        Desktop
        <input
          type="checkbox"
          value="Desktop"
          name="Desktop"
          onChange={onCheckboxChange}
        />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        Web
        <input
          type="checkbox"
          value="Web"
          name="Web"
          onChange={onCheckboxChange}
        />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        Mobile
        <input
          type="checkbox"
          value="Mobile"
          name="Mobile"
          onChange={onCheckboxChange}
        />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        Other
        <input
          type="checkbox"
          value="Other"
          name="Other"
          onChange={onCheckboxChange}
        />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}

export default ProjectType;
