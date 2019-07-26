//STATE
export default interface UserState {
  token: {
    accessToken: string;
    refreshToken: string;
    idToken: string;
  };
  email: string;
  password: string;
}

//ACTIONS
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_LOGIN = "USER_LOGIN";

interface UserSignupAction {
  type: typeof USER_SIGNUP;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface UserLoginAction {
  type: typeof USER_LOGIN;
  email: string;
  password: string;
}

export type UserActionTypes = UserSignupAction | UserLoginAction;

//INPUT TYPES
export type LoginDetails = { email: string; password: string };
export type SignupDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
