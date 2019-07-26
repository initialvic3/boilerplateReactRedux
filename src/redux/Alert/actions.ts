import { Dispatch } from "redux";
import { AlertActionTypes } from "./types";
import { string } from "prop-types";
import uuid from "uuid/v4";

const TIMEOUT = 5000;

//ACTIONS
const alertSuccessAction = (id: string, message: string): AlertActionTypes => ({
  type: "ALERT_SUCCESS",
  message,
  id,
});
const alertErrorAction = (id: string, message: string): AlertActionTypes => ({
  type: "ALERT_ERROR",
  message,
  id,
});
const alertClearAction = (id: string): AlertActionTypes => ({
  type: "ALERT_CLEAR",

  id,
});

//THUNK ACTIONS
export const alertSuccess = (message: string) => async (dispatch: Dispatch) => {
  const id = uuid();
  //Create the alert
  dispatch(alertSuccessAction(id, message));
  setTimeout(() => {
    dispatch(alertClearAction(id));
  }, TIMEOUT);
};
export const alertError = (message: string) => (dispatch: Dispatch) => {
  const id = uuid();
  //Create the alert
  dispatch(alertErrorAction(id, message));
  setTimeout(() => {
    dispatch(alertClearAction(id));
  }, TIMEOUT);
};
