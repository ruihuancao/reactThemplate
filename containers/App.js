import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {loadTodos } from '../actions'
import { Link, browserHistory } from 'react-router'

import Header from '../components/Header'

class App extends Component {

  render() {
    const {isFetching, lastUpdated } = this.props
    const { children } = this.props
    return (
      <div>
        <Header title="测试" drawerOpen={false} />
        <div>{children}</div>
      </div>
    )
  }
}

export default App
