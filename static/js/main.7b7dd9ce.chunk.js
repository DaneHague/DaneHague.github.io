(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(t,e,n){t.exports=n(66)},49:function(t,e,n){},51:function(t,e,n){t.exports=n.p+"static/media/logo.06e73328.svg"},52:function(t,e,n){},54:function(t,e,n){t.exports=n.p+"static/media/cn1.920f4ab1.jpg"},66:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(39),i=n.n(o),l=(n(49),n(51),n(52),function(t){var e=t.item;return a.a.createElement("li",null,a.a.createElement("span",null,a.a.createElement("a",{href:e.url},e.title)),a.a.createElement("span",null," ",e.author," "),a.a.createElement("span",null,e.num_comments," "),a.a.createElement("span",null,e.points))}),c=function(t){var e=t.initialStories;return a.a.createElement("ul",null,e.map(function(t){return a.a.createElement(l,{key:t.objectId,item:t})}))},u=function(){return fetch("https://hacker-news.firebaseio.com/v0/item/31631173.json?print=pretty").then(function(t){return t.json()}),a.a.createElement("div",null,a.a.createElement(c,{initialStories:[{title:"React",url:"https://reactjs.org/",author:"Jordan Walke",num_comments:3,points:4,objectId:0},{title:"Redux",url:"https://redux.js.org/",author:"Dan Abramov, Andrew Clark",num_comments:2,points:5,objectId:1}]}))},s=n(99),m=n(98),h=n(100),f=n(101),p=n(95),d=n(21),g=(n(54),n(102)),v=n(97),y=function(t){var e=t.Image1;return a.a.createElement("div",null,a.a.createElement(v.a,{container:!0,spacing:5},a.a.createElement(v.a,{item:!0,xs:4},a.a.createElement(g.a,null,a.a.createElement("img",{width:"80%",src:e}))),a.a.createElement(v.a,{item:!0,xs:4},a.a.createElement(g.a,null,"Test Paper 2")),a.a.createElement(v.a,{item:!0,xs:4},a.a.createElement(g.a,null,"Test Paper 3"))))},E=function(){return a.a.createElement("div",null,a.a.createElement(y,null))};function w(){return r.createElement(m.a,{sx:{flexGrow:1}},r.createElement(s.a,{position:"static"},r.createElement(h.a,null,r.createElement(p.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}},"Hsk Practice"),r.createElement(f.a,{variant:"h6",component:"div",sx:{flexGrow:1}}),r.createElement(d.b,{style:{marginRight:10},to:"/"},"Home"),r.createElement(d.b,{style:{marginRight:10},to:"/about"},"About"),r.createElement(d.b,{style:{marginRight:10},to:"/multiHsk1"},"Hsk 1"),r.createElement(d.b,{style:{marginRight:10},to:"/multiHsk2"},"Hsk 2"),r.createElement(d.b,{style:{marginRight:10},to:"/multiHsk3"},"Hsk 3"),r.createElement(d.b,{style:{marginRight:10},to:"/multiHsk4"},"Hsk 4"),r.createElement(d.b,{style:{marginRight:10},to:"/multiHsk5"},"Hsk 5"),r.createElement(d.b,{style:{marginRight:10},to:"/multiHsk6"},"Hsk 6"))))}var b=n(1),x=n(57),k=n(10),L=function(){return a.a.createElement("div",{style:{marginLeft:20,marginRight:20}},a.a.createElement(v.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3}},a.a.createElement(v.a,{item:!0,xs:6},a.a.createElement(g.a,null,"1")),a.a.createElement(v.a,{item:!0,xs:6},a.a.createElement(g.a,null,"2")),a.a.createElement(v.a,{item:!0,xs:6},a.a.createElement(g.a,null,"3")),a.a.createElement(v.a,{item:!0,xs:6},a.a.createElement(g.a,null,"4"))))};function j(){j=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return H()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=w(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=c;var s={};function m(){}function h(){}function f(){}var p={};l(p,a,function(){return this});var d=Object.getPrototypeOf,g=d&&d(d(L([])));g&&g!==e&&n.call(g,a)&&(p=g);var v=f.prototype=m.prototype=Object.create(p);function y(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,l){var c=u(t[a],t,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?e.resolve(m.__await).then(function(t){r("next",t,i,l)},function(t){r("throw",t,i,l)}):e.resolve(m).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,l)})}l(c.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:H}}function H(){return{value:void 0,done:!0}}return h.prototype=f,l(v,"constructor",f),l(f,"constructor",h),h.displayName=l(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(E.prototype),l(E.prototype,o,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(c(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(v),l(v,i,"Generator"),l(v,a,function(){return this}),l(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var H=function(){var t=Object(r.useState)({hsk:[]}),e=Object(k.a)(t,2),n=(e[0],e[1]),o=Object(r.useState)({game:[]}),i=Object(k.a)(o,2),l=i[0],c=i[1];return Object(r.useEffect)(function(){function t(t){n({hsk:t}),c({game:t})}function e(){return(e=Object(x.a)(j().mark(function e(){return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://hskapi20220623180039.azurewebsites.net/api/hskdetails").then(function(t){return t.json()}).then(function(e){return t(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),a.a.createElement("div",null,a.a.createElement("h1",null,window.location.href.substring(window.location.href.length-4,window.location.href.length)),a.a.createElement("div",null,JSON.stringify(l.game[0])),a.a.createElement(L,null))};var O=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(w,null),a.a.createElement(b.c,null,a.a.createElement(b.a,{path:"/",element:a.a.createElement(u,null)}),a.a.createElement(b.a,{path:"/about",element:a.a.createElement(E,null)}),a.a.createElement(b.a,{path:"/multiHsk1",element:a.a.createElement(H,null)}),a.a.createElement(b.a,{path:"/multiHsk2",element:a.a.createElement(H,null)}),a.a.createElement(b.a,{path:"/multiHsk3",element:a.a.createElement(H,null)}),a.a.createElement(b.a,{path:"/multiHsk4",element:a.a.createElement(H,null)}),a.a.createElement(b.a,{path:"/multiHsk5",element:a.a.createElement(H,null)}),a.a.createElement(b.a,{path:"/multiHsk6",element:a.a.createElement(H,null)})))},_=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,94)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,null,a.a.createElement(O,null)))),_()}},[[40,3,2]]]);
//# sourceMappingURL=main.7b7dd9ce.chunk.js.map