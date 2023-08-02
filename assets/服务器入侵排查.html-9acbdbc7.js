import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,a as t}from"./app-41defce9.js";const r={},g=t('<h1 id="服务器入侵排查" tabindex="-1"><a class="header-anchor" href="#服务器入侵排查" aria-hidden="true">#</a> 服务器入侵排查</h1><h3 id="_1-入侵者可能会删除机器的日志信息" tabindex="-1"><a class="header-anchor" href="#_1-入侵者可能会删除机器的日志信息" aria-hidden="true">#</a> 1.<strong>入侵者可能会删除机器的日志信息</strong></h3><p>可以查看日志信息是否还存在或者是否被清空，相关命令示例：</p><figure><img src="https://static.linch.eu.org/blogImage/640-165357407084712.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_2-入侵者可能创建一个新的存放用户名及密码文件" tabindex="-1"><a class="header-anchor" href="#_2-入侵者可能创建一个新的存放用户名及密码文件" aria-hidden="true">#</a> 2.<strong>入侵者可能创建一个新的存放用户名及密码文件</strong></h3><p>可以查看/etc/passwd及/etc/shadow文件，相关命令示例：</p><figure><img src="https://static.linch.eu.org/blogImage/640-16535740708461.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_3-入侵者可能修改用户名及密码文件" tabindex="-1"><a class="header-anchor" href="#_3-入侵者可能修改用户名及密码文件" aria-hidden="true">#</a> 3.<strong>入侵者可能修改用户名及密码文件</strong></h3><p>可以查看/etc/passwd及/etc/shadow文件内容进行鉴别，相关命令示例：</p><figure><img src="https://static.linch.eu.org/blogImage/640-16535740708462.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_4-查看机器最近成功登陆的事件和最后一次不成功的登陆事" tabindex="-1"><a class="header-anchor" href="#_4-查看机器最近成功登陆的事件和最后一次不成功的登陆事" aria-hidden="true">#</a> 4.<strong>查看机器最近成功登陆的事件和最后一次不成功的登陆事</strong></h3><p>对应日志“/var/log/lastlog”，相关命令示例：</p><figure><img src="https://static.linch.eu.org/blogImage/640-16535740708473.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_5-查看机器当前登录的全部用户" tabindex="-1"><a class="header-anchor" href="#_5-查看机器当前登录的全部用户" aria-hidden="true">#</a> 5.<strong>查看机器当前登录的全部用户</strong></h3><p>对应日志文件“/var/run/utmp”，相关命令示例：</p><figure><img src="https://static.linch.eu.org/blogImage/640-16535740708474.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_6-查看机-器创建以来登陆过的用户" tabindex="-1"><a class="header-anchor" href="#_6-查看机-器创建以来登陆过的用户" aria-hidden="true">#</a> 6.*<em>查看机***<em>器创建以来登陆过的用户</em></em></h3><p>对应日志文件“/var/log/wtmp”，相关命令示例：</p><figure><img src="https://static.linch.eu.org/blogImage/640-16535740708475.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_7-查看机器所有用户的连接时间-小时" tabindex="-1"><a class="header-anchor" href="#_7-查看机器所有用户的连接时间-小时" aria-hidden="true">#</a> 7.<strong>查看机器所有用户的连接时间（小时）</strong></h3><p>对应日志文件“/var/log/wtmp”，相关命令示例：<img src="https://static.linch.eu.org/blogImage/640-16535740708476.png" alt="图片" loading="lazy"></p><h3 id="_8-如果发现机器产生了异常流量" tabindex="-1"><a class="header-anchor" href="#_8-如果发现机器产生了异常流量" aria-hidden="true">#</a> 8.<strong>如果发现机器产生了异常流量</strong></h3><p>可以使用命令“tcpdump”抓取网络包查看流量情况或者使用工具”iperf”查看流量情况</p><h3 id="_9-可以查看-var-log-secure日志文件" tabindex="-1"><a class="header-anchor" href="#_9-可以查看-var-log-secure日志文件" aria-hidden="true">#</a> 9.<strong>可以查看/var/log/secure日志文件</strong></h3><p>尝试发现入侵者的信息，相关命令示例：<img src="https://static.linch.eu.org/blogImage/640-16535740708477.png" alt="图片" loading="lazy"></p><h3 id="_10-查询异常进程所对应的执行脚本文件" tabindex="-1"><a class="header-anchor" href="#_10-查询异常进程所对应的执行脚本文件" aria-hidden="true">#</a> 10.查询异常进程所对应的执行脚本文件</h3><p>a.top命令查看异常进程对应的PID</p><figure><img src="https://static.linch.eu.org/blogImage/640-16535740708478.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>b.在虚拟文件系统目录查找该进程的可执行文件</p><figure><img src="https://static.linch.eu.org/blogImage/640-16535740708479.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_11-如果确认机器已被入侵-重要文件已被删除-可以尝试找回被删除的文件note" tabindex="-1"><a class="header-anchor" href="#_11-如果确认机器已被入侵-重要文件已被删除-可以尝试找回被删除的文件note" aria-hidden="true">#</a> 11.如果确认机器已被入侵，重要文件已被删除，可以尝试找回被删除的文件Note:</h3><p>1、当进程打开了某个文件时，只要该进程保持打开该文件，即使将其删除，它依然存在于磁盘中。这意味着，进程并不知道文件已经被删除，它仍然可以向打开该文件时提供给它的文件描述符进行读取和写入。除了该进程之外，这个文件是不可见的，因为已经删除了其相应的目录索引节点。</p><p>2、在/proc 目录下，其中包含了反映内核和进程树的各种文件。/proc目录挂载的是在内存中所映射的一块区域，所以这些文件和目录并不存在于磁盘中，因此当我们对这些文件进行读取和写入时，实际上是在从内存中获取相关信息。大多数与 lsof 相关的信息都存储于以进程的 PID 命名的目录中，即 /proc/1234 中包含的是 PID 为 1234 的进程的信息。每个进程目录中存在着各种文件，它们可以使得应用程序简单地了解进程的内存空间、文件描述符列表、指向磁盘上的文件的符号链接和其他系统信息。lsof 程序使用该信息和其他关于内核内部状态的信息来产生其输出。所以lsof 可以显示进程的文件描述符和相关的文件名等信息。也就是我们通过访问进程的文件描述符可以找到该文件的相关信息。</p><p>3、当系统中的某个文件被意外地删除了，只要这个时候系统中还有进程正在访问该文件，那么我们就可以通过lsof从/proc目录下恢复该文件的内容。</p><p>假设入侵者将/var/log/secure文件删除掉了，尝试将/var/log/secure文件恢复的方法可以参考如下：</p><p>a.查看/var/log/secure文件，发现已经没有该文件</p><figure><img src="https://static.linch.eu.org/blogImage/640-165357407084710.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>b.使用lsof命令查看当前是否有进程打开/var/log/secure，</p><figure><img src="https://static.linch.eu.org/blogImage/640-165357407084711.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>c.从上面的信息可以看到 PID 1264（rsyslogd）打开文件的文件描述符为4。同时还可以看到/var/log/ secure已经标记为被删除了。因此我们可以在/proc/1264/fd/4（fd下的每个以数字命名的文件表示进程对应的文件描述符）中查看相应的信息，如下：</p><figure><img src="https://static.linch.eu.org/blogImage/640-165357407084812.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>d.从上面的信息可以看出，查看/proc/1264/fd/4就可以得到所要恢复的数据。如果可以通过文件描述符查看相应的数据，那么就可以使用I/O重定向将其重定向到文件中，如:</p><figure><img src="https://static.linch.eu.org/blogImage/640-165357407084813.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>e.再次查看/var/log/secure，发现该文件已经存在。对于许多应用程序，尤其是日志文件和数据库，这种恢复删除文件的方法非常有用。</p><figure><img src="https://static.linch.eu.org/blogImage/640-165357407084814.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p><strong>版权申明：内容来源网络，版权归原创者所有。除非无法确认，都会标明作者及出处，如有侵权，烦请告知，我们会立即删除!</strong></p>',46),n=[g];function o(c,s){return i(),e("div",null,n)}const h=a(r,[["render",o],["__file","服务器入侵排查.html.vue"]]);export{h as default};
