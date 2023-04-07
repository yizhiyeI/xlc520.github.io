import{_ as s,W as n,X as a,$ as e}from"./framework-06fee4ab.js";const o={},t=e(`<h1 id="informix数据导入导出操作" tabindex="-1"><a class="header-anchor" href="#informix数据导入导出操作" aria-hidden="true">#</a> informix数据导入导出操作</h1><h2 id="_1-表数据导出" tabindex="-1"><a class="header-anchor" href="#_1-表数据导出" aria-hidden="true">#</a> 1.表数据导出</h2><blockquote><p>可以采用在dbaccess工具环境直接输入</p><p>进入对应数据库：dbaccess database</p></blockquote><ul><li><strong>单表数据导出：（可导出3种不同的格式）</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>unload <span class="token keyword">to</span> fileName<span class="token punctuation">.</span>txt <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableName

unload <span class="token keyword">to</span> ‘fileName<span class="token punctuation">.</span>dmp’ <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableName<span class="token punctuation">;</span>

unload <span class="token keyword">to</span> <span class="token operator">/</span>opt<span class="token operator">/</span>informix<span class="token operator">/</span>fileName<span class="token punctuation">.</span>csv <span class="token keyword">delimiter</span> <span class="token string">&quot;,&quot;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>导出前十行数据：</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>unload <span class="token keyword">to</span> <span class="token operator">/</span>home<span class="token operator">/</span>informix<span class="token operator">/</span>fileName<span class="token punctuation">.</span>csv  <span class="token keyword">delimiter</span> <span class="token string">&quot;,&quot;</span> <span class="token keyword">select</span>  <span class="token keyword">first</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：其中的delimiter是用来定义分隔符的，分隔符默认是&quot;| &quot; 但是也可以写为&quot; ，&quot;</p><h2 id="_2-表数据导入" tabindex="-1"><a class="header-anchor" href="#_2-表数据导入" aria-hidden="true">#</a> 2.表数据导入</h2><ul><li><strong>单个表数据导入</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">load</span> <span class="token keyword">from</span> table1<span class="token punctuation">.</span>txt <span class="token keyword">insert</span> <span class="token keyword">into</span> table1<span class="token punctuation">;</span>
<span class="token keyword">load</span> <span class="token keyword">from</span> <span class="token operator">/</span>home<span class="token operator">/</span>informix<span class="token operator">/</span>lihewei<span class="token operator">/</span>crbt_userringset<span class="token punctuation">.</span>txt <span class="token keyword">insert</span> <span class="token keyword">into</span> crbt_userringset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>批量导入：(方法一)</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 第一步：编写命令文件/home/informix/load.txt</span>
<span class="token keyword">FILE</span> table1<span class="token punctuation">.</span>txt <span class="token keyword">DELIMITER</span> <span class="token string">&#39;|&#39;</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token punctuation">(</span>此处的数字为表各中对应的字段数目<span class="token punctuation">)</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table1<span class="token punctuation">;</span>
<span class="token keyword">FILE</span> table2<span class="token punctuation">.</span>txt <span class="token keyword">DELIMITER</span> <span class="token string">&#39;|&#39;</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token punctuation">(</span>此处的数字为表各中对应的字段数目<span class="token punctuation">)</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table2<span class="token punctuation">;</span>
<span class="token keyword">FILE</span> table3<span class="token punctuation">.</span>txt <span class="token keyword">DELIMITER</span> <span class="token string">&#39;|&#39;</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token punctuation">(</span>此处的数字为表各中对应的字段数目<span class="token punctuation">)</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table3<span class="token punctuation">;</span>

<span class="token comment">-- 第二步：通过输入如下的dbload命令批量的导入三个表格数据：</span>
dbload <span class="token operator">-</span>d <span class="token keyword">database</span><span class="token punctuation">(</span>数据库名字<span class="token punctuation">)</span> <span class="token operator">-</span>c <span class="token operator">/</span>home<span class="token operator">/</span>informix<span class="token operator">/</span><span class="token keyword">load</span><span class="token punctuation">.</span>txt <span class="token operator">-</span>l aaa<span class="token punctuation">(</span>随便输入的日志名字<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>批量导入：(方法二)</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 第一步：编写导入脚步（load.sql）</span>
<span class="token keyword">load</span> <span class="token keyword">from</span> table1<span class="token punctuation">.</span>txt <span class="token keyword">DELIMITER</span> <span class="token string">&#39;|&#39;</span> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table1<span class="token punctuation">;</span>
<span class="token keyword">load</span> <span class="token keyword">from</span> table2<span class="token punctuation">.</span>txt <span class="token keyword">DELIMITER</span> <span class="token string">&#39;|&#39;</span> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table2<span class="token punctuation">;</span>
<span class="token keyword">load</span> <span class="token keyword">from</span> table3<span class="token punctuation">.</span>txt <span class="token keyword">DELIMITER</span> <span class="token string">&#39;|&#39;</span> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table3<span class="token punctuation">;</span>

<span class="token comment">-- 第二步：在dbaccess工具环境下直接输入</span>
dbaccess databaseName <span class="token operator">&lt;</span> <span class="token keyword">load</span><span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-表结构导出" tabindex="-1"><a class="header-anchor" href="#_3-表结构导出" aria-hidden="true">#</a> 3.表结构导出</h2><ul><li><strong>备份整个数据库的表结构：</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>dbschema <span class="token operator">-</span>d <span class="token keyword">database</span> <span class="token operator">&gt;</span> <span class="token keyword">database</span><span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>导出某个数据表的表结构</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>dbschema <span class="token operator">-</span>d your_database_name <span class="token operator">-</span>t your_table_name xxx<span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意： -d表示导出整个数据库的表结构，-t表示导出某一个数据表的表结构。</p><h2 id="_4-informix新建-删除表结构" tabindex="-1"><a class="header-anchor" href="#_4-informix新建-删除表结构" aria-hidden="true">#</a> 4.informix新建/删除表结构</h2><ul><li><strong>创建表，执行导出的sql脚本（xxx.sql为3中导出的表结构）</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>dbaccess 数据库名 xxx<span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>删除表数据</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> tableName<span class="token punctuation">;</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> tableName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>truncate:</strong></p><ol><li>truncate在使用时，不能加where条件。</li><li>truncate执行操作时，<strong>速度更快 且 不可回滚</strong>；是因为：TRUNCATE操作不会记录到事务日志中，而DELETE操作会记录到事务日志中，记录日志会耗时，所以TRUNCATE要快于DELETE 且 truncate不可回滚。</li><li>truncate删除表数据是：先删除整张表包括数据，再重新创建表，因此，若果表中有自增长，<strong>会把自增长id 重置成1开始</strong>。 delete删除表数据时， 每次从表中删除一行。</li><li>表和索引所占空间。 当表被TRUNCATE 后，这个表和索引所占用的空间会恢复到初始大小，而DELETE操作不会减少表或索引所占用的空间。drop语句将表所占用的空间全释放掉。</li><li>应用范围。TRUNCATE 只能对TABLE；DELETE可以是table和view</li><li>truncate、drop是DLL（data define language),操作立即生效，不会记录到事务日志中去</li><li><strong>在没有备份情况下，谨慎使用 drop 与 truncate</strong>。要删除部分数据行采用delete且注意结合where来约束影响范围</li></ol><h2 id="_5-informix存储过程执行流程" tabindex="-1"><a class="header-anchor" href="#_5-informix存储过程执行流程" aria-hidden="true">#</a> 5.informix存储过程执行流程</h2><ul><li><strong>informix存储过程执行流程</strong></li></ul><p>（1）登录到数据库informix目录下； （2）上传存储过程sync_user.sql; （3）执行命令dbaccess 数据库名 sync_user.sql； （4）执行命令<code>echo &#39;execute procedure crbt_sync_user_ability()&#39; | dbaccess</code> 数据库名;</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">-</span> <span class="token operator">*</span><span class="token operator">*</span>绑定存储过程<span class="token operator">*</span><span class="token operator">*</span>
  dbaccess <span class="token keyword">database</span> sync_user<span class="token punctuation">.</span><span class="token keyword">sql</span>

<span class="token operator">-</span> <span class="token operator">*</span><span class="token operator">*</span>删除绑定的存储过程<span class="token operator">*</span><span class="token operator">*</span>
  <span class="token keyword">drop</span> <span class="token keyword">procedure</span> crbt_sync_user_ability

<span class="token operator">-</span> <span class="token operator">*</span><span class="token operator">*</span>执行存储过程中的方法（在dbaccess中执行）<span class="token operator">*</span><span class="token operator">*</span>
  <span class="token keyword">execute</span> <span class="token keyword">procedure</span> crbt_sync_user_ability<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),l=[t];function p(r,c){return n(),a("div",null,l)}const d=s(o,[["render",p],["__file","informix数据导入导出操作.html.vue"]]);export{d as default};
