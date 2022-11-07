import React, { Component } from 'react'
import Count from './containers/Count/Count.jsx'
import Person from './containers/Person/Person.jsx'

export default class App extends Component {
	render() {
		return (
			<div>
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
