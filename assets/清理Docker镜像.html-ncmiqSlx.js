import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,a as e}from"./app-aq8PVJpR.js";const i={},r=e(`<h1 id="清理docker镜像" tabindex="-1"><a class="header-anchor" href="#清理docker镜像"><span>清理Docker镜像</span></a></h1><p>在日常开发和维护工作中，Docker 镜像管理是一件既繁复又必要的工作。镜像积累如山，不仅占用宝贵的磁盘空间，还可能给我们的工作带来不便。今天，就让我带大家深入了解如何高效清理 Docker 镜像，保持我们的开发环境干净整洁。</p><h3 id="_1-查看镜像并评估" tabindex="-1"><a class="header-anchor" href="#_1-查看镜像并评估"><span>1.查看镜像并评估</span></a></h3><p>首先，我们需要知道自己的“战场”：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-a</code> 参数会列出所有镜像，包括中间层镜像。检查一下这些镜像，评估哪些是必要的，哪些是可以删除的。</p><h3 id="_2-删除指定镜像" tabindex="-1"><a class="header-anchor" href="#_2-删除指定镜像"><span>2.删除指定镜像</span></a></h3><p>对于不再需要的镜像，我们可以使用它们的 ID、仓库名或标签来删除：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token punctuation">[</span>镜像ID或仓库名:标签<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-批量删除无用镜像" tabindex="-1"><a class="header-anchor" href="#_3-批量删除无用镜像"><span>3.批量删除无用镜像</span></a></h3><p>清理所有悬挂（即无标签）镜像，这些通常是构建过程中留下的：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加上 <code>-a</code> 参数，可以删除所有未被容器引用的镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-清理特定时间前的镜像" tabindex="-1"><a class="header-anchor" href="#_4-清理特定时间前的镜像"><span>4.清理特定时间前的镜像</span></a></h3><p>当我们需要清理一定时间之前的镜像时，可以使用过滤器：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune <span class="token parameter variable">-a</span> <span class="token parameter variable">--filter</span> <span class="token string">&quot;until=168h&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会删除所有创建时间超过168小时（7天）的镜像。</p><h3 id="_5-按照大小排序" tabindex="-1"><a class="header-anchor" href="#_5-按照大小排序"><span>5.按照大小排序</span></a></h3><p>有时候，我们想优先删除体积较大的镜像来快速释放空间：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token parameter variable">--format</span> <span class="token string">&#39;{{.Size}}\\t{{.Repository}}:{{.Tag}}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-hr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们可以直观地看到哪些镜像占用空间较大，然后手动删除。</p><h3 id="_6-使用脚本自动化" tabindex="-1"><a class="header-anchor" href="#_6-使用脚本自动化"><span>6.使用脚本自动化</span></a></h3><p>如果有一系列复杂的清理规则，我们可以编写一个简单的脚本来自动化这个过程。比如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 清理所有未使用的镜像和容器</span>
<span class="token function">docker</span> system prune <span class="token parameter variable">-af</span>
<span class="token comment"># 删除所有1.0版本开头的镜像</span>
<span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;1.0&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> rmi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-定时自动清理" tabindex="-1"><a class="header-anchor" href="#_7-定时自动清理"><span>7.定时自动清理</span></a></h3><p>利用 cron 定时任务，可以设定周期性清理工作：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 每天凌晨两点执行清理</span>
<span class="token number">0</span> <span class="token number">2</span> * * * /path/to/your/script.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-删除特定模式的镜像" tabindex="-1"><a class="header-anchor" href="#_8-删除特定模式的镜像"><span>8.删除特定模式的镜像</span></a></h3><p>对于复杂的模式匹配，我们可以使用更精细的 grep 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;仓库名.*1.0&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> rmi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>记得替换 &#39;仓库名&#39; 为你的实际仓库名。</p>`,32),t=[r];function p(c,d){return s(),n("div",null,t)}const h=a(i,[["render",p],["__file","清理Docker镜像.html.vue"]]);export{h as default};
