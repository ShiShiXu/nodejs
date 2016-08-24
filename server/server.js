/**
 * Created by KidSirZ4i on 2016/5/5.
 */

/* Web 应用架构
 Client - 客户端，一般指浏览器，浏览器可以通过 HTTP 协议向服务器请求数据。
 Server - 服务端，一般指 Web 服务器，可以接收客户端请求，并向客户端发送响应数据。
 Business - 业务层， 通过 Web 服务器处理应用程序，如与数据库交互，逻辑运算，调用外部程序等。
 Data - 数据层，一般由数据库组成。
 */

//以下是演示一个最基本的 HTTP 服务器架构(使用8081端口)

//1、载入相应模块
var http = require('http');
var fs = require('fs');
var url = require('url');

//2、创建服务器
http.createServer( function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            /* err返回如：
            { [Error: ENOENT: no such file or directory, open 'd:\xampp\htdocs\node\server\index1.html']
            errno: -4058,
                code: 'ENOENT',
                syscall: 'open',
                path: 'd:\\xampp\\htdocs\\node\\server\\index1.html' }
           */
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});
            // 输出请求的文件名
            console.log("请求的文件： " + pathname + " 已经接收到.");

            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(8081);

//运行server.js文件后、控制台会输出以下信息：Server running at http://127.0.0.1:8081/

console.log('Server running at http://127.0.0.1:8081/');
//3、接下来我们在该目录下创建一个 index.htm 文件，代码如下：
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


//4、接着我们在浏览器中打开地址：http://127.0.0.1:8081/index.html：
// 页面会显示：NodeJS Server : Hello World!
//控制台会显示：Request for /index.html received.


