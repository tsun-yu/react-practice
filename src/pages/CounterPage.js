import React from "react";
import Counter from "../component/Counter";
import CounterAsync from "../component/CounterAsync";
import Counter2 from "../component/Counter2";
import Breadcrumb from "./Breadcrumb";

function CounterPage(props) {
  return (
    <>
      <Breadcrumb />
      <h1>Counter</h1>
      <Counter />
      <h1>Counter2</h1>
      <Counter2 />
    </>
  );
}

export default CounterPage;
