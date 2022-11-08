import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>
        <h2>我是Person组件,Count组件的和为??</h2>
        <input type="text" placeholder='输入名字'/>&nbsp;
        <input type="text" placeholder='输入年龄'/>
        <ul>
            <li>tom1--age1</li>
            <li>tom2--age2</li>
            <li>tom3--age3</li>
        </ul>
      </div>
    )
  }
}
