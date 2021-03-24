import {
  CREATE_CONVERSATION,
  GET_ALL_CONVERSATION,
  GET_SINGLE_CONVERSATION,
  CREATE_COMMENT_CONVERSATION,
} from "../actions/actionTypes";

const defaultState = {
  conversation: {},
};

const conversationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        conversation: { ...action.conversation },
      };
    case GET_ALL_CONVERSATION:
      return {
        conversation: { ...action.conversation },
      };
    case GET_SINGLE_CONVERSATION:
      return {
        conversation: { ...action.conversation },
      };
    case CREATE_COMMENT_CONVERSATION:
      return {
        conversation: { ...action.conversation },
      };
    default:
      return state;
  }
};

export default conversationReducer;
