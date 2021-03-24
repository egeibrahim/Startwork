import React, { Component } from "react";
import image from "../assets/images/startup-header-bg-1.jpg";
import startUpLogo from "../assets/images/startup-logo.png";
import { Button, Form, Modal } from "react-bootstrap";
import AdvantageTable from "../components/advantageComponents/AdvantageTable";
import { createAdvantage } from "../redux/actions/advantageActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AdvantagesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      projectName: "",
      about: "",
      url: "",
      profile_image: "",
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  handleUrl = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = async (event) => {
    await this.props.createAdvantage({
      projectName: this.state.projectName,
      about: this.state.about,
      url: this.state.url,
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
        <div className="startup-page-titile">
          <h1>Startup Başvuruları!</h1>
        </div>
        <div
          className="startup-header"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="startup-header-row1">
            <div className="startup-header-logo">
              <img alt="Background" src={startUpLogo} />
              <div className="startups-logo-text">Startups</div>
            </div>
          </div>
          <div className="startup-header-row2">
            <div className="startup-header-details">
              <h2>
                Bir startup olmak için, ekosistemdeki başvuruları{" "}
                <br className="startup-header-details-br" />
                değerlendirin.
              </h2>
              <button
                className="uik-btn__base"
                onClick={() => {
                  this.handleModal();
                }}
              >
                Başvuru İlanı Oluştur
              </button>
              <Modal
                show={this.state.show}
                dialogClassName="mainModal"
                onHide={() => this.handleModal()}
                aria-labelledby="modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal Header</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Proje Ismi</Form.Label>
                      <Form.Control
                        name="projectName"
                        type="text"
                        placeholder="Şirkenizin ismini giriniz"
                        onChange={this.handleUrl("projectName")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Hakkında</Form.Label>
                      <Form.Control
                        name="about"
                        type="text"
                        placeholder="Hakkında"
                        onChange={this.handleUrl("about")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>URL</Form.Label>
                      <Form.Control
                        name="url"
                        type="text"
                        placeholder="Başvuru URL'ini giriniz"
                        onChange={this.handleUrl("url")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <input
                        type="file"
                        name="file"
                        onChange={(image) => {
                          this.setState({
                            profile_image: image.currentTarget.files[0],
                          });
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Form>
                    <input
                      type="submit"
                      value="Kaydet"
                      className="btn btn-primary"
                      onClick={this.clickSubmit}
                    />
                  </Form>
                  <Button
                    onClick={() => {
                      this.handleModal();
                    }}
                  >
                    Kapat
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>

        <AdvantageTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAdvantage: async (content) => dispatch(createAdvantage(content)),
  };
};

export default connect(null, mapDispatchToProps)(AdvantagesPage);
