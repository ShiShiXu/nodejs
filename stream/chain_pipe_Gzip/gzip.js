/**
 * Created by KidSirZ4i on 2016/5/5.
 */

/* 链式是通过连接输出流到另外一个流、并创建多个流操作链的机制。
 链式流一般用于管道操作。
 接下来我们就是用管道和链式来压缩和解压文件。
 创建 gzip.js 文件, 代码如下：
 */


//加载相应模块
var fs = require("fs");
var zlib = require('zlib');

// 压缩 gzip.txt 文件为 gzip.txt.gz
fs.createReadStream(__dirname+'/gzip.txt')
    .pipe(zlib.createGzip()).pipe(fs.createWriteStream(__dirname+'/gzip.txt.gz'));

console.log("文件压缩完成。");

/**
 执行完以上操作后，我们可以看到当前目录下生成了 gzip.txt 的压缩文件 gzip.txt.gz。
 */
