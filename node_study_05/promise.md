# promise

- ES6的Promise语言标准，Promise/A+规范

- 如何使用

- 在什么场景下使用


#### 三种状态

- 未完成（pending）

- 已完成（fulfilled）

- 失败  （rejected）


#### Promise A 与 A + 不同点

- A + 规范通过术语thenable来区分promise对象

- A + 定义onFulfilled/onReject必须是作为函数来调用，而且调用过程必须是异步的

- A + 严格定义了then方法链式调用时onFulfilled/onReject的调用顺序

### Promise 的一些库

* bluebird 兼容Promise规范，取消Promise的运行，取得Promise的运行进度，错误处理的扩展监测，性能优化

* Q

* then.js

* es6-Promise

* ypromise

* async 

* native-promise-only

......