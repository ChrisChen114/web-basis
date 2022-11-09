import { Navigate } from 'react-router-dom'

import About from "../pages/About"
import Home from "../pages/Home"
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import News from '../pages/News'


export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    // 子路由children
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            // 路由链接
            // 1. params参数
            //{/* <Link to={`detail/${msg.id}/${msg.title}/${msg.content}`}>{msg.title}</Link>&nbsp;&nbsp; */}
            // 展示路由的地方进行占位 -- 占位之后在Detail进行接住
            // path: 'detail/:id/:title/:content',

            // 2. search参数不用占位
            path: 'detail',
            // path: 'detail',
            element: <Detail />
          },
        ]
      },
    ]
  },
  {
    path: '/',
    element: <Navigate to='/about' />
  },
]