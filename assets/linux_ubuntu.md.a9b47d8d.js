import{_ as s,o as n,c as a,U as p}from"./chunks/framework.92bf3306.js";const l="/images/linux/1.png",e="/images/linux/2.png",o="/images/linux/3.png",c="/images/linux/4.png",r="/images/linux/5.png",t="/images/linux/6.png",y="/images/linux/7.png",i="/images/linux/8.png",C="/images/linux/9.png",D=JSON.parse('{"title":"Ubuntu 服务器优化","description":"","frontmatter":{},"headers":[],"relativePath":"linux/ubuntu.md","filePath":"linux/ubuntu.md","lastUpdated":1689738962000}'),m={name:"linux/ubuntu.md"},b=p(`<h1 id="ubuntu-服务器优化" tabindex="-1">Ubuntu 服务器优化 <a class="header-anchor" href="#ubuntu-服务器优化" aria-label="Permalink to &quot;Ubuntu 服务器优化&quot;">​</a></h1><h2 id="内核优化提高并发" tabindex="-1">内核优化提高并发 <a class="header-anchor" href="#内核优化提高并发" aria-label="Permalink to &quot;内核优化提高并发&quot;">​</a></h2><h3 id="设置文件打开句柄数" tabindex="-1">设置文件打开句柄数 <a class="header-anchor" href="#设置文件打开句柄数" aria-label="Permalink to &quot;设置文件打开句柄数&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看系统默认的值</span></span>
<span class="line"><span style="color:#005CC5;">ulimit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span></span>
<span class="line"><span style="color:#6A737D;"># 设置最大打开文件数</span></span>
<span class="line"><span style="color:#005CC5;">ulimit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看系统默认的值</span></span>
<span class="line"><span style="color:#005CC5;">ulimit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span></span>
<span class="line"><span style="color:#6A737D;"># 设置最大打开文件数</span></span>
<span class="line"><span style="color:#005CC5;">ulimit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/security/limits.conf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/security/limits.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过修改配置文件的方式修改程序最大打开句柄数可以永久有效：</p><div class="language-conf vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292e;">root soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">root hard nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">root soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">root hard nproc 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">root soft core unlimited</span></span>
<span class="line"><span style="color:#24292e;">root hard core unlimited</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">* hard nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">* hard nproc 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* soft core unlimited</span></span>
<span class="line"><span style="color:#24292e;">* hard core unlimited</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">root soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">root hard nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">root soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">root hard nproc 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">root soft core unlimited</span></span>
<span class="line"><span style="color:#24292e;">root hard core unlimited</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">* hard nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* soft nofile 1040000</span></span>
<span class="line"><span style="color:#24292e;">* hard nproc 1040000</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* soft core unlimited</span></span>
<span class="line"><span style="color:#24292e;">* hard core unlimited</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">~</span><span style="color:#24292E;">$ sudo vim /etc/security/limits.conf</span></span>
<span class="line"><span style="color:#6A737D;">#root账⼾的资源软限制和硬限制</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">core</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unlimited</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">core</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unlimited</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nproc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nproc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nofile</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nofile</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">memlock</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">32000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">memlock</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">32000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">msgqueue</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8192000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">msgqueue</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8192000</span></span>
<span class="line"><span style="color:#6A737D;">#其他账⼾的资源软限制和硬限制</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft core unlimited</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard core unlimited</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft nproc 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard nproc 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft nofile 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard nofile 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft memlock 32000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard memlock 32000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft msgqueue 8192000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard msgqueue 8192000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">~</span><span style="color:#24292E;">$ sudo vim /etc/security/limits.conf</span></span>
<span class="line"><span style="color:#6A737D;">#root账⼾的资源软限制和硬限制</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">core</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unlimited</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">core</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unlimited</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nproc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nproc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nofile</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nofile</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">memlock</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">32000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">memlock</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">32000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">msgqueue</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8192000</span></span>
<span class="line"><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">msgqueue</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8192000</span></span>
<span class="line"><span style="color:#6A737D;">#其他账⼾的资源软限制和硬限制</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft core unlimited</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard core unlimited</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft nproc 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard nproc 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft nofile 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard nofile 1000000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft memlock 32000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard memlock 32000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft msgqueue 8192000</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard msgqueue 8192000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>修改完成以后需要重启机器配置才能生效.</p><h3 id="设置sockets连接参数" tabindex="-1">设置sockets连接参数 <a class="header-anchor" href="#设置sockets连接参数" aria-label="Permalink to &quot;设置sockets连接参数&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/sysctl.conf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/sysctl.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置参考</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_reuse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_local_port_range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65000</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_mem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">786432</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2097152</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3145728</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_rmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_wmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置参考</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_reuse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_local_port_range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65000</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_mem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">786432</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2097152</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3145728</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_rmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_wmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="内核优化" tabindex="-1">内核优化 <a class="header-anchor" href="#内核优化" aria-label="Permalink to &quot;内核优化&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/sysctl.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls source route verification</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.rp_filter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_nonlocal_bind</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># Do not accept source routing</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.accept_source_route</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the System Request debugging functionality of the kernel</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.sysrq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6A737D;"># Controls whether core dumps will append the PID to the core filename.</span></span>
<span class="line"><span style="color:#6A737D;"># Useful for debugging multi-threaded applications.</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.core_uses_pid</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the use of TCP syncookies</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># Disable netfilter on bridges.</span></span>
<span class="line"><span style="color:#6F42C1;">net.bridge.bridge-nf-call-ip6tables</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.bridge.bridge-nf-call-iptables</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.bridge.bridge-nf-call-arptables</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the default maxmimum size of a mesage queue</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmnb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"><span style="color:#6A737D;"># # Controls the maximum size of a message, in bytes</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum shared segment size, in bytes</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">68719476736</span></span>
<span class="line"><span style="color:#6A737D;"># # Controls the maximum number of shared memory segments, in pages</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4294967296</span></span>
<span class="line"><span style="color:#6A737D;"># TCP kernel paramater</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_mem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">786432</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1048576</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1572864</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_rmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">87380</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_wmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16384</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_window_scaling</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_sack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># socket buffer</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.netdev_max_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.somaxconn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20480</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.optmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">81920</span></span>
<span class="line"><span style="color:#6A737D;"># TCP conn</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_syn_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syn_retries</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">15</span></span>
<span class="line"><span style="color:#6A737D;"># tcp conn reuse</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_timestamps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_reuse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_recycle</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_fin_timeout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_tw_buckets</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20000</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_orphans</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3276800</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_synack_retries</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># keepalive conn</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_time</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_intvl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_probes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_local_port_range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10001</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65000</span></span>
<span class="line"><span style="color:#6A737D;"># swap</span></span>
<span class="line"><span style="color:#6F42C1;">vm.overcommit_memory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">vm.swappiness</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.eth1.rp_filter = 0</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.lo.arp_ignore = 1</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.lo.arp_announce = 2</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.all.arp_ignore = 1</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.all.arp_announce = 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/sysctl.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls source route verification</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.rp_filter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_nonlocal_bind</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># Do not accept source routing</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.accept_source_route</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the System Request debugging functionality of the kernel</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.sysrq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6A737D;"># Controls whether core dumps will append the PID to the core filename.</span></span>
<span class="line"><span style="color:#6A737D;"># Useful for debugging multi-threaded applications.</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.core_uses_pid</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the use of TCP syncookies</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># Disable netfilter on bridges.</span></span>
<span class="line"><span style="color:#6F42C1;">net.bridge.bridge-nf-call-ip6tables</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.bridge.bridge-nf-call-iptables</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.bridge.bridge-nf-call-arptables</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the default maxmimum size of a mesage queue</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmnb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"><span style="color:#6A737D;"># # Controls the maximum size of a message, in bytes</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum shared segment size, in bytes</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">68719476736</span></span>
<span class="line"><span style="color:#6A737D;"># # Controls the maximum number of shared memory segments, in pages</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4294967296</span></span>
<span class="line"><span style="color:#6A737D;"># TCP kernel paramater</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_mem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">786432</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1048576</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1572864</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_rmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">87380</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_wmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16384</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_window_scaling</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_sack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># socket buffer</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.netdev_max_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.somaxconn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20480</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.optmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">81920</span></span>
<span class="line"><span style="color:#6A737D;"># TCP conn</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_syn_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syn_retries</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">15</span></span>
<span class="line"><span style="color:#6A737D;"># tcp conn reuse</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_timestamps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_reuse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_recycle</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_fin_timeout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_tw_buckets</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20000</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_orphans</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3276800</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_synack_retries</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6A737D;"># keepalive conn</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_time</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_intvl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_probes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_local_port_range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10001</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65000</span></span>
<span class="line"><span style="color:#6A737D;"># swap</span></span>
<span class="line"><span style="color:#6F42C1;">vm.overcommit_memory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#6F42C1;">vm.swappiness</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.eth1.rp_filter = 0</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.lo.arp_ignore = 1</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.lo.arp_announce = 2</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.all.arp_ignore = 1</span></span>
<span class="line"><span style="color:#6A737D;">#net.ipv4.conf.all.arp_announce = 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><p>内核配置详情</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/sysctl.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#Controls source route verification</span></span>
<span class="line"><span style="color:#6A737D;">#启用源路由核查功能</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.rp_filter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#允许非本地IP地址socket监听</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_nonlocal_bind</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#开启IPV4转发</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Do not accept source routing</span></span>
<span class="line"><span style="color:#6A737D;"># 禁用所有IP源路由</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.accept_source_route</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the System Request debugging functionality of the kernel</span></span>
<span class="line"><span style="color:#6A737D;">#关闭sysrq组合键</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.sysrq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls whether core dumps will append the PID to the core filename.</span></span>
<span class="line"><span style="color:#6A737D;"># Useful for debugging multi-threaded applications</span></span>
<span class="line"><span style="color:#6A737D;">#控制core文件的文件名是否添加pid作为扩展</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.core_uses_pid</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the use of TCP syncookies</span></span>
<span class="line"><span style="color:#6A737D;">#与性能无关。用于解决TCP的SYN攻击</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the default maxmimum size of a mesage queue, in bytes</span></span>
<span class="line"><span style="color:#6A737D;">#每个消息队列的大小限制（单位：字节）</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmnb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum size of a message, in bytes</span></span>
<span class="line"><span style="color:#6A737D;">#整个系统最大消息队列数量限制</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum shared segment size, in bytes</span></span>
<span class="line"><span style="color:#6A737D;">#单个共享内存段大小（单位：字节）</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">68719476736</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum number of shared memory segments, in pages</span></span>
<span class="line"><span style="color:#6A737D;">#所有内存大小（单位：页）</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4294967296</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># TCP kernel paramater</span></span>
<span class="line"><span style="color:#6A737D;">#1st低于此值，TCP没有内存压力，2nd进入内存压力阶段，3rd TCP拒绝分配socket（单位：内存页）</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_mem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">786432</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1048576</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1572864</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#定义TCP接受socket请求缓存的内存最小值、默认值、较大值</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_rmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">87380</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#定义TCP发送缓存的最小值、默认值、最大值</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_wmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16384</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#支持更大的TCP窗口，如果TCP窗口最大超过65535（64K），必须设置该数值为1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_window_scaling</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#开启有选择应答</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_sack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># socket buffer</span></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字接受缓存区默认大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字发送缓存区默认大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字接受缓存区较大大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字发送缓存区较大大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当网卡接收数据包的速度大于内核处理速度时，会有一个队列保存这些数据。这个参数表示该队列的较大值</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.netdev_max_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#默认值128，这个参数用于调节系统同时发起TCP连接数，在高并发的请求中，默认值可能会导致连接超时或者重传，因此需要结合高并发请求数来调整此值</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.somaxconn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20480</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.optmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">81920</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># TCP conn</span></span>
<span class="line"><span style="color:#6A737D;">#这个参数表示TCP三次握手建立阶段接受SYN请求队列的较大长度，默认1024，将其设置大一些可使出现nginx繁忙来不及accept新连接，linux不至于丢失客户端发起的连接请求</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_syn_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#该变量设置放弃回应一个tcp连接请求前，需要进行多少次重试。</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#控制内核向已经建立连接的远程主机重新发送数据的次数，低值可以更早的检测到与远程主机失效的连接，因此服务器可以更快的释放该连接，可以修改为5</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#快速回收TIME_WAIT状态，用于大量TIME_OUT场景</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_recycle</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># tcp conn reuse</span></span>
<span class="line"><span style="color:#6A737D;">#是否开启数据包时间戳</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_timestamps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#端口复用，参数值设置为1，表示允许将TIME_WAIT的状态socket重新用于新的TCP连接，这对于服务器来说意义重大，因为总是有大量TIME_WAIT状态的连接存在</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_reuse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当服务器主动关闭连接时，socket保持在FIN_WAIT_2状态的较大时间</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_fin_timeout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示操作系统允许TIME_WAIT套接字数量的最大值，如果超过此值，TIME_WAIT套接字将立刻被清除并打印警告信息默认为8000，过多的TIME_WAIT套接字会使web服务变慢</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_tw_buckets</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#选项用于设置系统中最多有多少个TCP套接字不被关联到任何一个用户句柄上。如果超过这个数字，孤立连接数将立即被复位并输出警告信息。这个限制只是为了防止简单DOS攻击不用过分依靠这个限制，甚至认为减小这个值 ，更多的情况是增加这个值</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_orphans</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3276800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示应用程序进行connect()系统调用时，在对方不返回SYN + ACK的情况下(也就是超时的情况下)，第一次发送之后，内核最多重试几次发送SYN包;</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_synack_retries</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#开启SYN Cookies，当出现SYN等待队列溢出时，启用cookies来处理</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># keepalive conn</span></span>
<span class="line"><span style="color:#6A737D;">#当keepalive启动时，TCP发送keepalive消息的频度，默认2小时，将其设置为5分钟，可更快的清理无效连接</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_time</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当探测没有确认时，重新发送探测的频度。缺省是75秒。</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_intvl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#在认定连接失效之前，发送多少个TCP的keepalive探测包。缺省值是9。这个值乘以tcp_keepalive_intvl之后决定了，一个连接发送了keepalive之后可以有多少时间没有回应</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_probes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#定义UDP和TCP连接的本地端口的取值范围</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_local_port_range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10001</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65000</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># swap</span></span>
<span class="line"><span style="color:#6A737D;">#0， 表示内核将检查是否有足够的可用内存供应用进程使用；如果有足够的可用内存，内存申请允许；否则，内存申请失败，并把错误返回给应用进程。1， 表示内核允许分配所有的物理内存，而不管当前的内存状态如何。2， 表示内核允许分配超过所有物理内存和交换空间总和的内存</span></span>
<span class="line"><span style="color:#6F42C1;">vm.overcommit_memory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#数值可设置范围在0到100之间。 低参数值会让内核尽量少用交换，更高参数值会使内核更多的去使用交换空间。默认值为60。当系统存在足够内存时，推荐设置为该值以提高性能。</span></span>
<span class="line"><span style="color:#6F42C1;">vm.swappiness</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示单个进程可以打开的句柄数</span></span>
<span class="line"><span style="color:#6F42C1;">fs.file-max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/sysctl.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#Controls source route verification</span></span>
<span class="line"><span style="color:#6A737D;">#启用源路由核查功能</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.rp_filter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#允许非本地IP地址socket监听</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_nonlocal_bind</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#开启IPV4转发</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Do not accept source routing</span></span>
<span class="line"><span style="color:#6A737D;"># 禁用所有IP源路由</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.conf.default.accept_source_route</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the System Request debugging functionality of the kernel</span></span>
<span class="line"><span style="color:#6A737D;">#关闭sysrq组合键</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.sysrq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls whether core dumps will append the PID to the core filename.</span></span>
<span class="line"><span style="color:#6A737D;"># Useful for debugging multi-threaded applications</span></span>
<span class="line"><span style="color:#6A737D;">#控制core文件的文件名是否添加pid作为扩展</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.core_uses_pid</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the use of TCP syncookies</span></span>
<span class="line"><span style="color:#6A737D;">#与性能无关。用于解决TCP的SYN攻击</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the default maxmimum size of a mesage queue, in bytes</span></span>
<span class="line"><span style="color:#6A737D;">#每个消息队列的大小限制（单位：字节）</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmnb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum size of a message, in bytes</span></span>
<span class="line"><span style="color:#6A737D;">#整个系统最大消息队列数量限制</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.msgmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65536</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum shared segment size, in bytes</span></span>
<span class="line"><span style="color:#6A737D;">#单个共享内存段大小（单位：字节）</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmmax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">68719476736</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Controls the maximum number of shared memory segments, in pages</span></span>
<span class="line"><span style="color:#6A737D;">#所有内存大小（单位：页）</span></span>
<span class="line"><span style="color:#6F42C1;">kernel.shmall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4294967296</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># TCP kernel paramater</span></span>
<span class="line"><span style="color:#6A737D;">#1st低于此值，TCP没有内存压力，2nd进入内存压力阶段，3rd TCP拒绝分配socket（单位：内存页）</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_mem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">786432</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1048576</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1572864</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#定义TCP接受socket请求缓存的内存最小值、默认值、较大值</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_rmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">87380</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#定义TCP发送缓存的最小值、默认值、最大值</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_wmem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16384</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4194304</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#支持更大的TCP窗口，如果TCP窗口最大超过65535（64K），必须设置该数值为1</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_window_scaling</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#开启有选择应答</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_sack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># socket buffer</span></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字接受缓存区默认大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字发送缓存区默认大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8388608</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字接受缓存区较大大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.rmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示内核套接字发送缓存区较大大小</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.wmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16777216</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当网卡接收数据包的速度大于内核处理速度时，会有一个队列保存这些数据。这个参数表示该队列的较大值</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.netdev_max_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#默认值128，这个参数用于调节系统同时发起TCP连接数，在高并发的请求中，默认值可能会导致连接超时或者重传，因此需要结合高并发请求数来调整此值</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.somaxconn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20480</span></span>
<span class="line"><span style="color:#6F42C1;">net.core.optmem_max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">81920</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># TCP conn</span></span>
<span class="line"><span style="color:#6A737D;">#这个参数表示TCP三次握手建立阶段接受SYN请求队列的较大长度，默认1024，将其设置大一些可使出现nginx繁忙来不及accept新连接，linux不至于丢失客户端发起的连接请求</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_syn_backlog</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">262144</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#该变量设置放弃回应一个tcp连接请求前，需要进行多少次重试。</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#控制内核向已经建立连接的远程主机重新发送数据的次数，低值可以更早的检测到与远程主机失效的连接，因此服务器可以更快的释放该连接，可以修改为5</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_retries2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#快速回收TIME_WAIT状态，用于大量TIME_OUT场景</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_recycle</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># tcp conn reuse</span></span>
<span class="line"><span style="color:#6A737D;">#是否开启数据包时间戳</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_timestamps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#端口复用，参数值设置为1，表示允许将TIME_WAIT的状态socket重新用于新的TCP连接，这对于服务器来说意义重大，因为总是有大量TIME_WAIT状态的连接存在</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_tw_reuse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当服务器主动关闭连接时，socket保持在FIN_WAIT_2状态的较大时间</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_fin_timeout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示操作系统允许TIME_WAIT套接字数量的最大值，如果超过此值，TIME_WAIT套接字将立刻被清除并打印警告信息默认为8000，过多的TIME_WAIT套接字会使web服务变慢</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_tw_buckets</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#选项用于设置系统中最多有多少个TCP套接字不被关联到任何一个用户句柄上。如果超过这个数字，孤立连接数将立即被复位并输出警告信息。这个限制只是为了防止简单DOS攻击不用过分依靠这个限制，甚至认为减小这个值 ，更多的情况是增加这个值</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_max_orphans</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3276800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#表示应用程序进行connect()系统调用时，在对方不返回SYN + ACK的情况下(也就是超时的情况下)，第一次发送之后，内核最多重试几次发送SYN包;</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_synack_retries</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#开启SYN Cookies，当出现SYN等待队列溢出时，启用cookies来处理</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_syncookies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># keepalive conn</span></span>
<span class="line"><span style="color:#6A737D;">#当keepalive启动时，TCP发送keepalive消息的频度，默认2小时，将其设置为5分钟，可更快的清理无效连接</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_time</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#当探测没有确认时，重新发送探测的频度。缺省是75秒。</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_intvl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#在认定连接失效之前，发送多少个TCP的keepalive探测包。缺省值是9。这个值乘以tcp_keepalive_intvl之后决定了，一个连接发送了keepalive之后可以有多少时间没有回应</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.tcp_keepalive_probes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#定义UDP和TCP连接的本地端口的取值范围</span></span>
<span class="line"><span style="color:#6F42C1;">net.ipv4.ip_local_port_range</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10001</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">65000</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># swap</span></span>
<span class="line"><span style="color:#6A737D;">#0， 表示内核将检查是否有足够的可用内存供应用进程使用；如果有足够的可用内存，内存申请允许；否则，内存申请失败，并把错误返回给应用进程。1， 表示内核允许分配所有的物理内存，而不管当前的内存状态如何。2， 表示内核允许分配超过所有物理内存和交换空间总和的内存</span></span>
<span class="line"><span style="color:#6F42C1;">vm.overcommit_memory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#数值可设置范围在0到100之间。 低参数值会让内核尽量少用交换，更高参数值会使内核更多的去使用交换空间。默认值为60。当系统存在足够内存时，推荐设置为该值以提高性能。</span></span>
<span class="line"><span style="color:#6F42C1;">vm.swappiness</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表示单个进程可以打开的句柄数</span></span>
<span class="line"><span style="color:#6F42C1;">fs.file-max</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br></div></div><h3 id="优化工具" tabindex="-1">优化工具 <a class="header-anchor" href="#优化工具" aria-label="Permalink to &quot;优化工具&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tuned</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tuned</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>静态调优方法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292e;">tuned-adm list // 列出所有的默认的调优策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm active //查看现在生效的调优策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm recommand //查看tuned目前推荐使用的策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm profile 方案名称 // 修改调优方案，使用新的调优策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm off //关闭调优策略</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tuned-adm list // 列出所有的默认的调优策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm active //查看现在生效的调优策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm recommand //查看tuned目前推荐使用的策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm profile 方案名称 // 修改调优方案，使用新的调优策略</span></span>
<span class="line"><span style="color:#24292e;">tuned-adm off //关闭调优策略</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="mysql-优化" tabindex="-1">mysql 优化 <a class="header-anchor" href="#mysql-优化" aria-label="Permalink to &quot;mysql 优化&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/mysql/mysql.conf.d/mysqld.cnf</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql.service</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./mysqltuner.pl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pass=</span><span style="color:#032F62;">&#39;VQnK7Kz@dTr#pu2s7&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/mysql/mysql.conf.d/mysqld.cnf</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql.service</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./mysqltuner.pl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pass=</span><span style="color:#032F62;">&#39;VQnK7Kz@dTr#pu2s7&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="系统优化" tabindex="-1">系统优化 <a class="header-anchor" href="#系统优化" aria-label="Permalink to &quot;系统优化&quot;">​</a></h2><p><img src="`+l+'" alt="Linux"><img src="'+e+'" alt="Linux"><img src="'+o+'" alt="Linux"><img src="'+c+'" alt="Linux"><img src="'+r+'" alt="Linux"><img src="'+t+'" alt="Linux"><img src="'+y+'" alt="Linux"><img src="'+i+'" alt="Linux"><img src="'+C+'" alt="Linux"></p>',24),u=[b];function E(F,d,_,v,h,g){return n(),a("div",null,u)}const f=s(m,[["render",E]]);export{D as __pageData,f as default};
