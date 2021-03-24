import React, { Component } from "react";
import { url } from "../../url";
import { changeProfileImage } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

class SettingTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_image: "default_profile.jpg",
    };
  }
  clickUpload = async (event) => {
    event.preventDefault();
    await this.props.changeProfileImage(this.state.profile_image);
  };
  render() {
    return (
      <div>
        <div className="uik-buildings-user__splitContent ">
          <div className="uik-widget__container uik-buildings-user__subNav">
            <section className="uik-nav-section__wrapper">
              <div
                className="uik-buildings-user__profilePic"
                style={{ paddingTop: "0" }}
              >
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    height: "20rem",
                  }}
                  alt="profile"
                  className="img-fluid"
                  src={`${url}/uploads/${this.props.profileImage}`}
                />
                <Form>
                  <input
                    type="file"
                    id="file"
                    hidden
                    style={{ width: "100%" }}
                    onChange={(image) => {
                      this.setState({
                        profile_image: image.currentTarget.files[0],
                      });
                    }}
                  />
                  <label className="btn btn-default w-100" htmlFor="file">
                    Profil Fotoğrafını değiştir
                  </label>
                  <button
                    type="submit"
                    className="btn btn-info w-100"
                    onClick={this.clickUpload}
                  >
                    Resmi Kaydet
                  </button>
                </Form>
              </div>
              <div className="uik-widget-content__wrapper uik-buildings-user__userMeta">
                <p>
                  <br />
                </p>
              </div>
              {this.props.tabs.map((tab, index) => {
                const active = tab === this.props.selected ? "active" : "";
                return (
                  <button
                    className={"btn btn-outline-secondary" + active}
                    style={{ width: "100%" }}
                    onClick={() => this.props.setSelected(tab)}
                    key={index}
                  >
                    <span className="uik-nav-link__text">{tab}</span>
                  </button>
                );
              })}
            </section>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeProfileImage: async (image) => dispatch(changeProfileImage(image)),
  };
};

export default connect(null, mapDispatchToProps)(SettingTab);
