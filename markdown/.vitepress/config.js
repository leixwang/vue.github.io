export default {
  title: 'Vue3',
  description: 'vue3和pinia学习文档',
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
          { text: 'Item D', link: '/item-d' },
        ]
      }
    ],
	footer: {
		license: {
			text: 'MIT License',
			link: 'https://opensource.org/licenses/MIT'
		},
		copyright: `Copyright © 2022-${new Date().getFullYear()} Richard Wang`
	}
},

}