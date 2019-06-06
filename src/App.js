import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((route, i) => {
              return <Route key={i} path={route.path} exact={route.exact === true ? true:false} component={route.component} />
            })
          }
        </Switch>
      </Router>
    )
  }
}

