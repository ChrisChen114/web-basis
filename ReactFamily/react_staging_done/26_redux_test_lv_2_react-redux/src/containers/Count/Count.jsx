// 引入Count的UI组件
import CountUI from '../../components/Count/Count.jsx'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
}from '../../redux/count_action.js'

// 1. mapStateToProps函数返回的是一个对象；
// 2. 返回的对象中的key就作为传递给UI组件props的key，
//    value就作为传递给UI组件props的value
// 3. mapStateToProps用于传递状态
// 注意：react-redux会自动返回state和dispatch
function mapStateToProps(state){
    console.log(state)
    // 相当于 <CountUI n={900}>
    return {count:state};
}

// 1. mapDispatchToProps函数返回的是一个对象；
// 2. 返回的对象中的key就作为传递给UI组件props的key，
//    value就作为传递给UI组件props的value
// 3. mapDispatchToProps用于传递操作状态的方法
// 注意：react-redux会自动返回state和dispatch
function mapDispatchToProps(dispatch){
    return {
        // 通知redux执行加法
        increment:number=>dispatch(createIncrementAction(number)),
        decrement:number=>dispatch(createDecrementAction(number)),
        incrementAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),
    }
}

// 使用connect()(),创建并暴露一个Count的容器组件
// const CountContainer = connect()(CountUI)
// export default CountContainer;

// 下面这种写法将暴露为Count
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
