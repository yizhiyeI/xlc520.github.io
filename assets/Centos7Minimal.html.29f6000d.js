import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,d as n}from"./app.59ffeed0.js";const s={},d=n(`<h1 id="centos7-minimal-安装后初始化配置" tabindex="-1"><a class="header-anchor" href="#centos7-minimal-安装后初始化配置" aria-hidden="true">#</a> Centos7 Minimal 安装后初始化配置</h1><p></p><h2 id="_1-更新yum" tabindex="-1"><a class="header-anchor" href="#_1-更新yum" aria-hidden="true">#</a> 1:更新yum</h2><p><code>yum upgrade</code></p><h2 id="_2-安装基础命令" tabindex="-1"><a class="header-anchor" href="#_2-安装基础命令" aria-hidden="true">#</a> 2: 安装基础命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> vim* lrzsz  gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> telnet net-tools

安装ifconfig
yum provides <span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-设置ip" tabindex="-1"><a class="header-anchor" href="#_3-设置ip" aria-hidden="true">#</a> 3: 设置IP</h2><p><code>ip addr</code></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/linux/Centos7Minimal_files/3.jpg" alt=""></p><p>暂时未分配IP, 所以进行如下修改</p><h3 id="_3-1-分配随机ip" tabindex="-1"><a class="header-anchor" href="#_3-1-分配随机ip" aria-hidden="true">#</a> 3.1 分配随机IP</h3><p>分配静态IP请看3.2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts
<span class="token function">vim</span> ifcfg-ens192
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/linux/Centos7Minimal_files/1.jpg" alt=""></p><p>将ONBOOT=no修改为ONBOOT=yes保存退出 重启网络服务</p><p><code>service network restart</code></p><p>再次输入</p><p><code>ip addr</code></p><h3 id="_3-2-设置静态ip" tabindex="-1"><a class="header-anchor" href="#_3-2-设置静态ip" aria-hidden="true">#</a> 3.2: 设置静态IP</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/linux/Centos7Minimal_files/2.jpg" alt=""></p><p>设置完,重启网络 <code>service network restart</code> 再次输入 <code>ip addr</code></p><h3 id="_3-永久关闭selinux" tabindex="-1"><a class="header-anchor" href="#_3-永久关闭selinux" aria-hidden="true">#</a> 3:永久关闭Selinux</h3><p><code>vim /etc/sysconfig/selinux</code></p><p><code>SELINUX=enforcing</code> 改为 <code>SELINUX=disabled</code> 重启服务<code>reboot</code></p>`,24),c=[d];function r(l,o){return a(),i("div",null,c)}const h=e(s,[["render",r],["__file","Centos7Minimal.html.vue"]]);export{h as default};
