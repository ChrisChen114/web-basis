### React路由组件传参的三种方式(params、search、state)

1. params
    特点：路径中会暴露信息值，且需要声明接收，参数不会丢。
    路由链接(携带参数)：
    //直接传属性
    <Link to={'/demo/test/tom/18'}>详情</Link>
    //在该组件内部访问对象并传参
    <Link to={`/demo/test/${obj.info1}/${obj.info2}`}>详情</Link>
    注册路由(声明接收)：
    <Route path="/demo/test/:name/:age" component={Test}/>
    接收参数方式：const {name,age} = this.props.match.params   ==>这里有问题
    备注：这个并没有实现.


    一种潜在的方案：参考了这个帖子
    https://blog.csdn.net/qq_60248719/article/details/124371717?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-2-124371717-blog-123351383.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-2-124371717-blog-123351383.pc_relevant_aa&utm_relevant_index=3
    详情界面接收部分，如果用的是v6.0版本的话，类组件中无法从props中接收到传递的参数，比较简单 的取值方式就是将类组件改为函数组件。使用useParams来接收即可。

    父组件 <Message/> :
    ...
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return(
                <li key={msgObj.id}>
                  {/* S1, 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 注册路由  */}
        {/* S2, 声明接收params参数 */}
        <Routes>
          <Route path="detail/:id/:title" element={<Detail/>}/>
        </Routes>
      </div>
    )


    子组件 <Detail/> ：
        import {useParams} from 'react-router-dom'
        export const Detail = ()=> {
            // S3, 接收参数方式
            const params = useParams();
            // 找到的是消息详情对象，需要再获取它的content
            const findResult = DetailData.find((detailObj)=>{
                return detailObj.id === params.id;
            });
            return (
                <ul>
                    <li>ID:{params.id}</li>
                    <li>TITLE:{params.title}</li>
                    {/* 这个需要在DetailData根据id查 */}
                    <li>CONTENT:{findResult.content}</li>
                </ul>
            );
        }

2. search
  参数不会丢。
  S1, 向路由组件传递search参数
    <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;

  S2, search参数无需声明接收，正常注册路由即可
    <Route path="detail" element={<Detail/>}/>
  
  S3, 接收search参数方式
    import {useParams,useLocation} from 'react-router-dom'
    import qs from 'qs'
    ...
    const {search} = useLocation();
    // 解构赋值
    const {id,title} = qs.parse(search.slice(1));
    // 补充知识：
    // qs.stringify,将对象{name:'tom',age:18}转为urlencoded编码的字符串，urlencoded字符串如key=value&key=value1
    // qs.parse,将urlencoded编码的字符串转为对象
    // slice(1),截取1，会将问号干掉

  参考链接：
    https://blog.csdn.net/qzw752890913/article/details/125163925


3. state
    有个优势就是在地址栏中不会显示参数，刷新地址栏，参数不丢失
    V6中state传参只能用于函数组件，类组件不可用，×
    此处的state与组件中的state没有任何关系.

    参考链接：
    https://medium.com/frontendweb/how-to-pass-state-or-data-in-react-router-v6-c366db9ee2f4
    具体代码为：
      {/* S1, 向路由组件传递state参数 */}
      {/* 此处的state与组件中的state没有任何关系. */}
      {/* 这里要求写一个对象， state={}这样还不是对象，这只是js表达式；对象需要这样写-to={{}} */}
      <Link to='/home/message/detail' state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link>&nbsp;&nbsp;

      {/* S2, state参数无需声明接收，正常注册路由即可 */}
          <Route path="detail" element={<Detail/>}/>

      // S3, 接收state参数方式
      // 解构赋值-一步到位
      // const {id,title} = state;//省略这一步
      const {state:{id,title}} = useLocation();

      // 找到的是消息详情对象，需要再获取它的content
      const findResult = DetailData.find((detailObj)=>{
          return detailObj.id === id;
      });

      return (
          <ul>
              <li>ID:{id}</li>
              <li>TITLE:{title}</li>
              {/* 这个需要在DetailData根据id查 */}
              <li>CONTENT:{findResult.content}</li>
          </ul>
      );




视频的总结：但目前用会有问题
## 十一、向路由组件传递参数
	1.params参数
		路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
		注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
		接收参数：this.props.match.params
	2.search参数
		路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
		注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
		接收参数：this.props.location.search
		备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
	3.state参数
		路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
		注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
		接收参数：this.props.location.state
		备注：刷新也可以保留住参数
