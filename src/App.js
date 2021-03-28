import "./App.css";
import CounterPage from "./pages/CounterPage";
import Calender from "./pages/Calender";
import Product from "./pages/Product";
import Home from "./pages/Home";
import NoteFoundPage from "./pages/NoteFoundPage";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  // return <Counter />;
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/calender">
            <Calender />
          </Route>
          <Route path="/product/:id?">
            <Product />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoteFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
