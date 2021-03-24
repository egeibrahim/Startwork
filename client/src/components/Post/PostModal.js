import React, { Component } from "react";
import { Modal, Row } from "react-bootstrap";
import { url } from "../../url";
import CommentButton from "../buttons/CommentButton";

class PostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      comments: [],
      comment: "",
    };
  }
  componentDidMount() {
    let req = this.props.comments;
    req = Object.values(req);
    this.setState({ comments: [...req] });
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className="uik-social-post-actions__btns">
        <button
          className="uik-btn__base uik-btn__hasIcon uik-btn__transparent"
          type="button"
        >
          <span className="uik-btn__iconWrapper">
            <i className="uikon">love</i>
          </span>
          <span className="uik-btn__content">Beğen</span>
        </button>
        <button
          className="uik-btn__base uik-btn__hasIcon uik-btn__transparent"
          type="button"
        >
          <span className="uik-btn__iconWrapper">
            <i className="uikon">message_2</i>
          </span>
          <span
            className="uik-btn__content"
            onClick={() => {
              this.handleModal();
            }}
          >
            Yorum Yap {this.props.commentcount}
          </span>
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
            <Row>
              <div style={{ margin: "20px 30px" }}>
                {this.props.postcontent}
              </div>
              {this.state.comments.map((comment) => (
                <div
                  style={{ margin: "0 20px", width: "100%" }}
                  key={comment._id}
                >
                  <div className="uik-divider__horizontal" />
                  <div className="uik-avatar__wrapper">
                    <div className="uik-avatar__avatarWrapper">
                      <img
                        alt=""
                        className="uik-avatar__avatar"
                        src={`${url}/uploads/${this.props.ownerProfileImage}`}
                      />
                    </div>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
              <div className="uik-divider__horizontal" />
              <div className="uik-social-post-create__message w-100">
                <div className="uik-avatar__wrapper">
                  <div className="uik-avatar__avatarWrapper">
                    <img
                      alt=""
                      className="uik-avatar__avatar"
                      src={`${url}/uploads/${this.props.profileImage}`}
                    />
                  </div>
                </div>
                <input
                  type="text "
                  className="postInput"
                  placeholder="Bir yorum yaz..."
                  onChange={(event) =>
                    this.setState({ comment: event.target.value })
                  }
                />
                <CommentButton
                  comment={this.state.comment}
                  postId={this.props.postId}
                />
              </div>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default PostModal;
