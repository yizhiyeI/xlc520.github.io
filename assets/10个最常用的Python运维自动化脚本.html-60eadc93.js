import{_ as n,W as s,X as a,$ as p}from"./framework-06fee4ab.js";const t={},e=p(`<h1 id="_10个最常用的python运维自动化脚本" tabindex="-1"><a class="header-anchor" href="#_10个最常用的python运维自动化脚本" aria-hidden="true">#</a> 10个最常用的Python运维自动化脚本</h1><p>**1、自动备份脚本：**备份指定目录或文件并定期执行自动备份。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> shutil
<span class="token keyword">import</span> os
<span class="token keyword">import</span> datetime
 
source <span class="token operator">=</span> <span class="token string">&#39;/home/user/dir/&#39;</span>
backup <span class="token operator">=</span> <span class="token string">&#39;/home/user/backup/&#39;</span>
 
now <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token string">&#39;backup_&#39;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&#39;%Y-%m-%d_%H-%M-%S&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.zip&#39;</span>
 
shutil<span class="token punctuation">.</span>make_archive<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>backup<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;zip&#39;</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**2、监控系统性能脚本：**监控CPU，内存，磁盘使用率等系统性能指标并发送邮件报警。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> psutil
<span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
 
<span class="token keyword">def</span> <span class="token function">send_mail</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token string">&#39;smtp.gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token number">587</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>starttls<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>
    message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span>body<span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;System Performance Alert&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;youremail@gmail.com&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;admin@example.com&#39;</span>
    server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;admin@example.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    cpu_percent <span class="token operator">=</span> psutil<span class="token punctuation">.</span>cpu_percent<span class="token punctuation">(</span><span class="token punctuation">)</span>
    memory_percent <span class="token operator">=</span> psutil<span class="token punctuation">.</span>virtual_memory<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>percent
    disk_percent <span class="token operator">=</span> psutil<span class="token punctuation">.</span>disk_usage<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>percent
 
    <span class="token keyword">if</span> cpu_percent <span class="token operator">&gt;</span> <span class="token number">80</span> <span class="token keyword">or</span> memory_percent <span class="token operator">&gt;</span> <span class="token number">80</span> <span class="token keyword">or</span> disk_percent <span class="token operator">&gt;</span> <span class="token number">80</span><span class="token punctuation">:</span>
        body <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;CPU: </span><span class="token interpolation"><span class="token punctuation">{</span>cpu_percent<span class="token punctuation">}</span></span><span class="token string">%\\nMemory: </span><span class="token interpolation"><span class="token punctuation">{</span>memory_percent<span class="token punctuation">}</span></span><span class="token string">%\\nDisk: </span><span class="token interpolation"><span class="token punctuation">{</span>disk_percent<span class="token punctuation">}</span></span><span class="token string">%&#39;</span></span>
        send_mail<span class="token punctuation">(</span>body<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**3、自动部署脚本：**从代码仓库中获取最新的代码并自动部署到服务器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
 
subprocess<span class="token punctuation">.</span>check_output<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;git&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pull&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
subprocess<span class="token punctuation">.</span>check_output<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;npm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;install&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
subprocess<span class="token punctuation">.</span>check_output<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;npm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;run&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
subprocess<span class="token punctuation">.</span>check_output<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;systemctl&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;restart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myapp&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**4、监控日志文件脚本：**监控指定的日志文件并在关键字出现时发送邮件报警。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> tailer
<span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
 
<span class="token keyword">def</span> <span class="token function">send_mail</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token string">&#39;smtp.gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token number">587</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>starttls<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>
    message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span>body<span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Log Alert&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;youremail@gmail.com&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;admin@example.com&#39;</span>
    server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;admin@example.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">for</span> line <span class="token keyword">in</span> tailer<span class="token punctuation">.</span>follow<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;/var/log/app.log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token string">&#39;Error&#39;</span> <span class="token keyword">in</span> line<span class="token punctuation">:</span>
        send_mail<span class="token punctuation">(</span>line<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**5、自动化部署 Docker 容器脚本：**自动部署 Docker 容器并启动应用程序。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> docker
 
client <span class="token operator">=</span> docker<span class="token punctuation">.</span>from_env<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
container <span class="token operator">=</span> client<span class="token punctuation">.</span>containers<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    <span class="token string">&#39;nginx&#39;</span><span class="token punctuation">,</span>
    detach<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    ports<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;80/tcp&#39;</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    volumes<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;/home/user/app&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;bind&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;/usr/share/nginx/html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mode&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;ro&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**6、监控网络服务脚本：**检查指定端口上的网络服务是否正在运行，并在出现问题时发送邮件报警。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
 
<span class="token keyword">def</span> <span class="token function">send_mail</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token string">&#39;smtp.gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token number">587</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>starttls<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>
    message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span>body<span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Service Alert&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;youremail@gmail.com&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;admin@example.com&#39;</span>
    server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;admin@example.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    sock <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    result <span class="token operator">=</span> sock<span class="token punctuation">.</span>connect_ex<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
    <span class="token keyword">if</span> result <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        send_mail<span class="token punctuation">(</span><span class="token string">&#39;Service is down&#39;</span><span class="token punctuation">)</span>
 
    sock<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**7、自动化邮件发送脚本：**从Excel或CSV文件中读取收件人列表，并自动发送电子邮件。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
 
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;recipients.csv&#39;</span><span class="token punctuation">)</span>
 
<span class="token keyword">for</span> index<span class="token punctuation">,</span> row <span class="token keyword">in</span> data<span class="token punctuation">.</span>iterrows<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token string">&#39;smtp.gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token number">587</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>starttls<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>
 
    message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span><span class="token string">&#39;This is a test email&#39;</span><span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Test Email&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;youremail@gmail.com&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">]</span>
 
    server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>row<span class="token punctuation">[</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
    server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**8、自动化服务器监控脚本：**使用psutil模块监控服务器的各种指标，如CPU、内存、磁盘使用情况</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> psutil
 
cpu_percent <span class="token operator">=</span> psutil<span class="token punctuation">.</span>cpu_percent<span class="token punctuation">(</span><span class="token punctuation">)</span>
memory_percent <span class="token operator">=</span> psutil<span class="token punctuation">.</span>virtual_memory<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>percent
disk_percent <span class="token operator">=</span> psutil<span class="token punctuation">.</span>disk_usage<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>percent
 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;CPU: </span><span class="token interpolation"><span class="token punctuation">{</span>cpu_percent<span class="token punctuation">}</span></span><span class="token string">%&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Memory: </span><span class="token interpolation"><span class="token punctuation">{</span>memory_percent<span class="token punctuation">}</span></span><span class="token string">%&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Disk: </span><span class="token interpolation"><span class="token punctuation">{</span>disk_percent<span class="token punctuation">}</span></span><span class="token string">%&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**9、自动化SSH登录脚本：**使用paramiko模块自动化SSH登录远程服务器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> paramiko
 
ssh <span class="token operator">=</span> paramiko<span class="token punctuation">.</span>SSHClient<span class="token punctuation">(</span><span class="token punctuation">)</span>
ssh<span class="token punctuation">.</span>set_missing_host_key_policy<span class="token punctuation">(</span>paramiko<span class="token punctuation">.</span>AutoAddPolicy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ssh<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;server.example.com&#39;</span><span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>
 
stdin<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr <span class="token operator">=</span> ssh<span class="token punctuation">.</span>exec_command<span class="token punctuation">(</span><span class="token string">&#39;ls -l&#39;</span><span class="token punctuation">)</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
ssh<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**10、自动化日志监控脚本：**监控日志文件中的关键词，并在匹配时发送电子邮件警报。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">import</span> re
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
 
log_file <span class="token operator">=</span> <span class="token string">&#39;/path/to/logfile&#39;</span>
keywords <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">]</span>
 
<span class="token keyword">def</span> <span class="token function">send_mail</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token string">&#39;smtp.gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token number">587</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>starttls<span class="token punctuation">(</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>
    message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span>body<span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Log Alert&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;youremail@gmail.com&#39;</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;admin@example.com&#39;</span>
    server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span><span class="token string">&#39;youremail@gmail.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;admin@example.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>log_file<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">any</span><span class="token punctuation">(</span>keyword <span class="token keyword">in</span> line <span class="token keyword">for</span> keyword <span class="token keyword">in</span> keywords<span class="token punctuation">)</span><span class="token punctuation">:</span>
            send_mail<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Log line matched: </span><span class="token interpolation"><span class="token punctuation">{</span>line<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","10个最常用的Python运维自动化脚本.html.vue"]]);export{r as default};
