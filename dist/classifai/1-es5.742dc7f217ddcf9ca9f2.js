!function(){function t(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,c=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/1FC":function(t,e,n){"use strict";e.a=Array.isArray},"/uUt":function(e,r,o){"use strict";o.d(r,"a",function(){return u});var i=o("7o/Q");function u(t,e){return function(n){return n.lift(new s(t,e))}}var s=function(){function t(e,n){c(this,t),this.compare=e,this.keySelector=n}return a(t,[{key:"call",value:function(t,e){return e.subscribe(new l(t,this.compare,this.keySelector))}}]),t}(),l=function(e){t(o,e);var r=n(o);function o(t,e,n){var i;return c(this,o),(i=r.call(this,t)).keySelector=n,i.hasKey=!1,"function"==typeof e&&(i.compare=e),i}return a(o,[{key:"compare",value:function(t,e){return t===e}},{key:"_next",value:function(t){var e;try{var n=this.keySelector;e=n?n(t):t}catch(o){return this.destination.error(o)}var r=!1;if(this.hasKey)try{r=(0,this.compare)(this.key,e)}catch(o){return this.destination.error(o)}else this.hasKey=!0;r||(this.key=e,this.destination.next(t))}}]),o}(i.a)},"1G5W":function(e,r,o){"use strict";o.d(r,"a",function(){return u});var i=o("zx2A");function u(t){return function(e){return e.lift(new s(t))}}var s=function(){function t(e){c(this,t),this.notifier=e}return a(t,[{key:"call",value:function(t,e){var n=new l(t),r=Object(i.c)(this.notifier,new i.a(n));return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n}}]),t}(),l=function(e){t(o,e);var r=n(o);function o(t){var e;return c(this,o),(e=r.call(this,t)).seenValue=!1,e}return a(o,[{key:"notifyNext",value:function(){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),o}(i.b)},"25cm":function(t,e,n){"use strict";var r=n("tPH9"),o=n("/1FC");e.a=function(t,e,n){var c=e(t);return Object(o.a)(t)?c:Object(r.a)(c,n(t))}},"3/ER":function(t,e,n){"use strict";(function(t){var r=n("Ju5/"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=c&&c.exports===o?r.a.Buffer:void 0,a=i?i.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var n=t.length,r=a?a(n):new t.constructor(n);return t.copy(r),r}}).call(this,n("3UD+")(t))},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"3cmB":function(t,e,n){"use strict";var r=n("Y7yP"),o=n("Ju5/"),c=Object(r.a)(o.a,"Map");e.a=c},"5WsY":function(t,e,n){"use strict";var r=n("vJtL"),o=n("Js68");e.a=function(t){return null!=t&&Object(o.a)(t.length)&&!Object(r.a)(t)}},"7gMY":function(t,e,n){"use strict";var r=n("8M4i"),o=n("EUcb"),c=function(t){return Object(o.a)(t)&&"[object Arguments]"==Object(r.a)(t)},i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,s=c(function(){return arguments}())?c:function(t){return Object(o.a)(t)&&a.call(t,"callee")&&!u.call(t,"callee")},l=n("/1FC"),f=n("WOAq"),b=/^(?:0|[1-9]\d*)$/,p=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&b.test(t))&&t>-1&&t%1==0&&t<e},h=n("oYcn"),d=Object.prototype.hasOwnProperty;e.a=function(t,e){var n=Object(l.a)(t),r=!n&&s(t),o=!n&&!r&&Object(f.a)(t),c=!n&&!r&&!o&&Object(h.a)(t),i=n||r||o||c,a=i?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],u=a.length;for(var b in t)!e&&!d.call(t,b)||i&&("length"==b||o&&("offset"==b||"parent"==b)||c&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||p(b,u))||a.push(b);return a}},"8M4i":function(t,e,n){"use strict";var r=n("ylTp"),o=Object.prototype,c=o.hasOwnProperty,i=o.toString,a=r.a?r.a.toStringTag:void 0,u=Object.prototype.toString,s=r.a?r.a.toStringTag:void 0;e.a=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?function(t){var e=c.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(u){}var o=i.call(t);return r&&(e?t[a]=n:delete t[a]),o}(t):function(t){return u.call(t)}(t)}},Ce4a:function(t,e,n){"use strict";var r=n("Ju5/");e.a=r.a.Uint8Array},CfRg:function(t,e,n){"use strict";var r=n("oSzE"),o=n("Y7yP"),c=function(){try{var t=Object(o.a)(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),i=function(t,e,n){"__proto__"==e&&c?c(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},a=n("YHEm"),u=Object.prototype.hasOwnProperty,s=function(t,e,n){var r=t[e];u.call(t,e)&&Object(a.a)(r,n)&&(void 0!==n||e in t)||i(t,e,n)},l=function(t,e,n,r){var o=!n;n||(n={});for(var c=-1,a=e.length;++c<a;){var u=e[c],l=r?r(n[u],t[u],u,n,t):void 0;void 0===l&&(l=t[u]),o?i(n,u,l):s(n,u,l)}return n},f=n("mkut"),b=n("7gMY"),p=n("IzLi"),h=n("pyRK"),d=Object.prototype.hasOwnProperty,v=n("5WsY"),j=function(t){return Object(v.a)(t)?Object(b.a)(t,!0):function(t){if(!Object(p.a)(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=Object(h.a)(t),n=[];for(var r in t)("constructor"!=r||!e&&d.call(t,r))&&n.push(r);return n}(t)},g=n("3/ER"),y=n("jN84"),O=n("tPH9"),m=n("U6JX"),_=Object(m.a)(Object.getPrototypeOf,Object),w=n("WJ6P"),P=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Object(O.a)(e,Object(y.a)(t)),t=_(t);return e}:w.a,M=n("TFwu"),k=n("25cm"),L=function(t){return Object(k.a)(t,j,P)},x=n("YM6B"),C=Object.prototype.hasOwnProperty,A=n("Ce4a"),S=function(t){var e=new t.constructor(t.byteLength);return new A.a(e).set(new A.a(t)),e},z=/\w*$/,U=n("ylTp"),I=U.a?U.a.prototype:void 0,F=I?I.valueOf:void 0,J=Object.create,E=function(){function t(){}return function(e){if(!Object(p.a)(e))return{};if(J)return J(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),K=n("/1FC"),Y=n("WOAq"),R=n("EUcb"),T=n("ovuK"),W=n("xutz"),H=W.a&&W.a.isMap,B=H?Object(T.a)(H):function(t){return Object(R.a)(t)&&"[object Map]"==Object(x.a)(t)},D=W.a&&W.a.isSet,N=D?Object(T.a)(D):function(t){return Object(R.a)(t)&&"[object Set]"==Object(x.a)(t)},X={};X["[object Arguments]"]=X["[object Array]"]=X["[object ArrayBuffer]"]=X["[object DataView]"]=X["[object Boolean]"]=X["[object Date]"]=X["[object Float32Array]"]=X["[object Float64Array]"]=X["[object Int8Array]"]=X["[object Int16Array]"]=X["[object Int32Array]"]=X["[object Map]"]=X["[object Number]"]=X["[object Object]"]=X["[object RegExp]"]=X["[object Set]"]=X["[object String]"]=X["[object Symbol]"]=X["[object Uint8Array]"]=X["[object Uint8ClampedArray]"]=X["[object Uint16Array]"]=X["[object Uint32Array]"]=!0,X["[object Error]"]=X["[object Function]"]=X["[object WeakMap]"]=!1,e.a=function t(e,n,o,c,i,a){var u,b=1&n,d=2&n,v=4&n;if(o&&(u=i?o(e,c,i,a):o(e)),void 0!==u)return u;if(!Object(p.a)(e))return e;var O=Object(K.a)(e);if(O){if(u=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&C.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(e),!b)return function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(e,u)}else{var m=Object(x.a)(e),w="[object Function]"==m||"[object GeneratorFunction]"==m;if(Object(Y.a)(e))return Object(g.a)(e,b);if("[object Object]"==m||"[object Arguments]"==m||w&&!i){if(u=d||w?{}:function(t){return"function"!=typeof t.constructor||Object(h.a)(t)?{}:E(_(t))}(e),!b)return d?function(t,e){return l(t,P(t),e)}(e,function(t,e){return t&&l(e,j(e),t)}(u,e)):function(t,e){return l(t,Object(y.a)(t),e)}(e,function(t,e){return t&&l(e,Object(f.a)(e),t)}(u,e))}else{if(!X[m])return i?e:{};u=function(t,e,n){var r,o,c=t.constructor;switch(e){case"[object ArrayBuffer]":return S(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return function(t,e){var n=e?S(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var n=e?S(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,n);case"[object Map]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return(o=new(r=t).constructor(r.source,z.exec(r))).lastIndex=r.lastIndex,o;case"[object Set]":return new c;case"[object Symbol]":return F?Object(F.call(t)):{}}}(e,m,b)}}a||(a=new r.a);var k=a.get(e);if(k)return k;a.set(e,u),N(e)?e.forEach(function(r){u.add(t(r,n,o,r,e,a))}):B(e)&&e.forEach(function(r,c){u.set(c,t(r,n,o,c,e,a))});var A=O?void 0:(v?d?L:M.a:d?j:f.a)(e);return function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n););}(A||e,function(r,c){A&&(r=e[c=r]),s(u,c,t(r,n,o,c,e,a))}),u}},DlmY:function(t,e,n){"use strict";var r=n("Y7yP"),o=Object(r.a)(Object,"create"),c=Object.prototype.hasOwnProperty,i=Object.prototype.hasOwnProperty;function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=function(){this.__data__=o?o(null):{},this.size=0},a.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},a.prototype.get=function(t){var e=this.__data__;if(o){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return c.call(e,t)?e[t]:void 0},a.prototype.has=function(t){var e=this.__data__;return o?void 0!==e[t]:i.call(e,t)},a.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this};var u=a,s=n("nLtN"),l=n("3cmB"),f=function(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map};function b(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}b.prototype.clear=function(){this.size=0,this.__data__={hash:new u,map:new(l.a||s.a),string:new u}},b.prototype.delete=function(t){var e=f(this,t).delete(t);return this.size-=e?1:0,e},b.prototype.get=function(t){return f(this,t).get(t)},b.prototype.has=function(t){return f(this,t).has(t)},b.prototype.set=function(t,e){var n=f(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},e.a=b},EUcb:function(t,e,n){"use strict";e.a=function(t){return null!=t&&"object"==typeof t}},IzLi:function(t,e,n){"use strict";e.a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},Js68:function(t,e,n){"use strict";e.a=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},"Ju5/":function(t,e,n){"use strict";var r=n("XqMk"),o="object"==typeof self&&self&&self.Object===Object&&self,c=r.a||o||Function("return this")();e.a=c},L3Qv:function(t,e,n){"use strict";e.a=function(){return!1}},LY9J:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n("/uUt"),o=n("cxbk"),i=n("fXoL"),u=n("tk/3"),s=n("14na"),l=n("tyNb"),f=function(){var t=function(){function t(e,n,i){var a=this;c(this,t),this.http=e,this.mode=n,this.router=i,this.hostPort=o.a.baseURL,this.imageLabellingMode=null,this.getProjectList=function(){return a.http.get("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/meta"))},this.createNewProject=function(t){return a.http.put("".concat(a.hostPort,"v2/").concat(a.imageLabellingMode,"/newproject/").concat(t),{newprojectid:t})},this.importProject=function(){return a.http.put(a.hostPort+"v2/newproject",{})},this.renameProject=function(t,e){return a.http.put("".concat(a.hostPort,"v2/").concat(a.imageLabellingMode,"/projects/").concat(t,"/rename/").concat(e),{})},this.deleteProject=function(t){return a.http.delete("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t))},this.updateProjectLoadStatus=function(t){return a.http.get("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t))},this.checkProjectStatus=function(t){return a.http.get("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t,"/meta"))},this.manualCloseProject=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"closed";return a.http.put("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t),{status:e})},this.checkExistProjectStatus=function(t){return a.http.get("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t,"/loadingstatus"))},this.getThumbnailList=function(t,e){return a.http.get("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t,"/uuid/").concat(e,"/thumbnail"))},this.localUploadStatus=function(t){return a.http.get("".concat(a.hostPort,"v2/").concat(a.imageLabellingMode,"/projects/").concat(t,"/filesysstatus"))},this.updateLabelList=function(t,e){return a.http.put("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t,"/newlabels"),{label_list:e})},this.updateProjectStatus=function(t,e,n){return a.http.put("".concat(a.hostPort).concat(a.imageLabellingMode,"/projects/").concat(t,"/").concat("loaded"===n?"status":n),{status:e.toString()})},this.importStatus=function(){return a.http.get("".concat(a.hostPort,"v2/").concat(a.imageLabellingMode,"/projects/importstatus"))},this.mode.imgLabelMode$.pipe(Object(r.a)()).subscribe(function(t){return t?a.imageLabellingMode=t:a.router.navigate(["/"])})}return a(t,[{key:"importLabelFile",value:function(){return this.http.put(this.hostPort+"v2/labelfile",{})}},{key:"importLabelFileStatus",value:function(){return this.http.get(this.hostPort+"v2/labelfilestatus")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Pb(u.b),i.Pb(s.a),i.Pb(l.a))},t.\u0275prov=i.Cb({token:t,factory:t.\u0275fac,providedIn:"any"}),t}()},TFwu:function(t,e,n){"use strict";var r=n("25cm"),o=n("jN84"),c=n("mkut");e.a=function(t){return Object(r.a)(t,c.a,o.a)}},TJKd:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("fXoL"),o=n("ofXK");function i(t,e){1&t&&(r.Jb(0),r.Lb(1,"div",1),r.Lb(2,"div",2),r.Lb(3,"div",3),r.Hb(4,"div",4),r.Hb(5,"div",4),r.Kb(),r.Lb(6,"div",5),r.Hb(7,"div",4),r.Hb(8,"div",4),r.Kb(),r.Kb(),r.Kb(),r.Ib())}var u=function(){var t=function(){function t(){c(this,t),this._loading=!0}return a(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(t){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Ab({type:t,selectors:[["spinner"]],inputs:{_loading:"_loading"},features:[r.ub],decls:1,vars:1,consts:[[4,"ngIf"],[1,"mesh-loader-container"],[1,"mesh-loader"],[1,"set-one"],[1,"circle"],[1,"set-two"]],template:function(t,e){1&t&&r.lc(0,i,9,0,"ng-container",0),2&t&&r.Zb("ngIf",e._loading)},directives:[o.k],styles:[".mesh-loader-container[_ngcontent-%COMP%]{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;opacity:.85;z-index:10000;cursor:progress}.mesh-loader[_ngcontent-%COMP%]{overflow:hidden;height:100%;width:100%}.mesh-loader[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:1.6276041667vw;height:3.3156498674vh;position:absolute;background:#de1c44;border-radius:50%;margin:-.8138020833vw;-webkit-animation:mesh 3s ease-in-out infinite;animation:mesh 3s ease-in-out -1.5s infinite}.mesh-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:0s;animation-delay:0s}.mesh-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}.mesh-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{transform:rotate(90deg)}@-webkit-keyframes mesh{0%{transform-origin:50% -100%;transform:rotate(0)}50%{transform-origin:50% -100%;transform:rotate(1turn)}50.00001%{transform-origin:50% 200%;transform:rotate(0deg)}to{transform-origin:50% 200%;transform:rotate(1turn)}}@keyframes mesh{0%{transform-origin:50% -100%;transform:rotate(0)}50%{transform-origin:50% -100%;transform:rotate(1turn)}50.00001%{transform-origin:50% 200%;transform:rotate(0deg)}to{transform-origin:50% 200%;transform:rotate(1turn)}}"]}),t}()},U6JX:function(t,e,n){"use strict";e.a=function(t,e){return function(n){return t(e(n))}}},WJ6P:function(t,e,n){"use strict";e.a=function(){return[]}},WOAq:function(t,e,n){"use strict";(function(t){var r=n("Ju5/"),o=n("L3Qv"),c="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=c&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===c?r.a.Buffer:void 0;e.a=(a?a.isBuffer:void 0)||o.a}).call(this,n("3UD+")(t))},XIp8:function(t,e,n){"use strict";var r=n("CfRg");e.a=function(t){return Object(r.a)(t,5)}},XqMk:function(t,e,n){"use strict";var r="object"==typeof global&&global&&global.Object===Object&&global;e.a=r},Y7yP:function(t,e,n){"use strict";var r,o=n("vJtL"),c=n("Ju5/").a["__core-js_shared__"],i=(r=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",a=n("IzLi"),u=n("dLWn"),s=/^\[object .+?Constructor\]$/,l=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.a=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!Object(a.a)(t)||(e=t,i&&i in e))&&(Object(o.a)(t)?l:s).test(Object(u.a)(t));var e}(n)?n:void 0}},YHEm:function(t,e,n){"use strict";e.a=function(t,e){return t===e||t!=t&&e!=e}},YM6B:function(t,e,n){"use strict";var r=n("Y7yP"),o=n("Ju5/"),c=Object(r.a)(o.a,"DataView"),i=n("3cmB"),a=Object(r.a)(o.a,"Promise"),u=Object(r.a)(o.a,"Set"),s=Object(r.a)(o.a,"WeakMap"),l=n("8M4i"),f=n("dLWn"),b=Object(f.a)(c),p=Object(f.a)(i.a),h=Object(f.a)(a),d=Object(f.a)(u),v=Object(f.a)(s),j=l.a;(c&&"[object DataView]"!=j(new c(new ArrayBuffer(1)))||i.a&&"[object Map]"!=j(new i.a)||a&&"[object Promise]"!=j(a.resolve())||u&&"[object Set]"!=j(new u)||s&&"[object WeakMap]"!=j(new s))&&(j=function(t){var e=Object(l.a)(t),n="[object Object]"==e?t.constructor:void 0,r=n?Object(f.a)(n):"";if(r)switch(r){case b:return"[object DataView]";case p:return"[object Map]";case h:return"[object Promise]";case d:return"[object Set]";case v:return"[object WeakMap]"}return e}),e.a=j},cxbk:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0,baseURL:"http://localhost:9999/"}},dLWn:function(t,e,n){"use strict";var r=Function.prototype.toString;e.a=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},jN84:function(t,e,n){"use strict";var r=n("WJ6P"),o=Object.prototype.propertyIsEnumerable,c=Object.getOwnPropertySymbols;e.a=c?function(t){return null==t?[]:(t=Object(t),function(e,n){for(var r=-1,c=null==e?0:e.length,i=0,a=[];++r<c;){var u=e[r];o.call(t,u)&&(a[i++]=u)}return a}(c(t)))}:r.a},l5mm:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("HDdC"),o=n("3N8a"),c=new(n("IjjT").a)(o.a),i=n("DH7j");function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return t=e,(Object(i.a)(t)||!(t-parseFloat(t)+1>=0)||e<0)&&(e=0),n&&"function"==typeof n.schedule||(n=c),new r.a(function(t){return t.add(n.schedule(u,e,{subscriber:t,counter:0,period:e})),t})}function u(t){var e=t.subscriber,n=t.counter,r=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:r},r)}},mkut:function(t,e,n){"use strict";var r=n("7gMY"),o=n("pyRK"),c=n("U6JX"),i=Object(c.a)(Object.keys,Object),a=Object.prototype.hasOwnProperty,u=n("5WsY");e.a=function(t){return Object(u.a)(t)?Object(r.a)(t):function(t){if(!Object(o.a)(t))return i(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}},nLtN:function(t,e,n){"use strict";var r=n("YHEm"),o=function(t,e){for(var n=t.length;n--;)if(Object(r.a)(t[n][0],e))return n;return-1},c=Array.prototype.splice;function i(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}i.prototype.clear=function(){this.__data__=[],this.size=0},i.prototype.delete=function(t){var e=this.__data__,n=o(e,t);return!(n<0||(n==e.length-1?e.pop():c.call(e,n,1),--this.size,0))},i.prototype.get=function(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]},i.prototype.has=function(t){return o(this.__data__,t)>-1},i.prototype.set=function(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},e.a=i},oSzE:function(t,e,n){"use strict";var r=n("nLtN"),o=n("3cmB"),c=n("DlmY");function i(t){var e=this.__data__=new r.a(t);this.size=e.size}i.prototype.clear=function(){this.__data__=new r.a,this.size=0},i.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},i.prototype.get=function(t){return this.__data__.get(t)},i.prototype.has=function(t){return this.__data__.has(t)},i.prototype.set=function(t,e){var n=this.__data__;if(n instanceof r.a){var i=n.__data__;if(!o.a||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new c.a(i)}return n.set(t,e),this.size=n.size,this},e.a=i},oYcn:function(t,e,n){"use strict";var r=n("8M4i"),o=n("Js68"),c=n("EUcb"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1;var a=n("ovuK"),u=n("xutz"),s=u.a&&u.a.isTypedArray,l=s?Object(a.a)(s):function(t){return Object(c.a)(t)&&Object(o.a)(t.length)&&!!i[Object(r.a)(t)]};e.a=l},ovuK:function(t,e,n){"use strict";e.a=function(t){return function(e){return t(e)}}},pyRK:function(t,e,n){"use strict";var r=Object.prototype;e.a=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},tPH9:function(t,e,n){"use strict";e.a=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},vJtL:function(t,e,n){"use strict";var r=n("8M4i"),o=n("IzLi");e.a=function(t){if(!Object(o.a)(t))return!1;var e=Object(r.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},x2Se:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n("fXoL"),o=n("tyNb"),i=n("ofXK"),u=n("sYmb"),s=function(t){return{"last-btn-container":t}},l=function(){return{exact:!0}};function f(t,e){if(1&t&&(r.Jb(0),r.Lb(1,"a",6),r.Lb(2,"div",7),r.Lb(3,"label",8),r.nc(4),r.Vb(5,"translate"),r.Kb(),r.Kb(),r.Kb(),r.Ib()),2&t){var n=e.$implicit,o=e.last;r.wb(1),r.Zb("routerLink",n.url),r.wb(1),r.Zb("ngClass",r.cc(6,s,o))("routerLinkActiveOptions",r.bc(8,l)),r.wb(2),r.oc(r.Wb(5,4,n.name))}}function b(t,e){if(1&t&&(r.Jb(0),r.Lb(1,"div",9),r.Hb(2,"img",10),r.Vb(3,"translate"),r.Kb(),r.Ib()),2&t){var n=e.$implicit,o=e.index;r.wb(2),r.Zb("src",n.imgPath,r.ic)("alt",n.alt)("title",r.Wb(3,4,n.hoverLabel)),r.xb("data-index",o)}}var p=function(){var t=function(){function t(e){var n=this;c(this,t),this._router=e,this.logoSrc="../../../assets/icons/classifai_logo_white.svg",this.headerLabels=[{name:"pageHeader.home",url:"/"},{name:"pageHeader.datasetManagement",url:"/dataset"},{name:"pageHeader.revision",url:"/"}],this.bindImagePath=function(t){n.jsonSchema={logos:"/imglabel"===t?[{imgPath:"../../../assets/icons/add_user.svg",hoverLabel:"Add user to project",alt:"pageHeader.addUser",onClick:function(){return null}}]:[{imgPath:"../../../assets/icons/profile.svg",hoverLabel:"pageHeader.profile",alt:"Profile",onClick:function(){return null}}]}};var r=e.url;this.bindImagePath(r)}return a(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Gb(o.a))},t.\u0275cmp=r.Ab({type:t,selectors:[["page-header"]],inputs:{_onChange:"_onChange"},decls:7,vars:3,consts:[[1,"header-container"],[1,"container-flex-start"],[1,"logo-container"],["alt","logo","title","Classifai",1,"logo","position-absolute",3,"src"],[4,"ngFor","ngForOf"],[1,"container-flex-end"],[1,"link",3,"routerLink"],["routerLinkActive","active-link",1,"btn-container",3,"ngClass","routerLinkActiveOptions"],[1,"label"],[1,"utility-icon-container"],[1,"img","utility-icon-light",3,"src","alt","title"]],template:function(t,e){1&t&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Lb(2,"div",2),r.Hb(3,"img",3),r.Kb(),r.lc(4,f,6,9,"ng-container",4),r.Kb(),r.Lb(5,"div",5),r.lc(6,b,4,6,"ng-container",4),r.Kb(),r.Kb()),2&t&&(r.wb(3),r.Zb("src",e.logoSrc,r.ic),r.wb(1),r.Zb("ngForOf",e.headerLabels),r.wb(2),r.Zb("ngForOf",e.jsonSchema.logos))},directives:[i.j,o.c,o.b,i.i],pipes:[u.c],styles:[".header-container[_ngcontent-%COMP%]{min-width:100vw;max-width:100vw;min-height:4.3vh;max-height:4.3vh;background:#525353;border:.0625vw solid hsla(0,0%,100%,.25);display:flex;justify-content:space-between;z-index:1000;position:relative}.container-flex-start[_ngcontent-%COMP%]{display:flex}.container-flex-end[_ngcontent-%COMP%]{display:flex;min-width:6.5vw;max-width:6.5vw}.logo-container[_ngcontent-%COMP%]{min-width:2.15vw;max-width:2.15vw}.logo[_ngcontent-%COMP%], .utility-icon-dark[_ngcontent-%COMP%], .utility-icon-light[_ngcontent-%COMP%]{min-width:1.6vw;max-width:1.6vw;min-height:inherit;max-height:inherit;padding:.32vw}.utility-icon-dark[_ngcontent-%COMP%], .utility-icon-light[_ngcontent-%COMP%]{cursor:pointer}.utility-icon-light[_ngcontent-%COMP%]:active{background:#696969}.utility-icon-dark[_ngcontent-%COMP%]:active{background:#a9a9a9}.img[_ngcontent-%COMP%]{margin-left:4.2vw}.position-absolute[_ngcontent-%COMP%]{position:absolute}.utility-icon-container[_ngcontent-%COMP%]{display:flex;min-height:3.4vh;max-height:3.4vh}.img-container[_ngcontent-%COMP%]:hover   .img-description[_ngcontent-%COMP%]{visibility:visible;opacity:1}.btn-container[_ngcontent-%COMP%]{min-height:4.36vh;max-height:4.36vh;font-size:2vh;background:#525353;border-left:.0625vw solid hsla(0,0%,100%,.25);cursor:pointer;align-items:center;justify-content:center;display:flex;padding:0 1.5vw}.btn-container[_ngcontent-%COMP%]:hover{background:#383535}.last-btn-container[_ngcontent-%COMP%]{border-right:.0625vw solid hsla(0,0%,100%,.25)}.link[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.label[_ngcontent-%COMP%]{white-space:nowrap;border:none;color:#fff;cursor:pointer}.active-link[_ngcontent-%COMP%]{background:#383535}"],changeDetection:0}),t}()},xutz:function(t,e,n){"use strict";(function(t){var r=n("XqMk"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=c&&c.exports===o&&r.a.process,a=function(){try{return c&&c.require&&c.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();e.a=a}).call(this,n("3UD+")(t))},ylTp:function(t,e,n){"use strict";var r=n("Ju5/");e.a=r.a.Symbol}}])}();