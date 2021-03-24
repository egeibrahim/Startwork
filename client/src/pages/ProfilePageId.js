import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { getUserId } from "../redux/actions/userActions";
import { connect } from "react-redux";
import PageProfile from "../components/Profile/PageProfile";
import TabNav from "../components/Profile/TabNav";
import Tab from "../components/Profile/Tab";
import AboutProfile from "../components/Profile/AboutProfile";

class ProfilePageId extends Component {
  constructor(props) {
    super(props);
    this.req = props.user.user;
    this.routeParam = props.match.params.id;
    this.state = {
      data: this.req,
      selected: "Hakkında",
    };
  }
  async componentDidMount() {
    await this.props.getUserId(this.routeParam);
    const req = this.props.user.user;
    await this.setState({ data: req });
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
        <PageProfile data={this.state.data} />
        <div className="content">
          <TabNav
            tabs={["Hakkında", "Sosyal", "İş İlanı", "Finansman", "Gelişmeler"]}
            selected={this.state.selected}
            setSelected={this.setSelected}
          >
            <Tab isSelected={this.state.selected === "Hakkında"}>
              <AboutProfile data={this.state.data} />
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

const mapStateToProps = (state) => {
  return { user: state.userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserId: async (id) => await dispatch(getUserId(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePageId));
