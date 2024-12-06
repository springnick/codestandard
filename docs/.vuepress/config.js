import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: '/docs/',
  title: 'Thaicloud 开发规范',
  description: '本文档用来规定Thaicloud 各项目的编码规范, 标准 以及最佳实践， 编码规范主要来自业界开发约定俗成以及项目自身实际开发制定的一些规则， 目的是让项目成员开发出统一的， 易于维护的，高质量代码。 同时为代码审查提供依据。',

  theme: defaultTheme({
    logo: '/images/logo.png',
    lastUpdated: false,
    sidebarDepth: 4,
    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
