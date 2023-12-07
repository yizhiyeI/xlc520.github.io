const s=JSON.parse(`{"key":"v-0daac51d","path":"/linux/%E8%BF%90%E7%BB%B4%E8%84%9A%E6%9C%AC.html","title":"运维脚本","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"运维脚本","description":"运维脚本 一、根据PID过滤进程所有信息 #! /bin/bash # Function: 根据用户输入的PID，过滤出该PID所有的信息 read -p \\"请输入要查询的PID: \\" P n=\`ps -aux| awk '$2~/^'$P'$/{print $11}'|wc -l\` if [ $n -eq 0 ];then echo \\"该PID不存在！！\\" exit fi echo \\"--------------------------------\\" echo \\"进程PID: $P\\" echo \\"进程命令：\`ps -aux| awk '$2~/^'$P'$/{print $11}'\`\\" echo \\"进程所属用户: \`ps -aux| awk '$2~/^'$P'$/{print $1}'\`\\" echo \\"CPU占用率：\`ps -aux| awk '$2~/^'$P'$/{print $3}'\`%\\" echo \\"内存占用率：\`ps -aux| awk '$2~/^'$P'$/{print $4}'\`%\\" echo \\"进程开始运行的时刻：\`ps -aux| awk '$2~/^'$P'$/{print $9}'\`\\" echo \\"进程运行的时间：\`ps -aux| awk '$2~/^'$P'$/{print $10}'\`\\" echo \\"进程状态：\`ps -aux| awk '$2~/^'$P'$/{print $8}'\`\\" echo \\"进程虚拟内存：\`ps -aux| awk '$2~/^'$P'$/{print $5}'\`\\" echo \\"进程共享内存：\`ps -aux| awk '$2~/^'$P'$/{print $6}'\`\\" echo \\"--------------------------------\\"","date":"2023-11-18T00:00:00.000Z","category":"Linux","tag":"Linux","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/%E8%BF%90%E7%BB%B4%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"运维脚本"}],["meta",{"property":"og:description","content":"运维脚本 一、根据PID过滤进程所有信息 #! /bin/bash # Function: 根据用户输入的PID，过滤出该PID所有的信息 read -p \\"请输入要查询的PID: \\" P n=\`ps -aux| awk '$2~/^'$P'$/{print $11}'|wc -l\` if [ $n -eq 0 ];then echo \\"该PID不存在！！\\" exit fi echo \\"--------------------------------\\" echo \\"进程PID: $P\\" echo \\"进程命令：\`ps -aux| awk '$2~/^'$P'$/{print $11}'\`\\" echo \\"进程所属用户: \`ps -aux| awk '$2~/^'$P'$/{print $1}'\`\\" echo \\"CPU占用率：\`ps -aux| awk '$2~/^'$P'$/{print $3}'\`%\\" echo \\"内存占用率：\`ps -aux| awk '$2~/^'$P'$/{print $4}'\`%\\" echo \\"进程开始运行的时刻：\`ps -aux| awk '$2~/^'$P'$/{print $9}'\`\\" echo \\"进程运行的时间：\`ps -aux| awk '$2~/^'$P'$/{print $10}'\`\\" echo \\"进程状态：\`ps -aux| awk '$2~/^'$P'$/{print $8}'\`\\" echo \\"进程虚拟内存：\`ps -aux| awk '$2~/^'$P'$/{print $5}'\`\\" echo \\"进程共享内存：\`ps -aux| awk '$2~/^'$P'$/{print $6}'\`\\" echo \\"--------------------------------\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-07T11:49:56.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-07T11:49:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运维脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-07T11:49:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1701949796000,"updatedTime":1701949796000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":4.81,"words":1443},"filePathRelative":"linux/运维脚本.md","localizedDate":"2023年11月18日","excerpt":"<h1> 运维脚本</h1>\\n<p><strong>一、根据PID过滤进程所有信息</strong></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#! /bin/bash</span>\\n<span class=\\"token comment\\"># Function: 根据用户输入的PID，过滤出该PID所有的信息</span>\\n<span class=\\"token builtin class-name\\">read</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token string\\">\\"请输入要查询的PID: \\"</span> P\\n<span class=\\"token assign-left variable\\">n</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $11}'</span><span class=\\"token operator\\">|</span><span class=\\"token function\\">wc</span> <span class=\\"token parameter variable\\">-l</span><span class=\\"token variable\\">\`</span></span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$n</span> <span class=\\"token parameter variable\\">-eq</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span><span class=\\"token keyword\\">then</span>\\n <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"该PID不存在！！\\"</span>\\n <span class=\\"token builtin class-name\\">exit</span>\\n<span class=\\"token keyword\\">fi</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"--------------------------------\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程PID: <span class=\\"token variable\\">$P</span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程命令：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $11}'</span><span class=\\"token variable\\">\`</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程所属用户: <span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $1}'</span><span class=\\"token variable\\">\`</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"CPU占用率：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $3}'</span><span class=\\"token variable\\">\`</span></span>%\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"内存占用率：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $4}'</span><span class=\\"token variable\\">\`</span></span>%\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程开始运行的时刻：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $9}'</span><span class=\\"token variable\\">\`</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程运行的时间：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $10}'</span><span class=\\"token variable\\">\`</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程状态：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $8}'</span><span class=\\"token variable\\">\`</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程虚拟内存：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $5}'</span><span class=\\"token variable\\">\`</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"进程共享内存：<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">ps</span> -aux<span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'$2~/^'</span>$P<span class=\\"token string\\">'$/{print $6}'</span><span class=\\"token variable\\">\`</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"--------------------------------\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
