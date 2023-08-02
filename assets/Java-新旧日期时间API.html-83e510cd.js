const e=JSON.parse('{"key":"v-0d581cac","path":"/dev/Java-%E6%96%B0%E6%97%A7%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4API.html","title":"Java-新旧日期时间API","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Java-新旧日期时间API","description":"Java-新旧日期时间API 前言：Java标准库API 我们再来看一下Java标准库提供的API。Java标准库有两套处理日期和时间的API： 一套定义在java.util这个包里面，主要包括Date、Calendar和TimeZone这几个类； 一套新的API是在Java 8引入的，定义在java.time这个包里面，主要包括LocalDateTime、ZonedDateTime、ZoneId等。","date":"2023-06-06T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Java-%E6%96%B0%E6%97%A7%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4API.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Java-新旧日期时间API"}],["meta",{"property":"og:description","content":"Java-新旧日期时间API 前言：Java标准库API 我们再来看一下Java标准库提供的API。Java标准库有两套处理日期和时间的API： 一套定义在java.util这个包里面，主要包括Date、Calendar和TimeZone这几个类； 一套新的API是在Java 8引入的，定义在java.time这个包里面，主要包括LocalDateTime、ZonedDateTime、ZoneId等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T15:10:28.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-06-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T15:10:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-新旧日期时间API\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-01T15:10:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"前言：Java标准库API","slug":"前言-java标准库api","link":"#前言-java标准库api","children":[]},{"level":2,"title":"一、Java 8 之前的日期时间API","slug":"一、java-8-之前的日期时间api","link":"#一、java-8-之前的日期时间api","children":[]},{"level":2,"title":"二、 Java 8 推出了全新的日期时间API","slug":"二、-java-8-推出了全新的日期时间api","link":"#二、-java-8-推出了全新的日期时间api","children":[{"level":3,"title":"1、Java 8 新日期时间API介绍","slug":"_1、java-8-新日期时间api介绍","link":"#_1、java-8-新日期时间api介绍","children":[]},{"level":3,"title":"2、Java 8日期时间API包介绍","slug":"_2、java-8日期时间api包介绍","link":"#_2、java-8日期时间api包介绍","children":[]},{"level":3,"title":"3、Java 8日期时间API主要类","slug":"_3、java-8日期时间api主要类","link":"#_3、java-8日期时间api主要类","children":[]},{"level":3,"title":"4、Java 8 日期时间API的前缀列表","slug":"_4、java-8-日期时间api的前缀列表","link":"#_4、java-8-日期时间api的前缀列表","children":[]},{"level":3,"title":"三、新旧日期时间API的区别","slug":"三、新旧日期时间api的区别","link":"#三、新旧日期时间api的区别","children":[]}]},{"level":2,"title":"四、Java 8 日期时间API的使用","slug":"四、java-8-日期时间api的使用","link":"#四、java-8-日期时间api的使用","children":[{"level":3,"title":"1.LocalDate","slug":"_1-localdate","link":"#_1-localdate","children":[]},{"level":3,"title":"2.LocalTime","slug":"_2-localtime","link":"#_2-localtime","children":[]},{"level":3,"title":"3.LocalDateTime","slug":"_3-localdatetime","link":"#_3-localdatetime","children":[]},{"level":3,"title":"4.ZonedDateTime","slug":"_4-zoneddatetime","link":"#_4-zoneddatetime","children":[]},{"level":3,"title":"5.Instant","slug":"_5-instant","link":"#_5-instant","children":[]},{"level":3,"title":"6.OffSetDateTime 包含时差信息的日期和时间","slug":"_6-offsetdatetime-包含时差信息的日期和时间","link":"#_6-offsetdatetime-包含时差信息的日期和时间","children":[]},{"level":3,"title":"7.使用Period和Duration","slug":"_7-使用period和duration","link":"#_7-使用period和duration","children":[]},{"level":3,"title":"8.日期计算","slug":"_8-日期计算","link":"#_8-日期计算","children":[]},{"level":3,"title":"9.日期和时间格式化","slug":"_9-日期和时间格式化","link":"#_9-日期和时间格式化","children":[]},{"level":3,"title":"10. MonthDay 和YearMonth","slug":"_10-monthday-和yearmonth","link":"#_10-monthday-和yearmonth","children":[]},{"level":3,"title":"11.新旧API的转换","slug":"_11-新旧api的转换","link":"#_11-新旧api的转换","children":[]}]},{"level":2,"title":"五、Date和Calendar的使用","slug":"五、date和calendar的使用","link":"#五、date和calendar的使用","children":[{"level":3,"title":"1、Date类","slug":"_1、date类","link":"#_1、date类","children":[]},{"level":3,"title":"2、Calendar类","slug":"_2、calendar类","link":"#_2、calendar类","children":[]}]},{"level":2,"title":"六、时间戳","slug":"六、时间戳","link":"#六、时间戳","children":[]},{"level":2,"title":"七、前后端交接日期时间格式","slug":"七、前后端交接日期时间格式","link":"#七、前后端交接日期时间格式","children":[{"level":3,"title":"1.后端处理前端传来的日期","slug":"_1-后端处理前端传来的日期","link":"#_1-后端处理前端传来的日期","children":[]},{"level":3,"title":"2.与字符串的转换","slug":"_2-与字符串的转换","link":"#_2-与字符串的转换","children":[]},{"level":3,"title":"3.数据库存储时间","slug":"_3-数据库存储时间","link":"#_3-数据库存储时间","children":[]}]}],"git":{"createdTime":1690902628000,"updatedTime":1690902628000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":47.76,"words":14327},"filePathRelative":"dev/Java-新旧日期时间API.md","localizedDate":"2023年6月6日","excerpt":"<h1> Java-新旧日期时间API</h1>\\n<h2> 前言：Java标准库API</h2>\\n<p>我们再来看一下Java标准库提供的API。Java标准库有两套处理日期和时间的API：</p>\\n<ul>\\n<li>一套定义在<code>java.util</code>这个包里面，主要包括<code>Date</code>、<code>Calendar</code>和<code>TimeZone</code>这几个类；</li>\\n<li>一套新的API是在Java 8引入的，定义在<code>java.time</code>这个包里面，主要包括<code>LocalDateTime</code>、<code>ZonedDateTime</code>、<code>ZoneId</code>等。</li>\\n</ul>","autoDesc":true}');export{e as data};
