/**
 * Created by KidSirZ4i on 2016/5/4.
 */
/*
 Path 模块
 提供了处理和转换文件路的工具。
 */

//加载path模块
var path = require("path");

// 格式化路径 规范化路径，注意'..' 和 '.'
console.log('格式化路径normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"
console.log('连接路径joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('转换为绝对路径resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('路径中文件的后缀名ext name : ' + path.extname('main.js'));

// 返回路径中的最后一部分。同 Unix 命令 bashname 类似。
console.log('路径最后一部分（目录下无文件） : ' + path.basename(__dirname));
console.log('路径最后一部分（目录下有文件） : ' + path.basename(__dirname+"/path.js"));

// 返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似
console.log('路径中文件夹的部分 : ' + path.dirname(__dirname));


// 平台的文件路径分隔符，'\\' 或 '/'
console.log('平台的文件路径分隔符sep : ' + path.sep);

// 平台的分隔符, ; or ':'
console.log('平台的分隔符delimiter : ' + path.delimiter);

// 提供上述 path 的方法，不过总是以 posix 兼容的方式交互
console.log('以 posix 兼容的方式交互posix : ' + path.posix);

// 提供上述 path 的方法，不过总是以 win32 兼容的方式交互
console.log('以 win32 兼容的方式交互win32 : ' + path.win32);

/*
 1	path.normalize(p)
 规范化路径，注意'..' 和 '.'。
 2	path.join([path1][, path2][, ...])
 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
 3	path.resolve([from ...], to)
 将 to 参数解析为绝对路径。
 4	path.isAbsolute(path)
 判断参数 path 是否是绝对路径。
 5	path.relative(from, to)
 用于将相对路径转为绝对路径。
 6	path.dirname(p)
 返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。
 7	path.basename(p[, ext])
 返回路径中的最后一部分。同 Unix 命令 bashname 类似。
 8	path.extname(p)
 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
 9	path.parse(pathString)
 返回路径字符串的对象。
 10	path.format(pathObject)
 从对象中返回路径字符串，和 path.parse 相反。
 */