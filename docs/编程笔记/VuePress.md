# VuePress 源码分析
## Vue 驱动的静态网站生成器
VuePress 是一个以 Markdown 为中心的项目结构，将 Markdown 文件转化为具有交互性和可定制型的静态网站。用户可以在 Markdown 中使用 Vue 组件，也可以使用 Vue 来自定义主题。同时，VuePress 提供了插件系统，可以添加特点的功能，如搜索、评论等。 尽管 VuePress 生成的是静态文件，但在服务端渲染 (SSR) 方面也有涉及。这使得搜索引擎爬虫可以更好地理解文档内容，同时也提供了一些在客户端渲染中难以实现的优化。

## VuePress 核心库

- [@vuepress/core](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/core)：包含 dev、build 的核心实现和 Plugin API；