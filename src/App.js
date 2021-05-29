import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from "./views/screens/layout";
import ScreenHome from "./views/screens/home";
import ScreenAlgorithms from "./views/screens/algorithms";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={ScreenHome} />
            <Route path="/algoritmos" component={ScreenAlgorithms} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
