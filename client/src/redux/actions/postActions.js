import axios from "axios";
import { GET_POST, CREATE_POST } from "./actionTypes";
import { url } from "../../url";

export const createPost = (content) => async (dispatch) => {
  const post = axios.post(`${url}/api/post/create`, {
    content: content,
  });
  dispatch({
    type: CREATE_POST,
    post: post,
  });
};

export const getPost = () => async (dispatch) => {
  try {
    const post = await axios.get(`${url}/api/post/`);
    const postData = post.data;
    if (postData.success) {
      dispatch({ type: GET_POST, post: postData.data });
    }
  } catch (e) {}
};
