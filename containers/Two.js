import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {loadTodos } from '../actions'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

class Two extends Component {

  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadTodos())
  }

  handleRefreshClick(e) {
    console.log("刷新数据");
    const { dispatch } = this.props
    dispatch(loadTodos())
  }

  render() {
    const {isFetching, lastUpdated } = this.props
    return (
      <div>
        <h1>Test Demo 2</h1>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          <a href="#"
             onClick={this.handleRefreshClick}>
            Refresh
          </a>
        </p>
      </div>
    )
  }
}

Two.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated
  } = {
    isFetching: true
  }
  return {
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Two)
