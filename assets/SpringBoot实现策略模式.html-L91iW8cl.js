import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-AGOZjyqV.js";const e={},p=t(`<h1 id="springboot实现策略模式" tabindex="-1"><a class="header-anchor" href="#springboot实现策略模式"><span>SpringBoot实现策略模式</span></a></h1><p>相信我们对策略模式都有耳闻，但是可能不知道它在项目中具体能有什么作用，我们需要在什么场景下才能去尽可能得去使用策略模式。</p><p>这里我简单的列出一个我之前在公司做的一个需求：跟第三方oa系统对接接口，对方需要回调我们当前系统，但是是不同的业务接口回调，我们系统可以根据一个字段来区分需要走哪个业务分支，可能初级程序员刚接触这个需求的时候想法是，多个接口回调，那就写多个接口罢了，强调接口隔离；或者直接一个接口也行，<code>if...else if</code> 也很不错，这里呢，为了彰显我们开发人员的逼格，我们可以基于一个接口外加设计模式之<strong>策略模式+简单工厂模式</strong>。 下面是一个简单的实现demo：</p><p><strong>首先是我们定义一个接口即起路由作用，我们具体的不同业务实现类来实现这个接口就可以；</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CalculationStrategy</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 策略接口
     */</span>
    <span class="token keyword">int</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">AddCalculationStrategyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">CalculationStrategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;Division&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">DivisionStrategyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">CalculationStrategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">/</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;multiple&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MultiplicationStrategyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">CalculationStrategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">*</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;subtract&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">SubtractionStrategyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">CalculationStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 如果Component注解中不写标识会默认加载驼峰类名：testStrategyImpl
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">class</span> <span class="token class-name">TestStrategyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">CalculationStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同的业务分支我就使用加减乘除来代替，也能起到同样的效果。</p><p><strong>第二步便是我们的策略上下文，我将其理解为策略工厂，这也是最核心的一个类；</strong> 这里我们项目启动的时候，第一步是初始化所有加了@component等类，我们的策略工厂的构造函数中有获取所有实现了路由规则的实现类名称，第二步便是将获取到的实现类名称放入到我们初始化的一个空的map中</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculationFactory</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     *  把策略角色（类型）key,和参数value放到Map中
     *  key就是beanName(具体策略实现类中@Component的名字)，value就是接口（具体的实现类）
     *  Maps是guava下的封装类型，实则是静态的创建了一个HashMap的对象，Maps可以根据key去获取value对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">CalculationStrategy</span><span class="token punctuation">&gt;</span></span> calculationStrategyMap <span class="token operator">=</span> <span class="token class-name">Maps</span><span class="token punctuation">.</span><span class="token function">newHashMapWithExpectedSize</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 利用构造函数在项目启动的时候将策略实现类注册到 map里
     * <span class="token keyword">@param</span> <span class="token parameter">strategyMap</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">CalculationFactory</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">CalculationStrategy</span><span class="token punctuation">&gt;</span></span> strategyMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>calculationStrategyMap<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>calculationStrategyMap<span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>strategyMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//可以使用@Getter注解代替，这样写方便读者理解在Service层调用Context执行策略</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">CalculationStrategy</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCalculationStrategyMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> calculationStrategyMap<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三步便是我们的路由接口实现，这一步便是具体路由的规则判断了</strong> 这里有一步我们需要对代码进行健壮性判断，以防<code>map.get()</code>结果为空导致系统报错，这里大家可以根据业务情况自行去处理。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculationService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CalculationFactory</span> calculationFactory<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operateByStrategy</span><span class="token punctuation">(</span><span class="token class-name">String</span> strategy<span class="token punctuation">,</span> <span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取入参，根据不同的参数类型去执行不同的策略，Context的get方法是在这个地方用到的，operate方法就是一开始定义的策略接口</span>
        <span class="token comment">//calculationFactory.getCalculationStrategyMap().get(strategy)这里可能会出现空，所以要做一个容错处理</span>
        <span class="token keyword">return</span> calculationFactory<span class="token punctuation">.</span><span class="token function">getCalculationStrategyMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>strategy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">operate</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>最后便是我们的测试接口了</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/strategy&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestStrategyController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CalculationService</span> calculationService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test/{operation}/{num1}/{num2}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">testCalculation</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> operation<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span>  <span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token annotation punctuation">@PathVariable</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 省略参数判空</span>
        <span class="token keyword">return</span> calculationService<span class="token punctuation">.</span><span class="token function">operateByStrategy</span><span class="token punctuation">(</span>operation<span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","SpringBoot实现策略模式.html.vue"]]);export{r as default};
