import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c as p,b as s,d as a,e,a as t}from"./app-CXNU22eb.js";const r={},c=s("h1",{id:"mysql-压缩版安装配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mysql-压缩版安装配置"},[s("span",null,"MySQL 压缩版安装配置")])],-1),d=s("h2",{id:"_1-下载",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-下载"},[s("span",null,"1 下载")])],-1),m={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://cdn.mysql.com/archives/mysql-8.0/mysql-8.0.19-winx64.zip",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>此时的 MySQL 版本已经更新到 8.0.23，所以我需要进入多版本链接进行下载。</p><p><strong>注意：</strong></p><ul><li>旧版本中存在漏洞</li><li><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/image-20220115155838758.png" alt="image-20220115155838758" tabindex="0" loading="lazy"><figcaption>image-20220115155838758</figcaption></li></ul><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2 安装</span></a></h2><p>1.我们提前创建好解压目录：</p><p>找到刚才下载的压缩包，复制到我们上一步创建的解压目录下：</p><p>右键进行解压，解压后的目录如下图所示：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU3NzU0Mw.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>接下来创建我们的数据库文件存放位置，这里我在 mysql 解压目录的同级目录下创建了<code>databases</code>文件夹，作为数据库存放目录</p><p>接下来进行初始化安装： 用管理员身份打开 cmd 命令，并进入到 mysql 解压目录下的 bin 目录，如：<code>D:\\ProgramFiles\\MySQL8\\bin</code></p><p><strong>2、创建一个名为 my.ini 的文件：</strong></p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/ZmFuZ3poZW5naGVpdGk.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>3、修改 my.ini 文件：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token comment"># 设置mysql客户端默认字符集</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># 设置3306端口</span>
port <span class="token operator">=</span> <span class="token number">3306</span>
<span class="token comment"># 设置mysql的安装目录</span>
basedir <span class="token operator">=</span> D:\\\\Program Files\\\\mysql\\\\
<span class="token comment"># 设置mysql数据库的数据的存放目录</span>
datadir <span class="token operator">=</span> D:\\\\Program Files\\\\mysql\\\\<span class="token keyword">data</span>
<span class="token comment"># 允许最大连接数</span>
max_connections<span class="token operator">=</span><span class="token number">20</span>
<span class="token comment"># 服务端使用的字符集默认为8比特编码的latin1字符集</span>
<span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">-</span>server<span class="token operator">=</span>utf8
<span class="token comment"># 创建新表时将使用的默认存储引擎</span>
<span class="token keyword">default</span><span class="token operator">-</span>storage<span class="token operator">-</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">INNODB</span>
<span class="token comment"># 创建模式</span>
sql_mode <span class="token operator">=</span> NO_ENGINE_SUBSTITUTION<span class="token punctuation">,</span>STRICT_TRANS_TABLES



<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># 设置服务端使⽤用的字符集为utf-8</span>
<span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">-</span>server<span class="token operator">=</span>utf8
<span class="token comment"># 绑定IPv4地址</span>
bind<span class="token operator">-</span>address <span class="token operator">=</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
<span class="token comment"># 设置mysql的端⼝口号</span>
port <span class="token operator">=</span> <span class="token number">3306</span>
<span class="token comment"># 设置mysql的安装⽬目录</span>
basedir<span class="token operator">=</span>D:<span class="token operator">/</span>ProgramFiles<span class="token operator">/</span>MySQL8
<span class="token comment"># 设置mysql数据库的数据的存放⽬目录</span>
datadir<span class="token operator">=</span>D:<span class="token operator">/</span>ProgramFiles<span class="token operator">/</span>MySQL8<span class="token operator">/</span><span class="token keyword">data</span>
<span class="token comment"># 允许最⼤大连接数</span>
max_connections<span class="token operator">=</span><span class="token number">20</span>
<span class="token comment"># 创建新表时将使⽤用的默认存储引擎</span>
<span class="token keyword">default</span><span class="token operator">-</span>storage<span class="token operator">-</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">INNODB</span>
<span class="token keyword">default</span><span class="token operator">-</span>time_zone<span class="token operator">=</span><span class="token string">&#39;+8:00&#39;</span>
<span class="token comment"># 设置mysql以及数据库的默认编码</span>
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
<span class="token punctuation">[</span>mysql<span class="token punctuation">.</span>server<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
<span class="token comment"># 设置客户端默认字符集</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特别要注意：</strong></p><p>（1）D:\\Program Files\\mysql\\data 这个目录一定要是“\\”，千万别弄成“\\”不然会报错，或者可以用“/”； （2）Mysq 安装目录和数据存放目录一定要修改为你自己设定的目录，除非你设置的目录与上述一致。</p><h2 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置"><span>3.配置</span></a></h2><p>3.用管理员身份打开 cmd 窗口：win -&gt; windows 系统 -&gt; 右击命令提示符 -&gt; 更多 -&gt; 以管理员身份运行</p><p>4.进入到 bin 目录下</p><p>5.执行 <code>mysqld --install</code> 命令安装（执行 <code>mysqld --remove</code> 卸载安装）</p><p>6.继续执行 <code>mysqld --initialize --user=root --console</code> 命令</p><p>注意：初始化完成后 MySQL 会给 root 用户创建一个默认随机密码，下图白色部分就是密码，同时在 data 目录下也添加了相关的配置文件，如果密码有字符辨识不了，则把 date 目录下的文件都删了，重新执行这一步。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/1780812-20190829212537656-1187829463.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>7.执行<code>net start mysql</code>启动服务（执行<code>net stop mysql</code>关闭服务）</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/1780812-20190829212232857-537058421.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>8.执行<code>mysql -uroot -pqLBiVku7k%f</code>登录 MySQL（-u 后面是用户名，-p 后面是密码，即上面的默认随机密码）</p><p>9.修改密码</p><p>mysql 版本是 7:</p><p><code>set password = password(&#39;root&#39;);</code></p><p>注意：如果 mysql 版本是 8 或以上，则使用 alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;新的密码&#39;; 修改密码</p><p><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;</code> 这样我们就可以将<code>roo</code>t 账户的密码修改为<code>123456</code>了，将<code>123456</code>处替换为你们要修改的密码，回车执行就可以了。</p><p>12.登录 MySQL 后可以添加一个用户</p><p>添加格式：</p><p>grant 权限 on 数据库.表 to 用户名@&#39;IP 地址&#39; identified by &#39;密码&#39;</p><p>实例：</p><p><code>grant all on *.* to test@&#39;%&#39; identified by&#39;test&#39;</code></p><h2 id="_4-安装错误提示" tabindex="-1"><a class="header-anchor" href="#_4-安装错误提示"><span>4 安装错误提示</span></a></h2><h3 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h3><p>安装过程中如果出现以下错误，是我们的电脑缺少运行时环境。 **注：**在这里我们有出现这种情况，但为了以防万一，还是给大家说一下，这里的图片用的网图，如有侵权，请评论删图！</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/20200131203311761.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,40),y={href:"https://cn.dll-files.com/vcruntime140_1.dll.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/16422331874666.png" alt="在这里插入图片描述" loading="lazy"> 下载完成后，解压提取文件，将提取出来的<code>vcruntime140_1.dll</code>文件复制到我们的<code>C:\\Windows\\System32</code><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/16422331874677.png" alt="在这里插入图片描述" loading="lazy"><strong>注意, 32 位版本的<code>vcruntime140_1.dll</code>需要复制到<code>C:\\Windows\\SysWOW64</code>下</strong></p><h3 id="tips2" tabindex="-1"><a class="header-anchor" href="#tips2"><span>tips2</span></a></h3><p>mysqld –initialize-insecure 自动生成无密码的 root 用户； mysqld –initialize 自动生成带随机密码的 root 用户； mysqld -remove 移除自己的 mysqld 服务； net stop mysql 命令，停止 mysql 服务 如果报错，清空 data 文件夹，最好还是删掉 data 文件，重新执行 remove--initialize--install--start（这些不是命令）流程即可；</p><h2 id="_5-配置-mysql-的环境变量" tabindex="-1"><a class="header-anchor" href="#_5-配置-mysql-的环境变量"><span>5 配置 mysql 的环境变量</span></a></h2><div class="language-vbnet line-numbers-mode" data-ext="vbnet" data-title="vbnet"><pre class="language-vbnet"><code>MYSQL_HOME

D<span class="token punctuation">:</span>\\<span class="token function">Program</span> <span class="token keyword">Files</span>\\mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/20200303112518670.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>点击 Path，增加：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">%</span>MYSQL_HOME<span class="token operator">%</span>\\<span class="token builtin">bin</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/20190831112741174.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,9);function h(_,f){const n=l("ExternalLinkIcon");return i(),p("div",null,[c,d,s("p",null,[a("官网："),s("a",m,[a("https://www.mysql.com/"),e(n)]),a(" 最新版下载地址："),s("a",g,[a("https://dev.mysql.com/downloads/mysql/"),e(n)]),a(" 多版本下载地址："),s("a",u,[a("https://downloads.mysql.com/archives/community/"),e(n)]),a(" 在这里，我使用的是 MySQL8.0.19 解压缩版，附上下载链接："),s("a",k,[a("https://cdn.mysql.com/archives/mysql-8.0/mysql-8.0.19-winx64.zip"),e(n)])]),b,s("p",null,[a("解决办法： 下载 vcruntime140_1.dll，链接："),s("a",y,[a("https://cn.dll-files.com/vcruntime140_1.dll.html"),e(n)])]),v])}const x=o(r,[["render",h],["__file","MySQL压缩版安装配置.html.vue"]]),L=JSON.parse('{"path":"/linux/MySQL%E5%8E%8B%E7%BC%A9%E7%89%88%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE.html","title":"MySQL压缩版安装配置","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"MySQL压缩版安装配置","excerpt":null,"description":"MySQL压缩版安装配置","date":"2022-01-24T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/MySQL%E5%8E%8B%E7%BC%A9%E7%89%88%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"MySQL压缩版安装配置"}],["meta",{"property":"og:description","content":"MySQL压缩版安装配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images2/image-20220115155838758.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-01-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL压缩版安装配置\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/image-20220115155838758.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU3NzU0Mw.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/ZmFuZ3poZW5naGVpdGk.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/1780812-20190829212537656-1187829463.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/1780812-20190829212232857-537058421.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/20200131203311761.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/16422331874666.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/16422331874677.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/20200303112518670.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/20190831112741174.png\\"],\\"datePublished\\":\\"2022-01-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1 下载","slug":"_1-下载","link":"#_1-下载","children":[]},{"level":2,"title":"2 安装","slug":"_2-安装","link":"#_2-安装","children":[]},{"level":2,"title":"3.配置","slug":"_3-配置","link":"#_3-配置","children":[]},{"level":2,"title":"4 安装错误提示","slug":"_4-安装错误提示","link":"#_4-安装错误提示","children":[{"level":3,"title":"提示","slug":"提示","link":"#提示","children":[]},{"level":3,"title":"tips2","slug":"tips2","link":"#tips2","children":[]}]},{"level":2,"title":"5 配置 mysql 的环境变量","slug":"_5-配置-mysql-的环境变量","link":"#_5-配置-mysql-的环境变量","children":[]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2},{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":4.25,"words":1274},"filePathRelative":"linux/MySQL压缩版安装配置.md","localizedDate":"2022年1月24日"}');export{x as comp,L as data};
