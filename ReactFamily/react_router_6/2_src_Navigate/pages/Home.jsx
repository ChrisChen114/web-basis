// 函数里面用useState实现状态更新
import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'

// Navigate只要渲染就会引起视图的切换

export default function Home() {
  const [sum,setSum] = useState(1);
  return (
    <div>
        <h3>我是Home的内容</h3>
        {/* Navigate有一个属性 replace={false}代表push模式，浏览器会有痕迹 */}
        {sum===2 ? <Navigate to='/about' replace={true}/> : <h4>当前sum的值是:{sum}</h4>}
        <button onClick={()=>setSum(2)}>点我将sum变为2</button>
    </div>
  )
}
