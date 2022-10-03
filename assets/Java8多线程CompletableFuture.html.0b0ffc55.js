const e=JSON.parse('{"key":"v-60d5c536","path":"/dev/Java8%E5%A4%9A%E7%BA%BF%E7%A8%8BCompletableFuture.html","title":"Java8\u591A\u7EBF\u7A0BCompletableFuture","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Java8\u591A\u7EBF\u7A0BCompletableFuture","description":null,"date":"2022-09-03T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"summary":"Java8\u591A\u7EBF\u7A0BCompletableFuture \u65E5\u5E38\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u90FD\u4F1A\u7528\u5230\u7EBF\u7A0B\u6C60\uFF0C\u4E00\u822C\u4F1A\u7528execute()\u548Csubmit()\u65B9\u6CD5\u63D0\u4EA4\u4EFB\u52A1\u3002\u4F46\u662F\u5F53\u4F60\u7528\u8FC7CompletableFuture\u4E4B\u540E\uFF0C\u5C31\u4F1A\u53D1\u73B0\u4EE5\u524D\u7684\u7EBF\u7A0B\u6C60\u5904\u7406\u4EFB\u52A1\u6709\u591A\u96BE\u7528\uFF0C\u529F\u80FD\u6709\u591A\u7B80\u964B\uFF0CCompletableFuture\u53C8\u662F\u591A\u4E48\u7B80\u6D01\u4F18\u96C5\u3002 \u8981\u77E5\u9053CompletableFuture\u5DF2\u7ECF\u968F\u7740Java8\u53D1","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Java8%E5%A4%9A%E7%BA%BF%E7%A8%8BCompletableFuture.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Java8\u591A\u7EBF\u7A0BCompletableFuture"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-05T07:32:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-09-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-05T07:32:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4F7F\u7528\u7EBF\u7A0B\u6C60\u5904\u7406\u4EFB\u52A1","slug":"_1-\u4F7F\u7528\u7EBF\u7A0B\u6C60\u5904\u7406\u4EFB\u52A1","link":"#_1-\u4F7F\u7528\u7EBF\u7A0B\u6C60\u5904\u7406\u4EFB\u52A1","children":[]},{"level":2,"title":"2. \u4F7F\u7528CompletableFuture\u91CD\u6784\u4EFB\u52A1\u5904\u7406","slug":"_2-\u4F7F\u7528completablefuture\u91CD\u6784\u4EFB\u52A1\u5904\u7406","link":"#_2-\u4F7F\u7528completablefuture\u91CD\u6784\u4EFB\u52A1\u5904\u7406","children":[]},{"level":2,"title":"3. CompletableFuture\u66F4\u591A\u5999\u7528","slug":"_3-completablefuture\u66F4\u591A\u5999\u7528","link":"#_3-completablefuture\u66F4\u591A\u5999\u7528","children":[{"level":3,"title":"3.1 \u7B49\u5F85\u6240\u6709\u4EFB\u52A1\u6267\u884C\u5B8C\u6210","slug":"_3-1-\u7B49\u5F85\u6240\u6709\u4EFB\u52A1\u6267\u884C\u5B8C\u6210","link":"#_3-1-\u7B49\u5F85\u6240\u6709\u4EFB\u52A1\u6267\u884C\u5B8C\u6210","children":[]},{"level":3,"title":"3.2 \u4EFB\u4F55\u4E00\u4E2A\u4EFB\u52A1\u5904\u7406\u5B8C\u6210\u5C31\u8FD4\u56DE","slug":"_3-2-\u4EFB\u4F55\u4E00\u4E2A\u4EFB\u52A1\u5904\u7406\u5B8C\u6210\u5C31\u8FD4\u56DE","link":"#_3-2-\u4EFB\u4F55\u4E00\u4E2A\u4EFB\u52A1\u5904\u7406\u5B8C\u6210\u5C31\u8FD4\u56DE","children":[]},{"level":3,"title":"3.3 \u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210\uFF0C\u4EA4\u7ED9\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u63A5\u7740\u6267\u884C","slug":"_3-3-\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210-\u4EA4\u7ED9\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u63A5\u7740\u6267\u884C","link":"#_3-3-\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210-\u4EA4\u7ED9\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u63A5\u7740\u6267\u884C","children":[]}]},{"level":2,"title":"4. CompletableFuture\u5E38\u7528API","slug":"_4-completablefuture\u5E38\u7528api","link":"#_4-completablefuture\u5E38\u7528api","children":[{"level":3,"title":"4.1 CompletableFuture\u5E38\u7528API\u8BF4\u660E","slug":"_4-1-completablefuture\u5E38\u7528api\u8BF4\u660E","link":"#_4-1-completablefuture\u5E38\u7528api\u8BF4\u660E","children":[]},{"level":3,"title":"4. CompletableFuture\u5E38\u7528API\u4F7F\u7528\u793A\u4F8B","slug":"_4-completablefuture\u5E38\u7528api\u4F7F\u7528\u793A\u4F8B","link":"#_4-completablefuture\u5E38\u7528api\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":3,"title":"4.1 then\u3001handle\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","slug":"_4-1-then\u3001handle\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","link":"#_4-1-then\u3001handle\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":3,"title":"4.2 complete\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","slug":"_4-2-complete\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","link":"#_4-2-complete\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":3,"title":"4.3 either\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","slug":"_4-3-either\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","link":"#_4-3-either\u65B9\u6CD5\u4F7F\u7528\u793A\u4F8B","children":[]}]}],"git":{"createdTime":1662363142000,"updatedTime":1662363142000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":7.97,"words":2392},"filePathRelative":"dev/Java8\u591A\u7EBF\u7A0BCompletableFuture.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
