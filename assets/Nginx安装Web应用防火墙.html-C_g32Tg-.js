import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as p,b as n,d as a,e as s,a as l}from"./app-CXNU22eb.js";const r={},c=n("h1",{id:"nginx-安装-web-应用防火墙",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-安装-web-应用防火墙"},[n("span",null,"Nginx 安装 Web 应用防火墙")])],-1),u=n("p",null,"LNMP 一键安装包 ngx_lua_waf waf(web 应用防火墙) 安装设置。WAF 中文名是 Web 应用防火墙，WAF 能够根据规则拦截 SQL 注入、恶意请求、黑客扫描等 HTTP 请求从而保护 WEB 应用的安全。",-1),d={href:"https://github.com/loveshell/ngx_lua_waf%E3%80%82",target:"_blank",rel:"noopener noreferrer"},g=l(`<p>用途：</p><ul><li>防止 sql 注入，本地包含，部分溢出，fuzzing 测试，xss，SSRF 等 web 攻击</li><li>防止 svn/备份之类文件泄漏</li><li>防止 ApacheBench 之类压力测试工具的攻击</li><li>屏蔽常见的扫描黑客工具，扫描器</li><li>屏蔽异常的网络请求</li><li>屏蔽图片附件类目录 php 执行权限</li><li>防止 webshell 上传</li></ul><h2 id="ngx-lua-waf-安装" tabindex="-1"><a class="header-anchor" href="#ngx-lua-waf-安装"><span>ngx_lua_waf 安装</span></a></h2><h3 id="_1-lua-支持安装" tabindex="-1"><a class="header-anchor" href="#_1-lua-支持安装"><span>1. lua 支持安装</span></a></h3><p>LNMP 一键安装包从 1.5 开始增加了 lua 支持的选项，可以通过修改 lnmp.conf 中 Enable_Nginx_Lua 后的参数为 y 来启用 lua，如果没安装 lnmp，修改 lnmp.conf 后保存，安装完 lnmp 就是支持 lua 的，如果已经安装好 lnmp，也是按前面修改 lnmp.conf</p><p>然后 lnmp 安装包目录下运行<code>./upgrade.sh nginx</code> 升级 nginx</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>./upgrade.sh nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入当前 nginx 版本号或更新的 nginx 版本号，升级完成就是支持 lua 的了。如果出错，请重新下载完整版的 LNMP 安装包 lnmp** -full.tar.gz，再次安装。</p><h3 id="_2-安装-ngx-lua-waf" tabindex="-1"><a class="header-anchor" href="#_2-安装-ngx-lua-waf"><span>2. 安装 ngx_lua_waf</span></a></h3><p>下载安装 ngx_lua_waf：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>wget https://github.com/loveshell/ngx_lua_waf/archive/master.zip -O ngx_lua_waf.zip
unzip ngx_lua_waf.zip
mv ngx_lua_waf-master /usr/local/nginx/conf/waf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx 上设置并启用 ngx_lua_waf</p><p>编辑 <code>/usr/local/nginx/conf/nginx.conf</code>在<strong>http 段</strong>的 <code>server_tokens off</code>; 下面添加如下代码：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>lua_package_path &quot;/usr/local/nginx/conf/waf/?.lua&quot;;
lua_shared_dict limit 10m;
init_by_lua_file /usr/local/nginx/conf/waf/init.lua;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完成保存</p><p>如果要想在某个虚拟主机启用 ngx_lua_waf 可以修改对应虚拟主机的 server 段，在该 server 段中 root 网站目录行下面添加如下代码：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>access_by_lua_file /usr/local/nginx/conf/waf/waf.lua;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改完成保存</p><p>测试 nginx 配置文件：<code>/usr/local/nginx/sbin/nginx -t</code> 重载 nginx 配置生效：<code>/usr/local/nginx/sbin/nginx -s reload</code></p><p>如果测试和重载都没报错就已经生效。</p>`,20),m={href:"http://xn--eqrt2g/test.php?id=../etc/passwd",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>提示：您的请求带有&gt;不合法参数，已被网站管理员设置拦截！说明已经正确设置</p><h3 id="_3-ngx-lua-waf-防火墙配置" tabindex="-1"><a class="header-anchor" href="#_3-ngx-lua-waf-防火墙配置"><span>3. ngx_lua_waf 防火墙配置</span></a></h3><p>ngx_lua_waf 配置文件位置：<code>/usr/local/nginx/conf/waf/config.lua</code> ngx_lua_waf 配置文件参数说明：</p><div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre class="language-lua"><code>RulePath <span class="token operator">=</span> “<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>waf<span class="token operator">/</span>wafconf<span class="token operator">/</span>”
–规则存放目录
attacklog <span class="token operator">=</span> “off”
–是否开启攻击信息记录，需要配置logdir
logdir <span class="token operator">=</span> “<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">/</span>hack<span class="token operator">/</span>”
–log存储目录，该目录需要用户自己新建，切需要nginx用户的可写权限
UrlDeny<span class="token operator">=</span>”on”
–是否拦截url访问
Redirect<span class="token operator">=</span>”on”
–是否拦截后重定向
CookieMatch <span class="token operator">=</span> “on”
–是否拦截cookie攻击
postMatch <span class="token operator">=</span> “on”
–是否拦截post攻击
whiteModule <span class="token operator">=</span> “on”
–是否开启URL白名单
black_fileExt<span class="token operator">=</span><span class="token punctuation">{</span>“php”<span class="token punctuation">,</span>”jsp”<span class="token punctuation">}</span>
–填写不允许上传文件后缀类型
ipWhitelist<span class="token operator">=</span><span class="token punctuation">{</span>“<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>”<span class="token punctuation">}</span>
–ip白名单，多个ip用逗号分隔
ipBlocklist<span class="token operator">=</span><span class="token punctuation">{</span>“<span class="token number">1.0</span><span class="token number">.0</span><span class="token number">.1</span>″<span class="token punctuation">}</span>
–ip黑名单，多个ip用逗号分隔
CCDeny<span class="token operator">=</span>”on”
–是否开启拦截cc攻击<span class="token punctuation">(</span>需要nginx<span class="token punctuation">.</span>conf的http段增加lua_shared_dict limit 10m<span class="token punctuation">;</span><span class="token punctuation">)</span>
CCrate <span class="token operator">=</span> “<span class="token number">100</span><span class="token operator">/</span><span class="token number">60</span>”
–设置cc攻击频率，单位为秒<span class="token punctuation">.</span>
–默认<span class="token number">1</span>分钟同一个IP只能请求同一个地址<span class="token number">100</span>次
html<span class="token operator">=</span><span class="token string">[[Please go away~~]]</span> –警告内容<span class="token punctuation">,</span>可在中括号内自定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注:不要乱动双引号，区分大小写</p><p>ngx_lua_waf 安装到此结束。</p><h3 id="_4-ngx-lua-waf-效果图" tabindex="-1"><a class="header-anchor" href="#_4-ngx-lua-waf-效果图"><span>4. ngx_lua_waf 效果图</span></a></h3><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15.jpg" alt="ngx_lua_waf waf(web应用防火墙)" loading="lazy"><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-16419157753881.jpg" alt="ngx_lua_waf waf(web应用防火墙)" loading="lazy"></p>`,8);function _(x,v){const e=i("ExternalLinkIcon");return o(),p("div",null,[c,u,n("p",null,[a("今天我们要说的是一个比较简单好用的基于 lua 的 waf：ngx_lua_waf。它是一个基于 lua-nginx-module(openresty) 的 web 应用防火墙，"),n("a",d,[a("https://github.com/loveshell/ngx_lua_waf。"),s(e)])]),g,n("p",null,[a("可以通过访问 "),n("a",m,[a("http://域名/test.php?id=../etc/passwd"),s(e)]),a(" 来测试")]),b])}const k=t(r,[["render",_],["__file","Nginx安装Web应用防火墙.html.vue"]]),w=JSON.parse('{"path":"/linux/Nginx%E5%AE%89%E8%A3%85Web%E5%BA%94%E7%94%A8%E9%98%B2%E7%81%AB%E5%A2%99.html","title":"Nginx安装Web应用防火墙","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Nginx安装Web应用防火墙","excerpt":null,"description":"Nginx安装Web应用防火墙","date":"2022-01-15T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Nginx%E5%AE%89%E8%A3%85Web%E5%BA%94%E7%94%A8%E9%98%B2%E7%81%AB%E5%A2%99.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Nginx安装Web应用防火墙"}],["meta",{"property":"og:description","content":"Nginx安装Web应用防火墙"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-01-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx安装Web应用防火墙\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-16419157753881.jpg\\"],\\"datePublished\\":\\"2022-01-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"ngx_lua_waf 安装","slug":"ngx-lua-waf-安装","link":"#ngx-lua-waf-安装","children":[{"level":3,"title":"1. lua 支持安装","slug":"_1-lua-支持安装","link":"#_1-lua-支持安装","children":[]},{"level":3,"title":"2. 安装 ngx_lua_waf","slug":"_2-安装-ngx-lua-waf","link":"#_2-安装-ngx-lua-waf","children":[]},{"level":3,"title":"3. ngx_lua_waf 防火墙配置","slug":"_3-ngx-lua-waf-防火墙配置","link":"#_3-ngx-lua-waf-防火墙配置","children":[]},{"level":3,"title":"4. ngx_lua_waf 效果图","slug":"_4-ngx-lua-waf-效果图","link":"#_4-ngx-lua-waf-效果图","children":[]}]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2},{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":2.95,"words":885},"filePathRelative":"linux/Nginx安装Web应用防火墙.md","localizedDate":"2022年1月15日"}');export{k as comp,w as data};
