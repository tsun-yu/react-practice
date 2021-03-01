import { ADD_VALUE, INIT_VALUE, MINUS_VALUE } from "../actions/actionTypes";

//action = {type:"ADD_VALUE",payload:{value:1}}
export default function counter(state = 99, action) {
  switch (action.type) {
    case ADD_VALUE:
      return state + action.payload.value;
    case MINUS_VALUE:
      return state - action.payload.value;
    case INIT_VALUE:
      return action.payload.value;
    default:
      return state;
  }
}
