import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_USER,
  UPDATE_USER,
  USER_REGISTER,
  USER_REGISTER_ERROR,
  GET_USER_ID,
  FOLLOW_USER,
  UNFOLLOW_USER,
  CHANGE_IMAGE,
} from "../actions/actionTypes";

const defaultState = {
  loggedIn: false,
  user: {},
  error: "",
  redirectToRoute: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: { ...action.user },
        error: null,
        redirectToRoute: true,
      };
    case GET_USER_ID:
      return {
        user: { ...action.user },
      };
    case USER_REGISTER:
      return {
        loggedIn: false,
        user: { ...action.user },
        error: null,
        redirectToRoute: true,
      };
    case USER_REGISTER_ERROR: {
      return {
        loggedIn: false,
        user: {},
        error: action.error,
        redirectToRoute: false,
      };
    }
    case CHANGE_IMAGE: {
      return {
        loggedIn: true,
        user: { ...action.user },
        error: null,
        redirectToRoute: true,
      };
    }
    case LOGOUT:
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
        error: null,
        redirectToRoute: true,
      };
    case LOGIN_ERROR:
      return {
        loggedIn: false,
        user: {},
        error: action.error,
        redirectToRoute: false,
      };
    case GET_USER:
      return {
        loggedIn: true,
        user: { ...action.user },
        error: null,
        redirectToRoute: false,
      };
    case UPDATE_USER:
      return {
        loggedIn: true,
        user: { ...action.user },
        redirectToRoute: false,
      };
    case FOLLOW_USER:
      return {
        loggedIn: true,
        user: { ...action.user },
        redirectToRoute: false,
      };
    case UNFOLLOW_USER:
      return {
        loggedIn: true,
        user: { ...action.user },
        redirectToRoute: false,
      };
    default:
      return state;
  }
};

export default userReducer;
