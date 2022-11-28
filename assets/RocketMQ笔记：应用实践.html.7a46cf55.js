const e=JSON.parse('{"key":"v-0e6eab8e","path":"/dev/RocketMQ%E7%AC%94%E8%AE%B0%EF%BC%9A%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5.html","title":"RocketMQ笔记：应用实践","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"RocketMQ笔记：应用实践","description":"普通消息 消息发送分类 Producer对于消息的发送方式也有多种选择，不同的方式会产生不同的系统效果。 同步发送消息 同步发送消息是指，Producer发出⼀条消息后，会在收到MQ返回的ACK之后才发下⼀条消息。该方式的消息可靠性最高，但消息发送效率太低。 RocketMQ 异步发送消息 异步发送消息是指，Producer发出消息后无需等待MQ返回A...","date":"2022-11-26T00:00:00.000Z","category":["Java"],"tag":["Java","RocketMQ","MQ"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/RocketMQ%E7%AC%94%E8%AE%B0%EF%BC%9A%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"RocketMQ笔记：应用实践"}],["meta",{"property":"og:description","content":"普通消息 消息发送分类 Producer对于消息的发送方式也有多种选择，不同的方式会产生不同的系统效果。 同步发送消息 同步发送消息是指，Producer发出⼀条消息后，会在收到MQ返回的ACK之后才发下⼀条消息。该方式的消息可靠性最高，但消息发送效率太低。 RocketMQ 异步发送消息 异步发送消息是指，Producer发出消息后无需等待MQ返回A..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-28T14:32:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:published_time","content":"2022-11-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-28T14:32:35.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"普通消息","slug":"普通消息","link":"#普通消息","children":[]},{"level":3,"title":"顺序消息","slug":"顺序消息","link":"#顺序消息","children":[]},{"level":3,"title":"延时消息","slug":"延时消息","link":"#延时消息","children":[]},{"level":3,"title":"事务消息","slug":"事务消息","link":"#事务消息","children":[]},{"level":3,"title":"批量消息","slug":"批量消息","link":"#批量消息","children":[]},{"level":3,"title":"消息过滤","slug":"消息过滤","link":"#消息过滤","children":[]},{"level":3,"title":"消息发送重试机制","slug":"消息发送重试机制","link":"#消息发送重试机制","children":[]},{"level":3,"title":"消息消费重试机制","slug":"消息消费重试机制","link":"#消息消费重试机制","children":[]},{"level":3,"title":"死信队列","slug":"死信队列","link":"#死信队列","children":[]}],"git":{"createdTime":1669645897000,"updatedTime":1669645955000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":35.99,"words":10796},"filePathRelative":"dev/RocketMQ笔记：应用实践.md","localizedDate":"2022年11月26日"}');export{e as data};
