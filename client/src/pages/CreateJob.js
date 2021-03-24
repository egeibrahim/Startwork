import React, { Component } from "react";
import image from "../assets/images/startup-header-bg.jpg";
import startUpLogo from "../assets/images/startup-logo.png";
import { Button, Form, Modal } from "react-bootstrap";
import { createJOB } from "../redux/actions/jobActions";
import { connect } from "react-redux";
import JobTable from "../components/jobComponents/JobTable";
import { Redirect } from "react-router-dom";

class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jobTitle: "",
      workingType: "",
      level: "",
      jobDescription: "",
      address: "",
      references: "",
      email: "",
      jobSalary: "",
      profile_image: "",
      url: "",
    };
  }
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.createJOB(this.state);
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
                İlan Oluştur
              </button>
              <Modal
                show={this.state.show}
                onHide={() => this.handleModal()}
                dialogClassName="mainModal"
                aria-labelledby="modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>İş Başvurusu Formu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>İş Ünvanı</Form.Label>
                      <Form.Control
                        name="jobTitle"
                        type="text"
                        placeholder="Sosyal Media Intern"
                        onChange={this.handleChange("jobTitle")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Çalışma Şekli</Form.Label>
                      <Form.Control
                        name="workingType"
                        type="text"
                        placeholder="Çalışma Şeklini giriniz"
                        onChange={this.handleChange("workingType")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Seviye</Form.Label>
                      <Form.Control
                        name="level"
                        type="text"
                        placeholder="Çalışma Seviyesini giriniz"
                        onChange={this.handleChange("level")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>İş Açıklaması</Form.Label>
                      <Form.Control
                        name="jobDescription"
                        type="textArea"
                        placeholder="Çalışma şekli..."
                        onChange={this.handleChange("jobDescription")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Adres</Form.Label>
                      <Form.Control
                        name="address"
                        type="text"
                        placeholder="address..."
                        onChange={this.handleChange("address")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Referanslar</Form.Label>
                      <Form.Control
                        name="references"
                        type="text"
                        placeholder="Kethu"
                        onChange={this.handleChange("references")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>EPOSTA ADRESINE YÖNLENDIR</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="eposta"
                        onChange={this.handleChange("email")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Çalışma Şekli</Form.Label>
                      <Form.Control
                        name="url"
                        type="text"
                        placeholder="Başvuru adresini giriniz"
                        onChange={this.handleChange("url")}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>ÖDEME MİKTARI</Form.Label>
                      <Form.Control
                        name="jobSalary"
                        type="text"
                        placeholder="1000/ay"
                        onChange={this.handleChange("jobSalary")}
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
        <JobTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createJOB: async (content) => dispatch(createJOB(content)),
  };
};

export default connect(null, mapDispatchToProps)(CreateJob);
