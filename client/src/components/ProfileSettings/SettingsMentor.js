import React, { Component } from "react";
import {
  getMentorSettings,
  updateMentorSettings,
} from "../../redux/actions/settingsActions";
import { connect } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";

class SettingsMentor extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      isMentor: null,
      portfolio: [],
      availableMentor: null,
      hasMentorChoice: null,
      mentorshipProgram: [],
      mentorshipInvestment: null,
      mentorshipInvestStage: [],
    };
  }
  async componentDidMount() {
    await this.props.getMentorSettings();
    let req = await this.props.mentor.mentor;
    this.setState({ ...req });
  }

  handleCheck = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleCheckBox = (name, type) => () => {
    if (this.state.mentorshipInvestStage.includes(type)) {
      let array = this.state.mentorshipInvestStage;
      let index = array.indexOf(type);
      array.splice(index, 1);
      console.log(array);
      this.setState({ [name]: array });
    }else{
    this.setState({ [name]: [...this.state[name], type] });
    }
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleArray = (name) => () => {
    this.setState({ [name]: [...this.state[name], this.state.input] });
  };

  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateMentorSettings(this.state);
  };

  render() {
    return (
      <form>
        <div className="uik-widget__container">
          <div className="uik-widget__wrapper">
            <div className="uik-widget-content__wrapper">
              <h3>Mentör Ayarları</h3>
              <p>Profile bilgilerini gir</p>
            </div>
            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Mentör Müsünüz?</h4>
                <div className="uik-form-input-group__vertical">
                  <input
                    type="radio"
                    name="isMentor"
                    id="isMentor-yes"
                    checked={this.state.isMentor === true ? true : null}
                    value={true}
                    onChange={this.handleCheck("isMentor")}
                  />
                  <label htmlFor="isMentor-yes">Evet</label>
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="isMentor"
                    id="isMentor-no"
                    checked={this.state.isMentor === false ? true : null}
                    value={false}
                    onChange={this.handleCheck("isMentor")}
                  />
                  <label htmlFor="isMentor-no">Hayır</label>
                </div>
              </div>
            </div>
            <div className="uik-widget-content__wrapper">
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
                {/*{this.state.abilities.map(ability => <button className="btn btn-1">{ability}</button>)}*/}
              </div>
            </div>
            <div className="uik-divider__horizontal" />
            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Mentörlük için müsait misiniz?</h4>
                <div className="uik-form-input-group__vertical">
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="availableMentor"
                    id="availableMentor-yes"
                    checked={this.state.availableMentor === true ? true : null}
                    value={true}
                    onChange={this.handleCheck("availableMentor")}
                  />
                  <label htmlFor="availableMentor-yes">Evet</label>
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="availableMentor"
                    id="availableMentor-no"
                    checked={this.state.availableMentor === false ? true : null}
                    value={false}
                    onChange={this.handleCheck("availableMentor")}
                  />
                  <label htmlFor="availableMentor-no">Hayır</label>
                </div>
              </div>
            </div>

            <div className="uik-divider__horizontal" />
            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Mentörlük için sektör tercihi?</h4>
                <div className="uik-form-input-group__vertical">
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="hasMentorChoice"
                    id="hasMentorChoice-yes"
                    checked={this.state.hasMentorChoice === true ? true : null}
                    value={true}
                    onChange={this.handleCheck("hasMentorChoice")}
                  />
                  <label htmlFor="hasMentorChoice-yes">Var</label>
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="hasMentorChoice"
                    id="hasMentorChoice-no"
                    checked={this.state.hasMentorChoice === false ? true : null}
                    value={false}
                    onChange={this.handleCheck("hasMentorChoice")}
                  />
                  <label htmlFor="hasMentorChoice-no">Yok</label>
                </div>
              </div>
            </div>
            <div className="uik-widget-content__wrapper">
              <div style={{ maxWidth: "800px" }}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Odak Sektör"
                    type="text"
                    aria-label="Odak Sektör"
                    aria-describedby="basic-addon2"
                    onChange={this.handleChange("input")}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      onClick={this.handleArray("mentorshipProgram")}
                    >
                      Ekle
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                {this.state.mentorshipProgram.map((ability) => (
                  <button className="btn btn-1">{ability}</button>
                ))}
              </div>
            </div>
            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Mentörlük için yatırım aşaması tercihi var mı?</h4>
                <div className="uik-form-input-group__vertical">
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="mentorshipInvestment"
                    id="mentorshipInvestment-yes"
                    checked={
                      this.state.mentorshipInvestment === true ? true : null
                    }
                    value={true}
                    onChange={this.handleCheck("mentorshipInvestment")}
                  />
                  <label htmlFor="mentorshipInvestment-yes">Var</label>
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="mentorshipInvestment"
                    id="mentorshipInvestment-no"
                    checked={
                      this.state.mentorshipInvestment === false ? true : null
                    }
                    value={false}
                    onChange={this.handleCheck("mentorshipInvestment")}
                  />
                  <label htmlFor="mentorshipInvestment-no">Yok</label>
                </div>
              </div>
            </div>

            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Mentörlük için yatırım aşaması tercihi</h4>
                <div className="uik-form-input-group__vertical">
                  <label className="uik-checkbox__wrapper">
                    <input
                      checked={this.state.mentorshipInvestStage.includes(
                        "onTohum"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "onTohum"
                      )}
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                    />
                    <div className="uik-checkbox__label green">Ön tohum</div>
                  </label>
                  <label className="uik-checkbox__wrapper">
                    <input
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                      checked={this.state.mentorshipInvestStage.includes(
                        "tohum"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "tohum"
                      )}
                    />
                    <div className="uik-checkbox__label green">Tohum</div>
                  </label>
                  <label className="uik-checkbox__wrapper">
                    <input
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                      checked={this.state.mentorshipInvestStage.includes(
                        "seriABefore"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "seriABefore"
                      )}
                    />
                    <div className="uik-checkbox__label green">
                      Seri A Öncesi
                    </div>
                  </label>
                  <label className="uik-checkbox__wrapper">
                    <input
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                      checked={this.state.mentorshipInvestStage.includes(
                        "seriA"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "seriA"
                      )}
                    />
                    <div className="uik-checkbox__label green">Seri A</div>
                  </label>
                </div>
                <div className="uik-form-input-group__vertical">
                  <label className="uik-checkbox__wrapper">
                    <input
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                      checked={this.state.mentorshipInvestStage.includes(
                        "seriB"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "seriB"
                      )}
                    />
                    <div className="uik-checkbox__label green">Seri B</div>
                  </label>
                  <label className="uik-checkbox__wrapper">
                    <input
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                      checked={this.state.mentorshipInvestStage.includes(
                        "seriC"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "seriC"
                      )}
                    />
                    <div className="uik-checkbox__label green">Seri C</div>
                  </label>
                  <label className="uik-checkbox__wrapper">
                    <input
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                      checked={this.state.mentorshipInvestStage.includes(
                        "seriD"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "seriD"
                      )}
                    />
                    <div className="uik-checkbox__label green">Seri D</div>
                  </label>
                  <label className="uik-checkbox__wrapper">
                    <input
                      type="checkbox"
                      className="uik-checkbox__checkbox"
                      checked={this.state.mentorshipInvestStage.includes(
                        "seriE"
                      )}
                      onClick={this.handleCheckBox(
                        "mentorshipInvestStage",
                        "seriE"
                      )}
                    />
                    <div className="uik-checkbox__label green">Seri E</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="uik-widget-content__wrapper">
              <button
                className="uik-btn__base uik-btn__success"
                type="button"
                onClick={this.clickSubmit}
              >
                <span className="uik-btn__content">Save Settings</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { mentor: state.settingsReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMentorSettings: async () => await dispatch(getMentorSettings()),
    updateMentorSettings: async (userInfo) =>
      await dispatch(updateMentorSettings(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMentor);
