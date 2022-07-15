import MermaidPlugin from "vitepress-plugin-mermaid";

export default {
  title: 'vue文档',
  description: 'vue3和pinia学习文档',
	lastUpdated: true,
	markdown: {
		theme: 'material-palenight',
		lineNumbers: true,
		config: MermaidPlugin,
	},
	themeConfig: {
		sidebar: [
      {
        text: 'Vue3 文档',
				collapsible: true,
        items: [
          { text: '介绍', link: '/vue3/' },
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