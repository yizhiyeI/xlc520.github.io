const e=JSON.parse('{"key":"v-87289e4a","path":"/dev/docker-compose%20%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%20Elasticsearch%20%E5%92%8C%20Kibana.html","title":"docker-compose 快速部署 Elasticsearch 和 Kibana","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"docker-compose 快速部署 Elasticsearch 和 Kibana","description":"docker-compose 快速部署 Elasticsearch 和 Kibana 一、概述 使用 Docker Compose 快速部署 Elasticsearch 和 Kibana 可以帮助您在本地或开发环境中轻松设置和管理这两个重要的工具，用于存储和可视化日志数据、监控和搜索。以下是一个概述的步骤： 准备 Docker 和 Docker Com...","date":"2023-10-24T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/docker-compose%20%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%20Elasticsearch%20%E5%92%8C%20Kibana.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"docker-compose 快速部署 Elasticsearch 和 Kibana"}],["meta",{"property":"og:description","content":"docker-compose 快速部署 Elasticsearch 和 Kibana 一、概述 使用 Docker Compose 快速部署 Elasticsearch 和 Kibana 可以帮助您在本地或开发环境中轻松设置和管理这两个重要的工具，用于存储和可视化日志数据、监控和搜索。以下是一个概述的步骤： 准备 Docker 和 Docker Com..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.xlc520.tk/blogImage/640-1698065409894-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-08T13:37:37.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"docker-compose 快速部署 Elasticsearch 和 Kibana"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-10-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-08T13:37:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker-compose 快速部署 Elasticsearch 和 Kibana\\",\\"image\\":[\\"https://static.xlc520.tk/blogImage/640-1698065409894-0.png\\",\\"https://static.xlc520.tk/blogImage/640-1698065409894-1.png\\",\\"https://static.xlc520.tk/blogImage/640-1698065409894-2.png\\",\\"https://static.xlc520.tk/blogImage/640-1698065409894-3.png\\"],\\"datePublished\\":\\"2023-10-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-08T13:37:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[]},{"level":2,"title":"二、开始编排部署（Elasticsearch 和 Kibana）","slug":"二、开始编排部署-elasticsearch-和-kibana","link":"#二、开始编排部署-elasticsearch-和-kibana","children":[{"level":3,"title":"1）部署 docker","slug":"_1-部署-docker","link":"#_1-部署-docker","children":[]},{"level":3,"title":"2）部署 docker-compose","slug":"_2-部署-docker-compose","link":"#_2-部署-docker-compose","children":[]},{"level":3,"title":"3）创建网络","slug":"_3-创建网络","link":"#_3-创建网络","children":[]},{"level":3,"title":"4）创建挂载目录","slug":"_4-创建挂载目录","link":"#_4-创建挂载目录","children":[]},{"level":3,"title":"5）修改 Linux 句柄数","slug":"_5-修改-linux-句柄数","link":"#_5-修改-linux-句柄数","children":[]},{"level":3,"title":"6）修改句柄数和最大线程数","slug":"_6-修改句柄数和最大线程数","link":"#_6-修改句柄数和最大线程数","children":[]},{"level":3,"title":"7）添加 IK 分词器","slug":"_7-添加-ik-分词器","link":"#_7-添加-ik-分词器","children":[]},{"level":3,"title":"8）编写配置文件","slug":"_8-编写配置文件","link":"#_8-编写配置文件","children":[]},{"level":3,"title":"9）构建镜像","slug":"_9-构建镜像","link":"#_9-构建镜像","children":[]},{"level":3,"title":"10）编排 docker-compose.yml","slug":"_10-编排-docker-compose-yml","link":"#_10-编排-docker-compose-yml","children":[]},{"level":3,"title":"11）测试验证","slug":"_11-测试验证","link":"#_11-测试验证","children":[]}]}],"git":{"createdTime":1699443604000,"updatedTime":1699450657000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":12.31,"words":3694},"filePathRelative":"dev/docker-compose 快速部署 Elasticsearch 和 Kibana.md","localizedDate":"2023年10月24日","excerpt":"\\n<h2>一、概述</h2>\\n<p>使用 Docker Compose 快速部署 Elasticsearch 和 Kibana 可以帮助您在本地或开发环境中轻松设置和管理这两个重要的工具，用于存储和可视化日志数据、监控和搜索。以下是一个概述的步骤：</p>","autoDesc":true}');export{e as data};
