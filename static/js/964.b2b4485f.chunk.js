"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{368:function(e,t,r){var n=r(689),a=r(87),s=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.original_title||e.title||e.name})},e.id)}))})}},964:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(504),u=r(791),o=r(87),l="SearchForm_moviesInput__Kuivi",f="SearchForm_moviesButton__UpMp0",m=r(184),h=function(e){var t=e.onSearch;return(0,m.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var r=e.currentTarget;t(r.elements.text.value),r.reset()},children:[(0,m.jsx)("input",{className:l,type:"text",name:"text"}),(0,m.jsx)("button",{className:f,type:"submit",children:"Search"})]})},v="Movies_moviesContainer__RXtJy",p=r(368),x=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],l=(0,u.useState)(!1),f=(0,a.Z)(l,2),x=f[0],d=f[1],_=(0,u.useState)(""),j=(0,a.Z)(_,2),k=j[0],S=j[1],b=(0,o.lr)(""),Z=(0,a.Z)(b,2),w=Z[0],g=Z[1];return(0,u.useEffect)((function(){var e=w.get("search"),t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=15;break}return d(!0),t.prev=2,t.next=5,(0,i.Wf)(e);case 5:r=t.sent,s(r.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),S(t.t0.message);case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[w]),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)(h,{onSearch:function(e){g({search:e})}}),k&&(0,m.jsxs)("p",{children:["Error! ",k]}),x&&(0,m.jsx)("p",{children:"Loading..."}),(0,m.jsx)(p.Z,{movies:r})]})}}}]);
//# sourceMappingURL=964.b2b4485f.chunk.js.map