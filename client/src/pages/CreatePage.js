import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createPage } from "../redux/actions/pageActions";

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileType: "",
      profileName: "",
      username: "",
      city: "",
      country: "",
      email: "",
      linkedin: "",
      twitter: "",
      companyName: "",
      about: "",
      workersAmount: 0,
      phoneNumber: "",
      address: "",
      focusDepartment: [],
      programType: [],
      investmentStage: [],
      businessModel: [],
      typeOfEnterprise: [],
      lookingFor: [],
      addFounder: [],
      addTeam: [],
      addMentor: [],
      addInvestor: [],
      addProgram: [],
      addPartner: [],
    };
  }
  handleCheck = (name) => (event) => {
    let val = event.target.value;
    this.setState({
      [name]: val,
    });
  };
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.createPage(this.state);
  };

  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div className="uik-container-v__container">
          <div className="uik-widget__container" style={{ margin: "0 20%" }}>
            <div className="uik-widget__wrapper">
              <div className="uik-widget-content__wrapper">
                <h3>Şirket Profili oluşturma</h3>
                <p>Profile bilgilerini gir</p>
              </div>
              <div className="uik-divider__horizontal" />
              <div className="uik-widget-content__wrapper">
                <div className="uik-widget-content__wrapper">
                  <div className="uik-form-input-group__horizontal">
                    <h4>Şirket Profil Türü</h4>
                    <div className="uik-form-input-group__vertical">
                      <div>
                        <input
                          type="radio"
                          className="uik-checkbox__checkbox"
                          name="profileType"
                          id="profileType-startup"
                          value="startup"
                          onChange={this.handleCheck("profileType")}
                        />
                        <label htmlFor="profileType-startup">STARTUP</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="uik-checkbox__checkbox"
                          name="profileType"
                          id="profileType-program"
                          value="program"
                          onChange={this.handleCheck("profileType")}
                        />
                        <label htmlFor="profileType-program">
                          PROGRAM(KULUÇKA/HIZLANDIRMA)
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="uik-checkbox__checkbox"
                          name="profileType"
                          id="profileType-investment"
                          value="investment"
                          onChange={this.handleCheck("profileType")}
                        />
                        <label htmlFor="profileType-investment">
                          YATIRIM ŞİRKETİ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uik-divider__horizontal" />
                <div className="uik-form-input-group__vertical">
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        PROFIL ADI
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="profileName"
                          onChange={this.handleChange("profileName")}
                        />
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        Kullanıcı Adı
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="username"
                          onChange={this.handleChange("username")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="" />
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="uik-select__wrapper">
                      <span className="uik-content-title__wrapper">Şehir</span>
                      <button
                        className="uik-btn__base uik-select__valueRendered"
                        type="button"
                      >
                        <span className="uik-btn__content">
                          <div className="uik-select__valueRenderedWrapper">
                            <div className="uik-select__valueWrapper">
                              <span>{this.state.city}</span>
                            </div>
                            <div className="uik-select__arrowWrapper" />
                          </div>
                        </span>
                      </button>
                    </div>
                    <div className="uik-select__wrapper">
                      <span className="uik-content-title__wrapper">Ülke</span>
                      <button
                        className="uik-btn__base uik-select__valueRendered"
                        type="button"
                      >
                        <span className="uik-btn__content">
                          <div className="uik-select__valueRenderedWrapper">
                            <div className="uik-select__valueWrapper">
                              {this.state.country}
                            </div>
                            <div className="uik-select__arrowWrapper" />
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        E-POSTA
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="email"
                          className="uik-input__input"
                          onChange={this.handleChange("email")}
                        />
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        Website
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="website"
                          value={this.state.website}
                          onChange={this.handleChange("website")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        LINKEDIN
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="name"
                          onChange={this.handleChange("linkedin")}
                        />
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        TWITTER
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="twitter"
                          onChange={this.handleChange("twitter")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        ŞİRKET ADI
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="companyName"
                          onChange={this.handleChange("companyName")}
                        />
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        KURULUŞ TARIHI
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="companyCreated"
                          onChange={this.handleChange("companyCreated")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        HAKKINDA
                      </span>
                      <div className="uik-input__inputWrapper">
                        <textarea
                          className="uik-input__input"
                          name="about"
                          onChange={this.handleChange("about")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        ÇALIŞAN SAYISI
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="workersAmount"
                          onChange={this.handleChange("workersAmount")}
                        />
                      </div>
                    </div>
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        TELEFON
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="phoneNumber"
                          onChange={this.handleChange("phoneNumber")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">ADRES</span>
                      <div className="uik-input__inputWrapper">
                        <textarea
                          className="uik-input__input"
                          name="address"
                          onChange={this.handleChange("address")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        Odak Sektörü
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        Program Türü
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uik-form-input-group__horizontal">
                    <div className="">
                      <span className="uik-content-title__wrapper">
                        GİRİŞİM AŞAMASI
                      </span>
                      <div className="uik-input__inputWrapper">
                        <input
                          type="text"
                          className="uik-input__input"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      YATIRIM AŞAMASI
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">ARIYOR</span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      PORTFÖY EKLE
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      KURUCU EKLE
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      MENTÖR EKLE
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      YATIRIMCI EKLE
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      PARTNER EKLE
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      SPONSOR EKLE
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="uik-form-input-group__horizontal">
                  <div className="">
                    <span className="uik-content-title__wrapper">
                      OFİS İMKANLARI EKLE
                    </span>
                    <div className="uik-input__inputWrapper">
                      <input
                        type="text"
                        className="uik-input__input"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="uik-widget-content__wrapper">
                <button
                  onClick={this.clickSubmit}
                  className="uik-btn__base uik-btn__success"
                  type="button"
                >
                  <span className="uik-btn__content">Save Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPage: async (content) => await dispatch(createPage(content)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePage);
