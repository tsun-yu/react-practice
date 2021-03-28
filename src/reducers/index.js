import { combineReducers } from "redux";
import counter from "./counter";
import login from "./login";

//comnbine all reducers
export const rootReducer = combineReducers({ counter, login });
//es6 object 新寫法
