import {
  CognitoUserPool,
  CognitoUserAttribute,
  ISignUpResult,
  CognitoUser,
} from "amazon-cognito-identity-js";
import poolId from "../../config/AWS_POOL_ID.json";
//Setup your AWS pool here
const userPool = new CognitoUserPool(poolId);

type signupDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

class AuthService {
  private user: CognitoUser | undefined;

  constructor() {}

  private createUserAttribute(attribute: { Name: string; Value: any }) {
    return new CognitoUserAttribute({
      Name: attribute.Name,
      Value: attribute.Value,
    });
  }

  async signup(details: signupDetails) {
    const { email, password, firstName, lastName } = details;
    const attributes = [
      { Name: "firstName", Value: firstName },
      { Name: "lastName", Value: lastName },
    ].map(this.createUserAttribute);

    const callback = (
      err: Error | undefined,
      result: ISignUpResult | undefined
    ) => {
      if (err) throw err;
      if (!result) throw new Error("Signup failed");
      this.user = result.user;

      console.log(result);
    };

    userPool.signUp(email, password, attributes, [], callback);
  }
}
export default new AuthService();
