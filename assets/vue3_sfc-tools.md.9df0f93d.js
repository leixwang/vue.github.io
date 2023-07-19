import{_ as e,o as a,c as r,U as t}from"./chunks/framework.92bf3306.js";const f=JSON.parse('{"title":"SFC 工具","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/sfc-tools.md","filePath":"vue3/sfc-tools.md","lastUpdated":1689738962000}'),l={name:"vue3/sfc-tools.md"},s=t('<h1 id="sfc-工具" tabindex="-1">SFC 工具 <a class="header-anchor" href="#sfc-工具" aria-label="Permalink to &quot;SFC 工具&quot;">​</a></h1><h2 id="在线演练场" tabindex="-1">在线演练场 <a class="header-anchor" href="#在线演练场" aria-label="Permalink to &quot;在线演练场&quot;">​</a></h2><p>你不需要在你的机器上安装任何东西来尝试 Vue 单文件。这里有很多在线演练场允许你在浏览器中运行：</p><ul><li><a href="https://sfc.vuejs.org" target="_blank" rel="noreferrer">Vue SFC Playground</a> (官方，基于最新的提交)</li><li><a href="https://play.vueuse.org" target="_blank" rel="noreferrer">VueUse Playground</a></li><li><a href="https://codesandbox.io/s/vue-3" target="_blank" rel="noreferrer">Vue on CodeSandbox</a></li><li><a href="https://replit.com/@templates/VueJS-with-Vite" target="_blank" rel="noreferrer">Vue on Repl.it</a></li><li><a href="https://codepen.io/pen/editor/vue" target="_blank" rel="noreferrer">Vue on Codepen</a></li><li><a href="https://stackblitz.com/fork/vue" target="_blank" rel="noreferrer">Vue on StackBlitz</a></li><li><a href="https://components.studio/create/vue3" target="_blank" rel="noreferrer">Vue on Components.studio</a></li><li><a href="https://webcomponents.dev/create/cevue" target="_blank" rel="noreferrer">Vue on WebComponents.dev</a></li></ul><p>在报告问题时也建议通过这些在线演练场来提供复现。</p><h2 id="项目脚手架" tabindex="-1">项目脚手架 <a class="header-anchor" href="#项目脚手架" aria-label="Permalink to &quot;项目脚手架&quot;">​</a></h2><h3 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h3><p><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> 是一个轻量级的快速构建工具，它对 Vue 单文件提供最优支持。它由尤雨溪创建，尤雨溪同时也是 Vue 本身的作者。如果要运行 Vite + Vue：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后选择 Vue 模板并按照说明操作。</p><ul><li>如果要了解更多 Vite 信息，请参阅 <a href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">Vite 文档</a>。</li><li>如果要在 Vite 项目中配置 Vue 的具体行为，比如向 Vue 的编译器传递选项，请查看 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme" target="_blank" rel="noreferrer">@vitejs/plugin-vue 文档</a>。</li></ul><p><a href="https://sfc.vuejs.org/" target="_blank" rel="noreferrer">单文件演练场</a> 也支持下载 Vite 项目的文件。</p><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-label="Permalink to &quot;Vue CLI&quot;">​</a></h3><p><a href="https://cli.vuejs.org/" target="_blank" rel="noreferrer">Vue CLI</a> 是 Vue 官方基于 webpack 的构建工具。可以通过 Vue CLI 进行使用：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vue/cli</span></span>\n<span class="line"><span style="color:#6F42C1;">vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello-vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vue/cli</span></span>\n<span class="line"><span style="color:#6F42C1;">vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello-vue</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>如果要了解更多 Vue CLI，请查看 <a href="https://cli.vuejs.org/guide/installation.html" target="_blank" rel="noreferrer">Vue CLI 文档</a>。</li></ul><h3 id="vite-还是-vue-cli" tabindex="-1">Vite 还是 Vue CLI？ <a class="header-anchor" href="#vite-还是-vue-cli" aria-label="Permalink to &quot;Vite 还是 Vue CLI？&quot;">​</a></h3><p>鉴于 Vite 在开发中服务的启动和 HMR 更新的性能方面提供了更为卓越的开发体验，因此我们推荐你使用 Vite 来开始新的项目。(<a href="https://vitejs.dev/guide/why.html" target="_blank" rel="noreferrer">详情</a>)。如果你依赖某个特定的 webpack 功能（如 Module Federation）那么建议你使用 Vue CLI。</p><p>如果你是 <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a> 用户，你可以安全地使用 Vite，因为 Vite 使用了 Rollup 进行生产构建，支持并兼容 Rollup 插件系统。<a href="https://twitter.com/lukastaegert/status/1412119729431584774" target="_blank" rel="noreferrer">甚至 Rollup 的维护者也推荐使用 Vite 来进行基于 Rollup 的 Web 开发</a>。</p><h2 id="ide-支持" tabindex="-1">IDE 支持 <a class="header-anchor" href="#ide-支持" aria-label="Permalink to &quot;IDE 支持&quot;">​</a></h2><p>推荐的 IDE 配置是 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noreferrer">Volar</a> 扩展。Volar 为模板表达式、组件 prop，甚至是插槽验证提供了语法高亮和智能提示。我们强烈推荐这种设置，特别是如果你也在使用 TypeScript。</p><p><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noreferrer">WebStorm</a> 也对 Vue 单文件提供了不错的支持。请注意，到目前为止它对 <code>&lt;script setup&gt;</code> 的支持仍然是<a href="https://youtrack.jetbrains.com/issue/WEB-49000" target="_blank" rel="noreferrer">进行中</a>。</p><p>大多数其他编辑器都有社区创建的 Vue 语法高亮功能，但缺乏同样水平的代码智能提示。从长远来看，我们确实希望通过 <a href="https://microsoft.github.io/language-server-protocol/" target="_blank" rel="noreferrer">Language Service Protocol</a> 来扩大编辑器的支持范围，因为 Volar 的核心逻辑是用标准语言服务的方式实现的。</p><h2 id="测试支持" tabindex="-1">测试支持 <a class="header-anchor" href="#测试支持" aria-label="Permalink to &quot;测试支持&quot;">​</a></h2><ul><li>如果使用 Vite，我们推荐使用 <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">Cypress</a> 进行单元测试和 e2e 测试。Vue 单文件的单元测试可以使用 <a href="https://www.cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner/" target="_blank" rel="noreferrer">Cypress Component Test Runner</a> 来完成。</li><li>Vue CLI 提供 <a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a> 和 <a href="https://mochajs.org/" target="_blank" rel="noreferrer">Mocha</a> 集成。</li><li>如果你要手动配置 Jest 来和 Vue 单文件一起使用，请查看 <a href="https://github.com/vuejs/vue-jest" target="_blank" rel="noreferrer">vue-jest</a>，这是官方为 Vue 单文件提供的 Jest 转换工具。</li></ul><h2 id="自定义块集成" tabindex="-1">自定义块集成 <a class="header-anchor" href="#自定义块集成" aria-label="Permalink to &quot;自定义块集成&quot;">​</a></h2><p>自定义块 (custom block) 会被编译进同一个 Vue 文件，产生不同请求查询参数。这取决于底层构建工具如何处理这些导入请求。</p><ul><li><p>如果使用 Vite，应该使用一个自定义的 Vite 插件来把匹配的自定义块转为可执行的 JavaScript。[<a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-transforming-custom-blocks" target="_blank" rel="noreferrer">例子</a>]</p></li><li><p>如果使用 Vue CLI 或者普通的 webpack 配置，应该配置一个 webpack loader 来转换匹配到的自定义块。[<a href="https://vue-loader.vuejs.org/guide/custom-blocks.html#custom-blocks" target="_blank" rel="noreferrer">例子</a>]</p></li></ul><h2 id="底层工具" tabindex="-1">底层工具 <a class="header-anchor" href="#底层工具" aria-label="Permalink to &quot;底层工具&quot;">​</a></h2><h3 id="vue-compiler-sfc" tabindex="-1"><code>@vue/compiler-sfc</code> <a class="header-anchor" href="#vue-compiler-sfc" aria-label="Permalink to &quot;`@vue/compiler-sfc`&quot;">​</a></h3><ul><li><a href="https://github.com/vuejs/vue-next/tree/master/packages/compiler-sfc" target="_blank" rel="noreferrer">文档</a></li></ul><p>这个包是 Vue 核心仓库的一部分，始终和当前 <code>vue</code> 包保持相同的版本。通常情况下，它将被列为项目中 <code>vue</code> 的同级依赖。为了确保不出问题，应该始终和 <code>vue</code> 的版本保持同步：也就是说当你升级 <code>vue</code> 版本时候，应该同时升级 <code>@vue/compiler-sfc</code> 来保持一致。</p><p>这个包本身提供了处理 Vue 单文件的底层工具，只对库作者需要对单文件进行支持时候有意义。</p><h3 id="vitejs-plugin-vue" tabindex="-1"><code>@vitejs/plugin-vue</code> <a class="header-anchor" href="#vitejs-plugin-vue" aria-label="Permalink to &quot;`@vitejs/plugin-vue`&quot;">​</a></h3><ul><li><a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue" target="_blank" rel="noreferrer">文档</a></li></ul><p>官方插件可以在 Vite 中提供对 Vue 单文件提供支持。</p><h3 id="vue-loader" tabindex="-1"><code>vue-loader</code> <a class="header-anchor" href="#vue-loader" aria-label="Permalink to &quot;`vue-loader`&quot;">​</a></h3><ul><li><a href="https://vue-loader.vuejs.org/" target="_blank" rel="noreferrer">文档</a></li></ul><p>在 webpack 中提供官方 loader 来支持 Vue 单文件。如果你正在使用 Vue CLI 可以参阅 <a href="https://cli.vuejs.org/zh/guide/webpack.html#%E4%BF%AE%E6%94%B9-loader-%E9%80%89%E9%A1%B9" target="_blank" rel="noreferrer">在 Vue CLI 中修改 <code>vue-loader</code> 选项</a>。</p>',39),o=[s];function n(i,p,c,u,h,d){return a(),r("div",null,o)}const v=e(l,[["render",n]]);export{f as __pageData,v as default};