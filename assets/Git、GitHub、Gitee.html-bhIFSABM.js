import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as n,b as e,d as i,e as l,a as t}from"./app-CXNU22eb.js";const s={},g=t('<h1 id="git、github、gitee" tabindex="-1"><a class="header-anchor" href="#git、github、gitee"><span>Git、GitHub、Gitee</span></a></h1><h2 id="一-git-介绍与-mac-下如何生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#一-git-介绍与-mac-下如何生成-ssh-key"><span>一：Git 介绍与 Mac 下如何生成 ssh key</span></a></h2><p>git 是分布式的代码管理工具，远程的代码管理是基于 ssh 的，所以要使用远程的 git 则需要 ssh 的配置。简单的说，Git - 版本控制工具；Github 是一个网站，提供给用户空间创建 git 仓储，保存用户的一些数据文档或者代码等；GitLab 是基于 Git 的项目管理软件</p><p>​ 首先，使用代码管理工具把本地的代码上传到服务器时需要加密处理，加密传输的算法有很多种，git 可使用 rsa，rsa 要解决的一个核心问题是，如何使用一对特定的数字，使其中一个数字可以用来加密，而另外一个数字可以用来解密。这两个数字就是你在使用 git 和 github，gitlab 的时候所遇到的 public key 也就是公钥以及 private key 私钥。</p><p>​ 其中，公钥就是那个用来加密的数字，这也就是为什么你在本机生成了公钥之后，要上传到 github 的原因。从 github 发回来的，用那公钥加密过的数据，可以用你本地的私钥来还原。如果你的 key 丢失了，不管是公钥还是私钥，丢失一个都不能用了，解决方法也很简单，删除原有的 key，重新再生成一次，然后在 github.com 里再设置一次就行</p><p>在个人电脑生成 ssh 密钥后，会同时生成一个公开密钥和一个私有密钥，默认情况下在用户主目录下的.ssh 目录中，密钥为 id_rsa，公开密钥为 id_rsa.pub。</p><p>密钥和公开密钥是共同使用的，协同开发中，一般会将公钥配置在服务器中，这样方便经常登录，也不需要输入密码，这是现在集群和各种云平台常用的登录方式，密钥在本地不被泄漏就非常安全。</p><ul><li>步骤 1.检查是否已经存在 SSH Key</li></ul><p>打开电脑终端，输入以下命令：</p><p>ls -al ~/.ssh</p><p>会出现两种情况 ，如步骤 2 所示</p><ul><li>步骤 2. 生成/设置 SSH Key</li></ul><p>继续上一步可能出现的情况</p><p>（1）情况一：终端出现文件 id_rsa.pub 或 id_dsa.pub，则表示该电脑已经存在 SSH Key，此时可继续输入命令：</p><p>pbcopy &lt; ~/.ssh/id_rsa.pub</p><p>这样你需要的 SSH Key 就已经复制到粘贴板上了，然后进行步骤 3</p><p>（2）情况二：终端未出现 id_rsa.pub 或 id_dsa.pub 文件，表示该电脑还没有配置 SSH Key，此时需要输入命令：</p><p>ssh-keygen -t rsa -C &quot;<a href="mailto:your_email@example.com">your_email@example.com</a>&quot;</p><p>默认会在相应路径下（/your_home_path）生成 id_rsa 和 id_rsa.pub 两个文件，此时终端会显示：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/1644164187476-6676ff38-2c76-44cb-a75e-93295b945a75.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>连续回车即可，也可能会让你输入密码，密码就是你的开机密码</p><p>此时再输入命令：ls -al ~/.ssh 就会出现 id_rsa.pub 和 id_dsa.pub 两个文件，然后重复情况一的步骤即输入以下命令再进行步骤 3 即可：</p><p>pbcopy &lt; ~/.ssh/id_rsa.pub</p><ul><li>步骤 3.将 SSH Key 添加到 Github 和 Gitee 中</li></ul><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/1644163954973-29d7b898-0036-4f48-b13b-b771f3b3064b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>*<strong>图：Github*</strong></p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/1644164425045-94537f86-65d3-4a34-8554-08bcd00020f6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>*<strong>图：Gitee*</strong>[</p>',28),c={href:"https://blog.csdn.net/wsdxsyb/article/details/81904472",target:"_blank",rel:"noopener noreferrer"},d=t('<h2 id="二-常用命令" tabindex="-1"><a class="header-anchor" href="#二-常用命令"><span>二：常用命令</span></a></h2><ol><li><p>拉取代码 git clone xxx.git</p></li><li><p>创建分支 git branch dev 或者 git checkout -b dev 或者 git switch -c dev</p></li><li><p>切换本地分支 git checkout dev 或者 git switch dev</p></li><li><p>切换分支并关联远程分支 git checkout -b dev origin/dev 或者 git checkout --track origin/dev</p></li><li><p>查看本地所有分支 git branch、查看远程所有分支 git branch -r</p></li><li><p>删除本地分支 git branch -d dev、删除远程分支 git push origin -d dev</p></li><li><p>将代码从工作区添加暂存区 git add .</p></li><li><p>查看尚未暂存的更新 git diff</p></li><li><p>添加提交信息 git commit -m &#39;xxxx&#39;（commit 注释写错，执行 git commit --amend</p></li></ol><p>此时会进入默认 vim 编辑器，修改注释完毕后保存）</p><ol><li><p>推送代码到远程分支 git push origin dev、强制推送 git push -f origin dev（常在 git rebase 后使用）</p></li><li><p>拉取远程分支代码 git pull origin dev</p></li><li><p>合并分支 git merge dev</p></li><li><p>查看 git 状态 git status</p></li><li><p>查看提交历史 git log</p></li><li><p>查看命令历史 git reflog</p></li><li><p>把本地未 push 的分叉提交历史整理成直线 git rebase origin/dev、回到 rebase 执行之前的状态 git rebase --abort</p></li><li><p>回退版本 git reset --hard commit_id、回退上一个版本 git reset --soft HEAD^ 等于 git reset --soft HEAD~1</p></li><li><p>修改分支名 git branch -m oldBranchName newBranchName、git push origin :oldBranchName、git push --set-upstream origin newBranchName</p></li><li><p>查看 git 配置 git config --global --list、git config --global user.name</p></li><li><p>git config --global --add user.name newName（增）</p></li><li><p>git config --global --unset user.name（删）</p></li><li><p>git config --global user.name newName（改）</p></li><li><p>配置 Git 用户名和邮箱</p></li></ol><p>git config --global user.name &quot;Your Name&quot;</p><p>git config --global user.email &quot;<a href="mailto:email@example.com">email@example.com</a>&quot;</p><h2 id="三-提交规范" tabindex="-1"><a class="header-anchor" href="#三-提交规范"><span>三：提交规范</span></a></h2>',7),h={href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular",target:"_blank",rel:"noopener noreferrer"},m=t('<ul><li><p>feat 增加新功能</p></li><li><p>fix 修复问题/BUG</p></li><li><p>style 代码风格相关无影响运行结果的</p></li><li><p>perf 优化/性能提升</p></li><li><p>refactor 重构</p></li><li><p>revert 撤销修改</p></li><li><p>test 测试相关</p></li><li><p>docs 文档/注释</p></li><li><p>chore 依赖更新/脚手架配置修改等</p></li><li><p>workflow 工作流改进</p></li><li><p>ci 持续集成</p></li><li><p>types 类型定义文件更改</p></li><li><p>wip 开发中</p></li></ul><h2 id="四-codereview-常用缩写" tabindex="-1"><a class="header-anchor" href="#四-codereview-常用缩写"><span>四：CodeReview 常用缩写</span></a></h2><p>PR: Pull Request. 拉取请求，给其他项目提交代码</p><p>LGTM: Looks Good To Me. 朕知道了 代码已经过 review，可以合并</p><p>SGTM: Sounds Good To Me. 和上面那句意思差不多，也是已经通过了 review 的意思</p><p>WIP: Work In Progress. 传说中提 PR 的最佳实践是，如果你有个改动很大的 PR，可以在写了一部分的情况下先提交，但是在标题里写上 WIP，以告诉项目维护者这个功能还未完成，方便维护者提前 review 部分提交的代码。</p><p>PTAL: Please Take A Look. 你来瞅瞅？用来提示别人来看一下</p><p>TBR: To Be Reviewed. 提示维护者进行 review</p><p>TL;DR: Too Long; Didn&#39;t Read. 太长懒得看。也有很多文档在做简略描述之前会写这么一句</p><p>TBD: To Be Done(or Defined/Discussed/Decided/Determined). 根据语境不同意义有所区别，但一般都是还没搞定的意思</p><p>注意：dev 代表分支名（可随便命名）</p>',11);function b(u,f){const a=o("ExternalLinkIcon");return r(),n("div",null,[g,e("p",null,[i("]("),e("a",c,[i("https://blog.csdn.net/wsdxsyb/article/details/81904472"),l(a)]),i(")")]),d,e("p",null,[e("a",h,[i("https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular"),l(a)])]),m])}const y=p(s,[["render",b],["__file","Git、GitHub、Gitee.html.vue"]]),v=JSON.parse('{"path":"/git/Git%E3%80%81GitHub%E3%80%81Gitee.html","title":"Git、GitHub、Gitee","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Git、GitHub、Gitee","excerpt":null,"description":"Git、GitHub、Gitee使用","date":"2022-02-13T00:00:00.000Z","category":"Git","tag":"Git","article":true,"dateline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/git/Git%E3%80%81GitHub%E3%80%81Gitee.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Git、GitHub、Gitee"}],["meta",{"property":"og:description","content":"Git、GitHub、Gitee使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/1644164187476-6676ff38-2c76-44cb-a75e-93295b945a75.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:published_time","content":"2022-02-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git、GitHub、Gitee\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/1644164187476-6676ff38-2c76-44cb-a75e-93295b945a75.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/1644163954973-29d7b898-0036-4f48-b13b-b771f3b3064b.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/1644164425045-94537f86-65d3-4a34-8554-08bcd00020f6.png\\"],\\"datePublished\\":\\"2022-02-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一：Git 介绍与 Mac 下如何生成 ssh key","slug":"一-git-介绍与-mac-下如何生成-ssh-key","link":"#一-git-介绍与-mac-下如何生成-ssh-key","children":[]},{"level":2,"title":"二：常用命令","slug":"二-常用命令","link":"#二-常用命令","children":[]},{"level":2,"title":"三：提交规范","slug":"三-提交规范","link":"#三-提交规范","children":[]},{"level":2,"title":"四：CodeReview 常用缩写","slug":"四-codereview-常用缩写","link":"#四-codereview-常用缩写","children":[]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":5},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":5.33,"words":1599},"filePathRelative":"git/Git、GitHub、Gitee.md","localizedDate":"2022年2月13日"}');export{y as comp,v as data};
