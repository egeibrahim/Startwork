import React, { Component } from "react";
import { getPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { url } from "../../url";
import PostModal from "./PostModal";
import CommentButton from "../buttons/CommentButton";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comment: "",
    };
  }

  async componentDidMount() {
    await this.props.getPost();
    let req = this.props.post.post;
    req = Object.values(req);
    await this.setState({ posts: [...req] });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div
            key={post._id}
            className="uik-widget__wrapper uik-social-post-post__wrapper uik-widget__margin"
          >
            <div className="uik-social-post-header__wrapper">
              <div className="uik-avatar__wrapper uik-social-post-header__avatar">
                <div className="uik-avatar__avatarWrapper">
                  <img
                    alt=""
                    className="uik-avatar__avatar"
                    src={`${url}/uploads/${post.userId.profile_image}`}
                  />
                </div>
                <div className="uik-avatar__info">
                  <div className="uik-avatar__name">
                    <span className="uik-social-post-header__nameText">
                      <Link to={`/profile/${post.userId._id}`}>
                        <strong>{post.userId.name}</strong>
                      </Link>
                    </span>
                  </div>
                  <div className="uik-avatar__textBottom">
                    {moment(post.createdAt).format("DD-MM-YYYY")}
                  </div>
                </div>
              </div>
            </div>
            <p>{post.content}</p>
            <div className="uik-divider__horizontal" />
            <PostModal
              commentcount={post.comments.length}
              postcontent={post.content}
              comments={post.comments}
              profileImage={this.props.profileImage}
              ownerProfileImage={post.userId.profile_image}
              postId={post._id}
            />
            <div className="uik-divider__horizontal" />
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
              <input
                type="text "
                className="postInput"
                placeholder="Bir yorum yaz..."
                onChange={(event) =>
                  this.setState({ comment: event.target.value })
                }
              />
              <CommentButton postId={post._id} comment={this.state.comment} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: async () => await dispatch(getPost()),
  };
};

const mapStateToProps = (state) => {
  return { post: state.postReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
