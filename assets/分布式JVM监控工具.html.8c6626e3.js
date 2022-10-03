const e=JSON.parse('{"key":"v-4fe861a4","path":"/dev/%E5%88%86%E5%B8%83%E5%BC%8FJVM%E7%9B%91%E6%8E%A7%E5%B7%A5%E5%85%B7.html","title":"\u5206\u5E03\u5F0FJVM\u76D1\u63A7\u5DE5\u5177","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"\u5206\u5E03\u5F0FJVM\u76D1\u63A7\u5DE5\u5177","description":null,"date":"2022-05-24T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"summary":"\u5206\u5E03\u5F0FJVM\u76D1\u63A7\u5DE5\u5177 \u4ECB\u7ECD \u8BE5\u9879\u76EE\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u8005\u66F4\u5FEB\u76D1\u63A7\u591A\u4E2A\u8FDC\u7A0B\u4E3B\u673Ajvm\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u662FSpring boot\u90A3\u4E48\u5F88\u65B9\u4FBF\u96C6\u6210\uFF0Cjar\u5305\u5F15\u5165\u5373\u53EF\uFF0C\u4E0D\u662FSpring boot\u4E5F\u4E0D\u7528\u6C14\u9981\uFF0C\u4F60\u53EF\u4EE5\u5FEB\u901F\u81EA\u884C\u521D\u59CB\u5316\u4E00\u4E2ASpirng boot\u7A0B\u5E8F\u5F15\u5165jar\u5305\u5373\u53EF \u6548\u679C\u5C55\u793A \u6574\u4F53\u67B6\u6784 git\u5730\u5740 https://github.com/xk4848123/monitor h","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E5%88%86%E5%B8%83%E5%BC%8FJVM%E7%9B%91%E6%8E%A7%E5%B7%A5%E5%85%B7.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"\u5206\u5E03\u5F0FJVM\u76D1\u63A7\u5DE5\u5177"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-08T06:10:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-05-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-08T06:10:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u6548\u679C\u5C55\u793A","slug":"\u6548\u679C\u5C55\u793A","link":"#\u6548\u679C\u5C55\u793A","children":[]},{"level":2,"title":"\u6574\u4F53\u67B6\u6784","slug":"\u6574\u4F53\u67B6\u6784","link":"#\u6574\u4F53\u67B6\u6784","children":[]},{"level":2,"title":"git\u5730\u5740","slug":"git\u5730\u5740","link":"#git\u5730\u5740","children":[]},{"level":2,"title":"\u4F7F\u7528\u524D\u63D0","slug":"\u4F7F\u7528\u524D\u63D0","link":"#\u4F7F\u7528\u524D\u63D0","children":[]},{"level":2,"title":"\u624B\u628A\u624B\u6559\u4F60\u7528","slug":"\u624B\u628A\u624B\u6559\u4F60\u7528","link":"#\u624B\u628A\u624B\u6559\u4F60\u7528","children":[{"level":3,"title":"\u514B\u9686monitor-server","slug":"\u514B\u9686monitor-server","link":"#\u514B\u9686monitor-server","children":[]},{"level":3,"title":"idea -> Project from Existing Sources\u2026","slug":"idea-project-from-existing-sources","link":"#idea-project-from-existing-sources","children":[]},{"level":3,"title":"\u9009\u4E2D\u9879\u76EEpom.xml","slug":"\u9009\u4E2D\u9879\u76EEpom-xml","link":"#\u9009\u4E2D\u9879\u76EEpom-xml","children":[]},{"level":3,"title":"\u4FEE\u6539resources/application.properties","slug":"\u4FEE\u6539resources-application-properties","link":"#\u4FEE\u6539resources-application-properties","children":[]},{"level":3,"title":"run monitor-server","slug":"run-monitor-server","link":"#run-monitor-server","children":[]},{"level":3,"title":"\u8BF4\u5728\u524D\u9762","slug":"\u8BF4\u5728\u524D\u9762","link":"#\u8BF4\u5728\u524D\u9762","children":[]},{"level":3,"title":"\u4E0B\u8F7DRelease","slug":"\u4E0B\u8F7Drelease","link":"#\u4E0B\u8F7Drelease","children":[]},{"level":3,"title":"\u8FDB\u5165Release\u5217\u8868\uFF0C\u4E0B\u8F7Djar","slug":"\u8FDB\u5165release\u5217\u8868-\u4E0B\u8F7Djar","link":"#\u8FDB\u5165release\u5217\u8868-\u4E0B\u8F7Djar","children":[]},{"level":3,"title":"\u672C\u5730mvn install(\u7B49\u5230\u535A\u4E3B\u628Ajar\u4F20\u5230\u4E2D\u5FC3\u4ED3\u5E93\u5C31\u4E0D\u7528\u8FD9\u4E48\u4E48\u9EBB\u70E6\u4E86)","slug":"\u672C\u5730mvn-install-\u7B49\u5230\u535A\u4E3B\u628Ajar\u4F20\u5230\u4E2D\u5FC3\u4ED3\u5E93\u5C31\u4E0D\u7528\u8FD9\u4E48\u4E48\u9EBB\u70E6\u4E86","link":"#\u672C\u5730mvn-install-\u7B49\u5230\u535A\u4E3B\u628Ajar\u4F20\u5230\u4E2D\u5FC3\u4ED3\u5E93\u5C31\u4E0D\u7528\u8FD9\u4E48\u4E48\u9EBB\u70E6\u4E86","children":[]},{"level":3,"title":"\u5728\u4EFB\u610F\u4E00\u4E2ASpring boot\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u6211\u8FD9\u91CC\u6253\u5F00\u6211\u672C\u5730\u4E00\u4E2A\u53EBchat\u7684\u9879\u76EE","slug":"\u5728\u4EFB\u610F\u4E00\u4E2Aspring-boot\u9879\u76EE\u4E2D\u4F7F\u7528-\u6211\u8FD9\u91CC\u6253\u5F00\u6211\u672C\u5730\u4E00\u4E2A\u53EBchat\u7684\u9879\u76EE","link":"#\u5728\u4EFB\u610F\u4E00\u4E2Aspring-boot\u9879\u76EE\u4E2D\u4F7F\u7528-\u6211\u8FD9\u91CC\u6253\u5F00\u6211\u672C\u5730\u4E00\u4E2A\u53EBchat\u7684\u9879\u76EE","children":[]},{"level":3,"title":"\u5728resources/application.properties\u589E\u52A0\u5C5E\u6027","slug":"\u5728resources-application-properties\u589E\u52A0\u5C5E\u6027","link":"#\u5728resources-application-properties\u589E\u52A0\u5C5E\u6027","children":[]},{"level":3,"title":"pom.xml\u5F15\u5165","slug":"pom-xml\u5F15\u5165","link":"#pom-xml\u5F15\u5165","children":[]},{"level":3,"title":"\u8DD1\u8D77\u9879\u76EE","slug":"\u8DD1\u8D77\u9879\u76EE","link":"#\u8DD1\u8D77\u9879\u76EE","children":[]},{"level":3,"title":"\u6211\u4EEC\u73B0\u5728\u8BBF\u95EEmonitor-server(\u6211\u5F53\u4E0B\u90E8\u7F72\u7684\u5728http://127.0.0.1:8888,\u5927\u5BB6\u6839\u636E\u81EA\u5DF1\u7684\u914D\u7F6E\u8BBF\u95EE)","slug":"\u6211\u4EEC\u73B0\u5728\u8BBF\u95EEmonitor-server-\u6211\u5F53\u4E0B\u90E8\u7F72\u7684\u5728http-127-0-0-1-8888-\u5927\u5BB6\u6839\u636E\u81EA\u5DF1\u7684\u914D\u7F6E\u8BBF\u95EE","link":"#\u6211\u4EEC\u73B0\u5728\u8BBF\u95EEmonitor-server-\u6211\u5F53\u4E0B\u90E8\u7F72\u7684\u5728http-127-0-0-1-8888-\u5927\u5BB6\u6839\u636E\u81EA\u5DF1\u7684\u914D\u7F6E\u8BBF\u95EE","children":[]}]}],"git":{"createdTime":1653380683000,"updatedTime":1659939026000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":2.65,"words":795},"filePathRelative":"dev/\u5206\u5E03\u5F0FJVM\u76D1\u63A7\u5DE5\u5177.md","localizedDate":"2022\u5E745\u670824\u65E5"}');export{e as data};
