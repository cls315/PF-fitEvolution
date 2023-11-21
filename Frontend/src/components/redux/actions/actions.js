import { ejemplo, GET_TRAINERS } from "./types";
import axios from "axios";
import { URLSERVER } from "../../../../configURL";

export const getTrainers = () => {
  return async function (dispatch) {
    try {
      let json = await axios(
        "http://localhost:3001/fitevolution/trainers/allTrainer"
      );
      dispatch({
        type: GET_TRAINERS,
        payload: json.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
