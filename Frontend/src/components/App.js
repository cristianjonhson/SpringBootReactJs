import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewMarcaciones from "../pages/marcaciones";
import BotonIndex from "../pages/BotonIndex";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/BotonIndex" component={BotonIndex} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
