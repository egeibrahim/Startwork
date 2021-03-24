import axios from "axios";
import { CREATE_JOB, GET_JOB } from "./actionTypes";
import { url } from "../../url";

export const createJOB = (content) => async (dispatch) => {
  try {
    if (content.profile_image !== "") {
      const formData = new FormData();
      formData.append("profile_image", content.profile_image);
      formData.set("jobTitle", content.jobTitle);
      formData.set("workingType", content.workingType);
      formData.set("level", content.level);
      formData.set("jobDescription", content.jobDescription);
      formData.set("address", content.address);
      formData.set("references", content.references);
      formData.set("email", content.email);
      formData.set("jobSalary", content.jobSalary);
      formData.set("url", content.url);
      const job = await axios.post(`${url}/api/job/create`, formData);
      dispatch({ type: CREATE_JOB, job: job.data.data });
    } else {
      const job = await axios.post(`${url}/api/job/create`, content);
      dispatch({ type: CREATE_JOB, job: job.data.data });
    }
  } catch (e) {}
};

export const getJob = () => async (dispatch) => {
  try {
    const job = await axios.get(`${url}/api/job/`);
    dispatch({ type: GET_JOB, job: job.data.data });
  } catch (e) {}
};
