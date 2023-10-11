const t=JSON.parse('{"key":"v-62bc04c6","path":"/dev/SpringBoot%20%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AE%E5%8A%A0%E8%A7%A3%E5%AF%86%E6%8A%80%E5%B7%A7.html","title":"SpringBoot 接口数据加解密技巧","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot 接口数据加解密技巧","description":"SpringBoot 接口数据加解密技巧 主要的需求点如下： 尽量少改动，不影响之前的业务逻辑； 考虑到时间紧迫性，可采用对称性加密方式，服务需要对接安卓、IOS、H5三端，另外考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥； 要兼容低版本的接口，后面新开发的接口可不用兼容； 接口有GET和POST两种接口，需要都要进行加解密； 需求解析： 服务端、客户端和H5统一拦截加解密，网上有成熟方案，也可以按其他服务中实现的加解密流程来搞； 使用AES放松加密，考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥； 本次涉及客户端和服务端的整体改造，经讨论，新接口统一加 /secret/ 前缀来区分","date":"2023-08-30T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%20%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AE%E5%8A%A0%E8%A7%A3%E5%AF%86%E6%8A%80%E5%B7%A7.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringBoot 接口数据加解密技巧"}],["meta",{"property":"og:description","content":"SpringBoot 接口数据加解密技巧 主要的需求点如下： 尽量少改动，不影响之前的业务逻辑； 考虑到时间紧迫性，可采用对称性加密方式，服务需要对接安卓、IOS、H5三端，另外考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥； 要兼容低版本的接口，后面新开发的接口可不用兼容； 接口有GET和POST两种接口，需要都要进行加解密； 需求解析： 服务端、客户端和H5统一拦截加解密，网上有成熟方案，也可以按其他服务中实现的加解密流程来搞； 使用AES放松加密，考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥； 本次涉及客户端和服务端的整体改造，经讨论，新接口统一加 /secret/ 前缀来区分"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T15:13:37.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-08-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T15:13:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 接口数据加解密技巧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-11T15:13:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1697037217000,"updatedTime":1697037217000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":8.75,"words":2625},"filePathRelative":"dev/SpringBoot 接口数据加解密技巧.md","localizedDate":"2023年8月30日","excerpt":"<h1> SpringBoot 接口数据加解密技巧</h1>\\n<p>主要的需求点如下：</p>\\n<ol>\\n<li>尽量少改动，不影响之前的业务逻辑；</li>\\n<li>考虑到时间紧迫性，可采用对称性加密方式，服务需要对接安卓、IOS、H5三端，另外考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥；</li>\\n<li>要兼容低版本的接口，后面新开发的接口可不用兼容；</li>\\n<li>接口有GET和POST两种接口，需要都要进行加解密；</li>\\n</ol>\\n<p>需求解析：</p>\\n<ol>\\n<li>服务端、客户端和H5统一拦截加解密，网上有成熟方案，也可以按其他服务中实现的加解密流程来搞；</li>\\n<li>使用AES放松加密，考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥；</li>\\n<li>本次涉及客户端和服务端的整体改造，经讨论，新接口统一加 /secret/ 前缀来区分</li>\\n</ol>","autoDesc":true}');export{t as data};
