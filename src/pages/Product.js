import React from "react";
// import { withRouter } from "react-router-dom";
import { Redirect, useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { connect } from "react-redux";

function Product(props) {
  let { id } = useParams();
  console.log(props);

  if (props.isAuth === false) return <Redirect to="/register" />;
  return (
    <>
      <h1>Product</h1>
      <Breadcrumb />
      {/* <h3>{props.match.params.id}</h3> */}
      <h3>{id}</h3>
    </>
  );
}

const mapStateToProps = (store) => {
  return { isAuth: store.isAuth };
};

// export default withRouter(Product);
export default connect(mapStateToProps, {})(Product);
