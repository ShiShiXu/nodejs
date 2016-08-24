/**
 * Created by KidSirZ4i on 2016/5/5.
 */

/* 获取GET请求内容
 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
 node.js中url模块中的parse函数提供了这个功能。
 */

//加载相应模块
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

//然后复制以下网址从浏览器打开：http://localhost:3000/user?name=allen&email=allen123456@qq.com
//可以看到返回信息：
/*
     Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: '?name=allen&email=allen123456@qq.com',
     query: { name: 'allen', email: 'allen123456@qq.com' },
     pathname: '/user',
     path: '/user?name=allen&email=allen123456@qq.com',
     href: '/user?name=allen&email=allen123456@qq.com' }
 */

