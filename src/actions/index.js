import { ADD_VALUE, INIT_VALUE, MINUS_VALUE } from "./actionTypes";

//action creator 動作建立器

export const addValue = (value) => {
  return { type: ADD_VALUE, payload: { value } };
};

export const addValueAsync = (value) => {
  return async function updateDataToServer(dispatch, getState) {
    const url = "http://localhost:5555/counter";
    const request = new Request(url, {
      method: "PUT",
      body: JSON.stringify(),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    // console.log("data", data.total);
    console.log("delay initValueAsync");
    dispatch(initValue(data[0].total));
  };
};

export const minusValue = (value) => {
  return { type: MINUS_VALUE, payload: { value } };
};

export const initValue = (value) => {
  return {
    type: INIT_VALUE,
    payload: {
      value,
    },
  };
};

export const initValueAsync = () => {
  return async function getDataFromServer(dispatch) {
    const url = "http://localhost:5555/counter";
    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    // console.log("data", data.total);
    console.log("delay initValueAsync");
    dispatch(initValue(data[0].total));
  };
};
