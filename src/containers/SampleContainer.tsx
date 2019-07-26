import * as React from "react";
import { connect } from "react-redux";
import UserState from "../redux/User/types";
import { userLogin, userSignup } from "../redux/User/actions";

export interface SampleContainerProps {
  prop1: string;
}

const SampleContainer: React.FC<SampleContainerProps> = () => {
  return <>Container here</>;
};

//Connecting component to redux
const mapStateToProps = (state: UserState) => {
  return {
    token: state.token,
  };
};
const mapDispatchToProps = { userSignup, userLogin };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleContainer);
