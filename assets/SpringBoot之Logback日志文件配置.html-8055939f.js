const e=JSON.parse('{"key":"v-0139d43f","path":"/dev/SpringBoot%E4%B9%8BLogback%E6%97%A5%E5%BF%97%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE.html","title":"SpringBoot之Logback日志文件配置","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot之Logback日志文件配置","description":"SpringBoot之Logback日志文件配置 概述 Logback是一个日志框架，Logback和Log4j都是开源的日志工具库，Logback是Log4j的改良版本，内置实现了slf4j，比Log4j拥有更多的特性，性能也带来很大提升。SpringBoot默认内置了Logback日志框架，Spring Boot 集成logback需要添加 spring-boot-starter-logging 依赖，而此依赖已经在 spring-boot-starter 中添加过了，所以不用再添加此依赖了(如下图) ：","date":"2023-03-03T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E4%B9%8BLogback%E6%97%A5%E5%BF%97%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot之Logback日志文件配置"}],["meta",{"property":"og:description","content":"SpringBoot之Logback日志文件配置 概述 Logback是一个日志框架，Logback和Log4j都是开源的日志工具库，Logback是Log4j的改良版本，内置实现了slf4j，比Log4j拥有更多的特性，性能也带来很大提升。SpringBoot默认内置了Logback日志框架，Spring Boot 集成logback需要添加 spring-boot-starter-logging 依赖，而此依赖已经在 spring-boot-starter 中添加过了，所以不用再添加此依赖了(如下图) ："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-15T08:56:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-03-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T08:56:11.000Z"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"配置详解","slug":"配置详解","link":"#配置详解","children":[{"level":3,"title":"configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"appender","slug":"appender","link":"#appender","children":[]},{"level":3,"title":"<logger>","slug":"logger","link":"#logger","children":[]},{"level":3,"title":"<root>","slug":"root","link":"#root","children":[]},{"level":3,"title":"<contextName>","slug":"contextname","link":"#contextname","children":[]},{"level":3,"title":"<property>","slug":"property","link":"#property","children":[]},{"level":3,"title":"<timestamp>","slug":"timestamp","link":"#timestamp","children":[]}]},{"level":2,"title":"完整配置demo","slug":"完整配置demo","link":"#完整配置demo","children":[{"level":3,"title":"示例一","slug":"示例一","link":"#示例一","children":[]},{"level":3,"title":"示例二：过滤掉某些级别的信息","slug":"示例二-过滤掉某些级别的信息","link":"#示例二-过滤掉某些级别的信息","children":[]},{"level":3,"title":"示例三：自动压缩存储按照日期分割后的日志","slug":"示例三-自动压缩存储按照日期分割后的日志","link":"#示例三-自动压缩存储按照日期分割后的日志","children":[]}]}],"git":{"createdTime":1678870571000,"updatedTime":1678870571000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":14.75,"words":4426},"filePathRelative":"dev/SpringBoot之Logback日志文件配置.md","localizedDate":"2023年3月3日","excerpt":"<h1> SpringBoot之Logback日志文件配置</h1>\\n<h2> 概述</h2>\\n<p>Logback是一个日志框架，Logback和Log4j都是开源的日志工具库，Logback是Log4j的改良版本，内置实现了slf4j，比Log4j拥有更多的特性，性能也带来很大提升。SpringBoot默认内置了Logback日志框架，Spring Boot 集成logback需要添加 <code>spring-boot-starter-logging</code> 依赖，而此依赖已经在 <code>spring-boot-starter</code> 中添加过了，所以不用再添加此依赖了(如下图) ：\\n<a href=\\"https://pic.imgdb.cn/item/6123ac4244eaada7399e7576.jpg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://static.xlc520.ml/blogImage/6123ac4244eaada7399e7576.jpg\\" alt=\\"img\\" loading=\\"lazy\\"></a></p>","autoDesc":true}');export{e as data};
