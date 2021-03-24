import React, { Component } from "react";
import { updateUserData } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";

class SettingsProfile extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      name: "",
      createdAt: "",
      username: "",
      city: "",
      country: "",
      email: "",
      website: "",
      linkedin: "",
      twitter: "",
      department: "",
      study: "",
      positionIn: "",
      workArea: "",
      bio: "",
      entrepreneur: false,
      mentor: false,
      investor: false,
      abilities: [],
      lookingFor: [],
      input: "",
    };
  }
  async componentDidMount() {
    let data = localStorage.getItem("userdata");
    const userdata = JSON.parse(data);
    await this.setState({
      ...userdata,
    });
  }
  async componentWillReceiveProps() {
    try {
      let data = await this.props.data;
      this.setState({
        ...data,
      });
    } catch (e) {}
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleCheck = (name) => (event) => {
    let val = event.target.checked;
    this.setState({
      [name]: val,
    });
  };

  handleArray = (name) => (event) => {
    this.setState({
      [name]: [...this.state[name], this.state.input.toLowerCase()],
    });
  };

  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateUserData(this.state);
    await this.setState({
      ...this.props.data,
    });
  };
  render() {
    return (
      <div className="uik-widget__container">
        <div className="uik-widget__wrapper">
          <div className="uik-widget-content__wrapper">
            <h3>Şirket Profili oluşturma</h3>
            <p>Profile bilgilerini gir</p>
          </div>
          <div className="uik-divider__horizontal" />
          <div className="uik-widget-content__wrapper">
            <div className="uik-form-input-group__vertical">
              <div className="uik-form-input-group__horizontal">
                <div className="">
                  <span className="uik-content-title__wrapper">Ad-Soyadı</span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange("name")}
                    />
                  </div>
                </div>
                <div className="">
                  <span className="uik-content-title__wrapper">
                    Üyelik Tarihi
                  </span>
                  <div className="uik-input__inputWrapper">
                    <p className="uik-input__input" name="createdAt">
                      {this.state.createdAt}
                    </p>
                  </div>
                </div>
              </div>
              <div className="uik-form-input-group__horizontal">
                <div className="">
                  <span className="uik-content-title__wrapper">
                    Kullanıcı Adı
                  </span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange("username")}
                    />
                  </div>
                </div>
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
                  <span className="uik-content-title__wrapper">E-POSTA</span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      value={this.state.email}
                      onChange={this.handleChange("email")}
                    />
                  </div>
                </div>
                <div className="">
                  <span className="uik-content-title__wrapper">Website</span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="createdAt"
                      value={this.state.website}
                      onChange={this.handleChange("website")}
                    />
                  </div>
                </div>
              </div>
              <div className="uik-form-input-group__horizontal">
                <div className="">
                  <span className="uik-content-title__wrapper">LINKEDIN</span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="name"
                      value={this.state.linkedin}
                      onChange={this.handleChange("linkedin")}
                    />
                  </div>
                </div>
                <div className="">
                  <span className="uik-content-title__wrapper">TWITTER</span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="createdAt"
                      value={this.state.twitter}
                      onChange={this.handleChange("twitter")}
                    />
                  </div>
                </div>
              </div>
              <div className="uik-form-input-group__horizontal">
                <div className="">
                  <span className="uik-content-title__wrapper">Bölüm</span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="name"
                      value={this.state.department}
                      onChange={this.handleChange("department")}
                    />
                  </div>
                </div>
                <div className="">
                  <span className="uik-content-title__wrapper">Okul</span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="createdAt"
                      value={this.state.study}
                      onChange={this.handleChange("study")}
                    />
                  </div>
                </div>
              </div>
              <div className="uik-form-input-group__horizontal">
                <div className="">
                  <span className="uik-content-title__wrapper">
                    deneyim-pozisyon
                  </span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="name"
                      value={this.state.positionIn}
                      onChange={this.handleChange("positionIn")}
                    />
                  </div>
                </div>
                <div className="">
                  <span className="uik-content-title__wrapper">
                    Şireket veya Startup
                  </span>
                  <div className="uik-input__inputWrapper">
                    <input
                      type="text"
                      className="uik-input__input"
                      name="createdAt"
                      value={this.state.workArea}
                      onChange={this.handleChange("workArea")}
                    />
                  </div>
                </div>
              </div>
              <div className="uik-form-input-group__horizontal">
                <div className="">
                  <span className="uik-content-title__wrapper">Biyografi</span>
                  <div className="uik-input__inputWrapper">
                    <textarea
                      className="uik-input__input"
                      name="name"
                      value={this.state.bio}
                      onChange={this.handleChange("bio")}
                    />
                  </div>
                </div>
              </div>
              <div className="uik-divider__horizontal" />
              <div className="uik-widget-content__wrapper">
                <div className="uik-form-input-group__horizontal">
                  <div className="uik-form-input-group__vertical">
                    <h4>
                      Profil Etiketi (Size uygun profil tipi varsa
                      işaretleyiniz)
                    </h4>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.entrepreneur}
                        value={this.state.entrepreneur}
                        onChange={this.handleCheck("entrepreneur")}
                      />
                      <div className="uik-checkbox__label green">Girişimci</div>
                    </label>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.mentor}
                        value={this.state.mentor}
                        onChange={this.handleCheck("mentor")}
                      />
                      <div className="uik-checkbox__label green">Mentör</div>
                    </label>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investor}
                        value={this.state.investor}
                        onChange={this.handleCheck("investor")}
                      />
                      <div className="uik-checkbox__label green">Yatırımcı</div>
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ maxWidth: "800px" }}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Yetenekler"
                    type="text"
                    aria-label="Yetenekler"
                    aria-describedby="basic-addon2"
                    onChange={this.handleChange("input")}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      onClick={this.handleArray("abilities")}
                    >
                      Ekle
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                {this.state.abilities.map((ability, index) => (
                  <button key={index} className="btn btn-1">
                    {ability}
                  </button>
                ))}
              </div>
              <div style={{ maxWidth: "800px" }}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Arıyor"
                    type="text"
                    aria-label="Arıyor"
                    aria-describedby="basic-addon2"
                    onChange={this.handleChange("input")}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      onClick={this.handleArray("lookingFor")}
                    >
                      Ekle
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                {this.state.lookingFor.map((ability, index) => (
                  <button key={index} className="btn btn-1">
                    {ability}
                  </button>
                ))}
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
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserData: async (userInfo) =>
      await dispatch(updateUserData(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SettingsProfile);
