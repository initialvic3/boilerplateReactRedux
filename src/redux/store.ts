import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import sampleReducer from "./User/reducers";

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
