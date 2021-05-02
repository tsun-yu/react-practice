import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AuthContext } from "../component/AuthProvider";

function Home(props) {
  const isAuth = useContext(AuthContext);
  return (
    <>
      <h1>HOME</h1>
      <h2>登入狀態：{isAuth ? "已登入" : "未登入"}</h2>
      {/* <h2>登入狀態：{props.isAuth ? "已登入" : "未登入"}</h2> */}
      <Link to="/counter">Counter</Link>
      <br />
      <Link to="/calender">Calender</Link>
      <br />
      <Link to="/product">Product</Link>
      <br />
      <Link to="/login">Log In</Link>
    </>
  );
}
const mapStateToProps = (store) => {
  return { isAuth: store.isAuth };
};
export default withRouter(connect(mapStateToProps, {})(Home));
