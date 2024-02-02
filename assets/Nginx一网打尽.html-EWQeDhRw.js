const t=JSON.parse(`{"key":"v-7aba7e62","path":"/linux/Nginx%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD.html","title":"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化","description":"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化 引言 一、性能怪兽-Nginx概念深入浅出 二、Nginx环境搭建 三、Nginx反向代理-负载均衡 四、Nginx动静分离 五、Nginx资源压缩 六、Nginx缓冲区 七、Nginx缓存机制 八、Nginx实现IP黑白名单 九、Nginx跨域配置 十、Nginx防盗链设计 ...","date":"2023-01-20T00:00:00.000Z","category":"Linux","tag":"Linux","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Nginx%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化"}],["meta",{"property":"og:description","content":"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化 引言 一、性能怪兽-Nginx概念深入浅出 二、Nginx环境搭建 三、Nginx反向代理-负载均衡 四、Nginx动静分离 五、Nginx资源压缩 六、Nginx缓冲区 七、Nginx缓存机制 八、Nginx实现IP黑白名单 九、Nginx跨域配置 十、Nginx防盗链设计 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.xlc520.tk/blogImage/640-1674181929662-0.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-22T03:29:32.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-01-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-22T03:29:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化\\",\\"image\\":[\\"https://static.xlc520.tk/blogImage/640-1674181929662-0.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1674181929661-1.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1674181929661-2.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1674181929661-3.gif\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-4.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-5.jpeg\\",\\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-6.jpeg\\",\\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-7.png\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-8.png\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-9.png\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-10.png\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-11.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-12.png\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-13.png\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-14.png\\",\\"https://static.xlc520.tk/blogImage/640-1674181929662-15.png\\"],\\"datePublished\\":\\"2023-01-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-22T03:29:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"一、性能怪兽-Nginx概念深入浅出","slug":"一、性能怪兽-nginx概念深入浅出","link":"#一、性能怪兽-nginx概念深入浅出","children":[]},{"level":2,"title":"二、Nginx环境搭建","slug":"二、nginx环境搭建","link":"#二、nginx环境搭建","children":[]},{"level":2,"title":"三、Nginx反向代理-负载均衡","slug":"三、nginx反向代理-负载均衡","link":"#三、nginx反向代理-负载均衡","children":[]},{"level":2,"title":"四、Nginx动静分离","slug":"四、nginx动静分离","link":"#四、nginx动静分离","children":[]},{"level":2,"title":"五、Nginx资源压缩","slug":"五、nginx资源压缩","link":"#五、nginx资源压缩","children":[]},{"level":2,"title":"六、Nginx缓冲区","slug":"六、nginx缓冲区","link":"#六、nginx缓冲区","children":[]},{"level":2,"title":"七、Nginx缓存机制","slug":"七、nginx缓存机制","link":"#七、nginx缓存机制","children":[]},{"level":2,"title":"八、Nginx实现IP黑白名单","slug":"八、nginx实现ip黑白名单","link":"#八、nginx实现ip黑白名单","children":[]},{"level":2,"title":"九、Nginx跨域配置","slug":"九、nginx跨域配置","link":"#九、nginx跨域配置","children":[]},{"level":2,"title":"十、Nginx防盗链设计","slug":"十、nginx防盗链设计","link":"#十、nginx防盗链设计","children":[]},{"level":2,"title":"十一、Nginx大文件传输配置","slug":"十一、nginx大文件传输配置","link":"#十一、nginx大文件传输配置","children":[]},{"level":2,"title":"十二、Nginx配置SLL证书","slug":"十二、nginx配置sll证书","link":"#十二、nginx配置sll证书","children":[]},{"level":2,"title":"十三、Nginx的高可用","slug":"十三、nginx的高可用","link":"#十三、nginx的高可用","children":[]},{"level":2,"title":"十四、Nginx性能优化","slug":"十四、nginx性能优化","link":"#十四、nginx性能优化","children":[]},{"level":2,"title":"十五、放在最后的结尾","slug":"十五、放在最后的结尾","link":"#十五、放在最后的结尾","children":[]}],"git":{"createdTime":1674182259000,"updatedTime":1692674972000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":4}]},"readingTime":{"minutes":43.4,"words":13021},"filePathRelative":"linux/Nginx一网打尽.md","localizedDate":"2023年1月20日","excerpt":"\\n<ul>\\n<li>引言</li>\\n<li>一、性能怪兽-Nginx概念深入浅出</li>\\n<li>二、Nginx环境搭建</li>\\n<li>三、Nginx反向代理-负载均衡</li>\\n<li>四、Nginx动静分离</li>\\n<li>五、Nginx资源压缩</li>\\n<li>六、Nginx缓冲区</li>\\n<li>七、Nginx缓存机制</li>\\n<li>八、Nginx实现IP黑白名单</li>\\n<li>九、Nginx跨域配置</li>\\n<li>十、Nginx防盗链设计</li>\\n<li>十一、Nginx大文件传输配置</li>\\n<li>十二、Nginx配置SLL证书</li>\\n<li>十三、Nginx的高可用</li>\\n<li>十四、Nginx性能优化</li>\\n<li>十五、放在最后的结尾</li>\\n</ul>","autoDesc":true}`);export{t as data};
