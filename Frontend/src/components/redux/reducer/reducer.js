import { ejemplo ,RUTINAS,SEARCH, GET_TRAINERS,MENU_TRAINERS, FILTER_FOCUS, FILTER_SCORE, QUITAR_FILTROS, SOBRE_SCORE, SOBRE_FOCUS,CLEAR_CART, AGREGAR_CARRITO, GET_ROUTINES} from "../actions/types"

const initialState = {
    allTrainers: [],
    menusTrainer:[],
    filterTrainers: [],
    status: "",
    carrito: [],
    routines: [],
    rutinas:[],
    rutinas2:[]
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
                filterTrainers: payload,
                status: "focus"
            }
        case FILTER_SCORE:
            return {
                ...state, filterTrainers: payload,
                status: "score"
            }
        case SOBRE_SCORE:
            const newFilter = state.filterTrainers.filter((trainer) => trainer.focusTr === payload)
            return {
                ...state, filterTrainers: newFilter,
                status: "focus"
            }
        case SOBRE_FOCUS:
            const byStars = state.filterTrainers.filter((trainer) => trainer.score === payload)
            return{
                ...state,
                filterTrainers: byStars,
                status: "score"
            }
        case QUITAR_FILTROS:
            return {
                ...state, filterTrainers: []
            }
        case AGREGAR_CARRITO:
            return{
                ...state, carrito: [...state.carrito, payload]
            }
        case CLEAR_CART:
            return{
                ...state, carrito: []
            }
        case GET_ROUTINES:
            return {
                ...state, routines: payload
            }

            case RUTINAS:

                console.log("reducer!")
                return {
                ...state,
                rutinas: payload,
                rutinas2: payload

                }

            case SEARCH:
                const busqueda = state.rutinas2.filter(i=>i.enfoque.includes(payload))
                console.log(state.rutinas2, "search")
                return{
                ...state,
                rutinas:busqueda

                }

        default:
            return { ...state }
    }
}

export default rootReducer;