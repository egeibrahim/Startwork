import React, { Component } from "react";
import { connect } from "react-redux";
import { url } from "../../url";
import { getJob } from "../../redux/actions/jobActions";

class JobTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    await this.props.getJob();
    let req = this.props.job.job;
    req = Object.values(req);
    await this.setState({ data: req });
  }
  render() {
    return (
      <div className="startup-grid-container">
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
                  <div className="startup-row-name-top">{post.jobTitle}</div>
                </div>
              </div>
              <div className="startup-column">{post.level}</div>
              <div className="startup-column">{post.workingType}</div>
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
    job: state.jobReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getJob: async () => await dispatch(getJob()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobTable);
