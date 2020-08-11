import React from "react";
//import Button from "@material-ui/core/Button";
import { Input, Button } from "@material-ui/core";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      budget: "",
      description: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = () => {
    fetch("http://localhost:3000/addinfo", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        company: this.state.company,
        email: this.state.email,
        budget: this.state.budget,
        description: this.state.description,
      }),
    })
      .then((response) => response.json())
      .then(console.log("success"))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <div className="col1">
          <Input
            type="text"
            placeholder="Name"
            className="input"
            onChange={this.onNameChange}
          />
          <Input
            type="text"
            placeholder="Company"
            className="input"
            onChange={(e) => this.setState({ company: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Email"
            className="input"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Budget"
            className="input"
            onChange={(e) => this.setState({ budget: e.target.value })}
          />
        </div>
        <div className="col2">
          <Input
            type="text"
            placeholder="Tell me about your project"
            className="input"
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <input onClick={this.handleSubmit} type="submit" value="Register" />
        </div>
      </div>
    );
  }
}

export default Form;
