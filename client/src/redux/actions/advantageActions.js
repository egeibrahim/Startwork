import axios from "axios";
import {
  CREATE_ADVANTAGE,
  GET_ALL_ADVANTAGE,
  GET_ADVANTAGE_ID,
} from "./actionTypes";
import { url } from "../../url";

export const createAdvantage = (content) => async (dispatch) => {
  try {
    if (content.profile_image !== "") {
      const formData = new FormData();
      formData.append("profile_image", content.profile_image);
      formData.set("projectName", content.projectName);
      formData.set("about", content.about);
      formData.set("url", content.url);
      const advantage = await axios.post(
        `${url}/api/advantage/create/`,
        formData
      );
      dispatch({ type: CREATE_ADVANTAGE, advantage: advantage.data.data });
    } else {
      const advantage = await axios.post(
        `${url}/api/advantage/create/`,
        content
      );
      dispatch({ type: CREATE_ADVANTAGE, advantage: advantage.data.data });
    }
  } catch (e) {}
};

export const getAllAdvantage = () => async (dispatch) => {
  const advantage = await axios.get(`${url}/api/advantage/`);
  dispatch({ type: GET_ALL_ADVANTAGE, advantage: advantage.data.data });
};

export const getAdvantageId = (id) => async (dispatch) => {
  const advantage = await axios.get(`${url}/api/advantage/${id}`);

  dispatch({ type: GET_ADVANTAGE_ID, advantage: advantage.data.data });
};
