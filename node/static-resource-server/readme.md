## 静态资源 
静态： 不会随着服务器运行改变的资源， 资源放在服务器上的
常见的静态资源： html css js jpg

## 浏览器

1. 浏览器知道这是一个html
2. script img link src属性 浏览器会请求对应的src 得到结果
3. 服务器 要返回 对应的内容  js/css

req.url === c:static/x.jpg
作用： 统一处理了 静态资源的请求

异步：
1. 回调
2. 异步