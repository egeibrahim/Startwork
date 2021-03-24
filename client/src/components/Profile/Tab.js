import React, { Component } from "react";

class Tab extends Component {
  render() {
    if (this.props.isSelected) {
      return <div>{this.props.children}</div>;
    }
    return null;
  }
}

export default Tab;
