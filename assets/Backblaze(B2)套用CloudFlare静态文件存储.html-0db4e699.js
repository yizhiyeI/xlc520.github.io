import{_ as o,W as n,X as l,Z as e,$ as a,a0 as r,Y as i,C as c}from"./framework-3ab8bde0.js";const p={},g=e("h1",{id:"backblaze-b2-套用cloudflare静态文件存储",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#backblaze-b2-套用cloudflare静态文件存储","aria-hidden":"true"},"#"),a(" Backblaze(B2)套用CloudFlare静态文件存储")],-1),s=e("h2",{id:"官方网址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官方网址","aria-hidden":"true"},"#"),a(" 官方网址")],-1),d={href:"https://www.backblaze.com",target:"_blank",rel:"noopener noreferrer"},h=i('<h2 id="免费额度" tabindex="-1"><a class="header-anchor" href="#免费额度" aria-hidden="true">#</a> 免费额度</h2><p>存储容量：10GB</p><p>网络流量：1GB/天</p><p>上传流量：无限</p><p>下载请求数：<strong>2500</strong>次/天</p><p>上传请求数：<strong>2500</strong>次/天</p><p>BUCKET(桶)：100个</p><p>BUCKET(桶)文件数：无限</p><p>超出了额度，收费$0.005 per GB per month for additional storage beyond 10 GB 和 $0.01 per GB beyond the free daily 1 GB.</p><p>这点流量能干点啥？</p><p>不过Backblaze加入了CloudFlare的 带宽联盟（ Bandwidth Alliance） ，所以Backblaze与CloudFlare之间的流量直接免费，也就是每天<strong>无限量</strong>下行流量。</p><p>配上CloudFlare配置缓存时间更久一些，辣么下载请求无限次免费啦。看看联盟有没有你熟悉的LOGO？</p><figure><img src="https://static.linch.eu.org/blogImage/c57394926b319339.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="注册账号" tabindex="-1"><a class="header-anchor" href="#注册账号" aria-hidden="true">#</a> 注册账号</h2>',14),f={href:"https://www.backblaze.com/b2/sign-up.html",target:"_blank",rel:"noopener noreferrer"},u=i('<p>填写邮箱，密码即可注册。</p><p>登陆平台 - My Account - 我的设置 - 验证Email</p><p><strong>提醒一下，界面右下角可以切换到简体中文</strong></p><figure><img src="https://static.linch.eu.org/blogImage/6aa0b5180f158c7a.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="创建bucket" tabindex="-1"><a class="header-anchor" href="#创建bucket" aria-hidden="true">#</a> 创建BUCKET</h2><p>1）登陆平台 - 创作一个桶</p><p>名称随意，桶里面的档案选择公众，其他保持默认即可</p><p><strong>特别提醒：桶名称要复杂一些，小心被刷流量！建议生成UUID</strong></p><figure><img src="https://static.linch.eu.org/blogImage/6bcae128a5aae3f2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>2）创建成功后 点击 【上载/下载】可以去上传一个文件！</p><figure><img src="https://static.linch.eu.org/blogImage/d059f7012f8e6c7f.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>3）上传成功后，单机文件可以看见文件详情内容</p>',12),b={href:"http://f004.backblazeb2.com",target:"_blank",rel:"noopener noreferrer"},_=i('<figure><img src="https://static.linch.eu.org/blogImage/5080cc13667c7a8b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="配置cf" tabindex="-1"><a class="header-anchor" href="#配置cf" aria-hidden="true">#</a> 配置CF</h2><h3 id="解析域名" tabindex="-1"><a class="header-anchor" href="#解析域名" aria-hidden="true">#</a> 解析域名</h3>',3),m={href:"http://f004.backblazeb2.com",target:"_blank",rel:"noopener noreferrer"},k={href:"https://51.ruyo.net/17863.html",target:"_blank",rel:"noopener noreferrer"},x=e("figure",null,[e("img",{src:"https://static.linch.eu.org/blogImage/f7fe01ec953be195.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),z={href:"https://b2.i0lo1o.eu.org/file/ruyonet123/default.png",target:"_blank",rel:"noopener noreferrer"},B=i('<p>格式 <code>https://域名/file/桶名称/文件名</code></p><p>经过一波骚操作，访问URL提示：Error 522 错误？？</p><figure><img src="https://static.linch.eu.org/blogImage/d8f4f762cf8bb6a5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>错误原因</p><p>Cloudflare 通过纯 HTTP 而不是 HTTPS 访问上游服务器。</p><p>但是Backblaze 仅支持安全的 HTTPS 连接，因此 HTTP 请求失败。</p><p>为了解决这个问题，在 Cloudflare 仪表板的 【SSL/TLS 部分】，将加密模式从“灵活”更改为“完全（严格）”，以便 Cloudflare 通过 HTTPS 连接到 Backblaze，并且需要 CA 颁发的证书。</p><figure><img src="https://static.linch.eu.org/blogImage/15904fb466238d83.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="设置缓存" tabindex="-1"><a class="header-anchor" href="#设置缓存" aria-hidden="true">#</a> 设置缓存</h3><p>这个非常有必要噢~~~</p><p>B2 桶 - 自己创建的桶 - 桶设定</p><p>桶信息填写(缓存一个月)：<code>{&quot;cache-control&quot;:&quot;max-age=2592000&quot;}</code></p><figure><img src="https://static.linch.eu.org/blogImage/935e290f3246a582.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>Cloudflare 域名仪表盘 - 规则 - 页面规则 - 创建页面规则</strong></p><p>URL输入 上一步中设置的域名 <code>https://b2.i0lo1o.eu.org/*</code></p><p>设置选择： 缓存级别 - 标准，边缘缓存TTL - 1个月</p><figure><img src="https://static.linch.eu.org/blogImage/370cfd749d6b3126.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="隐藏桶名" tabindex="-1"><a class="header-anchor" href="#隐藏桶名" aria-hidden="true">#</a> 隐藏桶名</h3><p>由于URL中暴露了桶名，CNAME的域名又很容易被猜到，怎么防止其他童鞋恶意刷你的免费额度呢？</p><p>下面介绍一下，怎么隐藏桶名~</p><p><strong>Cloudflare 域名仪表盘 - 规则 - 转换规则- 创建转换规则 - 重写URL</strong></p><figure><img src="https://static.linch.eu.org/blogImage/238a2376952d1ca8.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>传入请求匹配时：<code>b2.i0lo1o.eu.org</code></p><p>路径重写到：选择 Dynamic动态，<code>concat(&quot;/file/ruyonet123&quot;, http.request.uri.path)</code></p><p>这里一定要填写你自己的域名哈~~ 举一反三噢~</p>',25),y={href:"https://b2.i0lo1o.eu.org/default.png",target:"_blank",rel:"noopener noreferrer"},C=i('<h2 id="api密钥" tabindex="-1"><a class="header-anchor" href="#api密钥" aria-hidden="true">#</a> API密钥</h2><p>路径：My Account - 应用程序键 - 添加新的应用程序密钥</p><p>名称随意，允许访问桶 建议选择1个，其他默认即可</p><figure><img src="https://static.linch.eu.org/blogImage/542c803a7f301bc8.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>2）提交成功，一定要记住记住相关信息，关了以后密钥就看不到了，只能重新创建</p><figure><img src="https://static.linch.eu.org/blogImage/0372c8e08620f583.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h2><h3 id="官网上传" tabindex="-1"><a class="header-anchor" href="#官网上传" aria-hidden="true">#</a> 官网上传</h3><p>直接登陆官网，在桶里直接上传！</p><h3 id="wp插件" tabindex="-1"><a class="header-anchor" href="#wp插件" aria-hidden="true">#</a> WP插件</h3><p>支持Backblaze的Wordpress插件不少呢，比如下面2个！填写API密钥即可！</p>',11),w={href:"http://wordpress.org/plugins/updraftplus/",target:"_blank",rel:"noopener noreferrer"},I={href:"http://wordpress.org/plugins/ilab-media-tools/",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"sdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sdk","aria-hidden":"true"},"#"),a(" SDK")],-1),L=e("p",null,"官方提供多种语音的SDK",-1),U={href:"https://github.com/Backblaze/",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"其他",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),a(" 其他")],-1),S=e("p",null,"ShareX，MiXplorer",-1),A=e("h2",{id:"最后总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最后总结","aria-hidden":"true"},"#"),a(" 最后总结")],-1),P=e("p",null,"Cloudflare 在国内的访问情况不太稳定。如果仅作为境外用户访问，该方式是非常不错的！",-1),q=e("p",null,"Cloudflare 规则中可以支持防盗链等等配置，这里就不多介绍了。",-1),F=e("p",null,"B2免费额度用光，静态文件将无法访问，第二天恢复。",-1);function G(N,R){const t=c("ExternalLinkIcon");return n(),l("div",null,[g,s,e("p",null,[e("a",d,[a("https://www.backblaze.com"),r(t)])]),h,e("p",null,[e("a",f,[a("https://www.backblaze.com/b2/sign-up.html"),r(t)])]),u,e("p",null,[a("特别要记住友好URL中的域名，如图是 "),e("strong",null,[e("a",b,[a("f004.backblazeb2.com"),r(t)])])]),_,e("p",null,[a("1）登陆Cloudflare，添加一个域名。定义一个前缀CNAME到 "),e("strong",null,[e("a",m,[a("f004.backblazeb2.com"),r(t)])])]),e("p",null,[e("strong",null,[a("没有域名？参考文章："),e("a",k,[a("人人都可申请拥有EU.org免费域名"),r(t)])])]),x,e("p",null,[a("2）解析完成后，浏览器打开地址 "),e("a",z,[a("https://b2.i0lo1o.eu.org/file/ruyonet123/default.png"),r(t)])]),B,e("p",null,[e("strong",null,[a("然后浏览器打开URL："),e("a",y,[a("https://b2.i0lo1o.eu.org/default.png"),r(t)])])]),C,e("p",null,[e("a",w,[a("wordpress.org/plugins/updraftplus/"),r(t)])]),e("p",null,[e("a",I,[a("wordpress.org/plugins/ilab-media-tools/"),r(t)])]),T,L,e("p",null,[e("a",U,[a("https://github.com/Backblaze/"),r(t)])]),E,S,A,P,q,F])}const K=o(p,[["render",G],["__file","Backblaze(B2)套用CloudFlare静态文件存储.html.vue"]]);export{K as default};
