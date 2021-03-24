import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class TagButton extends Component {
  redirectTo = (path) => (event) => {
    event.preventDefault();
    this.props.history.push(`/search/${path}`);
  };
  render() {
    return (
      <Button
        style={{ marginRight: "5px" }}
        onClick={this.redirectTo(this.props.path)}
      >
        {this.props.path}
      </Button>
    );
  }
}

export default withRouter(TagButton);
