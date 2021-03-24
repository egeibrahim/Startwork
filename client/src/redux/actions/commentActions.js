import axios from "axios";
import { url } from "../../url";
import { CREATE_COMMENT } from "./actionTypes";

export const createComment = (id, content) => (dispatch) => {
  const comment = axios.post(`${url}/api/comment/create/${id}`, {
    comment: content,
  });
  dispatch({ type: CREATE_COMMENT, comment: comment });
};
