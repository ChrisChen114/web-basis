### Github搜索案例
兄弟组件间的通信：消息订阅-发布机制

1. 使用这个组件 PubSubJS
    npm install pubsub-js --save
    yarn add pubsub-js
    该组件适用于任意组件通信

2. 基础问题：谁订阅，谁发布？
    List订阅消息；
    Search把自己搜索出来的结果以发布形式交给List。

3. 将App里的state初始化状态剪切到List里面
    console.log('List组件收到数据了，',stateObj)
    // 用这个钩子
    // 在List里面订阅消息，然后在Search里面将搜索结果发布（返回）给List
    componentDidMount(){
        // PubSub.subscribe('atguigu',(msg,data)=>{
        // 默认写msg，但是不想写的话，可以用'_'占个位
        PubSub.subscribe('atguigu',(_,stateObj)=>{
            // console.log('List组件收到数据了，',data)
            this.setState(stateObj);
        })
    }

4. 在Search
    console.log('Search组件发布消息了');
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})

5.  卸载钩子
    componentWillUnmount(){
        PubSub.unSubscribe(this.token);
    } 
    