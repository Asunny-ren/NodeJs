//请求node自带的http模块，赋值给http
var http = require('http');

http.createServer(function (request, response) {
    //发送http头部
    //HTTP状态值：200 or ok
    //内容类型 text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //发送相应数据“hello world”
    response.end('Hello world');

}).listen(8888);

//终端打印信息
console.log('Server running at http://127.0.0.1:8888/');
