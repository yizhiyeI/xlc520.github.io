import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,d as n}from"./app.ffebafef.js";const s={},d=n(`<h1 id="centos7-minimal-\u5B89\u88C5\u540E\u521D\u59CB\u5316\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#centos7-minimal-\u5B89\u88C5\u540E\u521D\u59CB\u5316\u914D\u7F6E" aria-hidden="true">#</a> Centos7 Minimal \u5B89\u88C5\u540E\u521D\u59CB\u5316\u914D\u7F6E</h1><p></p><h2 id="_1-\u66F4\u65B0yum" tabindex="-1"><a class="header-anchor" href="#_1-\u66F4\u65B0yum" aria-hidden="true">#</a> 1:\u66F4\u65B0yum</h2><p><code>yum upgrade</code></p><h2 id="_2-\u5B89\u88C5\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> 2: \u5B89\u88C5\u57FA\u7840\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> vim* lrzsz  gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> telnet net-tools

\u5B89\u88C5ifconfig
yum provides <span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8BBE\u7F6Eip" tabindex="-1"><a class="header-anchor" href="#_3-\u8BBE\u7F6Eip" aria-hidden="true">#</a> 3: \u8BBE\u7F6EIP</h2><p><code>ip addr</code></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/linux/Centos7Minimal_files/3.jpg" alt="" loading="lazy"></p><p>\u6682\u65F6\u672A\u5206\u914DIP, \u6240\u4EE5\u8FDB\u884C\u5982\u4E0B\u4FEE\u6539</p><h3 id="_3-1-\u5206\u914D\u968F\u673Aip" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5206\u914D\u968F\u673Aip" aria-hidden="true">#</a> 3.1 \u5206\u914D\u968F\u673AIP</h3><p>\u5206\u914D\u9759\u6001IP\u8BF7\u770B3.2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts
<span class="token function">vim</span> ifcfg-ens192
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/linux/Centos7Minimal_files/1.jpg" alt="" loading="lazy"></p><p>\u5C06ONBOOT=no\u4FEE\u6539\u4E3AONBOOT=yes\u4FDD\u5B58\u9000\u51FA \u91CD\u542F\u7F51\u7EDC\u670D\u52A1</p><p><code>service network restart</code></p><p>\u518D\u6B21\u8F93\u5165</p><p><code>ip addr</code></p><h3 id="_3-2-\u8BBE\u7F6E\u9759\u6001ip" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8BBE\u7F6E\u9759\u6001ip" aria-hidden="true">#</a> 3.2: \u8BBE\u7F6E\u9759\u6001IP</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/linux/Centos7Minimal_files/2.jpg" alt="" loading="lazy"></p><p>\u8BBE\u7F6E\u5B8C,\u91CD\u542F\u7F51\u7EDC <code>service network restart</code> \u518D\u6B21\u8F93\u5165 <code>ip addr</code></p><h3 id="_3-\u6C38\u4E45\u5173\u95EDselinux" tabindex="-1"><a class="header-anchor" href="#_3-\u6C38\u4E45\u5173\u95EDselinux" aria-hidden="true">#</a> 3:\u6C38\u4E45\u5173\u95EDSelinux</h3><p><code>vim /etc/sysconfig/selinux</code></p><p><code>SELINUX=enforcing</code> \u6539\u4E3A\xA0<code>SELINUX=disabled</code> \u91CD\u542F\u670D\u52A1<code>reboot</code></p>`,24),c=[d];function l(r,o){return a(),i("div",null,c)}const h=e(s,[["render",l],["__file","Centos7Minimal.html.vue"]]);export{h as default};
