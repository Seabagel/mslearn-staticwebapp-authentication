(function(t){function e(e){for(var n,c,u=e[0],s=e[1],i=e[2],l=0,p=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={app:0},o=[];function c(t){return u.p+"js/"+({about:"about",products:"products"}[t]||t)+"."+{about:"83d457ff",products:"4b7c5e2e"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var i=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"437c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HeaderBar"),r("div",{staticClass:"section columns"},[r("NavBar"),r("main",{staticClass:"column"},[r("router-view")],1)],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("nav",{staticClass:"navbar has-background-dark is-dark",attrs:{role:"navigation","aria-label":"main navigation"}},[r("HeaderBarBrand")],1)])},u=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-brand"},[t._m(0),r("router-link",{staticClass:"navbar-item nav-home",attrs:{to:"/"}},[r("span",{staticClass:"brand-first"},[t._v("MY")]),r("span",{staticClass:"brand-second"},[t._v("SHOPPING")]),r("span",{staticClass:"brand-third"},[t._v("LIST")])])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-item",attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[r("i",{staticClass:"fab js-logo fa-vuejs fa-2x",attrs:{"aria-hidden":"true"}})])}],l={name:"HeaderBarBrand"},d=l,p=r("2877"),f=Object(p["a"])(d,s,i,!1,null,null,null),v=f.exports,m={name:"HeaderBar",components:{HeaderBarBrand:v}},b=m,h=Object(p["a"])(b,c,u,!1,null,null,null),g=h.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column is-2"},[r("nav",{staticClass:"menu"},[r("p",{staticClass:"menu-label"},[t._v("Menu")]),r("ul",{staticClass:"menu-list"},[r("router-link",{attrs:{to:"/products"}},[t._v("Products")]),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])])},O=[],j={name:"NavBar",data:function(){return{}},methods:{}},w=j,C=Object(p["a"])(w,_,O,!1,null,null,null),P=C.exports,y={name:"App",data:function(){return{}},components:{HeaderBar:g,NavBar:P}},x=y,E=(r("6294"),Object(p["a"])(x,a,o,!1,null,null,null)),k=E.exports,T=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-container"},[r("div",{staticClass:"content-title-group not-found"},[r("i",{staticClass:"fas fa-exclamation-triangle",attrs:{"aria-hidden":"true"}}),t._v("   "),r("span",{staticClass:"title"},[t._v("These aren't the bits you're looking for")])])])}],A={},S=Object(p["a"])(A,B,R,!1,null,null,null),D=S.exports;n["a"].use(T["a"]);var $,H=new T["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/products"},{path:"/products",name:"products",component:function(){return r.e("products").then(r.bind(null,"6019"))}},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"754b"))}},{path:"*",component:D}]}),U=r("2f62"),M=r("1da1"),N=r("ade3"),L=r("2909"),I=(r("96cf"),r("c740"),r("a434"),r("4de4"),r("99af"),r("bc3a")),G=r.n(I),J=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API||"api",V=r("53ca"),q=function(t){if(200!==t.status)throw Error(t.message);var e=t.data;return"object"!==Object(V["a"])(e)&&(e=[]),e},Y=function(t,e){if(t.status!==e)throw Error(t.message);var r=t.data;return"object"!==Object(V["a"])(r)&&(r=void 0),r},z="GET_PRODUCTS",F="ADD_PRODUCT",K="UPDATE_PRODUCT",Q="DELETE_PRODUCT",W=console,X={strict:!1,namespaced:!0,state:{products:[]},mutations:($={},Object(N["a"])($,F,(function(t,e){t.products.unshift(e)})),Object(N["a"])($,K,(function(t,e){var r=t.products.findIndex((function(t){return t.id===e.id}));t.products.splice(r,1,e),t.products=Object(L["a"])(t.products)})),Object(N["a"])($,z,(function(t,e){t.products=e})),Object(N["a"])($,Q,(function(t,e){t.products=Object(L["a"])(t.products.filter((function(t){return t.id!==e.id})))})),$),actions:{getProductsAction:function(t){return Object(M["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,G.a.get("".concat(J,"/products"));case 4:return n=e.sent,a=q(n),r(z,a),e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e["catch"](1),W.error(e.t0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()},deleteProductAction:function(t,e){return Object(M["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,G.a.delete("".concat(J,"/products/").concat(e.id));case 4:return a=r.sent,Y(a,200),n(Q,e),r.abrupt("return",null);case 10:r.prev=10,r.t0=r["catch"](1),W.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},updateProductAction:function(t,e){return Object(M["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,G.a.put("".concat(J,"/products/").concat(e.id),e);case 4:return a=r.sent,o=Y(a,200),n(K,o),r.abrupt("return",o);case 10:r.prev=10,r.t0=r["catch"](1),W.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},addProductAction:function(t,e){return Object(M["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,G.a.post("".concat(J,"/products"),e);case 4:return a=r.sent,o=Y(a,201),n(F,o),r.abrupt("return",o);case 10:r.prev=10,r.t0=r["catch"](1),W.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()}},getters:{products:function(t){return t.products}}};n["a"].use(U["a"]);var Z=new U["a"].Store({strict:!1,modules:{products:X},state:{}});n["a"].config.productionTip=!1,new n["a"]({router:H,store:Z,render:function(t){return t(k)}}).$mount("#app")},6294:function(t,e,r){"use strict";r("437c")}});
//# sourceMappingURL=app.4c4b40d8.js.map