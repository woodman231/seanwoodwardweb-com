_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"1wpt":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n("nKUr"),r=n("CafY"),s=n("g4pe"),i=n.n(s),o=n("YFqc"),l=n.n(o),u=n("XWsC"),c=n("wZee"),d=n.n(c),g=n("q1tI"),p=(n("lSgE"),!0);function f(e){var t=e.articleData;Object(g.useEffect)((function(){window.setTimeout((function(){d.a.highlightAll()}),100)}),[]);var n=function(e){return"/blog/".concat(e.slug)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(i.a,{children:Object(a.jsxs)("title",{children:["Sean Woodward | Blog | ",t.category.title," | ",t.title]})}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(l.a,{href:"/blog",passHref:!0,children:Object(a.jsx)(u.a.Item,{children:"Blog"})}),Object(a.jsx)(l.a,{href:n(t.category),passHref:!0,children:Object(a.jsx)(u.a.Item,{children:t.category.title})}),Object(a.jsx)(u.a.Item,{active:!0,children:t.title})]}),Object(a.jsx)("h1",{className:"display-4",children:t.title}),Object(a.jsxs)("p",{children:["By Sean Woodward on ",new Date(t.date).toLocaleDateString()," in ",Object(a.jsx)(l.a,{href:n(t.category),children:Object(a.jsx)("a",{children:t.category.title})})]}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})})}},"3hPz":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[category]/[article]",function(){return n("1wpt")}])},XWsC:function(e,t,n){"use strict";var a=n("RAs/"),r=n("hVfy"),s=n("TSYQ"),i=n.n(s),o=n("q1tI"),l=n.n(o),u=n("vUet"),c=n("dbZe"),d=l.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.active,o=e.children,d=e.className,g=e.as,p=void 0===g?"li":g,f=e.linkAs,h=void 0===f?c.a:f,m=e.linkProps,b=e.href,v=e.title,y=e.target,k=Object(r.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),w=Object(u.a)(n,"breadcrumb-item");return l.a.createElement(p,Object(a.a)({ref:t},k,{className:i()(w,d,{active:s}),"aria-current":s?"page":void 0}),s?o:l.a.createElement(h,Object(a.a)({},m,{href:b,title:v,target:y}),o))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var g=d,p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,o=e.listProps,c=e.children,d=e.label,g=e.as,p=void 0===g?"nav":g,f=Object(r.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(u.a)(n,"breadcrumb");return l.a.createElement(p,Object(a.a)({"aria-label":d,className:s,ref:t},f),l.a.createElement("ol",Object(a.a)({},o,{className:i()(h,null==o?void 0:o.className)}),c))}));p.displayName="Breadcrumb",p.defaultProps={label:"breadcrumb",listProps:{}},p.Item=g;t.a=p},lSgE:function(e,t){!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,n){return"(?:"+t[+n]+")"}))}function n(e,n,a){return RegExp(t(e,n),a||"")}function a(e,t){for(var n=0;n<t;n++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var r="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",s="class enum interface struct",i="add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var u=l(s),c=RegExp(l(r+" "+s+" "+i+" "+o)),d=l(s+" "+i+" "+o),g=l(r+" "+s+" "+o),p=a(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),f=a(/\((?:[^()]|<<self>>)*\)/.source,2),h=/@?\b[A-Za-z_]\w*\b/.source,m=t(/<<0>>(?:\s*<<1>>)?/.source,[h,p]),b=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[d,m]),v=/\[\s*(?:,\s*)*\]/.source,y=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[b,v]),k=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[p,f,v]),w=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[k]),x=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,b,v]),F={keyword:c,punctuation:/[<>()?,.:[\]]/},A=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,j=/"(?:\\.|[^\\"\r\n])*"/.source,_=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[_]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[j]),lookbehind:!0,greedy:!0},{pattern:RegExp(A),greedy:!0,alias:"character"}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[b]),lookbehind:!0,inside:F},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[h,x]),lookbehind:!0,inside:F},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[h]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[u,m]),lookbehind:!0,inside:F},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[b]),lookbehind:!0,inside:F},{pattern:n(/(\bwhere\s+)<<0>>/.source,[h]),lookbehind:!0},{pattern:n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[y]),lookbehind:!0,inside:F},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[x,g,h]),inside:F}],keyword:c,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[f]),lookbehind:!0,alias:"class-name",inside:F},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[x,b]),inside:F,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[x]),lookbehind:!0,inside:F,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[h,p]),inside:{function:n(/^<<0>>/.source,[h]),generic:{pattern:RegExp(p),alias:"class-name",inside:F}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[u,m,h,x,c.source]),lookbehind:!0,inside:{keyword:c,"class-name":{pattern:RegExp(x),greedy:!0,inside:F},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var $=j+"|"+A,E=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[$]),S=a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),O=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,P=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[b,S]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[O,P]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[O]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[S]),inside:e.languages.csharp},"class-name":{pattern:RegExp(b),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var N=/:[^}\r\n]+/.source,C=a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),z=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[C,N]),T=a(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[$]),2),B=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[T,N]);function I(t,a){return{interpolation:{pattern:n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[a,N]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[z]),lookbehind:!0,greedy:!0,inside:I(z,C)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[B]),lookbehind:!0,greedy:!0,inside:I(B,T)}]})}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function a(t){if(n[t])return n[t].exports;var r=n[t]={exports:{}},s=!0;try{e[t](r,r.exports,a),s=!1}finally{s&&delete n[t]}return r.exports}return a.ab=t+"/",a(149)}()}).call(this,"/")},wZee:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,s;switch(n=n||{},a.util.type(t)){case"Object":if(s=a.util.objId(t),n[s])return n[s];for(var i in r={},n[s]=r,t)t.hasOwnProperty(i)&&(r[i]=e(t[i],n));return r;case"Array":return s=a.util.objId(t),n[s]?n[s]:(r=[],n[s]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var s=(r=r||a.languages)[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=s[o])}var u=r[e];return r[e]=i,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,r,s){s=s||{};var i=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],u=a.util.type(l);"Object"!==u||s[i(l)]?"Array"!==u||s[i(l)]||(s[i(l)]=!0,e(l,n,o,s)):(s[i(l)]=!0,e(l,n,null,s))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var s,i=0;s=r.elements[i++];)a.highlightElement(s,!0===t,r.callback)},highlightElement:function(n,r,s){var i=a.util.getLanguage(n),o=a.languages[i];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var u={element:n,language:i,grammar:o,code:n.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),s&&s.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(s&&s.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,t,n){var s={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",s),s.tokens=a.tokenize(s.code,s.grammar),a.hooks.run("after-tokenize",s),r.stringify(a.util.encode(s.tokens),s.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new o;return l(r,r.head,e),i(e,r,t,r.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}},Token:r};function r(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function s(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function i(e,t,n,o,c,d){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var p=n[g];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(d&&d.cause==g+","+f)return;var h=p[f],m=h.inside,b=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var k=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,k+"g")}for(var w=h.pattern||h,x=o.next,F=c;x!==t.tail&&!(d&&F>=d.reach);F+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof r)){var j,_=1;if(v){if(!(j=s(w,F,e,b)))break;var $=j.index,E=j.index+j[0].length,S=F;for(S+=x.value.length;$>=S;)S+=(x=x.next).value.length;if(F=S-=x.value.length,x.value instanceof r)continue;for(var O=x;O!==t.tail&&(S<E||"string"===typeof O.value);O=O.next)_++,S+=O.value.length;_--,A=e.slice(F,S),j.index-=F}else if(!(j=s(w,0,A,b)))continue;$=j.index;var P=j[0],N=A.slice(0,$),C=A.slice($+P.length),z=F+A.length;d&&z>d.reach&&(d.reach=z);var T=x.prev;N&&(T=l(t,T,N),F+=N.length),u(t,T,_),x=l(t,T,new r(g,m?a.tokenize(P,m):P,y,P)),C&&l(t,x,C),_>1&&i(e,t,n,x.prev,F,{cause:g+","+f,reach:z})}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function u(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(s.classes,i):s.classes.push(i)),a.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+o+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,s=n.code,i=n.immediateClose;e.postMessage(a.highlight(s,a.languages[r],r)),i&&e.close()}),!1),a):a;var c=a.util.currentScript();function d(){a.manual||a.highlightAll()}if(c&&(a.filename=c.src,c.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var g=document.readyState;"loading"===g||"interactive"===g&&c&&c.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",s)}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){if("undefined"!==typeof self&&self.Prism&&self.document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a="loading",r="loaded",s='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',i=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+s})),e.hooks.add("before-sanity-check",(function(i){var o=i.element;if(o.matches(s)){i.code="",o.setAttribute(n,a);var u=o.appendChild(document.createElement("CODE"));u.textContent="Loading\u2026";var c=o.getAttribute("data-src"),d=i.language;if("none"===d){var g=(/\.(\w+)$/.exec(c)||[,"none"])[1];d=t[g]||g}l(u,d),l(o,d);var p=e.plugins.autoloader;p&&p.loadLanguages(d);var f=new XMLHttpRequest;f.open("GET",c,!0),f.onreadystatechange=function(){var t,a;4==f.readyState&&(f.status<400&&f.responseText?(o.setAttribute(n,r),u.textContent=f.responseText,e.highlightElement(u)):(o.setAttribute(n,"failed"),f.status>=400?u.textContent=(t=f.status,a=f.statusText,"\u2716 Error "+t+" while fetching file: "+a):u.textContent="\u2716 Error: File does not exist or is empty"))},f.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var n,a=(t||document).querySelectorAll(s),r=0;n=a[r++];)e.highlightElement(n)}};var o=!1;e.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function l(e,t){var n=e.className;n=n.replace(i," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}).call(this,n("ntbh"))}},[["3hPz",0,2,1,3]]]);