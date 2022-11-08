import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// class Demo extends Component {
//     state = {count:0}

//     myRef  =React.createRef();

//     add = ()=>{
//         this.setState(state=>({count:state.count+1}))
//     }
//     unmount = ()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     show = ()=>{
//         alert(this.myRef.current.value);
//     }

//     componentDidMount(){
//         this.timer = setInterval(() => {
//             // // 箭头右侧只有一句(此处是对象)，还有return，可以简写成({})形式
//             // 不同于// 箭头右侧只有一句，还有return，可以都删了
//             this.setState(state=>({count:state.count+1}))
//         }, 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef}></input>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>点我卸载组件</button>
//         <button onClick={this.show}>点我提示数据</button>
//       </div>
//     )
//   }
// }

// 调用次数1+n次
function Demo(){
    // useState管理的是数组：有状态和方法
    // react底层做了处理，第1次处理的时候把count给存下来，后面的n次不会执行下面这句话
    const [count,setCount] = React.useState(0);
    const myRef = React.useRef();
    // 
    // const [name,setName] = React.useState('tom');
    
    // 加的回调
    function add(){
        // 第1中写法
        // setCount(count+1);
        // 第2中写法
        // setCount((count)=>{return count+1}) // 简写为下面形式
        // 箭头右侧只有一句，还有return，可以都删了
        setCount(count=>count+1)
    }
    // 改名
    // function changeName(){
    //     setName('jack')
    // }

    // 卸载组件的回调
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    // 提示输入的回调
    function show(){
        alert(myRef.current.value);
    }


    // 传入的函数，相等于生命周期钩子
    // 1. useEffect里，()=>{
    //     setInterval(() => {
    //         setCount(count=>count+1)
    //     }, 1000);
    // }等价于==componentDidMount，componentDidUpdate
    // 第2个参数[]相当于谁都不监测
    // 第2个参数[count]相当于监测count
    // 不写第2个参数是谁都监测
    // 2. 而上述代码的return返回结果相当于componentWillUnmount
    // 函数里代替这个人componentWillUnmount的钩子是谁？
    React.useEffect(()=>{
        let timer = setInterval(() => {
            setCount(count=>count+1)
        }, 1000) //等价于==componentDidMount，componentDidUpdate
        return () => { 
            clearInterval(timer)
         }//相当于componentWillUnmount
    },[]);
    // 
    // #### 4. Effect Hook
        // ```
        // (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
        // (2). React中的副作用操作:
        //         发ajax请求数据获取
        //         设置订阅 / 启动定时器
        //         手动更改真实DOM
        // (3). 语法和说明: 
        //         useEffect(() => { 
        //           // 在此可以执行任何带副作用操作
        //           return () => { // 在组件卸载前执行
        //             // 在此做一些收尾工作, 比如清除定时器/取消订阅等
        //           }
        //         }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
            
        // (4). 可以把 useEffect Hook 看做如下三个函数的组合
        //         componentDidMount()
        //         componentDidUpdate()
        //     	componentWillUnmount() 
        // ```

    return (
      <div>
        <input type='text' ref={myRef}/>
        <h2>当前求和为{count}</h2>
        {/* <h2>我的名字是: {name}</h2> */}
        <button onClick={add}>点我+1</button>
        {/* <button onClick={changeName}>点我改名</button> */}
        <button onClick={unmount}>点我卸载组件</button>
        <button onClick={show}>点我提示数据</button>
      </div>
    )
}


 export default Demo
