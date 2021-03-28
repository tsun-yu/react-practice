import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import * as actionCreators from "../actions";
//部分綁定
import {
  addValue,
  minusValue,
  addValueAsync,
  initValueAsync,
} from "../actions/";

function Counter(props) {
  // console.log(props);
  // console.log(actionCreators);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    props.initValueAsync();
    setTimeout(() => {
      setDataLoading(false);
    }, 2000);
  }, []);
  const loading = (
    <>
      <div className="spinner-grow" role="status">
        <span className="sr-only">loading</span>
      </div>
    </>
  );
  const display = (
    <>
      <h1>{props.total}</h1>
      <button onClick={() => props.addValue(1)}>+1</button>
      <button onClick={() => props.addValueAsync(1)}>+1(async)</button>

      <button onClick={() => props.addValueAsync(1)}>+2(2secs)</button>

      <button onClick={() => props.minusValue(1)}>-1</button>
    </>
  );

  return dataLoading ? loading : display;
}
const mapStateToProps = (store) => {
  return { total: store.counter };
};
// const mapDispatchToProps = null;

export default connect(
  mapStateToProps, // mapDispatchToProps,
  //actionCreators
  { addValue, minusValue, addValueAsync, initValueAsync }
)(Counter);
