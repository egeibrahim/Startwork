import React, { Component } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import cover from "../assets/images/sea.jpg";
import EventsTable from "../components/eventsComponents/EventsTable";
import moment from "moment";
import { createEvent } from "../redux/actions/eventActions";
import { connect } from "react-redux";
import EventSide from "../components/eventsComponents/EventSide";
import { Redirect } from "react-router-dom";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      profile_image: "default_event.jpg",
      eventName: "",
      eventType: "Etkinlik Türünü seçiniz",
      eventLocation: "",
      eventStarts: "",
      eventEnds: "",
      about: "",
      isPaid: false,
      url: "",
    };
  }

  handleChange = (name) => (event) => {
    const date = moment(event.target.value)
      .utc()
      .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.setState({ [name]: date });
  };

  handleInput = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleCheck = (name) => (event) => {
    this.setState({
      [name]: event.target.checked,
    });
  };

  dropdownHandler = (name) => (event) => {
    event.preventDefault();
    this.setState({ eventType: name });
  };

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.createEvent({
      eventName: this.state.eventName,
      eventType: this.state.eventType,
      eventLocation: this.state.eventLocation,
      eventStarts: this.state.eventStarts,
      eventEnds: this.state.eventEnds,
      about: this.state.about,
      isPaid: this.state.isPaid,
      profile_image: this.state.profile_image,
    });
  };

  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="mainCellLeft">
          <div className="events">
            <div style={{ display: "inline-block", width: "100%" }}>
              <h1
                className="heading"
                style={{ color: "#1b6adf", display: "inline-block" }}
              >
                Etkinlik Listesi
              </h1>
              <button
                style={{ float: "right", marginRight: "15px" }}
                className="btn btn-default"
                onClick={() => {
                  this.handleModal();
                }}
              >
                Etkinlik ekle
              </button>
              <Modal
                show={this.state.show}
                dialogClassName="mainModal"
                onHide={() => this.handleModal()}
                aria-labelledby="modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Güzel Anlar İçin Bir Etkinlik Oluştur
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <div className="createImg">
                        <img src={cover} alt="cover" />
                        <input
                          id="addImage"
                          type="file"
                          name="file"
                          onChange={(image) => {
                            this.setState({
                              profile_image: image.currentTarget.files[0],
                            });
                          }}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="createTable">
                        <div className="createCellHalf">
                          <p>Etkinlik Adı</p>
                          <Form.Control
                            name="eventName"
                            type="text"
                            placeholder="Kısa ve net bir isim"
                            onChange={this.handleInput("eventName")}
                          />
                        </div>
                        <div className="createCellHalf">
                          <p>Konum</p>
                          <Form.Control
                            name="eventLocation"
                            type="text"
                            placeholder="Bir yer veya adres"
                            onChange={this.handleInput("eventLocation")}
                          />
                        </div>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="createTable">
                        <div className="myRow">
                          <div className="createCell">
                            <p>Etkinlik Türü</p>
                          </div>
                        </div>
                        <Dropdown>
                          <Dropdown.Toggle
                            className="w-100"
                            variant="light"
                            id="dropdown-basic"
                          >
                            {this.state.eventType}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="w-100">
                            <Dropdown.Item
                              onClick={this.dropdownHandler("Meet")}
                            >
                              Meet
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="createTable">
                        <div className="createCellHalf">
                          <p>Starts</p>
                          <div
                            className="selectFlex"
                            style={{ display: "flex", width: "100%" }}
                          >
                            <div
                              className="selection"
                              style={{
                                width: "100%",
                                marginLeft: "0",
                                marginTop: "5px",
                                marginRight: "0",
                                fontSize: "0.8em",
                              }}
                            >
                              <Form.Control
                                name="eventStarts"
                                type="datetime-local"
                                placeholder="Başlangıç tarihini giriniz"
                                onChange={this.handleChange("eventStarts")}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="createCellHalf">
                          <p>Ends</p>
                          <div
                            className="selectFlex"
                            style={{ display: "flex", width: "100%" }}
                          >
                            <div
                              className="selection"
                              style={{
                                width: "100%",
                                marginLeft: "0",
                                marginTop: "5px",
                                marginRight: "0",
                                fontSize: "0.8em",
                              }}
                            >
                              <Form.Control
                                name="eventEnds"
                                type="datetime-local"
                                placeholder="Başlangıç tarihini giriniz"
                                onChange={this.handleChange("eventEnds")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="createTable">
                        <div className="createCell">
                          <p>Açıklama</p>
                          <Form.Control
                            name="about"
                            as="textarea"
                            cols="30"
                            rows="5"
                            placeholder="Açıklama"
                            onChange={this.handleInput("about")}
                          />
                        </div>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="createTable">
                        <div className="createCell">
                          <div
                            className="inputBox"
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                            }}
                          >
                            <input
                              type="checkbox"
                              style={{
                                width: "14px",
                                height: "14px",
                                marginRight: "10px",
                              }}
                              onChange={this.handleCheck("isPaid")}
                            />
                            <label>Ücretli</label>
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <div className="createTable">
                    <div className="buttonCellLeft">
                      <button
                        className="cancelModal"
                        onClick={() => this.handleModal()}
                      >
                        Vazgeç
                      </button>
                    </div>
                    <div className="buttonCellRight">
                      <button
                        className="createModal"
                        onClick={this.clickSubmit}
                      >
                        Oluştur
                      </button>
                    </div>
                  </div>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <EventsTable
            time="11"
            name="Deneme"
            date="Thu 14, June - 08.00 pm - Aydın"
          />
          <div className="leftALL">
            <button className="btn btn-primary">Hepsini gör</button>
          </div>
        </div>
        <EventSide />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: async (content) => dispatch(createEvent(content)),
  };
};

export default connect(null, mapDispatchToProps)(EventsPage);
