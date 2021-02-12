import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import badRoute from "./Assets/Doge.png";
import { Navigation } from "./Components/Navigation";

// Page Imports
import { HomePage } from './Pages/index.Page'
// import { Count } from "./Pages/Count/Count.Page";
// import { Login } from "./Pages/Login/Login.Page";
// import { Modals } from './Pages/Modals/Modals.Page'
// import { ModalManager } from './Components/Modal/Modal.Manager'

const centeredStyle: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
};

export const App: FC = () => (
  <Router>
    {/* <ModalManager/> */}
    <Switch>
      <Route exact path="/">
        <Navigation>
          <HomePage />
        </Navigation>
      </Route>
    </Switch>
  </Router>
);
