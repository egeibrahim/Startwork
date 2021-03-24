import React, { Component } from "react";
import CompanyPages from "./CompanyPages";
import { url } from "../../url";

class AsideBar extends Component {
  render() {
    return (
      <div className="uik-container-v__container">
        <div className="uik-tab__container uik-socialio__mobileNavigation">
          <span className="uik-tab__item uik-socialio__mobileItem uik-tab__smaller">
            <i className="uikon">gallery_grid_view</i>
          </span>
          <span className="uik-tab__item uik-socialio__mobileItem active uik-tab__smaller">
            <i className="uikon">home</i>
          </span>
          <span className="uik-tab__item uik-socialio__mobileItem uik-tab__smaller">
            <i className="uikon">message</i>
          </span>
        </div>

        <div className="uik-container-h__wrapper uik-socialio__contentContainer uik-socialio__Home">
          <div className="uik-nav-panel__wrapper">
            <div className="mth-user-card">
              <img
                alt=""
                className="img-fluid rounded-circle"
                src={`${url}/uploads/${this.props.profileImage}`}
              />
              <div className="mth-user-info mb-2">
                <h4 className="mt-3">{this.props.name}</h4>
                <p className="font-weight-light">
                  Work at{" "}
                  <a href="/" style={{ display: "inline" }}>
                    StartWork
                  </a>
                </p>
                <hr style={{ width: "60%", display: "inline-block" }} />
                <p>{this.props.email}</p>
                <p className="font-weight-light">0543 333 33 33</p>
                <button type="button" className="btn btn-primary">
                  Backend
                </button>
              </div>
              <a className="profileLink" href="/profile">
                <p
                  style={{ marginTop: "10px" }}
                  className="text-uppercase mth-profile-link m-2"
                >
                  Profili Görüntüle
                </p>
              </a>
            </div>
            <CompanyPages />
          </div>
        </div>
      </div>
    );
  }
}

export default AsideBar;
