import {
  CREATE_EVENT,
  GET_ALL_EVENTS,
  GET_ID_EVENT,
} from "../actions/actionTypes";

const defaultState = {
  event: {},
};

const eventReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        event: { ...action.event },
      };
    case GET_ALL_EVENTS:
      return {
        event: { ...action.event },
      };
    case GET_ID_EVENT:
      return {
        event: { ...action.event },
      };
    default:
      return state;
  }
};

export default eventReducer;
