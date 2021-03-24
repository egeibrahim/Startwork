import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createConversation } from "../../redux/actions/conversationActions";
import { connect } from "react-redux";

class ConversationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      comment: "",
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  clickSubmit = async (event) => {
    await this.props.createConversation(this.state.comment);
  };
  render() {
    return (
      <div>
        <Button
          variant="success"
          className="float-right mr-2"
          onClick={() => {
            this.handleModal();
          }}
        >
          Konu oluştur
        </Button>
        <Modal
          show={this.state.show}
          dialogClassName="mainModal"
          onHide={() => this.handleModal()}
          aria-labelledby="modal-sizes-title-lg"
        >
          <Modal.Body>
            <h3>Konu başlığı Giriniz</h3>
            <Form>
              <input
                type="text"
                className="postInput w-75"
                placeholder="Konu giriniz"
                onChange={(event) =>
                  this.setState({ comment: event.target.value })
                }
              />
              <input
                type="submit"
                className="btn btn-primary float-right"
                onClick={this.clickSubmit}
              />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createConversation: async (content) =>
      dispatch(createConversation(content)),
  };
};

export default connect(null, mapDispatchToProps)(ConversationModal);
