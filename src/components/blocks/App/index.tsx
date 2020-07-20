import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from '../../layouts/Main'
import Detail from '../../views/Detail'
import Home from '../../views/Home'

import './App.css'

function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Main>
    </Router>
  )
}

export default App
