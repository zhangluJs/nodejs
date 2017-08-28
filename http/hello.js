/**
 * @file http学习
 *
 * @author zhanglu
 */

'use strict';

// 导入http模块
let http = require('http');

// 创建http server,并传入回调函数
let server = http.createServer(function (request, response) {
    console.log(request.method + ',' + request.url);
    // 将http响应的200写入response，并且设置content-type，text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将http响应的html内容写入response
    response.end('<h1>Hello World</h1>');
});

// 让服务器监听8000端口
server.listen(8000);

console.log('Server is running at http://127.0.0.1:8080/');