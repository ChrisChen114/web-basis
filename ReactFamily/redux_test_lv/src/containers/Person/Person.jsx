import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPerson} from '../../redux/actions/person.js'

// UI组件
class Person extends Component {
    // 
    addPerson=()=>{
        const name=this.nameNode.value;
        const age = this.ageNode.value*1;
        const personObj = {id:nanoid(),name,age};
        this.props.addPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    render() {
        return (
            <div>
                <h2>我是Person组件,Count组件的和为{this.props.count}</h2>
                <input ref={c=>this.nameNode=c} type="text" placeholder="输入名字"/>
                <input ref={c=>this.ageNode=c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((renObj)=>{
                            return <li key={renObj.id}>{renObj.name}---{renObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

// 常规写法，但是使用connect一切都可以简化
// 映射状态
// const mapStateToProps= state =>({count:state})
// 映射操作状态的方法
// const mapDispatchToProps = dispatch=>({increment:number=>dispatch(createIncrementAction(number))})
// 使用connect(mapStateToProps,mapDispatchToProps)(UI组件)
// 创建并暴露一个Count的容器组件
// const CountContainer = connect()(CountUI)
// 容器组件
export default connect(
    state=>({
        count:state.count,// 映射状态
        persons:state.persons
    }),
    {
        // 映射操作状态的方法
        addPerson,
    }
)(Person)
