import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-V68d0221.js";const p={},e=t(`<h1 id="从-maven-构建到-docker-部署的完整指南" tabindex="-1"><a class="header-anchor" href="#从-maven-构建到-docker-部署的完整指南" aria-hidden="true">#</a> 从 Maven 构建到 Docker 部署的完整指南</h1><h2 id="_1-使用dockerfile部署" tabindex="-1"><a class="header-anchor" href="#_1-使用dockerfile部署" aria-hidden="true">#</a> 1 使用Dockerfile部署</h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 使用Java 8基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> java:8</span>
<span class="token instruction"><span class="token keyword">LABEL</span> authors=<span class="token string">&quot;mabh&quot;</span></span>

<span class="token comment"># 设置时区为Asia/Shanghai，可以根据需要更改</span>
<span class="token instruction"><span class="token keyword">ENV</span> TIME_ZONE=Asia/Shanghai</span>

<span class="token comment"># 更新时区</span>
<span class="token instruction"><span class="token keyword">RUN</span> ln -snf /usr/share/zoneinfo/<span class="token variable">$TIME_ZONE</span> /etc/localtime &amp;&amp; echo <span class="token variable">$TIME_ZONE</span> &gt; /etc/timezone</span>

<span class="token comment"># 设置容器内的工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 将构建好的Spring Boot应用jar文件复制到镜像中</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./<span class="token variable">\${project.build.finalName}</span>.jar /app/</span>

<span class="token instruction"><span class="token keyword">COPY</span> ./application.yml /app/</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./application-<span class="token variable">\${activatedProperties}</span>.yml /app/</span>

<span class="token comment"># 暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>


<span class="token comment"># 设置Java虚拟机初始内存和最大内存</span>
<span class="token comment">#-server: 启用Java HotSpot虚拟机的服务器模式，该模式针对长时间运行的应用程序进行了优化以提高性能。</span>
<span class="token comment">#-Xms512m: 设置Java堆的初始大小为512兆字节。</span>
<span class="token comment">#-Xmx1024m: 设置Java堆的最大大小为1024兆字节。</span>
<span class="token comment">#-XX:+UseG1GC: 启用G1垃圾收集器。G1（Garbage-First）是一种相对新的垃圾收集器，旨在提供更可预测的停顿时间和更好的性能。</span>
<span class="token comment">#-XX:+HeapDumpOnOutOfMemoryError: 在发生内存溢出错误时生成堆转储文件。这对于分析内存问题非常有用。</span>
<span class="token comment">#-XX:HeapDumpPath=/dumps/oom_dump.hprof: 指定内存转储文件。在这个例子中，堆转储文件将被写入 /dumps/oom_dump.hprof 目录文件中。</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_OPTS=<span class="token string">&quot;-server -Xms512m -Xmx1024m -XX:+UseG1GC -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/dumps/oom_dump.hprof&quot;</span></span>

<span class="token instruction"><span class="token keyword">ENV</span> APP_ENV=<span class="token string">&quot;--spring.profiles.active=\${activatedProperties}&quot;</span></span>
<span class="token comment"># 创建内存转储文件和日志文件存储目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /app/dumps</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /app/logs</span>

<span class="token comment"># 设置容器启动时执行的命令</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;sh&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dlogging.file=/app/logs/application.log -jar /app/\${project.build.finalName}.jar $APP_ENV&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包含如下基本功能：</p><ul><li>设置时区为Asia/Shanghai</li><li>自动获取 maven 应用包名，不需要额外修改即可使用。</li><li>自动识别 profile 使用的配置文件 不管是 <code>application-dev.yml</code> 、<code>*-test.yml</code>、 <code>*.prod.yml</code> 都可以识别出来。</li><li>默认暴漏8080端口</li></ul><p>以下是它的主要特点和功能：</p><ul><li><strong>基础镜像</strong> ：使用了 Java 8 我自定义的镜像，你们使用dockerhub 上的就行 的基础镜像，这适用于许多传统的 Java 应用程序。</li><li><strong>时区设置</strong> ：设置时区为 Asia/Shanghai。这是一个重要的设置，特别是对于需要关注本地时间的应用程序。如果需要，可以轻松更改为其他时区。</li><li><strong>工作目录</strong> ：在容器内设置了 /app 作为工作目录。</li><li><strong>文件复制</strong> ：将构建的 Spring Boot 应用 jar 文件以及相关的配置文件（application.yml 和 <code>application-\${activatedProperties}.yml</code>）复制到镜像中，自动识别 profile 使用的配置文件 。</li><li><strong>端口暴露</strong> ：默认暴露了 8080 端口，这是 Spring Boot 应用的常用端口。</li><li><strong>Java 虚拟机设置</strong> ： <ul><li>启用了服务器模式，优化长时间运行的性能。</li><li>设置了初始和最大堆大小。</li><li>启用了 G1 垃圾收集器，适用于需要更可预测停顿时间和更好性能的应用程序。</li><li>配置了在内存溢出时生成堆转储文件，有助于调试内存问题。</li></ul></li><li><strong>环境变量</strong> ：允许通过 <code>APP_ENV</code> 命令行的应用 配置项。</li><li><strong>目录创建</strong> ：创建了用于存储内存转储文件和日志文件的目录。</li><li><strong>启动命令</strong> ：定义了容器启动时执行的命令，包括 Java 虚拟机参数、日志文件设置和应用 jar 文件的执行。</li></ul><h2 id="_2-管理-docker-容器-简洁高效的脚本方法" tabindex="-1"><a class="header-anchor" href="#_2-管理-docker-容器-简洁高效的脚本方法" aria-hidden="true">#</a> 2 管理 Docker 容器：简洁高效的脚本方法</h2><p>管理 Docker 容器有时会显得复杂。为此，我们使用 Bash 脚本来简化这一过程。下面是这个脚本的核心要点：</p><ul><li><strong>安全性优先：</strong> 使用 <code>set -e</code> 确保脚本在出现任何错误时立即停止，防止问题扩散。</li><li><strong>灵活配置：</strong> 通过设置变量 <code>CONTAINER_NAME</code> 和 <code>IMAGE_NAME</code>，脚本可以灵活适应不同的项目需求，会根据maven打包环境替换</li><li><strong>容器重启：</strong> 如果容器正在运行，脚本会先停止并删除它，然后重新构建和启动，保证环境的干净和更新。</li><li><strong>一键执行：</strong> 无论是构建新镜像还是启动新容器，一切操作都可通过脚本一键完成。</li></ul><p>restart.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 设置脚本在遇到错误时立即退出</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 设置容器名称和镜像名称</span>
<span class="token assign-left variable">CONTAINER_NAME</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${project.build.finalName}</span>&quot;</span>
<span class="token assign-left variable">IMAGE_NAME</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${project.build.finalName}</span>:1.0.0&quot;</span>

<span class="token comment"># 检查容器是否存在并获取其运行状态</span>
<span class="token assign-left variable">running</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&quot;{{ .State.Running }}&quot;</span> <span class="token string">&quot;<span class="token variable">\${CONTAINER_NAME}</span>&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">||</span> <span class="token boolean">true</span><span class="token variable">)</span></span>

<span class="token comment"># 停止并删除正在运行的容器</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$running</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;true&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Stopping running container...&quot;</span>
    <span class="token function">docker</span> stop <span class="token string">&quot;<span class="token variable">\${CONTAINER_NAME}</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Removing stopped container...&quot;</span>
    <span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">\${CONTAINER_NAME}</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 如果容器不存在或已停止，重新构建并启动容器</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$running</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;true&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    
    <span class="token comment"># docker load -i java8.tar</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Building new image...&quot;</span>
    <span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token string">&quot;<span class="token variable">\${IMAGE_NAME}</span>&quot;</span> <span class="token builtin class-name">.</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Starting new container...&quot;</span>
    <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> <span class="token string">&quot;<span class="token variable">\${CONTAINER_NAME}</span>&quot;</span> <span class="token punctuation">\\</span>
        --cap-add<span class="token operator">=</span>SYS_PTRACE <span class="token punctuation">\\</span>
        <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/dumps:/app/dumps&quot;</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-v</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/logs:/app/logs&quot;</span> <span class="token punctuation">\\</span>
        <span class="token string">&quot;<span class="token variable">\${IMAGE_NAME}</span>&quot;</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Container has been restarted.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker load -i java8.tar</code> 这一步对于下面Docker-Compose 可能是需要的。</p><h2 id="_3-集成-docker-管理脚本与-maven-完善构建流程" tabindex="-1"><a class="header-anchor" href="#_3-集成-docker-管理脚本与-maven-完善构建流程" aria-hidden="true">#</a> 3 集成 Docker 管理脚本与 Maven：完善构建流程</h2><p>要将前面提到的 Docker 管理脚本（restart.sh）以及 Dockerfile 与 Maven 打包工具集成，我们可以利用 Maven 的 <code>maven-resources-plugin</code> 插件。这个插件允许我们在 Maven 的构建过程中复制和处理资源文件。</p><p>下面是如何配置这个插件，以及它在整个过程中的作用：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-resources-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>process-resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>\${project.build.directory}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>Dockerfile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>restart.sh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以跟 profile 结合起来，只有jar包的的时候才用Docker</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging.type</span><span class="token punctuation">&gt;</span></span>jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging.type</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-resources-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>process-resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>\${project.build.directory}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
                                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
                                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">&gt;</span></span>
                                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>
                                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>Dockerfile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>restart.sh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-执行阶段" tabindex="-1"><a class="header-anchor" href="#_1-执行阶段" aria-hidden="true">#</a> 1.执行阶段</h3><ul><li>插件配置在 <code>process-resources</code> 阶段执行，这是 Maven 生命周期中处理项目资源的标准阶段。</li><li>goal 设置为 resources，表示插件的主要任务是处理资源。</li></ul><h3 id="_2-资源配置" tabindex="-1"><a class="header-anchor" href="#_2-资源配置" aria-hidden="true">#</a> 2.资源配置</h3><ul><li>outputDirectory 设置为 <code>\${project.build.directory}</code>，这意味着资源将被复制到 Maven 的构建目录中。</li><li>在 <code>&lt;resources&gt;</code>部分，我们定义了要包括的具体资源。 <ul><li>directory 指定资源所在的目录，这里是 <code>src/main/resources</code>。</li><li>filtering 设置为 true，允许对资源文件进行过滤处理，这对于包含需要替换的 Maven 属性的文件很有用。</li><li>includes 标签下，我们明确列出了要包含的文件：Dockerfile 和 <code>restart.sh</code>。</li></ul></li></ul><p>通过这种方式，Maven 在构建过程中会自动将 Dockerfile 和 restart.sh 脚本复制到指定的输出目录。这样做的好处是，你可以确保在最终的发版物中包含了这些对于部署和管理 Docker 容器至关重要的文件，实现了项目的一体化管理。</p><h2 id="_4-从-dockerfile-到-docker-compose-简化和自动化应用部署" tabindex="-1"><a class="header-anchor" href="#_4-从-dockerfile-到-docker-compose-简化和自动化应用部署" aria-hidden="true">#</a> 4 从 Dockerfile 到 Docker-Compose：简化和自动化应用部署</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  $<span class="token punctuation">{</span>project.build.finalName<span class="token punctuation">}</span><span class="token punctuation">:</span>  <span class="token comment"># 使用 Dockerfile 中定义的项目名作为服务名称</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>project.build.finalName<span class="token punctuation">}</span><span class="token punctuation">:</span>1.0.0  <span class="token comment"># 使用 Dockerfile 中定义的镜像名和标签</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>project.build.finalName<span class="token punctuation">}</span>  <span class="token comment"># 容器名称也使用同样的命名</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># 暴露的端口</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./$<span class="token punctuation">{</span>project.build.finalName<span class="token punctuation">}</span>.jar<span class="token punctuation">:</span>/app/$<span class="token punctuation">{</span>project.build.finalName<span class="token punctuation">}</span>.jar  <span class="token comment"># 挂载 JAR 文件</span>
      <span class="token punctuation">-</span> ./application.yml<span class="token punctuation">:</span>/app/application.yml  <span class="token comment"># 挂载配置文件</span>
      <span class="token punctuation">-</span> ./application<span class="token punctuation">-</span>$<span class="token punctuation">{</span>activatedProperties<span class="token punctuation">}</span>.yml<span class="token punctuation">:</span>/app/application<span class="token punctuation">-</span>$<span class="token punctuation">{</span>activatedProperties<span class="token punctuation">}</span>.yml  <span class="token comment"># 挂载特定环境的配置文件</span>
      <span class="token punctuation">-</span> ./dumps<span class="token punctuation">:</span>/app/dumps  <span class="token comment"># 挂载内存转储目录</span>
      <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/app/logs  <span class="token comment"># 挂载日志目录</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TIME_ZONE=Asia/Shanghai  <span class="token comment"># 设置时区</span>
      <span class="token punctuation">-</span> JAVA_OPTS=<span class="token punctuation">-</span>server <span class="token punctuation">-</span>Xms512m <span class="token punctuation">-</span>Xmx1024m <span class="token punctuation">-</span>XX<span class="token punctuation">:</span>+UseG1GC <span class="token punctuation">-</span>XX<span class="token punctuation">:</span>+HeapDumpOnOutOfMemoryError <span class="token punctuation">-</span>XX<span class="token punctuation">:</span>HeapDumpPath=/dumps/oom_dump.hprof
      <span class="token punctuation">-</span> APP_ENV=<span class="token punctuation">-</span>Dapp.log.serviceName=$<span class="token punctuation">{</span>project.build.finalName<span class="token punctuation">}</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>spring.profiles.active=$<span class="token punctuation">{</span>activatedProperties<span class="token punctuation">}</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always  <span class="token comment"># 设置容器总是自动重启</span>
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> json<span class="token punctuation">-</span>file
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;20m&quot;</span>
        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态配置与服务管理" tabindex="-1"><a class="header-anchor" href="#动态配置与服务管理" aria-hidden="true">#</a> 动态配置与服务管理</h3><ul><li><strong>Maven 属性集成:</strong></li></ul><p>利用 Maven 属性（如 <code>\${project.build.finalName}</code>）实现 Docker 配置与构建过程的紧密集成，使配置动态化和自动化。</p><ul><li><strong>镜像和容器名称:</strong></li></ul><p>根据 Maven 构建结果动态生成 image 和 container_name，保证镜像和容器名称与项目版本一致。</p><ul><li><strong>端口映射:</strong></li></ul><p>ports 配置将容器内的端口（例如 8080）映射到宿主机，使外部访问成为可能。</p><h3 id="数据管理与环境优化" tabindex="-1"><a class="header-anchor" href="#数据管理与环境优化" aria-hidden="true">#</a> 数据管理与环境优化</h3><ul><li><strong>卷挂载 (volumes):</strong></li></ul><p>挂载包括 JAR 文件、配置文件以及日志和转储目录，确保容器可以访问所需的所有文件和数据。</p><ul><li><strong>环境变量 (environment):</strong></li></ul><p>设置容器的环境变量，如时区和 Java 运行参数，优化容器的运行环境。</p><h3 id="稳定性与日志管理" tabindex="-1"><a class="header-anchor" href="#稳定性与日志管理" aria-hidden="true">#</a> 稳定性与日志管理</h3><ul><li><strong>自动重启 (restart):</strong></li></ul><p>配置容器在退出时自动重启，提高应用的稳定性和可靠性。</p><ul><li><strong>日志配置 (logging):</strong></li></ul><p>设置日志驱动和相关选项（例如最大文件大小和数量），帮助有效管理容器日志。</p><p>总的来说，这一套 Docker 化的流程不仅降低了部署复杂性，还提升了效率，为在不同环境中部署应用提供了极大便利。这对于追求快速、可靠且一致的软件部署流程的现代开发团队来说，是一种至关重要的实践。</p>`,44),l=[e];function o(c,i){return s(),a("div",null,l)}const k=n(p,[["render",o],["__file","从 Maven 构建到 Docker 部署的完整指南.html.vue"]]);export{k as default};
