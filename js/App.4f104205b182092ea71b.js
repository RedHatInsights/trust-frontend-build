!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],l=0,s=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(A,o)&&A[o]&&s.push(A[o][0]),A[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(N&&N(n);s.length;)s.shift()();return S.push.apply(S,c||[]),t()}function t(){for(var e,n=0;n<S.length;n++){for(var t=S[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==A[a]&&(r=!1)}r&&(S.splice(n--,1),e=M(M.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!E[e])return;for(var t in E[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===b&&P()}(e,n),r&&r(e,n)};var o,a=!0,i="4f104205b182092ea71b",c={},l=[],s=[];function d(n){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==n,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(v={})[n]=e[n],f("ready");break;case"ready":k(n);break;case"prepare":case"check":case"dispose":case"apply":(g=g||[]).push(n)}},check:j,apply:D,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:c[n]};return o=void 0,t}var p=[],u="idle";function f(e){u=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var h,v,m,g,y=0,b=0,w={},E={},O={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return f(I()?"ready":"idle"),null;E={},w={},O=e.c,m=e.h,f("prepare");var n=new Promise((function(e,n){h={resolve:e,reject:n}}));for(var t in v={},A)x(t);return"prepare"===u&&0===b&&0===y&&P(),n}));var n}function x(e){O[e]?(E[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+i+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return D(a)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(_(t));e.resolve(n)}}function D(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(t){var r,a,s,d,p;function u(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((d=H[a])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<d.parents.length;c++){var l=d.parents[c],s=H[l];if(s){if(s.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([l]),moduleId:a,parentId:l};-1===n.indexOf(l)&&(s.hot._acceptedDependencies[a]?(t[l]||(t[l]=[]),h(t[l],[a])):(delete t[l],n.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}I();var y={},b=[],w={},E=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var j in v)if(Object.prototype.hasOwnProperty.call(v,j)){var x;p=_(j),x=v[j]?u(p):{type:"disposed",moduleId:j};var P=!1,D=!1,k=!1,S="";switch(x.chain&&(S="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+x.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(P=new Error("Aborted because "+p+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(x),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),k=!0;break;default:throw new Error("Unexception type "+x.type)}if(P)return f("abort"),Promise.reject(P);if(D)for(p in w[p]=v[p],h(b,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,p)&&(y[p]||(y[p]=[]),h(y[p],x.outdatedDependencies[p]));k&&(h(b,[x.moduleId]),w[p]=E)}var C,q=[];for(a=0;a<b.length;a++)p=b[a],H[p]&&H[p].hot._selfAccepted&&w[p]!==E&&!H[p].hot._selfInvalidated&&q.push({module:p,parents:H[p].parents.slice(),errorHandler:H[p].hot._selfAccepted});f("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete A[e]}(e)}));var T,N,L=b.slice();for(;L.length>0;)if(p=L.pop(),d=H[p]){var R={},U=d.hot._disposeHandlers;for(s=0;s<U.length;s++)(r=U[s])(R);for(c[p]=R,d.hot.active=!1,delete H[p],delete y[p],s=0;s<d.children.length;s++){var B=H[d.children[s]];B&&((C=B.parents.indexOf(p))>=0&&B.parents.splice(C,1))}}for(p in y)if(Object.prototype.hasOwnProperty.call(y,p)&&(d=H[p]))for(N=y[p],s=0;s<N.length;s++)T=N[s],(C=d.children.indexOf(T))>=0&&d.children.splice(C,1);f("apply"),void 0!==m&&(i=m,m=void 0);for(p in v=void 0,w)Object.prototype.hasOwnProperty.call(w,p)&&(e[p]=w[p]);var J=null;for(p in y)if(Object.prototype.hasOwnProperty.call(y,p)&&(d=H[p])){N=y[p];var z=[];for(a=0;a<N.length;a++)if(T=N[a],r=d.hot._acceptedDependencies[T]){if(-1!==z.indexOf(r))continue;z.push(r)}for(a=0;a<z.length;a++){r=z[a];try{r(N)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:p,dependencyId:N[a],error:e}),t.ignoreErrored||J||(J=e)}}}for(a=0;a<q.length;a++){var F=q[a];p=F.module,l=F.parents,o=p;try{M(p)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:n,originalError:e}),t.ignoreErrored||J||(J=n),J||(J=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:p,error:e}),t.ignoreErrored||J||(J=e)}}if(J)return f("fail"),Promise.reject(J);if(g)return n(t).then((function(e){return b.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return f("idle"),new Promise((function(e){e(b)}))}(n=n||{})}function I(){if(g)return v||(v={}),g.forEach(k),g=void 0,!0}function k(n){Object.prototype.hasOwnProperty.call(v,n)||(v[n]=e[n])}var H={},A={3:0},S=[];function M(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:d(n),parents:(s=l,l=[],s),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=H[e];if(!n)return M;var t=function(t){return n.hot.active?(H[t]?-1===H[t].parents.indexOf(e)&&H[t].parents.push(e):(l=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),l=[]),M(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var a in M)Object.prototype.hasOwnProperty.call(M,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===u&&f("prepare"),b++,M.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===u&&(w[e]||x(e),0===b&&0===y&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),M.t(e,-2&n)},t}(n)),t.l=!0,t.exports}M.e=function(e){var n=[],t=A[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=A[e]=[n,r]}));n.push(t[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,M.nc&&a.setAttribute("nonce",M.nc),a.src=function(e){return M.p+"js/"+({0:"DataCollection~DataProtection",4:"DataCollection",5:"DataProtection",6:"FAQ",7:"Overview",8:"Trust",11:"vendors~FAQ",12:"vendors~Trust"}[e]||e)+"."+i+".js"}(e);var c=new Error;o=function(n){a.onerror=a.onload=null,clearTimeout(l);var t=A[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,t[1](c)}A[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(n)},M.m=e,M.c=H,M.d=function(e,n,t){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)M.d(t,r,function(n){return e[n]}.bind(null,r));return t},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/beta/apps/trust/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],q=C.push.bind(C);C.push=n,C=C.slice();for(var T=0;T<C.length;T++)n(C[T]);var N=q;S.push([472,1,2,9,10]),t()}({153:function(e,n,t){var r=t(5),o=t(325);(n=r(!1)).i(o),n.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-title{margin:var(--pf-global--spacer--lg) 0;font-weight:var(--pf-global--FontWeight--bold) !important}.ins-c-flex-center{display:flex;align-items:center;flex-direction:column}.ins-c-flex-center .ins-c-flex-center__text{width:650px;text-align:center}.pf-c-card{margin-top:0 !important}.faq-card{width:70%;background-color:var(--pf-global--BackgroundColor--100);margin-top:var(--pf-global--spacer--xl) !important;padding:var(--pf-global--spacer--xl)}.faq-card p{margin-bottom:var(--pf-global--spacer--md)}.faq-card ul{list-style-type:disc;list-style-position:inside;padding-left:2em;margin-bottom:var(--pf-global--spacer--md)}\n",""]),e.exports=n},247:function(e,n,t){"use strict";var r=t(233),o=t(234),a=t(231),i=t(0),c=t.n(i);n.a=function(){return c.a.createElement(r.a,null,c.a.createElement(o.a,{variant:"container",component:function(){return c.a.createElement("span",{className:"pf-c-spinner",role:"progressbar","aria-valuetext":"Loading..."},c.a.createElement("span",{className:"pf-c-spinner__clipper"}),c.a.createElement("span",{className:"pf-c-spinner__lead-ball"}),c.a.createElement("span",{className:"pf-c-spinner__tail-ball"}))}}),c.a.createElement(a.a,{size:"lg",headingLevel:"h4"},"Loading"))}},318:function(e){e.exports=JSON.parse('{"en":{}}')},324:function(e,n,t){var r=t(153);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(153,(function(){var n=t(153);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)})),e.hot.dispose((function(){a()}))},472:function(e,n,t){"use strict";t.r(n);t(324);var r=t(236),o=t(11),a=t.n(o),i=t(92),c=t(0),l=t.n(c),s=t(246),d=t.n(s),p=t(312),u=t.n(p),f=t(32),h=t(247),v=Object(c.lazy)((function(){return Promise.all([t.e(1),t.e(2),t.e(12),t.e(8)]).then(t.bind(null,716))})),m={trust:"/"},g=function(e){var n=e.component,t=e.rootClass,r=u()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(t),"pf-c-page__main"),o.setAttribute("role","main"),l.a.createElement(f.d,d()({},r,{component:n}))};g.propTypes={component:a.a.func,rootClass:a.a.string};var y=function(){return l.a.createElement(f.g,null,l.a.createElement(g,{key:"register",exact:!0,path:m.register,rootClass:"Insights",component:function(){return l.a.createElement(c.Suspense,{fallback:l.a.createElement(h.a,null)}," ",l.a.createElement(v,null)," ")}}),l.a.createElement(f.c,{path:"*",to:m.register,push:!0}))},b=t(313),w=Object(b.getRegistry)();w.register({notifications:r.notifications});var E=function(e){return l.a.createElement(i.Provider,{store:w.getStore()},l.a.createElement(r.NotificationsPortal,null),l.a.createElement(y,{childProps:e}))};E.propTypes={history:a.a.object};var O,_=Object(f.o)(E),j=t(314),x=t(23),P=t.n(x),D=t(117),I=t(319),k=t(317),H=t.n(k),A=t(316);var S=t(318);P.a.render(l.a.createElement(j.IntlProvider,{locale:navigator.language.slice(0,2),messages:S,onError:console.log},l.a.createElement(i.Provider,{store:function(){if(O)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return O=new H.a({},[A.a].concat(n))}().getStore()},l.a.createElement(D.BrowserRouter,{basename:Object(I.getBaseName)(window.location.pathname)},l.a.createElement(_,null)))),document.getElementById("root"))}});
//# sourceMappingURL=App.4f104205b182092ea71b.js.map