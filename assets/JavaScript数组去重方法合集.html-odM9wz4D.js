const n=JSON.parse('{"key":"v-3af208a2","path":"/dev/JavaScript%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%E6%96%B9%E6%B3%95%E5%90%88%E9%9B%86.html","title":"JavaScript数组去重方法合集","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"JavaScript数组去重方法合集","description":"JavaScript数组去重方法合集","date":"2023-11-16T00:00:00.000Z","category":"JavaScript","tag":"JavaScript","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/JavaScript%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%E6%96%B9%E6%B3%95%E5%90%88%E9%9B%86.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"JavaScript数组去重方法合集"}],["meta",{"property":"og:description","content":"JavaScript数组去重方法合集"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-07T11:49:56.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-11-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-07T11:49:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript数组去重方法合集\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-07T11:49:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"01. 双重for循环","slug":"_01-双重for循环","link":"#_01-双重for循环","children":[]},{"level":2,"title":"02. for 循环 + indexOf 去重","slug":"_02-for-循环-indexof-去重","link":"#_02-for-循环-indexof-去重","children":[]},{"level":2,"title":"03. indexOf 方法","slug":"_03-indexof-方法","link":"#_03-indexof-方法","children":[]},{"level":2,"title":"04. includes实现数组去重","slug":"_04-includes实现数组去重","link":"#_04-includes实现数组去重","children":[]},{"level":2,"title":"05. filter() 去重","slug":"_05-filter-去重","link":"#_05-filter-去重","children":[]},{"level":2,"title":"06. ES6 Set结构 new Set()","slug":"_06-es6-set结构-new-set","link":"#_06-es6-set结构-new-set","children":[]}],"git":{"createdTime":1701949796000,"updatedTime":1701949796000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"dev/JavaScript数组去重方法合集.md","localizedDate":"2023年11月16日","excerpt":"<h1> JavaScript数组去重方法合集</h1>\\n<h2> <strong>01. 双重for循环</strong></h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>\\n<span class=\\"token keyword\\">var</span> arr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">12</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">33</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">43</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">15</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">9</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">deduplication</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">arr</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n   <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">var</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> arr<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n       <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">var</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> arr<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n           <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&amp;&amp;</span> i <span class=\\"token operator\\">!=</span> j<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> \\n              arr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">splice</span><span class=\\"token punctuation\\">(</span>j<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n       <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> arr<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">var</span> arr2  <span class=\\"token operator\\">=</span> <span class=\\"token function\\">deduplication</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>arr2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
