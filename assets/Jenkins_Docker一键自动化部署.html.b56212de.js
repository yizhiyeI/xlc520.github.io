const e=JSON.parse('{"key":"v-52b6bba0","path":"/dev/Jenkins+Docker%E4%B8%80%E9%94%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2.html","title":"Jenkins + Docker 一键自动化部署","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Jenkins + Docker 一键自动化部署","description":"环境：CentOS7 + Git (Gitee); 实现步骤：在 Docker 安装 Jenkins，配置 Jenkins 基本信息，利用 Dockerfile 和 Shell 脚本实现项目自动拉取打包并运行。; 一、安装 Docker 安装社区版本 Docker CE 1. 确保 yum 包更新到最新 2. 卸载旧版本（如果安装过旧版本的话） 3. ...","date":"2022-11-09T00:00:00.000Z","category":["Java"],"tag":["Java","Jenkins","Docker"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Jenkins+Docker%E4%B8%80%E9%94%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Jenkins + Docker 一键自动化部署"}],["meta",{"property":"og:description","content":"环境：CentOS7 + Git (Gitee); 实现步骤：在 Docker 安装 Jenkins，配置 Jenkins 基本信息，利用 Dockerfile 和 Shell 脚本实现项目自动拉取打包并运行。; 一、安装 Docker 安装社区版本 Docker CE 1. 确保 yum 包更新到最新 2. 卸载旧版本（如果安装过旧版本的话） 3. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-07T15:03:45.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Jenkins"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2022-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-07T15:03:45.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"一、安装 Docker","slug":"一、安装-docker","link":"#一、安装-docker","children":[{"level":3,"title":"1. 确保 yum 包更新到最新","slug":"_1-确保-yum-包更新到最新","link":"#_1-确保-yum-包更新到最新","children":[]},{"level":3,"title":"2. 卸载旧版本（如果安装过旧版本的话）","slug":"_2-卸载旧版本-如果安装过旧版本的话","link":"#_2-卸载旧版本-如果安装过旧版本的话","children":[]},{"level":3,"title":"3. 安装需要的软件包","slug":"_3-安装需要的软件包","link":"#_3-安装需要的软件包","children":[]},{"level":3,"title":"4. 设置 yum 源","slug":"_4-设置-yum-源","link":"#_4-设置-yum-源","children":[]},{"level":3,"title":"5. 安装 Docker","slug":"_5-安装-docker","link":"#_5-安装-docker","children":[]},{"level":3,"title":"6. 启动并设置开机启动","slug":"_6-启动并设置开机启动","link":"#_6-启动并设置开机启动","children":[]},{"level":3,"title":"7. 验证安装是否成功","slug":"_7-验证安装是否成功","link":"#_7-验证安装是否成功","children":[]}]},{"level":2,"title":"二、安装 Jenkins","slug":"二、安装-jenkins","link":"#二、安装-jenkins","children":[{"level":3,"title":"1. 安装 Jenkins","slug":"_1-安装-jenkins","link":"#_1-安装-jenkins","children":[]},{"level":3,"title":"2. 初始化 Jenkins","slug":"_2-初始化-jenkins","link":"#_2-初始化-jenkins","children":[]}]},{"level":2,"title":"三、系统配置","slug":"三、系统配置","link":"#三、系统配置","children":[{"level":3,"title":"1. 安装需要插件","slug":"_1-安装需要插件","link":"#_1-安装需要插件","children":[]},{"level":3,"title":"2. 配置 Maven","slug":"_2-配置-maven","link":"#_2-配置-maven","children":[]}]},{"level":2,"title":"","slug":"-1","link":"#-1","children":[]},{"level":2,"title":"四、创建任务","slug":"四、创建任务","link":"#四、创建任务","children":[{"level":3,"title":"1. 新建任务","slug":"_1-新建任务","link":"#_1-新建任务","children":[]},{"level":3,"title":"","slug":"-2","link":"#-2","children":[]},{"level":3,"title":"2. 源码管理","slug":"_2-源码管理","link":"#_2-源码管理","children":[]},{"level":3,"title":"","slug":"-3","link":"#-3","children":[]},{"level":3,"title":"3. 构建触发器","slug":"_3-构建触发器","link":"#_3-构建触发器","children":[]},{"level":3,"title":"4. 保存","slug":"_4-保存","link":"#_4-保存","children":[]}]},{"level":2,"title":"五、测试","slug":"五、测试","link":"#五、测试","children":[{"level":3,"title":"1. 构建","slug":"_1-构建","link":"#_1-构建","children":[]},{"level":3,"title":"","slug":"-4","link":"#-4","children":[]},{"level":3,"title":"2. 查看日志","slug":"_2-查看日志","link":"#_2-查看日志","children":[]},{"level":3,"title":"","slug":"-5","link":"#-5","children":[]},{"level":3,"title":"3. 查看项目位置","slug":"_3-查看项目位置","link":"#_3-查看项目位置","children":[]}]},{"level":2,"title":"六、运行项目","slug":"六、运行项目","link":"#六、运行项目","children":[{"level":3,"title":"1. Dockerfile","slug":"_1-dockerfile","link":"#_1-dockerfile","children":[]},{"level":3,"title":"","slug":"-6","link":"#-6","children":[]},{"level":3,"title":"2. 修改 Jenkins 任务配置","slug":"_2-修改-jenkins-任务配置","link":"#_2-修改-jenkins-任务配置","children":[]},{"level":3,"title":"3. 保存：点击保存即可；","slug":"_3-保存-点击保存即可","link":"#_3-保存-点击保存即可","children":[]},{"level":3,"title":"4. 构建：查看 Jenkins 控制台输出，输出如下，证明成功；","slug":"_4-构建-查看-jenkins-控制台输出-输出如下-证明成功","link":"#_4-构建-查看-jenkins-控制台输出-输出如下-证明成功","children":[]},{"level":3,"title":"5. 验证","slug":"_5-验证","link":"#_5-验证","children":[]}]}],"git":{"createdTime":1667833425000,"updatedTime":1667833425000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":4.48,"words":1343},"filePathRelative":"dev/Jenkins+Docker一键自动化部署.md","localizedDate":"2022年11月9日"}');export{e as data};
