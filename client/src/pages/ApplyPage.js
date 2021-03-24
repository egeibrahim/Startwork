import React, { Component } from "react";
import image from "../assets/images/startup-header-bg-1.jpg";
import startUpLogo from "../assets/images/startup-logo.png";
import { Button, Form, Modal } from "react-bootstrap";
import moment from "moment";
import { createApply } from "../redux/actions/applyActions";
import { connect } from "react-redux";
import ApplyTable from "../components/applyComponents/ApplyTable";
import { Redirect } from "react-router-dom";

class ApplyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      projectName: "",
      begins: "",
      ends: "",
      url: "",
      profile_image: "",
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  handleChange = (name) => (event) => {
    const date = moment(event.target.value)
      .utc()
      .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.setState({ [name]: date });
  };
  handleUrl = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };
  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.createApply({
      projectName: this.state.projectName,
      begins: this.state.begins,
      ends: this.state.ends,
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
                      <Form.Label>Şirket ismi</Form.Label>
                      <Form.Control
                        name="projectName"
                        type="text"
                        placeholder="Şirkenizin ismini giriniz"
                        onChange={this.handleUrl("projectName")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Başlangıç Tarihi</Form.Label>
                      <Form.Control
                        name="begins"
                        type="date"
                        placeholder="Başlangıç tarihini giriniz"
                        onChange={this.handleChange("begins")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Bitiş Tarihi</Form.Label>
                      <Form.Control
                        name="ends"
                        type="date"
                        placeholder="Bitiş tarihini giriniz"
                        onChange={this.handleChange("ends")}
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
                  <Button onClick={this.clickSubmit}>Kaydet</Button>
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

        <ApplyTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createApply: async (content) => dispatch(createApply(content)),
  };
};

export default connect(null, mapDispatchToProps)(ApplyPage);
