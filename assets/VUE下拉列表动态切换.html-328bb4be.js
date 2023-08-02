const a=JSON.parse('{"key":"v-1b6b1cfa","path":"/dev/VUE%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8%E5%8A%A8%E6%80%81%E5%88%87%E6%8D%A2.html","title":"VUE下拉列表动态切换(人人组件)","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"VUE下拉列表动态切换(人人组件)","description":"VUE下拉列表动态切换(人人组件) 方法一 vue前端 &lt;el-form-item label=\\"大类\\" prop=\\"busiLines\\"&gt; &lt;ren-select v-model=\\"dataForm.busiLines\\" dict-type=\\"PIG_BUSI_LINES\\" @change=\\"selectchange\\" placeholder=\\"大类\\"&gt;&lt;/ren-select&gt; &lt;/el-form-item&gt; &lt;el-form-item label=\\"细分\\" prop=\\"busiDtiLines\\"&gt; &lt;el-select v-model=\\"dataForm.busiDtiLines\\" placeholder=\\"细分\\" clearable&gt; &lt;el-option :label=\\"data.dictLabel\\" v-for=\\"data in dataList\\" :key=\\"data.dictValue\\" :value=\\"data.dictValue\\"&gt;{{ data.dictLabel }}&lt;/el-option&gt; &lt;/el-select&gt; &lt;/el-form-item&gt;","date":"2022-07-05T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/VUE%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8%E5%8A%A8%E6%80%81%E5%88%87%E6%8D%A2.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"VUE下拉列表动态切换(人人组件)"}],["meta",{"property":"og:description","content":"VUE下拉列表动态切换(人人组件) 方法一 vue前端 &lt;el-form-item label=\\"大类\\" prop=\\"busiLines\\"&gt; &lt;ren-select v-model=\\"dataForm.busiLines\\" dict-type=\\"PIG_BUSI_LINES\\" @change=\\"selectchange\\" placeholder=\\"大类\\"&gt;&lt;/ren-select&gt; &lt;/el-form-item&gt; &lt;el-form-item label=\\"细分\\" prop=\\"busiDtiLines\\"&gt; &lt;el-select v-model=\\"dataForm.busiDtiLines\\" placeholder=\\"细分\\" clearable&gt; &lt;el-option :label=\\"data.dictLabel\\" v-for=\\"data in dataList\\" :key=\\"data.dictValue\\" :value=\\"data.dictValue\\"&gt;{{ data.dictLabel }}&lt;/el-option&gt; &lt;/el-select&gt; &lt;/el-form-item&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VUE下拉列表动态切换(人人组件)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":2,"title":"方法二","slug":"方法二","link":"#方法二","children":[]},{"level":2,"title":"注意：","slug":"注意","link":"#注意","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":1.18,"words":354},"filePathRelative":"dev/VUE下拉列表动态切换.md","localizedDate":"2022年7月5日","excerpt":"<h1> VUE下拉列表动态切换(人人组件)</h1>\\n<h2> 方法一</h2>\\n<p>vue前端</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form-item</span> <span class=\\"token attr-name\\">label</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>大类<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">prop</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>busiLines<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n     <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ren-select</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>dataForm.busiLines<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">dict-type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>PIG_BUSI_LINES<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">@change</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>selectchange<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>大类<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ren-select</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form-item</span> <span class=\\"token attr-name\\">label</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>细分<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">prop</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>busiDtiLines<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-select</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>dataForm.busiDtiLines<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>细分<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">clearable</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-option</span> <span class=\\"token attr-name\\">:label</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>data.dictLabel<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>data in dataList<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>data.dictValue<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>data.dictValue<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{ data.dictLabel }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-option</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-select</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};
