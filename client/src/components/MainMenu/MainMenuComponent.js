import AsideBar from "../Aside/AsideBar";
import CreatePost from "../Post/CreatePost";
import React, { Component } from "react";
import Posts from "../Post/Posts";
import { Redirect } from "react-router-dom";

class MainMenuComponent extends Component {
  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <AsideBar
          name={this.props.name}
          profileImage={this.props.profileImage}
          email={this.props.email}
          followers={this.props.followers}
          following={this.props.following}
        />
        <CreatePost profileImage={this.props.profileImage} />
        <Posts profileImage={this.props.profileImage} />
      </div>
    );
  }
}

export default MainMenuComponent;
