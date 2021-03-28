import React from "react";
// import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

function Product(props) {
  let { id } = useParams();
  console.log(props);
  return (
    <>
      <h1>Product</h1>
      <Breadcrumb />
      {/* <h3>{props.match.params.id}</h3> */}
      <h3>{id}</h3>
    </>
  );
}

// export default withRouter(Product);
export default Product;
