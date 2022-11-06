import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const News =()=> {

  const navigate = useNavigate();
  // 要实现什么功能？默认在News上，然后等2s跳转到Message上，
  // 代码如下：
  // 挂载
  // 需要React Hooks！我们在类组件中使用的所有life-cycle方法也可以通过React Hooks在函数组件中使用，甚至是以更好的方式。阅读更多关于React钩子的信息：https://reactjs.org/docs/hooks-intro.html
  // 在这种情况下，componentDidMount的等价物是：
  // functional component 中使用
  // useEffect(()=>{
  //   // 开启定时器
  //   setTimeout(() => { 
  //     navigate(`/home/message`);
  //   },2000)
  // })
  // class component 中使用
  // componentDidMount(){
  //   // 开启定时器
  //   setTimeout(() => { 
  //     navigate(`/home/message/detail/${id}/${title}`);
  //   },2000)
  // }

  // render() {
    return (
      <div>
        <ul>
          <li>news001</li>
          <li>news002</li>
          <li>news003</li>
        </ul>
      </div>
    )
  // }
}

export default News;
