import axios from "axios";
import { setAuthorizationToken } from "../helpers/setAuthorizationToken";
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
} from "./actionTypes";
import { url } from "../../url";

export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    const user = await axios.post(`${url}/api/auth/login`, userInfo);
    const userData = user.data;
    if (userData.success) {
      const { access_token } = userData;
      localStorage.setItem("token", access_token);
      setAuthorizationToken(access_token);
      dispatch({ type: LOGIN_SUCCESS, user: userData.data });
    }
  } catch (e) {
    const error = e.response.data.message;
    dispatch({
      type: LOGIN_ERROR,
      error,
    });
  }
};

export const getUserData = () => async (dispatch) => {
  const user = await axios.get(`${url}/api/auth/profile`);
  const userData = user.data;
  localStorage.setItem("userdata", JSON.stringify(userData.data));
  dispatch({ type: GET_USER, user: userData.data });
};

export const getUserId = (id) => async (dispatch) => {
  try {
    const user = await axios.get(`${url}/api/auth/profile/${id}`);
    const userData = user.data;
    dispatch({ type: GET_USER_ID, user: userData.data });
  } catch (e) {}
};

export const updateUserData = (userInfo) => async (dispatch) => {
  try {
    const user = await axios.put(
      "http://localhost:5000/api/auth/edit",
      userInfo
    );
    const userData = user.data;
    dispatch({ type: UPDATE_USER, user: userData.data });
  } catch (e) {}
};

export const registerUser = (userInfo) => async (dispatch) => {
  try {
    const user = await axios.post(`${url}/api/auth/register`, userInfo);
    const userData = user.data;
    dispatch({ type: USER_REGISTER, user: userData.data });
  } catch (e) {
    const error = e.response.data.message;
    dispatch({
      type: USER_REGISTER_ERROR,
      error,
    });
  }
};

export const followUser = (id) => async (dispatch) => {
  try {
    const user = await axios.put(`${url}/api/auth/add/${id}`);
    const userData = user.data;
    dispatch({ type: FOLLOW_USER, user: userData.data });
  } catch (e) {}
};

export const unfollowUser = (id) => async (dispatch) => {
  try {
    const user = await axios.put(`${url}/api/auth/remove/${id}`);
    const userData = user.data;
    dispatch({ type: UNFOLLOW_USER, user: userData.data });
  } catch (e) {}
};

export const changeProfileImage = (image) => async (dispatch) => {
  const formData = new FormData();
  formData.append("profile_image", image);
  const user = await axios.post(`${url}/api/auth/uploads`, formData);
  const userData = user.data;
  dispatch({ type: CHANGE_IMAGE, user: userData.data });
};

export const logout = () => {
  localStorage.removeItem("token");
  setAuthorizationToken(false);
  return {
    type: LOGOUT,
  };
};
