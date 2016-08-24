/**
 * Created by KidSirZ4i on 2016/5/4.
 */

//加载fs模块
var fs = require("fs");

// 异步写文件
//fs.open(path, flags[, mode], callback)
fs.writeFile(__dirname+'/write.txt', '想把我唱给你听，趁现在年少如花！',  function(err) {
    console.log("------------------------------------------------------------异步写文件 分割线---");
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("读取写入的数据！");
    fs.readFile(__dirname+'/write.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取刚刚写入的文件数据: " + data.toString());
    });
});