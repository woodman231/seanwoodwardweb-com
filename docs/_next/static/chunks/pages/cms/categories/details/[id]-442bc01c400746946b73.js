_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{YcX1:function(e,t,n){"use strict";function r(e){for(var t=e.split(" "),n=0;n<t.length;n++)t[n]=t[n].replace(/[^\w\s]|_/g,"").toLowerCase();return t.join("-")}n.d(t,"a",(function(){return r}))},fEIC:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n("nKUr"),c=n("rePB"),a=n("o0o1"),o=n.n(a),s=n("HaE+"),i=n("CafY"),u=n("g4pe"),l=n.n(u),j=n("YFqc"),b=n.n(j),f=n("20a2"),p=n("q1tI"),O=n("QojX"),d=n("cWnB"),h=n("YcX1");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(){var e=Object(p.useState)({}),t=e[0],n=e[1],c=Object(p.useState)([]),a=(c[0],c[1],Object(f.useRouter)()),u=a.query.id;Object(p.useEffect)(Object(s.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/categories/".concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n(r);case 7:case"end":return e.stop()}}),e)}))),[]);var j=function(){var e=Object(s.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/api/categories/".concat(u),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent,a.back();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Are you sure that you want to delete this category?")){e.next=6;break}return e.next=5,fetch("/api/categories/".concat(u),{method:"DELETE"});case 5:a.back();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(l.a,{children:Object(r.jsx)("title",{children:"Sean Woodward | Blog - CMS - Category Details"})}),Object(r.jsx)(b.a,{href:"/cms/categories/",children:Object(r.jsx)("a",{className:"btn btn-link",children:"Back To Categories List"})}),Object(r.jsx)("h5",{className:"text-success",children:"Category Details"}),Object(r.jsxs)(O.a,{className:"border border-light p-2",onSubmit:j,children:[Object(r.jsxs)(O.a.Group,{children:[Object(r.jsx)(O.a.Label,{children:"Title"}),Object(r.jsx)(O.a.Control,{value:t.title,onChange:function(e){return function(e){var r=e.target.value,c=Object(h.a)(r);n(x(x({},t),{},{title:r,slug:c}))}(e)},type:"text"})]}),Object(r.jsxs)(O.a.Group,{children:[Object(r.jsx)(O.a.Label,{children:"Slug"}),Object(r.jsx)(O.a.Control,{value:t.slug,onChange:function(e){return function(e){var r=e.target.value;n(x(x({},t),{},{slug:r}))}(e)},type:"text"})]}),Object(r.jsxs)(O.a.Group,{children:[Object(r.jsx)(O.a.Label,{children:"Description"}),Object(r.jsx)(O.a.Control,{as:"textarea",rows:3,value:t.description,onChange:function(e){return function(e){var r=e.target.value;n(x(x({},t),{},{description:r}))}(e)}})]}),Object(r.jsx)(d.a,{type:"submit",children:"Update"}),Object(r.jsx)(d.a,{variant:"danger",className:"float-right",onClick:g,children:"Delete"})]})]})}},zYOi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cms/categories/details/[id]",function(){return n("fEIC")}])}},[["zYOi",0,2,1,3,4]]]);