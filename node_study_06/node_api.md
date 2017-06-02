# node-api

### Buffer 缓存

> Buffer 类的实例类似于整数数组，除了其是大小固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在其创建时就已确定，且不能调整大小。

> Buffer类在node.js中是一个全局变量，不需要require('buffer').Buffer

```
$ node
//参照buffer.png
> var buf = new Buffer('hello 慕课网')

> var buf = new Buffer('hello 慕课网', 'base64')

> var buf = new Buffer(8)

> var buf = new Buffer([1,2,3,4])

//会自动取整
> var buf = new Buffer([1,2.22,3.12,4])
    $ node
    > var buf = new Buffer([1,2.12,3.12,4]);console.log(buf)
    <Buffer 01 02 03 04>
    undefined
    > buf[1]
    2
```

##### Buffer实例方法

```
buffer[index]
buffer.length
buffer.write(string, offset=0, length, encoding='utf-8')
buffer.toString(encoding, start=0, end=buffer.length)
buffer.copy(target, tStart, sStart, sEnd=buffer.length)
buffer.slice(start, end)
buffer.compare(otherBuffer)
buffer.equals(otherBuffer)
buffer.fill(value, offset, end)
```

> 为了使 Buffer 实例的创建更可靠、更不容易出错，各种 new Buffer() 构造函数已被 废弃，并由 Buffer.from()、Buffer.alloc()、和 Buffer.allocUnsafe() 方法替代。

### stream 流

