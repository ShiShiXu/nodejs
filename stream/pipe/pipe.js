/**
 * Created by KidSirZ4i on 2016/5/5.
 */

//加载fs模块
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream(__dirname+'/from.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream(__dirname+'/to.txt');

// 管道读写操作
// 读取 from.txt 文件内容，并将内容写入到 to.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");



//管道流  (管道流其实就是从一个文件读出然后写入另一个文件，实质就是复制)
//管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
/*
 我们把文件比作装水的桶，而水就是文件里的内容。
 我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。
 以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。
 设置 input.txt 文件内容如下：
 */