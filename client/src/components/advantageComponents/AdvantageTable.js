import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllAdvantage } from "../../redux/actions/advantageActions";
import { url } from "../../url";

class AdvantageTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    await this.props.getAllAdvantage();
    let req = this.props.advantage.advantage;
    req = Object.values(req);
    await this.setState({ data: req });
  }
  render() {
    return (
      <div className="startup-grid-container">
        <div className="startup-grid-table-header">
          <div>APP</div>
          <div style={{ width: "40%" }}>Hakkında</div>
          <div>Başvur</div>
        </div>
        <div className="startup-grid-body">
          {this.state.data.map((post) => (
            <div
              key={post._id}
              className="startup-grid-row"
              data-toggle="modal"
              data-target="#modal_1"
            >
              <div className="startup-column">
                <div className="startup-row-logo">
                  <img alt="" src={`${url}/uploads/${post.profile_image}`} />
                </div>
                <div className="startup-row-name">
                  <div className="startup-row-name-top">{post.projectName}</div>
                </div>
              </div>
              <div className="startup-column" style={{ width: "40%" }}>
                {post.about}
              </div>
              <div className="startup-column">
                <a
                  href={"http://" + post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="uik-btn__base uik-btn__success uik-btn__xs"
                >
                  İNCELE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    advantage: state.advantageReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAdvantage: async () => dispatch(getAllAdvantage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvantageTable);
