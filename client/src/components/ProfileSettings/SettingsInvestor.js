import React, { Component } from "react";
import {
  getInvestorSettings,
  updateInvestorSettings,
} from "../../redux/actions/settingsActions";
import { connect } from "react-redux";
import {Button, FormControl, InputGroup} from "react-bootstrap";

class SettingsInvestor extends Component {
  constructor() {
    super();
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      isInvestor: null,
      portfolio: [],
      availableInvestor: null,
      hasInvestorChoice: null,
      mainInvestments: [],
      hasInvestmentOption: null,
      investmentOptions: [],
    };
  }

  async componentDidMount() {
    await this.props.getInvestorSettings();
    let req = await this.props.investor.investor;
    this.setState({ ...req });
  }

  handleCheck = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleCheckBox = (name, type) => () => {
    if (this.state.investmentOptions.includes(type)) {
      let array = this.state.investmentOptions;
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
    await this.props.updateInvestorSettings(this.state);
  };
  render() {
    return (
      <div>
        <div className="uik-widget__container">
          <div className="uik-widget__wrapper">
            <div className="uik-widget-content__wrapper">
              <h3>Mentör Ayarları</h3>
              <p>Profile bilgilerini gir</p>
            </div>
            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Yatırımcı Mısınız?</h4>
                <div className="uik-form-input-group__vertical">
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="isInvestor"
                    id="isInvestor-yes"
                    checked={this.state.isInvestor === true ? true : null}
                    value={true}
                    onChange={this.handleCheck("isInvestor")}
                  />
                  <label htmlFor="isInvestor-yes">Evet</label>
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="isInvestor"
                    id="isInvestor-no"
                    checked={this.state.isInvestor === false ? true : null}
                    value={false}
                    onChange={this.handleCheck("isInvestor")}
                  />
                  <label htmlFor="isInvestor-no">Hayır</label>
                </div>
              </div>
            </div>
            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Yatırım için müsait misiniz?</h4>
                <div className="uik-form-input-group__vertical">
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="availableInvestor"
                    id="availableInvestor-yes"
                    checked={this.state.availableInvestor === true ? true : null}
                    value={true}
                    onChange={this.handleCheck("availableInvestor")}
                  />
                  <label htmlFor="availableInvestor-yes">Evet</label>
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="availableInvestor"
                    id="availableInvestor-no"
                    checked={this.state.availableInvestor === false ? true : null}
                    value={false}
                    onChange={this.handleCheck("availableInvestor")}
                  />
                  <label htmlFor="availableInvestor-no">Hayır</label>
                </div>
              </div>
            </div>
            <div className="uik-widget-content__wrapper">
              <div className="uik-form-input-group__horizontal">
                <h4>Yatırım için sektör tercihi?</h4>
                <div className="uik-form-input-group__vertical">
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="hasInvestorChoice"
                    id="hasInvestorChoice-yes"
                    checked={this.state.hasInvestorChoice === true ? true : null}
                    value={true}
                    onChange={this.handleCheck("hasInvestorChoice")}
                  />
                  <label htmlFor="hasInvestorChoice-yes">Var</label>
                  <input
                    type="radio"
                    className="uik-checkbox__checkbox"
                    name="hasInvestorChoice"
                    id="hasInvestorChoice-no"
                    checked={this.state.hasInvestorChoice === false ? true : null}
                    value={false}
                    onChange={this.handleCheck("hasInvestorChoice")}
                  />
                  <label htmlFor="hasInvestorChoice-no">Yok</label>
                </div>
              </div>
            </div>
            <form>
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
                          onClick={this.handleArray("mainInvestments")}
                      >
                        Ekle
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                  {this.state.mainInvestments.map((ability) => (
                      <button className="btn btn-1">{ability}</button>
                  ))}
                </div>
              </div>

              <div className="uik-widget-content__wrapper">
                <div className="uik-form-input-group__horizontal">
                  <h4>Yatırım aşaması tercihi var mı?</h4>
                  <div className="uik-form-input-group__vertical">
                    <input
                      type="radio"
                      className="uik-checkbox__checkbox"
                      name="hasInvestmentOption"
                      id="hasInvestmentOption-yes"
                      checked={this.state.hasInvestmentOption === true ? true : null}
                      value={true}
                      onChange={this.handleCheck("hasInvestmentOption")}
                    />
                    <label htmlFor="hasInvestmentOption-yes">Var</label>
                    <input
                      type="radio"
                      className="uik-checkbox__checkbox"
                      name="hasInvestmentOption"
                      id="hasInvestmentOption-no"
                      checked={this.state.hasInvestmentOption === false ? true : null}
                      value={false}
                      onChange={this.handleCheck("hasInvestmentOption")}
                    />
                    <label htmlFor="hasInvestmentOption-no">Yok</label>
                  </div>
                </div>
              </div>

              <div className="uik-widget-content__wrapper">
                <div className="uik-form-input-group__horizontal">
                  <h4>Yatırım aşaması tercihi</h4>
                  <div className="uik-form-input-group__vertical">
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investmentOptions.includes(
                            "onTohum"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
                            "onTohum"
                        )}
                      />
                      <div className="uik-checkbox__label green">
                        Ön tohum
                      </div>
                    </label>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investmentOptions.includes(
                            "tohum"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
                            "tohum"
                        )}
                      />
                      <div className="uik-checkbox__label green">
                        Tohum
                      </div>
                    </label>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investmentOptions.includes(
                            "seriABefore"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
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
                        checked={this.state.investmentOptions.includes(
                            "seriA"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
                            "seriA"
                        )}
                      />
                      <div className="uik-checkbox__label green">
                        Seri A
                      </div>
                    </label>
                  </div>
                  <div className="uik-form-input-group__vertical">
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investmentOptions.includes(
                            "seriB"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
                            "seriB"
                        )}
                      />
                      <div className="uik-checkbox__label green">
                        Seri B
                      </div>
                    </label>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investmentOptions.includes(
                            "seriC"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
                            "seriC"
                        )}
                      />
                      <div className="uik-checkbox__label green">
                        Seri C
                      </div>
                    </label>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investmentOptions.includes(
                            "seriD"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
                            "seriD"
                        )}
                      />
                      <div className="uik-checkbox__label green">
                        Seri D
                      </div>
                    </label>
                    <label className="uik-checkbox__wrapper">
                      <input
                        type="checkbox"
                        className="uik-checkbox__checkbox"
                        checked={this.state.investmentOptions.includes(
                            "seriE"
                        )}
                        onClick={this.handleCheckBox(
                            "investmentOptions",
                            "seriE"
                        )}
                      />
                      <div className="uik-checkbox__label green">
                        Seri E
                      </div>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { investor: state.settingsReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInvestorSettings: async () => await dispatch(getInvestorSettings()),
    updateInvestorSettings: async (userInfo) =>
      await dispatch(updateInvestorSettings(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsInvestor);
