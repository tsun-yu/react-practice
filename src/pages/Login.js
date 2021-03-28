import React from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "../actions/";
import Breadcrumb from "./Breadcrumb";

function Login(props) {
  return (
    <>
      <Breadcrumb />
      <h1>{props.log ? "已登入" : "未登入"}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          props.logIn();
        }}
      >
        Log In
      </button>
      <button className="btn btn-primary" onClick={() => props.logOut()}>
        Log Out
      </button>
    </>
  );
}
const mapStateToProps = (store) => {
  return { log: store.login };
};

export default connect(
  mapStateToProps, // mapDispatchToProps,
  //actionCreators
  { logIn, logOut }
)(Login);
// export default Login;
