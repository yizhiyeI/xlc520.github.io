const n=JSON.parse('{"key":"v-35b1959d","path":"/dev/SpringBootBean%E7%9A%84%E5%BC%82%E6%AD%A5%E5%88%9D%E5%A7%8B%E5%8C%96.html","title":"SpringBootBean的异步初始化","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBootBean的异步初始化","description":"SpringBootBean的异步初始化","date":"2023-07-06T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBootBean%E7%9A%84%E5%BC%82%E6%AD%A5%E5%88%9D%E5%A7%8B%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBootBean的异步初始化"}],["meta",{"property":"og:description","content":"SpringBootBean的异步初始化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T15:10:28.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-07-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T15:10:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBootBean的异步初始化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-01T15:10:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1690902628000,"updatedTime":1690902628000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":238},"filePathRelative":"dev/SpringBootBean的异步初始化.md","localizedDate":"2023年7月6日","excerpt":"\\n<p>AsyncTaskExecutionListener：</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">AsyncTaskExecutionListener</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">PriorityOrdered</span><span class=\\"token punctuation\\">,</span>\\n                                       <span class=\\"token class-name\\">ApplicationListener</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">ContextRefreshedEvent</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">,</span>\\n                                       <span class=\\"token class-name\\">ApplicationContextAware</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">ApplicationContext</span> applicationContext<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">onApplicationEvent</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ContextRefreshedEvent</span> event<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>applicationContext<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>event<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getApplicationContext</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">AsyncTaskExecutor</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ensureAsyncTasksFinish</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">getOrder</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token class-name\\">Ordered</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">HIGHEST_PRECEDENCE</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setApplicationContext</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ApplicationContext</span> applicationContext<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">BeansException</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>applicationContext <span class=\\"token operator\\">=</span> applicationContext<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{n as data};
