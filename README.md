实现的基本功能
1、多首页              完成 见多入口说明
2、跨页面跳转数据传递    完成 有一定限制，数据传递借用history.state完成，跨页面跳解决依赖keepalive数组
3、国际化 i18n+vant    完成 语言是按需加载的 （并且代码里面对于缺少的语言-使用了有道翻译对模版进行翻译动态生成，实际使用请 自行修改）
4、vant的theme定制切换  完成 其他主题可以切换vant时自行设置
5、动画                完成 常用的css动画框架
6、统计图 echarts      完成 按需加载及主题切换。只加入了bar、line和pie作为演示，其他自行添加很方便
7、svg按需加载         完成 缺陷是文件目录结构有要求，不能放在asset目录 
8、虚拟列表            完成 使用的是第三方源码 DynamicScroller
9、vw-vh              完成


内置了mock dev和preview模式都可以使用
build包分析结果：最大的chunk size：render：650k左右，gzip压缩后：160k

其他说明具体见说明目录下的各项说明
