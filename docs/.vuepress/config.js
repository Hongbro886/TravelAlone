import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/TravelAlone/',
  title: "一份独自出行的完全指南",
  description: "当一个未成年人想要肚子在中国大陆出行时，相信这篇文档一定能帮到你",
  head: [
    ['link', { rel: 'icon', href: '/TravelAlone/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/TravelAlone/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/TravelAlone/apple-touch-icon.png' }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text :"准备",
        children:[
          'Preparing/a.md',
          'Preparing/c.md',
          'Preparing/b.md',
          'Preparing/d.md'
        ]
      },
      {
        text :"行程中",
        children:[
          'OnGoing/a.md',

        ]
      }
    ]

  }),
})
