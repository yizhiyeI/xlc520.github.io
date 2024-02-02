const t=JSON.parse('{"key":"v-aa41e654","path":"/dev/%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1-%E7%94%B5%E5%95%86%E5%BA%93%E5%AD%98%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5.html","title":"架构设计-电商库存系统架构设计与实践","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"架构设计-电商库存系统架构设计与实践","description":"电商库存系统架构设计与实践 一、业务背景 库存系统是电商商品管理的核心系统，本文主要介绍vivo商城库存中心发展历程、架构设计思路及应对各种业务场景的实践。 vivo商城原库存系统耦合在商品系统，考虑到相关业务逻辑复杂度越来越高，库存做了服务拆分，在可售库存管理的基础上新增了实物库存管理、秒杀库存、物流时效 、发货限制、分仓管理等功能，满足了商城库存相...","date":"2023-09-15T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1-%E7%94%B5%E5%95%86%E5%BA%93%E5%AD%98%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"架构设计-电商库存系统架构设计与实践"}],["meta",{"property":"og:description","content":"电商库存系统架构设计与实践 一、业务背景 库存系统是电商商品管理的核心系统，本文主要介绍vivo商城库存中心发展历程、架构设计思路及应对各种业务场景的实践。 vivo商城原库存系统耦合在商品系统，考虑到相关业务逻辑复杂度越来越高，库存做了服务拆分，在可售库存管理的基础上新增了实物库存管理、秒杀库存、物流时效 、发货限制、分仓管理等功能，满足了商城库存相..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.xlc520.tk/blogImage/640-1694661998610-2.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T15:13:37.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"架构设计-电商库存系统架构设计与实践"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-09-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T15:13:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构设计-电商库存系统架构设计与实践\\",\\"image\\":[\\"https://static.xlc520.tk/blogImage/640-1694661998610-2.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-3.png\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-4.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-5.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-6.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-7.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-8.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-9.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998610-10.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998611-11.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998611-12.jpeg\\",\\"https://static.xlc520.tk/blogImage/640-1694661998611-13.jpeg\\"],\\"datePublished\\":\\"2023-09-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-11T15:13:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一、业务背景","slug":"一、业务背景","link":"#一、业务背景","children":[]},{"level":2,"title":"二、系统架构设计","slug":"二、系统架构设计","link":"#二、系统架构设计","children":[{"level":3,"title":"2.1 vivo大电商库存架构","slug":"_2-1-vivo大电商库存架构","link":"#_2-1-vivo大电商库存架构","children":[]},{"level":3,"title":"2.2 商城库存系统架构演变","slug":"_2-2-商城库存系统架构演变","link":"#_2-2-商城库存系统架构演变","children":[]}]},{"level":2,"title":"三、系统业务架构","slug":"三、系统业务架构","link":"#三、系统业务架构","children":[{"level":3,"title":"3.1 库存类型&分仓管理","slug":"_3-1-库存类型-分仓管理","link":"#_3-1-库存类型-分仓管理","children":[]},{"level":3,"title":"3.2 商城库存流转方案","slug":"_3-2-商城库存流转方案","link":"#_3-2-商城库存流转方案","children":[]},{"level":3,"title":"3.3 精细化发货管控","slug":"_3-3-精细化发货管控","link":"#_3-3-精细化发货管控","children":[]}]},{"level":2,"title":"四、系统架构技术要点","slug":"四、系统架构技术要点","link":"#四、系统架构技术要点","children":[{"level":3,"title":"4.1 库存扣减防重","slug":"_4-1-库存扣减防重","link":"#_4-1-库存扣减防重","children":[]},{"level":3,"title":"4.2 防超卖与高并发扣减方案","slug":"_4-2-防超卖与高并发扣减方案","link":"#_4-2-防超卖与高并发扣减方案","children":[]},{"level":3,"title":"4.3 库存同步方案","slug":"_4-3-库存同步方案","link":"#_4-3-库存同步方案","children":[]}]},{"level":2,"title":"五、总结","slug":"五、总结","link":"#五、总结","children":[]}],"git":{"createdTime":1697037217000,"updatedTime":1697037217000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":14.54,"words":4362},"filePathRelative":"dev/架构设计-电商库存系统架构设计与实践.md","localizedDate":"2023年9月15日","excerpt":"\\n<h2>一、业务背景</h2>\\n<p>库存系统是电商商品管理的核心系统，本文主要介绍vivo商城库存中心发展历程、架构设计思路及应对各种业务场景的实践。</p>\\n<p>vivo商城原库存系统耦合在商品系统，考虑到相关业务逻辑复杂度越来越高，库存做了服务拆分，在可售库存管理的基础上新增了实物库存管理、秒杀库存、物流时效 、发货限制、分仓管理等功能，满足了商城库存相关业务需求。</p>","autoDesc":true}');export{t as data};
