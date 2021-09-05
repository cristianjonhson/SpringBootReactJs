import React from "react";
import "../css/Form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="form-Title">
        <div className="form-input">
          <h1>{this.props.username}</h1>
        </div>
      </div>
    );
  }
}

export default Form;
