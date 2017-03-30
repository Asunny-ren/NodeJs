# NodeJs API

### url

    ``` javascript
    url.parse('http://www.imooc.com/video/6710')

    Url {
      protocol: 'http:', //底层使用的协议
      slashes: true,    //是否有协议使用的双斜线//
      auth: null,   //作者
      host: 'www.imooc.com', //IP地址或者域名
      port: null,   //端口，默认80
      hostname: 'www.imooc.com',    //主机名
      hash: null,   //哈希值
      search: null,     //查询字符串参数
      query: null,      //发送给http服务的一个数据
      pathname: '/video/6710',  //访问资源的路径名
      path: '/video/6710',      //路径
      href: 'http://www.imooc.com/video/6710'   //没有被解析的完整的地址
    }

    url.parse('http://www.imooc.com:8080/video/6710?list=1#floor1')

    Url {
      protocol: 'http:',
      slashes: true,
      auth: null,
      host: 'www.imooc.com:8080',
      port: '8080',
      hostname: 'www.imooc.com',
      hash: '#floor1',
      search: '?list=1',
      query: 'list=1',
      pathname: '/video/6710',
      path: '/video/6710?list=1',
      href: 'http://www.imooc.com:8080/video/6710?list=1#floor1'
    }
    ```

    ``` javascript
    url.format({
      protocol: 'http:',
      slashes: true,
      auth: null,
      host: 'www.imooc.com:8080',
      port: '8080',
      hostname: 'www.imooc.com',
      hash: '#floor1',
      search: '?list=1',
      query: 'list=1',
      pathname: '/video/6710',
      path: '/video/6710?list=1',
      href: 'http://www.imooc.com:8080/video/6710?list=1#floor1'
    })
    ```

    ``` javascript
    //.com后面加/和不加都可以
    url.resolve('http://www.imooc.com', '/course/list')

    //result：http://www.imooc.com/course/list
    ```

    ``` javascript
    url.parse('http://www.imooc.com/course/list?form=rjd&content=study#floor1',true)
    //第二个参数默认为false，如果设置为true，query解析出来的是一个对象

    Url {
      protocol: 'http:',
      slashes: true,
      auth: null,
      host: 'www.imooc.com',
      port: null,
      hostname: 'www.imooc.com',
      hash: '#floor1',
      search: '?form=rjd&content=study',
      query: 'form=rjd&content=study',
      pathname: '/course/list',
      path: '/course/list?form=rjd&content=study',
      href: 'http://www.imooc.com/course/list?form=rjd&content=study#floor1'
    }
    ```

    ``` javascript
    url.parse('//www.imooc.com/course/list?form=rjd&content=study#floor1',true)
    //第三个参数默认为false，如果地址为没有protocol，设置为true，结果会解析正确，如果设置为false

    //false
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '',
      query: {},
      pathname: '//www.imooc.com/course/list'
      path: '//www.imooc.com/course/list',
      href: '//www.imooc.com/course/list'
    }


    url.parse('//www.imooc.com/course/list?form=rjd&content=study#floor1', true, true)

    //true解析出来的结果就是想要的结果
    Url {
      protocol: null,
      slashes: true,
      auth: null,
      host: 'www.imooc.com',
      port: null,
      hostname: 'www.imooc.com',
      hash: null,
      search: '',
      query: {},
      pathname: '/course/list',
      path: '/course/list',
      href: '//www.imooc.com/course/list'
    }
    ```
