import { combineReducers } from "redux";
import counter from "./counter";
import isAuth from "./isAuth";

//comnbine all reducers
export const rootReducer = combineReducers({ counter, isAuth });
//es6 object 新寫法
