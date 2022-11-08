import React, { Component } from 'react'
import {connect} from 'react-redux'
import { nanoid } from 'nanoid'
import {addPerson} from '../../redux/actions/person.js'

class Person extends Component {
  // 添加一个人
  addPerson = ()=>{
    // 获取name和age
    const name = this.nameNode.value;
    const age = this.ageNode.value*1;
    // 调用redux的
    const personObj = {id:nanoid(),name,age}
    this.props.addPerson(personObj)
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h2>我是Person组件,Count组件的和为{this.props.count}</h2>
        <input ref={c=>this.nameNode = c} type="text" placeholder='输入名字'/>&nbsp;
        <input ref={c=>this.ageNode = c} type="text" placeholder='输入年龄'/>&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map((personObj)=>{
                return <li key={personObj.id}>{personObj.name}--{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state=>({
        count:state.count,
        persons:state.persons,
  }),
  {
    addPerson,
  }
)(Person)
