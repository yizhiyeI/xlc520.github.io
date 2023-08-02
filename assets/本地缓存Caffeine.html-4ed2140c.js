const e=JSON.parse('{"key":"v-12aac2e1","path":"/dev/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98Caffeine.html","title":"本地缓存Caffeine","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"本地缓存Caffeine","description":"本地缓存Caffeine 结论：Caffeine 是目前性能最好的本地缓存，因此，在考虑使用本地缓存时，直接选择 Caffeine 即可。 先看一个小例子，明白如何创建一个 Caffeine 缓存实例。 Caffeine caffeine = Caffeine.newBuilder() .initialCapacity(3) .maximumSize(4); Cache cache = caffeine.build(); cache.put(\\"aa\\", 13); System.out.println(cache.getIfPresent(\\"aa\\"));","date":"2023-01-11T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98Caffeine.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"本地缓存Caffeine"}],["meta",{"property":"og:description","content":"本地缓存Caffeine 结论：Caffeine 是目前性能最好的本地缓存，因此，在考虑使用本地缓存时，直接选择 Caffeine 即可。 先看一个小例子，明白如何创建一个 Caffeine 缓存实例。 Caffeine caffeine = Caffeine.newBuilder() .initialCapacity(3) .maximumSize(4); Cache cache = caffeine.build(); cache.put(\\"aa\\", 13); System.out.println(cache.getIfPresent(\\"aa\\"));"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本地缓存Caffeine\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1. Caffeine 可以设置哪些缓存属性呢？","slug":"_1-caffeine-可以设置哪些缓存属性呢","link":"#_1-caffeine-可以设置哪些缓存属性呢","children":[{"level":3,"title":"1. 缓存初始容量","slug":"_1-缓存初始容量","link":"#_1-缓存初始容量","children":[]},{"level":3,"title":"2. 最大容量 最大权重","slug":"_2-最大容量-最大权重","link":"#_2-最大容量-最大权重","children":[]},{"level":3,"title":"3. 缓存状态","slug":"_3-缓存状态","link":"#_3-缓存状态","children":[]},{"level":3,"title":"4. 线程池","slug":"_4-线程池","link":"#_4-线程池","children":[]},{"level":3,"title":"5. 数据过期策略","slug":"_5-数据过期策略","link":"#_5-数据过期策略","children":[]},{"level":3,"title":"6. refreshAfterWrite 延迟刷新","slug":"_6-refreshafterwrite-延迟刷新","link":"#_6-refreshafterwrite-延迟刷新","children":[]},{"level":3,"title":"7. removalListener 清除、更新监听","slug":"_7-removallistener-清除、更新监听","link":"#_7-removallistener-清除、更新监听","children":[]},{"level":3,"title":"8. 缓存的数据使用弱引用，软引用","slug":"_8-缓存的数据使用弱引用-软引用","link":"#_8-缓存的数据使用弱引用-软引用","children":[]},{"level":3,"title":"9. 时间源 ticker","slug":"_9-时间源-ticker","link":"#_9-时间源-ticker","children":[]},{"level":3,"title":"10. 同步监听器","slug":"_10-同步监听器","link":"#_10-同步监听器","children":[]}]},{"level":2,"title":"2. Cache 可以有的操作","slug":"_2-cache-可以有的操作","link":"#_2-cache-可以有的操作","children":[]}],"git":{"createdTime":1673687351000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":12.93,"words":3878},"filePathRelative":"dev/本地缓存Caffeine.md","localizedDate":"2023年1月11日","excerpt":"<h1> 本地缓存Caffeine</h1>\\n<p>结论：<strong>Caffeine 是目前性能最好的本地缓存，因此，在考虑使用本地缓存时，直接选择 Caffeine 即可。</strong></p>\\n<p>先看一个小例子，明白如何创建一个 Caffeine 缓存实例。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">Caffeine</span> caffeine <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Caffeine</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">newBuilder</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">initialCapacity</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">maximumSize</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">Cache</span> cache <span class=\\"token operator\\">=</span> caffeine<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">build</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\ncache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">put</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"aa\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">13</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>cache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getIfPresent</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"aa\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
