import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/NavBar/NavBar";
import MainMenuComponent from "./components/MainMenu/MainMenuComponent";
import { getUserData } from "./redux/actions/userActions";
import LoginPage from "./pages/LoginPage";
import { compose } from "redux";

import "./sideStyles.css";
import ProfileSettings from "./pages/ProfileSettings";
import RegisterPage from "./pages/RegisterPage";
import CreatePage from "./pages/CreatePage";
import GetPage from "./pages/GetPage";
import ProfilePageId from "./pages/ProfilePageId";
import ApplyPage from "./pages/ApplyPage";
import CreateJob from "./pages/CreateJob";
import EcosystemPage from "./pages/EcosystemPage";
import AdvantagesPage from "./pages/AdvantagesPage";
import NetworkPage from "./pages/NetworkPage";
import EventsPage from "./pages/EventsPage";
import TagPage from "./pages/TagPage";
import ConversationPage from "./pages/ConversationPage";
import ConversationIdPage from "./pages/ConversationIdPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile_image: "",
      name: "",
      email: "",
      following: "",
      followers: "",
    };
  }

  async componentDidMount() {
    await this.props.getUserData();
    if (this.props.user.loggedIn) {
      let data = await localStorage.getItem("userdata");
      data = JSON.parse(data);
      this.setState({
        profile_image: data.profile_image,
        name: data.name,
        email: data.email,
        following: data.following,
        followers: data.followers,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          {this.props.user.loggedIn ? (
            <NavBar
              name={this.state.name}
              profileImage={this.state.profile_image}
            />
          ) : null}

          <Switch>
            <Route path="/" exact={true}>
              <MainMenuComponent
                name={this.state.name}
                profileImage={this.state.profile_image}
                email={this.state.email}
                followers={this.state.followers}
                following={this.state.following}
              />
            </Route>
            <Route path="/profile" exact={true}>
              <ProfilePage data={this.props.user.user} />
            </Route>
            <Route path="/profileSettings">
              <ProfileSettings data={this.props.user.user} />
            </Route>
            <Route path="/createPage">
              <CreatePage data={this.props.user.user} />
            </Route>
            <Route path="/page/:id">
              <GetPage />
            </Route>
            <Route path="/profile/:id">
              <ProfilePageId />
            </Route>
            <Route path="/apply" exact={true}>
              <ApplyPage />
            </Route>
            <Route path="/jobs" exact={true}>
              <CreateJob />
            </Route>
            <Route path="/ecosystem" exact={true}>
              <EcosystemPage />
            </Route>
            <Route path="/advantages" exact={true}>
              <AdvantagesPage />
            </Route>
            <Route path="/network" exact={true}>
              <NetworkPage />
            </Route>
            <Route path="/events" exact={true}>
              <EventsPage />
            </Route>
            <Route path="/search/:tag" exact={true}>
              <TagPage />
            </Route>
            <Route path="/discussion" exact={true}>
              <ConversationPage />
            </Route>
            <Route path="/discussion/:id" exact={true}>
              <ConversationIdPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: async () => await dispatch(getUserData()),
  };
};

const mapStateToProps = (state) => {
  return { user: state.userReducer };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
