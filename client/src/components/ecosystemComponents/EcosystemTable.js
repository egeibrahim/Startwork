import React, { Component } from "react";
import { getPageByType } from "../../redux/actions/pageActions";
import { connect } from "react-redux";
import EcoTabNav from "./EcoTabNav";
import Tab from "../Profile/Tab";
import Startup from "./Startup";

class EcosystemTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "STARTUPLAR",
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };

  render() {
    return (
      <div className="startup-grid-container">
        <EcoTabNav
          tabs={["STARTUPLAR", "PROGRAMLAR", "YATIRIMLAR"]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <div
            className="startup-grid-table-header"
            style={{ marginTop: "0", backgroundColor: "white" }}
          >
            <div>APP</div>
            <div>Profil Tipi</div>
            <div>Profil tipi</div>
            <div>İncele</div>
          </div>
          <Tab isSelected={this.state.selected === "STARTUPLAR"}>
            <Startup type="Startup" />
          </Tab>
          <Tab isSelected={this.state.selected === "PROGRAMLAR"}>
            <Startup type="Program" />
          </Tab>
          <Tab isSelected={this.state.selected === "YATIRIMLAR"}>
            <Startup type="investment" />
          </Tab>
        </EcoTabNav>

        <div className=""></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { page: state.pageReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPageByType: async (type) => dispatch(getPageByType(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EcosystemTable);
