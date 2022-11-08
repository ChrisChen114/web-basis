/**
 如何向组件内部动态传入带内容的结构(标签)?
    Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
	React中:
		*** 使用children props: 通过组件标签体传入结构
		*** 使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性
 */
import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>我是Parent</h3>
        {/* 组件的标签体内容在哪，在children里，见下方用法 */}
        {/* 使用children props: 通过组件标签体传入结构 */}
        {/* <A>neirong</A> */}

        {/* 预留给灵活的组件 */}
        {/* 使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性 */}
        <A render={(name)=><C name={name}/>}/>

         {/* <A> */}
            {/* B作为标签体内容 */}
            {/* <B/> */}
        {/* </A>  */}
      </div>
    )
  }
}

class A extends Component {
    state = {name:'tom'}
    render() {
        const {name} = this.state
      return (
        <div className='a'>
          <h3>我是A</h3>
          {/* 在这里写标签体内容--neirong */}
          {/* {this.props.children} */}
          {/* <B/> */}
          {/* B是通过标签体内容写进来的， render B */}

          {/* 针对这个写法 <A render={(name)=><B name={name}/>}/>，用下面的 */}
          {this.props.render(name)}
          {/* 上面这种写法的好处是预留位置，随意放组件，很灵活 */}
        </div>
      )
    }
  }

class B extends Component {
    render() {
        return (
        <div className='b'>
            <h3>我是B组件,{this.props.name}</h3>
        </div>
        )
    }
}
