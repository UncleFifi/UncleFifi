import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import badRoute from "./Assets/Doge.png"
import { Navigation } from "./Components/Navigation";

// Page Imports
import { HomePage } from './Pages/index.Page'
import { Amortization } from './Pages/Amortization.Page'
import { EMR } from './Pages/EMR.Page'

const centeredStyle: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
};

export const App: FC = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation>
            <HomePage />
          </Navigation>
        </Route>
        <Route exact path="/Amortization">
          <Amortization/>
        </Route>
        <Route exact path="/EMR">
          <EMR/>
        </Route>
      </Switch>
    </Router>
  )
}
