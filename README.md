# 《现代艺术 150 年：一个未完成的故事》提及作品图集

<img src="./docs/figures/cover.jpg" style="width: 40%" />

很有意思的一本关于现代艺术的书（[豆瓣介绍](https://book.douban.com/subject/26854318/)），也早有热心网友将书中提及的作品收集整理汇总并分享到类似于有道云笔记等平台。

但原共享链接不知何故已不能访问，而且原来将所有图片在一个页面进行集中展示也不是很方便在阅读过程中进行参照，故将其按章节搬运至本项目，除本地阅读（方法见后），也可直接在我的 [GitHub Pages](https://yingang.github.io/modern-art-150-years/) 上在线阅读。

## 本地阅读

本项目基于 VuePress 进行开发，以提供比 Github Markdown 更佳的阅读体验

依赖于 [`node.js`][nodejs]、[`yarn`][yarn]、[`vuepress`][vuepress] 等环境

[nodejs]: https://nodejs.cn/
[yarn]: https://yarnpkg.com/
[vuepress]: https://v2.vuepress.vuejs.org/zh/

```sh
git clone https://github.com/yingang/modern-art-150-years.git
cd modern-art-150-years/
yarn install    # 安装 VuePress@next
yarn dev        # 编译并打开网页预览
```