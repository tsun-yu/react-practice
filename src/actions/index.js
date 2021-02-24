import { ADD_VALUE, MINUS_VALUE } from "./actionTypes";

//action creator 動作建立器

export const addValue = (payload) => {
  return { type: ADD_VALUE, value };
};

export const minusValue = (payload) => {
  return { type: MINUS_VALUE, value };
};
