### 编程式路由导航

  React V6 编程式路由导航 useNavigate()要用函数式组件否则Hook报错，链接如下：
  https://blog.csdn.net/weixin_45029697/article/details/123048963

  首先const navigate = useNavigate();
  则可以使用navigate这个函数代替this.history.push、this.history.replace、this.history.gofoward、this.history.goback、this.history.go
    
  1.注意：navigete默认history的是push模式，使用replace模式需要添加
      {replace:true} //开启replace模式。
  2.注意：  使用useNavigate()必须是在函数式组件中
              因此需要将class Message改为函数式组件Message

### 函数式组件useNavigate路由V6跳转传参
  1. params

  2. query（search）

  3. state
  参考链接：
    https://blog.csdn.net/weixin_68266041/article/details/124604935

### 函数式组件中使用componentDidMount的等价物是：
    import { useEffect } from 'react'

    export default function Daw() {
      useEffect(() => {
        // Code here will run just like componentDidMount
      }, [])

      return (
        <>
            <div>Hello world.</div>
        </>
      )
    }
    参考链接：
    https://www.5axxw.com/questions/content/4yep69