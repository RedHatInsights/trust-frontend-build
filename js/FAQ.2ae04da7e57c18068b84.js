(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{762:function(e,t,a){"use strict";a.r(t);var n=a(617),r=a.n(n),c=a(619),s=a.n(c),u=a(566),o=a.n(u),l=(a(363),a(1)),i=a.n(l),d=a(620),f=a.n(d),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f.a.get(e,{headers:t,params:a})},h=a(296),m=a(286),v=a(637),w=a.n(v);t.default=function(){var e=Object(l.useState)({status:"pending",content:""}),t=o()(e,2),a=t[0],n=t[1];return Object(l.useEffect)((function(){s()(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("https://access.redhat.com/hydra/rest/drupal/articles/4602981");case 3:t=e.sent.data,n({status:"fulfilled",content:t.body.text}),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),n({status:"error",content:""}),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),i.a.createElement("div",{className:"ins-c-flex-center"},"pending"===a.status||"error"===a.status&&i.a.createElement(m.a,null),"fulfilled"===a.status&&i.a.createElement(h.a,{className:"faq-card"},i.a.createElement(w.a,{source:a.content,escapeHtml:!1})))}}}]);
//# sourceMappingURL=FAQ.2ae04da7e57c18068b84.js.map