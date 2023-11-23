import { ejemplo, GET_TRAINERS, FILTER_FOCUS, FILTER_SCORE, QUITAR_FILTROS } from "./types";
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

export const filterFocus = (option)=>{
  return async function (dispatch) {
    try {
      const json = await axios(`http://localhost:3001/fitevolution/trainers/filter?focus=${option}`)
      return dispatch(
        {
        type: FILTER_FOCUS,
        payload: json.data
        });
    } catch (error) {
      throw new Error(error.message)
    }  
  }
}

export const filterScore = (option)=>{
  return async function (dispatch) {
    try {
      const json = await axios(`http://localhost:3001/fitevolution/trainers/filter?score=${option}`)
      return dispatch({
        type: FILTER_SCORE,
        payload: json.data
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export const quitarFiltros = ()=>{
 return function (dispatch) {
   return dispatch({
     type: QUITAR_FILTROS,
     payload: []
   })
 }
}