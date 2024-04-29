import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,a as o}from"./app-BxuroukW.js";const p={},a=o('<h1 id="_4-composition-api-vs-option-api" tabindex="-1"><a class="header-anchor" href="#_4-composition-api-vs-option-api"><span>4. Composition API VS Option API</span></a></h1><h2 id="_1-option-api-的问题" tabindex="-1"><a class="header-anchor" href="#_1-option-api-的问题"><span>1) Option API 的问题</span></a></h2><ul><li>在传统的 Vue OptionsAPI 中，新增或者修改一个需求，就需要分别在 data，methods，computed 里修改 ，滚动条反复上下移动</li></ul><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-使用-compisition-api" tabindex="-1"><a class="header-anchor" href="#_2-使用-compisition-api"><span>2) 使用 Compisition API</span></a></h2><p>我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c421e5392504ecc94c222057dba338a~tplv-k3u1fbpfcp-watermark.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),c=[a];function n(m,r){return e(),i("div",null,c)}const l=t(p,[["render",n],["__file","04_Composition VS Option.html.vue"]]),u=JSON.parse('{"path":"/study/vue3_quick_study/chapter4/04_Composition%20VS%20Option.html","title":"Composition API VS Option API","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Composition API VS Option API","excerpt":null,"description":"4. Composition API VS Option API 1) Option API 的问题 在传统的 Vue OptionsAPI 中，新增或者修改一个需求，就需要分别在 data，methods，computed 里修改 ，滚动条反复上下移动 2) 使用 Compisition API 我们可以更加优雅的组织我们的代码，函数。让相关功能的代...","date":"2022-08-02T00:00:00.000Z","category":"Vue","tag":"Vue","article":true,"dateline":true,"icon":"vue","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/study/vue3_quick_study/chapter4/04_Composition%20VS%20Option.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Composition API VS Option API"}],["meta",{"property":"og:description","content":"4. Composition API VS Option API 1) Option API 的问题 在传统的 Vue OptionsAPI 中，新增或者修改一个需求，就需要分别在 data，methods，computed 里修改 ，滚动条反复上下移动 2) 使用 Compisition API 我们可以更加优雅的组织我们的代码，函数。让相关功能的代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2022-08-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Composition API VS Option API\\",\\"image\\":[\\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image\\",\\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image\\",\\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image\\",\\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image\\",\\"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c421e5392504ecc94c222057dba338a~tplv-k3u1fbpfcp-watermark.image\\"],\\"datePublished\\":\\"2022-08-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1) Option API 的问题","slug":"_1-option-api-的问题","link":"#_1-option-api-的问题","children":[]},{"level":2,"title":"2) 使用 Compisition API","slug":"_2-使用-compisition-api","link":"#_2-使用-compisition-api","children":[]}],"git":{"createdTime":1657267589000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"study/vue3_quick_study/chapter4/04_Composition VS Option.md","localizedDate":"2022年8月2日","autoDesc":true}');export{l as comp,u as data};
