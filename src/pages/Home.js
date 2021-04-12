import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
  console.log(props);
  return (
    <>
      <h1>HOME</h1>
      <h2>登入狀態：{props.isAuth ? "已登入" : "未登入"}</h2>
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
