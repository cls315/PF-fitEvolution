import { ejemplo, GET_TRAINERS } from "../actions/types"

const initialState = {
   allTrainers: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TRAINERS:
            return {...state, allTrainers: payload}
        default:
            return { ...state }
    }
}

export default rootReducer;