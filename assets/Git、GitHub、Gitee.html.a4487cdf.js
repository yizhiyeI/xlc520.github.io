import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as r,a as e,b as i,e as l,d as a,r as n}from"./app.ffebafef.js";const s={},g=a('<h1 id="git\u3001github\u3001gitee" tabindex="-1"><a class="header-anchor" href="#git\u3001github\u3001gitee" aria-hidden="true">#</a> Git\u3001GitHub\u3001Gitee</h1><h2 id="\u4E00-git\u4ECB\u7ECD\u4E0Emac\u4E0B\u5982\u4F55\u751F\u6210ssh-key" tabindex="-1"><a class="header-anchor" href="#\u4E00-git\u4ECB\u7ECD\u4E0Emac\u4E0B\u5982\u4F55\u751F\u6210ssh-key" aria-hidden="true">#</a> \u4E00\uFF1AGit\u4ECB\u7ECD\u4E0EMac\u4E0B\u5982\u4F55\u751F\u6210ssh key</h2><p>git\u662F\u5206\u5E03\u5F0F\u7684\u4EE3\u7801\u7BA1\u7406\u5DE5\u5177\uFF0C\u8FDC\u7A0B\u7684\u4EE3\u7801\u7BA1\u7406\u662F\u57FA\u4E8Essh\u7684\uFF0C\u6240\u4EE5\u8981\u4F7F\u7528\u8FDC\u7A0B\u7684git\u5219\u9700\u8981ssh\u7684\u914D\u7F6E\u3002\u7B80\u5355\u7684\u8BF4\uFF0CGit - \u7248\u672C\u63A7\u5236\u5DE5\u5177\uFF1BGithub\u662F\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u63D0\u4F9B\u7ED9\u7528\u6237\u7A7A\u95F4\u521B\u5EFAgit\u4ED3\u50A8\uFF0C\u4FDD\u5B58\u7528\u6237\u7684\u4E00\u4E9B\u6570\u636E\u6587\u6863\u6216\u8005\u4EE3\u7801\u7B49\uFF1BGitLab\u662F\u57FA\u4E8EGit\u7684\u9879\u76EE\u7BA1\u7406\u8F6F\u4EF6</p><p>\u200B \u9996\u5148\uFF0C\u4F7F\u7528\u4EE3\u7801\u7BA1\u7406\u5DE5\u5177\u628A\u672C\u5730\u7684\u4EE3\u7801\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u65F6\u9700\u8981\u52A0\u5BC6\u5904\u7406\uFF0C\u52A0\u5BC6\u4F20\u8F93\u7684\u7B97\u6CD5\u6709\u5F88\u591A\u79CD\uFF0Cgit\u53EF\u4F7F\u7528rsa\uFF0Crsa\u8981\u89E3\u51B3\u7684\u4E00\u4E2A\u6838\u5FC3\u95EE\u9898\u662F\uFF0C\u5982\u4F55\u4F7F\u7528\u4E00\u5BF9\u7279\u5B9A\u7684\u6570\u5B57\uFF0C\u4F7F\u5176\u4E2D\u4E00\u4E2A\u6570\u5B57\u53EF\u4EE5\u7528\u6765\u52A0\u5BC6\uFF0C\u800C\u53E6\u5916\u4E00\u4E2A\u6570\u5B57\u53EF\u4EE5\u7528\u6765\u89E3\u5BC6\u3002\u8FD9\u4E24\u4E2A\u6570\u5B57\u5C31\u662F\u4F60\u5728\u4F7F\u7528git\u548Cgithub\uFF0Cgitlab\u7684\u65F6\u5019\u6240\u9047\u5230\u7684public key\u4E5F\u5C31\u662F\u516C\u94A5\u4EE5\u53CAprivate key\u79C1\u94A5\u3002</p><p>\u200B \u5176\u4E2D\uFF0C\u516C\u94A5\u5C31\u662F\u90A3\u4E2A\u7528\u6765\u52A0\u5BC6\u7684\u6570\u5B57\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u4F60\u5728\u672C\u673A\u751F\u6210\u4E86\u516C\u94A5\u4E4B\u540E\uFF0C\u8981\u4E0A\u4F20\u5230github\u7684\u539F\u56E0\u3002\u4ECEgithub\u53D1\u56DE\u6765\u7684\uFF0C\u7528\u90A3\u516C\u94A5\u52A0\u5BC6\u8FC7\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u7528\u4F60\u672C\u5730\u7684\u79C1\u94A5\u6765\u8FD8\u539F\u3002\u5982\u679C\u4F60\u7684key\u4E22\u5931\u4E86\uFF0C\u4E0D\u7BA1\u662F\u516C\u94A5\u8FD8\u662F\u79C1\u94A5\uFF0C\u4E22\u5931\u4E00\u4E2A\u90FD\u4E0D\u80FD\u7528\u4E86\uFF0C\u89E3\u51B3\u65B9\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u5220\u9664\u539F\u6709\u7684key\uFF0C\u91CD\u65B0\u518D\u751F\u6210\u4E00\u6B21\uFF0C\u7136\u540E\u5728github.com\u91CC\u518D\u8BBE\u7F6E\u4E00\u6B21\u5C31\u884C</p><p>\u5728\u4E2A\u4EBA\u7535\u8111\u751F\u6210ssh\u5BC6\u94A5\u540E\uFF0C\u4F1A\u540C\u65F6\u751F\u6210\u4E00\u4E2A\u516C\u5F00\u5BC6\u94A5\u548C\u4E00\u4E2A\u79C1\u6709\u5BC6\u94A5\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5728\u7528\u6237\u4E3B\u76EE\u5F55\u4E0B\u7684.ssh\u76EE\u5F55\u4E2D\uFF0C\u5BC6\u94A5\u4E3Aid_rsa\uFF0C\u516C\u5F00\u5BC6\u94A5\u4E3Aid_rsa.pub\u3002</p><p>\u5BC6\u94A5\u548C\u516C\u5F00\u5BC6\u94A5\u662F\u5171\u540C\u4F7F\u7528\u7684\uFF0C\u534F\u540C\u5F00\u53D1\u4E2D\uFF0C\u4E00\u822C\u4F1A\u5C06\u516C\u94A5\u914D\u7F6E\u5728\u670D\u52A1\u5668\u4E2D\uFF0C\u8FD9\u6837\u65B9\u4FBF\u7ECF\u5E38\u767B\u5F55\uFF0C\u4E5F\u4E0D\u9700\u8981\u8F93\u5165\u5BC6\u7801\uFF0C\u8FD9\u662F\u73B0\u5728\u96C6\u7FA4\u548C\u5404\u79CD\u4E91\u5E73\u53F0\u5E38\u7528\u7684\u767B\u5F55\u65B9\u5F0F\uFF0C\u5BC6\u94A5\u5728\u672C\u5730\u4E0D\u88AB\u6CC4\u6F0F\u5C31\u975E\u5E38\u5B89\u5168\u3002</p><ul><li>\u6B65\u9AA41.\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B58\u5728SSH Key</li></ul><p>\u6253\u5F00\u7535\u8111\u7EC8\u7AEF\uFF0C\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><p>ls -al ~/.ssh</p><p>\u4F1A\u51FA\u73B0\u4E24\u79CD\u60C5\u51B5 \uFF0C\u5982\u6B65\u9AA42\u6240\u793A</p><ul><li>\u6B65\u9AA42. \u751F\u6210/\u8BBE\u7F6ESSH Key</li></ul><p>\u7EE7\u7EED\u4E0A\u4E00\u6B65\u53EF\u80FD\u51FA\u73B0\u7684\u60C5\u51B5</p><p>\uFF081\uFF09\u60C5\u51B5\u4E00\uFF1A\u7EC8\u7AEF\u51FA\u73B0\u6587\u4EF6id_rsa.pub \u6216 id_dsa.pub\uFF0C\u5219\u8868\u793A\u8BE5\u7535\u8111\u5DF2\u7ECF\u5B58\u5728SSH Key\uFF0C\u6B64\u65F6\u53EF\u7EE7\u7EED\u8F93\u5165\u547D\u4EE4\uFF1A</p><p>pbcopy &lt; ~/.ssh/id_rsa.pub</p><p>\u8FD9\u6837\u4F60\u9700\u8981\u7684SSH Key \u5C31\u5DF2\u7ECF\u590D\u5236\u5230\u7C98\u8D34\u677F\u4E0A\u4E86\uFF0C\u7136\u540E\u8FDB\u884C\u6B65\u9AA43</p><p>\uFF082\uFF09\u60C5\u51B5\u4E8C\uFF1A\u7EC8\u7AEF\u672A\u51FA\u73B0id_rsa.pub \u6216 id_dsa.pub\u6587\u4EF6\uFF0C\u8868\u793A\u8BE5\u7535\u8111\u8FD8\u6CA1\u6709\u914D\u7F6ESSH Key\uFF0C\u6B64\u65F6\u9700\u8981\u8F93\u5165\u547D\u4EE4\uFF1A</p><p>ssh-keygen -t rsa -C &quot;<a href="mailto:your_email@example.com">your_email@example.com</a>&quot;</p><p>\u9ED8\u8BA4\u4F1A\u5728\u76F8\u5E94\u8DEF\u5F84\u4E0B\uFF08/your_home_path\uFF09\u751F\u6210id_rsa\u548Cid_rsa.pub\u4E24\u4E2A\u6587\u4EF6\uFF0C\u6B64\u65F6\u7EC8\u7AEF\u4F1A\u663E\u793A\uFF1A</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/1644164187476-6676ff38-2c76-44cb-a75e-93295b945a75.png" alt="img" loading="lazy"></p><p>\u8FDE\u7EED\u56DE\u8F66\u5373\u53EF\uFF0C\u4E5F\u53EF\u80FD\u4F1A\u8BA9\u4F60\u8F93\u5165\u5BC6\u7801\uFF0C\u5BC6\u7801\u5C31\u662F\u4F60\u7684\u5F00\u673A\u5BC6\u7801</p><p>\u6B64\u65F6\u518D\u8F93\u5165\u547D\u4EE4\uFF1Als -al ~/.ssh \u5C31\u4F1A\u51FA\u73B0id_rsa.pub \u548C id_dsa.pub\u4E24\u4E2A\u6587\u4EF6\uFF0C\u7136\u540E\u91CD\u590D\u60C5\u51B5\u4E00\u7684\u6B65\u9AA4\u5373\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u518D\u8FDB\u884C\u6B65\u9AA43\u5373\u53EF\uFF1A</p><p>pbcopy &lt; ~/.ssh/id_rsa.pub</p><ul><li>\u6B65\u9AA43.\u5C06SSH Key\u6DFB\u52A0\u5230Github\u548CGitee\u4E2D</li></ul><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/1644163954973-29d7b898-0036-4f48-b13b-b771f3b3064b.png" alt="img" loading="lazy"></p><p>*<strong>\u56FE\uFF1AGithub*</strong></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/1644164425045-94537f86-65d3-4a34-8554-08bcd00020f6.png" alt="img" loading="lazy"></p><p>*<strong>\u56FE\uFF1AGitee*</strong>[</p>',28),c={href:"https://blog.csdn.net/wsdxsyb/article/details/81904472",target:"_blank",rel:"noopener noreferrer"},d=a('<h2 id="\u4E8C-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u4E8C\uFF1A\u5E38\u7528\u547D\u4EE4</h2><ol><li><p>\u62C9\u53D6\u4EE3\u7801 git clone xxx.git</p></li><li><p>\u521B\u5EFA\u5206\u652F git branch dev \u6216\u8005 git checkout -b dev \u6216\u8005 git switch -c dev</p></li><li><p>\u5207\u6362\u672C\u5730\u5206\u652F git checkout dev \u6216\u8005 git switch dev</p></li><li><p>\u5207\u6362\u5206\u652F\u5E76\u5173\u8054\u8FDC\u7A0B\u5206\u652F git checkout -b dev origin/dev \u6216\u8005 git checkout --track origin/dev</p></li><li><p>\u67E5\u770B\u672C\u5730\u6240\u6709\u5206\u652F git branch\u3001\u67E5\u770B\u8FDC\u7A0B\u6240\u6709\u5206\u652F git branch -r</p></li><li><p>\u5220\u9664\u672C\u5730\u5206\u652F git branch -d dev\u3001\u5220\u9664\u8FDC\u7A0B\u5206\u652F git push origin -d dev</p></li><li><p>\u5C06\u4EE3\u7801\u4ECE\u5DE5\u4F5C\u533A\u6DFB\u52A0\u6682\u5B58\u533A git add .</p></li><li><p>\u67E5\u770B\u5C1A\u672A\u6682\u5B58\u7684\u66F4\u65B0 git diff</p></li><li><p>\u6DFB\u52A0\u63D0\u4EA4\u4FE1\u606F git commit -m &#39;xxxx&#39;\uFF08commit\u6CE8\u91CA\u5199\u9519\uFF0C\u6267\u884C git commit --amend</p></li></ol><p>\u6B64\u65F6\u4F1A\u8FDB\u5165\u9ED8\u8BA4vim\u7F16\u8F91\u5668\uFF0C\u4FEE\u6539\u6CE8\u91CA\u5B8C\u6BD5\u540E\u4FDD\u5B58\uFF09</p>',3),h=a("<li><p>\u63A8\u9001\u4EE3\u7801\u5230\u8FDC\u7A0B\u5206\u652F git push origin dev\u3001\u5F3A\u5236\u63A8\u9001git push -f origin dev\uFF08\u5E38\u5728git rebase\u540E\u4F7F\u7528\uFF09</p></li><li><p>\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u4EE3\u7801 git pull origin dev</p></li><li><p>\u5408\u5E76\u5206\u652F git merge dev</p></li><li><p>\u67E5\u770Bgit\u72B6\u6001 git status</p></li><li><p>\u67E5\u770B\u63D0\u4EA4\u5386\u53F2 git log</p></li><li><p>\u67E5\u770B\u547D\u4EE4\u5386\u53F2 git reflog</p></li><li><p>\u628A\u672C\u5730\u672Apush\u7684\u5206\u53C9\u63D0\u4EA4\u5386\u53F2\u6574\u7406\u6210\u76F4\u7EBF git rebase origin/dev\u3001\u56DE\u5230rebase\u6267\u884C\u4E4B\u524D\u7684\u72B6\u6001 git rebase --abort</p></li><li><p>\u56DE\u9000\u7248\u672C git reset --hard commit_id\u3001\u56DE\u9000\u4E0A\u4E00\u4E2A\u7248\u672C git reset --soft HEAD^ \u7B49\u4E8E git reset --soft HEAD~1</p></li><li><p>\u4FEE\u6539\u5206\u652F\u540D git branch -m oldBranchName newBranchName\u3001git push origin :oldBranchName\u3001git push --set-upstream origin newBranchName</p></li>",9),u={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},b={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},m={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},_={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,[e("p",null,"\u914D\u7F6EGit\u7528\u6237\u540D\u548C\u90AE\u7BB1")],-1),v={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[i('git config --global user.email "'),e("a",{href:"mailto:email@example.com"},"email@example.com"),i('"')],-1),y=e("h2",{id:"\u4E09-\u63D0\u4EA4\u89C4\u8303",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E09-\u63D0\u4EA4\u89C4\u8303","aria-hidden":"true"},"#"),i(" \u4E09\uFF1A\u63D0\u4EA4\u89C4\u8303")],-1),x={href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular",target:"_blank",rel:"noopener noreferrer"},G=a('<ul><li><p>feat \u589E\u52A0\u65B0\u529F\u80FD</p></li><li><p>fix \u4FEE\u590D\u95EE\u9898/BUG</p></li><li><p>style \u4EE3\u7801\u98CE\u683C\u76F8\u5173\u65E0\u5F71\u54CD\u8FD0\u884C\u7ED3\u679C\u7684</p></li><li><p>perf \u4F18\u5316/\u6027\u80FD\u63D0\u5347</p></li><li><p>refactor \u91CD\u6784</p></li><li><p>revert \u64A4\u9500\u4FEE\u6539</p></li><li><p>test \u6D4B\u8BD5\u76F8\u5173</p></li><li><p>docs \u6587\u6863/\u6CE8\u91CA</p></li><li><p>chore \u4F9D\u8D56\u66F4\u65B0/\u811A\u624B\u67B6\u914D\u7F6E\u4FEE\u6539\u7B49</p></li><li><p>workflow \u5DE5\u4F5C\u6D41\u6539\u8FDB</p></li><li><p>ci \u6301\u7EED\u96C6\u6210</p></li><li><p>types \u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\u66F4\u6539</p></li><li><p>wip \u5F00\u53D1\u4E2D</p></li></ul><h2 id="\u56DB-codereview\u5E38\u7528\u7F29\u5199" tabindex="-1"><a class="header-anchor" href="#\u56DB-codereview\u5E38\u7528\u7F29\u5199" aria-hidden="true">#</a> \u56DB\uFF1ACodeReview\u5E38\u7528\u7F29\u5199</h2><p>PR: Pull Request. \u62C9\u53D6\u8BF7\u6C42\uFF0C\u7ED9\u5176\u4ED6\u9879\u76EE\u63D0\u4EA4\u4EE3\u7801</p><p>LGTM: Looks Good To Me. \u6715\u77E5\u9053\u4E86 \u4EE3\u7801\u5DF2\u7ECF\u8FC7 review\uFF0C\u53EF\u4EE5\u5408\u5E76</p><p>SGTM: Sounds Good To Me. \u548C\u4E0A\u9762\u90A3\u53E5\u610F\u601D\u5DEE\u4E0D\u591A\uFF0C\u4E5F\u662F\u5DF2\u7ECF\u901A\u8FC7\u4E86 review \u7684\u610F\u601D</p><p>WIP: Work In Progress. \u4F20\u8BF4\u4E2D\u63D0 PR \u7684\u6700\u4F73\u5B9E\u8DF5\u662F\uFF0C\u5982\u679C\u4F60\u6709\u4E2A\u6539\u52A8\u5F88\u5927\u7684 PR\uFF0C\u53EF\u4EE5\u5728\u5199\u4E86\u4E00\u90E8\u5206\u7684\u60C5\u51B5\u4E0B\u5148\u63D0\u4EA4\uFF0C\u4F46\u662F\u5728\u6807\u9898\u91CC\u5199\u4E0A WIP\uFF0C\u4EE5\u544A\u8BC9\u9879\u76EE\u7EF4\u62A4\u8005\u8FD9\u4E2A\u529F\u80FD\u8FD8\u672A\u5B8C\u6210\uFF0C\u65B9\u4FBF\u7EF4\u62A4\u8005\u63D0\u524D review \u90E8\u5206\u63D0\u4EA4\u7684\u4EE3\u7801\u3002</p><p>PTAL: Please Take A Look. \u4F60\u6765\u7785\u7785\uFF1F\u7528\u6765\u63D0\u793A\u522B\u4EBA\u6765\u770B\u4E00\u4E0B</p><p>TBR: To Be Reviewed. \u63D0\u793A\u7EF4\u62A4\u8005\u8FDB\u884C review</p><p>TL;DR: Too Long; Didn&#39;t Read. \u592A\u957F\u61D2\u5F97\u770B\u3002\u4E5F\u6709\u5F88\u591A\u6587\u6863\u5728\u505A\u7B80\u7565\u63CF\u8FF0\u4E4B\u524D\u4F1A\u5199\u8FD9\u4E48\u4E00\u53E5</p><p>TBD: To Be Done(or Defined/Discussed/Decided/Determined). \u6839\u636E\u8BED\u5883\u4E0D\u540C\u610F\u4E49\u6709\u6240\u533A\u522B\uFF0C\u4F46\u4E00\u822C\u90FD\u662F\u8FD8\u6CA1\u641E\u5B9A\u7684\u610F\u601D</p><p>\u6CE8\u610F\uFF1Adev\u4EE3\u8868\u5206\u652F\u540D\uFF08\u53EF\u968F\u4FBF\u547D\u540D\uFF09</p>',11);function w(S,T){const t=n("ExternalLinkIcon");return p(),r("div",null,[g,e("p",null,[i("]("),e("a",c,[i("https://blog.csdn.net/wsdxsyb/article/details/81904472"),l(t)]),i(")")]),d,e("ol",null,[h,e("li",null,[e("p",null,[i("\u67E5\u770Bgit\u914D\u7F6E git config --global --list\u3001git config --global "),e("a",u,[i("user.name"),l(t)])])]),e("li",null,[e("p",null,[i("git config --global --add "),e("a",b,[i("user.name"),l(t)]),i(" newName\uFF08\u589E\uFF09")])]),e("li",null,[e("p",null,[i("git config --global --unset "),e("a",m,[i("user.name"),l(t)]),i("\uFF08\u5220\uFF09")])]),e("li",null,[e("p",null,[i("git config --global "),e("a",_,[i("user.name"),l(t)]),i(" newName\uFF08\u6539\uFF09")])]),f]),e("p",null,[i("git config --global "),e("a",v,[i("user.name"),l(t)]),i(' "Your Name"')]),k,y,e("p",null,[e("a",x,[i("https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular"),l(t)])]),G])}const N=o(s,[["render",w],["__file","Git\u3001GitHub\u3001Gitee.html.vue"]]);export{N as default};
