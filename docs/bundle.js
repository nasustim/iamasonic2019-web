!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t),e(1);var r,o=function(n,t,e,r){return new(e=e||Promise)(function(o,i){function a(n){try{c(r.next(n))}catch(n){i(n)}}function s(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(a,s)}c((r=r.apply(n,t||[])).next())})},i=function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=0<(o=a.trys).length&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},a=e(6),s=document.querySelector("#header-image");function c(n){return function(n){n.setAttribute("width",window.innerWidth.toString()),n.setAttribute("height",window.innerHeight.toString())}(n),n.getContext("2d")}function u(n,t){return o(this,void 0,void 0,function(){var e,r;return i(this,function(a){switch(a.label){case 0:return[4,function(n){return o(this,void 0,void 0,function(){return i(this,function(t){return[2,new Promise(function(t,e){var r=new Image;r.src=n,r.onload=function(){return t(r)},r.onerror=function(n){return e(n)}})]})})}(t)];case 1:return e=a.sent(),r=function(n){var t,e,r,o,i=window.innerWidth,a=window.innerHeight,s=n.width,c=n.height,u=s<i*(c/a);return console.log(u),u?(t=0,e=(c-(o=a*((r=s)/i)))/2):(e=0,t=(s-(r=i*((o=c)/a)))/2),{sx:t,sy:e,sw:r,sh:o,dx:0,dy:0,dw:i,dh:a}}(e),console.log(r),n.drawImage(e,r.sx,r.sy,r.sw,r.sh,r.dx,r.dy,r.dw,r.dh),[2,n]}})})}window.addEventListener("resize",function(n){null!=r&&clearTimeout(r),r=setTimeout(function(){u(c(s),a)},200)}),u(c(s),a)},function(n,t,e){var r=e(2);"string"==typeof r&&(r=[[n.i,r,""]]);e(4)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(3)(!0)).push([n.i,"html, body, #container {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\nheader, header > * {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\nheader {\n  background-color: red; }\n\nsection {\n  background-color: green;\n  height: 100px; }\n\ndetails.player-card > img {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\nfooter {\n  background-color: blue;\n  height: 100px; }\n","",{version:3,sources:["/Users/mitsu/git/iamasonic2019-web/src/index.scss"],names:[],mappings:"AAAA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU,EAAA;;AAGZ;EAEI,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU,EAAA;;AAId;EACE,qBAAqB,EAAA;;AAEvB;EACE,uBAAuB;EACvB,aAAa,EAAA;;AAGf;EAEI,WAAW;EACX,YAAY;EAEZ,SAAS;EACT,UAAU,EAAA;;AAId;EACE,sBAAsB;EACtB,aAAa,EAAA",file:"index.scss",sourcesContent:["html, body, #container {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nheader {\n  &, & > * {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n  }\n}\n\nheader {\n  background-color: red;\n}\nsection {\n  background-color: green;\n  height: 100px;\n}\n\ndetails.player-card{\n  & > img {\n    width: 100%;\n    height: 100%;\n\n    margin: 0;\n    padding: 0;\n  }\n}\n\nfooter {\n  background-color: blue;\n  height: 100px;\n}"]}])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=function(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(e," */")}(r),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var r,o,i,a={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=(i={},function(n,t){if("function"==typeof n)return n();if(void 0===i[n]){var e=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}i[n]=e}return i[n]}),u=null,f=0,l=[],d=e(5);function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(y(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(y(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function h(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function A(n,t){var e=c(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(n.insertAt.before,e);e.insertBefore(t,o)}}function v(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);0<=t&&l.splice(t,1)}function b(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=e.nc;r&&(n.attrs.nonce=r)}return g(t,n.attrs),A(n,t),t}function g(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function y(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=f++;e=u=u||b(t),r=E.bind(null,e,a,!1),o=E.bind(null,e,a,!0)}else o=n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(t,n.attrs),A(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),function(){v(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(t),r=function(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),function(){v(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=h(n,t);return p(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var i=e[o];(s=a[i.id]).refs--,r.push(s)}for(n&&p(h(n,t),t),o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var m,w=(m=[],function(n,t){return m[n]=t,m.filter(Boolean).join("\n")});function E(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){n.exports=e.p+"res/header_back.jpg"}]);