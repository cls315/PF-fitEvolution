import { ejemplo, GET_TRAINERS, FILTER_FOCUS, FILTER_SCORE, QUITAR_FILTROS, SOBRE_SCORE,GET_ROUTINES, SOBRE_FOCUS, AGREGAR_CARRITO, CLEAR_CART, DELETE_CART, SET_USER } from "./types";
import axios from 'axios';
import { URLSERVER } from '../../../../configURL';
import { MENU_TRAINERS } from '../actions/types'

export const getTrainers = () => {
  return async function (dispatch) {
    try {
      let json = await axios(
        `${URLSERVER}/fitevolution/trainers/allTrainer`
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
      const json = await axios(`${URLSERVER}/fitevolution/trainers/filter?focus=${option}`)
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
      const json = await axios(`${URLSERVER}/fitevolution/trainers/filter?score=${option}`)
      return dispatch({
        type: FILTER_SCORE,
        payload: json.data
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export const sobreScore = (option)=>{
  return function (dispatch){
    return dispatch({
      type: SOBRE_SCORE,
      payload: option
    })
  }
}

export const sobreFocus = (option)=>{
  return function (dispatch){
    return dispatch({
      type: SOBRE_FOCUS,
      payload: option
    })
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

export const agregarCarrito = (option)=>{
  return function(dispatch) {
    return dispatch({
      type: AGREGAR_CARRITO,
      payload: option
    })
  }
}

export const clearCart = ()=>{
  return function (dispatch){
    return dispatch({
      type: CLEAR_CART
    })
  }
}

export const getRoutines = ()=>{
  return async function (dispatch){
    try {
      const json = await axios(`${URLSERVER}/fitevolution/routines/allRoutines`)
      return dispatch({
        type: GET_ROUTINES,
        payload: json.data
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export const deleteCarrito = (option)=>{
  return function(dispatch){
    return dispatch({
      type: DELETE_CART,
      payload: option
    })
  }
}

export const setusuario = (option)=>{
  return function(dispatch){
    return dispatch({
      type: SET_USER,
      payload: option
    })
  }
}