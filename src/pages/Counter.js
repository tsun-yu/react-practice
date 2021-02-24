import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log(props);
  return (
    <>
      <h1>{props.total}</h1>
      <button onClick={() => props.dispatch({ type: "ADD_VALUE", value: 1 })}>
        +1
      </button>
      <button onClick={() => props.dispatch({ type: "ADD_VALUE", value: 1 })}>
        -1
      </button>
    </>
  );
}
const mapStateToProps = (store) => {
  return { total: store.counter };
};
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
