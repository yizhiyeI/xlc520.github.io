import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,a}from"./app-CXNU22eb.js";const r={},i=a('<h1 id="树的定义、树的存储结构" tabindex="-1"><a class="header-anchor" href="#树的定义、树的存储结构"><span>树的定义、树的存储结构</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>提到存储结构，可以很自然的想到<strong>顺序存储结构</strong>和<strong>链式存储结构</strong>两种。</p><p>之前介绍的所有的数据结构都是线性存储结构。本章所介绍的树结构是一种<strong>非线性存储结构</strong>，存储的是具有“<strong>一对多</strong>”关系的数据元素的集合。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/cb46133043df4ca6b5588c4dec725e71.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ul><li>图 1(A) 是使用树结构存储的集合 <strong>{A,B,C,D,E,F,G,H,I,J,K,L,M}</strong> 的示意图。对于数据 A 来说，和数据 B、C、D 有关系；对于数据 B 来说，和 E、F 有关系。这就是“<strong>一对多</strong>”的关系。</li><li>将具有“一对多”关系的集合中的数据元素按照图 1（A）的形式进行存储，整个存储形状在逻辑结构上看，类似于实际生活中**倒着的树 <strong>（图 1（B）倒过来），所以称这种存储结构为</strong>“树型”存储结构。</li></ul></blockquote><p><strong>💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙</strong></p><h2 id="🐋树的定义" tabindex="-1"><a class="header-anchor" href="#🐋树的定义"><span>🐋树的定义</span></a></h2><h3 id="🌲树的定义" tabindex="-1"><a class="header-anchor" href="#🌲树的定义"><span>🌲树的定义</span></a></h3><p>​ 树（Tree）是 <strong>n（n&gt;=0</strong>）个结点的有限集。n=0 时称为空树。在任意一颗非空树中：</p><blockquote><ol><li><strong>有且仅有一个特定的称为</strong>根（root）的结点；****</li><li><strong>当 n&gt;1 时，其余结点可分为 m(m&gt;0)个互补交互的有限集 T1、T2...Tm，其中每一个集合本身又是一棵树，并称为</strong>根的子树** （SubTree）**。</li></ol><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/df38fd9b66bb44cbbc3b801a683fe0b7.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></blockquote><h3 id="🌲树的特点" tabindex="-1"><a class="header-anchor" href="#🌲树的特点"><span>🌲树的特点</span></a></h3><blockquote><ul><li><strong>n&gt;0 时，根节点是唯一的</strong>，不可能存在多个根节点。数据结构中的树<strong>只有一个根节点</strong>。</li><li>m&gt;0 时，<strong>子树的个数没有限制，但他们一定是</strong>互不相交<strong>的</strong>。</li></ul></blockquote><h3 id="🌲结点的分类" tabindex="-1"><a class="header-anchor" href="#🌲结点的分类"><span>🌲结点的分类</span></a></h3><blockquote><ul><li><strong>结点：<strong>树的结点包含</strong>一个数据元素</strong>和若干指向其**子树的分支****。</li><li><strong>结点的度（Degree）：<strong>结点</strong>拥有的子树</strong>。</li><li><strong>叶子结点（Leaf）/终端结点：****度为 0</strong>的结点。</li><li><strong>分支结点/非终端结点：****度不为 0</strong>的结点。</li><li>**内部结点：**除根节点以外，分支结点也称为内部结点。</li><li><strong>树的度：<strong>树内各结点的度的</strong>最大值</strong>。</li></ul><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/febfdc26e5fe4082a3f24394ae2a8797.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></blockquote><h3 id="🌲结点之间的关系" tabindex="-1"><a class="header-anchor" href="#🌲结点之间的关系"><span>🌲结点之间的关系</span></a></h3><ul><li><strong>孩子（Child）和双亲（Parent）：<strong>结点的子树的根，相应的，该结点称为孩子的双亲。</strong>（注意是双亲，不是单亲）</strong>*</li><li><strong>兄弟（sibling）：****同一个双亲</strong>的孩子之间互称兄弟。</li><li><strong>结点的祖先：<strong>从根结点到该结点</strong>所经过分支上的所有结点</strong>。</li><li><strong>子孙：<strong>以某结点为根的</strong>子树中的任一结点</strong>都称为该节点的子孙。</li><li><strong>无序树和有序树：<strong>如果将树中结点的各子树看成</strong>从左至右</strong>是有次序的，不能互换的，则称该数为有序树，否则为无序树。</li><li><strong>森林(fores)</strong>：m(m&gt;=0)棵<strong>互不相较</strong>的树的集合。</li></ul><p><strong>💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙</strong></p><h2 id="🐋树的存储结构" tabindex="-1"><a class="header-anchor" href="#🐋树的存储结构"><span>🐋树的存储结构</span></a></h2><blockquote><h3 id="树的4-种链式存放方式" tabindex="-1"><a class="header-anchor" href="#树的4-种链式存放方式"><span><strong>树的</strong>4 种<strong>链式存放方式</strong></span></a></h3><ol><li><h3 id="双亲链表存储结构" tabindex="-1"><a class="header-anchor" href="#双亲链表存储结构"><span><strong>双亲</strong>链表存储结构</span></a></h3></li><li><h3 id="孩子链表存储结构" tabindex="-1"><a class="header-anchor" href="#孩子链表存储结构"><span><strong>孩子</strong>链表存储结构</span></a></h3></li><li><h3 id="双亲孩子链表存储结构" tabindex="-1"><a class="header-anchor" href="#双亲孩子链表存储结构"><span><strong>双亲孩子</strong>链表存储结构</span></a></h3></li><li><h3 id="孩子兄弟链表存储结构" tabindex="-1"><a class="header-anchor" href="#孩子兄弟链表存储结构"><span><strong>孩子兄弟</strong>链表存储结构</span></a></h3></li></ol></blockquote><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/b11533763d234947aca101037dec8b41.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="⚡双亲链表存储结构" tabindex="-1"><a class="header-anchor" href="#⚡双亲链表存储结构"><span>⚡双亲链表存储结构</span></a></h2><ul><li>以一组<strong>地址连续</strong>的存储单元存放树中的各个结点，每个结点有<strong>两个域</strong>： <ul><li><strong>数据域：<strong>用于存放树中该结点的</strong>值</strong>。</li><li><strong>指针域：<strong>用于存放该结点的</strong>双亲结点</strong>在存储结构中的位置。</li></ul></li></ul><table><thead><tr><th style="text-align:center;">data(数据域)</th><th style="text-align:center;">parent(指针域)</th></tr></thead><tbody><tr><td style="text-align:center;">存储结点的数据信息</td><td style="text-align:center;">存储该结点的双亲所在数组中的下标</td></tr></tbody></table><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/662ace49b4234d0d87fa981e5ed364b6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>优点：<strong>查找一个指定结点的</strong>双亲结点</strong>非常容易。</li><li><strong>缺点：<strong>查找指定结点的</strong>孩子结点</strong>，需要<strong>扫描整个链表</strong>。</li></ul><hr><h2 id="⚡孩子链表存储结构" tabindex="-1"><a class="header-anchor" href="#⚡孩子链表存储结构"><span>⚡孩子链表存储结构</span></a></h2><ul><li>以一组<strong>地址连续</strong>的存储单元来存放树中的各个结点，每一个结点有两个域。 <ul><li><strong>数据域：<strong>存放该结点的</strong>值</strong></li><li><strong>指针域：<strong>用于存放该结点的</strong><code>孩子链表</code>的头指针</strong>。</li></ul></li><li>孩子链表的<strong>孩子结点：</strong></li></ul><table><thead><tr><th style="text-align:left;">child(数据域)</th><th style="text-align:left;">next(指针域)</th></tr></thead><tbody><tr><td style="text-align:left;">存储某个结点在表头数组中的下标</td><td style="text-align:left;">存储指向某结点的下一个孩子结点的指针</td></tr></tbody></table><ul><li>表头数组的<strong>表头结点：</strong></li></ul><table><thead><tr><th style="text-align:center;">data(数据域)</th><th style="text-align:center;">firstchild(头指针域)</th></tr></thead><tbody><tr><td style="text-align:center;">存储某个结点的数据信息</td><td style="text-align:center;">存储该结点的孩子链表的头指针</td></tr></tbody></table><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/bcff713717a24534b4c0b5b674f8acd8.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>优点：<strong>便于实现查找树中指定结点的</strong>孩子结点。</strong></li><li><strong>缺点：<strong>不便于查找指定结点的</strong>双亲结点</strong>。</li></ul><hr><h2 id="⚡双亲孩子链表存储结构" tabindex="-1"><a class="header-anchor" href="#⚡双亲孩子链表存储结构"><span>⚡双亲孩子链表存储结构</span></a></h2><ul><li>与孩子链表存储结构类似，以一组<strong>地址连续</strong>的存储单元来存放树中的各个结点，每一个结点有<strong>三个域</strong><ul><li><strong>数据域：<strong>存放该结点的</strong>值</strong></li><li><strong>父指针域：<strong>用于存放</strong>双亲结点</strong>在数组中的位置</li><li><strong>子指针域：<strong>用于存放该结点的</strong>孩子链表的头指针</strong>。</li></ul></li></ul><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/e3a1af0b7435472d95278ee052d640d4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><h2 id="⚡孩子兄弟链表存储结构" tabindex="-1"><a class="header-anchor" href="#⚡孩子兄弟链表存储结构"><span>⚡孩子兄弟链表存储结构</span></a></h2><ul><li>孩子兄弟链表存放，又称为**“左子/右兄”**二叉链式存储结构。 <ul><li><strong>左指针：<strong>指向该结点的</strong>第一个孩子</strong></li><li><strong>右指针：<strong>指向该结点的</strong>右邻兄弟</strong></li></ul></li></ul><table><thead><tr><th style="text-align:center;">data(数据域)</th><th style="text-align:center;">firstchild(指针域)</th><th style="text-align:center;">rightsib(指针域)</th></tr></thead><tbody><tr><td style="text-align:center;">存储结点的数据信息</td><td style="text-align:center;">存储该结点的第一个孩子的存储地址</td><td style="text-align:center;">存储该结点的右兄弟结点的存储地址</td></tr></tbody></table><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/9b57fb1db8824839b545e1b9ba7744bd.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙💚❤️💙</strong></p>',44),l=[i];function s(o,g){return e(),n("div",null,l)}const h=t(r,[["render",s],["__file","树的定义、树的存储结构.html.vue"]]),b=JSON.parse('{"path":"/dev/%E6%A0%91%E7%9A%84%E5%AE%9A%E4%B9%89%E3%80%81%E6%A0%91%E7%9A%84%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html","title":"树的定义、树的存储结构","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"树的定义、树的存储结构","excerpt":null,"description":"树的定义、树的存储结构","date":"2022-05-19T00:00:00.000Z","category":"java","tag":["java","数据结构"],"article":true,"timeline":true,"icon":"others","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E6%A0%91%E7%9A%84%E5%AE%9A%E4%B9%89%E3%80%81%E6%A0%91%E7%9A%84%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"树的定义、树的存储结构"}],["meta",{"property":"og:description","content":"树的定义、树的存储结构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/cb46133043df4ca6b5588c4dec725e71.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:published_time","content":"2022-05-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树的定义、树的存储结构\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/cb46133043df4ca6b5588c4dec725e71.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/df38fd9b66bb44cbbc3b801a683fe0b7.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/febfdc26e5fe4082a3f24394ae2a8797.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/b11533763d234947aca101037dec8b41.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/662ace49b4234d0d87fa981e5ed364b6.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/bcff713717a24534b4c0b5b674f8acd8.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/e3a1af0b7435472d95278ee052d640d4.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/9b57fb1db8824839b545e1b9ba7744bd.png\\"],\\"datePublished\\":\\"2022-05-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"🐋树的定义","slug":"🐋树的定义","link":"#🐋树的定义","children":[{"level":3,"title":"🌲树的定义","slug":"🌲树的定义","link":"#🌲树的定义","children":[]},{"level":3,"title":"🌲树的特点","slug":"🌲树的特点","link":"#🌲树的特点","children":[]},{"level":3,"title":"🌲结点的分类","slug":"🌲结点的分类","link":"#🌲结点的分类","children":[]},{"level":3,"title":"🌲结点之间的关系","slug":"🌲结点之间的关系","link":"#🌲结点之间的关系","children":[]}]},{"level":2,"title":"🐋树的存储结构","slug":"🐋树的存储结构","link":"#🐋树的存储结构","children":[]},{"level":2,"title":"⚡双亲链表存储结构","slug":"⚡双亲链表存储结构","link":"#⚡双亲链表存储结构","children":[]},{"level":2,"title":"⚡孩子链表存储结构","slug":"⚡孩子链表存储结构","link":"#⚡孩子链表存储结构","children":[]},{"level":2,"title":"⚡双亲孩子链表存储结构","slug":"⚡双亲孩子链表存储结构","link":"#⚡双亲孩子链表存储结构","children":[]},{"level":2,"title":"⚡孩子兄弟链表存储结构","slug":"⚡孩子兄弟链表存储结构","link":"#⚡孩子兄弟链表存储结构","children":[]}],"git":{"createdTime":1653125716000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":5},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":4.58,"words":1373},"filePathRelative":"dev/树的定义、树的存储结构.md","localizedDate":"2022年5月19日"}');export{h as comp,b as data};
