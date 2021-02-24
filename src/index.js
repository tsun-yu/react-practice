import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//step1 import createStore, combineReducers API
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//step2 寫出reducer
//action = {type:"ADD_VALUE",value:1}
//action = {type:"MINUS_VALUE",value:1}
function counter(state = 99, action) {
  switch (action.type) {
    case "ADD_VALUE":
      return state + action.value;
    case "MINUS_VALUE":
      return state - action.value;
    default:
      return state;
  }
}

function todos(state = [], action) {
  return state;
}

//step 2-1 comnbine all reducers
const rootReducer = combineReducers({ counter, todos });

//step3 由rootReducer建立store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
