import React, { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function Counter2(props) {
  const [total, setTotal] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTotalFromServer = async () => {
    setDataLoading(true);
    const url = "http://localhost:5555/counter/1";
    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      setTotal(data.total);
    } catch (error) {
      setError(error);
    }
  };

  const updateTotalToServer = async (value) => {
    setDataLoading(true);
    const newTotal = { total: total + value };
    const url = "http://localhost:5555/counter/1";
    const request = new Request(url, {
      method: "PUT",
      body: JSON.stringify(newTotal),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // console.log(data);
      setTotal(total + value);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false);
    }, 500);
  }, [total]);

  useEffect(() => {
    getTotalFromServer();
  }, []);

  const loading = <ScaleLoader />;
  const display = (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          updateTotalToServer(1);
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          updateTotalToServer(-1);
        }}
      >
        -1
      </button>
    </>
  );

  return dataLoading ? loading : display;
}

export default Counter2;
