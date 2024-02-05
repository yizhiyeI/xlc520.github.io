const t=JSON.parse('{"key":"v-225c9e9b","path":"/dev/SpringBoot%E5%AE%9E%E7%8E%B0%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html","title":"SpringBoot实现策略模式","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot实现策略模式","description":"SpringBoot实现策略模式 相信我们对策略模式都有耳闻，但是可能不知道它在项目中具体能有什么作用，我们需要在什么场景下才能去尽可能得去使用策略模式。 这里我简单的列出一个我之前在公司做的一个需求：跟第三方oa系统对接接口，对方需要回调我们当前系统，但是是不同的业务接口回调，我们系统可以根据一个字段来区分需要走哪个业务分支，可能初级程序员刚接触这个...","date":"2024-02-05T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E5%AE%9E%E7%8E%B0%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot实现策略模式"}],["meta",{"property":"og:description","content":"SpringBoot实现策略模式 相信我们对策略模式都有耳闻，但是可能不知道它在项目中具体能有什么作用，我们需要在什么场景下才能去尽可能得去使用策略模式。 这里我简单的列出一个我之前在公司做的一个需求：跟第三方oa系统对接接口，对方需要回调我们当前系统，但是是不同的业务接口回调，我们系统可以根据一个字段来区分需要走哪个业务分支，可能初级程序员刚接触这个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T11:25:59.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-02-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-05T11:25:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot实现策略模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-05T11:25:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1707132359000,"updatedTime":1707132359000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":3.29,"words":986},"filePathRelative":"dev/SpringBoot实现策略模式.md","localizedDate":"2024年2月5日","excerpt":"\\n<p>相信我们对策略模式都有耳闻，但是可能不知道它在项目中具体能有什么作用，我们需要在什么场景下才能去尽可能得去使用策略模式。</p>\\n<p>这里我简单的列出一个我之前在公司做的一个需求：跟第三方oa系统对接接口，对方需要回调我们当前系统，但是是不同的业务接口回调，我们系统可以根据一个字段来区分需要走哪个业务分支，可能初级程序员刚接触这个需求的时候想法是，多个接口回调，那就写多个接口罢了，强调接口隔离；或者直接一个接口也行，<code>if...else if</code> 也很不错，这里呢，为了彰显我们开发人员的逼格，我们可以基于一个接口外加设计模式之<strong>策略模式+简单工厂模式</strong>。 下面是一个简单的实现demo：</p>","autoDesc":true}');export{t as data};
