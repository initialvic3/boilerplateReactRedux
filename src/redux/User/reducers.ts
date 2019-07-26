import UserState, { UserActionTypes } from "./types";

const initialState: UserState = {
  token: {
    accessToken: "",
    idToken: "",
    refreshToken: "",
  },
  email: "",
  password: "",
  loading: false,
  action: "",
  error: false,
  errorMessage: "",
};

export default function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state, email: action.email, password: action.password };
    case "USER_LOGIN":
      return { ...state, email: action.email, password: action.password };
    default:
      return state;
  }
}
