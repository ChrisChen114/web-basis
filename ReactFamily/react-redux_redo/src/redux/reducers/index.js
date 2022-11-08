/**
 * 引入combineReducers，用于汇总多个reducer
   import {combineReducers} from 'redux'
 */
import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({
    count,
}
)