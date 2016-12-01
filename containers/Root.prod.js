import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import DevTools from './DevTools'
import App from './App'
import Two from './Two'
import Three from './Three'

export default class Root extends Component {
  render() {
    const { store } = this.props
    const history = syncHistoryWithStore(browserHistory, store)
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={App}/>
              <Route path="two" component={Two}/>
              <Route path="three" component={Three}/>
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
