import { Dispatch } from "redux";

//STATE

export default interface AlertState {
  alerts: {
    [id: string]: {
      message: string;
      error: boolean;
    };
  };
}

//ACTIONS
export const ALERT_SUCCESS = "ALERT_SUCCESS";
export const ALERT_ERROR = "ALERT_ERROR";
export const ALERT_CLEAR = "ALERT_CLEAR";

//Used by thunk
interface AlertSuccessAction {
  type: typeof ALERT_SUCCESS;
  id: string;
  message: string;
}

interface AlertErrorAction {
  type: typeof ALERT_ERROR;
  id: string;
  message: string;
}

interface AlertClearAction {
  type: typeof ALERT_CLEAR;
  id: string;
}

export type AlertActionTypes =
  | AlertSuccessAction
  | AlertErrorAction
  | AlertClearAction;
