const t=JSON.parse('{"key":"v-bb952da6","path":"/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%952.html","title":"SpringBoot整合Mybatis-plus及用法2","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot整合Mybatis-plus及用法2","description":"SpringBoot整合Mybatis-plus及用法2 创建项目 普通的spring-boot项目，在 start.spring.io或者使用idea创建都行，相关依赖如下 我这版本用的springboot版本是 2.1.4 &lt;dependencies&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt; \\t\\t&lt;scope&gt;runtime&lt;/scope&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;mysql&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt; \\t\\t&lt;scope&gt;runtime&lt;/scope&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.projectlombok&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;lombok&lt;/artifactId&gt; \\t\\t&lt;optional&gt;true&lt;/optional&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt; \\t\\t&lt;scope&gt;test&lt;/scope&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;com.baomidou&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt; \\t\\t&lt;version&gt;3.1.0&lt;/version&gt; \\t&lt;/dependency&gt; &lt;/dependencies&gt; &lt;build&gt; \\t&lt;resources&gt; \\t\\t&lt;resource&gt; \\t\\t\\t&lt;directory&gt;src/main/java&lt;/directory&gt; \\t\\t\\t&lt;includes&gt; \\t\\t\\t\\t&lt;include&gt;**/*.xml&lt;/include&gt; \\t\\t\\t&lt;/includes&gt; \\t\\t\\t&lt;filtering&gt;true&lt;/filtering&gt; \\t\\t&lt;/resource&gt; \\t\\t&lt;resource&gt; \\t\\t\\t&lt;directory&gt;src/main/resources&lt;/directory&gt; \\t\\t&lt;/resource&gt; \\t&lt;/resources&gt; &lt;/build&gt;","date":"2022-07-02T00:00:00.000Z","category":"Java","tag":["Java","SpringBoot","Mybatis-plus"],"article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%952.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot整合Mybatis-plus及用法2"}],["meta",{"property":"og:description","content":"SpringBoot整合Mybatis-plus及用法2 创建项目 普通的spring-boot项目，在 start.spring.io或者使用idea创建都行，相关依赖如下 我这版本用的springboot版本是 2.1.4 &lt;dependencies&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt; \\t\\t&lt;scope&gt;runtime&lt;/scope&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;mysql&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt; \\t\\t&lt;scope&gt;runtime&lt;/scope&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.projectlombok&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;lombok&lt;/artifactId&gt; \\t\\t&lt;optional&gt;true&lt;/optional&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt; \\t\\t&lt;scope&gt;test&lt;/scope&gt; \\t&lt;/dependency&gt; \\t&lt;dependency&gt; \\t\\t&lt;groupId&gt;com.baomidou&lt;/groupId&gt; \\t\\t&lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt; \\t\\t&lt;version&gt;3.1.0&lt;/version&gt; \\t&lt;/dependency&gt; &lt;/dependencies&gt; &lt;build&gt; \\t&lt;resources&gt; \\t\\t&lt;resource&gt; \\t\\t\\t&lt;directory&gt;src/main/java&lt;/directory&gt; \\t\\t\\t&lt;includes&gt; \\t\\t\\t\\t&lt;include&gt;**/*.xml&lt;/include&gt; \\t\\t\\t&lt;/includes&gt; \\t\\t\\t&lt;filtering&gt;true&lt;/filtering&gt; \\t\\t&lt;/resource&gt; \\t\\t&lt;resource&gt; \\t\\t\\t&lt;directory&gt;src/main/resources&lt;/directory&gt; \\t\\t&lt;/resource&gt; \\t&lt;/resources&gt; &lt;/build&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"Mybatis-plus"}],["meta",{"property":"article:published_time","content":"2022-07-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot整合Mybatis-plus及用法2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"建表","slug":"建表","link":"#建表","children":[]},{"level":2,"title":"创建实体类","slug":"创建实体类","link":"#创建实体类","children":[]},{"level":2,"title":"创建mapper","slug":"创建mapper","link":"#创建mapper","children":[]},{"level":2,"title":"创建service","slug":"创建service","link":"#创建service","children":[]},{"level":2,"title":"创建controller","slug":"创建controller","link":"#创建controller","children":[]},{"level":2,"title":"添加包扫描","slug":"添加包扫描","link":"#添加包扫描","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"xml怎么配置","slug":"xml怎么配置","link":"#xml怎么配置","children":[]},{"level":2,"title":"自定义返回结果","slug":"自定义返回结果","link":"#自定义返回结果","children":[]},{"level":2,"title":"map转驼峰","slug":"map转驼峰","link":"#map转驼峰","children":[]},{"level":2,"title":"BaseMapper分页","slug":"basemapper分页","link":"#basemapper分页","children":[]},{"level":2,"title":"自定义查询分页","slug":"自定义查询分页","link":"#自定义查询分页","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":8.47,"words":2542},"filePathRelative":"dev/SpringBoot整合Mybatis-plus及用法2.md","localizedDate":"2022年7月2日","excerpt":"<h1> SpringBoot整合Mybatis-plus及用法2</h1>\\n<h2> 创建项目</h2>\\n<p>普通的spring-boot项目，在 <a href=\\"https://start.spring.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">start.spring.io</a>或者使用idea创建都行，相关依赖如下</p>\\n<p>我这版本用的springboot版本是 2.1.4</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-web<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-devtools<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>runtime<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>mysql<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>mysql-connector-java<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>runtime<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.projectlombok<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>lombok<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>optional</span><span class=\\"token punctuation\\">&gt;</span></span>true<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>optional</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-test<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>test<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>com.baomidou<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>mybatis-plus-boot-starter<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>3.1.0<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>build</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>resources</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>resource</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>directory</span><span class=\\"token punctuation\\">&gt;</span></span>src/main/java<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>directory</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>includes</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>include</span><span class=\\"token punctuation\\">&gt;</span></span>**/*.xml<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>include</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>includes</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>filtering</span><span class=\\"token punctuation\\">&gt;</span></span>true<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>filtering</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>resource</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>resource</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>directory</span><span class=\\"token punctuation\\">&gt;</span></span>src/main/resources<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>directory</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>resource</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>resources</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>build</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
