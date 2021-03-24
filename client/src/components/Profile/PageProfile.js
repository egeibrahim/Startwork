import React, { Component } from "react";
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/userActions";
import { url } from "../../url";
import TagButton from "../buttons/TagButton";

class PageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      following: [],
      word: "",
      abilities: [],
    };
  }
  componentDidMount() {
    let data = localStorage.getItem("userdata");
    const userdata = JSON.parse(data);
    this.setState({
      data: { ...userdata },
      following: [...userdata.following],
      abilities: [...userdata.abilities],
    });
  }

  followButton = (id) => (event) => {
    event.preventDefault();
    this.props.followUser(id);
  };

  unfollowButton = (id) => (event) => {
    event.preventDefault();
    this.props.unfollowUser(id);
  };
  render() {
    return (
      <div>
        <section className="pb-5 bg-white">
          <div className="container-fluid">
            <div className="row pt-5">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-5">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div>
                      <img
                        className="img-fluid rounded-circle"
                        style={{ width: "15rem", height: "15rem" }}
                        src={`${url}/uploads/${this.props.data.profile_image}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h5 className="fs22 mb-0">{this.props.data.profileName}</h5>
                    <span className="fs18">{this.props.data.username}</span>
                    <h5 className="font-weight-light fs18 font-italic mt-3">
                      Usak, Turkey
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6  col-xl-6 text-right mt-3 mt-sm-0">
                <div className="col-sm-12">
                  {this.state.following.includes(this.props.data._id) ? (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.unfollowButton(this.props.data._id)}
                    >
                      Takipten Çıkar
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.followButton(this.props.data._id)}
                    >
                      Takip
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "370px" }}>
              <p>Tags</p>
              <div>
                {this.state.abilities.map((ability, index) => (
                  <TagButton key={index} path={ability} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: async (id) => await dispatch(followUser(id)),
    unfollowUser: async (id) => await dispatch(unfollowUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(PageProfile);
