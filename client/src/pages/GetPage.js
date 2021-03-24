import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { getPageById } from "../redux/actions/pageActions";
import PageProfile from "../components/Profile/PageProfile";
import TabNav from "../components/Profile/TabNav";
import Tab from "../components/Profile/Tab";
import AboutProfile from "../components/Profile/AboutProfile";

class GetPage extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.id;
    this.state = {
      data: [],
      selected: "Hakkında",
    };
  }
  async componentDidMount() {
    await this.props.getPageById(this.routeParam);
    const req = this.props.page.page;
    this.setState({ data: req });
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
      <div className="container">
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
  return { page: state.pageReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPageById: async (id) => dispatch(getPageById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GetPage));
