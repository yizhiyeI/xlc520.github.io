const e=JSON.parse('{"key":"v-888b767e","path":"/dev/coding-standard/%E4%BB%A3%E7%A0%81%E6%8A%80%E5%B7%A7%E8%A7%84%E8%8C%83.html","title":"代码技巧规范","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"代码技巧规范","description":"代码技巧规范 类成员与方法的可见性最小化 举例：如果是一个private的方法，想删除就删除 如果一个public的service方法，或者一个public的成员变量，删除一下，不得思考很多。 使用位移操作替代乘除法 计算机是使用二进制表示的，位移操作会极大地提高性能。 &lt;&lt; 左移相当于乘以 2；&gt;&gt; 右移相当于除以 2； &gt;&gt;&gt; 无符号右移相当于除以 2，但它会忽略符号位，空位都以 0 补齐。 a = val &lt;&lt; 3; b = val &gt;&gt; 1;","date":"2023-03-15T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/coding-standard/%E4%BB%A3%E7%A0%81%E6%8A%80%E5%B7%A7%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"代码技巧规范"}],["meta",{"property":"og:description","content":"代码技巧规范 类成员与方法的可见性最小化 举例：如果是一个private的方法，想删除就删除 如果一个public的service方法，或者一个public的成员变量，删除一下，不得思考很多。 使用位移操作替代乘除法 计算机是使用二进制表示的，位移操作会极大地提高性能。 &lt;&lt; 左移相当于乘以 2；&gt;&gt; 右移相当于除以 2； &gt;&gt;&gt; 无符号右移相当于除以 2，但它会忽略符号位，空位都以 0 补齐。 a = val &lt;&lt; 3; b = val &gt;&gt; 1;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-15T08:56:19.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T08:56:19.000Z"}]]},"headers":[{"level":2,"title":"类成员与方法的可见性最小化","slug":"类成员与方法的可见性最小化","link":"#类成员与方法的可见性最小化","children":[]},{"level":2,"title":"使用位移操作替代乘除法","slug":"使用位移操作替代乘除法","link":"#使用位移操作替代乘除法","children":[]},{"level":2,"title":"尽量减少对变量的重复计算","slug":"尽量减少对变量的重复计算","link":"#尽量减少对变量的重复计算","children":[]},{"level":2,"title":"不要捕捉RuntimeException","slug":"不要捕捉runtimeexception","link":"#不要捕捉runtimeexception","children":[]},{"level":2,"title":"使用局部变量可避免在堆上分配","slug":"使用局部变量可避免在堆上分配","link":"#使用局部变量可避免在堆上分配","children":[]},{"level":2,"title":"减少变量的作用范围","slug":"减少变量的作用范围","link":"#减少变量的作用范围","children":[]},{"level":2,"title":"尽量采用懒加载的策略，在需要的时候才创建","slug":"尽量采用懒加载的策略-在需要的时候才创建","link":"#尽量采用懒加载的策略-在需要的时候才创建","children":[]},{"level":2,"title":"访问静态变量直接使用类名","slug":"访问静态变量直接使用类名","link":"#访问静态变量直接使用类名","children":[]},{"level":2,"title":"字符串拼接使用StringBuilder","slug":"字符串拼接使用stringbuilder","link":"#字符串拼接使用stringbuilder","children":[]},{"level":2,"title":"重写对象的HashCode，不要简单地返回固定值","slug":"重写对象的hashcode-不要简单地返回固定值","link":"#重写对象的hashcode-不要简单地返回固定值","children":[]},{"level":2,"title":"HashMap等集合初始化的时候，指定初始值大小","slug":"hashmap等集合初始化的时候-指定初始值大小","link":"#hashmap等集合初始化的时候-指定初始值大小","children":[]},{"level":2,"title":"循环内不要不断创建对象引用","slug":"循环内不要不断创建对象引用","link":"#循环内不要不断创建对象引用","children":[]},{"level":2,"title":"遍历Map 的时候，使用 EntrySet 方法","slug":"遍历map-的时候-使用-entryset-方法","link":"#遍历map-的时候-使用-entryset-方法","children":[]},{"level":2,"title":"不要在多线程下使用同一个 Random","slug":"不要在多线程下使用同一个-random","link":"#不要在多线程下使用同一个-random","children":[]},{"level":2,"title":"自增推荐使用LongAddr","slug":"自增推荐使用longaddr","link":"#自增推荐使用longaddr","children":[]},{"level":2,"title":"程序中要少用反射","slug":"程序中要少用反射","link":"#程序中要少用反射","children":[]}],"git":{"createdTime":1678870579000,"updatedTime":1678870579000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":4.83,"words":1448},"filePathRelative":"dev/coding-standard/代码技巧规范.md","localizedDate":"2023年3月15日","excerpt":"<h1> 代码技巧规范</h1>\\n<h2> 类成员与方法的可见性最小化</h2>\\n<p>举例：如果是一个private的方法，想删除就删除</p>\\n<p>如果一个public的service方法，或者一个public的成员变量，删除一下，不得思考很多。</p>\\n<h2> 使用位移操作替代乘除法</h2>\\n<p>计算机是使用二进制表示的，位移操作会极大地提高性能。</p>\\n<p>&lt;&lt; 左移相当于乘以 2；&gt;&gt; 右移相当于除以 2；</p>\\n<p>&gt;&gt;&gt; 无符号右移相当于除以 2，但它会忽略符号位，空位都以 0 补齐。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>a <span class=\\"token operator\\">=</span> val <span class=\\"token operator\\">&lt;&lt;</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span>\\nb <span class=\\"token operator\\">=</span> val <span class=\\"token operator\\">&gt;&gt;</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
