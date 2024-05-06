import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as n,c as s,d as t,e,b as i,a as g}from"./app-CHLzVell.js";const p={},l=t("h1",{id:"安装-wsa-激活-gpu-双击安装-apk",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#安装-wsa-激活-gpu-双击安装-apk"},[t("span",null,"安装 WSA-激活 GPU-双击安装 APK")])],-1),c=t("p",null,"仅支持 Windows11（包含正式版、RP、Beta、Dev） 》》》 目 录 《《《 1.安装 WSA 本体（必装） 2.激活 GPU（普通用户请跳过！！！） 3.安装“安装程序”（选装） 4.安装 ADB（选装） 5.安装 Android 应用 6.卸载 Android 应用 7.注意事项 8.参考链接",-1),m=t("h2",{id:"【1-安装-wsa-本体】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#【1-安装-wsa-本体】"},[t("span",null,"【1 安装 WSA 本体】")])],-1),b={href:"https://store.rg-adguard.net/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.microsoft.com/store/productId/9P3395VX91NR",target:"_blank",rel:"noopener noreferrer"},d=g('<p>1.打开①链接，在输入框中输入②，选择 Slow 通道，确认，下载最底下的&quot; MicrosoftCorporationII.WindowsSubsystemForAndroid_1.7.32815.0_neutral_~_8wekyb3d8bbwe.msixbundle&quot; (注：四个选项与 Windows 渠道相对应，Fast-Dev 渠道，Slow-Beta 渠道，RP-RP 渠道和 Retail-正式版，目前只有 Beta 版本有发布)</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_b9fb4b26_4742_3909@854x219.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>输入下载地址，选择正确通道</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_6e58f04a_4742_3911@1234x333.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选择最新安装包</p><p>2.右键 Windodws 徽标，选择&quot;Windows 终端（管理员）&quot;输入命令 add-appxpackage &quot;文件路径/文件名&quot;，回车，安装完成</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_d413f6bb_4742_3913@834x644.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开终端</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_6907ae9d_4742_3915@1129x631.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>输入指令</p><p>3.开启主板虚拟化支持，具体按照各 BIOS 进行设置（新购买电脑一般已开启主板虚拟化支持） 4.系统中开启 Hyper-V 和虚拟机平台，打开资源管理器，在路径中输入中文&quot;控制面板&quot; ，回车，即可进入控制面板，选择程序-程序和功能-启用或关闭 Windows 功能，开启&quot;Hyper-V&quot;和&quot;虚拟机平台&quot;，确定，重启</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_fac9b857_1334_2244@1499x962.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>资源管理器可以直接进入控制面板</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_c335fb7e_1334_2246@1499x962.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>按图开启 Windows 功能</p><p>5.完成，Enjoy it.</p><h2 id="【2-激活-gpu】-普通用户无需进行该项设置" tabindex="-1"><a class="header-anchor" href="#【2-激活-gpu】-普通用户无需进行该项设置"><span>【2 激活 GPU】（普通用户无需进行该项设置！！！）</span></a></h2>',17),u={href:"https://www.intel.com/content/www/us/en/download/19344/intel-graphics-windows-10-windows-11-dch-drivers.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.nvidia.com/cuda/wsl/download",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.amd.com/en/support/kb/release-notes/rn-rad-win-wsl-support",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.microsoft.com/store/productId/9NQPSL29BFFF",target:"_blank",rel:"noopener noreferrer"},w=g('<p>1.下载安装对应显卡驱动和 opengl3 支持，安装后重启 （注：具体是否成功受概率等玄学因素影响，Intel 驱动如果安装失败可尝试再次安装；未测试是否影响调用，建议普通用户跳过该步骤） 2.设置中开启高性能模式，设置-系统-显示-图形，应用的自定义选项-浏览，添加 WSA，选择 WSA，图形首选项选择高性能，保存</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_7b0d9d68_3027_155@1775x1115.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开设置</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_d40bb361_3027_1552@1775x1115.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>添加 WSA</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_6185d916_3027_1554@1775x1115.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选项中选择高性能模式</p><p>3.显卡设置中开启高性能模式（以 N 卡为例，集显和 A 卡请自测），NVIDIA 控制面板-管理 3D 设置-添加-选择 WSA，确定，并调整 WSA 首选图形处理器为高性能 NVIDIA 处理器</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_1a2bee58_3028_9618@974x1199.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开 NVIDIA 控制面板并添加 WSA</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_c9c477e5_3028_9619@974x718.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选择高性能 NVIDIA 处理器</p><p>4.重启，完成</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_451e5133_3028_9621@503x909.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安兔兔 GPU 显示分数，但很低</p>',15),k={href:"https://github.com/Paving-Base/APK-Installer/releases",target:"_blank",rel:"noopener noreferrer"},A=g('<figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_b0236f41_4742_3917@835x388.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安装程序可以直接桌面显示 apk 且可以双击安装</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_76800999_4742_3919@636x405.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以 WinUi 的界面进行安卓程序的安装</p><p>- 1.下载最新压缩包，如&quot;APKInstaller.Package._0.0.1.0_Test.rar&quot; 2.解压缩 3.开启旁加载模式，设置-隐私和安全性-开发者选项-开启&quot;从任意源（包括松散文件）安装应用&quot;</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_3f879f05_4742_392@1775x1115.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开开发人员模式</p><p>4.右键 msixbundle 文件，如&quot;APKInstaller (Package)_0.0.1.0_x86_x64_arm64.msixbundle&quot; ，属性-数字签名-双击签名列表中的签名-查看证书-安装证书-本地计算机-将所有的证书都放入下列储存-受信任人-完成</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_e89acd6b_6561_4202@1352x952.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开属性</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_ef4554ea_4742_3922@2091x745.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安装程序证书 1</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_bef29485_4742_3924@1072x746.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安装程序证书 2</p><p>5.双击 msixbundle 文件，如&quot;APKInstaller (Package)_0.0.1.0_x86_x64_arm64.msixbundle&quot;，自动安装框架，然后提示安装失败 6.右键&quot;Install.ps1&quot;选择&quot;使用 PowerShell 运行&quot;</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_ee8ded6d_4746_3735@1352x952.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安装程序本体</p><p>7.安装完成</p><h2 id="【4-安装-adb】" tabindex="-1"><a class="header-anchor" href="#【4-安装-adb】"><span>【4 安装 ADB】</span></a></h2>',19),j={href:"https://dl.google.com/android/repository/platform-tools-latest-windows.zip",target:"_blank",rel:"noopener noreferrer"},y=g('<figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_772f1dd4_4746_3737@1365x957.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安装 adb 在正确的位置，无需配置环境变量</p><h2 id="【5-安装-android-应用】" tabindex="-1"><a class="header-anchor" href="#【5-安装-android-应用】"><span>【5 安装 Android 应用】</span></a></h2><p>方法一（ADB 安装）： 1.打开&quot;Windows Subsystem for Android™&quot;，打开&quot;开发人员模式&quot;</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_43576668_4746_3739@1003x813.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开 WSA</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_2a149b56_4746_374@1200x932.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>开启开发人员模式，注意未启动 WSA 不能安装程序</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_9f6776e4_4746_3742@636x388.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>启动 WSA</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_ffb679db_4746_3744@1200x932.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>启动成功，可以安装应用</p><p>2.确保已正确安装 ADB，Win+R，输入&quot;CMD&quot;，回车，输入指令&quot;adb connect 127.0.0.1:58526&quot; 3.&quot;adb install （将安装文件拖入此处）&quot;，回车，安装完成</p><p>方法二（安装器安装）： 1.确保已正确安装 APKInstaller，双击.apk 的安卓程序进行安装，根据指引打开&quot;开发人员模式&quot; （注：Android 子系统必须处于开机状态才能进行安装，可以点击 WSA 中&quot;开发人员模式&quot;下&quot;管理开发人员设置&quot;唤醒）</p><h2 id="【6-卸载-android-应用】" tabindex="-1"><a class="header-anchor" href="#【6-卸载-android-应用】"><span>【6 卸载 Android 应用】</span></a></h2><p>1.列表中直接右键卸载即可</p>',16),P={href:"https://www.uso.cn/post/view/47990",target:"_blank",rel:"noopener noreferrer"},q={href:"https://m.jb51.net/os/win10/728455.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://blog.csdn.net/houmenghu/article/details/103876847",target:"_blank",rel:"noopener noreferrer"},S=t("h2",{id:"【8-参考链接】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#【8-参考链接】"},[t("span",null,"【8 参考链接】")])],-1),z={href:"https://www.coolapk.com/feed/30833815?shareKey=NGRjZTFhMjYxNTQ2NjE3MmNmMmU~&shareUid=538951&shareFrom=com.coolapk.market_11.4.3",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.coolapk.com/feed/30854918?shareKey=Y2ZiMjNmN2E4NWM2NjE3MmNmMmU~&shareUid=538951&shareFrom=com.coolapk.market_11.4.3",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.coolapk.com/feed/30857122?shareKey=OTAzN2JmMDBmZTg3NjE3MmNmMDM~&shareUid=538951&shareFrom=com.coolapk.market_11.4.3",target:"_blank",rel:"noopener noreferrer"};function B(I,U){const a=r("ExternalLinkIcon");return n(),s("div",null,[l,c,m,t("p",null,[e("① 微软商店程序抓包网址： "),t("a",b,[e("查看链接"),i(a)]),e(" ② WSA 微软商店链接： "),t("a",_,[e("查看链接"),i(a)])]),d,t("p",null,[e("INTEL 英特尔： "),t("a",u,[e("查看链接"),i(a)]),e(" NVIDIA 英伟达（经验证无效，请使用官网最新驱动）： "),t("a",h,[e("查看链接"),i(a)]),e(" AMD 超微半导体： "),t("a",f,[e("查看链接"),i(a)]),e(" opengl3 支持： "),t("a",x,[e("查看链接"),i(a)])]),w,t("p",null,[e("【3 安装“安装程序”】 - APKInstaller： "),t("a",k,[e("查看链接"),i(a)])]),A,t("p",null,[e("最新 ADB： "),t("a",j,[e("查看链接"),i(a)]),e(' - 1.下载解压缩，将文件夹内的所有文件复制到"C:\\Users\\用户名"下即可')]),y,t("p",null,[e("【7 注意事项】 1.该教程基于 Windows11 专业版制作，如家庭版没有某些选项，可以百度其他打开的方式 2.如果遇到鼠标无法点击的情况，如登录酷安，可以使用 tab 键切换组件 3.提示 WiFi 连接问题："),t("a",P,[e("查看链接"),i(a)]),e(" 4.PowerShell 运行 ps1 文件的问题："),t("a",q,[e("查看链接"),i(a)]),e(" 5.Windows 家庭版没有 PowerShell 的问题："),t("a",W,[e("查看链接"),i(a)])]),S,t("p",null,[e("WSA 安装： "),t("a",z,[e("查看链接"),i(a)]),e(" GPU 驱动： "),t("a",E,[e("查看链接"),i(a)]),e(" APKInstaller： "),t("a",N,[e("查看链接"),i(a)])])])}const v=o(p,[["render",B],["__file","安装WSA-激活GPU-双击安装APK.html.vue"]]),G=JSON.parse('{"path":"/pc/%E5%AE%89%E8%A3%85WSA-%E6%BF%80%E6%B4%BBGPU-%E5%8F%8C%E5%87%BB%E5%AE%89%E8%A3%85APK.html","title":"安装WSA-激活GPU-双击安装APK","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"安装WSA-激活GPU-双击安装APK","excerpt":null,"description":"安装WSA-激活GPU-双击安装APK","date":"2022-02-11T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/pc/%E5%AE%89%E8%A3%85WSA-%E6%BF%80%E6%B4%BBGPU-%E5%8F%8C%E5%87%BB%E5%AE%89%E8%A3%85APK.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"安装WSA-激活GPU-双击安装APK"}],["meta",{"property":"og:description","content":"安装WSA-激活GPU-双击安装APK"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_b9fb4b26_4742_3909@854x219.png.m.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-02-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装WSA-激活GPU-双击安装APK\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_b9fb4b26_4742_3909@854x219.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_6e58f04a_4742_3911@1234x333.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_d413f6bb_4742_3913@834x644.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_6907ae9d_4742_3915@1129x631.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_fac9b857_1334_2244@1499x962.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_c335fb7e_1334_2246@1499x962.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_7b0d9d68_3027_155@1775x1115.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_d40bb361_3027_1552@1775x1115.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_6185d916_3027_1554@1775x1115.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_1a2bee58_3028_9618@974x1199.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_c9c477e5_3028_9619@974x718.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_451e5133_3028_9621@503x909.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_b0236f41_4742_3917@835x388.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_76800999_4742_3919@636x405.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_3f879f05_4742_392@1775x1115.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_e89acd6b_6561_4202@1352x952.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_ef4554ea_4742_3922@2091x745.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_bef29485_4742_3924@1072x746.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_ee8ded6d_4746_3735@1352x952.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_772f1dd4_4746_3737@1365x957.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_43576668_4746_3739@1003x813.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_2a149b56_4746_374@1200x932.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_9f6776e4_4746_3742@636x388.png.m.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/538951_ffb679db_4746_3744@1200x932.png.m.jpg\\"],\\"datePublished\\":\\"2022-02-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"【1 安装 WSA 本体】","slug":"【1-安装-wsa-本体】","link":"#【1-安装-wsa-本体】","children":[]},{"level":2,"title":"【2 激活 GPU】（普通用户无需进行该项设置！！！）","slug":"【2-激活-gpu】-普通用户无需进行该项设置","link":"#【2-激活-gpu】-普通用户无需进行该项设置","children":[]},{"level":2,"title":"【4 安装 ADB】","slug":"【4-安装-adb】","link":"#【4-安装-adb】","children":[]},{"level":2,"title":"【5 安装 Android 应用】","slug":"【5-安装-android-应用】","link":"#【5-安装-android-应用】","children":[]},{"level":2,"title":"【6 卸载 Android 应用】","slug":"【6-卸载-android-应用】","link":"#【6-卸载-android-应用】","children":[]},{"level":2,"title":"【8 参考链接】","slug":"【8-参考链接】","link":"#【8-参考链接】","children":[]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2},{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":4.9,"words":1470},"filePathRelative":"pc/安装WSA-激活GPU-双击安装APK.md","localizedDate":"2022年2月11日"}');export{v as comp,G as data};
