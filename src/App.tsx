import React, { FC, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"


// Page Imports
import { HomePage } from './Pages/index.Page'
import { Amortization } from './Pages/Amortization.Page'
import { EMR } from './Pages/EMR.Page'

export const App: FC = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <HomePage />
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
