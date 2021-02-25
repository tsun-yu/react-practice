import React from "react";
import { connect } from "react-redux";
import { ADD_VALUE, MINUS_VALUE } from "../actions/actionTypes";
import * as actionCreators from "../actions";

function Counter(props) {
  console.log(props);
  console.log(actionCreators);
  return (
    <>
      <h1>{props.total}</h1>
      {/* <button
        onClick={() =>
          props.dispatch({ type: ADD_VALUE, payload: { value: 1 } })
        }
      >
        +1
      </button> */}
      <button onClick={() => props.addValue(1)}>+1</button>
      {/* <button
        onClick={() =>
          props.dispatch({ type: MINUS_VALUE, payload: { value: 1 } })
        }
      >
        -1
      </button> */}
      <button onClick={() => props.minusValue(1)}>-1</button>
    </>
  );
}
const mapStateToProps = (store) => {
  return { total: store.counter };
};
// const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  actionCreators
)(Counter);
