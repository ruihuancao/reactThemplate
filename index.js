import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore()

injectTapEventPlugin();

render(
  <Root store={store} />,
  document.getElementById('root')
)
