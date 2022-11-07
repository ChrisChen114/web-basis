import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

// 使用Provider提供给所有的容器组件传递store对象
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
document.getElementById('root'),
)
