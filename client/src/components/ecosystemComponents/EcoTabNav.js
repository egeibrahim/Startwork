import React, { Component } from "react";

class EcoTabNav extends Component {
  render() {
    return (
      <div className="startup-grid-header">
        <ul>
          {this.props.tabs.map((tab) => {
            const active = tab === this.props.selected ? "active_nav" : "";
            return (
              <li
                key={tab}
                className={"nav-link " + active}
                onClick={() => this.props.setSelected(tab)}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default EcoTabNav;
