/**
 * Created by KidSirZ4i on 2016/5/4.
 */

//加载fs模块
var fs = require("fs");

console.log("查看 /text 目录");
fs.readdir(__dirname+"/test/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( "包含的文件："+file );
    });
});