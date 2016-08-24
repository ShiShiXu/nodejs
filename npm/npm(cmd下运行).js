/**
 * Created by KidSirZ4i on 2016/5/4.
 */

/*
//npm 版本
npm -v


//windows下npm 升级
npm install npm -g


//npm 安装 Node.js 模块语法格式如下,例express：
npm install express


//npm 的包安装分为本地安装（local）、全局安装（global_object）两种，从敲的命令行来看，差别只是有没有-g而已，比如
npm install express                     //# 本地安装
npm install express -g                  //# 全局安装


 //如果出现以下错误：
 npm err! Error: connect ECONNREFUSED 127.0.0.1:8087
 //解决办法为：
 npm config set proxy null

 //本地安装
 //1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
 //2. 可以通过 require() 来引入本地安装的包。
 //全局安装
// 1. 将安装包放在 /usr/local 下。
 //2. 可以直接在命令行里使用。
// 3. 不能通过 require() 来引入本地安装的包。

//全局安装express后 (npm install express -g)
 //你可以使用以下命令来查看所有全局安装的模块：
 npm ls -g


 //卸载模块
 //我们可以使用以下命令来卸载 Node.js 模块。
 npm uninstall express


 //搜索模块
 //使用以下来搜索模块：
 npm search express


 //创建package.json文件
 //创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
 npm init

         This utility will walk you through creating a package.json file.
         It only covers the most common items, and tries to guess sensible defaults.

         See `npm help json` for definitive documentation on these fields
         and exactly what they do.

         Use `npm install <pkg> --save` afterwards to install a package and
         save it as a dependency in the package.json file.

         Press ^C at any time to quit.
         name: (node_modules) kidsir                   # 模块名
         version: (1.0.0)
         description: Node.js 测试模块(kidsir.com)  # 描述
         entry point: (index.js)
         test command: make test
         git repository: https://github.com/XXX/XXXX.git  # Github 地址
         keywords:
         author:
         license: (ISC)
         About to write to ……/node_modules/package.json:      # 生成地址

         {
         "name": "kidsir",
         "version": "1.0.0",
         "description": "Node.js 测试模块(kidsir.com)",
         ……
         }


         Is this ok? (yes) yes

 //以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。


 //接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：
 npm adduser
     Username: K.S
     Password: *****
     Email: (this IS public) XXXX@qq.com


 //接下来我们就用以下命令来发布模块：
 npm publish







*/









