import MermaidPlugin from "vitepress-plugin-mermaid";

export default {
  title: '技术文档',
  description: '技术文档',
	lastUpdated: true,
	markdown: {
		theme: 'material-palenight',
		lineNumbers: true,
		config: MermaidPlugin,
	},
	themeConfig: {
		sidebar: [
      {
        text: 'TypeScript 常用语法',
        collapsible: true,
        items: [
          { text: '基本类型', link: '/typescript/1_type' },
          { text: '接口', link: '/typescript/2_interface' },
          { text: '类', link: '/typescript/3_class' },
          { text: '函数', link: '/typescript/4_function' },
          { text: '泛型', link: '/typescript/5_generic' },
          { text: '其他', link: '/typescript/6_other' },
        ]
      },
      {
        text: 'Vue3 文档',
				collapsible: true,
        items: [
          { text: '介绍', link: '/vue3/' },
          { text: 'SFC 语法规范', link: '/vue3/sfc' },
          { text: 'SFC 工具', link: '/vue3/sfc-tools' },
          { text: '单文件组件 setup', link: '/vue3/sfc-setup' },
          { text: '单文件组件样式特性', link: '/vue3/sfc-style' },
        ]
      },
      {
        text: 'Pinia 文档',
				collapsible: true,
        items: [
          { text: '介绍', link: '/pinia/' },
          { text: 'Store', link: '/pinia/store' },
        ]
      },
      {
        text: 'Mermaid 文档',
				collapsible: true,
        items: [
          { text: '介绍', link: '/mermaid/' },
          { text: '流程图样式', link: '/mermaid/flowchart' },
          { text: '常用样式案例', link: '/mermaid/examples' },
        ]
      }
    ],
		
		footer: {
			license: {
				text: 'MIT License',
				link: 'https://opensource.org/licenses/MIT'
			},
			copyright: `Copyright © 2022-${new Date().getFullYear()} Richard Wang`
		},
		lastUpdatedText: 'Updated Date',
		docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
	},
}