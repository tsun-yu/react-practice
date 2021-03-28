import React from "react";
import Counter from "../component/Counter";
import Breadcrumb from "./Breadcrumb";

function CounterPage(props) {
  return (
    <>
      <Breadcrumb />
      <Counter />
    </>
  );
}

export default CounterPage;
