import { ejemplo, GET_TRAINERS } from "./types";
import axios from 'axios';
import { URLSERVER } from '../../../../configURL';
import { MENU_TRAINERS } from '../actions/types'

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



//cambiar menus en el panel del entrenador
export const cambiarMenuTrainer = (data) => {
    return function (dispatch) {
        return dispatch(
            {
                type: MENU_TRAINERS,
                payload: [data]
            }
        )
    }
}
