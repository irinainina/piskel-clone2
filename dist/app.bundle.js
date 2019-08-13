!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector(".canvas-active"),a=n.getContext("2d");let o,r,l=!1;function c(){const e=document.getElementsByName("size");let t=1;return e.forEach(e=>{e.checked&&(t=+e.value)}),t}function i(){let e;return document.getElementsByName("resize").forEach(t=>{t.checked&&(e=t.value)}),e}function s(){const e=document.createElement("canvas"),t=e.getContext("2d"),o=document.querySelectorAll(".canvas2"),r=i(),l=(r-n.width)/2;t.drawImage(n,0,0),n.width=n.height=r,a.drawImage(e,l,l),o.forEach(n=>{t.drawImage(n,0,0),n.width=n.height=r,n.getContext("2d").drawImage(e,l,l)});const c=document.querySelector(".layer");c.width=c.height=r}function d(){const e=document.querySelector(".canvas-size span");let t=i();e.innerText=`[${t}x${t}]`}const u=document.getElementsByName("resize");function m(){return n.offsetWidth/n.width}function h(){let e;return document.getElementsByName("tool").forEach(t=>{t.checked&&(e=t.value)}),e}u.forEach(e=>e.addEventListener("click",s)),u.forEach(e=>e.addEventListener("click",d)),n.addEventListener("mousemove",()=>{let e=c();o=Math.floor(event.offsetX/m()/e)*e,r=Math.floor(event.offsetY/m()/e)*e}),n.addEventListener("mousemove",function(){const e=document.querySelector(".coordinates span");e.parentNode.style.opacity="1",e.innerText=`${o}:${r}`,n.addEventListener("mouseleave",()=>e.parentNode.style.opacity="0")}),window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1};const f=document.querySelector(".active-color"),g=document.querySelector(".prev-color");function v(){let e;var t;return e=("buttons"in(t=t||window.event)?1==t.buttons:1==(t.which||t.button))?f.value:g.value}function y(e){if("mirror"!==h()||!l)return;a.fillStyle=v();let t=c();const o=Math.floor(e.offsetX/m()/t)*t,r=Math.abs(n.width-o-c()),i=Math.floor(e.offsetY/m()/t)*t;if(e.ctrlKey){const e=Math.abs(n.width-i-c());a.fillRect(o,i,t,t),a.fillRect(o,e,t,t)}else if(e.shiftKey){const e=Math.abs(n.width-o-c()),r=Math.abs(n.width-i-c());a.fillRect(o,i,t,t),a.fillRect(e,i,t,t),a.fillRect(o,r,t,t),a.fillRect(e,r,t,t)}else a.fillRect(o,i,t,t),a.fillRect(r,i,t,t)}function p(e,t,n){if(t<0||n<0||t>=e.width||n>=e.height)return[-1,-1,-1,-1];{const a=4*(n*e.width+t);return e.data.slice(a,a+4)}}function w(e,t,n,a){const o=4*(n*e.width+t);e.data[o+0]=a[0],e.data[o+1]=a[1],e.data[o+2]=a[2],e.data[o+3]=a[3]}function E(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function S(e,t,n,a){const o=e.getImageData(0,0,e.canvas.width,e.canvas.height),r=p(o,t,n);if(!E(r,a)){const l=[t,n];for(;l.length>0;){const e=l.pop(),t=l.pop();E(p(o,t,e),r)&&(w(o,t,e,a),l.push(t+1,e),l.push(t-1,e),l.push(t,e+1),l.push(t,e-1))}e.putImageData(o,0,0)}}function L(e){if("eraser"!==h()||!l)return;let t=c();const o=Math.floor(e.offsetX/m()/t)*t,r=Math.floor(e.offsetY/m()/t)*t;e.ctrlKey?a.clearRect(0,0,n.width,n.height):a.clearRect(o,r,t,t)}document.querySelector(".rotate").addEventListener("click",function(){let e;e=f.value,f.value=g.value,g.value=e}),n.addEventListener("mousedown",()=>{l=!0}),n.addEventListener("mouseup",()=>{l=!1}),n.parentNode.addEventListener("mouseleave",()=>{l=!1});let x=n;const q={};function I(e,t,n,o){let r=c(),l=Math.abs(n-e),i=Math.abs(o-t),s=e<n?1:-1,d=t<o?1:-1,u=l-i;for(a.fillRect(n,o,r,r);e!=n||t!=o;){a.fillRect(e,t,r,r);let n=2*u;n>-i&&(u-=i,e+=s),n<l&&(u+=l,t+=d)}}function b(e,t,n){for(var a=n,o=0,r=1-a;a>=o;)C(a,o,e,t),o+=1,r+=r<0?2*o+1:2*(o- --a)+1,C(a,o,e,t)}function C(e,t,n,o){a.fillRect(e+n,t+o,1,1),a.fillRect(n+t,e+o,1,1),a.fillRect(n-e,o+t,1,1),a.fillRect(n-t,o+e,1,1),a.fillRect(n-e,o-t,1,1),a.fillRect(n-t,o-e,1,1),a.fillRect(e+n,o-t,1,1),a.fillRect(n+t,o-e,1,1)}function R(e,t,n,a){var o=0,r=a,l=n*n,c=a*a,i=0,s=2*l*r;k(o,r,e,t);for(var d=c-l*a+.25*l;i<s;)i+=2*c,d<0?d=d+c+i:(r--,d=d+c+i-(s-=2*l)),k(++o,r,e,t);for(d=c*((o+.5)*(o+.5))+l*((r-1)*(r-1))-l*c;r>0;)s-=2*l,d>0?d=d+l-s:(o++,d=d+l-s+(i+=2*c)),k(o,--r,e,t)}function k(e,t,n,o){a.fillRect(n+e,o+t,1,1),a.fillRect(n-e,o+t,1,1),a.fillRect(n+e,o-t,1,1),a.fillRect(n-e,o-t,1,1)}function M(){if("shape"!==h()||!l)return;a.putImageData(x,0,0);S(a,o,r,[79,181,227,115]);let e=a.getImageData(q.x,q.y,n.width,n.height);a.putImageData(e,x2,y2)}function A(e,t,n){e/=255,t/=255,n/=255;let a,o,r=Math.max(e,t,n),l=Math.min(e,t,n),c=(r+l)/2;if(r==l)a=o=0;else{let i=r-l;switch(o=c>.5?i/(2-r-l):i/(r+l),r){case e:a=(t-n)/i+(t<n?6:0);break;case t:a=(n-e)/i+2;break;case n:a=(e-t)/i+4}a/=6}return[360*a,100*o,100*c]}n.addEventListener("mousedown",()=>{a.fillStyle=v(),x=a.getImageData(0,0,n.width,n.height),q.x=o,q.y=r}),document.querySelector(".rotation").addEventListener("mousedown",function(e){const t=new Image;t.src=n.toDataURL(),a.save(),e.ctrlKey?(a.translate(n.width,1),a.rotate(Math.PI/2)):(a.translate(1,n.width),a.rotate(3*Math.PI/2)),a.clearRect(0,0,n.width,n.height),t.onload=function(){a.drawImage(t,0,0),a.restore()}}),document.querySelector(".flipflop").addEventListener("mousedown",function(e){const t=new Image;t.src=n.toDataURL(),a.save(),e.ctrlKey?(a.translate(0,n.width),a.scale(1,-1)):(a.translate(n.width,0),a.scale(-1,1)),a.clearRect(0,0,n.width,n.height),t.onload=function(){a.drawImage(t,0,0),a.restore()}});const T=document.querySelector(".change-hotkeys"),D=document.querySelector(".change-hotkey"),N=document.querySelector(".cancel");function $(e){const t=document.querySelectorAll(".setting-container"),n=document.querySelectorAll(".setting-btn"),a=e.target.parentNode;e.target.classList.contains("btn-show")||(n.forEach(e=>{e.classList.remove("btn-show")}),e.target.classList.add("btn-show")),a.classList.contains("setting-hide")?(t.forEach(e=>{e.classList.remove("setting-hide")}),a.classList.contains("setting-show")||t.forEach(e=>{e.classList.remove("setting-show"),e.lastElementChild.classList.remove("setting-opacity"),e.lastElementChild.classList.add("setting-none"),a.classList.add("setting-show"),a.lastElementChild.classList.remove("setting-none"),a.lastElementChild.classList.add("setting-opacity")})):a.classList.contains("setting-show")?t.forEach(e=>{e.classList.add("setting-hide")}):t.forEach(e=>{e.classList.remove("setting-show"),e.lastElementChild.classList.remove("setting-opacity"),e.lastElementChild.classList.add("setting-none"),a.classList.add("setting-show"),a.lastElementChild.classList.remove("setting-none"),a.lastElementChild.classList.add("setting-opacity")})}T.addEventListener("click",function(e){if(!e.target.classList.contains("hotkey-input"))return;const t=document.querySelector(".inform"),n=document.querySelector(".btn-hotkey"),a=document.querySelectorAll(".hotkey-value"),o=[];a.forEach(e=>o.push(e.innerText)),e.target.addEventListener("input",()=>{let a=e.target.value;a.match(/[a-zA-Z]/)||(t.innerText="Please use only Latin letters"),a.match(/[a-z]/)&&(a=a.toUpperCase()),o.includes(a)?t.innerText="This letter already in use. Please choose another letter":a.match(/[A-Z]/)&&(t.innerText="Press the button to change the hotkey"),n.addEventListener("click",()=>{e.target.previousElementSibling.innerText=a,e.target.value="",t.innerText="The hotkey is changed successfully",document.querySelectorAll(".tooltip-shortcut").forEach(t=>{t.dataset.tool===e.target.previousElementSibling.previousElementSibling.innerText&&(t.innerText=`(${a})`)})})})}),D.addEventListener("click",()=>{T.classList.remove("hide")}),N.addEventListener("click",()=>{T.classList.add("hide")}),window.addEventListener("keydown",function(e){const t=document.querySelector(".tools"),n=document.querySelectorAll(".hotkey-value"),a=document.querySelectorAll(".hotkey-name");for(let o=0;o<n.length;o++)e.code===`Key${n[o].innerText}`&&(t.querySelector(`input[value=${a[o].innerText}]`).checked=!0)});const P=document.querySelector(".setting-resize-btn"),z=document.querySelector(".setting-save-btn"),U=document.querySelector(".setting-import-btn");function B(e){e=window.event;let t=Math.max(-1,Math.min(1,e.wheelDelta));return n.style.width=Math.max(32,Math.min(640,n.offsetWidth+32*t))+"px",n.style.height=Math.max(32,Math.min(640,n.offsetHeight+32*t))+"px",!1}function K(){document.querySelectorAll(".preview").forEach((e,t)=>{e.querySelector(".number").innerText=t+1})}function j(){const e=document.querySelectorAll(".preview");e.forEach((t,n)=>{t.classList.remove("preview-active"),n===e.length-1&&t.classList.add("preview-active")})}function Y(){document.querySelectorAll(".preview").forEach(e=>{if(e.classList.contains("preview-active")){const t=e.querySelector(".canvas2"),a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.drawImage(n,0,0)}})}P.addEventListener("click",$),z.addEventListener("click",$),U.addEventListener("click",$),document.querySelector(".main-container").addEventListener("mousewheel",B),n.addEventListener("mousewheel",B),n.addEventListener("mousemove",function(e){if("pen"!==h()||!l)return;const t={};t.x=Math.floor(e.offsetX/m()/c())*c(),t.y=Math.floor(e.offsetY/m()/c())*c(),I(q.x,q.y,t.x,t.y),q.x=t.x,q.y=t.y}),n.addEventListener("mousedown",y),n.addEventListener("mousemove",y),n.addEventListener("mousedown",function(){if("bucket"===h())if(event.ctrlKey)a.fillStyle=v(),a.fillRect(0,0,n.width,n.height);else{let e=function(e){let t=e.substring(1).split("");return 3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t,255]}(v());S(a,o,r,e)}}),n.addEventListener("mousedown",L),n.addEventListener("mousemove",L),n.addEventListener("mousedown",function(e){if("brush"!==h())return;a.fillStyle=v();let t=e.offsetX/m(),o=e.offsetY/m(),r=a.getImageData(t,o,1,1).data.join(","),l=n.width;for(let e=0;e<l;e++)for(let t=0;t<l;t++)a.getImageData(e,t,1,1).data.join(",")===r&&a.fillRect(e,t,1,1)}),n.addEventListener("mousemove",function(e){if("stroke"!==h()||!l)return;a.putImageData(x,0,0);const t={};t.x=Math.floor(e.offsetX/m()/c())*c(),t.y=Math.floor(e.offsetY/m()/c())*c(),I(q.x,q.y,t.x,t.y)}),n.addEventListener("mousemove",function(e){if("circle"!==h()||!l)return;a.putImageData(x,0,0),a.fillStyle=v();const t={};let n;t.x=Math.floor(e.offsetX/m()/c())*c(),t.y=Math.floor(e.offsetY/m()/c())*c();let i=Math.floor(Math.abs(t.x-q.x)/2),s=Math.floor(Math.abs(t.y-q.y)/2);n=i<s?i:s,q.x<t.x&&q.y<t.y?e.shiftKey?b(o-n,r-n,n):R(o-i,r-s,i,s):q.x>t.x&&q.y>t.y?e.shiftKey?b(q.x-n,q.y-n,n):R(q.x-i,q.y-s,i,s):q.x<t.x&&q.y>t.y?e.shiftKey?b(o-n,q.y-n,n):R(o-i,q.y-s,i,s):q.x>t.x&&q.y<t.y&&(e.shiftKey?b(q.x-n,r-n,n):R(q.x-i,r-s,i,s))}),n.addEventListener("mousemove",function(e){if("rectangle"!==h()||!l)return;a.putImageData(x,0,0),a.lineWidth=c(),a.strokeStyle=v();let t=Math.floor(e.offsetX/m()),n=Math.floor(e.offsetY/m()),o=t-q.x,r=n-q.y;e.shiftKey&&(Math.abs(o)<Math.abs(r)?r=r>0?Math.abs(o):-Math.abs(o):Math.abs(r)<Math.abs(o)&&(o=o>0?Math.abs(r):-Math.abs(r))),1===c()||3===c()?a.strokeRect(q.x+.5,q.y+.5,o,r):a.strokeRect(q.x,q.y,o,r)}),n.addEventListener("mousemove",function(){if("move"!==h()||!l)return;a.putImageData(x,0,0);let e=o-q.x,t=r-q.y,c=a.getImageData(0,0,n.width-e,n.height-t);a.clearRect(0,0,n.width,n.height),a.putImageData(c,e,t)}),n.addEventListener("mousemove",M),n.addEventListener("mousedown",M),n.addEventListener("mousedown",function(){if("color-picker"!==h()||!l)return;const e=Math.floor(event.offsetX/m()),t=Math.floor(event.offsetY/m());let n=a.getImageData(e,t,1,1).data;if(0===n[3])return;let o=n[0].toString(16);o=1===o.length?"0"+o:o;let r=n[1].toString(16);r=1===r.length?"0"+r:r;let c=n[2].toString(16),i=`#${o}${r}${c=1===c.length?"0"+c:c}`;f.value=i}),n.addEventListener("mousedown",function(e){if("lighten"!==h()||!l)return;let t=c();for(let n=o;n<o+t;n++)for(let o=r;o<r+t;o++){let t=a.getImageData(n,o,1,1).data;if(0===t[3])return;let[r,l,c]=A(t[0],t[1],t[2]);e.ctrlKey?a.fillStyle=`hsl(${r}, ${l}%, ${c>6?c-=5:1}%)`:a.fillStyle=`hsl(${r}, ${l}%, ${c<94?c+=5:99}%)`,a.fillRect(n,o,1,1)}}),n.addEventListener("mousemove",function(e){if("dithering"!==h()||!l)return;const t=document.querySelector(".prev-color");let n=c();const o=Math.floor(e.offsetX/m()),r=Math.floor(e.offsetY/m());if(e.ctrlKey)for(let e=o;e<o+n;e++)for(let o=r;o<r+n;o++)e%2!=o%2?(a.fillStyle=v(),a.fillRect(e,o,1,1)):(a.fillStyle=t.value,a.fillRect(e,o,1,1));else for(let e=o;e<o+n;e++)for(let t=r;t<r+n;t++)e%2!=t%2?(a.fillStyle=v(),a.fillRect(e,t,1,1)):a.clearRect(e,t,1,1)}),n.addEventListener("mouseup",Y);const X=document.querySelector(".previews-list");function O(){const e=X.querySelector(".preview-container").cloneNode(!0);X.appendChild(e),a.clearRect(0,0,n.width,n.height),K(),j()}X.addEventListener("click",function(e){e.target.classList.contains("canvas2")&&(document.querySelectorAll(".preview").forEach(e=>{e.classList.contains("preview-active")&&e.classList.remove("preview-active")}),e.target.parentNode.classList.add("preview-active"),a.clearRect(0,0,n.width,n.height),a.drawImage(e.target,0,0))});const F=document.querySelector(".add-frame");F.addEventListener("click",O),X.addEventListener("click",function(e){e.target.classList.contains("delete")&&X.children.length>1&&(e.target.parentNode.classList.contains("preview-active")&&a.clearRect(0,0,n.width,n.height),e.target.parentNode.parentNode.remove(),K(),ne(),j())}),X.addEventListener("mouseover",function(e){if(!e.target.classList.contains("move"))return;let t=e.target.parentNode;e.target.onmousedown=function(){t.style.position="absolute",t.style.zIndex=100,t.parentNode.classList.add("preview-container-active"),document.onmousemove=function(e){!function(e){t.style.top=e.pageY-t.offsetHeight/2-t.parentNode.offsetTop+"px",t.style.left="-3px"}(e)}},t.onmouseup=function(){document.querySelectorAll(".preview-container").forEach(e=>{let n=t.offsetTop+t.parentNode.offsetTop,a=e.offsetTop;if(n>X.offsetHeight&&(t.parentNode.appendChild(t),t.style.top="0px",t.style.left="0px"),n>a-50&&n<a+50){let n=e,a=e.firstElementChild,o=t.parentNode,r=t;t.style.top="0px",t.style.left="0px",n.appendChild(r),o.appendChild(a),o.classList.remove("preview-container-active")}else t.parentNode.appendChild(t),t.parentNode.classList.remove("preview-container-active")}),t.style.zIndex=1,document.onmousemove=null,t.onmouseup=null,K(),ne(),j()}}),X.addEventListener("click",function(e){if(e.target.classList.contains("copy")){const t=e.target.parentNode.parentNode.cloneNode(!0),n=e.target.parentNode.parentNode,a=e.target.parentNode.querySelector("canvas");t.querySelector("canvas").getContext("2d").drawImage(a,0,0),X.insertBefore(t,n),K(),ne(),j()}});const G=document.querySelector(".layer"),_=document.querySelector(".layer-management-layer-container");function H(){document.querySelectorAll(".layer-management-layer").forEach(e=>{e.classList.contains("layer-management-layer-active")&&e.classList.remove("layer-management-layer-active")}),_.firstElementChild.classList.add("layer-management-layer-active")}function W(){!function(){const e=document.createElement("div");e.classList.add("layer-management-layer"),e.innerText="Layer ",e.dataset.layernum=_.children.length+1;const t=document.createElement("span");t.innerText=`${_.children.length+1}`,e.appendChild(t),_.insertBefore(e,_.firstChild)}(),H(),function(){const e=document.createElement("canvas");e.width=e.height=n.width,e.classList.add("canvas-temp"),e.dataset.canvastempnum=_.children.length-1,document.querySelector(".main-container").appendChild(e);const t=e.getContext("2d"),o=a.getImageData(0,0,n.width,n.height);t.putImageData(o,0,0),a.clearRect(0,0,n.width,n.height);const r=n.toDataURL();localStorage.setItem("url",r)}()}function Z(){const e=document.querySelector(".layer-management-layer-active").dataset.layernum,t=document.querySelectorAll(".canvas-temp");if(isCanvasTemp=!1,t.forEach(e=>{e.dataset.canvastempnum==_.children.length&&(isCanvasTemp=!0)}),!isCanvasTemp){const e=document.createElement("canvas");e.width=e.height=n.width,e.classList.add("canvas-temp"),e.dataset.canvastempnum=_.children.length,document.querySelector(".main-container").appendChild(e);const t=e.getContext("2d"),o=a.getImageData(0,0,n.width,n.height);t.putImageData(o,0,0),a.clearRect(0,0,n.width,n.height);const r=n.toDataURL();localStorage.setItem("url",r)}a.clearRect(0,0,n.width,n.height),t.forEach(t=>{t.dataset.canvastempnum==e&&a.drawImage(t,0,0)})}function J(){Z();const e=document.querySelector(".layer-management-layer-active"),t=_.children.length,o=e.dataset.layernum,r=document.querySelectorAll(".canvas-temp");if(1===t){a.clearRect(0,0,n.width,n.height);const t=n.toDataURL();return localStorage.setItem("url",t),e.firstElementChild.innerText="1",e.dataset.layernum="1",r.forEach(e=>e.remove()),Y(),void ne()}a.clearRect(0,0,n.width,n.height),e.remove(),r.forEach(e=>{e.dataset.canvastempnum==o&&e.remove()}),H(),Z()}_.addEventListener("click",function(e){document.querySelectorAll(".layer-management-layer").forEach(t=>{t.classList.contains("layer-management-layer-active")&&t.classList.remove("layer-management-layer-active"),e.target.classList.add("layer-management-layer-active")})}),_.addEventListener("click",Z),n.addEventListener("mouseup",function(){const e=document.querySelector(".layer-management-layer-active").dataset.layernum,t=_.children.length,o=document.querySelectorAll(".canvas-temp");e!=t&&o.forEach(t=>{if(t.dataset.canvastempnum==e){const e=t.getContext("2d"),o=a.getImageData(0,0,n.width,n.height);e.putImageData(o,0,0)}})}),F.addEventListener("click",()=>{!function(){const e=document.querySelector(".preview-active").parentNode.previousElementSibling.querySelector(".canvas2"),t=e.getContext("2d"),n=document.querySelectorAll(".canvas-temp");for(let e=0;e<n.length;e++)t.drawImage(n[e],0,0),n[e].remove();const a=e.toDataURL();for(localStorage.setItem("url",a);_.children.length>1;)_.removeChild(_.firstChild);_.firstElementChild.firstElementChild.innerText="1",H()}(),J(),H()}),document.querySelector(".layer-management-btn-container").addEventListener("click",function(e){e.stopPropagation(),e.target.classList.contains("layer-management-btn")&&(e.target.classList.contains("btn-plus")?W():e.target.classList.contains("btn-delete")?J():e.target.classList.contains("btn-up")?function(){const e=document.querySelector(".layer-management-layer-active"),t=(_.children.length,e.dataset.layernum),n=document.querySelector(".main-container"),a=document.querySelectorAll(".canvas-temp");if(e===_.firstElementChild)return;const o=e.previousElementSibling;_.removeChild(e),_.insertBefore(e,o),a.forEach(e=>{if(e.dataset.canvastempnum==t){const t=e.previousElementSibling;n.removeChild(e),n.insertBefore(e,t)}}),Z()}():e.target.classList.contains("btn-down")&&function(){const e=document.querySelector(".layer-management-layer-active"),t=(_.children.length,e.dataset.layernum),n=document.querySelector(".main-container"),a=document.querySelectorAll(".canvas-temp");if(e===_.lastElementChild)return;const o=e.nextElementSibling;_.removeChild(o),_.insertBefore(o,e),a.forEach(e=>{if(e.dataset.canvastempnum==t){const t=e.nextElementSibling;n.removeChild(t),n.insertBefore(t,e)}}),Z()}())});const V=document.querySelector(".range-fps");V.addEventListener("input",function(){document.querySelector(".fps-value").innerText=V.value}),document.querySelector(".layer-btn").addEventListener("click",function(){const e=document.querySelector(".layer-wrapper");document.fullscreenElement?document.exitFullscreen():e.requestFullscreen()});let Q,ee=0;function te(){if(0==V.value)return;return 1e3/V.value}function ne(){let e=te();const t=document.querySelectorAll(".canvas2"),n=G.getContext("2d");n.clearRect(0,0,G.width,G.height),n.drawImage(t[ee=++ee%t.length],0,0);const a=document.querySelectorAll(".canvas-temp");for(let e=0;e<a.length;e++)n.drawImage(a[e],0,0);Q&&clearInterval(Q),Q=setTimeout(ne,e),0==V.value&&clearInterval(Q)}n.addEventListener("mouseup",ne),V.addEventListener("input",ne);const ae=document.querySelector(".range-size");function oe(){return document.querySelector(".size-value").innerText=ae.value,ae.value}function re(){const e=document.querySelectorAll(".canvas2"),t=[];return e.forEach(e=>{const n=document.createElement("canvas"),a=n.getContext("2d"),o=oe();n.width=o,n.height=o,a.fillStyle="rgba(225,225,225,0.1)",a.fillRect(0,0,n.width,n.height),a.imageSmoothingEnabled=!1,a.drawImage(e,0,0,o,o),t.push(n.toDataURL())}),t}function le(){const e=[];return document.querySelectorAll(".canvas2").forEach(t=>{t.getContext("2d");const n=document.createElement("canvas"),a=n.getContext("2d"),o=oe();n.width=o,n.height=o,a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,o,o);const r=a.getImageData(0,0,o,o).data.buffer;e.push(r)}),e}ae.addEventListener("input",oe),document.querySelector(".save-gif").addEventListener("click",()=>{gifshot.createGIF({images:re(),interval:1/V.value,gifWidth:oe(),gifHeight:oe()},e=>{if(!e.error){const t=e.image;download(t,"newGif.gif","gif")}})}),document.querySelector(".save-apng").addEventListener("click",function(){const e=new Array(le().length);e.fill(te());const t=UPNG.encode(le(),oe(),oe(),0,e);download(t,"newAPNG.apng","apng")}),document.querySelector(".save-pixel").addEventListener("click",function(){const e=V.value,t=n.width,a=re().length,o=n.toDataURL(),r=document.querySelectorAll(".canvas2");let l="";for(let e=0;e<a;e++)l+=`${r[e].toDataURL()}, `;download(`${e}, ${t}, ${a}, ${o}, ${l}`,"newPixel.pixel","pixel")}),document.querySelector(".import-pixel").addEventListener("change",function(e){const t=e.target.files[0];if(!t)return;const o=new FileReader;o.onload=function(e){!function(e){const t=e.split(", "),o=t[0],r=t[1],l=t[2],c=t[3];V.value=o,document.querySelector(".fps-value").innerText=o,n.width=n.height=r,canvas2.width=canvas2.height=r,G.width=G.height=r,document.getElementsByName("resize").forEach(e=>{e.checked=!1,e.value==r&&(e.checked=!0)});const i=new Image;if(i.src=c,i.onload=function(){a.clearRect(0,0,n.width,n.height),a.drawImage(i,0,0,n.width,n.height),Y(),ne()},l>1){const e=document.querySelector(".previews-list");for(let n=0;n<l-1;n++){const a=e.lastElementChild.firstElementChild.firstElementChild,o=a.getContext("2d"),r=new Image;r.src=t[4+n],r.onload=function(){o.drawImage(r,0,0)},O()}}}(e.target.result)},o.readAsText(t)},!1),document.querySelector(".import-image").addEventListener("change",function(e){const t=e.target.files[0];if(!t)return;const o=new FileReader;o.onload=function(e){const t=e.target.result;var o=new Image;o.src=t,o.onload=function(){a.imageSmoothingEnabled=!1,a.clearRect(0,0,n.width,n.height),a.drawImage(o,0,0,n.width,n.height),Y(),ne()}},o.readAsDataURL(t)},!1),document.querySelector(".save-png").addEventListener("click",function(){const e=document.querySelectorAll(".canvas2"),t=document.createElement("canvas"),n=t.getContext("2d"),a=oe();t.width=a,t.height=a,n.imageSmoothingEnabled=!1,e.forEach(e=>{n.drawImage(e,0,0,a,a)});const o=t.toDataURL();download(o,"newPng.png","png")});document.querySelector(".save-google-drive").addEventListener("click",e=>{const t=new Array(le().length);t.fill(te());const n=UPNG.encode(le(),oe(),oe(),0,t);var a=new Blob([n],{type:"image/apng"}),o=window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token,r=new FormData;r.append("metadata",new Blob([JSON.stringify({name:"newPiskel.apng",mimeType:"apng"})],{type:"application/json"})),r.append("file",a),fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",{name:"piskel.jpg",method:"POST",headers:new Headers({Authorization:"Bearer "+o}),body:r})});const ce=document.getElementsByName("tool");for(let e=0;e<ce.length;e++)ce[e].onclick=function(){localStorage.setItem("radioTool",this.value)};const ie=document.getElementsByName("resize");for(let e=0;e<ie.length;e++)ie[e].onclick=function(){localStorage.setItem("radioResize",this.value)};function se(){const e=document.querySelectorAll(".canvas2"),t=e.length;localStorage.setItem("framesLength",t);for(let n=0;n<t;n++){const t=e[n].toDataURL();localStorage.setItem(n,t)}}f.onchange=function(){localStorage.setItem("activeColor",f.value)},g.onchange=function(){localStorage.setItem("prevColor",g.value)},n.onclick=function(){const e=n.toDataURL();localStorage.setItem("url",e)},F.addEventListener("click",se),X.addEventListener("click",se),window.onload=function(){if(localStorage.getItem("radioTool")){const e=localStorage.getItem("radioTool");document.querySelector('input[name="tool"][value="'+e+'"]').setAttribute("checked","checked")}if(localStorage.getItem("radioResize")){const e=localStorage.getItem("radioResize");document.querySelector('input[name="resize"][value="'+e+'"]').setAttribute("checked","checked"),s()}if(localStorage.getItem("activeColor")&&(f.value=localStorage.getItem("activeColor")),localStorage.getItem("prevColor")&&(g.value=localStorage.getItem("prevColor")),localStorage.getItem("url")){const e=new Image;e.src=localStorage.getItem("url"),e.onload=function(){a.drawImage(e,0,0),Y(),ne()}}if(localStorage.getItem("framesLength")){const e=localStorage.getItem("framesLength"),t=document.querySelector(".previews-list");for(let n=0;n<e-1;n++){const e=t.lastElementChild.firstElementChild.firstElementChild.getContext("2d"),a=new Image;a.src=localStorage.getItem(n),a.onload=function(){e.drawImage(a,0,0)},O()}}},document.querySelector(".btn-create").onclick=function(){localStorage.clear()},document.querySelector(".name").onclick=function(){for(localStorage.clear();X.children.length>1;)X.removeChild(X.lastChild);X.firstElementChild.firstElementChild.classList.add("preview-active"),document.querySelector(".canvas2").getContext("2d").clearRect(0,0,n.width,n.height),a.clearRect(0,0,n.width,n.height),G.getContext("2d").clearRect(0,0,G.width,G.height),f.value="#006060",g.value="#ffd700"},document.querySelector(".import-piskel").addEventListener("change",function(e){const t=e.target.files[0];if(!t)return;const o=new FileReader;o.onload=function(e){!function(e){const t=e.split('fps":').pop().split(",")[0],o=e.split('height":').pop().split(",")[0],r=e.split('frameCount\\":').pop().split(",")[0],l=e.split('base64PNG\\":\\"').pop().split('\\"')[0];V.value=t,document.querySelector(".fps-value").innerText=t,n.width=n.height=o,canvas2.width=canvas2.height=o,G.width=G.height=o,document.getElementsByName("resize").forEach(e=>{e.checked=!1,e.value==o&&(e.checked=!0)});const c=new Image;if(c.src=l,c.onload=function(){a.clearRect(0,0,n.width,n.height),a.drawImage(c,o*(r-1),0,o,o,0,0,o,o),Y(),ne()},r>1){const e=document.querySelector(".previews-list");for(let t=0;t<r-1;t++){const n=e.lastElementChild.firstElementChild.firstElementChild,a=n.getContext("2d"),r=new Image;r.src=l,r.onload=function(){a.drawImage(c,o*t,0,o,o,0,0,o,o)},O()}}}(e.target.result)},o.readAsText(t)},!1),document.querySelector(".savepiskel").addEventListener("click",function(){const e=V.value,t=n.height,a=n.width,o=re().length,r=document.querySelectorAll(".canvas2"),l=document.createElement("canvas"),c=l.getContext("2d");l.width=o*a,l.height=t,r.forEach((e,n)=>{c.drawImage(e,a*n,0,a,t)});const i=l.toDataURL("image/png;base64");let s="";for(let e=0;e<o;e++)s+="["+e+"],";const d=`{"modelVersion":2,"piskel":{"name":"New Piskel","description":"","fps":${e},"height":${t},"width":${a},"layers":["{\\"name\\":\\"Layer 1\\",\\"opacity\\":1,\\"frameCount\\":${o},\\"chunks\\":[{\\"layout\\":[${s.slice(0,-1)}],\\"base64PNG\\":\\"${i}\\"}]}"],"hiddenFrames":[]}}`;download(d,"newPiskel.piskel","piskel")})}]);
//# sourceMappingURL=app.bundle.js.map