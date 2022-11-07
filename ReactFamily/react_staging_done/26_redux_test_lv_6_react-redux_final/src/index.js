import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

// 使用Provider提供给所有的容器组件传递store对象
ReactDOM.render(
	// 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
	<Provider store={store}>
		<App/>
	</Provider>,
document.getElementById('root'),
)
