(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(s,t,e){"use strict";e.r(t);var a=e(14),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"搭建自己的博客网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建自己的博客网站"}},[s._v("#")]),s._v(" 搭建自己的博客网站")]),s._v(" "),t("h2",{attrs:{id:"下载安装node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装node"}},[s._v("#")]),s._v(" 下载安装"),t("code",[s._v("node")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击打开node网站"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("https://nodejs.org/en/")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://nodejs.org/dist/v18.14.2/node-v18.14.2-x64.msi",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击下载"),t("OutboundLink")],1)]),s._v(" "),t("ul",[t("li",[s._v("安装略")]),s._v(" "),t("li",[s._v("一直"),t("code",[s._v("next")]),s._v("就齐活了")])]),s._v(" "),t("h2",{attrs:{id:"采用前端vuepress制作博客网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采用前端vuepress制作博客网站"}},[s._v("#")]),s._v(" 采用前端"),t("code",[s._v("vuepress")]),s._v("制作博客网站")]),s._v(" "),t("ul",[t("li",[s._v("打开vuepress中文网")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击打开"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("https://www.vuepress.cn/")])]),s._v(" "),t("p",[s._v("教程位置")]),s._v(" "),t("blockquote",[t("p",[s._v("https://www.vuepress.cn/guide/getting-started.html")])]),s._v(" "),t("h2",{attrs:{id:"搭建环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建环境"}},[s._v("#")]),s._v(" 搭建环境")]),s._v(" "),t("p",[s._v("第一步:创建一个WebBlog目录(名字可以自己起)")]),s._v(" "),t("p",[s._v("第二步:用命令进行配置")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" WebBlog "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终端进入你创建目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以利用vscode内置终端操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化你的目录 不加-y需要自己配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行完毕项目目录多出一个package.json文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" vuepress "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装vuepress ")]),s._v("\n\n")])])]),t("blockquote",[t("p",[s._v("npm下载可能失败 大概率网慢")])]),s._v(" "),t("h3",{attrs:{id:"npm配置淘宝镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm配置淘宝镜像源"}},[s._v("#")]),s._v(" npm配置淘宝镜像源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org/\n")])])]),t("blockquote",[t("p",[s._v("切换到淘宝后 再次执行 "),t("code",[s._v("npm install -D vuepress")])])]),s._v(" "),t("p",[s._v("第三步:"),t("code",[s._v("WebBlog")]),s._v("目录下创建"),t("code",[s._v("docs")]),s._v("目录")]),s._v(" "),t("blockquote",[t("p",[s._v("docs是系统名称 你所有的"),t("code",[s._v("Markdown")]),s._v("文档都是在这里放的")])]),s._v(" "),t("h2",{attrs:{id:"启动本地网站和打包应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动本地网站和打包应用"}},[s._v("#")]),s._v(" 启动本地网站和打包应用")]),s._v(" "),t("blockquote",[t("p",[s._v("打开项目目录下的 "),t("code",[s._v("package.json")]),s._v("文件")])]),s._v(" "),t("p",[s._v("原本样子")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("p",[s._v("改动后的样子")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("注意:小技巧 目录上方 "),t("code",[s._v("资源管理器")]),s._v("右边三个点 勾选npm")])]),s._v(" "),t("p",[s._v("由于版本更新node18版会导致错误 18.0以上需要更改配置为")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set NODE_OPTIONS=--openssl-legacy-provider  && vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"打包生成网站也需要修改一下命令配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包生成网站也需要修改一下命令配置"}},[s._v("#")]),s._v(" 打包生成网站也需要修改一下命令配置")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set NODE_OPTIONS=--openssl-legacy-provider  && vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set NODE_OPTIONS=--openssl-legacy-provider  && vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"对首页进行优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对首页进行优化"}},[s._v("#")]),s._v(" 对首页进行优化")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("---\nhome: true\nheroImage: /hero.png\nactionText: 起步 →\nactionLink: /guide/\nfeatures:\n- title: 简明优先\n  details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。\n- title: Vue 驱动\n  details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。\n- title: 性能高效\n  details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。\nfooter: MIT Licensed | Copyright © 2018-present Evan You\n---\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);