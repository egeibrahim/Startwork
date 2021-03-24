import axios from "axios";
import { CREATE_APPLY, GET_APPLY } from "./actionTypes";
import { url } from "../../url";

export const createApply = (content) => async (dispatch) => {
  try {
    if (content.profile_image !== "") {
      const formData = new FormData();
      formData.append("profile_image", content.profile_image);
      formData.set("begins", content.begins);
      formData.set("ends", content.ends);
      formData.set("projectName", content.projectName);
      formData.set("url", content.url);
      const apply = await axios.post(`${url}/api/apply/create`, formData);
      dispatch({ type: CREATE_APPLY, apply: apply.data.data });
    } else {
      const apply = await axios.post(`${url}/api/apply/create`, content);
      dispatch({ type: CREATE_APPLY, apply: apply.data.data });
    }
  } catch (e) {}
};

export const getApply = () => async (dispatch) => {
  try {
    const apply = await axios.get(`${url}/api/apply/`);

    dispatch({ type: GET_APPLY, apply: apply.data.data });
  } catch (e) {}
};
