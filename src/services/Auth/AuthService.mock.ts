import AuthService from "./AuthService";
import PublicInterfaceOf from "../../utils/@types/PublicInterfaceOf";

//Create the mock class here

type signupDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export default class AuthServiceMock
  implements PublicInterfaceOf<typeof AuthService> {
  constructor() {}
  async signup(details: signupDetails) {
    console.log("mock signup called");
  }
}
