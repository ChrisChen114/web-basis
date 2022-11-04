//引入react组件
import React, { Component } from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'

export default class App extends Component {



  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
