import { combineReducers } from "redux";
import counterReducer from './counter'

// Reducer: How the state changes based on the action

const allReducers = combineReducers({
    counter: counterReducer
})

export default allReducers;