import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class ScoreForm extends Component {
  render() {
    return (
      <div>
        <Button
          color="primary"
          style={{ margin: "10px" }}
          onClick={this.props.submit}>
          Submit
        </Button>
        <Button
          color="default"
          style={{ margin: "10px" }}
          onClick={this.props.cancel}>
          Cancel
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreForm);
