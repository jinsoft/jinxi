# jinxi
jinxi theme, ported to Hugo.

预览效果:[奔跑吧代码](https://blog.ainiok.com)

一款非常简洁、性能高的Hugo主题，适配不同的设备（PC，Mobile等）。

## 下载安装

```bash
cd <YOUR Bolg Root Dir>
git clone https://github.com/jinsoft/jinxi themes/jinxi
```

## 配置

#### 应用主题

```toml
theme = "jinxi"
```

#### 基本配置

```toml
baseURL = "https://blog.ainiok.com"
languageCode = "zh-CN"
title = "奔跑吧代码"
theme = "snails"

[author]
  name = "奔跑吧代码"

[params]
  author = "奔跑吧代码"
  subtitle = "专注于PHP、Go语言(golang)、软件架构"
  keywords = "golang,go语言,go语言笔记,博客,项目管理,python,软件架构,公众号,小程序"
  description = "专注于IT互联网，包括但不限于Go语言(golang)、Python、软件架构等"
```

基本配置大家都比较熟悉，这是我的博客的配置，仅供参考。

#### 自定义菜单

```toml
[menu]

  [[menu.main]]
    identifier = "books"
    name = "新书"
    url = "/books/"
    weight = 2

  [[menu.main]]
    identifier = "archives"
    name = "归档"
    url = "/archives/"
    weight = 3

  [[menu.main]]
    identifier = "about"
    name = "关于"
    url = "/about/"
    weight = 4
```

`identifier`标志符必须是唯一的，不能重复；`weight`用于排序，值越小越靠前。

####  文章目录（大纲）

该主题支持文章目录（大纲）,大纲是通过`h1~h7`标题自动生成，在MD文件里就是`##`这类标题的标记，这里建议最多使用两层文章目录，而且最好是从`h2`开始，便于SEO优化。
如果要开启一篇文章的文章目录，只需要在`Front Matter` 添加`toc=true`即可，默认是不开启文章目录的。

```toml
toc = true
```
当左侧空白空间宽度超过100px时，则显示悬浮目录。具体效果参考[https://kkua.github.io/post/java-util-code-snippet/](https://kkua.github.io/post/java-util-code-snippet/)

#### 友情链接

```toml
[[params.links]]
  title = "腾讯"
  name = "腾讯"
  url = "https://www.qq.com"
[[params.links]]
  title = "aliyun"
  name = "阿里云"
  url = "https://www.aliyun.com"
```

`params.links`是一个数组，所以我们可以自定义很多友情链接。`name`表示显示的链接文本，`title`表示鼠标悬停在友情链接时，显示的文本。

#### 广告模块

广告模块在侧边栏，可以灵活配置，让博主可以放一些超链接广告、或者图片链接广告。

```toml
[[params.ads]]
  title = "领取￥2000阿里云产品通用代金券"
  url = "https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=39fvyqhh"
  img = "https://img.alicdn.com/tfs/TB1Ak92euH2gK0jSZFEXXcqMpXa-440-255.png"
[[params.ads]]
  title = ""
  url = "https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=39fvyqhh"
  img = "https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg"
```

`params.ads`是一个数组，所以我们可以自定义很多广告。如果`img`存在，则优先使用图片广告,`title`表示鼠标悬停在广告链接时，显示的文本。

具体效果参考 [https://blog.ainiok.com/](https://blog.ainiok.com/)


#### 文章归档支持

Hugo默认是不支持生成归档文件的，需要自己实现。该主题已经实现了文章归档，只需要在新建`content/archives/index.md`文件，文件内容为：

```md
title: "归档"
description: Gopher
type: archives
```

`title`和`description`都可以换成你自己的，但是`type`必须是`archives`。

`content/archives/index.md`表示在`content/archives/`目录下的`index.md`文件

#### Disqus

该主题支持Disqus评论，如果要启用Disqus，可以在`config.toml`里添加如下配置即可.

```toml
disqusShortname = "yourdiscussshortname"
```

替换成你自己的Disqus名字即可。

#### 自定义文章摘要

该主题采用了Hugo内置的摘要支持，大家可以通过`<!--more-->`自定义自己的摘要，也可以使用自动摘要，使用自动摘要时，可以在`config.toml`中设置摘要的长度

```toml
# 默认是70
summaryLength = 140 
```

#### 开启版权声明

该主题支持开启版权声明，如果要启用版权声明，可以在`config.toml`里添加如下配置即可。

```toml
[params.cc]
    name = "知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议"
    link = "https://creativecommons.org/licenses/by-nc-nd/4.0/"
```

其中`name`和`link`可以换成自己使用的版权声明协议和链接

#### utteranc

该主题支持utteranc评论，这是一个基于Github  Issue的评论系统，使用方便，不用翻墙即可评论。
安装 https://github.com/apps/utterances  ,配置选择的 github 仓库，，仓库名字要一致。
可以在`config.toml`里添加如下配置即可.更多详见 [https://utteranc.es](https://utteranc.es)

```toml
[params.utteranc]
    enable = true
    repo = ""    # 存储评论的Repo，格式为 owner/repo
    issueTerm = "pathname"  #表示你选择以那种方式让github issue的评论和你的文章关联。
    theme = "github-light" # 样式主题，有github-light和github-dark两种
```
对于以上issueTerm可以选择的配置有
1. `pathname` 以路径的方式，推荐选项，这样你换域名的时候就不用担心评论找不到了
2. `url` 全链接URL路径的方式。
3. `title` 按页面title标题的方式。

其他还有几个不常用，这里就不再赘述了。

#### 不蒜子页面计数器支持

该主题支持不蒜子这个极简的页面计数器支持，如果要启用不蒜子，可以在`config.toml`里添加如下配置即可.

```toml
[params]
  busuanzi = true
```

#### 自定义CSS&JS

```
[params]
  # 这里我存放在了主题的static文件夹里，根目录的似乎也可以
  customCSS = ['douban.css', 'other.css']
  # if ['custom.css'], load '/static/css/custom.css' file
  customJS = ['douban.js']
  # if ['custom.js'], load '/static/js/custom.js' file
```

## 贡献

欢迎大家贡献，不限于代码、Issue，功能特性，想法等等，期待看到你的PR或者ISSUE。