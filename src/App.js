import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home";
import { PrivateRoute } from "./helpers/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Register} path="/register" />
          <PrivateRoute exact component={Home} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
