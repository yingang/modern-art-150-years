import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
  bundler: viteBundler({}),

  base: "/modern-art-150-years/",

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "《现代艺术 150 年：一个未完成的故事》提及作品图集",
    }
  },

  theme: defaultTheme({
    repo: "yingang/modern-art-150-years",
    docsRepo: "yingang/modern-art-150-years",
    docsBranch: "main",
    docsDir: "docs",
    contributors: false,
    sidebarDepth: 2,
    locales: {
      '/': { // zh-CN
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaselectLanguageName: '选择语言',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
      }
    }
  })
};