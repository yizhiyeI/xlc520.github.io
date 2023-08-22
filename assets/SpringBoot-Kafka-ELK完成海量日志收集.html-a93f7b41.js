const t=JSON.parse('{"key":"v-6b58bd54","path":"/dev/SpringBoot-Kafka-ELK%E5%AE%8C%E6%88%90%E6%B5%B7%E9%87%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86.html","title":"SpringBoot-Kafka-ELK 完成海量日志收集","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot-Kafka-ELK 完成海量日志收集","description":"SpringBoot-Kafka-ELK 完成海量日志收集 整体流程大概如下： SpringBoot+Kafka+ELK 服务器准备 在这先列出各服务器节点，方便同学们在下文中对照节点查看相应内容 SpringBoot+Kafka+ELK","date":"2022-08-05T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot-Kafka-ELK%E5%AE%8C%E6%88%90%E6%B5%B7%E9%87%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot-Kafka-ELK 完成海量日志收集"}],["meta",{"property":"og:description","content":"SpringBoot-Kafka-ELK 完成海量日志收集 整体流程大概如下： SpringBoot+Kafka+ELK 服务器准备 在这先列出各服务器节点，方便同学们在下文中对照节点查看相应内容 SpringBoot+Kafka+ELK"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-22T03:29:32.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-08-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-22T03:29:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot-Kafka-ELK 完成海量日志收集\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-22T03:29:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":3,"title":"服务器准备","slug":"服务器准备","link":"#服务器准备","children":[]},{"level":3,"title":"SpringBoot项目准备","slug":"springboot项目准备","link":"#springboot项目准备","children":[]},{"level":3,"title":"Kafka安装和启用","slug":"kafka安装和启用","link":"#kafka安装和启用","children":[]},{"level":3,"title":"filebeat安装和启用","slug":"filebeat安装和启用","link":"#filebeat安装和启用","children":[]},{"level":3,"title":"logstash安装","slug":"logstash安装","link":"#logstash安装","children":[]},{"level":3,"title":"ElasticSearch与Kibana","slug":"elasticsearch与kibana","link":"#elasticsearch与kibana","children":[]}],"git":{"createdTime":1681887854000,"updatedTime":1692674972000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":4}]},"readingTime":{"minutes":7.36,"words":2208},"filePathRelative":"dev/SpringBoot-Kafka-ELK完成海量日志收集.md","localizedDate":"2022年8月5日","excerpt":"<h1> SpringBoot-Kafka-ELK 完成海量日志收集</h1>\\n<p>整体流程大概如下：</p>\\n<figure><img src=\\"https://static.xlc520.tk/blogImage/640-16577076343400.png\\" alt=\\"SpringBoot+Kafka+ELK\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>SpringBoot+Kafka+ELK</figcaption></figure>\\n<h3> 服务器准备</h3>\\n<p>在这先列出各服务器节点，方便同学们在下文中对照节点查看相应内容</p>\\n<figure><img src=\\"https://static.xlc520.tk/blogImage/640-16577076343401.png\\" alt=\\"SpringBoot+Kafka+ELK\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>SpringBoot+Kafka+ELK</figcaption></figure>","autoDesc":true}');export{t as data};
