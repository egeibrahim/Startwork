import React, { Component } from "react";
import { createPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import { url } from "../../url";
import { Form } from "react-bootstrap";

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = (event) => {
    const { content } = this.state;
    this.props.createPost(content);
    this.setState({ content: "" });
  };

  render() {
    const { content } = this.state;
    return (
      <div key={content.id}>
        <div className="uik-widget__wrapper uik-widget__margin">
          <div className="uik-social-post-create__message">
            <div className="uik-avatar__wrapper">
              <div className="uik-avatar__avatarWrapper">
                <img
                  alt=""
                  className="uik-avatar__avatar"
                  src={`${url}/uploads/${this.props.profileImage}`}
                />
              </div>
            </div>
            <textarea
              placeholder="Neredesin? Napıyorsun? Numaran ne? Paylaş!"
              rows="2"
              name="content"
              onChange={this.handleChange("content")}
              value={content}
            />
          </div>
          <div
            className="uik-social-post-create__footer"
            style={{ display: "grid" }}
          >
            <Form>
              <button
                className="btn btn-primary float-right m-0"
                type="submit"
                onClick={this.clickSubmit}
              >
                <span className="uik-btn__content">Yayınla</span>
              </button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: async (content) => await dispatch(createPost(content)),
  };
};
export default connect(null, mapDispatchToProps)(CreatePost);
