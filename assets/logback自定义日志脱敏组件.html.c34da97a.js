import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,b as s,e,d as t,r as c}from"./app.59ffeed0.js";const i={},u=t(`<h1 id="logback-自定义日志脱敏组件" tabindex="-1"><a class="header-anchor" href="#logback-自定义日志脱敏组件" aria-hidden="true">#</a> logback - 自定义日志脱敏组件</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>在我们书写代码的时候，会书写许多日志代码，但是有些敏感数据是需要进行安全脱敏处理的。</p><p>对于日志脱敏的方式有很多，常见的有<strong>①使用conversionRule标签，继承MessageConverter②书写一个脱敏工具类，在打印日志的时候对特定特字段进行脱敏返回。</strong></p><p>两种方式各有优缺点：</p><p>第一种方式需要修改代码，不符合开闭原则。</p><p>第二种方式，需要在日志方法的参数进行脱敏，对原生日志有入侵行为。</p><h2 id="自定义脱敏组件-slf4j-logback" tabindex="-1"><a class="header-anchor" href="#自定义脱敏组件-slf4j-logback" aria-hidden="true">#</a> 自定义脱敏组件（slf4j+logback）</h2><p>一个项目在书写了很多打印日志的代码，但是后面有了脱敏需求，如果我们去手动改动代码，会花费大量时间。如果引入本组件，完成配置即可轻松完成脱敏。（仅需三步可轻松配置）</p><h3 id="一、自定义脱敏组件-脱敏效果演示" tabindex="-1"><a class="header-anchor" href="#一、自定义脱敏组件-脱敏效果演示" aria-hidden="true">#</a> 一、自定义脱敏组件 - 脱敏效果演示</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210129141855313.png" alt="需要脱敏的日志"><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210129141946269.png" alt="控制台脱敏结果"></p><h3 id="二、自定义脱敏组件-使用方式" tabindex="-1"><a class="header-anchor" href="#二、自定义脱敏组件-使用方式" aria-hidden="true">#</a> 二、自定义脱敏组件 - 使用方式</h3><h5 id="_1、引入jar包依赖" tabindex="-1"><a class="header-anchor" href="#_1、引入jar包依赖" aria-hidden="true">#</a> 1、引入Jar包依赖</h5><p>前提是你将Jar包打入本地仓库，Jar包地址见后文。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pers.liuchengyin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>logback-desensitization<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、替换日志文件配置类-logback-xml" tabindex="-1"><a class="header-anchor" href="#_2、替换日志文件配置类-logback-xml" aria-hidden="true">#</a> 2、替换日志文件配置类(logback.xml)</h5><p>日志打印方式都只需要替换成脱敏的类即可，如果你的业务不需要，则无需替换。 ①ConsoleAppender - 控制台脱敏</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 原类</span>
<span class="token class-name"><span class="token namespace">ch<span class="token punctuation">.</span>qos<span class="token punctuation">.</span>logback<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span>ConsoleAppender</span>
<span class="token comment">// 替换类</span>
<span class="token class-name"><span class="token namespace">pers<span class="token punctuation">.</span>liuchengyin<span class="token punctuation">.</span>logbackadvice<span class="token punctuation">.</span></span>LcyConsoleAppender</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②RollingFileAppender - 滚动文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 原类</span>
<span class="token class-name"><span class="token namespace">ch<span class="token punctuation">.</span>qos<span class="token punctuation">.</span>logback<span class="token punctuation">.</span>core<span class="token punctuation">.</span>rolling<span class="token punctuation">.</span></span>RollingFileAppender</span>
<span class="token comment">// 替换类</span>
<span class="token class-name"><span class="token namespace">pers<span class="token punctuation">.</span>liuchengyin<span class="token punctuation">.</span>logbackadvice<span class="token punctuation">.</span></span>LcyRollingFileAppender</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③FileAppender - 文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 原类</span>
<span class="token class-name"><span class="token namespace">ch<span class="token punctuation">.</span>qos<span class="token punctuation">.</span>logback<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span>FileAppender</span>
<span class="token comment">// 替换类</span>
<span class="token class-name"><span class="token namespace">pers<span class="token punctuation">.</span>liuchengyin<span class="token punctuation">.</span>logbackadvice<span class="token punctuation">.</span></span>LcyFileAppender</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>替换示例：</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE_LOG_PATTERN<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%yellow(%date{yyyy-MM-dd HH:mm:ss}) |%highlight(%-5level) |%blue(%thread) |%blue(%file:%line) |%green(%logger) |%cyan(%msg%n)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- ConsoleAppender 控制台输出日志 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pers.liuchengyin.logbackadvice.LcyConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>
            \${CONSOLE_LOG_PATTERN}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、添加脱敏配置文件-logback-desensitize-yml" tabindex="-1"><a class="header-anchor" href="#_3、添加脱敏配置文件-logback-desensitize-yml" aria-hidden="true">#</a> 3、添加脱敏配置文件(logback-desensitize.yml)</h5><p>该配置文件应该放在resources文件下 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210129150716849.png" alt="图片"></p><h3 id="三、自定义脱敏组件-脱敏规范" tabindex="-1"><a class="header-anchor" href="#三、自定义脱敏组件-脱敏规范" aria-hidden="true">#</a> 三、自定义脱敏组件 - 脱敏规范</h3><h5 id="_1、支持数据类型" tabindex="-1"><a class="header-anchor" href="#_1、支持数据类型" aria-hidden="true">#</a> 1、支持数据类型</h5><p>八大基本类型及其包装类型、Map、List、业务里的Pojo对象、List&lt;业务里的Pojo对象&gt;、JSON字符串。 注：在配置文件中配置的时候，只需要配置对象里的属性值就行。</p><h5 id="_2、不支持的数据类型" tabindex="-1"><a class="header-anchor" href="#_2、不支持的数据类型" aria-hidden="true">#</a> 2、不支持的数据类型</h5><p>List&lt;八大基本类型及包装类型&gt;，因为不知道脱敏的数据源具体是哪一个。</p><h5 id="_3、匹配规则" tabindex="-1"><a class="header-anchor" href="#_3、匹配规则" aria-hidden="true">#</a> 3、匹配规则</h5><p><code>key + 分割符 + value</code>，目前仅支持冒号(<code>:</code>)和等号(<code>=</code>)，示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;your email:{}, your phone:{}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456789@qq.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;15310763497&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;your email={}, your cellphone={}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456789@qq.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;15310763497&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>key：定义了对应需要脱敏的关键字，如上诉的email、phone等以及业务对象中的字段、Map中的Key、JSON中的Key value：需要脱敏的值，如上诉的<code>123456789@qq.com</code>、<code>15310763497</code>。</p><h5 id="_4、日志规范" tabindex="-1"><a class="header-anchor" href="#_4、日志规范" aria-hidden="true">#</a> 4、日志规范</h5><p>建议书写日志的时候尽量规范，对于key为中文的是没有办法脱敏的，规范程度可以见脱敏效果演示里的代码。</p><h3 id="四、logback-desensitize-yml配置说明" tabindex="-1"><a class="header-anchor" href="#四、logback-desensitize-yml配置说明" aria-hidden="true">#</a> 四、logback-desensitize.yml配置说明</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 日志脱敏</span>
<span class="token key atrule">log-desensitize</span><span class="token punctuation">:</span>
  <span class="token comment"># 是否忽略大小写匹配，默认为true</span>
  <span class="token key atrule">ignore</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># 是否开启脱敏，默认为false</span>
  <span class="token key atrule">open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># pattern下的key/value为固定脱敏规则</span>
  <span class="token key atrule">pattern</span><span class="token punctuation">:</span>
    <span class="token comment"># 邮箱 - @前第4-7位脱敏</span>
    <span class="token key atrule">email</span><span class="token punctuation">:</span> <span class="token string">&quot;@&gt;(4,7)&quot;</span>
    <span class="token comment"># qq邮箱 - @后1-3位脱敏</span>
    <span class="token key atrule">qqemail</span><span class="token punctuation">:</span> <span class="token string">&quot;@&lt;(1,3)&quot;</span>
    <span class="token comment"># 姓名 - 姓脱敏，如*杰伦</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span>
    <span class="token comment"># 密码 - 所有需要完全脱敏的都可以使用内置的password</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> password
  <span class="token key atrule">patterns</span><span class="token punctuation">:</span>
    <span class="token comment"># 身份证号，key后面的字段都可以匹配以下规则(用逗号分隔)</span>
    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> identity<span class="token punctuation">,</span>idcard
      <span class="token comment"># 定义规则的标识</span>
      <span class="token key atrule">custom</span><span class="token punctuation">:</span>
        <span class="token comment"># defaultRegex表示使用组件内置的规则：identity表示身份证号 - 内置的18/15位</span>
        <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> identity
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">13</span>
        <span class="token comment"># 内置的other表示如果其他规则都无法匹配到，则按该规则处理</span>
        <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> other
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span>
    <span class="token comment"># 电话号码，key后面的字段都可以匹配以下规则(用逗号分隔)</span>
    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> phone<span class="token punctuation">,</span>cellphone<span class="token punctuation">,</span>mobile
      <span class="token key atrule">custom</span><span class="token punctuation">:</span>
        <span class="token comment"># 手机号 - 内置的11位手机匹配规则</span>
        <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> phone
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span>
        <span class="token comment"># 自定义正则匹配表达式：座机号(带区号，号码七位|八位)</span>
        <span class="token punctuation">-</span> <span class="token key atrule">customRegex</span><span class="token punctuation">:</span> <span class="token string">&quot;^0[0-9]{2,3}-[0-9]{7,8}&quot;</span>
        <span class="token comment"># -后面的1-4位脱敏</span>
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token string">&quot;-&lt;(1,4)&quot;</span>
        <span class="token comment"># 自定义正则匹配表达式：座机号(不带区号)</span>
        <span class="token punctuation">-</span> <span class="token key atrule">customRegex</span><span class="token punctuation">:</span> <span class="token string">&quot;^[0-9]{7,8}&quot;</span>
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span>
        <span class="token comment"># 内置的other表示如果其他规则都无法匹配到，则按该规则处理</span>
        <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> other
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span>
    <span class="token comment"># 这种方式不太推荐 - 一旦匹配不上，就不会脱敏</span>
    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> localMobile
      <span class="token key atrule">custom</span><span class="token punctuation">:</span>
          <span class="token key atrule">customRegex</span><span class="token punctuation">:</span> <span class="token string">&quot;^0[0-9]{2,3}-[0-9]{7,8}&quot;</span>
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个配置是相对完整的，一定要严格遵守层级配置格式。</p><h4 id="自定义脱敏支持的方式" tabindex="-1"><a class="header-anchor" href="#自定义脱敏支持的方式" aria-hidden="true">#</a> 自定义脱敏支持的方式</h4><p><strong>1、key:value的方式</strong><code>phone:4,7</code>，表示phone属性的4-7位进行脱敏 原始数据：13610357861 脱敏后：136****7861</p><p><strong>2、以符号作为起始、结束节点作为脱敏标志</strong><code>emai:&quot;@&gt;(4,7)&quot;</code>，<code>@</code>为脱敏标志，<code>&gt;</code>表示其为结束节点，<code>&lt;</code>表示其为开始节点。即@&gt;表示对@之前的进行脱敏，@&lt;表示对@之后的进行脱敏。这个示例就是@前的数据的第4-7位进行脱敏。<code>注意：这种规则里的双引号、括号不能省略</code>，<code>其次:和=不能作为标志符号，因为和匹配规则有冲突</code> 原始数据：<code>123456789@qq.com</code><code>&quot;@&gt;(4,7)&quot;</code>脱敏后：<code>123****89@qq.com</code><code>&quot;@&lt;(1,3)&quot;</code>脱敏后：<code>123456789@***com</code></p><p><strong>3、自定义正则脱敏</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">patterns</span><span class="token punctuation">:</span>
    <span class="token comment"># 手机号</span>
    <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> phone<span class="token punctuation">,</span>mobile
      <span class="token key atrule">custom</span><span class="token punctuation">:</span>
        <span class="token comment"># 手机号的正则</span>
        <span class="token punctuation">-</span> <span class="token key atrule">customRegex</span><span class="token punctuation">:</span> <span class="token string">&quot;^1[0-9]{10}&quot;</span>
          <span class="token comment"># 脱敏范围</span>
          <span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>customRegex：正则表达式，如果符合该表达式，则使用其对应的脱敏规则(position)</p><p><strong>4、一个字段，根据多种值含义进行自定义脱敏</strong> 比如说，username字段的值可以是手机号、也可以是邮箱，这个值动态改变的，前面几种方式都没办法解决，可以使用该方式。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patterns</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> username
    <span class="token key atrule">custom</span><span class="token punctuation">:</span>
      <span class="token comment"># 手机号 - 11位</span>
      <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> phone
        <span class="token key atrule">position</span> <span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span>
      <span class="token comment"># 邮箱 - @</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> email
	    <span class="token key atrule">position</span> <span class="token punctuation">:</span> <span class="token string">&quot;@&gt;(3,12)&quot;</span>
	  <span class="token comment"># 身份证 - 15/18位</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> identity
	    <span class="token key atrule">position</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span>
	  <span class="token comment"># 自定义正则</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">customRegex</span><span class="token punctuation">:</span> <span class="token string">&quot;^1[0-9]{10}&quot;</span>
	    <span class="token key atrule">position</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span>
	  <span class="token comment"># 都匹配不到时，按照这种规则来</span>
	  <span class="token punctuation">-</span> <span class="token key atrule">defaultRegex</span><span class="token punctuation">:</span> other
	    <span class="token key atrule">position</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>注意：上面示例中匹配规则里的 双引号和括号 都不能省略</code> 该组件内置四种匹配规则：手机号、身份证号、邮箱、other(其他匹配不到时用的)，内置一种脱敏方式：password，表示完全脱敏，可用于pattren下的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注：当pattern和patterns下的key有重复的时候，只会使用pattern下指定的方式进行脱敏。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jar包地址和源码地址" tabindex="-1"><a class="header-anchor" href="#jar包地址和源码地址" aria-hidden="true">#</a> Jar包地址和源码地址</h3>`,51),r={href:"https://github.com/liuchengyin01/LogbackDesensitization/tree/master/repo/pers/liuchengyin/logback-desensitization/1.0.0",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[n("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210129201007764.png",alt:"图片"})],-1),k={href:"https://github.com/liuchengyin01/LogbackDesensitization",target:"_blank",rel:"noopener noreferrer"},m={href:"https://gitee.com/liuchengyin_vae/LogbackDesensitization",target:"_blank",rel:"noopener noreferrer"},v=t(`<h4 id="jar包打入maven本地仓库的方式" tabindex="-1"><a class="header-anchor" href="#jar包打入maven本地仓库的方式" aria-hidden="true">#</a> Jar包打入Maven本地仓库的方式</h4><p>1、下载Jar包，放在一个文件夹里</p><p>2、在这个文件夹里打开cmd(打开cmd，进入到这个文件夹)</p><p>3、执行命令(前提保证maven配置正常，使用mvn -v命令查看是否正常，如果显示版本号表示正常)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mvn install<span class="token operator">:</span>install<span class="token operator">-</span>file <span class="token operator">-</span><span class="token class-name">DgroupId</span><span class="token operator">=</span>pers<span class="token punctuation">.</span>liuchengyin <span class="token operator">-</span><span class="token class-name">DartifactId</span><span class="token operator">=</span>logback<span class="token operator">-</span>desensitization <span class="token operator">-</span><span class="token class-name">Dversion</span><span class="token operator">=</span><span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">-</span><span class="token class-name">Dpackaging</span><span class="token operator">=</span>jar <span class="token operator">-</span><span class="token class-name">Dfile</span><span class="token operator">=</span>logback<span class="token operator">-</span>desensitization<span class="token operator">-</span><span class="token number">1.0</span><span class="token number">.0</span><span class="token punctuation">.</span>jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>命令说明：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token operator">-</span><span class="token class-name">DgroupId</span>
	表示jar对应的groupId  
	<span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>pers<span class="token punctuation">.</span>liuchengyin<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
 <span class="token operator">-</span><span class="token class-name">DartifactId</span><span class="token operator">:</span>
	表示jar对应的artifactId
	<span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>logback<span class="token operator">-</span>desensitization<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
 <span class="token operator">-</span><span class="token class-name">Dversion</span>
	表示jar对应的 version
	<span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">1.0</span><span class="token number">.0</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(b,h){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[n("a",r,[s("Jar包Github地址 - logback-desensitization-1.0.0.jar"),e(a)])]),d,n("p",null,[s("Github地址："),n("a",k,[s("Logback和slf4j的日志脱敏组件Demo"),e(a)])]),n("p",null,[s("Gitee地址："),n("a",m,[s("Logback和slf4j的日志脱敏组件Demo"),e(a)])]),v])}const x=p(i,[["render",g],["__file","logback自定义日志脱敏组件.html.vue"]]);export{x as default};
