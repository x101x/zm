## AMD 
异步模块化的一个方案
代表：require.js

definee 定义
require 引入            

## CMD
代表作 Sea.js

共同点： 
  都能异步加载 
不同点:
  1. AMD 会提升所有的require  只要依赖了模块 就会加载
  2. CMD 按照 代码顺序

## UMD
通用模块加载
  AMD + Common.js
  ```js
  (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () {}))

(function() {})()
// node 
module.exports.a = a;
// AMD 以前的
```
运营活动页面 jq