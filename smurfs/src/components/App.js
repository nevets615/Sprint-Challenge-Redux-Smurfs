import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurfs } from "../actions/index";
import SmurfForm from "./SmurfForm";
import SmurfsList from "./smurfList";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Steven's Smurfs</h1>

        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { getSmurfs, addSmurfs }
)(App);
