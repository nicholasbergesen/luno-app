(this["webpackJsonpluno-app"]=this["webpackJsonpluno-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),o=(n(11),n.p+"static/media/logo.6ce24c58.svg"),i=(n(12),n(3)),l=n.n(i),u=n(5),j=n(6),p=n(0),d=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/lunoBalance");case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:n=e.sent,r(n.balance);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:n.map((function(e){return Object(p.jsxs)("li",{children:[e.balance," ",e.asset]},e.account_id)}))})})};var b=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(p.jsxs)("p",{children:["Edit ",Object(p.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(p.jsx)(d,{}),Object(p.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.eec82134.chunk.js.map