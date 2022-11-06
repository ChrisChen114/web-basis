### withRouter的使用
  场景：一般组件如何使用到路由组件上的API功能呢？
  此时就得请出withRouter V5中的写法
  此时就得请出useNavigate V6中的写法
  在Header组件中，
  // useNavigate是一个函数，因为首字母是小写的；组件的首字母是大写的
  import { useNavigate } from 'react-router-dom'
  header组件改为函数式组件.

  补充：
  react-router-dom v6版本中的withRouter和Switch已过时，可以退回到v5版本继续使用，或者使用useNavigate()替代withRouter，使用Routes替代Switch。
