(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5d32a24"],{"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"2e26":function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),c=n("50c4"),l=n("a691"),o=n("1d80"),s=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,x=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,b=h?"$":"$0";return[function(n,r){var i=o(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!h&&E||"string"===typeof r&&-1===r.indexOf(b)){var a=n(e,t,this,r);if(a.done)return a.value}var o=i(t),p=String(this),v="function"===typeof r;v||(r=String(r));var x=o.global;if(x){var y=o.unicode;o.lastIndex=0}var R=[];while(1){var _=u(o,p);if(null===_)break;if(R.push(_),!x)break;var S=String(_[0]);""===S&&(o.lastIndex=s(p,c(o.lastIndex),y))}for(var I="",A=0,$=0;$<R.length;$++){_=R[$];for(var w=String(_[0]),P=f(d(l(_.index),p.length),0),T=[],k=1;k<_.length;k++)T.push(g(_[k]));var C=_.groups;if(v){var U=[w].concat(T,P,p);void 0!==C&&U.push(C);var O=String(r.apply(void 0,U))}else O=m(w,p,P,T,C,r);P>=A&&(I+=p.slice(A,P)+O,A=P+w.length)}return I+p.slice(A)}];function m(t,n,r,i,c,l){var o=r+t.length,s=i.length,u=x;return void 0!==c&&(c=a(c),u=v),e.call(l,u,(function(e,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":l=c[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>s){var f=p(u/10);return 0===f?e:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}l=i[u-1]}return void 0===l?"":l}))}}))},"5ea5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"white","active-text-color":"#20a0ff","unique-opened":"",router:"","collapse-transition":""}},[t._l(t.items,(function(e){return[e.subs?[n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{class:e.icon}),n("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,(function(e,r){return n("el-menu-item",{key:r,staticStyle:{"margin-left":"10px"},attrs:{index:e.index}},[n("i",{class:e.icon}),n("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])}))],2)]:[n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("i",{class:e.icon}),n("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"title",color:"white"},slot:"title"},[t._v(t._s(e.title))])])]]}))],2)],1)},i=[],a=(n("ac1f"),n("5319"),n("e4a9")),c=n("2d12"),l={data:function(){return{collapse:Object(c["a"])(),items:[{icon:"el-icon-tickets",index:"overview",title:"系統"},{icon:"el-icon-sort",index:"user",title:"用戶管理",subs:[{icon:"el-icon-arrow-right",index:"users",title:"普通用戶"},{icon:"el-icon-d-arrow-right",index:"vips",title:"VIP 用戶"}]}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;a["a"].$on("collapse",(function(e){t.collapse=e}))}},o=l,s=(n("6c81"),n("2877")),u=Object(s["a"])(o,r,i,!1,null,"08c1469a",null);e["default"]=u.exports},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,c,l=String(i(e)),o=r(n),s=l.length;return o<0||o>=s?t?"":void 0:(a=l.charCodeAt(o),a<55296||a>56319||o+1===s||(c=l.charCodeAt(o+1))<56320||c>57343?t?l.charAt(o):a:t?l.slice(o,o+2):c-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"6c81":function(t,e,n){"use strict";var r=n("2e26"),i=n.n(r);i.a},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,o=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||s;f&&(l=function(t){var e,n,i,l,f=this,d=s&&f.sticky,p=r.call(f),v=f.source,x=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,x++),n=new RegExp("^(?:"+v+")",p)),u&&(n=new RegExp("^"+v+"$(?!\\s)",p)),o&&(e=f.lastIndex),i=a.call(d?n:f,g),d?i?(i.input=i.input.slice(x),i[0]=i[0].slice(x),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),t.exports=l},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),c=n("9263"),l=n("9112"),o=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=a(t),x=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=x&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!x||!g||"replace"===t&&(!s||!u||d)||"split"===t&&!p){var h=/./[v],E=n(v,""[t],(function(t,e,n,r,i){return e.exec===c?x&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=E[0],m=E[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&l(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-e5d32a24.09fb320d.js.map