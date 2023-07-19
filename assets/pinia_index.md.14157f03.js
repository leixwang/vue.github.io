import{_ as s,o as a,c as n,U as p}from"./chunks/framework.92bf3306.js";const E=JSON.parse('{"title":"Pinia 介绍","description":"","frontmatter":{},"headers":[],"relativePath":"pinia/index.md","filePath":"pinia/index.md","lastUpdated":1689738962000}'),l={name:"pinia/index.md"},e=p(`<h1 id="pinia-介绍" tabindex="-1">Pinia 介绍 <a class="header-anchor" href="#pinia-介绍" aria-label="Permalink to &quot;Pinia 介绍&quot;">​</a></h1><p><strong>Pinia</strong>最初是在2019年11月左右使用<code>Composition API</code>重新设计<code>Vue Store</code>的一个试验。从那时起，最初的原则仍然相同，但<code>Pinia</code>同时适用于<code>Vue 2</code>和<code>Vue 3</code>，并且不要求您使用<code>Composition API</code>。除了安装和<code>SSR</code>之外，两者的<code>API</code>都是相同的，这些文档针对<code>Vue 3</code>，并在必要时提供有关<code>Vue 2</code>的注释，以便<code>Vue 2</code>和<code>Vue 3</code>的用户都可以阅读！</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>使用 <code>npm</code> 和 <code>yarn</code> 都可以进行安装, 可以选择一个你最熟悉的方式去安装.</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pinia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pinia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者使用 npm</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pinia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pinia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>This is a tip</p></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// Highlighted</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">\`Highlighted!</span></span>
<span class="line"><span style="color:#032F62;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#032F62;">      but this and the next 2 are.\`</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      motd: </span><span style="color:#032F62;">&#39;VitePress is awesome&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lorem: </span><span style="color:#032F62;">&#39;ipsum&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// Highlighted</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">\`Highlighted!</span></span>
<span class="line"><span style="color:#032F62;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#032F62;">      but this and the next 2 are.\`</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      motd: </span><span style="color:#032F62;">&#39;VitePress is awesome&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lorem: </span><span style="color:#032F62;">&#39;ipsum&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="引用pinia" tabindex="-1">引用<code>Pinia</code> <a class="header-anchor" href="#引用pinia" aria-label="Permalink to &quot;引用\`Pinia\`&quot;">​</a></h2><p>将<code>Pinia</code>进入到<code>vue3</code>项目中. 修改<code>main.js</code>文件. 组件工<code>API</code>的方式将其引入到项目中.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPinia } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">createPinia</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPinia } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">createPinia</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,12),o=[e];function c(t,r,i,d,y,h){return a(),n("div",null,o)}const b=s(l,[["render",c]]);export{E as __pageData,b as default};
