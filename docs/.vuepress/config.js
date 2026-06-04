import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: "一份独自出行的完全指南",
  description: "当一个未成年人想要肚子在中国大陆出行时，相信这篇文档一定能帮到你",
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text :"前语",
        children:[
          'PrePare/a.md',
          'PrePare/b.md'
        ]
      },
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
