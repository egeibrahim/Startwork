import React, { Component } from "react";
import Profile from "../components/Profile/Profile";
import TabNav from "../components/Profile/TabNav";
import Tab from "../components/Profile/Tab";
import About from "../components/Profile/About";
import { Redirect } from "react-router-dom";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Hakkında",
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Profile data={this.props.data} />
        <div className="content">
          <TabNav
            tabs={[
              "Timeline",
              "Hakkında",
              "Sosyal",
              "İş İlanı",
              "Finansman",
              "Gelişmeler",
            ]}
            selected={this.state.selected}
            setSelected={this.setSelected}
          >
            <Tab isSelected={this.state.selected === "Timeline"}>
              <p>Timeline</p>
            </Tab>
            <Tab isSelected={this.state.selected === "Hakkında"}>
              <About data={this.props.data} />
            </Tab>
            <Tab isSelected={this.state.selected === "Sosyal"}>
              <p>Sosyal</p>
            </Tab>
            <Tab isSelected={this.state.selected === "İş İlanı"}>
              <p>İş İlanı</p>
            </Tab>
            <Tab isSelected={this.state.selected === "Finansman"}>
              <p>Finansman</p>
            </Tab>
            <Tab isSelected={this.state.selected === "Gelişmeler"}>
              <p>Gelişmeler</p>
            </Tab>
          </TabNav>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
