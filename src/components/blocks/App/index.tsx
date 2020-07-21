import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from '../../layouts/Main'
import Detail from '../../views/Detail'
import Home from '../../views/Home'
import configureStore from '../../../store'

const store = configureStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
