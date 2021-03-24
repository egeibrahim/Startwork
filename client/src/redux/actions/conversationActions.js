import axios from "axios";
import {
  CREATE_CONVERSATION,
  GET_ALL_CONVERSATION,
  GET_SINGLE_CONVERSATION,
  CREATE_COMMENT_CONVERSATION,
} from "./actionTypes";
import { url } from "../../url";

export const createConversation = (content) => async (dispatch) => {
  const conversation = await axios.post(`${url}/api/conversation/create`, {
    title: content,
  });

  dispatch({ type: CREATE_CONVERSATION, conversation: conversation });
};

export const getAllConversation = () => async (dispatch) => {
  const conversation = await axios.get(`${url}/api/conversation/`);
  dispatch({
    type: GET_ALL_CONVERSATION,
    conversation: conversation.data.data,
  });
};

export const getSingleConversation = (id) => async (dispatch) => {
  const conversation = await axios.get(`${url}/api/conversation/${id}`);
  dispatch({
    type: GET_SINGLE_CONVERSATION,
    conversation: conversation.data.data,
  });
};

export const createCommentConversation = (id, comment) => async (dispatch) => {
  const conversation = await axios.post(
    `${url}/api/conversation/comment/${id}`,
    {
      comment: comment,
    }
  );
  dispatch({ type: CREATE_COMMENT_CONVERSATION, conversation: conversation });
};
