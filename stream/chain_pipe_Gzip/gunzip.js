/**
 * Created by KidSirZ4i on 2016/5/5.
 */

//加载相应模块
var fs = require("fs");
var zlib = require('zlib');

// 解压 gzip.txt.gz 文件为 gunzip.txt
fs.createReadStream(__dirname+'/gzip.txt.gz')
    .pipe(zlib.createGunzip()).pipe(fs.createWriteStream(__dirname+'/gunzip.txt'));

console.log("文件解压完成。");

/**
 执行完以上操作后，我们可以看到当前目录下gzip.txt.gz 变成了 gunzip.txt 。
 */