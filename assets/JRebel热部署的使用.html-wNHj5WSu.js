const e=JSON.parse('{"key":"v-05f16561","path":"/dev/JRebel%E7%83%AD%E9%83%A8%E7%BD%B2%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"JRebel热部署的使用","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"JRebel热部署的使用","description":"JRebel热部署的使用 对比图： JRebel热部署的使用JRebel热部署的使用 IDEA在这里配置了自动编译： JRebel热部署的使用JRebel热部署的使用 所以当你的代码有变化时，JRebel会自动重新加载最新的代码，所以不用你手动重新编译 注意事项： c盘下的用户名一定不能为中文名称，否则会一直提示路径错误 注意事项注意事项 1、安装jr...","date":"2022-07-09T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/JRebel%E7%83%AD%E9%83%A8%E7%BD%B2%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"JRebel热部署的使用"}],["meta",{"property":"og:description","content":"JRebel热部署的使用 对比图： JRebel热部署的使用JRebel热部署的使用 IDEA在这里配置了自动编译： JRebel热部署的使用JRebel热部署的使用 所以当你的代码有变化时，JRebel会自动重新加载最新的代码，所以不用你手动重新编译 注意事项： c盘下的用户名一定不能为中文名称，否则会一直提示路径错误 注意事项注意事项 1、安装jr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.xlc520.tk/blogImage/feabc010fbd0a0467f3bcb155faede3b-16565707073351.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-22T03:29:32.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JRebel热部署的使用"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-07-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-22T03:29:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JRebel热部署的使用\\",\\"image\\":[\\"https://static.xlc520.tk/blogImage/feabc010fbd0a0467f3bcb155faede3b-16565707073351.png\\",\\"https://static.xlc520.tk/blogImage/c2dc072b4fb156f0ee8da0c3dd86abb5-16565707098543.png\\",\\"https://static.xlc520.tk/blogImage/20210318093831211.png\\",\\"https://static.xlc520.tk/blogImage/20210318095405727.png\\",\\"https://static.xlc520.tk/blogImage/2021031809551542.png\\",\\"https://static.xlc520.tk/blogImage/715c5a15e09cf6bf8bc357073a697464.png\\",\\"https://static.xlc520.tk/blogImage/20210318094513359.png\\",\\"https://static.xlc520.tk/blogImage/2021031809480460.png\\",\\"https://static.xlc520.tk/blogImage/20210318100401836.png\\",\\"https://static.xlc520.tk/blogImage/20210318100852670.png\\",\\"https://static.xlc520.tk/blogImage/20210603103938126.png\\",\\"https://static.xlc520.tk/blogImage/20210603104004373.png\\",\\"https://static.xlc520.tk/blogImage/20210603104217131.png\\",\\"https://static.xlc520.tk/blogImage/2021060310490611.png\\",\\"https://static.xlc520.tk/blogImage/20210603104826766.png\\",\\"https://static.xlc520.tk/blogImage/20210603105037206.png\\",\\"https://static.xlc520.tk/blogImage/20210603105130362.png\\",\\"https://static.xlc520.tk/blogImage/20210603105243414.png\\",\\"https://static.xlc520.tk/blogImage/2021060310541226.png\\"],\\"datePublished\\":\\"2022-07-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-22T03:29:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"注意事项：","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"1、安装jrebel插件","slug":"_1、安装jrebel插件","link":"#_1、安装jrebel插件","children":[]},{"level":2,"title":"2、配置jrebel插件","slug":"_2、配置jrebel插件","link":"#_2、配置jrebel插件","children":[{"level":3,"title":"2.1激活jrebel","slug":"_2-1激活jrebel","link":"#_2-1激活jrebel","children":[]}]},{"level":2,"title":"3、JRebel 配置","slug":"_3、jrebel-配置","link":"#_3、jrebel-配置","children":[{"level":3,"title":"3、1 将工作模式改成离线工作，！！！！","slug":"_3、1-将工作模式改成离线工作","link":"#_3、1-将工作模式改成离线工作","children":[]}]},{"level":2,"title":"4、使用jreBel","slug":"_4、使用jrebel","link":"#_4、使用jrebel","children":[{"level":3,"title":"4、1 进行项目热部署","slug":"_4、1-进行项目热部署","link":"#_4、1-进行项目热部署","children":[]},{"level":3,"title":"4、3 更改后使用ctrl+f9实现不重启服务器部署项目","slug":"_4、3-更改后使用ctrl-f9实现不重启服务器部署项目","link":"#_4、3-更改后使用ctrl-f9实现不重启服务器部署项目","children":[]},{"level":3,"title":"4、4 录制快捷键","slug":"_4、4-录制快捷键","link":"#_4、4-录制快捷键","children":[]},{"level":3,"title":"警告！！！","slug":"警告","link":"#警告","children":[]}]}],"git":{"createdTime":1668948234000,"updatedTime":1692674972000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":5}]},"readingTime":{"minutes":2.78,"words":835},"filePathRelative":"dev/JRebel热部署的使用.md","localizedDate":"2022年7月9日","excerpt":"\\n<p>对比图：</p>\\n<figure><img src=\\"https://static.xlc520.tk/blogImage/feabc010fbd0a0467f3bcb155faede3b-16565707073351.png\\" alt=\\"JRebel热部署的使用\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>JRebel热部署的使用</figcaption></figure>","autoDesc":true}');export{e as data};
