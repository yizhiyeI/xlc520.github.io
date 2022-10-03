import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as r,b as t,e as o,d as e,r as n}from"./app.ffebafef.js";const s={},l=e('<h1 id="_1-\u521D\u8BC6-typescript" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u8BC6-typescript" aria-hidden="true">#</a> 1. \u521D\u8BC6 TypeScript</h1><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28ca61cc160c417c8497a00defdca5f0~tplv-k3u1fbpfcp-watermark.image" alt="TS\u4E0EJS.png" loading="lazy"></p><h2 id="typescript-\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#typescript-\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> TypeScript \u7684\u4ECB\u7ECD</h2><p>TypeScript\u662F\u4E00\u79CD\u7531\u5FAE\u8F6F\u5F00\u53D1\u7684\u5F00\u6E90\u3001\u8DE8\u5E73\u53F0\u7684\u7F16\u7A0B\u8BED\u8A00\u3002\u5B83\u662FJavaScript\u7684\u8D85\u96C6\uFF0C\u6700\u7EC8\u4F1A\u88AB\u7F16\u8BD1\u4E3AJavaScript\u4EE3\u7801\u3002</p><p>2012\u5E7410\u6708\uFF0C\u5FAE\u8F6F\u53D1\u5E03\u4E86\u9996\u4E2A\u516C\u5F00\u7248\u672C\u7684TypeScript\uFF0C2013\u5E746\u670819\u65E5\uFF0C\u5728\u7ECF\u5386\u4E86\u4E00\u4E2A\u9884\u89C8\u7248\u4E4B\u540E\u5FAE\u8F6F\u6B63\u5F0F\u53D1\u5E03\u4E86\u6B63\u5F0F\u7248TypeScript</p><p>TypeScript\u7684\u4F5C\u8005\u662F\u5B89\u5FB7\u65AF\xB7\u6D77\u5C14\u65AF\u4F2F\u683C\uFF0CC#\u7684\u9996\u5E2D\u67B6\u6784\u5E08\u3002\u5B83\u662F\u5F00\u6E90\u548C\u8DE8\u5E73\u53F0\u7684\u7F16\u7A0B\u8BED\u8A00\u3002</p><p>TypeScript\u6269\u5C55\u4E86JavaScript\u7684\u8BED\u6CD5\uFF0C\u6240\u4EE5\u4EFB\u4F55\u73B0\u6709\u7684JavaScript\u7A0B\u5E8F\u53EF\u4EE5\u8FD0\u884C\u5728TypeScript\u73AF\u5883\u4E2D\u3002</p><p>TypeScript\u662F\u4E3A\u5927\u578B\u5E94\u7528\u7684\u5F00\u53D1\u800C\u8BBE\u8BA1\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7F16\u8BD1\u4E3AJavaScript\u3002</p><p>TypeScript \u662F JavaScript \u7684\u4E00\u4E2A\u8D85\u96C6\uFF0C\u4E3B\u8981\u63D0\u4F9B\u4E86\u7C7B\u578B\u7CFB\u7EDF\u548C\u5BF9 ES6+ \u7684\u652F\u6301**\uFF0C\u5B83\u7531 Microsoft \u5F00\u53D1\uFF0C\u4EE3\u7801\u5F00\u6E90\u4E8E GitHub \u4E0A</p>',9),S=r("strong",null,"TypeScript \u662F JavaScript \u7684\u4E00\u4E2A\u8D85\u96C6",-1),d=r("strong",null,"\u7C7B\u578B\u7CFB\u7EDF",-1),h=r("strong",null,"\u5BF9 ES6+ \u7684\u652F\u6301",-1),_={href:"https://github.com/Microsoft/TypeScript",target:"_blank",rel:"noopener noreferrer"},u=e('<h2 id="typescript-\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#typescript-\u7684\u7279\u70B9" aria-hidden="true">#</a> TypeScript \u7684\u7279\u70B9</h2><p>TypeScript \u4E3B\u8981\u6709 3 \u5927\u7279\u70B9\uFF1A</p><ul><li><strong>\u59CB\u4E8EJavaScript\uFF0C\u5F52\u4E8EJavaScript</strong></li></ul><p>TypeScript \u53EF\u4EE5\u7F16\u8BD1\u51FA\u7EAF\u51C0\u3001 \u7B80\u6D01\u7684 JavaScript \u4EE3\u7801\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8FD0\u884C\u5728\u4EFB\u4F55\u6D4F\u89C8\u5668\u4E0A\u3001Node.js \u73AF\u5883\u4E2D\u548C\u4EFB\u4F55\u652F\u6301 ECMAScript 3\uFF08\u6216\u66F4\u9AD8\u7248\u672C\uFF09\u7684JavaScript \u5F15\u64CE\u4E2D\u3002</p><ul><li><strong>\u5F3A\u5927\u7684\u7C7B\u578B\u7CFB\u7EDF</strong></li></ul><p><strong>\u7C7B\u578B\u7CFB\u7EDF</strong>\u5141\u8BB8 JavaScript \u5F00\u53D1\u8005\u5728\u5F00\u53D1 JavaScript \u5E94\u7528\u7A0B\u5E8F\u65F6\u4F7F\u7528\u9AD8\u6548\u7684\u5F00\u53D1\u5DE5\u5177\u548C\u5E38\u7528\u64CD\u4F5C\u6BD4\u5982\u9759\u6001\u68C0\u67E5\u548C\u4EE3\u7801\u91CD\u6784\u3002</p><ul><li><strong>\u5148\u8FDB\u7684 JavaScript</strong></li></ul><p>TypeScript \u63D0\u4F9B\u6700\u65B0\u7684\u548C\u4E0D\u65AD\u53D1\u5C55\u7684 JavaScript \u7279\u6027\uFF0C\u5305\u62EC\u90A3\u4E9B\u6765\u81EA 2015 \u5E74\u7684 ECMAScript \u548C\u672A\u6765\u7684\u63D0\u6848\u4E2D\u7684\u7279\u6027\uFF0C\u6BD4\u5982\u5F02\u6B65\u529F\u80FD\u548C Decorators\uFF0C\u4EE5\u5E2E\u52A9\u5EFA\u7ACB\u5065\u58EE\u7684\u7EC4\u4EF6\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>TypeScript \u5728\u793E\u533A\u7684\u6D41\u884C\u5EA6\u8D8A\u6765\u8D8A\u9AD8\uFF0C\u5B83\u975E\u5E38\u9002\u7528\u4E8E\u4E00\u4E9B\u5927\u578B\u9879\u76EE\uFF0C\u4E5F\u975E\u5E38\u9002\u7528\u4E8E\u4E00\u4E9B\u57FA\u7840\u5E93\uFF0C\u6781\u5927\u5730\u5E2E\u52A9\u6211\u4EEC\u63D0\u5347\u4E86\u5F00\u53D1\u6548\u7387\u548C\u4F53\u9A8C\u3002</p>',10);function y(f,T){const p=n("ExternalLinkIcon");return c(),i("div",null,[l,r("p",null,[S,t("\uFF0C\u4E3B\u8981\u63D0\u4F9B\u4E86"),d,t("\u548C"),h,t("\uFF0C\u5B83\u7531 Microsoft \u5F00\u53D1\uFF0C\u4EE3\u7801"),r("a",_,[t("\u5F00\u6E90\u4E8E GitHub"),o(p)]),t(" \u4E0A")]),u])}const m=a(s,[["render",y],["__file","01_\u521D\u8BC6TS.html.vue"]]);export{m as default};
