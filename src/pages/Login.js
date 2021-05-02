import React, { useContext } from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "../actions/";
import Breadcrumb from "./Breadcrumb";
import { AuthContext, SwitchContext } from "../component/AuthProvider";

function Login(props) {
  const isAuth = useContext(AuthContext);
  const login = useContext(SwitchContext);
  console.log(login);
  return (
    <>
      <Breadcrumb />
      <h1>{isAuth ? "已登入" : "未登入"}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          login(true);
          console.log(isAuth);
        }}
      >
        log in
      </button>
      {/* <h1>{props.isAuth ? "已登入" : "未登入"}</h1>
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
      </button> */}
    </>
  );
}
const mapStateToProps = (store) => {
  return { isAuth: store.isAuth };
};

export default connect(
  mapStateToProps, // mapDispatchToProps,
  //actionCreators
  { logIn, logOut }
)(Login);
// export default Login;
