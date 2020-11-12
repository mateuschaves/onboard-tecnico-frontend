import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Members from './pages/Members'
import MemberTypes from './pages/MemberTypes'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/members" component={Members} />
        <Route path="/member-types" component={MemberTypes} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
