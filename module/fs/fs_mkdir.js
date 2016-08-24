/**
 * Created by KidSirZ4i on 2016/5/4.
 */

//加载fs模块
var fs = require("fs");

//创建目录
fs.mkdir(__dirname+"/test/",function(err){
    console.log("创建目录/test/");
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");

    fs.writeFile(__dirname+'/test/test1.txt', '如果有多一张船票！',  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("顺便写了第一个test1.txt文件！");
    });

    fs.writeFile(__dirname+'/test/test2.txt', '你会不会半价！',  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("顺便写了第二个test2.txt文件！");
    });




});

