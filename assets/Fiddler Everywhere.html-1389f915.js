import{_ as s,W as o,X as l,Z as e,$ as r,a0 as d,Y as n,C as i}from"./framework-3ab8bde0.js";const a={},p=e("h1",{id:"fiddler-everywhere",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fiddler-everywhere","aria-hidden":"true"},"#"),r(" Fiddler Everywhere")],-1),c={href:"https://github.com/msojocs/fiddler-everywhere-enhance/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://downloads.getfiddler.com/mac/Fiddler%20Everywhere%204.0.1.dmg",target:"_blank",rel:"noopener noreferrer"},u={href:"https://downloads.getfiddler.com/win/Fiddler%20Everywhere%204.1.2.exe",target:"_blank",rel:"noopener noreferrer"},_={href:"https://downloads.getfiddler.com/win/Fiddler%20Everywhere%204.0.1.exe",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"第一步 下载 fiddler 文件安装，正常打开，注册账号，登录 登录之后 fiddler 会自动更新，暂时不用处理",-1),x=e("p",null,"第二步 移除安装的 fiddler，重新安装 fiddler，不用打开。 打开 fiddler 显示包内容，替换文件。",-1),f=e("p",null,"Contents/resources/app/out/WebServer/ClientApp\\dist\\main.xxxxxx.js Contents/resources/app/out/WebServer/Fiddler.WebUi.dll Contents/resources/app/out/WebServer/FiddlerBackendSDK.dll",-1),m=e("p",null,[r("修改 Contents/resources/app/out/main.js 文件禁止自动更新 搜索: "),e("code",null,"!e.settingsService.get().autoUpdateSettings.disabled"),r(" 替换成: "),e("code",null,"!true||e.settingsService.get().autoUpdateSettings.disabled")],-1),g=e("p",null,"第三步 再次打开已经破解了",-1),w={id:"fiddler-everywhere-4-0-1的破解及禁止更新的方法",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#fiddler-everywhere-4-0-1的破解及禁止更新的方法","aria-hidden":"true"},"#",-1),b={href:"https://www.cnblogs.com/ahlxjg/p/17227687.html",target:"_blank",rel:"noopener noreferrer"},S=n(`<p>Fiddler Everywhere是个好东西，无论抓包还是调试接口都很好用，只是现在收费了，为了白嫖就决定折腾一下。</p><p>先在网找了一些资料，但有个问题都没有提及，那就是在安装好之后，这个版的软件会强制要求自动更新，未更新前进不了用户使用界面。更新后就算之前破解了，随着更新成新版破解也就失效了。如果一开始通过设置文件夹权限禁止更新，也会导致进不了使用界面而无法使用，下面说一下具体的解决过程。</p><p>这里仅用文字描述，就不上图片了，写下仅仅怕自己时间长了忘记。如果想看懂可能需要对软件与编程有一点了解。</p><p>首先安装Fiddler Everywhere 4.0.1，具体的安装包请自行网上找。</p><p>在不断网的情况下打开软件，根据提示登录帐号（建议先注册好账号，否则可能会还没登录上，软件就已经更新到最新版本了），登录成功返回软件后应该提示购买或试用。这时选择试用，之后会进入用户界面，然后尽快关闭软件，你需要在更新文件未下载完成前完成这个操作，否则会就会更新到最新版本了。</p><p>下一步通过设置文件权限禁止软件更新，找到文件夹&quot;X:\\Users\\当前登录用户名\\AppData\\Local\\fiddler-everywhere-updater&quot;，如果不出意外，你会发现文件夹内已经下载了一些文件，把所有文件删除，然后删除所有用户的访问权限即可。</p><p>接下来是破解软件的试用问题。</p><p>找到软件的安装目录，并找到文件&quot;Fiddler Everywhere\\resources\\app\\out\\WebServer\\ClientApp\\dist\\main.xxxxxxxxxxx.js&quot;，注意&quot;xxxxxxxxxxx&quot;是随机的，</p><p>用任何编辑器打开此文件，查找关键字&quot;updateUserLicense&quot;，找到第一个，在其后面的&quot;var&quot;之前加入以下内容并保存退出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ve.licenseInfo.currentLicense = &quot;Pro&quot;;ve.licenseInfo.hasExpiredTrial = false;ve.licenseInfo.isTrialAvailable = false;ve.licenseInfo.hasValidLicense = true;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来修改两个dll文件，因为这个软件是使用C#开发的，所以需要下载一个C#反编译工具，可以使用dnSpy，是一个开源软件，下载地址：</p>`,11),F={href:"https://github.com/dnSpy/dnSpy/releases",target:"_blank",rel:"noopener noreferrer"},E=n(`<p>下载相应的软件包，解开压缩即可直接使用。</p><p>接下来在安装目录找到文件“Fiddler Everywhere\\resources\\app\\out\\WebServer\\Fiddler.WebUi.dll”，</p><p>使用dnSpy打开，找到命名空间“Fiddler.WebUi.Helpers”下的类“ScriptHelper”，其下有两个方法“TryOpenClientMainScript”和“TryOpenElectronMainScript”，</p><p>分别点击两个方法，在编辑窗口的右侧右键，选择“编辑方法”，将方法中的 try{}catch{}代码块整体删除，点击“编译”，然后选择菜单中的“文件”-“保存模块”，文件关闭。</p><p>接下来在安装目录找到文件“Fiddler Everywhere\\resources\\app\\out\\WebServer\\FiddlerBackendSDK.dll”，</p><p>使用dnSpy打开，找到命名空间“FiddlerBackendSDK.User”下的类“UserClient”，修改其下面的方法“GetBestAccount”，直接将if内的代码修改成以下样子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return user.Accounts.FirstOrDefault((UserAccountDTO x) =&gt; true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>点击“编译”，然后选择菜单中的“文件”-“保存模块”，关闭文件。</p><p>到此破解完成了。打开软件试试效果吧。</p>`,9);function k(q,C){const t=i("ExternalLinkIcon");return o(),l("div",null,[p,e("p",null,[r("替换文件地址："),e("a",c,[r("https://github.com/msojocs/fiddler-everywhere-enhance/"),d(t)]),r(" fiddler 源文件："),e("a",h,[r("https://downloads.getfiddler.com/mac/Fiddler Everywhere 4.0.1.dmg"),d(t)]),r(" 4.0.1 对应的版本号")]),e("p",null,[e("a",u,[r("https://downloads.getfiddler.com/win/Fiddler Everywhere 4.1.2.exe"),d(t)])]),e("p",null,[e("a",_,[r("https://downloads.getfiddler.com/win/Fiddler Everywhere 4.0.1.exe"),d(t)])]),v,x,f,m,g,e("h2",w,[y,r(),e("a",b,[r("Fiddler Everywhere 4.0.1的破解及禁止更新的方法"),d(t)])]),S,e("p",null,[e("a",F,[r("https://github.com/dnSpy/dnSpy/releases"),d(t)])]),E])}const W=s(a,[["render",k],["__file","Fiddler Everywhere.html.vue"]]);export{W as default};
