/**
 * 引入combineReducers，用于汇总多个reducer
   import {combineReducers} from 'redux'
 */
import {combineReducers} from 'redux'
import count from './count'
import persons from './person'

// 这里面的对象变量，要与其他地方一致
export default combineReducers({
        count,
        persons
    }
)