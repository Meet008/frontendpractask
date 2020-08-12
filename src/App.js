import React from "react";
import "./App.css";
import TimeFrame from "./components/TimeFrame/TimeFrame";
import ProjectType from "./components/ProjectType/ProjectType";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Input, Button } from "@material-ui/core";
import Listinfo from "./components/listinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeframe: "",
      desktop: false,
      web: false,
      mobile: false,
      other: false,
      name: "",
      company: "",
      email: "",
      budget: "",
      description: "",
      loading: false,
    };
  }
  onRadioCheck = (e) => {
    console.log("event is " + e.target.value);
    this.setState({ timeframe: e.target.value });
  };
  onCheckboxCheck = (e) => {
    console.log("check box is" + e.target.value);
    const val = e.target.value;
    if (val === "Desktop") {
      this.setState({ desktop: !this.state.desktop });
    } else if (val === "Web") {
      this.setState({ web: !this.state.web });
    } else if (val === "Mobile") {
      this.setState({ mobile: !this.state.mobile });
    } else if (val === "Other") {
      this.setState({ other: !this.state.other });
    } else {
      console.log("do nothing");
    }
  };
  handleSubmit = () => {
    if (this.state.name === null || this.state.name === "") {
      alert("Not valid name");
    } else if (this.state.company === null || this.state.company === "") {
      alert("Not valid company name");
    } else if (this.state.timeframe === null || this.state.timeframe === "") {
      alert("Not valid Timeframe");
    } else if (this.state.email === null || this.state.email === "") {
      alert("Not valid Email");
    } else if (this.state.budget === null || this.state.budget === "") {
      alert("Not valid budget amount");
    } else {
      this.setState({ loading: true });
      fetch("http://localhost:3000/addinfo", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          company: this.state.company,
          email: this.state.email,
          budget: this.state.budget,
          description: this.state.description,
          timeframe: this.state.timeframe,
          desktop: this.state.desktop,
          web: this.state.web,
          mobile: this.state.mobile,
          other: this.state.other,
        }),
      })
        .then((response) => response.json())
        .then(console.log("success"), this.setState({ loading: false }))
        .catch((err) => console.log(err));
      alert("Inquiry send successfully");
    }
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/showinfo">
              <Listinfo />
            </Route>
            <Route path="/">
              <h1 className="title">Let's craft your product.</h1>
              <div className="frame">
                <div className="col1">
                  <div>
                    <TimeFrame onRadioCheck={this.onRadioCheck} />
                  </div>
                  <div>
                    <ProjectType onCheckboxChange={this.onCheckboxCheck} />
                  </div>
                </div>

                <div className="col2">
                  <div className="personal-name">
                    <h1>Personal details</h1>
                  </div>
                  <div className="flex-container">
                    <div className="firstpart">
                      <input
                        type="text"
                        placeholder="Name"
                        className="input"
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        className="input"
                        onChange={(e) =>
                          this.setState({ company: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        className="input"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Budget"
                        className="input"
                        onChange={(e) =>
                          this.setState({ budget: e.target.value })
                        }
                      />
                    </div>
                    <div className="secondpart">
                      <textarea
                        className="textarea"
                        // rows="15"
                        // cols="20"
                        type="text"
                        placeholder="Tell us about your project..."
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      className="button"
                      onClick={this.handleSubmit}
                      type="submit"
                      value={
                        this.state.loading === false
                          ? "Send Inquiry"
                          : "loading..."
                      }
                    />
                  </div>
                  <Link to="showinfo">
                    <input className="button" value="View inquiry list" />
                  </Link>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
