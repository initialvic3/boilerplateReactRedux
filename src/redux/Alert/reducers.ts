import AlertState, { AlertActionTypes } from "./types";
import produce from "immer";

export default function alertReducer(
  state: AlertState = { alerts: {} },
  action: AlertActionTypes
): AlertState {
  switch (action.type) {
    case "ALERT_SUCCESS":
      return produce(state, draft => {
        draft.alerts[action.id] = { message: action.message, error: false };
      });
    case "ALERT_ERROR":
      return produce(state, draft => {
        draft.alerts[action.id] = { message: action.message, error: true };
      });
    case "ALERT_CLEAR":
      return produce(state, draft => {
        delete draft.alerts[action.id];
      });
    default:
      return state;
  }
}
