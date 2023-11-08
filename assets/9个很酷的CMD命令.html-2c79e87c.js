import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,a as i}from"./app-e33eb8d4.js";const n={},r=i('<h1 id="_9个很酷的cmd命令" tabindex="-1"><a class="header-anchor" href="#_9个很酷的cmd命令" aria-hidden="true">#</a> 9个很酷的CMD命令</h1><h2 id="ipconfig" tabindex="-1"><a class="header-anchor" href="#ipconfig" aria-hidden="true">#</a> <strong>ipconfig</strong></h2><p>功能：查询本机IP地址</p><p>操作方法：只要在在打开的cmd命令界面中输入“ipconfig”就可以了。</p><figure><img src="https://static.xlc520.tk/blogImage/640-16535737928341.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="msg" tabindex="-1"><a class="header-anchor" href="#msg" aria-hidden="true">#</a> <strong>msg</strong></h2><p>功能：向对方电脑发送一条文本提示</p><p>操作方法：首先你要知道对方的IP地址，接下来输入命令“msg /server:对方电脑IP * ”。在“*”后输入你要发送的内容即可。</p><figure><img src="https://static.xlc520.tk/blogImage/640-16535737928331.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="net-user" tabindex="-1"><a class="header-anchor" href="#net-user" aria-hidden="true">#</a> <strong>Net user</strong></h2><p>功能：查看本机账户情况</p><p>操作方法：和ipconfig一样，net user也有很多衍生的命令后缀，比方说“net user xxx 123456 /add”，输入后就会在系统中创建一个名为“xxx”的新用户，而新用户密码则是“123456”。</p><figure><img src="https://static.xlc520.tk/blogImage/640-16535737928342.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="net-share" tabindex="-1"><a class="header-anchor" href="#net-share" aria-hidden="true">#</a> <strong>Net share</strong></h2><p>作用：查看共享资源</p><p>操作方法：在cmd界面中输入“net share”查看所有已共享资源，然后输入“net share 要删除的共享文件夹 /delete”就可以啦！</p><h2 id="nslookup" tabindex="-1"><a class="header-anchor" href="#nslookup" aria-hidden="true">#</a> <strong>Nslookup</strong></h2><p>作用：检查网站IP地址</p><p>操作方法：在提示符状态输入“nslookup 对方网站域名”，哒哒哒哒……结果出来了！</p><figure><img src="https://static.xlc520.tk/blogImage/640-16535737928343.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="netsh-wlan-show" tabindex="-1"><a class="header-anchor" href="#netsh-wlan-show" aria-hidden="true">#</a> <strong>Netsh wlan show</strong></h2><p>作用：探秘Wi-Fi配置文件</p><p>操作方法：在提示符状态输入命令“netsh wlan show profile SSID key=clear”，输入完成后Windows会自动返回当前已连接WIFI的详细信息，包括SSID和连接密码。当前这里有一个前提，那就是你现在已经成功连接了。</p><figure><img src="https://static.xlc520.tk/blogImage/640-16535737928344.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="telnet" tabindex="-1"><a class="header-anchor" href="#telnet" aria-hidden="true">#</a> <strong>telnet</strong></h2><p>作用：看电影《星球大战》</p><p>操作方法：在提示符状态输入命令“telnet towel.blinkenlights.nl”，输入完成后稍等一会即可，电影会自动开演</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <strong>|</strong></h2><p>作用：将命令结果输出到剪贴板</p><p>操作方法：在需要导出结果的命令后方添加“|”，再加入导出位置就可以了。比方说“| clip”是导出到剪贴板，“| xxx.txt”是导出到xxx.txt。总之，你需要什么地方用，就放到哪儿，“|”支持绝大多数CMD指令。</p><figure><img src="https://static.xlc520.tk/blogImage/640-16535737928345.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> <strong>&amp;&amp;</strong></h2><p>作用：将多个命令“连接”起来，一步运行多组命令</p><p>操作方法：&amp;&amp;是CMD里一项“命令连接”语句，直接放在要连接的命令行中间即可。效果就是下图所示，一次输入后CMD会顺序执行所有命令。</p><figure><img src="https://static.xlc520.tk/blogImage/640-16535737928346.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>--- EOF ---</p>',36),s=[r];function o(g,h){return e(),t("div",null,s)}const d=a(n,[["render",o],["__file","9个很酷的CMD命令.html.vue"]]);export{d as default};
