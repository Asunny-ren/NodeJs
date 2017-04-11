# node 事件

``` javascript
    var EventEmitter = require('events').EventEmitter

    //最多可以给一个事件监听10次
    
    var life = new EventEmitter()
    //生成一个实例

    //可以通过设置监听最大值
    life.setMaxListeners(11)

    //on或者addEventListener,效果是一样的，绑定事件
    life.on('work', function(who) {
        console.log(who + '学习')
    })

    //当你绑定11个事件监听的时候会报警告，(node:4824) Warning: Possible EventEmitter memory leak detected. 11 work listeners added. Use emitter.setMaxListeners() to increase limit
    

    //在这里传入匿名函数是没有作用的，必须传入参数函数名来调用,参照实例理解，在监听和移除都必须使用定义的函数名
    life.removeListener('work', function(who) {
        console.log(who + ' study is removed')
    })
    

    //触发事件
    life.emit('work', 'rjd')
    //返回boolean类型，如果监听则返回true，如没有则返回false
````


### 移除事件监听

``` javascript
    // 如果不传参数，则会把life实例对象身上的事件全部移除
    life.removeAllListeners()
    
    // 如果传入一个参数，则移除对应的事件名的监听事件
    life.removeAllListeners('work')

```