import React from "react";
import "./listinfo.css";

class listinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/showinfo", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <div className="container">
          <table className="table">
            <tr className="tr">
              <th>Id</th>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Budget</th>
              <th>Description</th>
              <th>Timeframe</th>
              <th>Desktop</th>
              <th>Mobile</th>
              <th>Web</th>
              <th>Others</th>
            </tr>
            {this.state.data.map((item) => (
              <tr className="tr">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.budget}</td>
                <td>{item.description}</td>
                <td>{item.timeframe}months</td>
                <td>{item.desktop === "1" ? "true" : "false"}</td>
                <td>{item.mobile === "1" ? "true" : "false"}</td>
                <td>{item.web === "1" ? "true" : "false"}</td>
                <td>{item.other === "1" ? "true" : "false"}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default listinfo;
