##开发步骤
1.静态页面拆分，html和css
    新建不同的组件文件夹；
    要能跑起来；

2.初始化状态数据，并传递给List（List得接收，如何接？）和Item
    2.1 List里面，todos会有多个值，所以要用todos.map(...return <Item/>)
    2.2 将数据进行更新，Item里要接收{id，name，done}值
    2.3 List中，要设置key={todo.id}
    2.4 Item中，更新选中没选中的状态，input——>checked:done属性,对应checked属性；
    2.5 Item中，name的使用，即更新
    2.6 进行了动态的初始化和展示

3. 在header中，添加一个todo
    3.1 敲回车的时候获取值，绑定一个键盘事件onKeyUp;需要判断敲的是键盘上的哪个按键keyCode，通过event获取
    3.2 将Header获取的数据传给App
        子组件给父组件传递数据，需要父建立一个函数
        在App中，addTodo函数里，获取原todos，追加一个todo，更新状态
        需要生成一个id标识，使用nanoid，yarn add nanoid，不是默认导出，需要加{}
        handleKeyUp里面，调用addTodo(todoObj)
        有很多细节需要注意：是否为空，清空操作event.target.value=''
    
4. 每一个Item都能做哪些交互
    4.1 样式上的交互--鼠标移进、移出时的颜色变化
        给Item绑定事件,li上,onMouseEnter，onMouseLeave事件；
        添加局部的state= {mouse:false},用于记录鼠标是否进来
        添加处理函数handleMouse；
        增加样式style，里面通过三目运算符和mouse控制不同颜色;
        同时将隐藏的’删除‘按钮显示，style中mouse三目运算符来控制’block‘用于隐藏，’none‘是不隐藏；
    4.2 更新勾选和取消勾选todo状态
        App里新建updateTodo(id,done)，传递给List（记得从props里拿到updateTodo），再传递给Item；
        input框上绑定事件onChange=handleCheck，是哪个框呢，需要用到id；
        handleCheck里调用updateTodo，使用event.target.checked判断是否选中,返回id和event.target.checked值；
        App里updateTodo(id,done)要调用到获取、todos.map匹配处理状态数据、更新。
    4.3 从App到List和header都传东西了，需要对类型进行限制，
        使用到prop-types组件,    使用npm add prop-types下载（react并没有下载好这个库）
        注意：PropTypes要大写，符合规范，import PropTypes from 'prop-types'
        要用到静态关键字，
            static propTypes = {
            addTodo:PropTypes.func.isRequired,
            }

5. 删除一个todo
    5.1 App里定义deleteTodo，传入id，在这个函数里使用filter进行删除处理；此处要熟悉filter的使用；
    5.2 deleteTodo经List，传递给Item；
    5.3 新增 删除一个todo的回调-handleDelete，confirm增加’确定删除吗‘的弹框提示，’确定‘在返回id

6. footer的处理
    6.1 App里的Footer组件需要传入todos={todos} 
    6.2 在Footer中，先接收todos，然后有条件的统计doneCount和total
        有条件的统计doneCount，使用到了reduce方法；
        todos.reduce((pre,todo)=>{ return-返回值 pre+(todo.done?1:0)-加括号},0-初值)
    6.3 最下面的checkbox按钮的处理
        App里，增加checkAllTodo(done)，在Footer上进行绑定，
            checkAllTodo里使用map根据footer里的checkbox的done进行循环处理。
            注意：不能使用filter，filter会删除数据.
        input框上增加 onChange={handleAllDone} checked={数量相等且不为0}；
        onChange={}增加回调函数handleAllDone，通过event获取checked值

7. 删除已完成任务
    App里新建deleteAllTodo，传递给Footer；
    Footer里增加onCLick事件，绑定handleDeleteAllTodo，不用返回任何东西；
    deleteAllTodo，使用filter实现删除.
