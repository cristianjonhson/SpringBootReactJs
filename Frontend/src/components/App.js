import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BotonIndex from "../pages/BotonIndex";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/BotonIndex" component={BotonIndex} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
