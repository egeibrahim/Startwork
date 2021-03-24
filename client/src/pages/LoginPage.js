import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, getUserData } from "../redux/actions/userActions";
import { withRouter } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.fetchUser(this.state);
    this.setState({ ...this.props.user });
    await this.props.getUserData();
  };

  render() {
    const { username, password, error } = this.state;

    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
      return <Redirect to="/" />;
    }
    return (
      <form>
        <div className="uik-buildings-signup__pageWrapper">
          <div className="uik-widget__wrapper uik-buildings-signup__widgetWrapper">
            <div
              className="uik-buildings-signup__content"
              style={{ width: "350px" }}
            >
              <div className="uik-widget-content__wrapper uik-buildings-signup__left">
                <h2 className="uik-headline__wrapper">Selam!</h2>
                <p className="uik-headline-desc__wrapper">
                  Seni buradan görmekten mutluyuz!
                </p>
                <div className="alert" style={{ display: error ? "" : "none" }}>
                  {error}
                </div>
                <div className="uik-form-input-group__vertical">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      KULLANICI ADI
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        onChange={this.handleChange("username")}
                        name="username"
                        placeholder="username"
                        value={username}
                      />
                    </div>
                  </div>
                  <div className="">
                    <span className="uik-content-title__wrapper">ŞİFRE</span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="password"
                        onChange={this.handleChange("password")}
                        className="uik-input__input"
                        name="password"
                        placeholder="********"
                        value={password}
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-divider__horizontal uik-divider__margin" />
                <button
                  className="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
                  onClick={this.clickSubmit}
                >
                  <span className="uik-btn__content">Giriş</span>
                </button>
              </div>
            </div>
          </div>
          <p>
            StartWork.co hesabına sahip değil misin?
            <Link to="/register">Kayıt ol!</Link>
          </p>
          <p>
            Eğer şifreni unuttuysan!<a href="/">Yeni şifre oluştur</a>
          </p>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: async () => await dispatch(getUserData()),
    fetchUser: async (userInfo) => await dispatch(fetchUser(userInfo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
