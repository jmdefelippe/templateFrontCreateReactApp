import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from "./views/components/layout";
import ScreenHome from "./views/screens/home";
import ScreenLinkOne from "./views/screens/linkOne";
import ScreenLinkTwo from "./views/screens/linkTwo";
import ScreenLinkThree from "./views/screens/linkThree";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={ScreenHome} />
            <Route path="/linkOne" component={ScreenLinkOne} />
            <Route path="/linkTwo" component={ScreenLinkTwo} />
            <Route path="/linkThree" component={ScreenLinkThree} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
