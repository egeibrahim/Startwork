import React, { Component } from "react";
import { url } from "../../url";
import TagButton from "../buttons/TagButton";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      abilities: [],
    };
  }
  componentDidMount() {
    let data = localStorage.getItem("userdata");
    const userdata = JSON.parse(data);
    this.setState({
      data: { ...userdata },
      abilities: [...userdata.abilities],
    });
  }
  render() {
    return (
      <div>
        <section className="pb-5 bg-white">
          <div className="container-fluid">
            <div className="row pt-5">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-5">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div>
                      <img
                        style={{ width: "15rem", height: "15rem" }}
                        className="img-fluid rounded-circle"
                        src={`${url}/uploads/${this.state.data.profile_image}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h5 className="fs22 mb-0">{this.state.data.name}</h5>
                    <span className="fs18">@{this.state.data.username}</span>
                    <h5 className="font-weight-light mt-3">
                      {this.state.data.department}
                    </h5>
                    <h5 className="font-weight-light fs18 font-italic mt-3">
                      {(this.state.data.city === "undefined"
                        ? ""
                        : this.state.data.city) +
                        "," +
                        (this.state.data.country === "undefined"
                          ? ""
                          : this.state.data.country)}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6  col-xl-6 text-right mt-3 mt-sm-0">
                <div className="col-sm-12">
                  <a
                    type="button"
                    href="/profileSettings"
                    className="btn btn-primary ml-5"
                    style={{ marginRight: "10px" }}
                  >
                    Ayarlar
                  </a>
                  <a
                    type="button"
                    href="/createPage"
                    className="btn btn-primary"
                  >
                    Sayfa oluştur
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "370px" }}>
              <p>Tags</p>
              <div>
                {this.state.abilities.map((ability, index) => (
                  <TagButton key={index} path={ability} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
