import React, { Component } from "react";
import "../sideStyles.css";
import { Link, Redirect } from "react-router-dom";
import { registerUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      error: "",
      redirectToRoute: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.registerUser(this.state);
    await this.setState({ ...this.props.user });
  };

  render() {
    const {
      name,
      username,
      email,
      password,
      error,
      redirectToRoute,
    } = this.state;
    if (redirectToRoute) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <form style={{ maxWidth: "none" }}>
          <div className="uik-buildings-signup__pageWrapper">
            <div className="uik-widget__wrapper uik-buildings-signup__widgetWrapper">
              <div className="uik-buildings-signup__content">
                <div className="uik-widget-content__wrapper uik-buildings-signup__left">
                  <h2 className="uik-headline__wrapper">Hesabını Oluştur</h2>
                  <p className="uik-headline-desc__wrapper">
                    StartWork.co ile girişim dünyasının tadını çıkarın!
                  </p>
                  <div
                    className="alert"
                    style={{ display: error ? "" : "none" }}
                  >
                    {error}
                  </div>
                  <div className="uik-form-input-group__vertical">
                    <div className="uik-buildings-signup__inputNameSurnameGroup uik-form-input-group__horizontal">
                      <div className="">
                        <span className="uik-content-title__wrapper">
                          ISIM-SOYISIM
                        </span>
                        <div className="uik-input__inputWrapper">
                          <input
                            type="text"
                            className="uik-input__input"
                            name="name"
                            onChange={this.handleChange("name")}
                            value={name}
                            placeholder="abdullah"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        USERNAME
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="username"
                          onChange={this.handleChange("username")}
                          value={username}
                          placeholder="abdullah"
                        />
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        E-POSTA
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="email"
                          className="uik-input__input"
                          name="email"
                          onChange={this.handleChange("email")}
                          value={email}
                          placeholder="abdullah@startwork.com"
                        />
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">ŞİFRE</span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="password"
                          className="uik-input__input"
                          name="password"
                          onChange={this.handleChange("password")}
                          value={password}
                          placeholder="********"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-divider__horizontal uik-divider__margin" />
                  <h3 className="uik-buildings-signup__headline">
                    Nasıl yardımcı olabiliriz?
                  </h3>
                  <div className="uik-buildings-signin-card-container__wrapper">
                    <button
                      className="uik-buildings-signin-card__wrapper uik-buildings-signin-card__selected"
                      type="button"
                    >
                      <p>Girişim</p>
                      <i className="uikon uik-buildings-signin-card__selectedCheck">
                        check
                      </i>
                    </button>
                    <button
                      className="uik-buildings-signin-card__wrapper"
                      type="button"
                    >
                      <p>Mentor</p>
                      <i className="uikon uik-buildings-signin-card__selectedCheck">
                        check
                      </i>
                    </button>
                    <button
                      className="uik-buildings-signin-card__wrapper"
                      type="button"
                    >
                      <p>Yatırımcı</p>
                      <i className="uikon uik-buildings-signin-card__selectedCheck">
                        check
                      </i>
                    </button>
                  </div>
                  <button
                    className="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
                    onClick={this.clickSubmit}
                  >
                    <span className="uik-btn__content">KAYIT OL</span>
                  </button>
                </div>
              </div>
            </div>
            <p>
              Zaten StartWork.co hesabınız var mı? Hadi{" "}
              <Link to="/login">Giriş Yap!</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: async (userInfo) => await dispatch(registerUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
