import { UserActionTypes, LoginDetails, SignupDetails } from "./types";

export function userSignup(signup: SignupDetails): UserActionTypes {
  return {
    type: "USER_SIGNUP",
    email: signup.email,
    password: signup.password,
    firstName: signup.firstName,
    lastName: signup.lastName,
  };
}

export function userLogin(login: LoginDetails): UserActionTypes {
  return {
    type: "USER_LOGIN",
    email: login.email,
    password: login.password,
  };
}
