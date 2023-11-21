import { ejemplo } from './types';
import axios from 'axios';
import { URLSERVER } from '../../../../configURL';
import { menuTrainer } from '../actions/types'


//cambiar menus en el panel del entrenador
export const cambiarMenuTrainer = (data) => {
    return function (dispatch) {
        return dispatch(
            {
                type: menuTrainer,
                payload: [data]
            }
        )
    }
}


