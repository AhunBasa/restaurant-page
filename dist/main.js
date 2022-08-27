(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>b});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(713),t.b),d=new URL(t(206),t.b),p=new URL(t(769),t.b),u=new URL(t(511),t.b),f=i()(r()),m=s()(l),h=s()(d),g=s()(p),v=s()(u);f.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --bg-color-white: rgba(255, 255, 255, 0.2);\n  --bg-color-menu: rgba(255, 255, 255, 0.6);\n  --bg-color-nav: #c1beb9ff;\n\n}\n\n@font-face {\n  font-family: 'Crimson normal';\n  src: url("+m+") format('woff2');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Crimson italic';\n  src: url("+h+") format('woff2');\n  font-weight: 400;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Amita';\n  src: url("+g+");\n  font-weight: 400;\n  font-style: normal;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nbody {\n  background: url("+v+");\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.nav {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 50px;\n  width: 100%;\n  background-color: var(--bg-color-nav);\n  font-family: 'Crimson normal', serif;\n  font-size: 2rem;\n  z-index: 4;\n}\n\n.tab {\n  width: 150px;\n  padding: 30px 0;\n  text-align: center;\n}\n\n.tab:hover {\n  background-color: var(--bg-color-white);\n  cursor: pointer;\n}\n\n.page {\n  position: relative;\n  top: 100px; \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--bg-color-white);\n  font-family: 'Crimson italic', serif;\n  text-align: center;\n}\n\n.footer {\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  white-space: pre;\n  background-color: var(--bg-color-white);\n  padding: 5px 20px;\n}\n.footer p {\n  font-size: 1.2rem;      \n}\n\na {\n  text-decoration: none;\n  color: rgb(65, 25, 11);\n}\n\n.footer img {\n  height: 2rem;\n  width: auto;\n  margin-left: 10px;\n}\n\n.footer div {\n  display: flex;\n  align-items: center;\n}\n\n.home {\n  padding: 30px 50px;\n}\n\n.home div {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n.home img {\n  width: 6rem;\n}\n\np {\n  font-size: 2rem;\n}\n\n.home h1 {\n  font-family: 'Amita', cursive;\n  font-size: 5rem;\n  letter-spacing: 0.5rem;\n  line-height: 5rem;\n  margin: 0 30px;\n}\n\n.home h2 {\n  font-family: 'Crimson normal', serif;\n  font-size: 5rem;\n  letter-spacing: 0.3rem;\n  margin: 15px;\n}\n\n.menu, .contact{\n  width: max(40%, 400px);\n  background-color: var(--bg-color-menu);\n}\n\n.menu div {\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n\n.menu h4{\n  font-size: 2.5rem;\n  font-weight: 500;\n  white-space: pre-line;\n}\n\nhr {\n  display: block;\n  border: none;\n  border-top: 3px double #000;\n  width: 300px;\n  overflow: visible;\n  text-align: center;\n  margin: 20px auto;\n}\n\n.contact {\n  font-family: 'Crimson normal', serif;\n  font-size: 2rem;\n}\n",""]);const b=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},769:(n,e,t)=>{n.exports=t.p+"3674f25d2c67e1ec49f5.woff2"},206:(n,e,t)=>{n.exports=t.p+"47c9b21e90f0ac96ccc8.woff2"},713:(n,e,t)=>{n.exports=t.p+"f002dfeee9542c98fae3.woff2"},511:(n,e,t)=>{n.exports=t.p+"7c1c7c83f2753966eecd.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};function h(){const n=document.querySelector(".page"),e=document.querySelector(".footer");return n&&n.remove(),e&&e.remove(),document.getElementById("content")}m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"550985caaa8859d4b95f.svg",v=t.p+"2c1de346918e2ae1443e.svg",b=t.p+"7f9d009596a424b1de9a.svg";function x(){const n=h(),e=document.createElement("div");e.classList.add("page","home");const t=new Image,o=new Image;t.src=v,o.src=b;const r=document.createElement("div"),a=document.createElement("h1");a.textContent="7:40",r.append(t,a,o);const i=document.createElement("p");i.textContent="Kosher restaurant";const c=document.createElement("h2");c.textContent="Welcome";const s=document.createElement("p");s.textContent="The restaurant is open to everyone, regardless of nationality and religion.",e.append(r,i,c,s),n.append(e,function(){const n=document.createElement("div");n.classList.add("footer");const e=new Image;e.src=g;const t=document.createElement("p");t.insertAdjacentText("afterbegin","Made by AhunBasa");const o=document.createElement("a");o.href="https://github.com/AhunBasa/",o.insertAdjacentElement("beforeend",e);const r=document.createElement("div");return r.append(t,o),n.append(r),n.insertAdjacentHTML("beforeend",'<p>Photo by <a href="http://www.pexels.com/photo/served-table-decorated-with-candles-and-flowers-6479583/">Tara Winstead </a>    Icons form <a href="https://materialdesignicons.com/">materialdesignicons.com</a></p>'),n}())}function y(){const n=h(),e=document.createElement("div");e.classList.add("page","menu"),n.append(e);const t=l("Forshmak",20),o=l("Hummus",15),r=l("Gefilte Fish",30),a=l("Falafel",20),i=l("Chicken, Israeli style",50),c=l("Beef kebab with fresh vegetables\n   and tomato sauce",55),s=l("Shtrudel",15);function l(n,e){const t=document.createElement("div");return t.innerHTML=`<h4>${n}</h4><p>${e} shekels</p><hr>`,t.classList.add("dish"),t}e.append(t,o,r,a,c,i,s)}function w(){const n=h(),e=document.createElement("div");e.classList.add("page","contact"),n.appendChild(e),e.innerHTML="<h3>Address:</h3> <p>Jerusalem, Israel</p><h3>Hours</h3> <p>Sunday - Friday: 11 am - 11 pm</p> <p>Closed on Shabbat<h3>Contact us</h3> <p>(222)222-2222</p> <p>mail@mail.com</p>"}!function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("nav"),n.appendChild(e);const t=document.createElement("div");t.classList.add("tab"),t.textContent="Home",t.addEventListener("click",x),e.appendChild(t);const o=document.createElement("div");o.classList.add("tab"),o.textContent="Menu",o.addEventListener("click",y),e.appendChild(o);const r=document.createElement("div");r.classList.add("tab"),r.textContent="Contact us",r.addEventListener("click",w),e.appendChild(r)}(),x()})()})();