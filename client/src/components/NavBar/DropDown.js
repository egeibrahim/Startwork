import React, { Component } from "react";
import { logout } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { url } from "../../url";

class DropDown extends Component {
  render() {
    return (
      <ul
        className="member-nav pull-right float-right "
        style={{ listStyle: "none" }}
      >
        <li className="nav-item dropdown">
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
            <img
              style={{ width: "3rem", height: "3rem", marginTop: "17px" }}
              className="img-fluid rounded-circle"
              src={`${url}/uploads/${this.props.profileImage}`}
              alt=""
            />
          </button>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item" href={"/profile"}>
              Profil
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href={"/profileSettings"}>
              Ayarlar
            </a>
            <div className="dropdown-divider" />
            <button className="dropdown-item" onClick={this.props.logout}>
              Çıkış
            </button>
          </div>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()) };
};

export default connect(null, mapDispatchToProps)(DropDown);
