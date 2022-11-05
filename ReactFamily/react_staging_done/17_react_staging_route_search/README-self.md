### React路由组件传参的三种方式(params、search、state)

1. params
    特点：路径中会暴露信息值，且需要声明接收
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

