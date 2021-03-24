import React, { Component } from "react";
import { getPageByType } from "../redux/actions/pageActions";
import { connect } from "react-redux";
import { url } from "../url";
import {
  followUser,
  getUserData,
  unfollowUser,
} from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

class NetworkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      following: [],
      followingData: [],
      data: [],
    };
  }
  async componentDidMount() {
    await this.props.getUserData();
    let data = localStorage.getItem("userdata");
    const userdata = JSON.parse(data);
    await this.props.getPageByType("Program");
    let req = this.props.page.page;
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
      <div>
        <section className="content">
          <div className="page-wrapper">
            <div className="page-content">
              <h3 className="tab-title">Arkadaş Listeniz</h3>
              <div className="container-fluid mt-5 p-0">
                <div className="row portfoy">
                  {this.state.followingData.map((page, index) => (
                    <div
                      className="col-lg-6 col-md-6 float-left portfoy-item"
                      key={page._id}
                    >
                      <div className="col-lg-2 float-left">
                        <img
                          src={`${url}/uploads/${page.profile_image}`}
                          className="rounded-circle"
                          alt="profile"
                        />
                      </div>
                      <div className="col-lg-6 float-left">
                        <h2 className="fs16 mt-2">
                          {page.name || page.profileName}
                        </h2>
                        <p>{page.department || page.profileType}</p>
                        <p className="clr-3">Email: {page.email}</p>
                      </div>
                      <div className="col-lg-4 float-left align-items-center pt-3">
                        {this.state.following.includes(
                          this.state.userData.following[index]._id
                        ) ? (
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
              <button
                type="button"
                style={{ marginLeft: "50%" }}
                className="btn btn-info"
              >
                Hepsini Gör
              </button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="page-wrapper">
            <div className="page-content">
              <h3 className="tab-title">Önerilenler</h3>
              <div className="container-fluid mt-5 p-0">
                <div className="row portfoy">
                  {this.state.data.slice(0, 4).map((page, index) => (
                    <div
                      className="col-lg-6 col-md-6 float-left portfoy-item"
                      key={page._id}
                    >
                      <div className="col-lg-2 float-left">
                        <img
                          src={`${url}/uploads/${page.profile_image}`}
                          className="rounded-circle"
                          alt="profile"
                        />
                      </div>
                      <div className="col-lg-6 float-left">
                        <h2 className="fs16 mt-2">{page.profileName}</h2>
                        <p>Profile tipi: {page.profileType}</p>
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
              <button
                type="button"
                style={{ marginLeft: "50%" }}
                className="btn btn-info"
              >
                Hepsini Gör
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { page: state.pageReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: async () => await dispatch(getUserData()),
    getPageByType: async (type) => await dispatch(getPageByType(type)),
    followUser: async (id) => await dispatch(followUser(id)),
    unfollowUser: async (id) => await dispatch(unfollowUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetworkPage);
