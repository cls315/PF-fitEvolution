import { ejemplo , GET_TRAINERS,MENU_TRAINERS, FILTER_FOCUS, FILTER_SCORE, QUITAR_FILTROS} from "../actions/types"

const initialState = {
    allTrainers: [],
    menusTrainer:[],
    filterTrainers: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TRAINERS:
            return {...state, allTrainers: payload}
        case MENU_TRAINERS:
            return {
                ...state,
                menuTrainer: payload
            }
        case FILTER_FOCUS:
            return {
                ...state,
                filterTrainers: payload
            }
        case FILTER_SCORE:
            return {
                ...state, filterTrainers: payload
            }
        case QUITAR_FILTROS:
            return {
                ...state, filterTrainers: []
            }
        default:
            return { ...state }
    }
}

export default rootReducer;