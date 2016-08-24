/**
 * Created by KidSirZ4i on 2016/5/5.
 */

var http = require('http');

// 用于请求的选项
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
};

// 处理响应的回调函数
var callback = function(response){
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();


//在新的窗口执行client.js文件后、server.js和client.js控制台都会有输出：

//server.js控制台输出：
/*
 Server running at http://127.0.0.1:8081/
Request for /index.html received.
*/

//client.js控制台输出：
/*
     <!DOCTYPE html>
     <html lang="en">
     <head>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
     <meta name="keywords" content="">
     <meta name="description" content="">
     <meta name="author" content="K.S">
     <meta name="robots" content="all">
     <title>NodeJS Server</title>
     </head>
     <body>
     NodeJS Server : Hello World!
     </body>
     </html>
 */