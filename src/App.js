import React from "react";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainClass from "./components/Classes/MainClass/MainClass";
import ServiceContainer from "./components/Service/ServiceContainer/ServiceContainer";
import PriceContainer from "./components/Pricing/PriceContainer/PriceContainer";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/service">
            <ServiceContainer />
          </Route>
          <Route path="/classes">
            <MainClass />
          </Route>
          <Route exact path="/pricing">
            <PriceContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
