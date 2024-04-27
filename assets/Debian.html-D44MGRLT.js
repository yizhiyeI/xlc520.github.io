import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as s}from"./app-CXNU22eb.js";const i={},t=s(`<h2 id="_1-debin-系统使用-vi-编辑出现无法正常使用" tabindex="-1"><a class="header-anchor" href="#_1-debin-系统使用-vi-编辑出现无法正常使用"><span>1.debin 系统使用 vi 编辑出现无法正常使用</span></a></h2><p>发现 Debian 下 Vi 编辑器在文本输入模式时，不能正确使用方向键和退格键，或者是输入内容无法正常的内容，解决方法：</p><h3 id="解决方法一" tabindex="-1"><a class="header-anchor" href="#解决方法一"><span>解决方法一</span></a></h3><p>用 vi 打开/etc/vim/vimrc.tiny，输入以下两行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> nocompatible

<span class="token builtin class-name">set</span> <span class="token assign-left variable">backspace</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就切换到非兼容模式，并且退格键也可以正常使用了。</p><h3 id="解决方法二" tabindex="-1"><a class="header-anchor" href="#解决方法二"><span>解决方法二</span></a></h3><p>vi 用不了自然编辑不了/etc/vim/vimrc.tiny。所以我们用 sed 插入。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;$a\\set nocompatible&#39;</span> /etc/vim/vimrc.tiny

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;$a\\set backspace=2&#39;</span> /etc/vim/vimrc.tiny
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面这 2 条。</p><h2 id="_2-vim-安装步骤" tabindex="-1"><a class="header-anchor" href="#_2-vim-安装步骤"><span>2.Vim 安装步骤</span></a></h2><p>步骤一、首先使用下面命令更新一下系统，确保您的系统是最新的，这一步很重要。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>步骤二、运行以下命令安装 Vim。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它将显示将与 Vim 一起安装的所有软件包。出现提示时按 Y 或 Enter，您应该会在几秒钟内安装 Vim。</p><h2 id="_3-debian-12-网络问题" tabindex="-1"><a class="header-anchor" href="#_3-debian-12-网络问题"><span>3.Debian 12 网络问题</span></a></h2><p>配置静态 IP 1、interfaces 配置 文件路径： /etc/network/interfaces</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>/etc/network/interfaces
<span class="token function">vi</span> /etc/network/interfaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># This file describes the network interfaces available on your system and how to activate them. For more information, see interfaces(5).</span>
<span class="token comment"># interfaces(5) file used by ifup(8) and ifdown(8)    Include files from /etc/network/interfaces.d:</span>
<span class="token builtin class-name">source</span> /etc/network/interfaces.d/*

<span class="token comment"># The loopback network interface</span>
auto lo
iface lo inet loopback

<span class="token comment">#开机启动ens33</span>
auto ens33
<span class="token comment">#接口ens33配置，static配置静态IP，dhcp为自动获取IP</span>
<span class="token comment">#iface ens33 inet dhcp</span>
<span class="token comment"># 静态IP地址</span>
allow-hotplug ens33
iface ens33 inet static
address <span class="token number">10.1</span>.1.10
<span class="token comment"># 子网掩码</span>
netmask <span class="token number">255.255</span>.255.0
<span class="token comment"># 网关</span>
gateway <span class="token number">10.1</span>.1.2
<span class="token comment">#dns-* options are implemented by the resolvconf package, if installed</span>
dns-nameservers <span class="token number">223.5</span>.5.5
dns-nameservers <span class="token number">119.29</span>.29.29
<span class="token comment">#dns-search 192.168.1.1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/etc/init.d/networking restart <span class="token operator">&amp;&amp;</span> dhclient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-关闭-linux-debian-kali-的蜂鸣声-beebe" tabindex="-1"><a class="header-anchor" href="#_4-关闭-linux-debian-kali-的蜂鸣声-beebe"><span>4.关闭 linux（Debian kali）的蜂鸣声（beebe）</span></a></h2><p>1：create the file <code>/etc/modprobe.d/pcspkr-blacklist.conf</code> 2：add the following line: <code>blacklist pcspkr</code> 3：<code>sudo depmod -a</code> 4：<code>sudo update-initramfs -u</code></p><p>对于 Debian/Ubuntu 系统，使用 root 身份执行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#echo &quot;blacklist pcspkr&quot; &gt;&gt; /etc/modprobe.d/blacklist</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;blacklist pcspkr&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/modprobe.d/pcspkr-blacklist.conf
depmod <span class="token parameter variable">-a</span>
update-initramfs <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 CentOS/Redhat/RHEL/Fedora 系统，使用 root 身份执行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;alias pcspkr off&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/modprobe.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),l=[t];function c(d,r){return n(),a("div",null,l)}const m=e(i,[["render",c],["__file","Debian.html.vue"]]),b=JSON.parse('{"path":"/linux/Debian.html","title":"Debian","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Debian","excerpt":null,"description":"Debian使用","date":"2023-11-15T00:00:00.000Z","category":"Linux","tag":"Linux","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Debian.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Debian"}],["meta",{"property":"og:description","content":"Debian使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-11-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Debian\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1.debin 系统使用 vi 编辑出现无法正常使用","slug":"_1-debin-系统使用-vi-编辑出现无法正常使用","link":"#_1-debin-系统使用-vi-编辑出现无法正常使用","children":[{"level":3,"title":"解决方法一","slug":"解决方法一","link":"#解决方法一","children":[]},{"level":3,"title":"解决方法二","slug":"解决方法二","link":"#解决方法二","children":[]}]},{"level":2,"title":"2.Vim 安装步骤","slug":"_2-vim-安装步骤","link":"#_2-vim-安装步骤","children":[]},{"level":2,"title":"3.Debian 12 网络问题","slug":"_3-debian-12-网络问题","link":"#_3-debian-12-网络问题","children":[]},{"level":2,"title":"4.关闭 linux（Debian kali）的蜂鸣声（beebe）","slug":"_4-关闭-linux-debian-kali-的蜂鸣声-beebe","link":"#_4-关闭-linux-debian-kali-的蜂鸣声-beebe","children":[]}],"git":{"createdTime":1699884497000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"linux/Debian.md","localizedDate":"2023年11月15日"}');export{m as comp,b as data};
