import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as m,a as p,b as e,e as t,d as a,r as l}from"./app.59ffeed0.js";const g={},i=p("h1",{id:"xposed-edge-pro入门教程",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#xposed-edge-pro入门教程","aria-hidden":"true"},"#"),e(" Xposed edge pro入门教程")],-1),s=p("p",null,"●教程目录 一、软件简介 二、运行环境 三、文件路径 四、偏好设置 五、多重动作详解（核心功能） 六、其他功能详解（基础功能） 七、多重动作的思路步骤分享（实例讲解） 八、教程的测试环境 九、结语 ----------------------------------",-1),_={href:"https://www.coolapk.com/u/jozein",target:"_blank",rel:"noopener noreferrer"},n={href:"https://www.lanzous.com/b00t9c73g",target:"_blank",rel:"noopener noreferrer"},d={href:"https://repo.xposed.info/module/com.jozein.xedge",target:"_blank",rel:"noopener noreferrer"},h={href:"https://play.google.com/store/apps/details?id=com.jozein.xedge",target:"_blank",rel:"noopener noreferrer"},f=a('<p>----------------------------------</p><p>二、运行环境 ●需要Xposed环境，安装好模块重启激活 ●授予其读取应用、读写存储等基础权限 ●shell命令调用需要勾选“以root权限执行”</p><p>----------------------------------</p><p>三、文件路径 ●sd卡目录：默认是/storage/emulated/0，或者是/mnt/sdcard，或者是/sdcard ●配置文件目录：sd卡目录/Android/data/XEdgePro ●⚠️⚠️备份的配置保存在以上的配置文件目录中；导入配置会覆盖导致原配置丢失，建议导入他人配置前先备份！</p><p>----------------------------------</p><p>四、偏好设置 ●软键盘禁用手势-勾选后在弹出软键盘时禁用手势 ●锁屏禁用手势-勾选后在锁屏时禁用手势 ●游戏模式-可以屏蔽按键手势防误触 ●允许通过广播执行-建议勾选 ●其他设置看个人喜好</p><p>----------------------------------</p><p>五、多重动作详解（核心功能） ●通过“延时”将各单个动作组合成的多重动作，是edge pro的一个核心功能，可以说是以下第六节中“手势”、“按键”、“定时计划”等等功能的基础。</p><p>●新建某个多重动作的步骤： - 点击 [保存的多重动作] - 点击 [添加] - 点击 [添加] - 选择 [“动作1”] - 点击 [添加] - 选择 [延时] - 点击 [添加] - 选择 [“动作2”] - 点击 [添加] - 选择 [延时] - ……</p><p>「多重动作-选择动作」之动作类型 ●㈠提示类型</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_f98399f3_7041_3234@1080x645.jpeg.m.jpg" alt="img"></p><p>※通过添加提示类型的动作可以反馈当前的执行情况，例如：在锁屏前添加Toast提示“即将锁屏”，当弹出“即将锁屏”的Toast后，你就知道马上要锁屏了。</p><p>1.通知-执行后会在通知栏弹出通知 2.Toast提示-执行后会在当前窗口弹出Toast 3.语音-执行后会自动朗读文字</p><p>※※小技巧：在编辑以上提示类型的动作时，可以通过输入“%d”、“%b”等实现提示实时时间、实时电量等。</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_78b41f6a_7041_3236@1080x623.jpeg.m.jpg" alt="img"></p><p>●㈡语句类型</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_da3bbfe1_7041_3238@1080x327.jpeg.m.jpg" alt="img"></p><p>※通过“逻辑语句”来执行动作，类似于编程思维，但edge pro将其超级简化，小白都能看懂。</p><p>1.重复-相当于循环语句，循环执行动作 2.条件-相当于if判断语句，根据结果判定执行对应操作</p><p>※※注：条件-如果-应用获得了焦点 这里解释一下“应用获得了焦点”的含义。“应用获得了焦点”表示当前已跳转至/切换至/正处于对应的应用程序窗口。通过“判断焦点”的条件可以选择对应的操作，可以有效的保证后续动作不出错。例如在执行多重动作“解锁-打开支付宝-点击「我的」- 点击 [设置]-- 点击 [切换账号登录] … ”时，如果因为各种各样的原因导致没能成功打开支付宝，后续的点击操作继续执行就可能会导致各种误操作。为避免此类问题，可以选择添加一个条件，“如果应用获得了焦点-支付宝，则点击…，否则重新打开支付宝…”。</p><p>●㈢“注入”类型</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_34ed53ac_7041_3239@1080x637.jpeg.m.jpg" alt="img"></p><p>1.注入按键-执行后可以实现模拟点击按键 2.注入手势-执行后可以模拟完成录制的手势操作 3.注入文本-执行后可以在光标位置直接输入文本</p><p>※※小技巧：通过「注入按键」可以实现模拟点击所有数字键、26字母键、空格键、回车键、三大金刚键、以及拨号键等等，其中数字键和回车键用得相对较多；通过「注入文本」可以在光标处直接快速输入已设置好的文本，秒杀活动选填商品信息有奇效…</p><p>●㈣系统基础类型</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_9194a8bb_7041_3241@1080x1837.jpeg.m.jpg" alt="img"></p><p>※返回、主页、打开/结束/停止应用等应用相关、数据WiFi亮屏/锁屏等系统基础设置…非常简单直接，不做过多介绍</p><p>●㈤多重动作类型</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_2fa0adfb_7041_3243@1080x325.jpeg.m.jpg" alt="img"></p><p>※多重动作中包含多重动作，套娃行为<img src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_64_shounuehuaji.png" alt="受虐滑稽">。多个简单的多重动作组合成复杂的多重动作，有利于执行检测排查error，且不容易出错。</p><p>●㈥shell类型（★★★）</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_4cb0a3af_7041_3245@1080x395.jpeg.m.jpg" alt="img"></p>',32),k={href:"https://blog.csdn.net/lb245557472/article/details/84068519#441___Activity_309",target:"_blank",rel:"noopener noreferrer"},j=p("p",null,[p("img",{src:"http://image.coolapk.com/feed/2020/0207/22/2566398_22321570_7041_3247@2160x2880.jpeg.m.jpg",alt:"img"})],-1),b={href:"https://www.coolapk.com/feed/15691215?shareKey=NDJkOGU0MTc1MmQwNWUzZDE3MWM~&shareUid=2566398&shareFrom=com.coolapk.market_10.0.1-beta2",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.coolapk.com/apk/com.toshiba.packagenamedetector",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.coolapk.com/apk/l.Activity",target:"_blank",rel:"noopener noreferrer"},w={href:"http://www.coolapk.com/apk/bin.mt.plus",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/pansong291/XQuickEnergy/blob/master/AppIdMap.txt",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.coolapk.com/feed/15850766?shareKey=NTZlZjY5NjEzZDYzNWUzZDIxODQ~&shareUid=2566398&shareFrom=com.coolapk.market_10.0.1-beta2",target:"_blank",rel:"noopener noreferrer"},X=a('<p>●㈦延时（★★★）</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_b81ff753_7044_8822@1080x314.jpeg.m.jpg" alt="img"></p><p>※延时，相当于sleep语句，主要是添加在各动作之间，使得前后两个动作之间有一定的时间间隔，确保前一个动作执行完成再继续后面的动作。延时所需的具体时长由于不同机型设备系统反应的快慢程度决定，手机反应快延时时长可以适当缩短，但仍然建议各动作之间的延时时长适当增长。另外，测试执行新建的动作时最好在动作前再加几秒延时。</p><p>※※换算：1s（秒）＝1000ms（毫秒）</p><p>----------------------------------</p><p>六、其他功能详解（基础功能） ●㈠手势 ※通过设置手势可以快速触发单个动作或者多重动作 ※步骤（以设置“右中左划-返回”为例）： - 点击 [手势] 复选框启用手势 - 点击 [手势] 项进入手势设置 - 点击 [右中] 复选框启用右中边缘手势 - 点击 [右中] 项展开子项 - 点击子项 [左划] 进入动作选择 - 点击 [返回] 项选择动作 【注：若选择保存的多重动作即可实现触发多重动作】 - 完成。右中边缘往左划即可执行 [返回] 动作</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_c61434fa_7044_8824@432x744.gif" alt="img"></p><p>●㈡按键 ●㈢其他拓展 ※设置按键及其他拓展的步骤均参考“手势设置”</p><p>●㈣定时计划 ※通过定时计划可以实现定时自动完成指定动作，例如：定时打卡签到、定时给QQ微信好友发消息等 ※步骤(以“7:00定时解锁打开支付宝XQE”为例）： - 点击 [添加] - 选择 [按星期/按日期] - 点击 刚创建的定时计划 展开子项 - 点击 [时间] 设置具体的时间点7:00 - 点击 [星期/日期] 选择执行的具体日子 - 点击 [无] 选择相应的动作 - 点击 [7:00] 复选框启用定时计划 - 点击 右上角[保存] 成功设置完成定时计划</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_3bfa0330_7044_8826@432x739.gif" alt="img"></p><p>●㈤应用状态触发 ※通过判断相关应用的应用状态（运行/结束/获得了焦点/未获得焦点），触发相应的动作。 ※步骤(以“结束支付宝立即触发支付宝后台”为例）： - 点击 [应用状态触发] - 找到 [支付宝] - 点击 「支付宝」 展开子项 - 点击 [结束] - 点击 [shell命令] 新建“启动支付宝后台”的shell命令 - 输入 [am startservice com.eg.android.AlipayGphone/com.alipay.android.launcher.service.LauncherService] - 点击 [以root身份运行] 复选框 - 点击 [返回] 完成</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_3317120b_7044_8828@432x739.gif" alt="img"></p><p>●㈥更多触发器 ※偏向系统应用转态触发，例如亮屏/息屏/插入耳机/电量低/收到短信等等 ※步骤参考“应用状态触发”</p><p>----------------------------------</p><p>七、多重动作的思路步骤分享（实例讲解） ●以“每间隔30分钟自启一次支付宝XQE”为例 ●主要思路：亮屏的时候，后台启动支付宝（防止支付宝界面突然弹出造成干扰）；锁屏的时候，唤醒手机、保持亮屏、解锁屏幕、启动支付宝、锁屏；通过条件语句判断亮屏/锁屏分别执行各自动作；通过“重复”可以实现循环，每间隔30分钟——动作前/后添加延时1800000ms（30分钟），重复次数48即可保证每天24小时保持“每30分钟自启一次支付宝”的状态；设置一个定时计划，确定执行任务的时间。</p><p>●具体步骤操作： ●㈠亮屏时，自启支付宝后台服务</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_5dd61332_7044_883@1078x688.jpeg.m.jpg" alt="img"></p><p>●㈡锁屏时，唤醒亮屏、解锁、启动支付宝、锁屏</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_666734a2_7044_8831@1080x1099.jpeg.m.jpg" alt="img"></p><p>※※补充： ●自动解锁手机的方法（★★★） 1.无密码：使用edge基础功能动作“解锁”</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_b9e2b4d7_7044_8833@1080x330.jpeg.m.jpg" alt="img"></p><p>2.图案锁屏：「手势记录」添加录制解锁动作保存 -「保存的多重动作」-「添加」-「添加」-「注入手势」-选择刚保存的解锁动作-「确定保存」</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_28edf376_7044_8835@1080x1826.jpeg.m.jpg" alt="img"></p><p>3.数字锁屏： ①注入手势：方法同“图案解锁” ②注入按键：注入密码对应的数字按键</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_5ac67172_7044_8836@1080x1830.jpeg.m.jpg" alt="img"></p><p>③shell-通过输入文本：input text 密码</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_611d12dd_7060_5073@1080x1836.jpeg.m.jpg" alt="img"></p><p>④shell-通过模拟按键：input keyevent 密码对应的键值</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_f01acc93_7060_5075@1073x1775.jpeg.m.jpg" alt="img"></p><p>⑤shell-通过模拟点击：input tap 密码对应的屏幕坐标</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_fb908919_7060_5077@1080x1825.jpeg.m.jpg" alt="img"></p><p>※⚠️⚠️在都能成功解锁的情况下，优先级排序为③②④⑤①；由于安卓版本或者机型等问题，①②③④往往或多或少会出现无效的情况，而⑤模拟点击是最稳定的。</p>',32),E={href:"https://www.cnblogs.com/hujingnb/p/10282238.html",target:"_blank",rel:"noopener noreferrer"},A=a('<p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_d72f841f_7060_5079@1080x1837.jpeg.m.jpg" alt="img"></p><p>※解锁⑤获取屏幕坐标的方法：开启指针 shell命令开启指针：settings put system pointer_location 1 shell命令关闭指针：settings put system pointer_location 0</p><p>●㈢条件语句</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_03692c4d_7060_508@1080x1589.jpeg.m.jpg" alt="img"></p><p>●㈣循环重复执行</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_b5df4e7a_7060_5082@1080x1727.jpeg.m.jpg" alt="img"></p><p>●㈤设置定时计划</p><p><img src="http://image.coolapk.com/feed/2020/0207/22/2566398_82363e29_7060_5084@1080x970.jpeg.m.jpg" alt="img"></p><p>----------------------------------</p><p>八、教程的测试环境： ●小米6 MIUI11 Edxp； ●安卓9 星空rom ●XEdgePro版本：5.4.2</p><p>----------------------------------</p><p>九、结语 关于XEdgePro的教程到这基本就全部结束了，欢迎大家批评指正，互相学习。XEdgePro使用真的不难，只需要你稍微肯琢磨一下，愿意去主动学习。</p>',12);function z(N,Q){const o=l("ExternalLinkIcon");return c(),m("div",null,[i,s,p("p",null,[e("一、软件简介 ●Xposed edge pro 是一款提供手势控制、按键控制以及其他触发器以快速触发用户所需的操作的 Xposed 模块。 ●开发者jozein大佬"),p("a",_,[e("@jozein"),t(o)]),e(" ，偶尔活跃在酷安。 ●下载地址 抗揍云☁️："),p("a",n,[e("查看链接"),t(o)]),e(" Xposed 仓库："),p("a",d,[e("查看链接"),t(o)]),e(" Google play商店："),p("a",h,[e("查看链接"),t(o)]),e(" ●优点：神器——简单高效稳定 ●不足：缺少布局层次分析/范围分析，自动化动作有一定限制。")]),f,p("p",null,[e("※调用shell命令可以完成绝大多数任务，例如打开QQ微信指定好友界面、打开支付宝蚂蚁森林、模拟点击滑动按键输入、更改手机系统设置等等。关于具体shell命令的调用可参考“adb shell操作命令详解”——"),p("a",k,[e("查看链接"),t(o)]),e(" ※⚠️⚠️以上链接中的adb shell命令在手机执行的时候去掉命令前面的“adb shell”，勾选“以root权限执行”即可。")]),j,p("p",null,[e("※常用的shell类型（具体操作戳☞"),p("a",b,[e("查看链接"),t(o)]),e("） 1.启动应用/Activity 2.模拟点击滑动按键输入 3.更改手机系统设置")]),p("p",null,[e("※※补充: 一、抓取Activity工具: "),p("a",x,[e("【当前界面(当前Activity)】"),t(o)]),e(" ； "),p("a",u,[e("【Activity】"),t(o)]),e(" ； "),p("a",w,[e("【MT管理器2】"),t(o)]),e(" 二、获取支付宝相关的APPID:部分文档"),p("a",y,[e("查看链接"),t(o)]),e("、抓APPID的方法"),p("a",v,[e("查看链接"),t(o)])]),X,p("p",null,[e("※keyevent事件参考"),p("a",E,[e("查看链接"),t(o)]),e(" ※解锁②注入按键-只看keycode值 ※解锁④模拟按键-只看数字值 例如：输入数字5")]),A])}const T=r(g,[["render",z],["__file","Xposed edge pro入门教程.html.vue"]]);export{T as default};
