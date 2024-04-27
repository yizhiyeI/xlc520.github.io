import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c,b as e,d as t,e as n,a as l}from"./app-CXNU22eb.js";const i={},r=l('<h1 id="tmpfiles-d-中文手册" tabindex="-1"><a class="header-anchor" href="#tmpfiles-d-中文手册"><span>tmpfiles.d 中文手册</span></a></h1><h2 id="名称" tabindex="-1"><a class="header-anchor" href="#名称"><span>名称</span></a></h2><p>tmpfiles.d — 配置如何创建、删除、清理易变文件与临时文件</p><h2 id="大纲" tabindex="-1"><a class="header-anchor" href="#大纲"><span>大纲</span></a></h2><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>/etc/tmpfiles.d/*.conf`\n`/run/tmpfiles.d/*.conf`\n`/usr/lib/tmpfiles.d/*.conf\n~/.config/user-tmpfiles.d/*.conf`\n`$XDG_RUNTIME_DIR/user-tmpfiles.d/*.conf`\n`~/.local/share/user-tmpfiles.d/*.conf`\n`…`\n`/usr/share/user-tmpfiles.d/*.conf\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p><code>tmpfiles.d</code> 配置文件定义了一套临时文件管理机制：<em>创建</em> 文件、目录、管道、设备节点，<em>调整</em> 访问模式、所有者、属性、限额、内容， <em>删除</em> 过期文件。主要用于管理易变的临时文件与目录，例如 <code>/run</code>,<code>/tmp</code>, <code>/var/tmp</code>,<code>/sys</code>, <code>/proc</code>,以及 <code>/var</code> 下面的某些目录。</p>',7),p=e("strong",null,"systemd-tmpfiles",-1),u={href:"https://www.wenjiangs.com/doc/systemd-systemd-tmpfiles",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"systemd-tmpfiles-setup.service",-1),h=e("code",null,"systemd-tmpfiles-cleanup.service",-1),v=e("code",null,"/run",-1),g=e("code",null,"tmpfiles.d",-1),f=e("code",null,"RuntimeDirectory=",-1),b={href:"https://www.wenjiangs.com/doc/systemd-systemd.exec",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"StateDirectory=",-1),q=e("code",null,"CacheDirectory=",-1),y=e("code",null,"LogsDirectory=",-1),x=e("code",null,"ConfigurationDirectory=",-1),k=e("code",null,"/var/lib/",-1),D=e("code",null,"/var/cache/",-1),C=e("code",null,"/var/log/",-1),T=e("code",null,"/etc/",-1),A=e("code",null,"tmpfiles.d",-1),L=l(`<h2 id="配置目录及其优先级" tabindex="-1"><a class="header-anchor" href="#配置目录及其优先级"><span>配置目录及其优先级</span></a></h2><p>配置文件的名称必须符合<code>*</code>package<code>*.conf</code> 或<code>*</code>package<code>*-*</code>part<code>*.conf</code> 格式。当需要明确的将某部分(part) 配置提取出来，以方便用户专门针对这部分进行修改的时候，应该使用第二种命名格式。</p><p>对于不同目录下的同名配置文件，仅以优先级最高的目录中的那一个为准。具体说来就是：<code>/etc/tmpfiles.d</code> 的优先级最高、<code>/run/tmpfiles.d</code> 的优先级居中、<code>/usr/lib/tmpfiles.d</code> 的优先级最低。软件包应该将自带的配置文件安装在 <code>/usr/lib/tmpfiles.d</code> 目录中，而 <code>/etc/tmpfiles.d</code> 目录仅供系统管理员使用。所有的配置文件，无论其位于哪个目录中，都统一按照文件名的字典顺序处理。如果在多个配置文件中设置了同一个路径( 文件或目录)，那么仅以文件名最靠前(字典顺序) 的那一个为准，其他针对同一个路径的配置项将会作为警告信息记录到错误日志中。如果有两行的路径互为前后缀，那么始终是先创建前缀行、再创建后缀行，如果还需要删除，那么顺序正好相反，始终是先删除后缀行、再删除前缀行。所有带有 shell 风格通配符的行，都在所有不带通配符的行之后处理。如果有多个操作符应用于同一个文件(例如 ACL,xattr, 文件属性调整) ，那么将始终按固定的顺序操作。除上述清空之外，对于其他情况，文件与目录总是按照它们在配置文件中出现的顺序处理。</p><p>如果系统管理员想要屏蔽 <code>/usr/lib/</code> 目录中的某个配置文件，那么最佳做法是在 <code>/etc/</code> 目录中创建一个指向 <code>/dev/null</code> 的同名符号链接，即可彻底屏蔽 <code>/usr/lib/</code> 目录中的同名文件。</p><h2 id="配置文件格式" tabindex="-1"><a class="header-anchor" href="#配置文件格式"><span>配置文件格式</span></a></h2><p>配置文件的格式是每行对应一个路径，包含如下字段：类型, 路径, 权限, 属主, 属组, 寿命, 参数</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>#Type Path        Mode User Group Age Argument
d     /run/user   0755 root root  10d -
L     /tmp/foobar -    -    -     -   /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段值可以用引号界定，并可以包含 C 风格的转义字符。</p><h3 id="类型-type" tabindex="-1"><a class="header-anchor" href="#类型-type"><span>类型(Type)</span></a></h3><p>&quot;类型&quot;字段由一个单独的、表示类型的字母与一个可选的感叹号(!)和/或减号(-)组成。</p><p>可以识别的类型如下：</p>`,11),S=l("<li><p><code>f</code></p><p>若指定的文件不存在，则创建它，否则什么也不做。 若设置了&quot;参数&quot;字段并且并且指定的文件不存在，则将其内容写入指定的文件。不追踪软连接。</p></li><li><p><code>F</code></p><p>若指定的文件不存在，则创建它，否则清空已有文件。 若设置了&quot;参数&quot;字段，则将其内容写入指定的文件。不追踪软连接。</p></li><li><p><code>w</code></p><p>若指定的文件存在，则将&quot;参数&quot;字段的内容写入该文件，否则什么也不做。 注意： (1)不会在&quot;参数&quot;字段内容的末尾添加额外的换行符。 ( 2)可以在&quot;参数&quot;字段中使用 C 语言风格的转义字符。 (3)可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 (4)追踪软连接。</p></li><li><p><code>d</code></p><p>创建指定的目录并赋于指定的 User/Group 与权限。如果指定的目录已经存在，那么仅调整 User/Group 与权限。 如果指定了&quot;寿命&quot; 字段，那么该目录中的内容将遵守基于时间的清理策略。</p></li><li><p><code>D</code></p><p>与 <code>d</code> 类似， 但是如果使用了 <code>--remove</code> 选项，那么将会清空目录中的所有内容。</p></li><li><p><code>e</code></p><p>调整已存在目录的 User/Group 与权限， 并遵守基于时间的清理策略。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 如果指定了&quot; 寿命&quot;字段，那么该目录中的内容将遵守基于时间的清理策略。 如果&quot;寿命&quot;字段的值为 &quot;<code>0</code>&quot; ， 那么每次运行 <strong>systemd-tmpfiles --clean</strong> 命令时，都会无条件清空该目录。要想让此类型有效，必须至少明确设置 权限, 属主, 属组, 寿命 字段之一。 作为一个例外，当与 <code>!</code> 一起使用时， 无效行可能就变得有意义了(参见后面的例子)。</p></li><li><p><code>v</code></p><p>如果指定的路径不存在，并且该路径位于一个 Btrfs 子卷中， 那么按照指定的路径创建子卷。 否则，创建一个普通的目录(与 <code>d</code> 一样)。 仅对 Btrfs 文件系统有意义。此处创建的子卷不会被分配给任何 higher-level 配额组(quota group)， 如果想要创建简单的配额组层次关系，那么应该使用下面的 <code>q</code> 或 <code>Q</code> 。</p></li>",7),w=e("p",null,[e("code",null,"q")],-1),I=e("code",null,"v",-1),E=e("code",null,"d",-1),G=e("code",null,"Q",-1),M={href:"https://linux.die.net/man/8/btrfs-qgroup",target:"_blank",rel:"noopener noreferrer"},U=l("<li><p><code>Q</code></p><p>与 <code>v</code> 一样，创建一个子卷或目录，但不同之处在于， 将创建的子卷分配给一个新叶子配额组。不同于 <code>q</code> 之处在于， 并不直接复用父卷的 higher-level 配额组(quota group)， 而是首先找到父卷的最低级非叶子配额组(也就是倒数第二级配额组)， 然后在此配额组与最末端的叶子配额组之间，插入一个 level 值减一的&quot;中间配额组&quot;， 并且与新建的子卷共享同一个 ID。 如果父卷不存在 higher-level 配额组，那么插入一个 level 值为 255 且 ID 与新建子卷相同的&quot;中间配额组&quot;， 并且这个新建的&quot;中间配额组&quot;将被指定为父卷的 higher-level 配额组(quota group)， 同时，新建子卷的叶子配额组也会分配给它(中间配额组)。单就新建子卷自身而言，<code>q</code> 与 <code>Q</code> 在实际效果上并无不同， 但是通过插入一个新的 higher-level 配额组， <code>Q</code> 可以实现对该新建子卷以及未来创建在该子卷之下的下级子卷进行统一的配额限制。 这样，在通过 <code>q</code> 与 <code>Q</code> 创建子卷的同时，也一起实现了一颗&quot;配额子树&quot;。 每一个 <code>Q</code> 创建的子卷都将拥有一个自己专属的配额层次结构(配额树)，可用于容纳将来创建的下级子卷。 每一个 <code>q</code> 创建的子卷都没有自己专属的配额树， 其自身会被添加到 直属父卷所属的配额树中。<code>Q</code> 通常用于 <code>/home</code> 或 <code>/var/lib/machines</code> 这样的目录， 其特点是：不但需要包含多个下级子卷，而且需要将所有下级子卷视为一个整体进行配额限制。 <code>q</code> 通常用于 <code>/var</code> 或 <code>/var/tmp</code> 这样的目录， 其特点是： 要么不需要包含下级子卷，要么不需要将所有下级子卷视为一个整体进行配额限制。与 <code>q</code> 一样，<code>Q</code> 也不会改变任何已存在子卷的配额层次关系， 无论该子卷是否已经分配有配额组(quota group)。</p></li><li><p><code>p</code>, <code>p+</code></p><p>若指定的管道(FIFO)不存在， 则创建它，否则什么也不做。 后缀 <code>+</code> 表示：若指定的路径已存在一个非管道文件， 则先删除此文件再创建指定的管道文件。</p></li><li><p><code>L</code>, <code>L+</code></p><p>若指定的软连接不存在，则创建它，否则什么也不做。 后缀 <code>+</code> 表示： 若指定的路径已存在一个非软连接文件或目录， 则先删除此文件或目录再创建指定的软连接。 若&quot;参数&quot;字段为空， 那么将创建一个指向 <code>/usr/share/factory/</code> 目录中同名文件的软连接。 注意，软连接的 User/Group 与权限将被忽略。</p></li><li><p><code>c</code>, <code>c+</code></p><p>若指定的字符设备不存在， 则创建它，否则什么也不做。 后缀 <code>+</code> 表示： 若指定的路径已存在一个非字符设备的文件， 则先删除此文件再创建指定的字符设备。 因为 udev 并不管理运行时创建的静态设备节点， 所以建议在末尾加上&quot;!&quot; ，以确保仅在系统启动期间才创建此静态设备节点。</p></li><li><p><code>b</code>, <code>b+</code></p><p>若指定的块设备不存在， 则创建它，否则什么也不做。 后缀 <code>+</code> 表示： 若指定的路径已存在一个非块设备的文件， 则先删除此文件再创建指定的块设备。 因为 udev 并不管理在运行时创建的静态设备节点， 所以建议在末尾加上&quot;!&quot;，以确保仅在系统启动期间才创建此静态设备节点。</p></li><li><p><code>C</code></p><p>如果指定的文件或目录不存在或目录为空， 那么递归的从&quot;参数&quot;字段所指定的文件或目录复制， 否则什么也不做。 注意，如果下级子目录存在且非空，那么将会跳过该子目录的复制。 若&quot;参数&quot;字段为空， 那么将从 <code>/usr/share/factory/</code> 目录中 递归的复制同名文件或目录。 不追踪软连接。</p></li><li><p><code>x</code></p><p>在根据&quot;寿命&quot;字段清理过期文件时， 忽略指定的路径及该路径下的所有内容。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 注意， 这个保护措施对 <code>r</code> 与 <code>R</code> 无效。</p></li><li><p><code>X</code></p><p>在根据&quot;寿命&quot;字段清理过期文件时， 仅忽略指定的路径自身而不包括该路径下的其他内容。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 注意， 这个保护措施对 <code>r</code> 与 <code>R</code> 无效。</p></li><li><p><code>r</code></p><p>若指定的文件或目录存在， 则删除它。 不可用于非空目录。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 不追踪软连接。</p></li><li><p><code>R</code></p><p>若指定的文件或目录存在，则递归的删除它。 可用于非空目录。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 不追踪软连接。</p></li><li><p><code>z</code></p><p>若指定的文件或目录存在， 则仅设置其自身的访问权限、属主、属组、重置 SELinux 安全上下文。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。不追踪软连接。</p></li><li><p><code>Z</code></p><p>若指定的文件或目录存在， 则递归的设置其访问权限、属主、属组、重置 SELinux 安全上下文。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 不追踪软连接。</p></li><li><p><code>t</code></p><p>若指定的文件或目录存在， 则仅设置其自身的 SMACK 标签。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 不追踪软连接。</p></li><li><p><code>T</code></p><p>若指定的文件或目录存在， 则递归的设置其 SMACK 标签。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 不追踪软连接。</p></li>",14),P=e("p",null,[e("code",null,"h")],-1),R=e("code",null,"[+-=][aAcCdDeijsStTu]",-1),N=e("code",null,"+",-1),$=e("code",null,"-",-1),B=e("code",null,"=",-1),X=e("code",null,"aAcCdDeijsStTu",-1),O=e("code",null,"aAcCdDeijsStTu",-1),Q={href:"http://man7.org/linux/man-pages/man1/chattr.1.html",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"=",-1),F=e("code",null,"aAcCdDeijsStTu",-1),j=l("<li><p><code>H</code></p><p>若指定的文件或目录存在，则递归的调整其属性。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 不追踪软连接。&quot;参数&quot; 字段的语法与 <code>h</code> 完全相同。</p></li><li><p><code>a</code>, <code>a+</code></p><p>若指定的文件或目录存在， 则仅设置其自身的访问控制列表(POSIX ACL)。 可以在&quot;路径&quot;字段中使用 shell 风格的通配符。 后缀 <code>+</code> 表示将指定的项添加到已有的访问控制列表中。 除非基本权限已经存在或被明确指定， 否则 <strong>systemd-tmpfiles</strong> 将会自动根据&quot; 权限&quot;,&quot;属主&quot;,&quot;属组&quot;字段添加所需的基本权限。 如果没有明确指定访问控制列表或者访问控制列表已经存在， 那么将会叠加上掩码。 不追踪软连接。</p></li><li><p><code>A</code>, <code>A+</code></p><p>若指定的文件或目录存在，则递归的设置访问控制列表(POSIX ACL)。 其他与 <code>a</code>/<code>a+</code> 完全相同。 不追踪软连接。</p></li>",3),H=l(`<p>使用了感叹号(!)标记的行，仅可在系统启动过程中执行，而不能用于运行中的系统(会破坏系统的正常运行)。未使用感叹号(!) 标记的行，可以在任意时间安全的执行(例如升级软件包的时候)。<strong>systemd-tmpfiles</strong> 仅在明确使用了<code>--boot</code> 选项的时候才会执行使用了感叹号(!)标记的行。</p><p>例如：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># 确保默认创建此目录
d /tmp/.X11-unix 1777 root root 10d

# 仅在系统启动时清理X11的锁文件(但在运行时禁止删除这些文件)
r! /tmp/.X[0-9]*-lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本例中的第二行仅在明确使用了 <code>--boot</code> 选项的时候才会执行，因为它会破坏正在运行中的系统。但是第一行则无此限制，可以在任何时候执行都不会对系统造成损害。</p><p>如果使用了减号(-)，那么当该行创建(仅限于创建)操作失败时，将不会导致 <strong>systemd-tmpfiles</strong>返回错误代码(也就是仍然执行成功)。</p><p>例如：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># 修改 sysfs ，但是兼容容器环境(因为在容器中 /proc 是只读的)
w- /proc/sys/vm/swappiness - - - - 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，对于所有能够创建文件的行类型(也就是 <code>f</code>/<code>F</code>,<code>d</code>/<code>D</code>/<code>v</code>/<code>q</code>/<code>Q</code>,<code>p</code>, <code>L</code>, <code>c</code>/<code>b</code>, <code>C</code>)，前缀目录将会被自动创建( 若需要)，并且权限为 0755 、属主为 root 。如果想要使用不同的权限或属主，那么必须添加或使用相应的 <code>d</code> 行。</p><h3 id="路径-path" tabindex="-1"><a class="header-anchor" href="#路径-path"><span>路径(Path)</span></a></h3><p>&quot;路径&quot;字段是指文件系统路径，并且支持使用替换符(详见后文)。替换之后的最终路径必须是绝对路径。</p><h3 id="权限-mode" tabindex="-1"><a class="header-anchor" href="#权限-mode"><span>权限(Mode)</span></a></h3><p>&quot;权限&quot;字段表示设置文件或目录的权限，如果省略或设为 &quot;<code>-</code>&quot;则表示使用默认权限，也就是：对于目录使用&quot;0755&quot;、对于文件使用&quot;0644&quot; ，但对于 <code>z</code>, <code>Z</code> 表示不修改现有的权限。此字段对于<code>x</code>, <code>r</code>,<code>R</code>, <code>L</code>, <code>t</code>,<code>a</code> 没有意义。</p><p>可选前缀 &quot;<code>~</code>&quot; 的含义是掩码，也就是将此字段当作权限掩码来使用。换句话说，就是将此字段设置的值与现有的权限做&quot;位与&quot; 运算。举例来说，假设原有文件的权限是&quot;0765&quot;，此字段的值是&quot;~1550&quot;，那么文件的最终权限将是&quot;0540&quot;。如果省略了 sticky/SUID/SGID 位，那么对于文件来说相当于全部清除，而对于目录来说则相当于保持不变。例如&quot;<sub>550&quot;，对于文件来说相当于&quot;</sub>0550&quot; ，而对于目录来说则相当于&quot;~7550&quot;。此特性在实践中仅对 <code>Z</code> 有实际价值。</p><h3 id="属主-属组-user-group" tabindex="-1"><a class="header-anchor" href="#属主-属组-user-group"><span>属主,属组(User,Group)</span></a></h3><p>&quot;属主&quot;与&quot;属组&quot;字段分别表示文件或目录的所属用户与所属用户组。可以设为数字形式的 UID/GID 值，也可以设为字符串形式的用户名称/组名称。如果省略或者设为 &quot;<code>-</code>&quot; 则表示使用调用 <strong>systemd-tmpfiles</strong> 命令的用户及其属组。但对于 <code>z</code> 与 <code>Z</code>来说，省略或者设为 &quot;<code>-</code>&quot; 则表示不修改现有的&quot;属主&quot;与&quot;属组&quot; 。此字段对于 <code>x</code>, <code>r</code>, <code>R</code>,<code>L</code>, <code>t</code>, <code>a</code> 没有意义。</p><h3 id="寿命-age" tabindex="-1"><a class="header-anchor" href="#寿命-age"><span>寿命(Age)</span></a></h3><p>&quot;寿命&quot;字段用于判定在清理过期文件或子目录时应该删除哪些，也就是决定了文件或子目录的&quot;寿命&quot;。如果文件或子目录的最后使用时间( 详见后文)与当前系统时间之差大于&quot;寿命&quot; 字段的值，那么这些文件或子目录将被删除。此字段的值是一个时间长度，可以使用下面的时间单位后缀：<code>us</code>(微秒),<code>ms</code>(毫秒),<code>s</code>( 秒),<code>m</code>(分),<code>h</code>(时),<code>d</code>(天),<code>w</code>(周)。</p><p>可以同时使用多个时间单位，例如&quot;5m10s&quot;表示 5 分 10 秒(也就是 310 秒)。如果省略了时间单位，那么表示使用默认单位&quot;秒&quot;。</p><p>如果将此字段设为数字&quot;0&quot;，那么表示在每次清理时都无条件的删除所有文件或子目录。</p><p>此字段仅对<code>d</code>, <code>D</code>, <code>e</code>,<code>v</code>, <code>q</code>,<code>Q</code>, <code>C</code>, <code>x</code>,<code>X</code> 有意义。如果省略此字段或将其设为&quot;<code>-</code>&quot; ，那么表示不进行任何清理。</p><p>如果此字段的值以&quot;<code>~</code>&quot; 开头，那么表示在每次清理时都无条件的保留指定目录直属的文件与子目录，也就是仅清理直属子目录下的内容。</p><p>&quot;寿命&quot;是根据对象的最后修改时间(mtime)、最后访问时间(atime)、最后状态变化时间(ctime)(目录除外) 计算的。如果三者(或两者) 中最晚的时间与当前系统时间之差大于&quot;寿命&quot;字段的值，那么该对象就会被删除，否则该对象将会被保留。</p><h3 id="参数-argument" tabindex="-1"><a class="header-anchor" href="#参数-argument"><span>参数(Argument)</span></a></h3><p>&quot;参数&quot;字段对不同的&quot;类型&quot;有不同的作用：对于 <code>L</code> 来说，用于指定软连接的目标路径。对于 <code>c</code>, <code>b</code> 来说，用于以&quot;主设备号:次设备号&quot; 的格式设定设备节点的主/次设备号(十进制整数)，例如 &quot;<code>1:3</code>&quot; 。对于 <code>f</code>, <code>F</code>, <code>w</code> 来说，用于设置一个写入文件的短字符串( 实际写入时会在末尾附加一个换行符)。对于 <code>C</code> 来说，用于指定源文件或者源目录。对于 <code>t</code>, <code>T</code> 来说，用于指定将要设置的扩展属性。对于 <code>a</code>, <code>A</code> 来说，用于指定将要设置的 ACL 属性。对于 <code>h</code>, <code>H</code> 来说，用于指定将要设置的文件属性。对于其他类型无意义，将被忽略。</p><p>可以在该字段中使用替换符(见下文)。</p><h2 id="替换符" tabindex="-1"><a class="header-anchor" href="#替换符"><span>替换符</span></a></h2><p>可以在&quot;路径&quot;(Path)与&quot;参数&quot;(Argument)字段中使用替换符。不可识别的替换符将会被视为配置错误。可识别的替换符如下：</p><p><strong>表 1. 可识别的替换符</strong></p>`,28),z=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"替换符"),e("th",{style:{"text-align":"left"}},"含义")])],-1),V=e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%b"),t('"')],-1),K={style:{"text-align":"left"}},J={href:"http://man7.org/linux/man-pages/man4/random.4.html",target:"_blank",rel:"noopener noreferrer"},W=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%C"),t('"')]),e("td",{style:{"text-align":"left"}},[t("缓存目录。对于 "),e("code",null,"--user"),t(" 模式来说是 "),e("code",null,"$XDG_CACHE_HOME"),t(" ，否则是 "),e("code",null,"/var/cache")])],-1),Y=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%h"),t('"')]),e("td",{style:{"text-align":"left"}},[t('用户的家目录。运行命令的用户的家目录，对于系统实例则是 "'),e("code",null,"/root"),t('"')])],-1),ee=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%H"),t('"')]),e("td",{style:{"text-align":"left"}},"系统的主机名(hostname)")],-1),te=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%L"),t('"')]),e("td",{style:{"text-align":"left"}},[t("日志目录。对于 "),e("code",null,"--user"),t(" 模式来说是 "),e("code",null,"$XDG_CONFIG_HOME``/log"),t(" ，否则是 "),e("code",null,"/var/log")])],-1),oe=e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%m"),t('"')],-1),ne={style:{"text-align":"left"}},le={href:"https://www.wenjiangs.com/doc/systemd-machine-id",target:"_blank",rel:"noopener noreferrer"},se=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%S"),t('"')]),e("td",{style:{"text-align":"left"}},[t("状态目录。对于 "),e("code",null,"--user"),t(" 模式来说是 "),e("code",null,"$XDG_CONFIG_HOME"),t(" ，否则是 "),e("code",null,"/var/lib")])],-1),de=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%t"),t('"')]),e("td",{style:{"text-align":"left"}},[t("运行时目录。对于 "),e("code",null,"--user"),t(" 模式来说是 "),e("code",null,"$XDG_RUNTIME_DIR"),t(" ，否则是 "),e("code",null,"/run")])],-1),ae=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%T"),t('"')]),e("td",{style:{"text-align":"left"}},[t("临时文件目录。也就是 "),e("code",null,"/tmp"),t(' 或 "'),e("code",null,"$TMPDIR"),t('", "'),e("code",null,"$TEMP"),t('", "'),e("code",null,"$TMP"),t('" 之一(若已设置)')])],-1),ce=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%g"),t('"')]),e("td",{style:{"text-align":"left"}},[t('运行命令的用户组名称。对于系统实例则是 "'),e("code",null,"/root"),t('"')])],-1),ie=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%G"),t('"')]),e("td",{style:{"text-align":"left"}},[t("运行命令的用户组数字 GID 。对于系统实例则是 "),e("code",null,"0")])],-1),re=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%u"),t('"')]),e("td",{style:{"text-align":"left"}},[t('运行命令的用户名称。对于系统实例则是 "'),e("code",null,"/root"),t('"')])],-1),pe=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%U"),t('"')]),e("td",{style:{"text-align":"left"}},[t("运行命令的用户数字 UID 。对于系统实例则是 "),e("code",null,"0")])],-1),ue=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%v"),t('"')]),e("td",{style:{"text-align":"left"}},[t("内核版本("),e("strong",null,"uname -r"),t(" 的输出)")])],-1),me=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%V"),t('"')]),e("td",{style:{"text-align":"left"}},[t("存放大体积临时文件以及持久临时文件的目录。也就是 "),e("code",null,"/var/tmp"),t(' 或 "'),e("code",null,"$TMPDIR"),t('", "'),e("code",null,"$TEMP"),t('", "'),e("code",null,"$TMP"),t('" 之一(若已设置)')])],-1),he=e("tr",null,[e("td",{style:{"text-align":"left"}},[t('"'),e("code",null,"%%"),t('"')]),e("td",{style:{"text-align":"left"}},'百分号自身(%)。使用"%%"表示一个真正的"%"字符。')],-1),ve=e("h2",{id:"例子",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#例子"},[e("span",null,"例子")])],-1),ge=e("p",null,[e("strong",null,"例 1. 按照指定的 User/Group 与权限创建目录")],-1),fe={href:"https://linux.die.net/man/1/screen",target:"_blank",rel:"noopener noreferrer"},be=l(`<div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># /usr/lib/tmpfiles.d/screen.conf
d /run/screens  1777 root screen 10d
d /run/uscreens 0755 root screen 10d12h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/run/screens</code> 中超过 10 天的内容将被清理。<code>/run/uscreens</code> 中超过 10.5 天的内容将被清理。</p><p><strong>例 2. 创建一个带有 SMACK 属性的目录</strong></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>D /run/cups - - - -
t /run/cups - - - - security.SMACK64=printing user.attr-with-spaces=&quot;foo bar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该目录的属主将是&quot;root&quot;并且会被赋予默认权限。目录中的内容将不会被定期清理，但可使用<strong>systemd-tmpfiles --remove</strong> 命令清除。</p><p><strong>例 3. 创建一个不会被定期清理的目录</strong></p>`,6),_e={href:"https://linux.die.net/man/1/abrt",target:"_blank",rel:"noopener noreferrer"},qe=e("code",null,"/var/tmp",-1),ye=l(`<div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># /usr/lib/tmpfiles.d/tmp.conf
d /var/tmp 1777 root root 30d
# /usr/lib/tmpfiles.d/abrt.conf
d /var/tmp/abrt 0755 abrt abrt -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例 4. 启用系统启动过程中的清理，以及基于时间的清理</strong></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># /usr/lib/tmpfiles.d/dnf.conf
r! /var/cache/dnf/*/*/download_lock.pid
r! /var/cache/dnf/*/*/metadata_lock.pid
r! /var/lib/dnf/rpmdb_lock.pid
e  /var/cache/dnf/ - - - 30d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统启动过程中将会清理 lock 文件。 <code>/var/cache/dnf/</code> 目录中 闲置超过 30 天的内容将会被删除。</p><p><strong>例 5. 在启动时清空缓存目录</strong></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># /usr/lib/tmpfiles.d/krb5rcache.conf
e! /var/cache/krb5rcache - - - 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在启动时清空 <code>/var/cache/krb5rcache/</code>下的所有内容。即使此目录不存在也不会创建它。</p><h2 id="run-与-var-run" tabindex="-1"><a class="header-anchor" href="#run-与-var-run"><span><code>/run/</code> 与 <code>/var/run/</code></span></a></h2><p><code>/var/run/</code> 已经被反对使用，它实际上只是一个指向 <code>/run/</code> 的软连接。<strong>systemd-tmpfiles</strong> 将会对使用<code>/var/run/</code> 发出警告。</p><h2 id="在-linux-中自动清除未使用的临时文件" tabindex="-1"><a class="header-anchor" href="#在-linux-中自动清除未使用的临时文件"><span>在 Linux 中自动清除未使用的临时文件</span></a></h2><p>在 Red Hat Enterprise Linux 7 和更高版本中，包含了一个称为 systemd-tmpfiles 的新工具，该工具提供了一种结构化且可配置的方法来管理临时目录和文件。</p><p>可以使用以下命令检查启动服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl status  systemd-tmpfiles-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 systemd-tmpfiles-setup 服务单元时，它将运行 systemd-tmpfiles –create –remove 命令，该命令从以下位置检查配置文件：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>/usr/lib/tmpfiles.d/.conf
/run/tmpfiles.d/.conf
/etc/tmpfiles.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果上述配置文件中有标记为删除的文件和目录，则会将其删除，对于标记为创建的文件和目录，必要时使用正确的权限创建它们。</p><h2 id="使用-systemd-计时器清除临时文件" tabindex="-1"><a class="header-anchor" href="#使用-systemd-计时器清除临时文件"><span><strong>使用 Systemd 计时器清除临时文件</strong></span></a></h2><p>一个名为 systemd-tmpfiles-clean.timer 的 systemd 计时器单元会按固定的时间间隔触发 systemd-tmpfiles-clean.service，然后执行 systemd-tmpfiles -clean 命令。</p><p>将在[Timer]选项中指定启动服务的频率，请参见下面的示例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /usr/lib/systemd/system/systemd-tmpfiles-clean.timer

<span class="token comment">#  This file is part of systemd.</span>
<span class="token comment">#  systemd is free software; you can redistribute it and/or modify it</span>
<span class="token comment">#  under the terms of the GNU Lesser General Public License as published by</span>
<span class="token comment">#  the Free Software Foundation; either version 2.1 of the License, or</span>
<span class="token comment">#  (at your option) any later version.</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Daily Cleanup of Temporary Directories
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>man:tmpfiles.d<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> man:systemd-tmpfiles<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>Timer<span class="token punctuation">]</span>
<span class="token assign-left variable">OnBootSec</span><span class="token operator">=</span>15min
<span class="token assign-left variable">OnUnitActiveSec</span><span class="token operator">=</span>1d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，系统启动后 15 分钟将触发 systemd-tmpfiles-clean.service，其他任何触发都在上次服务触发后 24 小时发生，可以根据自己的情况调整值。</p><p>如果进行更改，请确保重新加载服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload

<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> systemd-tmpfiles-clean.timer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动清理临时文件" tabindex="-1"><a class="header-anchor" href="#手动清理临时文件"><span><strong>手动清理临时文件</strong></span></a></h2><p>让我们配置 systemd-tmpfiles 来清理/mytmp 目录，这将确保目录不包含最近 3 天未使用过的文件。</p><p>可以复制示例配置/usr/lib/tmpfiles.d/tmp.conf 文件并进行更新。</p><p>如下编辑文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/tmpfiles.d/mytmp.conf

See tmpfiles.d<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">for</span> details
<span class="token comment"># Clear tmp directories separately, to make them easier to override</span>
q /mytmp <span class="token number">1777</span> root root 3d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要确保拥有正确所有权的直接性，请创建如下配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>d /run/mytmp 0700 root root 60s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>必须清除该目录中最近 60 秒钟内未使用的任何文件。</p><p>创建文件后，使用以下命令确保文件包含适当的配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemd-tmpfiles <span class="token parameter variable">--create</span> /etc/tmpfiles.d/mytmp.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在输出中看不到任何错误，则表明配置设置正确，可以随时使用以下命令调用手动清理：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemd-tmpfiles <span class="token parameter variable">--clean</span> /etc/tmpfiles.d/mytmp.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35);function xe(ke,De){const o=d("ExternalLinkIcon");return a(),c("div",null,[r,e("p",null,[p,t(" 根据这些配置，在系统启动过程中创建易变的临时文件与目录，并在系统运行过程中进行周期性的清理。参见"),e("a",u,[t("systemd-tmpfiles(5)"),n(o)]),t(" 手册以了解 "),m,t(","),h,t(" 等相关服务。")]),e("p",null,[t("守护进程经常需要在 "),v,t(" 目录下拥有专属的运行时目录，以存放通信套接字或管道之类的文件。对于这种需求，如果不需要 "),g,t(" 提供的强大灵活性，那么最好直接在单元文件中使用"),f,t(" 选项来实现( 详见"),e("a",b,[t("systemd.exec(5)"),n(o)]),t(" 手册) 。这样做的好处是简单明了，所有与此单元相关的配置都集中在同一个地方(单元文件) ，并且运行时目录的生命周期与其所属的服务单元的生命周期一致。类似的，应该分别使用 "),_,t(","),q,t(", "),y,t(","),x,t(" 选项来创建位于"),k,t(", "),D,t(", "),C,t(","),T,t(" 中的专属子目录。应该仅将 "),A,t(" 用于管理那些生命周期独立于服务单元或需要复杂配置的文件与目录。")]),L,e("ul",null,[S,e("li",null,[w,e("p",null,[t("与 "),I,t(" 一样，创建一个子卷或目录， 但不同之处在于，将创建的子卷分配给与父卷相同的 higher-level 配额组(quota group)。 这样可以确保作用于父卷的 higher-level 配额组可以包含此处创建的子卷。 在非 Btrfs 文件系统上与 "),E,t(" 等价。只要子卷已存在，无论该子卷是否已经分配有配额组(quota group)， 都不会修改任何现有的配额层次关系。参见下面的 "),G,t(" 以及 "),e("a",M,[t("btrfs-qgroup(8)"),n(o)]),t(" 手册，以了解更多关于 btrfs 的配额组(quota group)的概念。")])]),U,e("li",null,[P,e("p",null,[t('若指定的文件或目录存在，则仅调整其自身的属性。 可以在"路径"字段中使用 shell 风格的通配符。"参数" 字段的格式是 '),R,t(" ， 具体解释如下： "),N,t(" 前缀表示添加属性(这是默认值)； "),$,t(" 前缀表示去除属性； "),B,t(' 前缀表示设置属性(但对 "'),X,t('" 范围之外的其他属性没有影响)； 而后缀字母 "'),O,t('" 则用于表示各种属性， 其含义与 '),e("a",Q,[t("chattr(1)"),n(o)]),t(' 手册里的解释一致。注意， 将"参数" 字段设为一个单独的 '),Z,t('(无后继字母) 表示重置所有 "'),F,t('" 代表的属性。 不追踪软连接。')])]),j]),H,e("table",null,[z,e("tbody",null,[e("tr",null,[V,e("td",K,[t('系统的"Boot ID"字符串。参见 '),e("a",J,[t("random(4)"),n(o)]),t(" 手册。")])]),W,Y,ee,te,e("tr",null,[oe,e("td",ne,[t('系统的"Machine ID"字符串。参见 '),e("a",le,[t("machine-id(5)"),n(o)]),t(" 手册。")])]),se,de,ae,ce,ie,re,pe,ue,me,he])]),ve,ge,e("p",null,[e("a",fe,[t("screen(1)"),n(o)]),t("需要在系统启动时按照指定的属主/属组/权限创建两个目录")]),be,e("p",null,[e("a",_e,[t("abrt(1)"),n(o)]),t("需要在系统启动时按照指定的属主/属组/权限创建一个目录，并且禁止清理"),qe,t(" 目录")]),ye])}const Ae=s(i,[["render",xe],["__file","tmpfiles.d中文手册.html.vue"]]),Le=JSON.parse('{"path":"/linux/tmpfiles.d%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C.html","title":"tmpfiles.d 中文手册","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"tmpfiles.d 中文手册","excerpt":null,"description":"tmpfiles.d 中文手册 名称 tmpfiles.d — 配置如何创建、删除、清理易变文件与临时文件 大纲 描述 tmpfiles.d 配置文件定义了一套临时文件管理机制：创建 文件、目录、管道、设备节点，调整 访问模式、所有者、属性、限额、内容， 删除 过期文件。主要用于管理易变的临时文件与目录，例如 /run,/tmp, /var/tmp,/...","date":"2022-10-24T00:00:00.000Z","category":"Linux","tag":["Linux","tmp"],"article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/tmpfiles.d%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"tmpfiles.d 中文手册"}],["meta",{"property":"og:description","content":"tmpfiles.d 中文手册 名称 tmpfiles.d — 配置如何创建、删除、清理易变文件与临时文件 大纲 描述 tmpfiles.d 配置文件定义了一套临时文件管理机制：创建 文件、目录、管道、设备节点，调整 访问模式、所有者、属性、限额、内容， 删除 过期文件。主要用于管理易变的临时文件与目录，例如 /run,/tmp, /var/tmp,/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"tmp"}],["meta",{"property":"article:published_time","content":"2022-10-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tmpfiles.d 中文手册\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"名称","slug":"名称","link":"#名称","children":[]},{"level":2,"title":"大纲","slug":"大纲","link":"#大纲","children":[]},{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"配置目录及其优先级","slug":"配置目录及其优先级","link":"#配置目录及其优先级","children":[]},{"level":2,"title":"配置文件格式","slug":"配置文件格式","link":"#配置文件格式","children":[{"level":3,"title":"类型(Type)","slug":"类型-type","link":"#类型-type","children":[]},{"level":3,"title":"路径(Path)","slug":"路径-path","link":"#路径-path","children":[]},{"level":3,"title":"权限(Mode)","slug":"权限-mode","link":"#权限-mode","children":[]},{"level":3,"title":"属主,属组(User,Group)","slug":"属主-属组-user-group","link":"#属主-属组-user-group","children":[]},{"level":3,"title":"寿命(Age)","slug":"寿命-age","link":"#寿命-age","children":[]},{"level":3,"title":"参数(Argument)","slug":"参数-argument","link":"#参数-argument","children":[]}]},{"level":2,"title":"替换符","slug":"替换符","link":"#替换符","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"/run/ 与 /var/run/","slug":"run-与-var-run","link":"#run-与-var-run","children":[]},{"level":2,"title":"在 Linux 中自动清除未使用的临时文件","slug":"在-linux-中自动清除未使用的临时文件","link":"#在-linux-中自动清除未使用的临时文件","children":[]},{"level":2,"title":"使用 Systemd 计时器清除临时文件","slug":"使用-systemd-计时器清除临时文件","link":"#使用-systemd-计时器清除临时文件","children":[]},{"level":2,"title":"手动清理临时文件","slug":"手动清理临时文件","link":"#手动清理临时文件","children":[]}],"git":{"createdTime":1666624190000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":21.66,"words":6499},"filePathRelative":"linux/tmpfiles.d中文手册.md","localizedDate":"2022年10月24日","autoDesc":true}');export{Ae as comp,Le as data};
