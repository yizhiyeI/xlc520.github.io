import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,a as n}from"./app-41defce9.js";const r={},o=n('<h1 id="oracle数据库基础" tabindex="-1"><a class="header-anchor" href="#oracle数据库基础" aria-hidden="true">#</a> Oracle数据库基础</h1><p><strong>数据字典</strong>，数据库元数据信息的数据字典表和用户可以读取的数据字典视图组成。存放oracle数据库所用的有关信息。通过数据字典可以查看数据表和用户的一些信息。</p><p><strong>数据文件</strong>，一个oracle数据可以拥有一个或多个物理的数据文件，一个数据文件只对于一个数据库</p><p><strong>表空间</strong>，存储的逻辑结构，是组织数据和进行空间分配的逻辑结构。简单点，表空间就是一个或者多个数据文件的集合，所有的数据文件都被逻辑的存放在指定的表空间中。通常有system 、sysaux、 temp三个默认表空间。</p><p><strong>系统用户</strong>：sys，system，sysman，scott默认密码tigger，</p><p><strong>系统用户登入SQLplus</strong>：[system/123456][@server/ip][as sysdba/sysoper]管理员权限，@server/ip，数据库不在本机，需要输入IP。</p><p><strong>登入用户命令</strong>：connect sys/123456 as sysdba；connect system/123456</p><p><strong>查看当前登入用户</strong>：show user</p><p><strong>使用数据字典来查看信息</strong>：含有的字典有dba_users、user_users、dba_tablespaces，user_tablespaces(普通用户表空间)</p><p>可以使用desc来查看数据字典都有些什么字段， desc dba_users，之后可以使用select语句查看具体的记录。可以查看某个用户默认的表空间。</p><p><strong>启用用户的语句</strong>：alter user username account unlock。比如启动scoot用户alter user scott account unlock；这样就可以使用scott用户登入系统。</p><h2 id="表空间" tabindex="-1"><a class="header-anchor" href="#表空间" aria-hidden="true">#</a> <strong>表空间</strong></h2><p>这是数据库的逻辑存储空间，在数据库中开辟的一个空间来存储数据，oracle的很多优化都是通过表空间来实现的。表都是放在表空间的数据文件里面。</p><p>一个形象的比喻：在一个房间里面这个房间可以存储很多箱子，箱子里面可以存储物品！ 表空间可以看成房间，箱子可以看成数据文件物品可以看成表。 用户指定表空间也就是你希望把属于这个用户的表放在那个房间（表空间）里面。<br> 表空间是一个虚拟的概念可以无限大，但是需要由数据文件作为载体。</p><p><strong>为什么要创建表空间？</strong></p><p>答：在建立用户的时候，我们建议数据库管理员要指定用户的默认表空间。因为我们在利用CREATE语句创建数据库对象，如数据库表的时候，其默认是存储在数据库的当前默认空间。若不指定用户默认表空间的话，则用户每次创建数据库对象的时候，都要指定表空间，显然，这并不是很合理。不同的表空间有不同的权限控制。用户对于表空间A具有完全控制权限，可能对于表空间B就只有查询权限，甚至连连接的权限的都没有。所以，合理为用户配置表空间的访问权限，也是提高数据库安全性的一个方法。</p><p><strong>修改用户默认的表空间（管理员权限）</strong>：alter user username default | temporary tablespace tablename.</p><p><strong>创建表空间</strong>：create [temporary] tablespace tablename tempfile | datafile &#39;xxx.dbf&#39; size xx； (默认目录下)</p><p><strong>如何查看默认路径</strong>：通过数据字典dba_data_files；临时表空间dba_temp_files</p><p>select file_name from dba_data_files where tablesopace_name=&#39;XXX.dbf&#39;</p><p>设置表空间联机或脱机状态(无法使用表空间)，创建好表空间后默认是联机状态：alter tablespace tablename online | offline；</p><p><strong>设置表空间的只读或者只写</strong>：alter tablespace tablename read only | write only | read write;</p><p><strong>如何查看表空间所处的状态</strong>：通过status字段（dba_tablespaces）select statue from dba_tablespaces where tablespace_name=&#39;XXX.dbf&#39;;</p><p><strong>为表空间添加数据文件</strong>：alter tablespace tablename add datafile &#39;xxx.dbf&#39; size xx；可以从字典dba_data_files中file_name字段查看当前表空间的数据文件。</p><p><strong>删除表空间的数据文件</strong>：alter tablespace tablename drop datafile &#39;xxx.dbf&#39; ；不能删除第一条</p><p><strong>删除表空间</strong>：drop tablespace tablename [ including contents ] 如果只是删除表空间就直接使用drop。如果需要将表空间里面的文件也删除，就使用including。</p><p><strong>创建用户</strong>：create user 用户名 identified by 密码 default tablespace 表空间表；</p><p><strong>接着授权给新建的用户：</strong><br> grant connect,resource to news; --表示把 connect,resource权限授予news用户<br> ​grant dba to news; --表示把 dba权限授予给news用户</p><h2 id="表" tabindex="-1"><a class="header-anchor" href="#表" aria-hidden="true">#</a> <strong>表</strong></h2><p>存储数据的基本单位，表是一个二维结构，行列。数据类型：字符型、日期型、数值型、其他类型。</p><p><strong>字符型</strong>：char(n)、nchar(n)，固定的数据类型，如果没有达到N那么就自动补空格。</p><p>varchar2(n)、nvarchar2(n)，可变的数据类型，可以节省空间</p><p><strong>数值型</strong>：number（p,s）p有效数字，s小数点后的位数。float（）二进制。number（6，0）表示6位整数</p><p><strong>日期型</strong>：date</p><p><strong>其他类型</strong>：blob、clob，存储4GB的数据</p><p>**创建表：**create tabel table_name ( colum1_name datatype，colum2_name datatype <strong>default 默认值</strong> )；</p><p><strong>查看表结构</strong>：desc table_name</p><p><strong>修改表</strong>：alert table tablename add column_name datatype； 增加字段</p><p>alert table tablename modify column_name datatype；修改数据类型</p><p>alert table tablename drop column column_name ；删除字段</p><p>alert table tablename rename column column_oldname to column_newname；修改字段的名字</p><p>rename table_oldname to table_newname ；修改表名</p><p><strong>删除表</strong>：truncate table table_name；截断表中的数据，执行后，表字段在，但内容不在。</p><p>drop table table_name ；彻底删除表</p><p>操作表中的数据</p><p><strong>添加数据</strong>：insert into table_name [(column1, column2,....)] values(value1,value2,...)</p><p>alert table tablename modify column_name default 默认值</p><p><strong>复制表的数据</strong>：create table table_name <strong>as</strong> select column1,... from other_tablename ； 复制表中的内容</p><p>insert into table_name [(column1, column2,....)] select column1,* from table_old</p><p><strong>更新数据</strong>： update table_name set column1=value1,...[where conditions]</p><p><strong>删除数据</strong>：delete from table_name ; 删除全部数据和truncate一样，但是truncate效率高。</p><p>有条件删除，上面加上where子句。</p><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> <strong>约束</strong></h2><p>作用定义规则，那些字段是一定需要输入的，那些字段是需要唯一的等等，这样可以确保数据的完整性。</p><p><strong>非空约束</strong>：not null 在数据类型之后添加即可。id number(6,0) not null</p><p>alert table tablename <strong>modify</strong> column_name datatype null ; 将非空的改为可以为空</p><p><strong>主键约束</strong>：可以为一个字段，也可以是多个字段称为复合主键 primary key</p><p>create table name(column1,..., constraint keyname primary key(column1,column2))；复合约束</p><p>如果忘记了约束的名字，可以在<strong>数据字典user_constraints</strong>里面查看</p><p>alert table tablename add constraint keyname primary key(column1,column2))；表创建好后添加主键</p><p>alert table tablename rename constraint oldname to new_name；更改约束名字</p><p><strong>删除约束</strong>：alert table tablename disable | enable constaint name；禁用主键约束</p><p>alert table tablename drop constraint name</p><p>alert table tablename drop primary key [cascade]</p><p><strong>外键约束</strong>：alert table table1name (column_name datatype references table2name(column_name),..);</p><p>table2是主表，table1为从表，table2的column因为主键，对应字段的类型要一样。从表中的值来源于主表或者为空。</p><p>(add)constraint constraint_name foreign key(column) references table_name(column_name) [on delete cascade]</p><p>例子：create table userinfo (</p><p>id varchar(10),</p><p>name varchar(10),</p><p>typeid_new varchar(20) references typeid(typeid) on delete cascade</p><p>);</p><p><strong>唯一约束</strong>：unique，在字段名后加就可以，跟default使用一样的。</p><p>constraint constraint_name unique（column_name）</p><p><strong>检查约束</strong>：create table userinfo (</p><p>salary number(5,0) check( salary&gt;0 )</p><p>);</p><p>在SQLplus中可以使用以下语句更改显示的字段名、格式等：</p><p>col column_name heading new_name； 显示的名字</p><p>col column_name format a10； 更改字符型字段的长度，更改为10个字符长；</p><p>col column_name format 99; 更改数值型的显示位数，两位，保留一位小数99.9，也可以加上$</p><p>col column_name clear ；清楚之前设置的格式</p><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> <strong>查询</strong></h2><p>对原表不会有影响，只是对查询结果有影响</p><p>select [distinct] column_name as newname</p><p>from table</p><p>[where ]</p><p>order by column1 desc/asc, column2</p><p>order by对查询结果进行排序</p><p>group by 对查询结果进行分组，以汇总数据或者整个分组显示单行的汇总信息，在结果中每组数据都有一个与之对应的统计值（count、min、max、sum、avg）。计算每个username的平均分数，group by username。</p><p>select job_id, avg(salary), sum(salary),count(*) from employees group by job_id；最后结果上会显示出4列</p><p><strong>rollup</strong>：在结果上增加一行，汇总各列信息，group by rollup(job_id)</p><p>having子句是对分组后的结果进行进一步的筛选，having是作用在组上面的。对having子句作用的理解就是记住select语句中子句的处理顺序，在select语句中，首先由from子句找到数据表，where子句接受from子句输出的数据，而having子句则接受来自group by 、where和from子句的输出。</p><p>逻辑运算符的优先级：not、and、or</p><p>模糊查询：like、_（任意一个字符）、%（任意多个值）、</p><p>以a开头的：where like &#39;a%&#39;</p><p>含有a的用户名：where like &#39;%a%&#39;</p><p>case..when.：select username ,case when username =&#39;aaa&#39; then 计算机部门&#39;,</p><p>when &#39;bbb&#39; then &#39;市场部门&#39; else &#39;其他部门&#39; end as 部门</p><p>from users;</p><p>判断某列的值是否为null：column is NULL/is NOT NULL</p><h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> <strong>多表查询</strong></h2><p>from table1 join_type table2 [on(join_condition)]</p><p>join_type有内连接（inner join），自然连接（natural join）、外连接。</p><p><strong>内连接</strong>：需要指定连接的条件，只返回符合条件和连接条件的行，消除不匹配的行。</p><p><strong>自然连接</strong>：第一个表中的那些列与第二表中具有相同名称的列进行连接，bU需要明确指出进行连接的列。</p><p><strong>外连接</strong>：扩展内连接的结果集，出返回匹配的结果集，还会返回不匹配的结果集。外连接有以下几种</p><p><strong>左外连接</strong>（left [outer] join）：显示左表中不匹配的行，满足where条件但不与右表匹配的行</p><p><strong>右外连接</strong>（right [outer] join）：显示右表中不匹配的行，满足where条件但不与左表匹配的行</p><p><strong>全外连接</strong>（full [outer] join）：显示所有符合搜索条件的行</p><p><code>grant &lt;权限&gt;，&lt;权限&gt; [on&lt;对象类型&gt;&lt;对象名&gt;] to &lt;用户&gt; [with admin option](可以授予给他人)</code></p>',111),s=[o];function p(l,c){return a(),t("div",null,s)}const d=e(r,[["render",p],["__file","Oracle数据库基础.html.vue"]]);export{d as default};
