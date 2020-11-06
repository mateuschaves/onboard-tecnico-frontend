import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Members from './pages/Members'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/members" component={Members} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
