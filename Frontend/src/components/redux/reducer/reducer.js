import { ejemplo } from "../actions/types"
import { menuTrainer } from "../actions/types"

const initialState = {
   menusTrainer:[],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case menuTrainer:
            return {
                ...state,
                menuTrainer: payload,
            }
        default:
            return { ...state }
    }
}

export default rootReducer;