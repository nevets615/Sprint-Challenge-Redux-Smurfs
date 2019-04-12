import React from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../actions/index";
import "./App.css";
class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      height: "",
      age: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      this.props.addSmurfs(this.state);
      this.setState({
        name: "",
        height: "",
        age: ""
      });
    }
  };
  render() {
    return (
      <div onClick={this.submitHandler}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />

        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.changeHandler}
        />

        <button onClick={this.addSmurfs}>Submit</button>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { addSmurfs }
)(SmurfForm);
