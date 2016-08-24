//hello.js 
function Hello() {
    var name;
    this.setName = function(myName) {
        name = myName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};

module.exports = Hello;
console.log('hello.js暴露的内容：已经将Hello暴露出去了，请运行main.js ');


/*
 Node.js 提供了exports 和 require 两个对象:
 其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
 */