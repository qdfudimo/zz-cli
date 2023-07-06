 **commander**
 : tj大神开发的可以对命令行做解析的库，可以解析我们在命令行输入的如jkc-cli -v或jkc-cli init <projectName>等命令

**download-git-repo**
: 下载git仓库代码的库。

 **#! /usr/bin/env**  node是执行这个文件时使用node方式执行

**program.version**是解析别人输入jkc-cli -v时输出的内容: 1.0.0

**command**解析输入jkc-cli init vue my-vue-project，init后面两个参数，一个模板名，一个项目名

action是根据上面的两个参数做相应的逻辑处理，判断模板名，去相应的git仓库下载代码。download的第一个参数下载地址不是填我们git的网址，按照我的格式填就行，第二个参数是生成的项目名，第三个参数是错误的回调执行函数。
