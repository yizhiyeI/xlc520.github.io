const t=JSON.parse(`{"key":"v-7efb1c5d","path":"/study/vue3_quick_study/chapter1/03_HelloWorld.html","title":"第一个 TypeScript 程序","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"第一个 TypeScript 程序","description":"3. 第一个 TypeScript 程序 编写 TS 程序 src/helloworld.ts 手动编译代码 我们使用了 .ts 扩展名，但是这段代码仅仅是 JavaScript 而已。 在命令行上，运行 TypeScript 编译器： 输出结果为一个 helloworld.js 文件，它包含了和输入文件中相同的 JavsScript 代码。 在命令行...","date":"2022-07-20T00:00:00.000Z","category":"Vue","tag":"Vue","article":true,"dateline":true,"icon":"vue","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/study/vue3_quick_study/chapter1/03_HelloWorld.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"第一个 TypeScript 程序"}],["meta",{"property":"og:description","content":"3. 第一个 TypeScript 程序 编写 TS 程序 src/helloworld.ts 手动编译代码 我们使用了 .ts 扩展名，但是这段代码仅仅是 JavaScript 而已。 在命令行上，运行 TypeScript 编译器： 输出结果为一个 helloworld.js 文件，它包含了和输入文件中相同的 JavsScript 代码。 在命令行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2022-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第一个 TypeScript 程序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"编写 TS 程序","slug":"编写-ts-程序","link":"#编写-ts-程序","children":[]},{"level":2,"title":"手动编译代码","slug":"手动编译代码","link":"#手动编译代码","children":[]},{"level":2,"title":"vscode自动编译","slug":"vscode自动编译","link":"#vscode自动编译","children":[]},{"level":2,"title":"类型注解","slug":"类型注解","link":"#类型注解","children":[]},{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":2,"title":"类","slug":"类","link":"#类","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":2.84,"words":851},"filePathRelative":"study/vue3_quick_study/chapter1/03_HelloWorld.md","localizedDate":"2022年7月20日","excerpt":"\\n<h2>编写 TS 程序</h2>\\n<p>src/helloworld.ts</p>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">greeter</span> <span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">'Hello, '</span> <span class=\\"token operator\\">+</span> person\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> user <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'Yee'</span>\\n\\n<span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">greeter</span><span class=\\"token punctuation\\">(</span>user<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}`);export{t as data};
