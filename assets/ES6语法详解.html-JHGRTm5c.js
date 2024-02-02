const e=JSON.parse('{"key":"v-13072166","path":"/dev/ES6%E8%AF%AD%E6%B3%95%E8%AF%A6%E8%A7%A3.html","title":"ES6语法详解","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"ES6语法详解","description":"ES6语法详解 let变量 let声明的变量在let命令所在的代码块中有效。不存在变量提升，只能先声明后使用。 暂存死区 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量。 在相同块级作用域中，不能用let重复声明同一变量。即使已存在的变量是通过var声明的。 块级作用域和函数...","date":"2022-06-26T00:00:00.000Z","category":"Java","tag":["Java","ES6","JavaScript"],"article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/ES6%E8%AF%AD%E6%B3%95%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"ES6语法详解"}],["meta",{"property":"og:description","content":"ES6语法详解 let变量 let声明的变量在let命令所在的代码块中有效。不存在变量提升，只能先声明后使用。 暂存死区 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量。 在相同块级作用域中，不能用let重复声明同一变量。即使已存在的变量是通过var声明的。 块级作用域和函数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"ES6"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2022-06-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ES6语法详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"let变量","slug":"let变量","link":"#let变量","children":[{"level":3,"title":"暂存死区","slug":"暂存死区","link":"#暂存死区","children":[]},{"level":3,"title":"块级作用域和函数声明","slug":"块级作用域和函数声明","link":"#块级作用域和函数声明","children":[]}]},{"level":2,"title":"const常量","slug":"const常量","link":"#const常量","children":[{"level":3,"title":"顶层变量","slug":"顶层变量","link":"#顶层变量","children":[]}]},{"level":2,"title":"解构赋值","slug":"解构赋值","link":"#解构赋值","children":[]},{"level":2,"title":"字符串扩展","slug":"字符串扩展","link":"#字符串扩展","children":[{"level":3,"title":"模版字符串","slug":"模版字符串","link":"#模版字符串","children":[]}]},{"level":2,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[]},{"level":2,"title":"数值相关","slug":"数值相关","link":"#数值相关","children":[{"level":3,"title":"Number对象扩展","slug":"number对象扩展","link":"#number对象扩展","children":[]},{"level":3,"title":"Math对象扩展","slug":"math对象扩展","link":"#math对象扩展","children":[]},{"level":3,"title":"指数运算符","slug":"指数运算符","link":"#指数运算符","children":[]}]},{"level":2,"title":"函数的扩展","slug":"函数的扩展","link":"#函数的扩展","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"length属性","slug":"length属性","link":"#length属性","children":[]},{"level":3,"title":"函数参数作用域","slug":"函数参数作用域","link":"#函数参数作用域","children":[]},{"level":3,"title":"rest参数","slug":"rest参数","link":"#rest参数","children":[]},{"level":3,"title":"name属性","slug":"name属性","link":"#name属性","children":[]},{"level":3,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]}]},{"level":2,"title":"数组的扩展","slug":"数组的扩展","link":"#数组的扩展","children":[{"level":3,"title":"扩展运算符","slug":"扩展运算符","link":"#扩展运算符","children":[]},{"level":3,"title":"Array.from()","slug":"array-from","link":"#array-from","children":[]},{"level":3,"title":"Array.of()","slug":"array-of","link":"#array-of","children":[]},{"level":3,"title":"find()和findIndex()","slug":"find-和findindex","link":"#find-和findindex","children":[]},{"level":3,"title":"fill() 方法","slug":"fill-方法","link":"#fill-方法","children":[]},{"level":3,"title":"keys(), values(), entries() 方法","slug":"keys-values-entries-方法","link":"#keys-values-entries-方法","children":[]},{"level":3,"title":"includes() 方法","slug":"includes-方法","link":"#includes-方法","children":[]},{"level":3,"title":"数组的空位","slug":"数组的空位","link":"#数组的空位","children":[]}]},{"level":2,"title":"对象的扩展","slug":"对象的扩展","link":"#对象的扩展","children":[{"level":3,"title":"属性简写","slug":"属性简写","link":"#属性简写","children":[]},{"level":3,"title":"属性名表达式","slug":"属性名表达式","link":"#属性名表达式","children":[]},{"level":3,"title":"Object.is()","slug":"object-is","link":"#object-is","children":[]},{"level":3,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[]},{"level":3,"title":"属性的可枚举行","slug":"属性的可枚举行","link":"#属性的可枚举行","children":[]},{"level":3,"title":"属性的遍历","slug":"属性的遍历","link":"#属性的遍历","children":[]},{"level":3,"title":"__ proto __属性","slug":"proto-属性","link":"#proto-属性","children":[]},{"level":3,"title":"Object.keys(), Object.values(), Object.entries()","slug":"object-keys-object-values-object-entries","link":"#object-keys-object-values-object-entries","children":[]},{"level":3,"title":"对象的扩展运算符","slug":"对象的扩展运算符","link":"#对象的扩展运算符","children":[]}]},{"level":2,"title":"Symbel","slug":"symbel","link":"#symbel","children":[{"level":3,"title":"作为属性名","slug":"作为属性名","link":"#作为属性名","children":[]}]},{"level":2,"title":"Module模块","slug":"module模块","link":"#module模块","children":[{"level":3,"title":"export","slug":"export","link":"#export","children":[]},{"level":3,"title":"import","slug":"import","link":"#import","children":[]},{"level":3,"title":"模块在浏览器中加载","slug":"模块在浏览器中加载","link":"#模块在浏览器中加载","children":[]}]}],"git":{"createdTime":1668948234000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":22.72,"words":6817},"filePathRelative":"dev/ES6语法详解.md","localizedDate":"2022年6月26日","excerpt":"\\n<h2>let变量</h2>\\n<p><code>let</code>声明的变量在<code>let</code>命令所在的代码块中有效。不存在变量提升，只能先声明后使用。</p>\\n<h3>暂存死区</h3>","autoDesc":true}');export{e as data};
