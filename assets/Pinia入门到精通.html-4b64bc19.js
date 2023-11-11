const e=JSON.parse('{"key":"v-761d8d77","path":"/dev/Pinia%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A.html","title":"Pinia入门到精通","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Pinia入门到精通","description":"Pinia入门到精通 一. 简介 1. 什么Pinia？ Pinia开始于大概2019年，最初是作为一个实验为Vue重新设计状态管理，让它用起来像组合式API（Composition API）。从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容Vue2、Vue3，也并不要求你使用Composition API；Pinia本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和Vuex、Redux一样）；","date":"2023-11-08T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Pinia%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Pinia入门到精通"}],["meta",{"property":"og:description","content":"Pinia入门到精通 一. 简介 1. 什么Pinia？ Pinia开始于大概2019年，最初是作为一个实验为Vue重新设计状态管理，让它用起来像组合式API（Composition API）。从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容Vue2、Vue3，也并不要求你使用Composition API；Pinia本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和Vuex、Redux一样）；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-11T08:36:13.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-11-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T08:36:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pinia入门到精通\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-11T08:36:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一. 简介","slug":"一-简介","link":"#一-简介","children":[{"level":3,"title":"1. 什么Pinia？","slug":"_1-什么pinia","link":"#_1-什么pinia","children":[]},{"level":3,"title":"2. pinia和vuex的区别？","slug":"_2-pinia和vuex的区别","link":"#_2-pinia和vuex的区别","children":[]},{"level":3,"title":"3. 核心总结","slug":"_3-核心总结","link":"#_3-核心总结","children":[]},{"level":3,"title":"4. 快速入门","slug":"_4-快速入门","link":"#_4-快速入门","children":[]}]},{"level":2,"title":"二. state","slug":"二-state","link":"#二-state","children":[{"level":3,"title":"1. 作用","slug":"_1-作用","link":"#_1-作用","children":[]},{"level":3,"title":"2. 调用","slug":"_2-调用","link":"#_2-调用","children":[]}]},{"level":2,"title":"三. getter","slug":"三-getter","link":"#三-getter","children":[{"level":3,"title":"1. 说明","slug":"_1-说明","link":"#_1-说明","children":[]},{"level":3,"title":"2. 调用","slug":"_2-调用-1","link":"#_2-调用-1","children":[]}]},{"level":2,"title":"四. action","slug":"四-action","link":"#四-action","children":[{"level":3,"title":"1. 说明","slug":"_1-说明-1","link":"#_1-说明-1","children":[]},{"level":3,"title":"2. 调用","slug":"_2-调用-2","link":"#_2-调用-2","children":[]}]},{"level":2,"title":"五. 常用Api","slug":"五-常用api","link":"#五-常用api","children":[{"level":3,"title":"1. 解构相关","slug":"_1-解构相关","link":"#_1-解构相关","children":[]},{"level":3,"title":"2. 修改state中的值","slug":"_2-修改state中的值","link":"#_2-修改state中的值","children":[]},{"level":3,"title":"3. 重置 $reset() 方法将状态 重置 到其初始值","slug":"_3-重置-reset-方法将状态-重置-到其初始值","link":"#_3-重置-reset-方法将状态-重置-到其初始值","children":[]},{"level":3,"title":"4. 替换State","slug":"_4-替换state","link":"#_4-替换state","children":[]}]},{"level":2,"title":"六. setup简化写法","slug":"六-setup简化写法","link":"#六-setup简化写法","children":[]},{"level":2,"title":"1.pinia是什么？","slug":"_1-pinia是什么","link":"#_1-pinia是什么","children":[]},{"level":2,"title":"2.为什么要使用pinia？","slug":"_2-为什么要使用pinia","link":"#_2-为什么要使用pinia","children":[]},{"level":2,"title":"3.准备工作","slug":"_3-准备工作","link":"#_3-准备工作","children":[]},{"level":2,"title":"4.pinia基础使用","slug":"_4-pinia基础使用","link":"#_4-pinia基础使用","children":[]},{"level":2,"title":"4.1 安装pinia","slug":"_4-1-安装pinia","link":"#_4-1-安装pinia","children":[]},{"level":2,"title":"4.2 创建store","slug":"_4-2-创建store","link":"#_4-2-创建store","children":[]},{"level":2,"title":"4.3 使用store","slug":"_4-3-使用store","link":"#_4-3-使用store","children":[]},{"level":2,"title":"4.4 添加state","slug":"_4-4-添加state","link":"#_4-4-添加state","children":[]},{"level":2,"title":"4.5 操作state","slug":"_4-5-操作state","link":"#_4-5-操作state","children":[{"level":3,"title":"4.5.1 读取state数据","slug":"_4-5-1-读取state数据","link":"#_4-5-1-读取state数据","children":[]},{"level":3,"title":"4.5.2 多个组件使用state","slug":"_4-5-2-多个组件使用state","link":"#_4-5-2-多个组件使用state","children":[]},{"level":3,"title":"4.5.3 修改state数据","slug":"_4-5-3-修改state数据","link":"#_4-5-3-修改state数据","children":[]},{"level":3,"title":"4.5.4 重置state","slug":"_4-5-4-重置state","link":"#_4-5-4-重置state","children":[]},{"level":3,"title":"4.5.5 批量更改state数据","slug":"_4-5-5-批量更改state数据","link":"#_4-5-5-批量更改state数据","children":[]},{"level":3,"title":"4.5.6 直接替换整个state","slug":"_4-5-6-直接替换整个state","link":"#_4-5-6-直接替换整个state","children":[]}]},{"level":2,"title":"4.6 getters属性","slug":"_4-6-getters属性","link":"#_4-6-getters属性","children":[{"level":3,"title":"4.6.1 添加getter","slug":"_4-6-1-添加getter","link":"#_4-6-1-添加getter","children":[]},{"level":3,"title":"4.6.2 使用getter","slug":"_4-6-2-使用getter","link":"#_4-6-2-使用getter","children":[]},{"level":3,"title":"4.6.3 getter中调用其它getter","slug":"_4-6-3-getter中调用其它getter","link":"#_4-6-3-getter中调用其它getter","children":[]},{"level":3,"title":"4.6.4 getter传参","slug":"_4-6-4-getter传参","link":"#_4-6-4-getter传参","children":[]}]},{"level":2,"title":"4.7 actions属性","slug":"_4-7-actions属性","link":"#_4-7-actions属性","children":[{"level":3,"title":"4.7.1 添加actions","slug":"_4-7-1-添加actions","link":"#_4-7-1-添加actions","children":[]},{"level":3,"title":"4.7.2 使用actions","slug":"_4-7-2-使用actions","link":"#_4-7-2-使用actions","children":[]}]},{"level":2,"title":"5.总结示例代码","slug":"_5-总结示例代码","link":"#_5-总结示例代码","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1699443640000,"updatedTime":1699691773000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":3}]},"readingTime":{"minutes":25.77,"words":7731},"filePathRelative":"dev/Pinia入门到精通.md","localizedDate":"2023年11月8日","excerpt":"<h1> Pinia入门到精通</h1>\\n<h2> 一. 简介</h2>\\n<h3> <strong>1. 什么Pinia？</strong></h3>\\n<p>Pinia开始于大概2019年，最初是作为一个实验为Vue重新设计状态管理，让它用起来像组合式API（Composition API）。从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容Vue2、Vue3，也并不要求你使用Composition API；Pinia本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和Vuex、Redux一样）；</p>","autoDesc":true}');export{e as data};
