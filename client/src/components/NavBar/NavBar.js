import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";

let nav = {
  textDecoration: "none",
};

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="uik-top-bar__wrapper uik-knowledge-top-bar__header">
          <button
            className="uik-btn__base uik-knowledge-top-bar__btnMenu"
            type="button"
          >
            <span className="uik-btn__content">
              <div className="uik-nav-icon__wrapper">
                <svg
                  fill="currentColor"
                  version="1.1"
                  viewBox="0 0 14 2"
                  className="uik-nav-icon__a"
                >
                  <g
                    id="Icon/20px/menu-[Extra]"
                    transform="translate(0.000000,
                    -2.000000)"
                  >
                    <polygon id="Path" points="0 4 14 4 14 2 0 2" />
                  </g>
                </svg>
                <svg
                  fill="currentColor"
                  version="1.1"
                  viewBox="0 0 20 2"
                  className="uik-nav-icon__b"
                >
                  <g
                    id="Icon/20px/menu-[Extra]"
                    transform="translate(0.000000, -9.000000)"
                  >
                    <polygon
                      id="Path"
                      points="0 11 20 11 20 9 0
                    9"
                    />
                  </g>
                </svg>
                <svg
                  fill="currentColor"
                  version="1.1"
                  viewBox="0 0 14 2"
                  className="uik-nav-icon__c"
                >
                  <g
                    id="Icon/20px/menu-[Extra]"
                    transform="translate(0.000000, -2.000000)"
                  >
                    <polygon
                      id="Path"
                      points="0
                    4 14 4 14 2 0 2"
                    />
                  </g>
                </svg>
              </div>
            </span>
          </button>
          <div className="uik-top-bar-section__wrapper">
            <h2 className="uik-top-bar-title__wrapper">
              <i className="uikon">help</i>StartWork
            </h2>
          </div>
          <div className="linkContainer">
            <React.Fragment>
              <NavLink
                to="/"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                AnaSayfa
              </NavLink>
              <NavLink
                to="/apply"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                Başvur
              </NavLink>
              <NavLink
                to="/network"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                Ağ
              </NavLink>
              <NavLink
                to="/discussion"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                Tartışma
              </NavLink>
              <NavLink
                to="/jobs"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                İşler
              </NavLink>
              <NavLink
                to="/ecosystem"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                Ekosistem
              </NavLink>
              <NavLink
                to="/events"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                Olaylar
              </NavLink>
              <NavLink
                to="advantages"
                className="navlinks"
                activeClassName="current"
                exact={true}
                style={nav}
              >
                Avantajlar
              </NavLink>
            </React.Fragment>
          </div>
          <div className="uik-top-bar-section__wrapper">
            <div className="uik-input__clear">
              <div className="uik-input__inputWrapper">
                <span className="uik-input__iconWrapper">
                  <i className="uikon">search_left</i>
                </span>
                <input
                  type="text"
                  className="uik-input__input"
                  placeholder="Type to search..."
                />
              </div>
            </div>
            <div style={{ position: "relative", display: "inline-block" }}>
              <DropDown profileImage={this.props.profileImage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
