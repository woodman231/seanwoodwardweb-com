_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{SsrU:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n("nKUr"),a=n("rePB"),c=n("o0o1"),s=n.n(c),i=n("HaE+"),o=n("CafY"),l=n("g4pe"),u=n.n(l),j=n("YFqc"),b=n.n(j),d=n("20a2"),p=n("q1tI"),f=n("QojX"),h=n("cWnB"),O=n("UYf5");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){var e=Object(p.useState)({}),t=e[0],n=e[1],a=Object(p.useState)([]),c=a[0],l=a[1],j=Object(d.useRouter)(),x=j.query.id;Object(p.useEffect)(Object(i.a)(s.a.mark((function e(){var t,r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/categories?returnType=array");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,l(r),e.next=9,fetch("/api/posts/".concat(x));case 9:return a=e.sent,e.next=12,a.json();case 12:c=e.sent,n(c);case 14:case"end":return e.stop()}}),e)}))),[]);var v=function(){var e=Object(i.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/api/posts/".concat(x),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent,j.back();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Are you sure that you want to delete this Article?")){e.next=6;break}return e.next=5,fetch("/api/posts/".concat(x),{method:"DELETE"});case 5:j.back();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(u.a,{children:Object(r.jsx)("title",{children:"Sean Woodward | Blog - CMS - Update Article"})}),Object(r.jsx)(b.a,{href:"/cms/articles/",children:Object(r.jsx)("a",{className:"btn btn-link",children:"Back To Articles List"})}),Object(r.jsx)("h5",{className:"text-success",children:"Create New Article"}),Object(r.jsxs)(f.a,{className:"border border-light p-2",onSubmit:v,children:[Object(r.jsxs)(f.a.Group,{children:[Object(r.jsx)(f.a.Label,{children:"Category"}),Object(r.jsxs)(f.a.Control,{as:"select",value:t.category,onChange:function(e){return function(e){var r=e.target.value;n(g(g({},t),{},{category:r}))}(e)},children:[Object(r.jsx)("option",{value:"",children:"Please Select"}),c.map((function(e,t){return Object(r.jsx)("option",{value:e.uuid,children:e.title},t)}))]})]}),Object(r.jsxs)(f.a.Group,{children:[Object(r.jsx)(f.a.Label,{children:"Title"}),Object(r.jsx)(f.a.Control,{value:t.title,onChange:function(e){return function(e){var r=e.target.value,a=slugifyString(r);n(g(g({},t),{},{title:r,slug:a}))}(e)},type:"text"})]}),Object(r.jsxs)(f.a.Group,{children:[Object(r.jsx)(f.a.Label,{children:"Slug"}),Object(r.jsx)(f.a.Control,{value:t.slug,onChange:function(e){return function(e){var r=e.target.value;n(g(g({},t),{},{slug:r}))}(e)},type:"text"})]}),Object(r.jsxs)(f.a.Group,{children:[Object(r.jsx)(f.a.Label,{children:"Date"}),Object(r.jsx)("div",{className:"form-control",readonly:!0,children:new Date(t.date).toLocaleString()}),Object(r.jsx)(f.a.Text,{children:"The date will be updated after saving"})]}),Object(r.jsxs)(f.a.Group,{children:[Object(r.jsx)(f.a.Label,{children:"Description"}),Object(r.jsx)(f.a.Control,{as:"textarea",rows:3,value:t.description,onChange:function(e){return function(e){var r=e.target.value;n(g(g({},t),{},{description:r}))}(e)}})]}),Object(r.jsxs)(f.a.Group,{children:[Object(r.jsx)(f.a.Label,{children:"Content"}),Object(r.jsx)(O.a,{value:t.content,init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount codesample"],toolbar:"undo redo | formatselect | bold italic underline | backcolor |              alignleft aligncenter alignright alignjustify |              bullist numlist outdent indent | removeformat | link image codesample | code"},onEditorChange:function(e,r){n(g(g({},t),{},{content:e}))}})]}),Object(r.jsx)(h.a,{type:"submit",children:"Update"}),Object(r.jsx)(h.a,{variant:"danger",className:"float-right",onClick:m,children:"Delete"})]})]})})}},aURy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cms/articles/details/[id]",function(){return n("SsrU")}])}},[["aURy",0,2,1,3,4,5]]]);