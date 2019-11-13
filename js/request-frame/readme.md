## 帧
刷新率 60hz
60 次/1000ms    16.666ms/次

## 
1. 主进程
2. 插件
3. GPU
4. 渲染

## 渲染
1. js
2. http
3. 定时器
4. 事件
5. 页面绘制布局

js 和 页面绘制布局 是互斥的 
js 可以改变 DOM 

## event loop
宏任务MacroTask()：同步代码 setTimeOut setinterval
微任务microTask()：
宏任务 ->微任务 -> 渲染  宏任务 -> 渲染  宏任务 -> 渲染  宏任务 -> 渲染