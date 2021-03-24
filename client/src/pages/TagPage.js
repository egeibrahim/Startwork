import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { searchTag } from "../redux/actions/searchActions";
import { connect } from "react-redux";
import { url } from "../url";
import {
  followUser,
  getUserData,
  unfollowUser,
} from "../redux/actions/userActions";

class TagPage extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.tag;
    this.state = {
      userData: {},
      following: [],
      followingData: [],
      data: [],
    };
  }

  async componentDidMount() {
    this.props.getUserData();
    let data = localStorage.getItem("userdata");
    const userdata = JSON.parse(data);
    await this.props.searchTag(this.routeParam.toLowerCase());
    let req = await this.props.search.search;
    req = Object.values(req);
    let ids = [];
    userdata.following.map((user) => ids.push(user._id));
    this.setState({
      data: req,
      userData: { ...userdata },
      following: [...ids],
      followingData: [...userdata.following],
    });
  }

  followButton = (id) => (event) => {
    event.preventDefault();
    this.props.followUser(id);
    this.setState({ following: [...this.state.following, id] });
  };

  unfollowButton = (id) => (event) => {
    event.preventDefault();
    this.props.unfollowUser(id);
    let array = [...this.state.following];
    let index = array.indexOf(id);
    array.splice(index, 1);
    this.setState({ following: array });
  };

  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <section className="content">
          <div className="page-wrapper">
            <div className="page-content">
              <h3 className="tab-title">{this.routeParam}</h3>
              <div className="container-fluid mt-5 p-0">
                <div className="row portfoy">
                  {this.state.data.map((page) => (
                    <div
                      className="col-lg-6 col-md-6 float-left portfoy-item"
                      key={page._id}
                    >
                      <div className="col-lg-2 float-left">
                        <img
                          src={`${url}/uploads/${page.profile_image}`}
                          className="img-fluid rounded-circle"
                          alt="profile"
                        />
                      </div>
                      <div className="col-lg-6 float-left">
                        <h2 className="fs16 mt-2">{page.name}</h2>
                        <p>Profile tipi: {page.department}</p>
                        <p className="clr-3">Email: {page.email}</p>
                      </div>
                      <div className="col-lg-4 float-left align-items-center pt-3">
                        {this.state.following.includes(page._id) ? (
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.unfollowButton(page._id)}
                          >
                            Takipten Çıkar
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.followButton(page._id)}
                          >
                            Takip
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { search: state.searchReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: async () => await dispatch(getUserData()),
    searchTag: async (tag) => await dispatch(searchTag(tag)),
    followUser: async (id) => await dispatch(followUser(id)),
    unfollowUser: async (id) => await dispatch(unfollowUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TagPage));
