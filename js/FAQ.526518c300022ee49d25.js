(self.webpackChunktrust_frontend=self.webpackChunktrust_frontend||[]).push([[83],{6290:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var r=n(2137),a=n(4699),s=n(7757),c=n.n(s),u=n(2203),l=n(2394),o=n(3264),d=n.n(o),f=n(9669),i=n.n(f);const h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i().get(t,{headers:e,params:n})};var p=n(2661),m=n(8456),v=n.n(m),g=n(6388),k=n.n(g),E=n(1667),w=n.n(E);const b=function(){var t=(0,o.useState)({status:"pending",content:""}),e=(0,a.Z)(t,2),n=e[0],s=e[1];return(0,o.useEffect)((function(){(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h("https://access.redhat.com/hydra/rest/drupal/articles/4602981");case 3:e=t.sent.data,s({status:"fulfilled",content:e.body.html}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),s({status:"error",content:""}),"".concat(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[]),d().createElement(d().Fragment,null,("pending"===n.status||"error"===n.status)&&d().createElement(p.Z,null),"fulfilled"===n.status&&d().createElement(u.Z,{className:"faq-card"},d().createElement(l.e,null,d().createElement(v(),{rehypePlugins:[k(),w()]},n.content))))}}}]);