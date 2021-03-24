import axios from "axios";
import {
  GET_MENTOR_SETTINGS,
  CREATE_MENTOR_SETTINGS,
  GET_INVESTOR_SETTINGS,
  CREATE_INVESTOR_SETTINGS,
} from "./actionTypes";
import { url } from "../../url";

export const getMentorSettings = () => async (dispatch) => {
  try {
    const user = await axios.get(`${url}/api/mentor/profile-mentor-settings`);
    const userData = user.data.data[0];
    dispatch({ type: GET_MENTOR_SETTINGS, mentor: { ...userData } });
  } catch (e) {}
};

export const getInvestorSettings = () => async (dispatch) => {
  try {
    const user = await axios.get(
      `${url}/api/investment/profile-investment-settings`
    );
    const userData = user.data.data[0];
    dispatch({ type: GET_INVESTOR_SETTINGS, investor: { ...userData } });
  } catch (e) {
    //Hata için düzenlemeler gelecek
  }
};

export const updateMentorSettings = (userInfo) => async (dispatch) => {
  try {
    const user = await axios.put(`${url}/api/mentor/edit`, userInfo);
    const userData = user.data;
    dispatch({ type: CREATE_MENTOR_SETTINGS, mentor: userData.data });
  } catch (e) {
    //Hata için düzenlemeler gelecek
  }
};

export const updateInvestorSettings = (userInfo) => async (dispatch) => {
  try {
    const user = await axios.put(`${url}/api/investment/edit`, userInfo);
    const userData = user.data;
    dispatch({ type: CREATE_INVESTOR_SETTINGS, investor: userData.data });
  } catch (e) {
    //Hata için düzenlemeler gelecek
  }
};
