import React, { Component } from "react";
import { getPageByType } from "../../redux/actions/pageActions";
import { connect } from "react-redux";
import { url } from "../../url";

class Startup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    await this.props.getPageByType(this.props.type);
    let req = this.props.page.page;
    req = Object.values(req);
    this.setState({ data: req });
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        {this.state.data.map((post) => (
          <div
            className="startup-grid-row"
            data-toggle="modal"
            data-target="#modal_1"
            key={post._id}
          >
            <div className="startup-column">
              <div className="startup-row-logo">
                <img alt="icon" src={`${url}/uploads/${post.profile_image}`} />
              </div>
              <div className="startup-row-name">
                <div className="startup-row-name-top">{post.profileName}</div>
                <br />
              </div>
            </div>
            <div className="startup-column">{post.profileType}</div>
            <div className="startup-column">{post.username}</div>
            <div className="startup-column">
              <a
                href={"page/" + post._id}
                className="uik-btn__base uik-btn__success uik-btn__xs"
              >
                İNCELE
              </a>
            </div>
          </div>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Startup);
