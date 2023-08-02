const e=JSON.parse(`{"key":"v-9e274aaa","path":"/linux/MySQL.html","title":"MySQL 8","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"MySQL 8","description":"MySQL 8","date":"2022-01-23T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/MySQL.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"MySQL 8"}],["meta",{"property":"og:description","content":"MySQL 8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-01-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 8\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1668948234000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":4.32,"words":1296},"filePathRelative":"linux/MySQL.md","localizedDate":"2022年1月23日","excerpt":"<h1> MySQL 8</h1>\\n<p>mysql从5.7一下子跳跃到了8.0，其中的改变还是很大，有点这里就不说了，小伙伴们自己去百度了解一下，这里重点说一下，安装的事</p>\\n<p>1.解压后，文件下下面是没有my.ini 和 data目录的，需要自己新建一个my.ini和data目录</p>\\n<p>my.ini的基本代码就这几行配置，足矣，更详细的自己官网上看（F:\\\\mysql-8.0.11-winx64 是我的解压路径）</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>\\n[mysqld]\\n# 设置3306端口\\nport=3306\\n# 设置mysql的安装目录\\nbasedir=E:\\\\Software\\\\mysql-8.0.19-winx64\\n# 设置mysql数据库的数据的存放目录，在安装mysql-5.7.30-winx64.zip版本的时候，此配置不可添加，否则mysql将无法启动。\\n# datadir=E:\\\\Software\\\\mysql-8.0.19-winx64\\\\data\\n# 允许最大连接数\\nmax_connections=200\\n# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统\\nmax_connect_errors=10\\n# 服务端使用的字符集默认为UTF8\\ncharacter-set-server=utf8\\n# 创建新表时将使用的默认存储引擎\\ndefault-storage-engine=INNODB\\n# 默认使用“mysql_native_password”插件认证\\ndefault_authentication_plugin=mysql_native_password\\n# 关闭ssl\\nskip_ssl\\n# 配置时区\\ndefault-time_zone='+8:00'\\n[mysql]\\n# 设置mysql客户端默认字符集\\ndefault-character-set=utf8\\n[client]\\n# 设置mysql客户端连接服务端时默认使用的端口\\nport=3306\\ndefault-character-set=utf8\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{e as data};
