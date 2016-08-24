/**
 * Created by KidSirZ4i on 2016/5/4.
 */
/*
 OS 模块
 提供基本的系统操作函数。
 */

//加载OS模块
var os = require("os");

// 返回操作系统的默认临时文件夹
console.log('操作系统的默认临时文件夹tmpdir : ' + os.tmpdir());

// CPU 的字节序
console.log('CPU 的字节序endianness : ' + os.endianness());

// 返回操作系统的主机名
console.log('操作系统的主机名hostname : ' + os.hostname());

// 操作系统名
console.log('操作系统名type : ' + os.type());

// 返回操作系统名
console.log('操作系统平台platform : ' + os.platform());

// 操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"
console.log('操作系统 CPU 架构arch : ' + os.arch());

// 操作系统的发行版本
console.log('操作系统的发行版本release : ' + os.release());

// 操作系统运行的时间，以秒为单位
console.log('操作系统运行的时间uptime : ' + os.uptime());

// 返回一个包含 1、5、15 分钟平均负载的数组
console.log('包含 1、5、15 分钟平均负载loadavg : ' + os.loadavg());

// 系统内存总量
console.log('系统内存总量total memory : ' + os.totalmem() + " bytes");

// 操作系统空闲内存量
console.log('操作系统空闲内存量free memory : ' + os.freemem() + " bytes");

// 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）
console.log('安装硬件信息cpus : ' + os.cpus());

// 操作系统空闲内存量
console.log('获得网络接口列表networkInterfaces : ' + 	os.networkInterfaces());


