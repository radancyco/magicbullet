(function(e){function t(t){for(var i,n,o=t[0],r=t[1],p=t[2],m=0,u=[];m<o.length;m++)n=o[m],l[n]&&u.push(l[n][0]),l[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);c&&c(t);while(u.length)u.shift()();return a.push.apply(a,p||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,o=1;o<s.length;o++){var r=s[o];0!==l[r]&&(i=!1)}i&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},l={app:0},a=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var c=r;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0d7c":function(e,t,s){"use strict";var i=s("e954"),l=s.n(i);l.a},"0e45":function(e,t,s){},"11c2":function(e,t,s){},"15ed":function(e,t,s){"use strict";var i=s("4be3"),l=s.n(i);l.a},"1b61":function(e,t,s){},2856:function(e,t,s){},"2e44":function(e,t,s){},"4af3":function(e,t,s){"use strict";var i=s("0e45"),l=s.n(i);l.a},"4be3":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d"),s("f5df");var i=s("2b0e"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s(e.selected,{tag:"component",attrs:{id:"app"}},[s("app-nav"),s("main",[s("app-item",{staticClass:"item",attrs:{unit:e.tree}})],1)],1)},a=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("div",{staticClass:"navcontain"},[s("span",[e._v(e._s(e.name)+" Directory Structure")]),s("div",{staticClass:"icons"},[s("a",{attrs:{href:"https://github.com/"+e.github,target:"_blank"}},[s("svg",{staticClass:"github",attrs:{role:"presentation",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24","aria-labelledby":"github"}},[s("title",{attrs:{id:"github"}},[e._v("github")]),s("path",{attrs:{d:"M22.5 8.5c0-1.5-0.5-2.8-1.4-4 0.3-1.3 0.2-2.7-0.3-3.9-0.1-0.3-0.3-0.5-0.6-0.6-0.4-0.1-1.7-0.3-4.4 1.4-2.2-0.5-4.5-0.5-6.6 0-2.7-1.7-4-1.5-4.4-1.4-0.3 0.1-0.5 0.3-0.6 0.6-0.6 1.3-0.7 2.6-0.3 3.9-0.9 1.2-1.4 2.6-1.4 4 0 5.4 3 7.1 5.8 7.7-0.2 0.7-0.3 1.3-0.3 1.9v0.1c-2.1 0.4-2.8-0.4-3.6-1.5-0.5-0.7-1.1-1.5-2.2-1.7-0.5-0.1-1.1 0.2-1.2 0.7s0.2 1.1 0.7 1.2c0.3 0.1 0.7 0.5 1.1 1 0.9 1.2 2.2 2.8 5.2 2.4v1.7c0 0.6 0.4 1 1 1s1-0.4 1-1v-2.9c0 0 0-0.1 0-0.1v-0.9c0-0.7 0.2-1.3 0.7-1.8 0.3-0.3 0.4-0.7 0.2-1-0.1-0.4-0.4-0.6-0.8-0.7-2.9-0.4-5.6-1.3-5.6-6 0-1.2 0.4-2.2 1.2-3.1 0.3-0.3 0.3-0.7 0.2-1-0.3-0.9-0.3-1.7-0.1-2.5 0.5 0.1 1.4 0.4 2.6 1.3 0.3 0.2 0.6 0.2 0.9 0.1 2.1-0.6 4.4-0.6 6.5 0 0.3 0.1 0.6 0 0.8-0.1 1.3-0.9 2.2-1.2 2.6-1.3 0.2 0.8 0.2 1.6-0.1 2.4-0.1 0.4-0.1 0.8 0.2 1 0.8 0.8 1.2 1.9 1.2 3.1 0 4.7-2.7 5.7-5.6 6-0.4 0-0.7 0.3-0.8 0.7s0 0.8 0.2 1c0.5 0.5 0.7 1.2 0.7 1.9v3.9c0 0.6 0.4 1 1 1s1-0.4 1-1v-3.8c0.1-0.7 0-1.3-0.3-1.9 2.4-0.5 5.8-2.1 5.8-7.8z"}})])]),s("app-moreinfo"),s("app-toggle")],1)])])},o=[],r=(s("7f7f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"more-info-contain"},[s("svg",{staticClass:"more-info",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-labelledby":"info"},on:{mouseenter:function(t){e.show=!e.show},mouseleave:function(t){e.show=!e.show}}},[s("title",{attrs:{id:"info"}},[e._v("Info")]),s("path",{attrs:{d:"M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z"}}),s("path",{attrs:{d:"M12 11c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1s1-0.4 1-1v-4c0-0.6-0.4-1-1-1z"}}),s("path",{attrs:{d:"M11.3 7.3c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.2-0.2 0.3-0.4 0.3-0.7s-0.1-0.5-0.3-0.7c-0.4-0.4-1-0.4-1.4 0z"}})]),s("transition",{attrs:{name:"appear"}},[e.show?s("div",{staticClass:"findoutmore"},[s("h2",[e._v("What is this?")]),s("p",[e._v("Often when we're excited about contributing to a project, it takes a little while to understand the codebase before we get started. It's estimated that developers spend 70% of their time reading code and only 30% writing. This project documents how "),s("span",{staticClass:"projectname"},[e._v(e._s(e.name))]),e._v(" is set up with special notes to guide people through the directory structure.")])]):e._e()])],1)}),p=[],c={data:function(){return{show:!1}},computed:{name:function(){return this.$store.state.name}}},m=c,u=(s("81c6"),s("2877")),d=Object(u["a"])(m,r,p,!1,null,"5d54cbe2",null);d.options.__file="AppMoreinfo.vue";var g=d.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{on:{click:e.toggleMode}},[s("transition",{attrs:{name:"flip",mode:"out-in"}},[e.dark?s("span",{staticClass:"tgl-btn"},[e._v("Dark")]):s("span",{staticClass:"tgl-btn"},[e._v("Light")])])],1)},v=[],f={methods:{toggleMode:function(){this.$store.commit("toggleDark")}},computed:{dark:function(){return this.$store.state.dark}}},x=f,G=(s("6d39"),Object(u["a"])(x,h,v,!1,null,"f41c5a3a",null));G.options.__file="AppToggle.vue";var b=G.exports,_={components:{AppMoreinfo:g,AppToggle:b},computed:{name:function(){return this.$store.state.name},github:function(){return this.$store.state.github}}},T=_,y=(s("0d7c"),Object(u["a"])(T,n,o,!1,null,"ee2be840",null));y.options.__file="AppNav.vue";var U=y.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"block"},[s("div",{on:{click:function(t){e.toggleOpened(e.unit.name)}}},[e._v("\n      "+e._s(e.unit.name)+"\n    "),e.isFolder?s("button",[e._v(e._s(e.arrOpen?"-":"+"))]):e._e(),e.comments[e.unit.path]?s("button",{staticClass:"info",on:{mouseenter:function(t){e.noteShowing=!0},mouseleave:function(t){e.noteShowing=!1}}},[e._v("\n      info\n    ")]):e._e()]),void 0!==e.arrOpen&&e.isFolder?s("app-arrow"):e._e(),e.noteShowing?s("div",[s("app-note",{attrs:{comments:e.comments,path:e.unit.path}})],1):e._e(),s("section",{directives:[{name:"show",rawName:"v-show",value:e.arrOpen,expression:"arrOpen"}]},e._l(e.unit.children,function(e){return s("app-item",{key:e.name,staticClass:"item",attrs:{unit:e}})}))],1)},D=[],C=(s("7514"),s("c93e")),z=s("2f62"),j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 67.7 65.59","aria-labelledby":"title",role:"img"}},[s("title",{attrs:{id:"arrow"}},[e._v("arrow")]),s("path",{attrs:{d:"M71.41,63.31,55.23,73.74A2.82,2.82,0,1,1,52.17,69h0L63,62c-16.49-1.79-28.44-6.93-37-13.37A53.19,53.19,0,0,1,8,24.52a46.09,46.09,0,0,1-3-13A2.83,2.83,0,0,1,7.71,8.6a2.87,2.87,0,0,1,1.81.57,2.83,2.83,0,0,1,1.12,2.14h0v0a42,42,0,0,0,2.84,11.85,47.54,47.54,0,0,0,15.89,21C37.07,50,48,54.76,63.7,56.45L57,45.79a2.82,2.82,0,1,1,4.76-3L72.26,59.43A2.82,2.82,0,0,1,71.41,63.31Z",transform:"translate(-5 -8.6)"}})])},B=[],k={},S=k,A=(s("c349"),Object(u["a"])(S,j,B,!1,null,"61bf044f",null));A.options.__file="AppArrow.vue";var O=A.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"note"},[s("p",{domProps:{innerHTML:e._s(e.note)}})])},N=[],J={props:{comments:{type:Object,required:!0},path:{type:String,required:!0}},computed:{note:function(){return this.comments[this.path]}}},X=J,M=(s("781f"),Object(u["a"])(X,L,N,!1,null,"f9eb2ce4",null));M.options.__file="AppNote.vue";var P=M.exports,I={name:"app-item",components:{AppArrow:O,AppNote:P},props:{unit:Object},data:function(){return{open:!1,noteShowing:!1}},methods:{toggleOpened:function(e){this.$store.commit("toggleOpened",e)}},computed:Object(C["a"])({},Object(z["b"])(["opened","comments"]),{arrOpen:function(){var e=this;return this.opened.find(function(t){return t===e.unit.name})},isFolder:function(){return this.unit.children&&this.unit.children.length}})},R=I,$=(s("e3b1"),Object(u["a"])(R,w,D,!1,null,null,null));$.options.__file="AppItem.vue";var E=$.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dark"},[e._t("default")],2)},F=[],Z={},K=Z,Y=(s("eee4"),s("15ed"),Object(u["a"])(K,q,F,!1,null,"3adb4d9e",null));Y.options.__file="AppDarkmode.vue";var Q=Y.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"light"},[e._t("default")],2)},W=[],V={},ee=V,te=(s("e403"),s("4af3"),Object(u["a"])(ee,H,W,!1,null,"d8a71fd6",null));te.options.__file="AppLightmode.vue";var se=te.exports,ie={components:{AppNav:U,AppItem:E,dark:Q,light:se},computed:{tree:function(){return this.$store.state.tree},selected:function(){var e=this.$store.state.dark;return e?"dark":"light"}}},le=ie,ae=(s("5c0b"),s("6e02"),Object(u["a"])(le,l,a,!1,null,"730a2b3d",null));ae.options.__file="App.vue";var ne=ae.exports,oe=(s("6762"),s("2fdb"),"TMP Magic Bullet"),re={path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet",name:"tmp-magic-bullet",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y",name:"a11y",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\index.html",name:"index.html",size:8526,extension:".html",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\prod",name:"prod",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\prod\\init.js",name:"init.js",size:9940,extension:".js",type:"file"}],size:9940,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\qa",name:"qa",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\qa\\init.js",name:"init.js",size:10744,extension:".js",type:"file"}],size:10744,type:"directory"}],size:29210,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr",name:"gdpr",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\css",name:"css",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\css\\local.css",name:"local.css",size:379,extension:".css",type:"file"}],size:379,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\index.html",name:"index.html",size:20377,extension:".html",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\init.css",name:"init.css",size:9457,extension:".css",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\init.js",name:"init.js",size:41093,extension:".js",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\js",name:"js",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\js\\local.js",name:"local.js",size:525,extension:".js",type:"file"}],size:525,type:"directory"}],size:71831,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\index.html",name:"index.html",size:2118,extension:".html",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\init.js",name:"init.js",size:3276,extension:".js",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\README.md",name:"README.md",size:151,extension:".md",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations",name:"Translations",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\arabai.txt",name:"arabai.txt",size:844,extension:".txt",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\ikea_languages 6-1.xlsx",name:"ikea_languages 6-1.xlsx",size:12248,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\ikea_languages.xlsx",name:"ikea_languages.xlsx",size:12291,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",name:"New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",size:156419,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TalentBrew Translations for JG Ukrainian_uk_updated.xlsx",name:"TalentBrew Translations for JG Ukrainian_uk_updated.xlsx",size:49905,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations",name:"TB Translations",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\Master TalentBrew Translations for JG - Lith and Korean_Complete.xlsx",name:"Master TalentBrew Translations for JG - Lith and Korean_Complete.xlsx",size:58516,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_AR.XLSX",name:"New TalentBrew Translations - v2 jen_AR.XLSX",size:39808,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_AR_FI.XLSX",name:"New TalentBrew Translations - v2 jen_AR_FI.XLSX",size:49770,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",name:"New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",size:168650,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_multilingual.xlsx",name:"New TalentBrew Translations - v2 jen_multilingual.xlsx",size:65845,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\TalentBrew Translations - Arabic Formal (2)_JG - AR.XLSX",name:"TalentBrew Translations - Arabic Formal (2)_JG - AR.XLSX",size:47813,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\TalentBrew Translations for JG Ukrainian_uk.xlsx",name:"TalentBrew Translations for JG Ukrainian_uk.xlsx",size:49872,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\US0219431 - Delivery.zip",name:"US0219431 - Delivery.zip",size:21105,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\US0219431 - Initial Delivery.zip",name:"US0219431 - Initial Delivery.zip",size:330249,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\US0219431 - NL, PL.ZIP",name:"US0219431 - NL, PL.ZIP",size:30910,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations\\US0219431_JA.DOCX",name:"US0219431_JA.DOCX",size:14133,extension:".docx",type:"file"}],size:876671,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\TB Translations.zip",name:"TB Translations.zip",size:847827,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations\\Ukrainian_uk.xlsx",name:"Ukrainian_uk.xlsx",size:49883,extension:".xlsx",type:"file"}],size:2006088,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_config.yml",name:"_config.yml",size:168,extension:".yml",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs",name:"_httpdocs",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\a11y",name:"a11y",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\a11y\\index.html",name:"index.html",size:13917,extension:".html",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\a11y\\prod",name:"prod",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\a11y\\prod\\init.js",name:"init.js",size:9940,extension:".js",type:"file"}],size:9940,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\a11y\\qa",name:"qa",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\a11y\\qa\\init.js",name:"init.js",size:10744,extension:".js",type:"file"}],size:10744,type:"directory"}],size:34601,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc",name:"doc",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\css",name:"css",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\css\\app.15c5f959.css",name:"app.15c5f959.css",size:4858,extension:".css",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\css\\chunk-vendors.d4819308.css",name:"chunk-vendors.d4819308.css",size:1915,extension:".css",type:"file"}],size:6773,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\favicon.ico",name:"favicon.ico",size:1150,extension:".ico",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\index.html",name:"index.html",size:861,extension:".html",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\js",name:"js",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\js\\app.92fed87d.js",name:"app.92fed87d.js",size:228313,extension:".js",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\js\\app.92fed87d.js.map",name:"app.92fed87d.js.map",size:574800,extension:".map",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\js\\chunk-vendors.c86d608a.js",name:"chunk-vendors.c86d608a.js",size:92788,extension:".js",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\doc\\js\\chunk-vendors.c86d608a.js.map",name:"chunk-vendors.c86d608a.js.map",size:448964,extension:".map",type:"file"}],size:1344865,type:"directory"}],size:1353649,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr",name:"gdpr",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr\\css",name:"css",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr\\css\\local.css",name:"local.css",size:379,extension:".css",type:"file"}],size:379,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr\\index.html",name:"index.html",size:25576,extension:".html",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr\\init.css",name:"init.css",size:9457,extension:".css",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr\\init.js",name:"init.js",size:41093,extension:".js",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr\\js",name:"js",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\gdpr\\js\\local.js",name:"local.js",size:525,extension:".js",type:"file"}],size:525,type:"directory"}],size:77030,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\index.html",name:"index.html",size:7584,extension:".html",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\init.js",name:"init.js",size:3276,extension:".js",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\README.md",name:"README.md",size:151,extension:".md",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations",name:"Translations",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\arabai.txt",name:"arabai.txt",size:844,extension:".txt",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\ikea_languages 6-1.xlsx",name:"ikea_languages 6-1.xlsx",size:12248,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\ikea_languages.xlsx",name:"ikea_languages.xlsx",size:12291,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",name:"New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",size:156419,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TalentBrew Translations for JG Ukrainian_uk_updated.xlsx",name:"TalentBrew Translations for JG Ukrainian_uk_updated.xlsx",size:49905,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations",name:"TB Translations",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\Master TalentBrew Translations for JG - Lith and Korean_Complete.xlsx",name:"Master TalentBrew Translations for JG - Lith and Korean_Complete.xlsx",size:58516,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_AR.XLSX",name:"New TalentBrew Translations - v2 jen_AR.XLSX",size:39808,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_AR_FI.XLSX",name:"New TalentBrew Translations - v2 jen_AR_FI.XLSX",size:49770,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",name:"New TalentBrew Translations - v2 jen_multilingual (4)_v2.xlsx",size:168650,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\New TalentBrew Translations - v2 jen_multilingual.xlsx",name:"New TalentBrew Translations - v2 jen_multilingual.xlsx",size:65845,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\TalentBrew Translations - Arabic Formal (2)_JG - AR.XLSX",name:"TalentBrew Translations - Arabic Formal (2)_JG - AR.XLSX",size:47813,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\TalentBrew Translations for JG Ukrainian_uk.xlsx",name:"TalentBrew Translations for JG Ukrainian_uk.xlsx",size:49872,extension:".xlsx",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\US0219431 - Delivery.zip",name:"US0219431 - Delivery.zip",size:21105,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\US0219431 - Initial Delivery.zip",name:"US0219431 - Initial Delivery.zip",size:330249,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\US0219431 - NL, PL.ZIP",name:"US0219431 - NL, PL.ZIP",size:30910,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations\\US0219431_JA.DOCX",name:"US0219431_JA.DOCX",size:14133,extension:".docx",type:"file"}],size:876671,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\TB Translations.zip",name:"TB Translations.zip",size:847827,extension:".zip",type:"file"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\Translations\\Ukrainian_uk.xlsx",name:"Ukrainian_uk.xlsx",size:49883,extension:".xlsx",type:"file"}],size:2006088,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs\\_config.yml",name:"_config.yml",size:168,extension:".yml",type:"file"}],size:3482547,type:"directory"},{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_layouts",name:"_layouts",children:[{path:"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_layouts\\default.html",name:"default.html",size:5856,extension:".html",type:"file"}],size:5856,type:"directory"}],size:10139293,type:"directory"};i["a"].use(z["a"]);var pe=new z["a"].Store({state:{dark:!1,github:"tmpworldwide/tmp-magic-bullet",opened:["tmp-magic-bullet","gdpr","a11y","prod","qa"],comments:{"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\index.html":'Specific A11Y documentation. See <a href="https://tmpworldwide.github.io/tmp-magic-bullet/a11y/">https://tmpworldwide.github.io/tmp-magic-bullet/a11y/</a>',"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\prod\\init.js":"Updates made to the a11y/qa/init.js file would be copied here. This file will then load on production, so be careful.","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\a11y\\qa\\init.js":"Updates made to this file will only load on runmytests.com and talentbrew.com. You should copy these changes over to a11y/prod/init.js after testing is complete.","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\index.html":'Specific gdpr documentation. See <a href="https://tmpworldwide.github.io/tmp-magic-bullet/gdpr/">https://tmpworldwide.github.io/tmp-magic-bullet/gdpr/</a>',"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\css":"This is Jekyll related CSS. It is not important to the overall project.","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\init.css":"This is the QA version of the GDPR stylesheet. Due to security concerns, the production version of the GDPR script sits on another server. You will need to copy these changes to the services.tmpwebeng branch of Perforce","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\init.js":"This is the QA version of the GDPR script. Due to security concerns, the production version of the GDPR script sits on another server. You will need to copy these changes to the services.tmpwebeng branch of Perforce","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\gdpr\\js":"This is Jekyll related JavaScript. It is not important to the overall project.","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\index.html":'Specific Magic Bullet documentation. See <a href="https://tmpworldwide.github.io/tmp-magic-bullet/">https://tmpworldwide.github.io/tmp-magic-bullet/</a>',"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\init.js":'This is the script that is initiated first. It will load individual scripts based on the data attributes and values that are passed in, e.g. data-a11y="true" or data-gdpr="true".',"C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\Translations":"Received files for GDPR translations. These translations are placed in tmp-magic-bullet/gdpr/qa/init.js","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_config.yml":"This is Jekyll related configuration. It is not important to the overall project.","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_httpdocs":"This is Jekyll related output. It is not important to the overall project.","C:\\Users\\mspellac\\Google Drive\\Git\\tmp-magic-bullet\\_layouts":"This is Jekyll related template. It is not important to the overall project."},tree:re,name:oe},mutations:{toggleOpened:function(e,t){e.opened.includes(t)?e.opened=e.opened.filter(function(e){return e!==t}):e.opened.push(t)},toggleDark:function(e){e.dark=!e.dark}}});i["a"].config.productionTip=!1,new i["a"]({store:pe,render:function(e){return e(ne)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var i=s("2856"),l=s.n(i);l.a},"6d39":function(e,t,s){"use strict";var i=s("ef64"),l=s.n(i);l.a},"6e02":function(e,t,s){"use strict";var i=s("11c2"),l=s.n(i);l.a},"781f":function(e,t,s){"use strict";var i=s("93b6"),l=s.n(i);l.a},"81c6":function(e,t,s){"use strict";var i=s("1b61"),l=s.n(i);l.a},"93b6":function(e,t,s){},"9f18":function(e,t,s){},a3fe:function(e,t,s){},aa8b:function(e,t,s){},c349:function(e,t,s){"use strict";var i=s("9f18"),l=s.n(i);l.a},e3b1:function(e,t,s){"use strict";var i=s("aa8b"),l=s.n(i);l.a},e403:function(e,t,s){"use strict";var i=s("a3fe"),l=s.n(i);l.a},e954:function(e,t,s){},eee4:function(e,t,s){"use strict";var i=s("2e44"),l=s.n(i);l.a},ef64:function(e,t,s){}});
//# sourceMappingURL=app.d91fc97c.js.map