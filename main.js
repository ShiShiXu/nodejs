/**
 * Created by KidSirZ4i on 2016/5/3.
 */

//main.js
var Hello = require(__dirname+'/hello');
hello = new Hello();
hello.setName(' Node.js 提供了exports 和 require 两个对象:其中 exports 是模块公开的接口，' +
    'require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。');
hello.sayHello();