import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,a as t}from"./app-e33eb8d4.js";const d={},c=t(`<h1 id="学会-idea-这-30-个神技-撸码效率直接起飞" tabindex="-1"><a class="header-anchor" href="#学会-idea-这-30-个神技-撸码效率直接起飞" aria-hidden="true">#</a> 学会 IDEA 这 30 个神技，撸码效率直接起飞</h1><p>IDEA 作为Java开发工具的后起之秀，几乎以碾压之势把其他对手甩在了身后，主要原因还是归功于：好用；虽然有点重，但依旧瑕不掩瑜，内置了非常多的功能，大大提高了日常的开发效率，下面汇总了常用的30个使用小技巧，学会之后，让你的撸码效率直接起飞...</p><ol><li>查看代码历史版本</li><li>调整idea的虚拟内存：</li><li>idea设置成eclipse的快捷键</li><li>设置提示词忽略大小写</li><li>关闭代码检查</li><li>设置文档注释模板</li><li>显示方法分隔符</li><li>设置多行tab</li><li>快速匹配方法的大括号位置</li><li>代码结尾补全</li><li>模糊搜索方法</li><li>预览某个类的代码</li><li>查看方法在哪里被调用</li><li>代码模板（代码快捷键）</li><li>自动导包、自动移除没用的包</li><li>codota插件：可以优先显示使用频率较高的类、方法</li><li>快速查看类、字段的注释</li><li>括号颜色区分</li><li>微服务项目中 将不同项目添加到同一个启动窗口</li><li>idea全局设置 （打开新窗口的设置）</li><li>java mapper层代码文件和mapper.xml文件相互跳转</li><li>设置idea背景图片</li><li>maven tree （查看maven jar包依赖关系）</li><li>快捷键切换回上一个点击开的tab</li><li>idea自带的ssh连接工具</li><li>代码调用链路图插件</li><li>获取当前线程dump</li><li>idea同个项目不同端口多开</li></ol><blockquote><p>注意：不同idea版本菜单、目录可能有细微差别，自己稍加分析都能找到</p></blockquote><h3 id="_1-查看代码历史版本" tabindex="-1"><a class="header-anchor" href="#_1-查看代码历史版本" aria-hidden="true">#</a> 1.查看代码历史版本</h3><p>鼠标在需要查看的java类 右键 找到<code>Local History</code> &gt;&gt; <code>Show History</code> 点开即可看到历史版本，常用于自己忘记代码改了哪些内容 或需要恢复至某个版本 (注意 只能看近期修改 太久了也是看不到的)</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588592-0.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_2-调整idea的虚拟内存" tabindex="-1"><a class="header-anchor" href="#_2-调整idea的虚拟内存" aria-hidden="true">#</a> 2. 调整idea的虚拟内存：</h3><p>尽管本质都是去改变 .vmoptions配置文件，但推荐使用<code>Change Memory Settings</code>去调整，选择<code>Edit Custom VM Options</code> 或者在本地磁盘目录更改，通过某些方法破解的idea 很可能造成idea打不开的情况</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588592-1.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_3-idea设置成eclipse的快捷键" tabindex="-1"><a class="header-anchor" href="#_3-idea设置成eclipse的快捷键" aria-hidden="true">#</a> 3. idea设置成eclipse的快捷键</h3><p>这对eclipse转idea的开发人员来说 非常友好，这样不需要记两套快捷键</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588592-2.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_4-设置提示词忽略大小写" tabindex="-1"><a class="header-anchor" href="#_4-设置提示词忽略大小写" aria-hidden="true">#</a> 4. 设置提示词忽略大小写</h3><p>把这个勾去掉，（有的idea版本是选择选项 选择none即可），例如String 输入string 、String 都可以提示</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588592-3.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_5-关闭代码检查" tabindex="-1"><a class="header-anchor" href="#_5-关闭代码检查" aria-hidden="true">#</a> 5. 关闭代码检查</h3><p>与eclipse类似，idea也可以自己关闭代码检查 减少资源使用，但不推荐全部关闭，（是大佬当我没说），把我们项目中不会使用到的关闭就好了</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588592-4.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_6-设置文档注释模板" tabindex="-1"><a class="header-anchor" href="#_6-设置文档注释模板" aria-hidden="true">#</a> 6. 设置文档注释模板</h3><p>文档注释快捷键及模板</p><blockquote><p>https://blog.csdn.net/qq_36268103/article/details/108027486</p></blockquote><h3 id="_7-显示方法分隔符" tabindex="-1"><a class="header-anchor" href="#_7-显示方法分隔符" aria-hidden="true">#</a> 7.显示方法分隔符</h3><p>方便查看方法与方法之间的间隔，在代码不规范的项目中 很好用！</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588592-5.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_8-设置多行tab" tabindex="-1"><a class="header-anchor" href="#_8-设置多行tab" aria-hidden="true">#</a> 8.设置多行tab</h3><p>idea默认是选择显示单行的，我们把这个去掉，就可以显示多行tab了，在打开tab过多时的场景非常方便！</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-6.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-7.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p><strong>8.1 tab过多会自动关闭</strong></p><p><code>settings</code> - <code>editor</code> - <code>General</code> - <code>Editor tabs</code> - <code>tab limit</code> 数值设大就好了</p><h3 id="_9-快速匹配方法的大括号位置" tabindex="-1"><a class="header-anchor" href="#_9-快速匹配方法的大括号位置" aria-hidden="true">#</a> 9. 快速匹配方法的大括号位置</h3><p><code>ctrl+[ ctrl+]</code> 可以快速跳转到方法大括号的起止位置，配合方法分隔符使用，不怕找不到方法在哪儿分割了</p><h3 id="_10-代码结尾补全" tabindex="-1"><a class="header-anchor" href="#_10-代码结尾补全" aria-hidden="true">#</a> 10.代码结尾补全</h3><p>例如一行代码补全分号，或者是<code>if(xxx)</code> 补全大括号，按<code>ctrl+shift+enter</code> 无需切换鼠标光标，大幅度提升了编码效率</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-8.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_11-模糊搜索方法" tabindex="-1"><a class="header-anchor" href="#_11-模糊搜索方法" aria-hidden="true">#</a> 11.模糊搜索方法</h3><p>例如People类里面的test方法，按<code>ctrl+shift+alt+n </code>输入<code>Peo.te</code> 就可以查到该方法了，如果觉得这个快捷键难记 也可以按<code>ctrl+shift+r</code> （查找某个文件名的快捷键 下图中的Files）,再手动选择Symbols</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-9.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_12-预览某个类的代码" tabindex="-1"><a class="header-anchor" href="#_12-预览某个类的代码" aria-hidden="true">#</a> 12.预览某个类的代码</h3><p>例如我们在test类中，有句代码：<code>People p = new People(); </code>我们想稍微查看一下People这个类，但是tab已经够多了，<code>ctrl+alt+b</code>会打开新的标签，标签多了就混乱了，尤其一堆命名类似的tab,这时候我们可以按<code>ctrl+shift+i</code> 实现预览功能，不占tab</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-10.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_13-查看方法在哪里被调用" tabindex="-1"><a class="header-anchor" href="#_13-查看方法在哪里被调用" aria-hidden="true">#</a> 13.查看方法在哪里被调用</h3><p><code>ctrl+alt+h</code> 可以清楚看到方法在哪些地方被调用；在知道这个快捷键之前，都是<code>ctrl+h</code>（idea默认 <code>ctrl+shift+f</code>）搜索，肉眼找的…</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-11.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_14-代码模板-代码快捷键" tabindex="-1"><a class="header-anchor" href="#_14-代码模板-代码快捷键" aria-hidden="true">#</a> 14.代码模板（代码快捷键）</h3><p>例如 : eclipse 中的syso是打印控制台输出 ，但是idea默认是sout , 如果非要改成syso 可以在<code>Postfix Completion</code>里面设置，类似的 fori等都是在里面设置</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-12.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_15-自动导包、自动移除没用的包" tabindex="-1"><a class="header-anchor" href="#_15-自动导包、自动移除没用的包" aria-hidden="true">#</a> 15.自动导包、自动移除没用的包</h3><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-13.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p><strong>15.1 手动导包 :alt+enter 手动移除未使用包: crtl+alt+o</strong></p><h3 id="_16-codota插件-可以优先显示使用频率较高的类、方法" tabindex="-1"><a class="header-anchor" href="#_16-codota插件-可以优先显示使用频率较高的类、方法" aria-hidden="true">#</a> 16. codota插件：可以优先显示使用频率较高的类、方法</h3><p>这个根据个人是否要使用 有的时候工具只能作参考，自己记忆才能保证准确</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-14.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_17-快速查看类、字段的注释" tabindex="-1"><a class="header-anchor" href="#_17-快速查看类、字段的注释" aria-hidden="true">#</a> 17. 快速查看类、字段的注释</h3><p>这是一个很有用的小技巧 按F2可以快速查看某个类或某个字段的文档注释 ;基于这点 其它IDE应该也是可以快速查看文档注释内容 不仅仅是idea特性,这也是为什么阿里编码规范里面会明确声明实体类字段需要用文档注释 而不能使用双斜杠// 注释 ,还记得刚看到这个规范的时候 很不理解 特地去百度 看到有人说就是个习惯问题 很显然不能说服人，直到发现F2可以快速查看之后 恍然大悟！</p><h3 id="_18-括号颜色区分" tabindex="-1"><a class="header-anchor" href="#_18-括号颜色区分" aria-hidden="true">#</a> 18. 括号颜色区分</h3><p><code>Rainbow Brackets</code> 插件 成对的括号用相同的颜色表示出来了</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-15.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_19-微服务项目中-将不同项目添加到同一个启动窗口" tabindex="-1"><a class="header-anchor" href="#_19-微服务项目中-将不同项目添加到同一个启动窗口" aria-hidden="true">#</a> 19. 微服务项目中 将不同项目添加到同一个启动窗口</h3><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588593-16.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>步骤：<code>View</code> ——&gt;<code>Tool Windows</code> ——&gt; <code>services</code> ——&gt;<code>add services</code></p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-17.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_20-idea全局设置-打开新窗口的设置" tabindex="-1"><a class="header-anchor" href="#_20-idea全局设置-打开新窗口的设置" aria-hidden="true">#</a> 20. idea全局设置 （打开新窗口的设置）</h3><p>例如我们打开新窗口时，maven配置会恢复 这时就需要对打开新窗口的设置进行修改 达到一个全局的目的。</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-18.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>在低版本idea中 也是在File下 例如idea2018是叫<code>other settings</code></p><h3 id="_21-java-mapper层代码文件和mapper-xml文件相互跳转" tabindex="-1"><a class="header-anchor" href="#_21-java-mapper层代码文件和mapper-xml文件相互跳转" aria-hidden="true">#</a> 21. java mapper层代码文件和mapper.xml文件相互跳转</h3><p><code>Free MyBatis plugin</code> 插件</p><p>点击绿色箭头可以直接跳转 非常方便</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-19.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_22-设置idea背景图片" tabindex="-1"><a class="header-anchor" href="#_22-设置idea背景图片" aria-hidden="true">#</a> 22. 设置idea背景图片</h3><p>BackgroundImage插件</p><p>设置喜欢的图片作为背景图</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-20.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_23-maven-tree-查看maven-jar包依赖关系" tabindex="-1"><a class="header-anchor" href="#_23-maven-tree-查看maven-jar包依赖关系" aria-hidden="true">#</a> 23. maven tree （查看maven jar包依赖关系）</h3><p>如果是使用 <code>mvn dependency:tree</code> 命令 , 结果是下图这样 很不方便查看</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-21.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>我们可以在idea右上角点击这个<code>ShowDependencies</code>按钮 以图片形式展示出来 图片按住ctrl和鼠标滑轮 可以放大，这个在排除依赖冲突 查看jar包来源时 非常好用</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-22.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>有的时候 可能莫名其妙看不到这个图标 ，我们可以点一下设置</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-23.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>把这个勾上，它就能显示了，等显示后，再把这个勾去掉</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-24.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_24-快捷键切换回上一个点击开的tab" tabindex="-1"><a class="header-anchor" href="#_24-快捷键切换回上一个点击开的tab" aria-hidden="true">#</a> 24. 快捷键切换回上一个点击开的tab</h3><p>当我们打开了多个tab的时候 ， 想要快速回到上一个点击的tab中 有的时候肉眼很难找</p><p>我们可以用快捷键 <code>alt + ←</code> 键 (eclipse版快捷键 idea默认快捷键需要自测) ，有的时候我们在后面tab编辑了内容 按一次可能不够 需要再多按几次 ,相应的 <code>alt + → </code>切换到下一个点击的tab</p><blockquote><p>常见应用场景：debug发生类跳转时 、利用快捷键在其它类中创建方法时</p></blockquote><p>即使两个tab不相邻 也可以切换回去</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-25.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_25-idea自带的ssh连接工具" tabindex="-1"><a class="header-anchor" href="#_25-idea自带的ssh连接工具" aria-hidden="true">#</a> 25. idea自带的ssh连接工具</h3><blockquote><p>类似的idea还有自带的数据库连接工具 但是视图界面并不如Navicat 所以很多人都不选择用</p></blockquote><ul><li>第一步：配置账号密码</li></ul><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-26.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><ul><li>第二步：开启ssh会话</li></ul><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-27.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_26-代码调用链路图插件" tabindex="-1"><a class="header-anchor" href="#_26-代码调用链路图插件" aria-hidden="true">#</a> 26. 代码调用链路图插件</h3><p><strong>SequenceDiagram 插件</strong></p><p>这其实是本文第13点的上位替代方案，idea自带的快捷键查看代码调用，只是以菜单形式展示，不太直观，如果是自己写的代码或比较规范的代码，那用自带的也就无所谓，如果是比较复杂的源码或不规范的代码，那使用 SequenceDiagram 会直观特别多。</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-28.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>在要查看的java文件鼠标右键，点击 <code>Sequence Diagram</code></p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-29.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>效果示例：</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-30.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_27-获取当前线程dump" tabindex="-1"><a class="header-anchor" href="#_27-获取当前线程dump" aria-hidden="true">#</a> 27. 获取当前线程dump</h3><p>在断点调试的时候，我们可以通过点击下图红色箭头指向的相机图标，获取当前线程的dump信息。</p><p>这个功能有什么用呢？我们可以通过线程名，分析当前是哪个线程执行的，在多线程环境下对代码运行分析起到辅助作用。</p><p>比如下图1， <code>run()</code>方法是通过main主线程执行的，只是方法调用，并没有启动多线程（这是我们熟知结论的实践证明）</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588594-31.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>当我们把run方法改成<code>start()</code>方法时，可以看到是线程thread0执行的。</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588595-32.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_28-idea同个项目不同端口多开" tabindex="-1"><a class="header-anchor" href="#_28-idea同个项目不同端口多开" aria-hidden="true">#</a> 28. idea同个项目不同端口多开</h3><p>这是个非常实用的功能，可以模拟集群 测试负载均衡。</p><p>此外 在开发阶段也是非常好用，开发过程中，让别人直接连自己本地测试 是不是非常方便？</p><p>那自己又想打断点调试 会影响别人 怎么办呢 ？这个时候多开的作用就体现出来了！</p><p>网上很多方法提到勾选 <code>Allow parallel run</code> (不同版本idea 名称不一样) ，我也亲眼见过有老师是可以多开启动的， 但我本地启动发现每次都会同时同端口启动多个，不知道是版本问题还是操作问题，这里我用的是另一种有效的方法：</p><p>在 <code>VM options</code> 加上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 8993是区别于 application.yml 配置中 port 的另一个端口，达到不同端口多开的效果
-Dserver.port=8993
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.xlc520.tk/blogImage/640-1674302588595-33.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>`,119),l=[c];function r(g,n){return i(),e("div",null,l)}const s=a(d,[["render",r],["__file","学会 IDEA 这 30 个神技，撸码效率直接起飞.html.vue"]]);export{s as default};
