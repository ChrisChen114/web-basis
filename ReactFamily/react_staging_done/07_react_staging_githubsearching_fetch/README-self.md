### Github搜索案例

使用到了‘关注分离’的思想

1. 修改Search里，修改users为users2
    axios.get(`/api1/search/users2?q=${keyWord}`).then(

2. Search组件里，书写了三种方法
    2.1 fetch未优化版本
    2.2 fetch优化版本
    2.3 使用await和async，配合try-catch实现--这种简单，但使用率不高，因为兼容性的问题

    