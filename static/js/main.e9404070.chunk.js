(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),s=c(5),i=c(1),b=c(4),d=c.n(b),o=c(0),r=function(t){var e=t.tabs,c=t.selectedTabId,a=t.onTabSelected;return Object(o.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return Object(o.jsx)("li",{className:d()({"is-active":c===e}),"data-cy":"Tab",children:Object(o.jsx)("a",{"data-cy":"TabLink",href:"#".concat(e),onClick:function(){return a(e)},children:n})},e)}))})},l=(c(11),c(12),c(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=function(){var t=Object(i.useState)(l[0].id),e=Object(s.a)(t,2),c=e[0],a=e[1],n=l.find((function(t){return t.id===c}));return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(n.title)}),Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)(r,{tabs:l,selectedTabId:c,onTabSelected:a})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:n.content})]})]})};n.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e9404070.chunk.js.map