/**
 * Created by KidSirZ4i on 2016/5/4.
 */

//加载fs模块
var fs = require("fs");

//目录里暂时没有这个文件  所以会报错 no such file or directory, unlink ...
console.log("准备删除文件......");
fs.unlink(__dirname+'/deleted_text.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
});