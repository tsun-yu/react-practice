import { ADD_VALUE, INIT_VALUE, MINUS_VALUE } from "./actionTypes";

//action creator 動作建立器

export const addValue = (value) => {
  return { type: ADD_VALUE, payload: { value } };
};

export const addValueAsync = (value) => {
  return async function updateDataToServer(dispatch, getState) {
    const newTotal = { total: getState().counter + value };
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
      dispatch(addValue(value));
    } catch (error) {}
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
