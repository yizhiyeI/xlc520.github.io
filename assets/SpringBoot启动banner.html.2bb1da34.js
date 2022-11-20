import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,b as a,e,d as p,r as c}from"./app.59ffeed0.js";const l={},r=p('<h1 id="spring-boot启动默认的banner" tabindex="-1"><a class="header-anchor" href="#spring-boot启动默认的banner" aria-hidden="true">#</a> Spring Boot启动默认的banner</h1><p>自定义banner只需要在resource下新建一个<code>banner.txt</code>文件，将我们需要的banner字样放进去，启动的时候就会去读取使用这个文本文件中的banner。</p><p><a href="./banner.txt">banner.txt</a></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                   _ooOoo_\n                  o8888888o\n                  88&quot; . &quot;88\n                  (| -_- |)\n                  O\\  =  /O\n               ____/`---&#39;\\____\n             .&#39;  \\\\|     |//  `.\n            /  \\\\|||  :  |||//  \\\n           /  _||||| -:- |||||-  \\\n           |   | \\\\\\  -  /// |   |\n           | \\_|  &#39;&#39;\\---/&#39;&#39;  |   |\n           \\  .-\\__  `-`  ___/-. /\n         ___`. .&#39;  /--.--\\  `. . __\n      .&quot;&quot; &#39;&lt;  `.___\\_&lt;|&gt;_/___.&#39;  &gt;&#39;&quot;&quot;.\n     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |\n     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /\n======`-.____`-.___\\_____/___.-`____.-&#39;======\n                   `=---=&#39;\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n         	佛祖保佑       永无BUG\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制banner样式" tabindex="-1"><a class="header-anchor" href="#控制banner样式" aria-hidden="true">#</a> 控制banner样式</h2><p>Spring提供了三个枚举类来设定字符的颜色，分别是：</p><p>AnsiColor： 用来设定字符的前景色</p><p>AnsiBackground： 用来设定字符的背景色</p><p>AnsiStyle： 用来控制加粗、斜体、下划线等等。</p><p>使用${AnsiFoo.Bar}来指定样式，当指定样式的时候会有提示的：</p>',10),u={href:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/784924-20170831000838452-507152231.png",target:"_blank",rel:"noopener noreferrer"},d=p('<p>指定一种试一下，比如下面这种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>${AnsiColor.BRIGHT_YELLOW}\n                   _ooOoo_\n                  o8888888o\n                  88&quot; . &quot;88\n                  (| -_- |)\n                  O\\  =  /O\n               ____/`---&#39;\\____\n             .&#39;  \\\\|     |//  `.\n            /  \\\\|||  :  |||//  \\\n           /  _||||| -:- |||||-  \\\n           |   | \\\\\\  -  /// |   |\n           | \\_|  &#39;&#39;\\---/&#39;&#39;  |   |\n           \\  .-\\__  `-`  ___/-. /\n         ___`. .&#39;  /--.--\\  `. . __\n      .&quot;&quot; &#39;&lt;  `.___\\_&lt;|&gt;_/___.&#39;  &gt;&#39;&quot;&quot;.\n     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |\n     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /\n======`-.____`-.___\\_____/___.-`____.-&#39;======\n                   `=---=&#39;\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n         佛祖保佑       永无BUG\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示应用信息" tabindex="-1"><a class="header-anchor" href="#显示应用信息" aria-hidden="true">#</a> 显示应用信息</h2><p>除了上面的指定样式之外，还可以显示一些与应用相关的版本信息：</p><p>${application.version} 与MANIFEST.MF文件中相同的版本号，比如1.5.4.RELEASE</p><p>${application.formatted-version} 格式化过的版本号就是加个v然后用括号包起来，比如(v1.5.4.RELEASE)</p>',6),v=n("p",{"application.title":""},"$",-1),k=p(`<p>\${spring-boot.version} Spring Boot的版本</p><p>\${spring-boot.formatted-version} 格式化过的版本</p><h2 id="控制banner是否开启-输出位置" tabindex="-1"><a class="header-anchor" href="#控制banner是否开启-输出位置" aria-hidden="true">#</a> 控制banner是否开启，输出位置</h2><p>设置banner mode为OFF关闭banner：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>cc11001100</span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">Banner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
 
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringBootStudy002Application</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span> springApplication <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">(</span><span class="token class-name">SpringBootStudy002Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        springApplication<span class="token punctuation">.</span><span class="token function">setBannerMode</span><span class="token punctuation">(</span><span class="token class-name">Banner<span class="token punctuation">.</span>Mode</span><span class="token punctuation">.</span><span class="token constant">OFF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        springApplication<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="几个常用的字符画生成网站" tabindex="-1"><a class="header-anchor" href="#几个常用的字符画生成网站" aria-hidden="true">#</a> 几个常用的字符画生成网站</h2><p>介绍几个常用的字符画生成网站：</p>`,7),_={href:"https://www.bootschool.net/ascii",target:"_blank",rel:"noopener noreferrer"},m={href:"http://patorjk.com/software/taag/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://spring-boot-banner-gen.cfapps.io/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://www.degraeve.com/img2txt.php",target:"_blank",rel:"noopener noreferrer"},h=p(`<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><p>通过将 banner.txt 文件添加到类路径或将 spring.banner.location 属性设置为此类文件的位置，可以更改启动时打印的横幅。如果文件的编码不是UTF-8，则可以设置 spring.banner.charset 。除了文本文件，您还可以将 banner.gif ， banner.jpg 或 banner.png 图像文件添加到类路径或设置 spring.banner.image.location 属性。图像将转换为ASCII艺术表示，并打印在任何文本横幅上方。在 banner.txt 文件中，您可以使用以下任何占位符：</p><p>表23.1。横幅变量</p><p>变量 描述</p><p>\${application.version} 应用程序的版本号，如 MANIFEST.MF 中声明的那样。例</p><p>如， Implementation-Version: 1.0 打印为 1.0 。</p><p>\${application.formatted-version} 应用程序的版本号，在 MANIFEST.MF 中声明并格式化以显示（用括号括起来并以 v 为前缀）。例如 (v1.0) 。</p><p>\${spring-boot.version} 您正在使用的Spring Boot版本。例如 2.1.1.RELEASE 。</p><p>如果要以编程方式生成横幅，可以使用 SpringApplication.setBanner(… ) 方法。使用 org.springframework.boot.Banner</p><p>接口并实现您自己的 printBanner() 方法。</p><p>您还可以使用 spring.main.banner-mode 属性来确定是否必须在 System.out （ console ）上打印横幅，发送到配置的记录器（ log ），或者根本不产生横幅（ off ）。</p><p>打印的横幅以下列名称注册为单身bean：springBootBanner 。</p><p>YAML将 off 映射到 false ，因此如果要在应用程序中禁用横幅，请务必添加引号，如以下示例所示：</p><p>spring:</p><p>main:</p><p>banner-mode: &quot;off&quot;</p><p>23.3自定义SpringApplication</p><p>如果 SpringApplication 默认值不符合您的口味，您可以改为创建本地实例并对其进行自定义。例如，要关闭横幅，您可以写：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token class-name">SpringApplication</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">(</span><span class="token class-name">MySpringConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">setBannerMode</span><span class="token punctuation">(</span><span class="token class-name">Banner<span class="token punctuation">.</span>Mode</span><span class="token punctuation">.</span><span class="token constant">OFF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传递给 SpringApplication 的构造函数参数是Spring beans的配置源。在大多数情况下，这些是对 @Configuration 类的引用，</p><p>但它们也可以是对XML配置或应扫描的包的引用。</p><p>也可以使用 application.properties 文件配置 SpringApplication 。有关详细信息，请参见第24章，外部化配置。</p><p>有关配置选项的完整列表，请参阅 SpringApplication Javadoc。</p><p>23.4 Fluent Builder API</p><p>如果您需要构建 ApplicationContext 层次结构（具有父/子关系的多个上下文）或者您更喜欢使用“流畅”构建器API，则可以使用 SpringApplicationBuilder 。</p><p>SpringApplicationBuilder 允许您将多个方法调用链接在一起，并包含允许您创建层次结构的 parent 和 child 方法，如以下示例所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">SpringApplicationBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">.</span><span class="token function">sources</span><span class="token punctuation">(</span><span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>

<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 ApplicationContext 层次结构时存在一些限制。例如，Web组件必须包含在子上下文中，并且父/子上下文使用相同</p><p>的 Environment 。有关详细信息，请参阅 SpringApplicationBuilder Javadoc。</p>`,29);function f(S,w){const s=c("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[n("a",u,[a("image"),e(s)])]),d,v,k,n("p",null,[n("a",_,[a("https://www.bootschool.net/ascii"),e(s)])]),n("p",null,[n("a",m,[a("http://patorjk.com/software/taag/"),e(s)])]),n("p",null,[n("a",b,[a("https://spring-boot-banner-gen.cfapps.io/"),e(s)]),a(" 可以将上传图片转为文本形式的字符画，只是感觉风格比较鬼畜")]),n("p",null,[n("a",g,[a("http://www.degraeve.com/img2txt.php"),e(s)]),a(" 可以根据在线的图片网址生成字符画，比如可以直接将公司logo的地址粘贴进去生成字符画")]),h])}const B=i(l,[["render",f],["__file","SpringBoot启动banner.html.vue"]]);export{B as default};
