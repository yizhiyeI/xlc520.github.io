const e=JSON.parse('{"key":"v-545738c8","path":"/dev/Redis%E6%80%BB%E7%BB%93%EF%BC%9A%E7%BC%93%E5%AD%98%E9%9B%AA%E5%B4%A9%E3%80%81%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF%E3%80%81%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F.html","title":"Redis总结：缓存雪崩、缓存击穿、缓存穿透与缓存预热、缓存降级","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Redis总结：缓存雪崩、缓存击穿、缓存穿透与缓存预热、缓存降级","description":"Redis总结：缓存雪崩、缓存击穿、缓存穿透与缓存预热、缓存降级","date":"2022-04-25T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Redis%E6%80%BB%E7%BB%93%EF%BC%9A%E7%BC%93%E5%AD%98%E9%9B%AA%E5%B4%A9%E3%80%81%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF%E3%80%81%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Redis总结：缓存雪崩、缓存击穿、缓存穿透与缓存预热、缓存降级"}],["meta",{"property":"og:description","content":"Redis总结：缓存雪崩、缓存击穿、缓存穿透与缓存预热、缓存降级"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-04-28T02:37:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-04-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-04-28T02:37:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"01 缓存雪崩","slug":"_01-缓存雪崩","link":"#_01-缓存雪崩","children":[{"level":3,"title":"1.1 什么是缓存雪崩？","slug":"_1-1-什么是缓存雪崩","link":"#_1-1-什么是缓存雪崩","children":[]},{"level":3,"title":"1.2 缓存雪崩问题分析","slug":"_1-2-缓存雪崩问题分析","link":"#_1-2-缓存雪崩问题分析","children":[]},{"level":3,"title":"1.3 缓存雪崩解决方案","slug":"_1-3-缓存雪崩解决方案","link":"#_1-3-缓存雪崩解决方案","children":[]}]},{"level":2,"title":"02 缓存击穿","slug":"_02-缓存击穿","link":"#_02-缓存击穿","children":[{"level":3,"title":"2.1 什么是缓存击穿？","slug":"_2-1-什么是缓存击穿","link":"#_2-1-什么是缓存击穿","children":[]},{"level":3,"title":"2.2 缓存击穿问题分析","slug":"_2-2-缓存击穿问题分析","link":"#_2-2-缓存击穿问题分析","children":[]},{"level":3,"title":"2.3 缓存击穿解决方案","slug":"_2-3-缓存击穿解决方案","link":"#_2-3-缓存击穿解决方案","children":[]}]},{"level":2,"title":"03 缓存穿透","slug":"_03-缓存穿透","link":"#_03-缓存穿透","children":[{"level":3,"title":"3.1 什么是缓存穿透？","slug":"_3-1-什么是缓存穿透","link":"#_3-1-什么是缓存穿透","children":[]},{"level":3,"title":"3.2 问题分析","slug":"_3-2-问题分析","link":"#_3-2-问题分析","children":[]},{"level":3,"title":"3.3 解决方法","slug":"_3-3-解决方法","link":"#_3-3-解决方法","children":[]}]},{"level":2,"title":"04 缓存预热","slug":"_04-缓存预热","link":"#_04-缓存预热","children":[{"level":3,"title":"4.1 什么是缓存预热？","slug":"_4-1-什么是缓存预热","link":"#_4-1-什么是缓存预热","children":[]},{"level":3,"title":"4.2 缓存预热解决方案","slug":"_4-2-缓存预热解决方案","link":"#_4-2-缓存预热解决方案","children":[]}]},{"level":2,"title":"05 缓存降级","slug":"_05-缓存降级","link":"#_05-缓存降级","children":[]}],"git":{"createdTime":1651113420000,"updatedTime":1651113420000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":7.3,"words":2190},"filePathRelative":"dev/Redis总结：缓存雪崩、缓存击穿、缓存穿透.md","localizedDate":"2022年4月25日"}');export{e as data};
