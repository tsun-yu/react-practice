import React, { useRef, useEffect, useState } from "react";

function useRefTest(props) {
  const [num, setNum] = useState(100);
  const renderCount = useRef(0);
  const preNum = useRef();

  console.log(renderCount);
  const clickHandler = () => {
    setNum(num + 100);
  };

  useEffect(() => {
    preNum.current = num;
  }, [num]);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <>
      <h1>renderCount:{renderCount.current}</h1>
      <h2>num:{num}</h2>
      <h2>preNum:{preNum.current}</h2>
      <button onClick={clickHandler}>Focus</button>
    </>
  );
}

export default useRefTest;
