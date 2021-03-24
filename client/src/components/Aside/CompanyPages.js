import React, { Component } from "react";
import { connect } from "react-redux";
import { getOwnPage } from "../../redux/actions/pageActions";
import { url } from "../../url";

class CompanyPages extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    await this.props.getOwnPage();
    const req = this.props.page.page;
    const reqArray = Object.values(req);
    this.setState({ data: reqArray });
  }

  render() {
    let data = this.state.data;
    return (
      <div className="mth-company-card">
        {data.map((item) => {
          return (
            <div>
              <img
                alt={this.state.name}
                src={`${url}/uploads/${item.profile_image}`}
                className="img-fluid rounded-circle"
              />
              <a href={`/page/${item._id}`} className="mth-company-title">
                {item.profileName}
              </a>
              <br />
              <span className="font-weight-light">{item.profileType}</span>
              <div className="clearfix" />
              <div className="istatistikler">
                <div className="takipciler">
                  <p className="num">2</p>
                  <p className="text">Takipçi</p>
                </div>
                <div className="takip">
                  <p className="num">3</p>
                  <p className="text">Takip</p>
                </div>
              </div>
            </div>
          );
        })}
        <button className="btn btn-primary" style={{ width: "100%" }}>
          Sayfa Oluştur
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOwnPage: async () => dispatch(getOwnPage()),
  };
};

const mapStateToProps = (state) => {
  return { page: state.pageReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPages);
