import React, { Component } from "react";
import { connect } from "react-redux";
import { getApply } from "../../redux/actions/applyActions";
import moment from "moment";
import { url } from "../../url";

class ApplyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    await this.props.getApply();
    let req = this.props.apply.apply;
    req = Object.values(req);
    await this.setState({ data: req });
  }

  render() {
    return (
      <div className="startup-grid-container">
        <div className="startup-grid-table-header">
          <div>APP</div>
          <div>BAŞLANGIÇ</div>
          <div>BİTİŞ</div>
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
              <div className="startup-column">
                {moment(post.begins).format("DD-MM-YYYY")}
              </div>
              <div className="startup-column">
                {moment(post.ends).format("DD-MM-YYYY")}
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
    apply: state.applyReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApply: async () => await dispatch(getApply()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyTable);
