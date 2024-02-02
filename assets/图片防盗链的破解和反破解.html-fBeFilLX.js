import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,a as d}from"./app-aq8PVJpR.js";const i={},r=d(`<h1 id="图片防盗链的破解和反破解" tabindex="-1"><a class="header-anchor" href="#图片防盗链的破解和反破解"><span>图片防盗链的破解和反破解</span></a></h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><blockquote><p>注：这里有个很有趣的就是 Referrer 和 Referer 的故事了感兴趣的自行去了解下</p></blockquote><p>我们先来了解了解防盗链的原理，<strong>在 http 协议中，如果从一个页面跳到另一个页面，header字段里面会带个 Referer。图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链。</strong></p><p>如果盗用网站是 <strong>https</strong> 的 协议，而图片链接是 http 的话，则从 https 向 http 发起的请求会因为安全性的规定，而不带 referer，从而实现防盗链的绕过。官方输出图片的时候，判断了来源(Referer)，就是从哪个网站访问这个图片，如果是你的网站去加载这个图片，那么 Referer 就是： <code>你的网站地址</code>；你的网址肯定没在官方的白名单内，( <code>当然作为可操作性极强的浏览器来说 referer 是完全可以伪造一个官方的 URL 这样也也就也可以饶过限制🚫</code>)所以就看不到图片了。</p><p>因此，若不发送 Referer，也就是没有来源。那么官方那边，就认为是从浏览器直接访问的，所以就能加载正常的图片了。</p><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的"><span>目的</span></a></h2><p><strong>盗链</strong>是指在自己的页面上展示一些并不在自己服务器上的内容。通常的做法是通过技术手段获得它人服务器上的资源地址，绕过别人的资源展示页面，直接在自己的页面上向最终用户提供此内容。比较常见的是一些小站盗用大站的资源（ <code>图片、音乐、视频</code>），对于这些小站来说，通过盗链的方法可以减轻自己服务器的负担，因为真实的空间和流量均是来自别人的服务器。对大站造成的影响确实徒徒增加了服务器压力，用户还不是自己的😅</p><p>于是乎防盗链就是防止这种行为的产生，实施防盗链系统后，因为屏蔽了那些盗链的间接资源请求，从而可以大大减轻服务器及带宽的压力，也正如此，越来越多的站点都开始实施防盗链技术。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><blockquote><p>nginx</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>location ~* \\.(gif|jpg|png|bmp)$ {        valid_referers none blocked *.ttlsa.com server_names ~\\.google\\. ~\\.baidu\\.;        if ($invalid_referer) {                return 403;        
    }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上所有来至 <code>xxx.com</code>和域名中包含 <code>google</code>和 <code>baidu</code>的站点都可以访问到当前站点的图片,如果来源域名（白名单列表）不在这个列表中。</p><p>那么 <code>$invalid_referer</code>等于 1，在if语句中返回一个 403 给用户，这样用户便会看到一个 403 的页面,如果使用下面的 <code>rewrite</code>，那么盗链的图片都会显示 403.jpg。</p><blockquote><p>apache</p></blockquote><p>在根目录下创建 <code>.htaccess</code> 文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RewriteEngine OnRewriteCond %{HTTP_REFERER} !^$ [NC]RewriteCond %{HTTP_REFERER} !phpddt.com [NC]RewriteCond %{HTTP_REFERER} !google.com [NC]RewriteCond %{HTTP_REFERER} !baidu.com.com [NC]RewriteCond %{HTTP_REFERER} !feedburner.com [NC]RewriteCond %{HTTP_REFERER} !feedsky.com [NC]RewriteRule .*\\.(rar|zip)$ http://www.xxx.com/ [R,NC,L]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这段话也可写在 <code>Apache</code>配置文件当中</p><p><code>.htaccess</code>文件将影响其所在的目录及其子目录。你可以将其放在根目录或项目的子目录</p><p>上面这段代码也是很容易理解的：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RewriteCond %{HTTP_REFERER} !^$ [NC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>允许空的来源，即用户浏览器手动属于则允许访问文件。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RewriteCond %{HTTP_REFERER} !phpddt.com [NC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>允许站点自身访问，同理，后面还要允许百度，谷歌，和一些订阅源访问。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RewriteRule .*\\.(rar|zip)$ http://www.xxx.com/ [R,NC,L]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里可以设置防止盗链的类型，如果盗链可以跳转到网站首页，本站没有做图片防盗链，如果你做图片防盗链可以设置被盗链的替代图片：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RewriteRule .*\\.(gif|jpg|png)$ http://xxx.com/logo.png [R,NC,L]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="破解" tabindex="-1"><a class="header-anchor" href="#破解"><span>破解</span></a></h2><p>😄道高一尺魔高一丈既然知道原理那么就来看看一些常用的破解方案如果你有更好的记得给我留言。</p><ol><li><p>如果盗用图片资源是 <code>http</code>协议那么盗用网址可以使用 https 去请求会因为安全性的规定，而不带 <code>referer</code>，从而实现防盗链的绕过。</p></li><li><p>在 HTML 代码的 head 中添加一句</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;meta name=&quot;referrer&quot; content=&quot;no-referrer&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;img referrer=&quot;no-referrer|origin|unsafe-url&quot; src=&quot;{item.src}&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><code>https://images.weserv.nl/?url=</code>\${你的图片地址}\`\`</li></ol><p>因为网址是国外的速度有点慢效果还行，目的就是返回一个不受限制的图片，但是 GIF 格式会返回jpg也就是没有了动画效果。</p><ol start="5"><li>利用 <code>iframe</code>伪造请求 <code>referer</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function showImg( url ) {    var frameid = &#39;frameimg&#39; + Math.random();    window.img = &#39;&lt;img id=&quot;img&quot; src=\\&#39;&#39;+url+&#39;?&#39;+Math.random()+&#39;\\&#39; /&gt;    &lt;script&gt;window.onload = function() { parent.document.getElementById    (\\&#39;&#39;+frameid+&#39;\\&#39;).height = document.getElementById(\\&#39;img\\&#39;).height    +\\&#39;px\\&#39;; }&lt;&#39;+&#39;/script&gt;&#39;;    document.write(&#39;&lt;iframe id=&quot;&#39;+frameid+&#39;&quot; src=&quot;javascript:parent.img;    &quot; frameBorder=&quot;0&quot; scrolling=&quot;no&quot; width=&quot;100%&quot;&gt;&lt;/iframe&gt;&#39;);}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>前面也提到来可以服务端伪造请求头具体不同的语言自行搜索对应方案，这里就不一一列举了。</li></ol><h2 id="反破解" tabindex="-1"><a class="header-anchor" href="#反破解"><span>反破解</span></a></h2><p>既然有破解就当然有常用的防御机制😄</p><ol><li>不允许 <code>referer</code>为空（不建议，因在某些开启隐私模式的浏览器中，或 https 页面引用下， <code>referer</code>是空的）</li><li>地址变更（ <code>lighttpd</code>的是根据有效时间， <code>nginx</code>的根据是 <code>md5</code>，IP地址变化）</li><li>登录校验（如必须登录网站帐号后才能访问）</li></ol><p>以下是防止网站被镜像，被 <code>iframe</code></p><p><strong>1. 防止网站被镜像（被恶意解析和转发等）</strong></p><p>现象：他人域名访问到的是我的网站解析的 ip 地址我的</p><p>解决方法：</p><p>http.ini里可以这样写</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;RewriteCond Host: !^www.web\\.cn$  RewriteRule (.*) http\\://www\\.web\\.cn$1 [I,RP]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.htaccess里可以这样写</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>“RewriteCond %{HTTP_HOST} !^www.web.cn$ [NC] RewriteRule ^(.*)$ http://www.web.cn/$1 [L,R=301]”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码的意思非常简单：访问这个网站的域名如果不是 &quot;www.web.cn&quot; 就自动跳转到 &quot;www.web.cn&quot; 上。这样设置就不怕自己辛辛苦苦维护的网站被别人镜像了。</p><p><strong>2. 防止网址被 iframe</strong></p><p>代码：在页面底部或其它公用部位加入如下代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;script type=”text/javascript&gt;    if(window!=parent)   window.top.location.href = window.location.href; &lt; /script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码的意思也很简单，用js方法检测地址栏域名是不是当前网站绑定的域名，如果不是，则跳转到绑定的域名上来，这样就不怕网站被别人 <code>iframe</code>了。</p>`,52),n=[r];function o(l,s){return t(),a("div",null,n)}const u=e(i,[["render",o],["__file","图片防盗链的破解和反破解.html.vue"]]);export{u as default};
