"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{913:function(e,n,t){t.d(n,{Wf:function(){return o},Xm:function(){return h},_L:function(){return i},in:function(){return p},sJ:function(){return s}});var r=t(861),a=t(757),u=t.n(a),c=t(340);c.Z.defaults.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQ2OWI3NDY1OGQwOTRlNDgzY2VmNzhhZmE5NDI4YSIsInN1YiI6IjY1ZGQ5M2VmM2ZmMmRmMDE2NDBhODdiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GWyNMjSLIs8SiX8wXjHOjJnKl-N0SjUtPPkk85oPTQ",accept:"application/json"};var i=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("https://api.themoviedb.org/3/trending/all/day?language=en-US");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,(0,c.Z)("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=".concat(t,"&query=").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},168:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(439),a=t(913),u=t(791),c=t(689),i="Reviews_author__CqYAZ",o=t(184),s=function(){var e=(0,u.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],p=(0,c.UO)().movieId,h=(0,u.useState)(!1),f=(0,r.Z)(h,2),d=f[0],l=f[1],v=(0,u.useState)(""),m=(0,r.Z)(v,2),g=m[0],Z=m[1];return(0,u.useEffect)((function(){l(!0),(0,a.Xm)(p).then((function(e){return s(e.results)})).catch((function(e){return Z(e.message)})).finally(l(!1))}),[p]),(0,o.jsxs)("div",{children:[g&&(0,o.jsxs)("p",{children:["Error! ",g]}),d&&(0,o.jsx)("p",{children:"Loading..."}),t.length>0?(0,o.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{className:i,children:["Author: ",t]}),(0,o.jsx)("p",{children:r})]},n)}))}):(0,o.jsx)("p",{children:"We don't have any review for this movie"})]})}}}]);
//# sourceMappingURL=168.643ace88.chunk.js.map