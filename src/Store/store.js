import { createStore, combineReducers } from "redux";
import { titleReducer } from "./Reducer/reducer";
const Reducer= combineReducers({
TitleReducer:titleReducer,
})
const Store =createStore(Reducer);
export default Store