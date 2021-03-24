import React, { Component } from "react";

class TabNav extends Component {
  render() {
    return (
      <div>
        <ul
          className="nav nav-tabs content-nav justify-content-center pt-5 bg-white"
          id="myTab"
        >
          {this.props.tabs.map((tab) => {
            const active = tab === this.props.selected ? "active" : "";
            return (
              <li className="nav-item" key={tab}>
                <button
                  className={"nav-link " + active}
                  onClick={() => this.props.setSelected(tab)}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default TabNav;
