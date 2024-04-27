import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as l,b as t,e as s,d as e,a as n}from"./app-CXNU22eb.js";const c={},p=n('<h1 id="e5-调用-api-续订服务-microsoft-365-e5-renew-x" tabindex="-1"><a class="header-anchor" href="#e5-调用-api-续订服务-microsoft-365-e5-renew-x"><span>E5 调用 API 续订服务：Microsoft 365 E5 Renew X</span></a></h1><p>Microsoft 365 E5 Renew X 是一款网页版的 E5 续订服务，其依赖网页浏览器呈现支持用户多端操作，完全将 E5 账户 API 调用托管在了服务器端因此用户无需电脑也可使用。</p><h2 id="microsoft-365-e5-renew-x-由来" tabindex="-1"><a class="header-anchor" href="#microsoft-365-e5-renew-x-由来"><span>Microsoft 365 E5 Renew X 由来</span></a></h2><p>Microsoft 365 E5 Renew X 为 Microsoft 365 E5 Web 的升级版，相对于旧版其增强了管理功能且更容易部署，API 调用内核继承于续订桌面版软件 Microsoft 365 E5 Renew Plus。</p><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能</span></a></h2><h3 id="用户端" tabindex="-1"><a class="header-anchor" href="#用户端"><span>用户端</span></a></h3><ul><li><strong>两种可选的调用权限</strong>：用户未登录作为守护程序调用(需要客户端密码)、程序以登录用户身份直接调用(需要账户密码)</li><li><strong>API 种类齐全</strong>：41/30 个可选的 Microsoft Graph REST API Beta 中的 API(未来可能会继续添加)</li><li><strong>完全随机的 API 调用模式</strong>：从已选定的 API 序列中随机抽取一个或几个进行调用（个数和 API 随机）</li><li><strong>完全随机的 API 调用时间间隔</strong>：随机区段 1000s-2000s 固定</li><li><strong>完全随机的 API 内容(仅部分 API 支持)</strong>：发送邮件的内容随机 Onedirve 上传文件的内容随机</li><li><strong>邮件通知服务</strong>：支持设置通知邮箱，调用异常会通过邮件通知无需反复登录查看</li></ul><h3 id="部署端" tabindex="-1"><a class="header-anchor" href="#部署端"><span>部署端</span></a></h3><ul><li><strong>平台兼容性</strong>：使用 Asp.Net Core 作为跨平台框架增适用于 <strong>Windows|Linux|MacOS x64|x86|ARM64|ARM</strong></li><li><strong>灵活部署</strong>：支持<strong>开放站点部署</strong>和<strong>私享部署</strong>，私享部署不再强制要求配置 Https 和 OAuth</li><li><strong>无需数据库</strong>：不需要后台数据库支持，前后台一体化程序</li><li><strong>用户后台管理</strong>：可修改用户的 E5 账户数量，以及封删管理</li><li><strong>系统状态监视</strong>：系统占用率一目了然，可控的站点注册通道更容易控制系统用户数量</li><li><strong>自定义页面</strong>：支持自定义 HTML 静态页面，可设置支付宝、微信收款码</li><li><strong>显示 ICP 备案</strong>：支持 ICP 备案文字显示，可在国内备案建站</li><li><strong>无人值守 运行自动暂停</strong>：可自动暂停有错误率过高的账号 API 调用</li><li><strong>无人值守 自动恢复运行</strong>：可定期自动恢复全部账号的 API 调用，防止因微软网络原因触发大量账号停止 API 调用进而导致的账号续期失败</li></ul><h1 id="用户端使用教程-请勿开启账号的双重验证功能" tabindex="-1"><a class="header-anchor" href="#用户端使用教程-请勿开启账号的双重验证功能"><span>用户端使用教程**(请勿开启账号的双重验证功能)</span></a></h1><h2 id="可用站点" tabindex="-1"><a class="header-anchor" href="#可用站点"><span>可用站点</span></a></h2><h3 id="主站" tabindex="-1"><a class="header-anchor" href="#主站"><span>主站</span></a></h3>',12),h={href:"https://e5.sundayrx.net/",target:"_blank",rel:"noopener noreferrer"},g=t("strong",null,"主站：https://e5.sundayrx.net（由 SundayRX 运营）(可登录不可注册)",-1),d={href:"https://ms-e5-renew.leeskyler.top:11015/",target:"_blank",rel:"noopener noreferrer"},b=t("strong",null,"分站：https://ms-e5-renew.leeskyler.top:11015（由 leeskyler 运营）(已关停)",-1),m={href:"https://ms-e5-renew-3.eastern.moe/",target:"_blank",rel:"noopener noreferrer"},u=t("strong",null,"分站：https://ms-e5-renew-3.eastern.moe（由 leeskyler 运营）(已关停)",-1),_=t("h3",{id:"自建共享站点",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#自建共享站点"},[t("span",null,"自建共享站点")])],-1),f={href:"https://ew.chirmyram.com/",target:"_blank",rel:"noopener noreferrer"},k=t("strong",null,"自建共享站：https://ew.chirmyram.com（由 七米蓝 运营）(可登录不可注册)",-1),x={href:"https://e5.hm0420.cc/",target:"_blank",rel:"noopener noreferrer"},w=t("strong",null,"自建共享站：https://e5.hm0420.cc（由 小冰酱 运营）",-1),P={href:"https://ms-e5.hm0420.cc/",target:"_blank",rel:"noopener noreferrer"},A=t("strong",null,"自建共享站：https://ms-e5.hm0420.cc（由 小冰酱 运营）",-1),y={href:"https://e5.xzh.gs/",target:"_blank",rel:"noopener noreferrer"},I=t("strong",null,"自建共享站：https://e5.xzh.gs（由 XZH 运营）",-1),E={href:"https://e5.tianli0.top/",target:"_blank",rel:"noopener noreferrer"},T=t("strong",null,"自建共享站：https://e5.tianli0.top（由 Tinali 运营）",-1),v={href:"https://renew.lrize.xyz/",target:"_blank",rel:"noopener noreferrer"},z=t("strong",null,"自建共享站：https://renew.lrize.xyz（由 Lrize、 运营）",-1),S={href:"https://e5zh.xyz/",target:"_blank",rel:"noopener noreferrer"},X=t("strong",null,"自建共享站：https://e5zh.xyz（由 z 运营）",-1),M=t("h2",{id:"_1-注册-azure-应用程序",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-注册-azure-应用程序"},[t("span",null,"1 注册 Azure 应用程序")])],-1),F=t("h3",{id:"_1-1-应用注册",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-1-应用注册"},[t("span",null,"1.1 应用注册")])],-1),R={href:"https://portal.azure.com/#home",target:"_blank",rel:"noopener noreferrer"},C={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},D=t("strong",null,"管理员账户",-1),H=t("a",{href:"mailto:XXXX@YYYY.onmicrosoft.com"},"XXXX@YYYY.onmicrosoft.com",-1),L={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},N=t("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618170032256-165380585664583.png",alt:"图片",loading:"lazy"},null,-1),O=t("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061817051341-165380585814786.png",alt:"图片",loading:"lazy"},null,-1),U=t("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618170801323-165380585941389.png",alt:"图片",loading:"lazy"},null,-1),B=t("h3",{id:"_1-2-配置应用重定向-url-身份验证",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-2-配置应用重定向-url-身份验证"},[t("span",null,"1.2 配置应用重定向 URL（身份验证）")])],-1),q=t("strong",null,'下图中的应用程序(客户端)ID 即为"客户端 ID"',-1),G=t("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061817121972-165380586091892.png",alt:"图片",loading:"lazy"},null,-1),Z=t("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618171501396-165380586226995.png",alt:"图片",loading:"lazy"},null,-1),K={href:"https://login.microsoftonline.com/common/oauth2/nativeclient%E2%80%9D%E4%B9%9F%E5%8F%AF%E6%89%8B%E5%8A%A8%E6%B7%BB%E5%8A%A0%E3%80%82",target:"_blank",rel:"noopener noreferrer"},Q=t("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618171651338-165380586350298.png",alt:"图片",loading:"lazy"},null,-1),V=t("img",{src:"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618171850779-1653805864822101.png",alt:"图片",loading:"lazy"},null,-1),Y=n('<h2 id="_2-配置应用程序的-api-权限-重要" tabindex="-1"><a class="header-anchor" href="#_2-配置应用程序的-api-权限-重要"><span>2 配置应用程序的 API 权限（重要）</span></a></h2><p><strong>小白提示：建议选择“委托的权限(用户登录)”该权限类型，调用 API 较多，操作步骤较少简单粗暴，调用成功几率高</strong></p><p>注册的应用程序 API 权限类型有两种，其主要区别如下表所示：</p><table><thead><tr><th>权限类型</th><th><strong>委托的权限(用户登录)</strong></th><th><strong>应用程序权限(非用户登录)</strong></th></tr></thead><tbody><tr><td>官方释义</td><td>应用程序必须以登录用户身份访问 API</td><td>应用程序在用户未登录的情况下作为后台服务或守护程序运行</td></tr><tr><td>需要的信息</td><td>账户名称+账户密码+应用程序(客户端)ID</td><td>账户名称+客户端机密+应用程序(客户端)ID</td></tr><tr><td>功能影响</td><td>程序中所有 API 均可调用</td><td>部分 API 权限受限无法调用(官方限制)</td></tr><tr><td>API 权限配置</td><td>可由 PC 版程序自动配置添加 API 权限</td><td>必须手动配置 API 权限</td></tr><tr><td>显示颜色标识</td><td>蓝色</td><td>深青色</td></tr></tbody></table><p><strong>以下是登录或非登录所需要的权限列表</strong>： <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201102171130141.png" alt="图片" loading="lazy"></p><p>最后根据所选的 API 权限类型在：<strong>2.1 选择“委托的权限(用户登录)”类型的 API</strong>或者**2.2 选择“应用程序权限(非用户登录)”类型的 API **中选择性阅读。</p><h3 id="_2-1-选择-委托的权限-用户登录-类型的-api" tabindex="-1"><a class="header-anchor" href="#_2-1-选择-委托的权限-用户登录-类型的-api"><span>2.1 选择“委托的权限(用户登录)”类型的 API</span></a></h3><h4 id="手动配置-api-权限" tabindex="-1"><a class="header-anchor" href="#手动配置-api-权限"><span>手动配置 API 权限</span></a></h4><p>1.点击“API 权限”-“添加权限”-“Microsoft Graph” <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061819283823-1653805868573106.png" alt="图片" loading="lazy"> 2.选择“委托的权限”<img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618172538991-1653805869901109.png" alt="图片" loading="lazy"> 3.根据编辑页面中列出的 API 权限需求表（注意在程序中切换为&quot;<strong>登录</strong>“）来勾选所对应的 API 权限，全部选择完成后点击&quot;添加权限”。 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201102171303292.png" alt="图片" loading="lazy"><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618172627969-1653805874862114.png" alt="图片" loading="lazy"> 添加完成的效果如图 <strong>如果没有“代表 XXX 授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用</strong><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201112111140479.png" alt="图片" loading="lazy"></p><p>4.最后点击代表 XXX 授予管理员同意,对话框选择“是”（该图包含了当前程序“委托的权限(用户登录)”全部 API 所需要的权限）。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201112110505347.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="_2-2-选择-应用程序权限-非用户登录-类型的-api" tabindex="-1"><a class="header-anchor" href="#_2-2-选择-应用程序权限-非用户登录-类型的-api"><span>2.2 选择“应用程序权限(非用户登录)”类型的 API</span></a></h3><h4 id="_2-2-1-手动配置-api-权限" tabindex="-1"><a class="header-anchor" href="#_2-2-1-手动配置-api-权限"><span>2.2.1 手动配置 API 权限</span></a></h4><p>1.点击“API 权限”-“添加权限”-“Microsoft Graph” <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061819283823-1653805879510121.png" alt="图片" loading="lazy"> 2.选择“应用程序权限” <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200801120027971-1653805882870124.png" alt="图片" loading="lazy"> 3.根据编辑页面中列出的 API 权限需求表（注意在程序中切换为&quot;<strong>非登录</strong>“）来勾选所对应的 API 权限，全部选择完成后点击&quot;添加权限”。 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201102171349129.png" alt="图片" loading="lazy"><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618172627969-1653805884862127.png" alt="图片" loading="lazy"> 添加完成的效果如图 <strong>如果没有“代表 XXX 授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用</strong><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200801120623311-1653805887894132.png" alt="图片" loading="lazy"> 4.最后点击代表 XXX 授予管理员同意,对话框选择“是”（该图包含了当前程序“应用程序权限(非用户登录)”全部 API 所需要的权限）。 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200801120818260-1653805889622135.png" alt="图片" loading="lazy"></p><h4 id="_2-2-2-创建客户端密码" tabindex="-1"><a class="header-anchor" href="#_2-2-2-创建客户端密码"><span>2.2.2 创建客户端密码</span></a></h4><p>1.点击“证书密码”-“新客户端密码”-“24 个月”-“添加” <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210609101116972-1653805890998138.png" alt="图片" loading="lazy"> 2.点击“值”该列中的“复制”（不要复制&quot;ID&quot;列中的值），并立即将该密码保存至电脑，<strong>保存的值即为“客户端密码”</strong>， 注：该值必须立即保存，退出该页面后将永远无法查看。 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020120711360840.jpeg" alt="图片" loading="lazy"></p><h2 id="_3-将账号-api-调用托管至服务" tabindex="-1"><a class="header-anchor" href="#_3-将账号-api-调用托管至服务"><span>3 将账号 API 调用托管至服务</span></a></h2><h5 id="创建一个新的-e5-子账户-可选步骤" tabindex="-1"><a class="header-anchor" href="#创建一个新的-e5-子账户-可选步骤"><span>创建一个新的 E5 子账户(可选步骤)</span></a></h5><p>登入 E5 管理员账户进入管理员界面，创建一个新的子账户，使用这个子账户登录程序调用 API。 为什么建议这样做：Microsoft 365 E5 Renew 中的部分 API 包含了写操作，例如邮件和 Onedrive 的 API，这些 API 在随机模式下会生成大量垃圾邮件和文件（虽然单独为此设立了一个文件夹），部分人可能会对此行为非常介意，而且程序频繁的读写可能会对您正常使用账户造成影响，因此不建议使用管理员账户登录。</p><h3 id="_3-1-进入网站注册并登录账户" tabindex="-1"><a class="header-anchor" href="#_3-1-进入网站注册并登录账户"><span>3.1 进入网站注册并登录账户</span></a></h3><p>从一开始的可用站点，选择站点进入（记住无论使用任何人运营网站显示内容都是基本相同的）</p><p>从两种登录中任选一个，这里不建议选择 GitHub 登录（GitHub 的第三方登录很迷经常性崩溃）</p><p>第一次登录账户系统会显示注册成功，然后再登录一次即可登录进入系统 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16.png" alt="请添加图片描述" loading="lazy"></p><h3 id="_3-2-激活您的账户" tabindex="-1"><a class="header-anchor" href="#_3-2-激活您的账户"><span>3.2 激活您的账户</span></a></h3><p>阅读并同意用户协议，点击激活账户 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16-1653805902079145.png" alt="请添加图片描述" loading="lazy"></p><h3 id="_3-3-添加一个-e5-账户的运行配置信息" tabindex="-1"><a class="header-anchor" href="#_3-3-添加一个-e5-账户的运行配置信息"><span>3.3 添加一个 E5 账户的运行配置信息</span></a></h3><p>在成功登录系统后，页面会自动跳转到“主页”页面，在“账户详情”页面点击“添加运行账号”按钮，前往“账户运行配置”页面 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/2375b23f6de74f5e9d9ff37bca1e7dcc.png" alt="请添加图片描述" loading="lazy"></p><p>在账户运行配置页面中填写账户信息，且登录调用填写账户密码、非登录调用填写客户端密码，并选择自己选定的调用方式，注意调用方式不要选错了！！！ 最后点击“添加运行账号”按钮完成配置。 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/eb5d982940a340719b4b5dbd1a46420c.png" alt="请添加图片描述" loading="lazy"> 由于前后台数据同步需要时间，任何添加账户或者修改账户配置信息的操作都不会立即被后台执行。</p><p>返回用户页面查看账户信息中的“配置同步状态”，如果显示为“正在运行”表明配置已经上传至后台，修改账户配置成功。 **警示：配置成功了也要定期来看看自己的账户是否在正常运行（虽然有邮件通知服务），但也建议每月查看一次账户状态！！！ **<img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/3b2651537fee45088202efd02cad6d74.png" alt="请添加图片描述" loading="lazy"></p><h3 id="_3-4-设置一个通知邮箱-可选" tabindex="-1"><a class="header-anchor" href="#_3-4-设置一个通知邮箱-可选"><span>3.4 设置一个通知邮箱（可选）</span></a></h3><p>在任何页面下 点击右上角“用户名-账户设置”，进入个人信息设置 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/8229363a593549bbb884960e65875673.png" alt="请添加图片描述" loading="lazy"> 记住你的 UID，出现任何问题请使用这个 UID 与你所选站点的管理员沟通 编辑你的邮箱 并点击保存 <img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/fea87de6e5774a319c4b4a2e818d3341.png" alt="请添加图片描述" loading="lazy"></p><h1 id="部署端-请勿使用任何-cookie-缓存加速服务" tabindex="-1"><a class="header-anchor" href="#部署端-请勿使用任何-cookie-缓存加速服务"><span>部署端**(请勿使用任何 Cookie 缓存加速服务)</span></a></h1><h2 id="服务下载-作为站长务必注意查看主站中-关于-页面中的程序发布时间-及时更新服务程序" tabindex="-1"><a class="header-anchor" href="#服务下载-作为站长务必注意查看主站中-关于-页面中的程序发布时间-及时更新服务程序"><span>服务下载(作为站长务必注意查看<strong>主站</strong>中“<strong>关于</strong>”页面中的<strong>程序发布时间</strong>，及时更新服务程序)</span></a></h2><h3 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式"><span>传统方式</span></a></h3>',34),W={href:"https://sundayrx.lanzoui.com/aW09Lsss75g",target:"_blank",rel:"noopener noreferrer"},j=t("strong",null,"下载服务程序源文件（https://sundayrx.lanzoui.com/aW09Lsss75g）",-1),J={href:"https://docs-1.leeskyler.top/",target:"_blank",rel:"noopener noreferrer"},$=t("strong",null,"参阅 Skyler 的部署帮助文档（https://docs-1.leeskyler.top）",-1),tt={href:"https://www.gladtbam.top/posts/37680/",target:"_blank",rel:"noopener noreferrer"},et=t("strong",null,"参阅 Gladtbam 的部署帮助文档 （https://www.gladtbam.top/posts/37680）",-1),at=t("h3",{id:"docker-方式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#docker-方式"},[t("span",null,"Docker 方式")])],-1),st={href:"https://blog.csdn.net/qq_40605167/article/details/122888580",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://www.gladtbam.top/posts/22256/",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://www.bilibili.com/read/cv16338214",target:"_blank",rel:"noopener noreferrer"},rt=t("strong",null,"参阅 Curious 的部署帮助文档 （https://www.bilibili.com/read/cv16338214）",-1),it=t("h2",{id:"传统方式服务部署",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#传统方式服务部署"},[t("span",null,"传统方式服务部署")])],-1),lt=t("h3",{id:"安装运行环境",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#安装运行环境"},[t("span",null,"安装运行环境")])],-1),ct=t("em",null,[e("以下示例可能不完全包含全部操作系统，但无论是哪种系统都要安装 "),t("strong",null,"Asp.Net Core 3.1 SDK"),e(" 支持包，服务程序运行依赖于这个包也只依赖这一个包，只要成功安装了"),t("strong",null,"Asp.Net Core 3.1 SDK"),e("支持包，服务程序就可以正常运行！")],-1),pt={href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/",target:"_blank",rel:"noopener noreferrer"},ht=t("h4",{id:"windows",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#windows"},[t("span",null,"Windows")])],-1),gt={href:"https://dotnet.microsoft.com/download/dotnet/3.1",target:"_blank",rel:"noopener noreferrer"},dt=t("strong",null,"最新的 Asp.Net Core 3.1 SDK",-1),bt=t("h4",{id:"ubuntu",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ubuntu"},[t("span",null,"Ubuntu")])],-1),mt={href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-ubuntu",target:"_blank",rel:"noopener noreferrer"},ut=n(`<p><strong>Ubuntu 21.04</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://packages.microsoft.com/config/ubuntu/21.04/packages-microsoft-prod.deb <span class="token parameter variable">-O</span> packages-microsoft-prod.deb
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> packages-microsoft-prod.deb
<span class="token function">rm</span> packages-microsoft-prod.deb
<span class="token number">123</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update<span class="token punctuation">;</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> apt-transport-https <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> aspnetcore-runtime-3.1
<span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>CentOS</span></a></h4>`,3),_t={href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-centos",target:"_blank",rel:"noopener noreferrer"},ft=t("p",null,[t("strong",null,"CentOS 8"),t("code",null,"sudo dnf install dotnet-sdk-3.1"),t("strong",null,"CentOS 7"),t("code",null,"sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm"),t("code",null,"sudo yum install dotnet-sdk-3.1")],-1),kt=t("h4",{id:"macos",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#macos"},[t("span",null,"MacOS")])],-1),xt={href:"https://dotnet.microsoft.com/download/dotnet/3.1",target:"_blank",rel:"noopener noreferrer"},wt=t("strong",null,"最新的 Asp.Net Core 3.1 SDK",-1),Pt=n('<h3 id="填写配置信息" tabindex="-1"><a class="header-anchor" href="#填写配置信息"><span>填写配置信息</span></a></h3><p><strong><em>站点拥有开放和私用两种模式，请根据自己的部署目的来选择对应的教程来阅读！</em><em>配置文件是 Deploy/Config.xml 务必打开并修改默认的管理员登录密码</em></strong></p><h4 id="开放站点" tabindex="-1"><a class="header-anchor" href="#开放站点"><span>开放站点</span></a></h4><p><em>开放站点必须使用全链路 HTTPS，即便是使用了 Nginx 反向代理也必须设置 HTTPS 为启用状态</em></p><p><strong>Configuration.ShareSite.Enable</strong>设置为 true</p><h5 id="https-ssl-证书" tabindex="-1"><a class="header-anchor" href="#https-ssl-证书"><span>HTTPS SSL 证书</span></a></h5><h6 id="方式-1-服务程序-kestrel—-https-—外部-internet" tabindex="-1"><a class="header-anchor" href="#方式-1-服务程序-kestrel—-https-—外部-internet"><span>方式 1：服务程序 Kestrel—(HTTPS)—外部 Internet</span></a></h6><p><em>准备一个 PFX 格式的 SSL 证书文件，放置在 Deploy 文件夹中</em></p><p><strong>Configuration.HTTPS.Enable</strong>设置为 true <strong>Configuration.HTTPS.Certificate</strong>设置为 PFX 文件的名称带后缀名 <strong>Configuration.HTTPS.Password</strong>设置为 PFX 文件的密码</p><h6 id="方式-2-服务程序-kestrel—-https-localhost-—nginx-iis-apache—-https-外部访问域名-—外部-internet" tabindex="-1"><a class="header-anchor" href="#方式-2-服务程序-kestrel—-https-localhost-—nginx-iis-apache—-https-外部访问域名-—外部-internet"><span>方式 2：服务程序 Kestrel—(HTTPS localhost)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部 Internet</span></a></h6><p><em>反向代理服务器部分请自行配置</em></p><p>执行下列两个命令 以创建 localhsot HTTPS 证书 该证书时效为 1 年 <code>dotnet dev-certs https --clean</code><code>dotnet dev-certs https --trust</code></p><p><strong>Configuration.HTTPS.Enable</strong>设置为 true <strong>Configuration.HTTPS.Certificate</strong>设置为空（什么都不要填） <strong>Configuration.HTTPS.Password</strong>设置为空（什么都不要填）</p><h5 id="microsoft-oauth" tabindex="-1"><a class="header-anchor" href="#microsoft-oauth"><span>Microsoft OAuth</span></a></h5><h5 id="github-oauth" tabindex="-1"><a class="header-anchor" href="#github-oauth"><span>Github OAuth</span></a></h5><h5 id="smtp-邮件服务" tabindex="-1"><a class="header-anchor" href="#smtp-邮件服务"><span>SMTP 邮件服务</span></a></h5><p><em>准备一个可以使用 SMTP 服务发信的邮箱</em></p><p><strong>Configuration.ShareSite.SMTP.Email</strong>设置为 发件人邮箱地址 <strong>Configuration.ShareSite.SMTP.Password</strong>设置为 邮箱密钥 <strong>Configuration.ShareSite.SMTP.Host</strong>设置为 发件人邮箱的 SMTP 服务器地址 (以 Outlook 为例子是 smtp.office365.com)</p><h4 id="私用" tabindex="-1"><a class="header-anchor" href="#私用"><span>私用</span></a></h4><p><em>在私用模式下不用准备任何配置信息，填写好登录密码端口即可使用！</em></p><h5 id="启用-https-选配" tabindex="-1"><a class="header-anchor" href="#启用-https-选配"><span>启用 HTTPS（选配）</span></a></h5><p><em>若要启用 HTTPS 请在下面选择一种合适的方式来实现</em></p><h6 id="方式-1-服务程序-kestrel—-https-—外部-internet-1" tabindex="-1"><a class="header-anchor" href="#方式-1-服务程序-kestrel—-https-—外部-internet-1"><span>方式 1：服务程序 Kestrel—(HTTPS)—外部 Internet</span></a></h6><p><em>准备一个 PFX 格式的 SSL 证书文件，放置在 Deploy 文件夹中</em></p><p><strong>Configuration.HTTPS.Enable</strong>设置为 true <strong>Configuration.HTTPS.Certificate</strong>设置为 PFX 文件的名称带后缀名 <strong>Configuration.HTTPS.Password</strong>设置为 PFX 文件的密码</p><h6 id="方式-2-服务程序-kestrel—-http-—nginx-iis-apache—-https-外部访问域名-—外部-internet" tabindex="-1"><a class="header-anchor" href="#方式-2-服务程序-kestrel—-http-—nginx-iis-apache—-https-外部访问域名-—外部-internet"><span>方式 2：服务程序 Kestrel—(HTTP)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部 Internet</span></a></h6><p><em>反向代理服务器部分请自行配置</em></p><p><strong>Configuration.HTTPS.Enable</strong>设置为 false</p><h3 id="启动服务程序" tabindex="-1"><a class="header-anchor" href="#启动服务程序"><span>启动服务程序</span></a></h3><p>在任何系统下，打开命令行定位到程序目录 运行<code>dotnet Microsoft365_E5_Renew_X.dll</code>命令即可启动</p><h3 id="管理员登录" tabindex="-1"><a class="header-anchor" href="#管理员登录"><span>管理员登录</span></a></h3><h4 id="非-oauth-后台登录-开放或私享部署皆可用" tabindex="-1"><a class="header-anchor" href="#非-oauth-后台登录-开放或私享部署皆可用"><span>非 OAuth 后台登录（开放或私享部署皆可用）</span></a></h4><p>管理员登录路由 <code>/Admin/Login</code> 默认密码在配置文件 Deploy/Config.xml 中更改</p><h4 id="oauth-认证登录-仅开放部署可用" tabindex="-1"><a class="header-anchor" href="#oauth-认证登录-仅开放部署可用"><span>OAuth 认证登录（仅开放部署可用）</span></a></h4><h5 id="设置管理员-oauth-登录的-oauthid" tabindex="-1"><a class="header-anchor" href="#设置管理员-oauth-登录的-oauthid"><span>设置管理员 OAuth 登录的 OAuthID</span></a></h5><p>使用想要关联的 OAuth 账号（Microsoft/Github）在任意站点登录/注册均可看到此账号的 OAuthID,记录此 ID</p><p>通过管理员密码登录自己的站点：管理员功能-用户列表 找到管理员账户 点击“编辑”按钮填写记录的 OAuthID 保存</p><p>直接在主登录页面使用与管理员账户关联的 OAuth 账号登录即可</p>',38);function At(yt,It){const a=r("ExternalLinkIcon");return i(),l("div",null,[p,t("p",null,[t("a",h,[g,s(a)])]),t("p",null,[t("a",d,[b,s(a)])]),t("p",null,[t("a",m,[u,s(a)])]),_,t("p",null,[t("a",f,[k,s(a)])]),t("p",null,[t("a",x,[w,s(a)])]),t("p",null,[t("a",P,[A,s(a)])]),t("p",null,[t("a",y,[I,s(a)])]),t("p",null,[t("a",E,[T,s(a)])]),t("p",null,[t("a",v,[z,s(a)])]),t("p",null,[t("a",S,[X,s(a)])]),M,F,t("ol",null,[t("li",null,[t("a",R,[e("点击登录 Azure"),s(a)]),e(" 或"),t("a",C,[e("点击直接进入 Azure 应用注册"),s(a)]),e(" ，登录账号使用申请到的 Microsoft 365 E5 的"),D,e("（账户名类似"),H,e("格式）。 2.登录完成后点击右上角的“门户”按钮进入 Azure 管理中心，在搜索栏内输入“应用注册”，点击进入"),t("a",L,[e("（若应用注册搜索不到请点击此处直接进入）"),s(a)]),e("。 "),N,e(" 3.单击“新注册”按钮 "),O,e(" 4.配置应用 应用名称随意写、注意可访问性选项选择最后一项、重定向 URL 暂时不填 、完成后点击注册 "),U])]),B,t("p",null,[e("1.先点击“概述”，然后点击“添加重定向 URL”，进入重定向 URL 配置界面，"),q,e("。 "),G,e(" 2.点击“添加平台”，再点击“移动和桌面应用程序”， "),Z,e(" 3.继续勾选中第一个 URL，最后点击底部的“配置”，该 URL 为“"),t("a",K,[e("https://login.microsoftonline.com/common/oauth2/nativeclient”也可手动添加。"),s(a)]),Q,e(" 4.配置默认客户端类型将应用程序视为公共客户端 点击切换按钮为“是” ，最后点击“保存”按钮保存。 "),V]),Y,t("p",null,[t("a",W,[j,s(a)])]),t("p",null,[t("a",J,[$,s(a)]),t("a",tt,[et,s(a)])]),at,t("p",null,[t("a",st,[e("**参阅 韩韩的 Docker 版部署帮助文档（https://blog.csdn.net/qq_40605167/article/details/122888580） **"),s(a)]),t("a",nt,[e("**参阅 Gladtbam 的 Docker 版部署帮助文档（https://www.gladtbam.top/posts/22256/） **"),s(a)]),t("a",ot,[rt,s(a)])]),it,lt,t("p",null,[ct,e(" 详情请参阅"),t("a",pt,[e("在 Windows、Linux 和 macOS 上安装 .NET"),s(a)])]),ht,t("p",null,[e("前往"),t("a",gt,[e("https://dotnet.microsoft.com/download/dotnet/3.1"),s(a)]),e(" 下载安装"),dt,e(" 安装包")]),bt,t("p",null,[e("详情请参阅"),t("a",mt,[e("在 Ubuntu 上安装 .NET SDK 或 .NET 运行时"),s(a)])]),ut,t("p",null,[e("详情请参阅"),t("a",_t,[e("在 CentOS 上安装 .NET SDK 或 .NET 运行时"),s(a)])]),ft,kt,t("p",null,[e("前往"),t("a",xt,[e("https://dotnet.microsoft.com/download/dotnet/3.1"),s(a)]),e(" 下载安装"),wt,e(" 安装包")]),Pt])}const vt=o(c,[["render",At],["__file","Microsoft-365-E5-RenewX.html.vue"]]),zt=JSON.parse('{"path":"/other/Microsoft-365-E5-RenewX.html","title":"E5 调用API续订服务：Microsoft 365 E5 Renew X","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"E5 调用API续订服务：Microsoft 365 E5 Renew X","excerpt":null,"description":"E5 调用 API 续订服务：Microsoft 365 E5 Renew X Microsoft 365 E5 Renew X 是一款网页版的 E5 续订服务，其依赖网页浏览器呈现支持用户多端操作，完全将 E5 账户 API 调用托管在了服务器端因此用户无需电脑也可使用。 Microsoft 365 E5 Renew X 由来 Microsoft 3...","date":"2022-06-12T00:00:00.000Z","category":"other","tag":["other","E5","office"],"article":true,"timeline":true,"icon":"others","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/other/Microsoft-365-E5-RenewX.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"E5 调用API续订服务：Microsoft 365 E5 Renew X"}],["meta",{"property":"og:description","content":"E5 调用 API 续订服务：Microsoft 365 E5 Renew X Microsoft 365 E5 Renew X 是一款网页版的 E5 续订服务，其依赖网页浏览器呈现支持用户多端操作，完全将 E5 账户 API 调用托管在了服务器端因此用户无需电脑也可使用。 Microsoft 365 E5 Renew X 由来 Microsoft 3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618170032256-165380585664583.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:tag","content":"E5"}],["meta",{"property":"article:tag","content":"office"}],["meta",{"property":"article:published_time","content":"2022-06-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"E5 调用API续订服务：Microsoft 365 E5 Renew X\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618170032256-165380585664583.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061817051341-165380585814786.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618170801323-165380585941389.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061817121972-165380586091892.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618171501396-165380586226995.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618171651338-165380586350298.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618171850779-1653805864822101.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201102171130141.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061819283823-1653805868573106.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618172538991-1653805869901109.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201102171303292.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618172627969-1653805874862114.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201112111140479.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201112110505347.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020061819283823-1653805879510121.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200801120027971-1653805882870124.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20201102171349129.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200618172627969-1653805884862127.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200801120623311-1653805887894132.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20200801120818260-1653805889622135.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210609101116972-1653805890998138.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2020120711360840.jpeg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16-1653805902079145.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/2375b23f6de74f5e9d9ff37bca1e7dcc.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/eb5d982940a340719b4b5dbd1a46420c.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/3b2651537fee45088202efd02cad6d74.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/8229363a593549bbb884960e65875673.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/fea87de6e5774a319c4b4a2e818d3341.png\\"],\\"datePublished\\":\\"2022-06-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"Microsoft 365 E5 Renew X 由来","slug":"microsoft-365-e5-renew-x-由来","link":"#microsoft-365-e5-renew-x-由来","children":[]},{"level":2,"title":"主要功能","slug":"主要功能","link":"#主要功能","children":[{"level":3,"title":"用户端","slug":"用户端","link":"#用户端","children":[]},{"level":3,"title":"部署端","slug":"部署端","link":"#部署端","children":[]}]},{"level":2,"title":"可用站点","slug":"可用站点","link":"#可用站点","children":[{"level":3,"title":"主站","slug":"主站","link":"#主站","children":[]},{"level":3,"title":"自建共享站点","slug":"自建共享站点","link":"#自建共享站点","children":[]}]},{"level":2,"title":"1 注册 Azure 应用程序","slug":"_1-注册-azure-应用程序","link":"#_1-注册-azure-应用程序","children":[{"level":3,"title":"1.1 应用注册","slug":"_1-1-应用注册","link":"#_1-1-应用注册","children":[]},{"level":3,"title":"1.2 配置应用重定向 URL（身份验证）","slug":"_1-2-配置应用重定向-url-身份验证","link":"#_1-2-配置应用重定向-url-身份验证","children":[]}]},{"level":2,"title":"2 配置应用程序的 API 权限（重要）","slug":"_2-配置应用程序的-api-权限-重要","link":"#_2-配置应用程序的-api-权限-重要","children":[{"level":3,"title":"2.1 选择“委托的权限(用户登录)”类型的 API","slug":"_2-1-选择-委托的权限-用户登录-类型的-api","link":"#_2-1-选择-委托的权限-用户登录-类型的-api","children":[]},{"level":3,"title":"2.2 选择“应用程序权限(非用户登录)”类型的 API","slug":"_2-2-选择-应用程序权限-非用户登录-类型的-api","link":"#_2-2-选择-应用程序权限-非用户登录-类型的-api","children":[]}]},{"level":2,"title":"3 将账号 API 调用托管至服务","slug":"_3-将账号-api-调用托管至服务","link":"#_3-将账号-api-调用托管至服务","children":[{"level":3,"title":"3.1 进入网站注册并登录账户","slug":"_3-1-进入网站注册并登录账户","link":"#_3-1-进入网站注册并登录账户","children":[]},{"level":3,"title":"3.2 激活您的账户","slug":"_3-2-激活您的账户","link":"#_3-2-激活您的账户","children":[]},{"level":3,"title":"3.3 添加一个 E5 账户的运行配置信息","slug":"_3-3-添加一个-e5-账户的运行配置信息","link":"#_3-3-添加一个-e5-账户的运行配置信息","children":[]},{"level":3,"title":"3.4 设置一个通知邮箱（可选）","slug":"_3-4-设置一个通知邮箱-可选","link":"#_3-4-设置一个通知邮箱-可选","children":[]}]},{"level":2,"title":"服务下载(作为站长务必注意查看主站中“关于”页面中的程序发布时间，及时更新服务程序)","slug":"服务下载-作为站长务必注意查看主站中-关于-页面中的程序发布时间-及时更新服务程序","link":"#服务下载-作为站长务必注意查看主站中-关于-页面中的程序发布时间-及时更新服务程序","children":[{"level":3,"title":"传统方式","slug":"传统方式","link":"#传统方式","children":[]},{"level":3,"title":"Docker 方式","slug":"docker-方式","link":"#docker-方式","children":[]}]},{"level":2,"title":"传统方式服务部署","slug":"传统方式服务部署","link":"#传统方式服务部署","children":[{"level":3,"title":"安装运行环境","slug":"安装运行环境","link":"#安装运行环境","children":[]},{"level":3,"title":"填写配置信息","slug":"填写配置信息","link":"#填写配置信息","children":[]},{"level":3,"title":"启动服务程序","slug":"启动服务程序","link":"#启动服务程序","children":[]},{"level":3,"title":"管理员登录","slug":"管理员登录","link":"#管理员登录","children":[]}]}],"git":{"createdTime":1653806019000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":5},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":13.13,"words":3940},"filePathRelative":"other/Microsoft-365-E5-RenewX.md","localizedDate":"2022年6月12日","autoDesc":true}');export{vt as comp,zt as data};
