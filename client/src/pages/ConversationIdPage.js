import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import {
  getSingleConversation,
  createCommentConversation,
} from "../redux/actions/conversationActions";
import { url } from "../url";
import { Col, Form, Row } from "react-bootstrap";

class ConversationIdPage extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.id;
    this.state = {
      data: {},
      comments: [],
      comment: "",
    };
  }

  async componentDidMount() {
    await this.props.getSingleConversation(this.routeParam);
    const req = this.props.conversation.conversation;
    this.setState({ data: req, comments: req.comments });
  }

  clickSubmit = async () => {
    await this.props.createCommentConversation(
      this.routeParam,
      this.state.comment
    );
  };

  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container mt-2 bg-white">
        <div className="w-100 mt-2">
          <h2>{this.state.data.title}</h2>
          {this.state.comments.map((comment) => (
            <div key={comment._id}>
              <div className="uik-avatar__wrapper uik-social-post-header__avatar">
                <div className="uik-avatar__avatarWrapper">
                  <img
                    alt=""
                    className="uik-avatar__avatar"
                    src={`${url}/uploads/${comment.userId.profile_image}`}
                  />
                </div>
                <div className="uik-avatar__info">
                  <h4>{comment.comment}</h4>
                  <small>{comment.userId.name}</small>
                </div>
              </div>
              <div className="uik-divider__horizontal" />
            </div>
          ))}
          <Form className="mt-3 pb-3" style={{ maxWidth: "100%" }}>
            <Row>
              <Col xs lg={10}>
                <input
                  type="text"
                  className="postInput w-100"
                  placeholder="Yorum yazınız"
                  onChange={(event) =>
                    this.setState({ comment: event.target.value })
                  }
                />
              </Col>
              <Col>
                <input
                  type="submit"
                  className="btn btn-primary float-right"
                  onClick={this.clickSubmit}
                />
              </Col>
            </Row>
          </Form>

          <div className="uik-divider__horizontal" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { conversation: state.conversationReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleConversation: async (id) =>
      await dispatch(getSingleConversation(id)),
    createCommentConversation: async (id, comment) =>
      await dispatch(createCommentConversation(id, comment)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ConversationIdPage));
