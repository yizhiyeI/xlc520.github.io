const e=JSON.parse('{"key":"v-b10ed23e","path":"/dev/%E9%80%9A%E8%BF%87%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E8%84%B1%E6%95%8F.html","title":"通过注解实现接口返回数据脱敏","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"通过注解实现接口返回数据脱敏","description":"通过注解实现接口返回数据脱敏 思路 1.要做成可配置多策略的脱敏操作，要不然一个个接口进行脱敏操作，重复的工作量太多，很显然违背了“多写一行算我输”的程序员规范，思来想去，定义数据脱敏注解和数据脱敏逻辑的接口， 在返回类上，对需要进行脱敏的属性加上，并指定对应的脱敏策略操作 2.接下来我只需要拦截控制器返回的数据，找到带有脱敏注解的属性操作即可，一开始...","date":"2022-08-07T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E9%80%9A%E8%BF%87%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E8%84%B1%E6%95%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"通过注解实现接口返回数据脱敏"}],["meta",{"property":"og:description","content":"通过注解实现接口返回数据脱敏 思路 1.要做成可配置多策略的脱敏操作，要不然一个个接口进行脱敏操作，重复的工作量太多，很显然违背了“多写一行算我输”的程序员规范，思来想去，定义数据脱敏注解和数据脱敏逻辑的接口， 在返回类上，对需要进行脱敏的属性加上，并指定对应的脱敏策略操作 2.接下来我只需要拦截控制器返回的数据，找到带有脱敏注解的属性操作即可，一开始..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-08-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过注解实现接口返回数据脱敏\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":3,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":2.24,"words":671},"filePathRelative":"dev/通过注解实现接口返回数据脱敏.md","localizedDate":"2022年8月7日","excerpt":"\\n<h3>思路</h3>\\n<p>1.要做成可配置多策略的脱敏操作，要不然一个个接口进行脱敏操作，重复的工作量太多，很显然违背了“多写一行算我输”的程序员规范，思来想去，定义数据脱敏注解和数据脱敏逻辑的接口， 在返回类上，对需要进行脱敏的属性加上，并指定对应的脱敏策略操作</p>","autoDesc":true}');export{e as data};
