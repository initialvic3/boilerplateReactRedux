import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import sampleReducer from "./User/reducers";
import alertReducer from "./Alert/reducers";

const rootReducer = combineReducers({
  sample: sampleReducer,
  alert: alertReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
