import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as r,a as c}from"./app-aq8PVJpR.js";const d={},t=c(`<h1 id="docker-镜像库国内加速的几种方法" tabindex="-1"><a class="header-anchor" href="#docker-镜像库国内加速的几种方法"><span>Docker 镜像库国内加速的几种方法</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>在国内，拉取 Docker 镜像速度慢/时不时断线/无账号导致限流等，比较痛苦😣. 这里提供加速/优化的几种方法。</p><p>梳理一下，会碰到以下情况：</p><p>1.国内下载速度慢/时不时断线：是因为网络被限制了。2.没有公共镜像库账号导致限流：是因为 Docker Hub 等主流镜像库，近年来纷纷开始对未登录的匿名用户进行限流，限制拉取的速度，以及一定时间内拉取的镜像数量。</p><p>为了解决以上问题，有这么几种方法：</p><p>针对<strong>国内下载速度慢/时不时断线</strong>, 可选方法如下：</p><p>1.配置国内可用/速度尚可的 Docker Registry Mirrors2.自建 Docker Registry Mirror/Proxy, 并配置为 Mirror3.Docker Daemon 配置 <code>proxies</code></p><p>针对<strong>没有公共镜像库账号导致限流</strong>, 可选方法如下：</p><p>1.注册各个镜像库账号并 <code>docker login</code> 登录</p><p>具体方案如下。</p><h2 id="具体方案" tabindex="-1"><a class="header-anchor" href="#具体方案"><span>具体方案</span></a></h2><blockquote><p>📝<strong>Notes</strong>:</p><p>这里以 Docker 举例说明。 Containerd/Podman/cri-o 等请举一反三。</p></blockquote><p>1.配置国内可用/速度尚可的 Docker Registry Mirrors1.阿里云 Docker 加速：类似 <code>xxxxxx.mirror.aliyuncs.com</code> 的个人专属加速地址；2.DockerProxy 代理加速：<code>dockerproxy.com</code>3.百度云 Mirror: <code>mirror.baidubce.com</code>4....2.自建 Docker Registry Mirror/Proxy, 并配置为 Mirror1.这里使用 Cloudflare Worker - cloudflare-docker-proxy[1] 搭建3.Docker Daemon 配置 <code>proxies</code>, 具体包括：<code>http-proxy</code> <code>https-proxy</code> <code>no-proxy</code>4.注册各个镜像库账号并 <code>docker login</code> 登录</p><h2 id="方案实施细节" tabindex="-1"><a class="header-anchor" href="#方案实施细节"><span>方案实施细节</span></a></h2><h3 id="配置国内可用的-docker-registry-mirrors" tabindex="-1"><a class="header-anchor" href="#配置国内可用的-docker-registry-mirrors"><span>配置国内可用的 Docker Registry Mirrors</span></a></h3><p>随着时间的推移，国内可用的 Docker Registry Mirrors 会持续发生变化，因此，需要实时根据可用情况调整 Docker Registry Mirrors 配置。</p><p>截止 2023/9/5, 可用 Mirrors 列表如下：</p><p>1.阿里云 Docker 加速：类似 <code>xxxxxx.mirror.aliyuncs.com</code> 的个人专属加速地址；2.DockerProxy 代理加速：<code>dockerproxy.com</code>3.百度云 Mirror: <code>mirror.baidubce.com</code>4.DaoCloud: <code>docker.m.daocloud.io</code>5.南京大学：<code>docker.nju.edu.cn</code>6.上海交大：<code>docker.mirrors.sjtug.sjtu.edu.cn</code></p><h4 id="测试国内-docker-registry-可用性" tabindex="-1"><a class="header-anchor" href="#测试国内-docker-registry-可用性"><span>测试国内 Docker Registry 可用性</span></a></h4><p>可以自行测试验证，手动测试方法是拉取镜像，这里以测试 <code>dockerproxy.com</code> 为例：</p><ul><li></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker pull dockerproxy.com/library/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在国内拉取成功则证明可用。</p><p>也可以直接查看 GitHub 仓库：docker-practice/docker-registry-cn-mirror-test[2] 的 Github Action 执行结果。如最近一次的执行结果为：</p><p><img src="https://static.xlc520.tk/blogImage/640-1697803848284-0.png" alt="图片" loading="lazy">docker-registry-cn-mirror-test result</p><h4 id="阿里云-docker-加速服务申请" tabindex="-1"><a class="header-anchor" href="#阿里云-docker-加速服务申请"><span>阿里云 Docker 加速服务申请</span></a></h4><p>阿里云加速器（点击管理控制台 -&gt; 登录账号 -&gt; 右侧镜像工具 -&gt; 镜像加速器 -&gt; 复制加速器地址）[3]</p><p>截图如下：</p><p><img src="https://static.xlc520.tk/blogImage/640-1698065215359-39.png" alt="图片" loading="lazy">阿里云镜像加速器</p><h4 id="其他几个加速域名" tabindex="-1"><a class="header-anchor" href="#其他几个加速域名"><span>其他几个加速域名</span></a></h4><p>1.DockerProxy 代理加速：<code>dockerproxy.com</code></p><p>2.百度云 Mirror: <code>mirror.baidubce.com</code></p><p>3.Daocloud: <code>docker.m.daocloud.io</code></p><p>4.南京大学：<code>docker.nju.edu.cn</code></p><p>5.上海交大：<code>docker.mirrors.sjtug.sjtu.edu.cn</code></p><p>都是固定域名，直接配置即可。</p><h4 id="已经不可用的-docker-加速域名" tabindex="-1"><a class="header-anchor" href="#已经不可用的-docker-加速域名"><span>已经不可用的 Docker 加速域名</span></a></h4><p>以下 Docker 加速域名，已经因为各种原因不可用或只允许对应云供应商网络使用，包括：</p><p>•163: <code>hub-mirror.c.163.com</code>•USTC: <code>docker.mirrors.ustc.edu.cn</code>•腾讯云：<code>mirror.ccs.tencentyun.com</code>•Azure 中国: <code>dockerhub.azk8s.cn</code>•七牛云：<code>reg-mirror.qiniu.com</code>•Docker CN: <code>registry.docker-cn.com</code></p><h4 id="docker-registry-mirror-配置" tabindex="-1"><a class="header-anchor" href="#docker-registry-mirror-配置"><span>Docker Registry Mirror 配置</span></a></h4><p>创建或修改 <code>/etc/docker/daemon.json</code>:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo mkdir -p /etc/dockersudo tee /etc/docker/daemon.json &lt;&lt;-EOF{    
&quot;registry-mirrors&quot;: [
    &quot;https://&lt;changme&gt;.mirror.aliyuncs.com&quot;,
    &quot;https://dockerproxy.com&quot;,
    &quot;https://mirror.baidubce.com&quot;,
    &quot;https://docker.m.daocloud.io&quot;,
    &quot;https://docker.nju.edu.cn&quot;,
    &quot;https://docker.mirrors.sjtug.sjtu.edu.cn&quot;
]
}EOF
sudo systemctl daemon-reload
sudo systemctl 
restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自建-docker-registry-mirror-proxy" tabindex="-1"><a class="header-anchor" href="#自建-docker-registry-mirror-proxy"><span>自建 Docker Registry Mirror/Proxy</span></a></h3><h4 id="前提" tabindex="-1"><a class="header-anchor" href="#前提"><span>前提</span></a></h4><p>•有 Cloudflare 账号•（可选）有自定义的域名，且域名托管在 Cloudflare 上•Cloudflare Workers 额度足够</p><h4 id="cloudflare-docker-proxy" tabindex="-1"><a class="header-anchor" href="#cloudflare-docker-proxy"><span>cloudflare-docker-proxy</span></a></h4><p>这里使用 Cloudflare Worker - cloudflare-docker-proxy[4] 搭建。原文 README 步骤有一些问题，可以参考这篇 README.md[5] 来实施。</p><p>这里以<strong>自定义域名</strong>配置方式举例, 步骤如下：</p><p>1.Fork Repo2.Deploy 按钮对应 URL 调整为您自己的 repo url3.修改 <code>src/index.js</code> 的 <code>const routes</code> 块的内容</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const routes = {\`\`  &quot;docker.your-domain.com&quot;: &quot;https://registry-1.docker.io&quot;,\`\`  &quot;quay.your-domain.com&quot;: &quot;https://quay.io&quot;,\`\`  &quot;gcr.your-domain.com&quot;: &quot;https://k8s.gcr.io&quot;,\`\`  &quot;k8s-gcr.your-domain.com&quot;: &quot;https://k8s.gcr.io&quot;,\`\`  &quot;ghcr.your-domain.com&quot;: &quot;https://ghcr.io&quot;,\`\`};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.点击 &quot;Deploy&quot; 按钮部署，部署后如下：</p><p><img src="https://static.xlc520.tk/blogImage/640-1698065215359-40.png" alt="图片" loading="lazy">Cloudflare Worker</p><p>5.在 Cloudflare 的 DNS 记录里添加 <code>CNAME</code> 指向部署后的 <code>\${workername}.\${username}.workers.dev</code> 地址。如下：<img src="https://mmbiz.qpic.cn/mmbiz_png/lvd46ZxX8UTLzDsF9BvKaYsPvHibLX26icmWBo3QjlQ7nLQLUeicXm40HzhTTHicFlIjlPx3TBdw5q42lvic697DPjA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy">Cloudflare DNS Records6.在 Workers 的 HTTP Routes 里，添加 <code>xxx.your-domain.com/*</code> 路由指向 cloudflare-docker-proxy, xxx 就是 <code>docker</code> <code>quay</code> <code>gcr</code> 等，如下： <img src="https://static.xlc520.tk/blogImage/640-1698065215359-42.png" alt="图片" loading="lazy"> Cloudflare Worker Routes</p><p>完成。</p><h4 id="docker-registry-mirror-配置-1" tabindex="-1"><a class="header-anchor" href="#docker-registry-mirror-配置-1"><span>Docker Registry Mirror 配置</span></a></h4><p>将配置后的 <code>docker.&lt;your-domain&gt;.com</code> Mirror 添加到 <code>/etc/docker/daemon.json</code> 的 <code>registry-mirrors</code> 中并重启 Docker 生效。</p><h3 id="docker-daemon-配置-proxies" tabindex="-1"><a class="header-anchor" href="#docker-daemon-配置-proxies"><span>Docker Daemon 配置 <code>proxies</code></span></a></h3><p>如果不想设置 Mirrors, 还可以配置 <code>proxies</code>, 实现通过 <code>proxies</code> 拉取 Docker Hub 镜像。</p><h4 id="前提-1" tabindex="-1"><a class="header-anchor" href="#前提-1"><span>前提</span></a></h4><p>•有一个 Proxy, 可以稳定访问到 Docker Hub</p><h4 id="docker-daemon-配置" tabindex="-1"><a class="header-anchor" href="#docker-daemon-配置"><span>Docker Daemon 配置</span></a></h4><p><code>vi /etc/docker/daemon.json</code>, 添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo mkdir -p /etc/dockersudo tee /etc/docker/daemon.json &lt;&lt;-EOF{    &quot;proxies&quot;: {        &quot;http-proxy&quot;: &quot;http://&lt;proxy-ip&gt;:7890&quot;,        &quot;https-proxy&quot;: &quot;http://&lt;proxy-ip&gt;:7890&quot;,        &quot;no-proxy&quot;: &quot;*.cn,127.0.0.0/8,192.168.0.0/16,172.16.0.0/12,10.0.0.0/8&quot;    }}EOFsudo systemctl daemon-reloadsudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>📝<strong>Notes</strong>:</p><p>Docker Daemon 里的 <code>no-proxy</code>, 是支持 CIDR 格式的.</p></blockquote><p>完成。</p><h3 id="注册各个镜像库账号并登录" tabindex="-1"><a class="header-anchor" href="#注册各个镜像库账号并登录"><span>注册各个镜像库账号并登录</span></a></h3><p>包括不限于：</p><p>•Docker Hub•Quay.io•GHCR.io (GitHub 的 Docker registry)•gcr.io (Google Cloud 的 Registry)•...</p><p>注册后，视情况不同，有的可以直接通过密码登录，有的需要申请 Token/Service Account 等专用密码。</p><p>注册过程略。</p><h4 id="docker-login-登录" tabindex="-1"><a class="header-anchor" href="#docker-login-登录"><span><code>docker login</code> 登录</span></a></h4><p>Docker Hub 登录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>echo &quot;&lt;password&gt;&quot; | docker login --username &lt;username&gt; --password-stdin&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他 Docker Registry 登录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>echo &quot;&lt;password&gt;&quot; | docker login quay.io --username &lt;username&gt; --password-stdinecho &quot;&lt;password&gt;&quot; | docker login ghcr.io --username &lt;username&gt; --password-stdinecho &quot;&lt;password&gt;&quot; | docker login gcr.io --username &lt;username&gt; --password-stdin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，也可以直接写入 <code>~/.docker/config.json</code> 文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{  &quot;auths&quot;: {    &quot;ghcr.io&quot;: {      &quot;auth&quot;: &quot;&lt;auth&gt;&quot;    },    &quot;https://index.docker.io/v1/&quot;: {      &quot;auth&quot;: &quot;&lt;auth&gt;&quot;    },    &quot;quay.io&quot;: {      &quot;auth&quot;: &quot;&lt;auth&gt;&quot;    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>&lt;auth&gt;</code> 通过如下方式获得：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>echo -n &#39;&lt;username&gt;:&lt;password&gt;&#39; | base64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结束。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>通过以上方法，相信您能在国内使用 Docker 得心应手。</p><h3 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h3><p><code>[1]</code> cloudflare-docker-proxy: <em>https://github.com/ciiiii/cloudflare-docker-proxy</em><code>[2]</code> docker-practice/docker-registry-cn-mirror-test: <em>https://github.com/docker-practice/docker-registry-cn-mirror-test/actions</em><code>[3]</code> 阿里云加速器（点击管理控制台 -&gt; 登录账号 -&gt; 右侧镜像工具 -&gt; 镜像加速器 -&gt; 复制加速器地址）: <em>https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</em><code>[4]</code> cloudflare-docker-proxy: <em>https://github.com/ciiiii/cloudflare-docker-proxy</em><code>[5]</code> README.md: <em>https://github.com/east4ming/cloudflare-docker-proxy</em></p>`,85),a=[t];function s(i,n){return o(),r("div",null,a)}const u=e(d,[["render",s],["__file","Docker 镜像库国内加速的几种方法.html.vue"]]);export{u as default};
