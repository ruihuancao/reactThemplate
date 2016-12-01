import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DevTools from './DevTools'
import App from './App'
import Two from './Two'
import Three from './Three'
import Home from './Home'

export default class Root extends Component {
  render() {
    const { store } = this.props
    const history = syncHistoryWithStore(browserHistory, store)
    return (
      <Provider store={store}>
      <MuiThemeProvider>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="/two" component={Two}/>
              <Route path="/three" component={Three}/>
            </Route>
          </Router>
          <DevTools />
        </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
