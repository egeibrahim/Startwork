import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllConversation } from "../../redux/actions/conversationActions";
import { url } from "../../url";
import { Link } from "react-router-dom";

class ConversationTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: [],
    };
  }
  async componentDidMount() {
    await this.props.getAllConversation();
    let req = this.props.conversation.conversation;
    req = Object.values(req);
    this.setState({ conversation: req });
  }
  render() {
    return (
      <div>
        {this.state.conversation.map((event) => (
          <div className="w-75 mb-3" key={event._id}>
            <Link
              to={`/discussion/${event._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="uik-avatar__wrapper uik-social-post-header__avatar">
                <div className="uik-avatar__avatarWrapper">
                  <img
                    alt=""
                    className="uik-avatar__avatar"
                    src={`${url}/uploads/${event.userId.profile_image}`}
                  />
                </div>
                <div className="uik-avatar__info">
                  <h4>{event.title}</h4>
                  <small>{event.userId.name}</small>
                </div>
                <p>
                  <i className="uikon">message_2</i> {event.comments.length}{" "}
                  yorum
                </p>
              </div>
              <div className="uik-divider__horizontal" />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { conversation: state.conversationReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllConversation: async () => await dispatch(getAllConversation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationTable);
