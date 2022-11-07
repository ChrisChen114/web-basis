import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'
// 按需引入样式
// import 'antd/dist/antd.css'
import './App.less';

const { RangePicker } = DatePicker;

export default class App extends Component {
  // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  render() {
    return (
      <div>
        App
        <Button>点我</Button>&nbsp;
        <Button type="primary">Primary Button</Button>&nbsp;
        <Button >Primary Button</Button>&nbsp;
        <Button type='link'>Primary Button</Button>&nbsp;
        <WechatOutlined/>&nbsp;
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>&nbsp;
        {/* onChange={onChange} */}
        <DatePicker  />&nbsp;
        <RangePicker />
      </div>
    )
  }
}
