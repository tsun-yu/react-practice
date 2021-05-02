import CounterPage from "./pages/CounterPage";
import Calender from "./pages/Calender";
import Product from "./pages/Product";
import Home from "./pages/Home";
import NoteFoundPage from "./pages/NoteFoundPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyNavbar from "./component/MyNavbar";
import ScrollToTop from "./component/ScrollToTop";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MyFooter from "./component/MyFooter";
import MainContent from "./component/MainContent";
import UseRefTest from "./component/UseRefTest";
import { useState } from "react";
import AuthProvider from "./component/AuthProvider";

function App() {
  return (
    <Router>
      <>
        <AuthProvider>
          <MyNavbar />
          <ScrollToTop>
            <MainContent>
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
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/test">
                  <UseRefTest />
                </Route>
                <Route path="*">
                  <NoteFoundPage />
                </Route>
              </Switch>
            </MainContent>
          </ScrollToTop>
        </AuthProvider>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
