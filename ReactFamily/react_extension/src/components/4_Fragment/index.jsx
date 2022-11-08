import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
        // 可以不用必须有一个真实的DOM根标签了,比如下面的div不用写
        // Fragment标签不会呈现在html页面上，只是骗过JSX的语法,允许写一个有且只有这一个标签属性key
        // 还有一种方法，就是写一个空标签<>，而<>就无法写。注意这点小区别
        // Fragment意思是文档碎片
      <Fragment>
        // <>
        {/* <div> */}
            <input type="text" />
            <input type="text" />
        {/* </div> */}
        // </>
        </Fragment>
    )
  }
}
