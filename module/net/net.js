/**
 * Created by KidSirZ4i on 2016/5/4.
 */
/*
 Net 模块
 用于底层的网络通信。提供了服务端和客户端的的操作。
 */

//加载net模块
var net = require('net');

var server = net.createServer(function(connection) {
    console.log('client connected');
    connection.on('end', function() {
        console.log('客户端关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});
server.listen(8080, function() {
    console.log('server is listening');
});
