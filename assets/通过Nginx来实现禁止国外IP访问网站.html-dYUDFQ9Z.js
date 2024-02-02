const t=JSON.parse('{"key":"v-6926cfaa","path":"/dev/%E9%80%9A%E8%BF%87Nginx%E6%9D%A5%E5%AE%9E%E7%8E%B0%E7%A6%81%E6%AD%A2%E5%9B%BD%E5%A4%96IP%E8%AE%BF%E9%97%AE%E7%BD%91%E7%AB%99.html","title":"通过Nginx来实现禁止国外IP访问网站","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"通过Nginx来实现禁止国外IP访问网站","description":"通过Nginx来实现禁止国外IP访问网站 前言： 先来说说为啥要写这篇文章，之前小编看了下nginx 的访问日志，发现每天有好多国外的IP地址来访问我的网站，并且访问的内容基本上都是恶意的。因此 我决定 禁止国外IP 来访问我的网站 想要实现这个功能有很多方法，下面我就来介绍基于 NGINX的ngx_http_geoip2模块 来禁止国外IP 访问网站...","date":"2022-06-19T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E9%80%9A%E8%BF%87Nginx%E6%9D%A5%E5%AE%9E%E7%8E%B0%E7%A6%81%E6%AD%A2%E5%9B%BD%E5%A4%96IP%E8%AE%BF%E9%97%AE%E7%BD%91%E7%AB%99.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"通过Nginx来实现禁止国外IP访问网站"}],["meta",{"property":"og:description","content":"通过Nginx来实现禁止国外IP访问网站 前言： 先来说说为啥要写这篇文章，之前小编看了下nginx 的访问日志，发现每天有好多国外的IP地址来访问我的网站，并且访问的内容基本上都是恶意的。因此 我决定 禁止国外IP 来访问我的网站 想要实现这个功能有很多方法，下面我就来介绍基于 NGINX的ngx_http_geoip2模块 来禁止国外IP 访问网站..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.xlc520.tk/blogImage/a965a80a0e354dde96ba5fa1091cf86f.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-22T03:29:32.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"通过Nginx来实现禁止国外IP访问网站"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-22T03:29:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过Nginx来实现禁止国外IP访问网站\\",\\"image\\":[\\"https://static.xlc520.tk/blogImage/a965a80a0e354dde96ba5fa1091cf86f.png\\",\\"https://static.xlc520.tk/blogImage/c3e087baa970419593541115de1ad8be.png\\",\\"https://static.xlc520.tk/blogImage/bfc6d7c990cf41b08b13280b8ee9f0e8.png\\",\\"https://static.xlc520.tk/blogImage/58effbcb1b4d4422b637a238d8371051.png\\",\\"https://static.xlc520.tk/blogImage/fca231769f3c40458a321bdca7c356f1.png\\",\\"https://static.xlc520.tk/blogImage/ac732b838fd84cf9a1ba52a27c13d76d.png\\",\\"https://static.xlc520.tk/blogImage/e74537e1a7b4476098d4e68a38203704.png\\"],\\"datePublished\\":\\"2022-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-22T03:29:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1668948234000,"updatedTime":1692674972000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":5}]},"readingTime":{"minutes":3.98,"words":1195},"filePathRelative":"dev/通过Nginx来实现禁止国外IP访问网站.md","localizedDate":"2022年6月19日","excerpt":"\\n<p>前言： 先来说说为啥要写这篇文章，之前小编看了下nginx 的访问日志，发现每天有好多国外的IP地址来访问我的网站，并且访问的内容基本上都是恶意的。因此 我决定 禁止国外IP 来访问我的网站</p>","autoDesc":true}');export{t as data};
