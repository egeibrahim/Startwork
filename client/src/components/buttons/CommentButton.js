import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../../redux/actions/commentActions";
import { Form } from "react-bootstrap";

class CommentButton extends Component {
  clickSubmit = async (event) => {
    event.preventDefault();
    await this.props.createComment(this.props.postId, this.props.comment);
  };

  render() {
    return (
      <Form>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.clickSubmit}
        >
          Yorum yap
        </button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: async (id, content) => dispatch(createComment(id, content)),
  };
};

export default connect(null, mapDispatchToProps)(CommentButton);
