/**
 * Created by KidSirZ4i on 2016/5/4.
 */

//加载fs模块
var fs = require("fs");

console.log("准备清空目录里面的两个文件 /test");
fs.unlink(__dirname+"/test/test1.txt", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除test1.txt成功！");
});
fs.unlink(__dirname+"/test/test2.txt", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件test2.txt删除成功！");
});

//同步删除test文件夹
// 删除非空文件夹要先删除里面的文件，所以用异步会报错，同步的方法会等待文件删除完毕再执行，所以此处用了同步
fs.rmdir(__dirname+"/test");


/* 异步删除文件夹
fs.rmdir(__dirname+"/test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("删除成功！");
    fs.readdir(__dirname+"/test",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });

    });
});
*/