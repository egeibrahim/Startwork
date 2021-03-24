import React, { Component } from "react";
import SettingTab from "../components/ProfileSettings/SettingTab";
import Tab from "../components/Profile/Tab";
import SettingsProfile from "../components/ProfileSettings/SettingsProfile";
import { Redirect } from "react-router-dom";
import SettingsMentor from "../components/ProfileSettings/SettingsMentor";
import SettingsInvestor from "../components/ProfileSettings/SettingsInvestor";

class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Profil Ayarları",
    };
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    let data = this.props.data;
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
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
          <div
            className="uik-layout-main__wrapperInner"
            style={{ margin: "0 auto" }}
          >
            <div className="uik-socialio__content">
              <SettingTab
                tabs={[
                  "Profil Ayarları",
                  "Mentör Ayarları",
                  "Yatırımcı Ayarları",
                ]}
                selected={this.state.selected}
                setSelected={this.setSelected}
                profileImage={data.profile_image}
                name={data.name}
                country={data.country}
                city={data.city}
              >
                <Tab isSelected={this.state.selected === "Profil Ayarları"}>
                  <SettingsProfile data={data} />
                </Tab>
                <Tab isSelected={this.state.selected === "Mentör Ayarları"}>
                  <SettingsMentor />
                </Tab>
                <Tab isSelected={this.state.selected === "Yatırımcı Ayarları"}>
                  <SettingsInvestor />
                </Tab>
              </SettingTab>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSettings;
