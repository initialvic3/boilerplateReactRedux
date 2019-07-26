import * as React from "react";
import { connect } from "react-redux";
import UserState from "../redux/User/types";
import { userLogin, userSignup } from "../redux/User/actions";
import { useState } from "react";

export interface SampleUserContainerProps {
  prop1: string;
  token: UserState["token"];
  email: UserState["email"];
  password: UserState["password"];
  userSignup: typeof userSignup;
  userLogin: typeof userLogin;
}

const SampleUserContainer: React.FC<SampleUserContainerProps> = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <hr />
      <header>
        <p>Login here</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            alert(`Logging in with ${email},${password}`);
            props.userLogin({ email, password });
          }}
        >
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" />
        </form>
      </header>
      <main>
        <hr />
        <p>Secret information here</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
      </main>
      <hr />
      <p>Signup demo</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          alert(
            `Signing up with ${firstName},${lastName},${email},${password}`
          );
        }}
      >
        <label>Firstname</label>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <br />
        <label>Lastname</label>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      <hr />
      <p>user signup details are here</p>
      <p>Firstname:{firstName}</p>
      <p>Lastname:{lastName}</p>
      <p>Email:{email}</p>
      <p>Password:{password}</p>
      <p>Token:{JSON.stringify(props.token)}</p>
    </>
  );
};

//Connecting component to redux
const mapStateToProps = (state: UserState) => {
  return {
    token: state.token,
    email: state.email,
    password: state.password,
  };
};
const mapDispatchToProps = { userSignup, userLogin };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleUserContainer);
