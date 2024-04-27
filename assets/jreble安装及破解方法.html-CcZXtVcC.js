import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c,b as a,d as n,e as s,a as e}from"./app-CXNU22eb.js";const o={},r=e('<h1 id="jreble-安装及破解方法" tabindex="-1"><a class="header-anchor" href="#jreble-安装及破解方法"><span>jreble 安装及破解方法</span></a></h1><p>在项目开发的过程中我们经常要重启项目进行代码的重新加载，在大项目开发的过程中这种不断的重新启动项目会浪费很多时间，在 IDEA 中我们可以使用 ctrl+F9 的方式进行热加载，但是这种方式对方法名的修改，和新加方法不能很好的支持。本章我们讲解一下功能强大的 jrebel 热加载工具，可以在不重启的情况下对新加的类、方法的修改都有很多好的支持，可以在实际项目开发中节省大量的时间，下面我们就一步一步开始进行安装设置。 **</p><h2 id="一、安装插件" tabindex="-1"><a class="header-anchor" href="#一、安装插件"><span><strong>一、安装插件</strong></span></a></h2><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-c19397d241007d79c422291524cc08d6_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="二、获取-git-代理服务器文件" tabindex="-1"><a class="header-anchor" href="#二、获取-git-代理服务器文件"><span><strong>二、获取 git 代理服务器文件</strong></span></a></h2>',5),g={href:"https://github.com/ilanyu/ReverseProxy/releases/tag/v1.0",target:"_blank",rel:"noopener noreferrer"},u=a("figure",null,[a("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0531c01eea2c41be17b1101f67abdc99_r.jpg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),d=a("p",null,"安装运行文件，监听端口 8888",-1),m=a("figure",null,[a("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-6d125df94f8e74239f5406a6058272fa_r.jpg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),b=a("h2",{id:"三、运行-idea-激活",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#三、运行-idea-激活"},[a("span",null,[a("strong",null,"三、运行 IDEA 激活")])])],-1),k={href:"https://www.guidgen.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.guidgen.com/",target:"_blank",rel:"noopener noreferrer"},f=a("figure",null,[a("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-d13f9f1a60a0cd14598e76dcadf28e5e_r.jpg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),v={href:"http://127.0.0.1:8888/%E7%BD%91%E7%AB%99%E8%8E%B7%E5%8F%96%E7%9A%84",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>稍等一下会出现激活界面：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-a8ec52ff05355f905397e7e2e34bda6d_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="四、在-maven-配置加入-jrebel" tabindex="-1"><a class="header-anchor" href="#四、在-maven-配置加入-jrebel"><span><strong>四、在 maven 配置加入 jrebel</strong></span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.zeroturnaround<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jrebel-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>generate-rebel-xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>process-resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>generate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、设置编译方式" tabindex="-1"><a class="header-anchor" href="#五、设置编译方式"><span><strong>五、设置编译方式</strong></span></a></h2><p><strong>1） 设置为自动编译项目</strong></p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0321ff68c6fc9815509cdfb485fc9bd7_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>2） ctrl+alt+shit + / 调用 register 勾选</strong></p><p>并找到图中红框的选项&quot;compller.automake.allow.when.app.running&quot;并勾选</p><p>close 掉即可，此时已经生效，修改代码后 ctrl+s 会自动重新编译</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-6f704cfa339181e74bdecde476fd083c_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="六、启动测试" tabindex="-1"><a class="header-anchor" href="#六、启动测试"><span><strong>六、启动测试</strong></span></a></h2><p>启动 jrebel 功能： debug</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0f04281ce71caf38d62bf491a89780d2_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>项目启动完成在 controller 加入新方法，可以看到控制台输出热部署记载提示。</p><p>在 idea 中自带的 ctrl+f9 可以在不修改方法的情况下进行热加载，添加或修改后就不能重新编译了。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-f7b5a2963397475acad2c6183cedb291_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>访问测试</p><p>可以看到新加方法生效了。</p>`,19);function x(j,y){const t=p("ExternalLinkIcon");return i(),c("div",null,[r,a("p",null,[a("a",g,[n("ilanyu/ReverseProxygithub.com/ilanyu/ReverseProxy/releases/tag/v1.0"),s(t)])]),u,d,m,b,a("p",null,[a("a",k,[n("访问"),s(t)]),n("： "),a("a",h,[n("Generate GUIDs online"),s(t)]),n("生成 ID ，选择激活服务器激活：")]),f,a("p",null,[n("服务器写入 "),a("a",v,[n("http://127.0.0.1:8888/网站获取的"),s(t)]),n(" ID 邮箱随便填写。")]),_])}const A=l(o,[["render",x],["__file","jreble安装及破解方法.html.vue"]]),I=JSON.parse('{"path":"/dev/jreble%E5%AE%89%E8%A3%85%E5%8F%8A%E7%A0%B4%E8%A7%A3%E6%96%B9%E6%B3%95.html","title":"jreble安装及破解方法","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"jreble安装及破解方法","excerpt":null,"description":"jreble 安装及破解方法 在项目开发的过程中我们经常要重启项目进行代码的重新加载，在大项目开发的过程中这种不断的重新启动项目会浪费很多时间，在 IDEA 中我们可以使用 ctrl+F9 的方式进行热加载，但是这种方式对方法名的修改，和新加方法不能很好的支持。本章我们讲解一下功能强大的 jrebel 热加载工具，可以在不重启的情况下对新加的类、方法的...","date":"2023-01-10T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/jreble%E5%AE%89%E8%A3%85%E5%8F%8A%E7%A0%B4%E8%A7%A3%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"jreble安装及破解方法"}],["meta",{"property":"og:description","content":"jreble 安装及破解方法 在项目开发的过程中我们经常要重启项目进行代码的重新加载，在大项目开发的过程中这种不断的重新启动项目会浪费很多时间，在 IDEA 中我们可以使用 ctrl+F9 的方式进行热加载，但是这种方式对方法名的修改，和新加方法不能很好的支持。本章我们讲解一下功能强大的 jrebel 热加载工具，可以在不重启的情况下对新加的类、方法的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-c19397d241007d79c422291524cc08d6_r.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jreble安装及破解方法\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-c19397d241007d79c422291524cc08d6_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0531c01eea2c41be17b1101f67abdc99_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-6d125df94f8e74239f5406a6058272fa_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-d13f9f1a60a0cd14598e76dcadf28e5e_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-a8ec52ff05355f905397e7e2e34bda6d_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0321ff68c6fc9815509cdfb485fc9bd7_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-6f704cfa339181e74bdecde476fd083c_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0f04281ce71caf38d62bf491a89780d2_r.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-f7b5a2963397475acad2c6183cedb291_r.jpg\\"],\\"datePublished\\":\\"2023-01-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一、安装插件","slug":"一、安装插件","link":"#一、安装插件","children":[]},{"level":2,"title":"二、获取 git 代理服务器文件","slug":"二、获取-git-代理服务器文件","link":"#二、获取-git-代理服务器文件","children":[]},{"level":2,"title":"三、运行 IDEA 激活","slug":"三、运行-idea-激活","link":"#三、运行-idea-激活","children":[]},{"level":2,"title":"四、在 maven 配置加入 jrebel","slug":"四、在-maven-配置加入-jrebel","link":"#四、在-maven-配置加入-jrebel","children":[]},{"level":2,"title":"五、设置编译方式","slug":"五、设置编译方式","link":"#五、设置编译方式","children":[]},{"level":2,"title":"六、启动测试","slug":"六、启动测试","link":"#六、启动测试","children":[]}],"git":{"createdTime":1673687351000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":4},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"dev/jreble安装及破解方法.md","localizedDate":"2023年1月10日","autoDesc":true}');export{A as comp,I as data};
