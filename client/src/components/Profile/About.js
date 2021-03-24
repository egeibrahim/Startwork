import React, { Component } from "react";
import TagButton from "../buttons/TagButton";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      abilities: [],
      lookingFor: [],
    };
  }

  componentDidMount() {
    let data = localStorage.getItem("userdata");
    const userdata = JSON.parse(data);
    this.setState({
      data: { ...userdata },
      abilities: [...userdata.abilities],
      lookingFor: [...userdata.lookingFor],
    });
  }

  render() {
    let data = this.state.data;
    return (
      <div className="page-wrapper">
        <div className="page-content">
          <h3 className="tab-title">Hakkında</h3>
          <ul className="contact-info list-inline">
            <li className="list-inline-item">
              <i className="fa fa-comment" /> {data.email}
            </li>

            <li className="list-inline-item">
              <i className="fa fa-map-marker-alt" /> {data.city}
            </li>

            <li className="list-inline-item">
              <i className="fa fa-mobile" /> {data.website}
            </li>
          </ul>
          <div className="clearfix" />

          <p>Hakkında</p>
          <p>{data.bio}</p>
          <p className="clr-3 text-uppercase">Yetenekler</p>
          <p className="buttons">
            {this.state.abilities.map((ability, index) => (
              <TagButton key={index} path={ability} />
            ))}
          </p>
          <p className="clr-3 text-uppercase">Arıyor</p>
          <p className="buttons">
            {this.state.lookingFor.map((ability, index) => (
              <TagButton key={index} path={ability} />
            ))}
          </p>
        </div>
      </div>
    );
  }
}

export default About;
