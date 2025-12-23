import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BotonIndex from "../pages/BotonIndex";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/BotonIndex" />} />
        <Route exact path="/BotonIndex" component={BotonIndex} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
