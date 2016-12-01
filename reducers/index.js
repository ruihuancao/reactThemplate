import {routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import selectedTodoList from './todo'

const rootReducer = combineReducers({
  selectedTodoList,
  routing: routerReducer
})

export default rootReducer
