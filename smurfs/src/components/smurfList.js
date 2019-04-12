import React from "react";
import { connect } from "react-redux";
import "./App.css";
const SmurfsList = props => {
  return (
    <div>
      {props.smurfs.map((smurf, index) => (
        <h3>
          name: {smurf.name} age: {smurf.age} height: {smurf.height}
        </h3>
    
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {}
)(SmurfsList);
