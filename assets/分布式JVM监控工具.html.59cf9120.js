import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a,b as n,e as s,d as t,r as i}from"./app.59ffeed0.js";const c={},l=t('<h1 id="分布式jvm监控工具" tabindex="-1"><a class="header-anchor" href="#分布式jvm监控工具" aria-hidden="true">#</a> 分布式JVM监控工具</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><strong>该项目为了方便开发者更快监控多个远程主机jvm，如果你的项目是Spring boot那么很方便集成，jar包引入即可，不是Spring boot也不用气馁，你可以快速自行初始化一个Spirng boot程序引入jar包即可</strong></p><h2 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示" aria-hidden="true">#</a> 效果展示</h2><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511054.png" alt="分布式JVM监控工具"></p><h2 id="整体架构" tabindex="-1"><a class="header-anchor" href="#整体架构" aria-hidden="true">#</a> 整体架构</h2><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511055.png" alt="分布式JVM监控工具"></p><h2 id="git地址" tabindex="-1"><a class="header-anchor" href="#git地址" aria-hidden="true">#</a> git地址</h2>',8),d={href:"https://github.com/xk4848123/monitor",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/xk4848123/monitor-server",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="使用前提" tabindex="-1"><a class="header-anchor" href="#使用前提" aria-hidden="true">#</a> 使用前提</h2><p>需要机器中有JDK，不仅仅是JRE，配置好java path，程序中依靠ExcuteCmd找寻jdk基本命令</p><h2 id="手把手教你用" tabindex="-1"><a class="header-anchor" href="#手把手教你用" aria-hidden="true">#</a> 手把手教你用</h2><h3 id="克隆monitor-server" tabindex="-1"><a class="header-anchor" href="#克隆monitor-server" aria-hidden="true">#</a> 克隆monitor-server</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/xk4848123/monitor-server.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511051.png" alt="分布式JVM监控工具"></p><h3 id="idea-project-from-existing-sources" tabindex="-1"><a class="header-anchor" href="#idea-project-from-existing-sources" aria-hidden="true">#</a> idea -&gt; Project from Existing Sources…</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511052.png" alt="分布式JVM监控工具"></p><h3 id="选中项目pom-xml" tabindex="-1"><a class="header-anchor" href="#选中项目pom-xml" aria-hidden="true">#</a> 选中项目pom.xml</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511053.png" alt="分布式JVM监控工具"></p><h3 id="修改resources-application-properties" tabindex="-1"><a class="header-anchor" href="#修改resources-application-properties" aria-hidden="true">#</a> 修改resources/application.properties</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511064.png" alt="分布式JVM监控工具"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>monitor<span class="token punctuation">.</span>serve<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token operator">=</span>serve<span class="token operator">-</span><span class="token number">1</span>
monitor<span class="token punctuation">.</span>serve<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>address<span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8081</span><span class="token operator">/</span><span class="token function">monitor</span><span class="token punctuation">(</span>这里需要与客户端的monitor<span class="token punctuation">.</span>path对应<span class="token punctuation">)</span>
monitor<span class="token punctuation">.</span>serve<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token operator">=</span>serve<span class="token operator">-</span><span class="token number">2</span>
monitor<span class="token punctuation">.</span>serve<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>address<span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token function">8082</span><span class="token punctuation">(</span>同上<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token number">12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以配置多个监控主机,格式注意下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>address=http://ip:port/xxx(xxx是你在monitor上配置的，下文中会有)
name=server-1(每个monitor不同即可，便于显示时区分)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run-monitor-server" tabindex="-1"><a class="header-anchor" href="#run-monitor-server" aria-hidden="true">#</a> run monitor-server</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511065.png" alt="分布式JVM监控工具"> 有异常没关系，我们把监控客户端也部起来就好了</p><h3 id="说在前面" tabindex="-1"><a class="header-anchor" href="#说在前面" aria-hidden="true">#</a> 说在前面</h3>`,18),m={href:"https://so.csdn.net/so/search?q=jvm&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},g=a("h3",{id:"下载release",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#下载release","aria-hidden":"true"},"#"),n(" 下载Release")],-1),b={href:"https://github.com/xk4848123/monitor",target:"_blank",rel:"noopener noreferrer"},k=t(`<p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511066.png" alt="分布式JVM监控工具"></p><h3 id="进入release列表-下载jar" tabindex="-1"><a class="header-anchor" href="#进入release列表-下载jar" aria-hidden="true">#</a> 进入Release列表，下载jar</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511067.png" alt="分布式JVM监控工具"></p><h3 id="本地mvn-install-等到博主把jar传到中心仓库就不用这么么麻烦了" tabindex="-1"><a class="header-anchor" href="#本地mvn-install-等到博主把jar传到中心仓库就不用这么么麻烦了" aria-hidden="true">#</a> 本地mvn install(等到博主把jar传到中心仓库就不用这么么麻烦了)</h3><p><strong>cmd执行以下命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn install:install-file <span class="token parameter variable">-DgroupId</span><span class="token operator">=</span>com.github.xk4848123 <span class="token parameter variable">-DartifactId</span><span class="token operator">=</span>monitor-spring-boot-starter <span class="token parameter variable">-Dversion</span><span class="token operator">=</span><span class="token number">2.3</span>.1 <span class="token parameter variable">-Dpackaging</span><span class="token operator">=</span>jar <span class="token parameter variable">-Dfile</span><span class="token operator">=</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>Downloads<span class="token punctuation">\\</span>monitor-spring-boot-starter.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511068.png" alt="分布式JVM监控工具"></p><h3 id="在任意一个spring-boot项目中使用-我这里打开我本地一个叫chat的项目" tabindex="-1"><a class="header-anchor" href="#在任意一个spring-boot项目中使用-我这里打开我本地一个叫chat的项目" aria-hidden="true">#</a> 在任意一个Spring boot项目中使用，我这里打开我本地一个叫chat的项目</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-16533795511069.png" alt="分布式JVM监控工具"></p><h3 id="在resources-application-properties增加属性" tabindex="-1"><a class="header-anchor" href="#在resources-application-properties增加属性" aria-hidden="true">#</a> 在resources/application.properties增加属性</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#决定访问路径<span class="token punctuation">,</span>可以自行定义
monitor<span class="token punctuation">.</span>path<span class="token operator">=</span>monitor
#决定是否启动监控客户端
monitor<span class="token punctuation">.</span>enable<span class="token operator">=</span><span class="token boolean">true</span>
<span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-165337955110610.png" alt="分布式JVM监控工具"></p><h3 id="pom-xml引入" tabindex="-1"><a class="header-anchor" href="#pom-xml引入" aria-hidden="true">#</a> pom.xml引入</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-165337955110611.png" alt="分布式JVM监控工具"></p><h3 id="跑起项目" tabindex="-1"><a class="header-anchor" href="#跑起项目" aria-hidden="true">#</a> 跑起项目</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-165337955110612.png" alt="分布式JVM监控工具"> OK！</p>`,16),v={id:"我们现在访问monitor-server-我当下部署的在http-127-0-0-1-8888-大家根据自己的配置访问",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#我们现在访问monitor-server-我当下部署的在http-127-0-0-1-8888-大家根据自己的配置访问","aria-hidden":"true"},"#",-1),x={href:"http://127.0.0.1:8888",target:"_blank",rel:"noopener noreferrer"},f=a("p",null,[a("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/t_70-165337955110613.png",alt:"分布式JVM监控工具"})],-1);function j(V,J){const e=i("ExternalLinkIcon");return o(),p("div",null,[l,a("p",null,[a("a",d,[n("https://github.com/xk4848123/monitor"),s(e)]),a("a",h,[n("https://github.com/xk4848123/monitor-server"),s(e)])]),u,a("p",null,[n("一个操作系统内部署一个监控客户端就好，当你有个多个"),a("a",m,[n("jvm"),s(e)]),n("程序时，只要有一个部署就可以监控")]),g,a("p",null,[a("a",b,[n("https://github.com/xk4848123/monitor"),s(e)])]),k,a("h3",v,[_,n(" 我们现在访问monitor-server(我当下部署的在"),a("a",x,[n("http://127.0.0.1:8888"),s(e)]),n(",大家根据自己的配置访问)")]),f])}const D=r(c,[["render",j],["__file","分布式JVM监控工具.html.vue"]]);export{D as default};
