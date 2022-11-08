import React, { Component } from 'react'
// 引入的是Count和Person的容器组件
import Count from './containers/Count/Count.jsx'
import Person from './containers/Person/Person.jsx'

export default class App extends Component {
	render() {
		return (
			<div>
				<Count/>
				{/* <hr/>是增加一条分割线 */}
				<hr/>
				<Person/>
			</div>
		)
	}
}
