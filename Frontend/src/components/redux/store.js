import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducer/reducer";

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea nos permite usar la extension de redux del navegador

const store=createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) // esta linea es para hacer peticiones al server
)

export default store;