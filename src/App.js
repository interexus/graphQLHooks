/*libraries are called from react core*/
import React from "react";
import "./App.css";
/*functions are called from their own (custom) files*/
import { Switch, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { NotFound } from "./components/NotFound";
import { ListContainer } from "./pages/list/ListContainer";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/list" component={ListContainer} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
