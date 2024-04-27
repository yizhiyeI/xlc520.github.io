import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as s,c as d,b as e,d as i,e as a,a as l}from"./app-CXNU22eb.js";const o={},r=l(`<h1 id="敏感词检测-api-服务-wordscheck" tabindex="-1"><a class="header-anchor" href="#敏感词检测-api-服务-wordscheck"><span>敏感词检测 API 服务 wordscheck</span></a></h1><p><strong>什么是 wordscheck ？</strong></p><blockquote><p><code>wordscheck</code> 是敏感词检测 <code>API</code>，提供文本识别、智能鉴黄、涉政检测、谩骂等等敏感词检测过滤服务。</p></blockquote><p><strong>简介</strong></p><ul><li>敏感词库从大量样本库整理出来，基于 <code>NLP</code> 算法检测</li><li>支持 <code>Windows</code>、<code>MacOS</code>、<code>Linux</code> 等 <code>64</code> 位主流系统</li><li>可以部署在本地，或部署到阿里云、腾讯云、亚马逊云、谷歌云等云服务器</li><li>通过下载部署包，即可一键启动私有化的&quot;敏感词检测 <code>API</code> 服务&quot;</li><li>支持自动云更新最新词库</li><li>支持 <code>http json</code>方式或 <code>gRPC</code> 方式查询</li><li>单服务参考查询效率 <code>70000</code> 次/分钟，同时支持并行服务</li><li>支持自定义添加白名单/黑名单词条</li><li>服务运行内存 <code>100M</code> 左右，非常轻便</li></ul><p><strong>应用场景</strong></p><ul><li><code>AI</code> 智能问答、评论留言、聊天消息、直播弹幕、商品详情 等内容合规检测过滤</li><li>应用提审上架、主管部门审核、云平台内容巡查 等监管需要</li><li>境内外 产品内容合规需要，可部署到中国香港、新加坡、日本、美国、韩国等</li></ul><h1 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像"><span>构建镜像</span></a></h1><blockquote><p>如果你不想自己构建，可以跳过，直接阅读下一章节</p></blockquote><p>官方提供了 <code>Dockerfile</code> 文件，但没找到镜像，所以需要编自己编一下</p><p>构建镜像和容器运行的基本命令如下👇</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># 下载代码
git clone https://github.com/bosnzt/wordscheck.git
  
# 或者加个代理
git clone https://ghproxy.com/github.com/bosnzt/wordscheck.git
  
# 进入目录  
cd wordscheck
  
# 构建镜像
docker build -t wbsu2003/wordscheck:v1 .

# 运行容器
docker run -d \\
   --name wordscheck \\
   -p 8187:8080 \\
   wbsu2003/wordscheck:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1><p>在群晖上以 Docker 方式安装。</p><p>在注册表中搜索 <code>wordscheck</code> ，选择第一个 <code>wbsu2003/wordscheck</code>，版本选择 <code>latest</code>。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-0.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="端口" tabindex="-1"><a class="header-anchor" href="#端口"><span>端口</span></a></h2><p>本地端口不冲突就行，不确定的话可以用命令查一下</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># 查看端口占用
netstat -tunlp | grep 端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">本地端口</th><th style="text-align:center;">容器端口</th></tr></thead><tbody><tr><td style="text-align:center;"><code>8187</code></td><td style="text-align:center;"><code>8080</code></td></tr></tbody></table><p>默认没有暴露端口</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-1.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>需要点 <code>+</code> 号自己添加</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-2.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h1 id="命令行安装" tabindex="-1"><a class="header-anchor" href="#命令行安装"><span>命令行安装</span></a></h1><p>如果你熟悉命令行，可能用 <code>docker cli</code> 更快捷</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># 运行容器
docker run -d \\
   --restart unless-stopped \\
   --name wordscheck \\
   -p 8187:8080 \\
   wbsu2003/wordscheck
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用 <code>docker-compose</code> 安装，将下面的内容保存为 <code>docker-compose.yml</code> 文件</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>version: &#39;3&#39;

services:
  wordscheck:
    image: wbsu2003/wordscheck
    container_name: wordscheck
    restart: unless-stopped
    ports:
      - 8187:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行下面的命令</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># 新建文件夹 wordscheck
mkdir -p /volume1/docker/wordscheck

# 进入 wordscheck 目录
cd /volume1/docker/wordscheck

# 将 docker-compose.yml 放入当前目录

# 一键启动
docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h1><p>容器启动后，在日志中会看到</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-3.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>但是如果你直接在浏览器中输入 <code>http://群晖IP:8187</code> ，会看到下面的错误</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>404 page not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-4.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>需要通过 <code>curl</code> 来验证，用 <code>SSH</code> 客户端登录到群晖后，在命令行执行</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>curl http://192.168.0.197:8187/health
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果状态正常，会返回</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>{&quot;code&quot;:&quot;0&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-5.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>测试下敏感词服务</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>curl -H &quot;Accept: application/json&quot; \\
     -H &quot;Content-type: application/json&quot; \\
     -X POST \\
     -d &quot;{\\&quot;content\\&quot;:\\&quot;他在传播艳情内容\\&quot;}&quot;  \\
     http://192.168.0.197:8187/wordscheck
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-6.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>在输出格式化之后是👇下面这样的</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>{  
    &quot;code&quot;:&quot;0&quot;,  
    &quot;msg&quot;:&quot;检测成功&quot;,  
    &quot;return_str&quot;:&quot;他在传播**内容&quot;,  
    &quot;word_list&quot;:[  
        {  
            &quot;keyword&quot;:&quot;艳情&quot;,  
            &quot;category&quot;:&quot;色情&quot;,  
            &quot;position&quot;:&quot;4-5&quot;,  
            &quot;level&quot;:&quot;高&quot;  
        }  
    ],  
    &quot;extstr&quot;:&quot;&quot;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果觉得 <code>curl</code> 不方便，可以试试 <code>api</code> 工具</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921251-7.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>官方提供了 <code>http</code> 和 <code>rpc</code> 的不同语言的调用示例，需要自己根据需要进行选择</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921251-8.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h1>`,52),p={href:"https://github.com/bosnzt/wordscheck",target:"_blank",rel:"noopener noreferrer"},u={href:"https://doc.wordscheck.com/docs/docs",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.wordscheck.com/",target:"_blank",rel:"noopener noreferrer"};function m(b,v){const n=c("ExternalLinkIcon");return s(),d("div",null,[r,e("blockquote",null,[e("p",null,[i("bosnzt/wordscheck: 敏感词检测，违禁词过滤，敏感词过滤，敏感词库，一键启动，本地运行，私有化部署，1 分钟接入完成，支持 docker，支持在线 api 地址："),e("a",p,[i("https://github.com/bosnzt/wordscheck"),a(n)])]),e("p",null,[i("介绍 - Powered by MinDoc 地址："),e("a",u,[i("https://doc.wordscheck.com/docs/docs"),a(n)])]),e("p",null,[i("文本识别_智能鉴黄_敏感词过滤_涉政检测_在线体验_wordscheck 地址："),e("a",g,[i("https://www.wordscheck.com/"),a(n)])])])])}const w=t(o,[["render",m],["__file","敏感词检测API服务wordscheck.html.vue"]]),x=JSON.parse('{"path":"/dev/%E6%95%8F%E6%84%9F%E8%AF%8D%E6%A3%80%E6%B5%8BAPI%E6%9C%8D%E5%8A%A1wordscheck.html","title":"敏感词检测API服务wordscheck","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"敏感词检测API服务wordscheck","excerpt":null,"description":"敏感词检测 API 服务 wordscheck 什么是 wordscheck ？ wordscheck 是敏感词检测 API，提供文本识别、智能鉴黄、涉政检测、谩骂等等敏感词检测过滤服务。 简介 敏感词库从大量样本库整理出来，基于 NLP 算法检测 支持 Windows、MacOS、Linux 等 64 位主流系统 可以部署在本地，或部署到阿里云、腾讯...","date":"2023-11-28T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E6%95%8F%E6%84%9F%E8%AF%8D%E6%A3%80%E6%B5%8BAPI%E6%9C%8D%E5%8A%A1wordscheck.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"敏感词检测API服务wordscheck"}],["meta",{"property":"og:description","content":"敏感词检测 API 服务 wordscheck 什么是 wordscheck ？ wordscheck 是敏感词检测 API，提供文本识别、智能鉴黄、涉政检测、谩骂等等敏感词检测过滤服务。 简介 敏感词库从大量样本库整理出来，基于 NLP 算法检测 支持 Windows、MacOS、Linux 等 64 位主流系统 可以部署在本地，或部署到阿里云、腾讯..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-11-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"敏感词检测API服务wordscheck\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-0.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-1.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-2.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-3.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-4.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-5.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-6.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921251-7.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921251-8.png\\"],\\"datePublished\\":\\"2023-11-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"端口","slug":"端口","link":"#端口","children":[]}],"git":{"createdTime":1701949796000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":3}]},"readingTime":{"minutes":3.36,"words":1008},"filePathRelative":"dev/敏感词检测API服务wordscheck.md","localizedDate":"2023年11月28日","autoDesc":true}');export{w as comp,x as data};
