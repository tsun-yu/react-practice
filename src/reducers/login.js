import { LOG_IN, LOG_OUT } from "../actions/actionTypes";

//action = {type:"ADD_VALUE",payload:{value:1}}
export default function login(state = false, action) {
  switch (action.type) {
    case LOG_IN:
      return (state = true);
    case LOG_OUT:
      return (state = false);
    default:
      return state;
  }
}
