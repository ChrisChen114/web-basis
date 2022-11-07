### 降低版本
        npm install react@17.x react-dom@17.x --save

### 增加了count_action.js文件
        该文件专门为Count组件生成action对象
        将Count组件里改为store.dispatch(createIncrementAction(value*1))

### 增加了constant.js文件
        该模块是用于定义action对象中type类型的常量值
        用到'increment'等的地方均改为INCREMENT
