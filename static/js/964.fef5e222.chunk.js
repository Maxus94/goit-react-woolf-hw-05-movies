"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{368:function(e,t,r){var n=r(689),s=r(87),a=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.original_title||e.title||e.name})},e.id)}))})}},964:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),s=r(439),a=r(757),c=r.n(a),i=r(504),u=r(791),o=r(87),l="SearchForm_moviesInput__Kuivi",f="SearchForm_moviesButton__UpMp0",m=r(184),h=function(e){var t=e.onSearch;return(0,m.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var r=e.currentTarget;t(r.elements.text.value),r.reset()},children:[(0,m.jsx)("input",{className:l,type:"text",name:"text"}),(0,m.jsx)("button",{className:f,type:"submit",children:"Search"})]})},v="Movies_moviesContainer__RXtJy",p=r(368),x=function(){var e=(0,u.useState)(""),t=(0,s.Z)(e,2),r=t[0],a=t[1],l=(0,u.useState)([]),f=(0,s.Z)(l,2),x=f[0],d=f[1],_=(0,u.useState)(!1),j=(0,s.Z)(_,2),S=j[0],k=j[1],Z=(0,u.useState)(""),b=(0,s.Z)(Z,2),w=b[0],g=b[1],y=(0,o.lr)(""),C=(0,s.Z)(y,2),N=C[0],E=C[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,(0,i.Wf)(r);case 4:t=e.sent,d(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(e.t0.message);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),t=N.get("search");t&&a(t),e()}),[N,r]),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)(h,{onSearch:function(e){E({search:e})}}),w&&(0,m.jsxs)("p",{children:["Error! ",w]}),S&&(0,m.jsx)("p",{children:"Loading..."}),(0,m.jsx)(p.Z,{movies:x})]})}}}]);
//# sourceMappingURL=964.fef5e222.chunk.js.map