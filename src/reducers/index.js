import { combineReducers } from "redux";
import counter from "./counter";

//comnbine all reducers
export const rootReducer = combineReducers({ counter });
//es6 object 新寫法
