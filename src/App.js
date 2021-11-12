import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/index";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
