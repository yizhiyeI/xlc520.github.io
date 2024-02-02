const a=JSON.parse('{"key":"v-be175c8a","path":"/linux/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6.html","title":"Openssl一键自签证书","lang":"zh-CN","frontmatter":{"icon":"page","title":"Openssl一键自签证书","author":"xlc520","date":"2022-01-10T00:00:00.000Z","category":"linux","tag":["Openssl"],"sticky":false,"description":"Openssl一键自签证书 vim openssl.sh bash openssl.sh ","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Openssl一键自签证书"}],["meta",{"property":"og:description","content":"Openssl一键自签证书 vim openssl.sh bash openssl.sh "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-08T13:55:53.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Openssl"}],["meta",{"property":"article:published_time","content":"2022-01-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-08T13:55:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Openssl一键自签证书\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-01-08T13:55:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1668948234000,"updatedTime":1673186153000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"linux/openssl一键自签证书.md","localizedDate":"2022年1月10日","excerpt":"\\n<p><code>vim openssl.sh</code></p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span> <span class=\\"token parameter variable\\">-z</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$domain</span>\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span><span class=\\"token keyword\\">do</span>\\n    <span class=\\"token builtin class-name\\">read</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token string\\">\\"输入域名/IP(必填,如 *.haoduck.com): \\"</span> domain\\n<span class=\\"token keyword\\">done</span>\\n<span class=\\"token builtin class-name\\">read</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token string\\">\\"输入邮箱(选填,默认admin@haoduck.com): \\"</span> mail\\n<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span> <span class=\\"token parameter variable\\">-z</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$mail</span>\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token assign-left variable\\">mail</span><span class=\\"token operator\\">=</span>admin@haoduck.com\\n<span class=\\"token builtin class-name\\">read</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token string\\">\\"输入日期(选填,默认3650): \\"</span> day\\n<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span> <span class=\\"token parameter variable\\">-z</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$day</span>\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token assign-left variable\\">day</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">3650</span>\\n<span class=\\"token assign-left variable\\">dir</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$domain</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">mkdir</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">$dir</span>\\n<span class=\\"token assign-left variable\\">crt_file</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">$dir</span>/<span class=\\"token variable\\">${domain}</span>.crt\\"</span>\\n<span class=\\"token assign-left variable\\">key_file</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">$dir</span>/<span class=\\"token variable\\">${domain}</span>.key\\"</span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token builtin class-name\\">command</span> <span class=\\"token parameter variable\\">-v</span> openssl<span class=\\"token variable\\">)</span></span>\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span><span class=\\"token keyword\\">then</span>\\n    openssl req <span class=\\"token parameter variable\\">-x509</span> <span class=\\"token parameter variable\\">-nodes</span> <span class=\\"token parameter variable\\">-newkey</span> rsa:2048 <span class=\\"token parameter variable\\">-days</span> <span class=\\"token variable\\">$day</span> <span class=\\"token parameter variable\\">-keyout</span> <span class=\\"token variable\\">$key_file</span> <span class=\\"token parameter variable\\">-out</span> <span class=\\"token variable\\">$crt_file</span> <span class=\\"token parameter variable\\">-subj</span> <span class=\\"token string\\">\\"/C=US/ST=California/L=Los Angeles/O=Haoduck/OU=Aoao/CN=<span class=\\"token variable\\">${domain}</span>/emailAddress=<span class=\\"token variable\\">${mail}</span>\\"</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token parameter variable\\">-e</span> <span class=\\"token string\\">\\"<span class=\\"token entity\\" title=\\"\\\\t\\">\\\\t</span>证书：<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token builtin class-name\\">pwd</span><span class=\\"token variable\\">)</span></span>/<span class=\\"token variable\\">$crt_file</span><span class=\\"token entity\\" title=\\"\\\\n\\">\\\\n</span><span class=\\"token entity\\" title=\\"\\\\t\\">\\\\t</span>私钥：<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token builtin class-name\\">pwd</span><span class=\\"token variable\\">)</span></span>/<span class=\\"token variable\\">$key_file</span>\\"</span>\\n<span class=\\"token keyword\\">else</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"openssl 未安装\\"</span>\\n<span class=\\"token keyword\\">fi</span>\\n</code></pre></div>","autoDesc":true}');export{a as data};
