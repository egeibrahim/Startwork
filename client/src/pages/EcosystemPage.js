import React, { Component } from "react";
import image from "../assets/images/startup-header-bg.jpg";
import startUpLogo from "../assets/images/startup-logo.png";
import EcosystemTable from "../components/ecosystemComponents/EcosystemTable";
import { Redirect } from "react-router-dom";

class EcosystemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    };
  }
  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="startup-page-titile">
          <h1>Startup Başvuruları!</h1>
        </div>
        <div
          className="startup-header"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="startup-header-row1">
            <div className="startup-header-logo">
              <img alt="Background" src={startUpLogo} />
              <div className="startups-logo-text">Startups</div>
            </div>
          </div>
          <div className="startup-header-row2">
            <div className="startup-header-details">
              <h2>
                Sürdürülebilir bir ekosistem için{" "}
                <br className="startup-header-details-br" />
                dijitaldeyiz.
              </h2>
              <button className="uik-btn__base">Startup Oluştur</button>
            </div>
          </div>
        </div>
        <EcosystemTable />
      </div>
    );
  }
}

export default EcosystemPage;
