import { ejemplo , GET_TRAINERS,menuTrainer} from "../actions/types"

const initialState = {
    allTrainers: [],
    menusTrainer:[],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TRAINERS:
            return {...state, allTrainers: payload}
        case menuTrainer:
            return {
                ...state,
                menuTrainer: payload
            }
        default:
            return { ...state }
    }
}

export default rootReducer;