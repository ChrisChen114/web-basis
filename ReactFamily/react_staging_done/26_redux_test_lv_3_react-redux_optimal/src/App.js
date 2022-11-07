import React, { Component } from 'react'
import Count from './containers/Count/Count.jsx'
// 引入store
import store from './redux/store.js'


export default class App extends Component {
	render() {
		return (
			<div>
				<Count/>
			</div>
		)
	}
}
