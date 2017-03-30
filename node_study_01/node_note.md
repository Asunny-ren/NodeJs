# NodeJs_study

### NPM包管理工具

    em: npm install express (本地安装)

        npm install express -g (全局安装)

    查看所有全局安装的模块 npm ls -g

    更新模块 npm update express

    搜索模块 npm search express

    卸载模块 npm uninstall express

#### npm help 查看npm命令

![npmCmd](https://github.com/Asunny-ren/NodeJs/blob/master/node_study_01/npmCmd.png)

#### package.json属性说明

* name - 包名

* version - 包的版本号

* description - 包的描述

* homepage - 包的官网url

* author - 包的作者姓名

* contributors - 包的其他贡献者姓名

* dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下

* repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上

* main - main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")

* keywords - 关键字

## node.js REPL(Read Eval Print Loop交互式解释器)表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。

* 读取

* 执行

* 打印

* 循环

### REPL 命令

* ctrl + c - 退出当前终端

* ctrl + c - 按下两次,退出node REPL

* ctrl + d - 退出node REPL

* 向上/向下键 - 查看输入的历史命令

* tab - 列出当前命令

* .help - 列出使用命令

* .break - 退出多行表达式

* .clear - 退出多行表达式

* .save filename - 保存当前的node REPL 会话到指定文件

* .load filename - 载入当前node REPL 会话的文件内容


## node.js回调函数（Node 所有 API 都支持回调函数）

## node.js事件循环

> node.js是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高

> node.js的每一个API都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。

> node.js基本上所有的事件机制都是用设计模式中观察者模式实现

> node.js 单线程类似进入一个while(true)循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数
