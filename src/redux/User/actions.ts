import { UserActionTypes, LoginDetails } from "./types";

export function userSignup(login: LoginDetails): UserActionTypes {
  return {
    type: "USER_SIGNUP",
    email: login.email,
    password: login.password,
  };
}

export function userLogin(login: LoginDetails): UserActionTypes {
  return {
    type: "USER_LOGIN",
    email: login.email,
    password: login.password,
  };
}
