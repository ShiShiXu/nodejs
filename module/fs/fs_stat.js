/**
 * Created by KidSirZ4i on 2016/5/4.
 */

//加载fs模块
var fs = require("fs");


//获取文件信息
fs.stat(__dirname+'/fs_text.txt', function (err, stats) {
    console.log("------------------------------------------------------------获取文件信息 分割线---");
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("读取文件信息成功！");

    // 检测文件类型
    console.log("开始检测文件类型");
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
    console.log("是否为块设备(isBlockDevice) ? " + stats.isBlockDevice());
    console.log("是否为字符设备(isCharacterDevice) ? " + stats.isCharacterDevice());
    console.log("是否为软链接(isSymbolicLink) ? " + stats.isSymbolicLink());
    console.log("是否为FIFO(isFIFO) ? " + stats.isFIFO());
    console.log("是否为Socket (isSocket) ? " + stats.isSocket());
});