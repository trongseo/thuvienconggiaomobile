/* import all javascript files into one */
// ===============
// = SUPPLIER LIB =
// ===============

/**/

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);


/**/
$(function() {
	$("#noscript").hide();
});
/**/

/*!
 * jQuery UI 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
/*
 * jQuery UI 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(a){a.ui={version:"1.8",plugin:{add:function(c,d,f){var e=a.ui[c].prototype;for(var b in f){e.plugins[b]=e.plugins[b]||[];e.plugins[b].push([d,f[b]])}},call:function(b,d,c){var f=b.plugins[d];if(!f||!b.element[0].parentNode){return}for(var e=0;e<f.length;e++){if(b.options[f[e][0]]){f[e][1].apply(b.element,c)}}}},contains:function(d,c){return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)},hasScroll:function(e,c){if(a(e).css("overflow")=="hidden"){return false}var b=(c&&c=="left")?"scrollLeft":"scrollTop",d=false;if(e[b]>0){return true}e[b]=1;d=(e[b]>0);e[b]=0;return d},isOverAxis:function(c,b,d){return(c>b)&&(c<(b+d))},isOver:function(g,c,f,e,b,d){return a.ui.isOverAxis(g,f,b)&&a.ui.isOverAxis(c,e,d)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};a.fn.extend({_focus:a.fn.focus,focus:function(b,c){return typeof b==="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus();(c&&c.call(d))},b)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var b;if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){b=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0)}else{b=this.parents().filter(function(){return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!b.length?a(document):b},zIndex:function(e){if(e!==undefined){return this.css("zIndex",e)}if(this.length){var c=a(this[0]),b,d;while(c.length&&c[0]!==document){b=c.css("position");if(b=="absolute"||b=="relative"||b=="fixed"){d=parseInt(c.css("zIndex"));if(!isNaN(d)&&d!=0){return d}}c=c.parent()}}return 0}});a.extend(a.expr[":"],{data:function(d,c,b){return !!a.data(d,b[3])},focusable:function(c){var d=c.nodeName.toLowerCase(),b=a.attr(c,"tabindex");return(/input|select|textarea|button|object/.test(d)?!c.disabled:"a"==d||"area"==d?c.href||!isNaN(b):!isNaN(b))&&!a(c)["area"==d?"parents":"closest"](":hidden").length},tabbable:function(c){var b=a.attr(c,"tabindex");return(isNaN(b)||b>=0)&&a(c).is(":focusable")}})})(jQuery);;

/**//**/

/*!
 * jQuery UI Widget 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
/*
 * jQuery UI Widget 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b){var a=b.fn.remove;b.fn.remove=function(c,d){return this.each(function(){if(!d){if(!c||b.filter(c,[this]).length){b("*",this).add(this).each(function(){b(this).triggerHandler("remove")})}}return a.call(b(this),c,d)})};b.widget=function(d,f,c){var e=d.split(".")[0],h;d=d.split(".")[1];h=e+"-"+d;if(!c){c=f;f=b.Widget}b.expr[":"][h]=function(i){return !!b.data(i,d)};b[e]=b[e]||{};b[e][d]=function(i,j){if(arguments.length){this._createWidget(i,j)}};var g=new f();g.options=b.extend({},g.options);b[e][d].prototype=b.extend(true,g,{namespace:e,widgetName:d,widgetEventPrefix:b[e][d].prototype.widgetEventPrefix||d,widgetBaseClass:h},c);b.widget.bridge(d,b[e][d])};b.widget.bridge=function(d,c){b.fn[d]=function(g){var e=typeof g==="string",f=Array.prototype.slice.call(arguments,1),h=this;g=!e&&f.length?b.extend.apply(null,[true,g].concat(f)):g;if(e&&g.substring(0,1)==="_"){return h}if(e){this.each(function(){var i=b.data(this,d),j=i&&b.isFunction(i[g])?i[g].apply(i,f):i;if(j!==i&&j!==undefined){h=j;return false}})}else{this.each(function(){var i=b.data(this,d);if(i){if(g){i.option(g)}i._init()}else{b.data(this,d,new c(g,this))}})}return h}};b.Widget=function(c,d){if(arguments.length){this._createWidget(c,d)}};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,e){this.element=b(e).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(e)[this.widgetName],d);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled")},widget:function(){return this.element},option:function(e,f){var d=e,c=this;if(arguments.length===0){return b.extend({},c.options)}if(typeof e==="string"){if(f===undefined){return this.options[e]}d={};d[e]=f}b.each(d,function(g,h){c._setOption(g,h)});return c},_setOption:function(c,d){this.options[c]=d;if(c==="disabled"){this.widget()[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",d)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(d,e,f){var h=this.options[d];e=b.Event(e);e.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();f=f||{};if(e.originalEvent){for(var c=b.event.props.length,g;c;){g=b.event.props[--c];e[g]=e.originalEvent[g]}}this.element.trigger(e,f);return !(b.isFunction(h)&&h.call(this.element[0],e,f)===false||e.isDefaultPrevented())}}})(jQuery);;

/**//**/

/*!
 * jQuery UI Mouse 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
/*
 * jQuery UI Mouse 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(c){return b._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(b._preventClickEvent){b._preventClickEvent=false;c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=d.originalEvent||{};if(d.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(d));this._mouseDownEvent=d;var c=this,e=(d.which==1),b=(typeof this.options.cancel=="string"?a(d.target).parents().add(d.target).filter(this.options.cancel).length:false);if(!e||b||!this._mouseCapture(d)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(d)!==false);if(!this._mouseStarted){d.preventDefault();return true}}this._mouseMoveDelegate=function(f){return c._mouseMove(f)};this._mouseUpDelegate=function(f){return c._mouseUp(f)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(a.browser.safari||d.preventDefault());d.originalEvent.mouseHandled=true;return true},_mouseMove:function(b){if(a.browser.msie&&!b.button){return this._mouseUp(b)}if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,b)!==false);(this._mouseStarted?this._mouseDrag(b):this._mouseUp(b))}return !this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(b.target==this._mouseDownEvent.target);this._mouseStop(b)}return false},_mouseDistanceMet:function(b){return(Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance)},_mouseDelayMet:function(b){return this.mouseDelayMet},_mouseStart:function(b){},_mouseDrag:function(b){},_mouseStop:function(b){},_mouseCapture:function(b){return true}})})(jQuery);;

/**//**/

/*
 * jQuery UI Position 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Position
 */
(function(f){f.ui=f.ui||{};var c=/left|center|right/,e="center",d=/top|center|bottom/,g="center",a=f.fn.position,b=f.fn.offset;f.fn.position=function(i){if(!i||!i.of){return a.apply(this,arguments)}i=f.extend({},i);var l=f(i.of),n=(i.collision||"flip").split(" "),m=i.offset?i.offset.split(" "):[0,0],k,h,j;if(i.of.nodeType===9){k=l.width();h=l.height();j={top:0,left:0}}else{if(i.of.scrollTo&&i.of.document){k=l.width();h=l.height();j={top:l.scrollTop(),left:l.scrollLeft()}}else{if(i.of.preventDefault){i.at="left top";k=h=0;j={top:i.of.pageY,left:i.of.pageX}}else{k=l.outerWidth();h=l.outerHeight();j=l.offset()}}}f.each(["my","at"],function(){var o=(i[this]||"").split(" ");if(o.length===1){o=c.test(o[0])?o.concat([g]):d.test(o[0])?[e].concat(o):[e,g]}o[0]=c.test(o[0])?o[0]:e;o[1]=d.test(o[1])?o[1]:g;i[this]=o});if(n.length===1){n[1]=n[0]}m[0]=parseInt(m[0],10)||0;if(m.length===1){m[1]=m[0]}m[1]=parseInt(m[1],10)||0;if(i.at[0]==="right"){j.left+=k}else{if(i.at[0]===e){j.left+=k/2}}if(i.at[1]==="bottom"){j.top+=h}else{if(i.at[1]===g){j.top+=h/2}}j.left+=m[0];j.top+=m[1];return this.each(function(){var r=f(this),q=r.outerWidth(),p=r.outerHeight(),o=f.extend({},j);if(i.my[0]==="right"){o.left-=q}else{if(i.my[0]===e){o.left-=q/2}}if(i.my[1]==="bottom"){o.top-=p}else{if(i.my[1]===g){o.top-=p/2}}f.each(["left","top"],function(t,s){if(f.ui.position[n[t]]){f.ui.position[n[t]][s](o,{targetWidth:k,targetHeight:h,elemWidth:q,elemHeight:p,offset:m,my:i.my,at:i.at})}});if(f.fn.bgiframe){r.bgiframe()}r.offset(f.extend(o,{using:i.using}))})};f.ui.position={fit:{left:function(h,i){var k=f(window),j=h.left+i.elemWidth-k.width()-k.scrollLeft();h.left=j>0?h.left-j:Math.max(0,h.left)},top:function(h,i){var k=f(window),j=h.top+i.elemHeight-k.height()-k.scrollTop();h.top=j>0?h.top-j:Math.max(0,h.top)}},flip:{left:function(i,j){if(j.at[0]==="center"){return}var l=f(window),k=i.left+j.elemWidth-l.width()-l.scrollLeft(),h=j.my[0]==="left"?-j.elemWidth:j.my[0]==="right"?j.elemWidth:0,m=-2*j.offset[0];i.left+=i.left<0?h+j.targetWidth+m:k>0?h-j.targetWidth+m:0},top:function(i,k){if(k.at[1]==="center"){return}var m=f(window),l=i.top+k.elemHeight-m.height()-m.scrollTop(),h=k.my[1]==="top"?-k.elemHeight:k.my[1]==="bottom"?k.elemHeight:0,j=k.at[1]==="top"?k.targetHeight:-k.targetHeight,n=-2*k.offset[1];i.top+=i.top<0?h+k.targetHeight+n:l>0?h+j+n:0}}};if(!f.offset.setOffset){f.offset.setOffset=function(l,i){if(/static/.test(f.curCSS(l,"position"))){l.style.position="relative"}var k=f(l),n=k.offset(),h=parseInt(f.curCSS(l,"top",true),10)||0,m=parseInt(f.curCSS(l,"left",true),10)||0,j={top:(i.top-n.top)+h,left:(i.left-n.left)+m};if("using" in i){i.using.call(l,j)}else{k.css(j)}};f.fn.offset=function(h){var i=this[0];if(!i||!i.ownerDocument){return null}if(h){return this.each(function(){f.offset.setOffset(this,h)})}return b.call(this)}}}(jQuery));;

/**//**/

/*
 * jQuery UI Draggable 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;(c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt));if(c.containment){this._setContainment()}if(this._trigger("start",b)===false){this._clear();return false}this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();if(this._trigger("drag",b,c)===false){this._mouseUp({});return false}this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if(!this.element[0]||!this.element[0].parentNode){return false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(b._trigger("stop",c)!==false){b._clear()}})}else{if(this._trigger("stop",c)!==false){this._clear()}}return false},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}}if("left" in b){this.offset.click.left=b.left+this.margins.left}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if("top" in b){this.offset.click.top=b.top+this.margins.top}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.extend(a.ui.draggable,{version:"1.8"});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(c,d){var f=a(this).data("draggable").options;var e=a.makeArray(a(f.stack)).sort(function(h,g){return(parseInt(a(h).css("zIndex"),10)||0)-(parseInt(a(g).css("zIndex"),10)||0)});if(!e.length){return}var b=parseInt(e[0].style.zIndex)||0;a(e).each(function(g){this.style.zIndex=b+g});this[0].style.zIndex=b+e.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;/*
 * jQuery UI Sortable 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var b=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--){this.items[b].item.removeData("sortable-item")}return this},_mouseCapture:function(e,f){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(e);var d=null,c=this,b=a(e.target).parents().each(function(){if(a.data(this,"sortable-item")==c){d=a(this);return false}});if(a.data(e.target,"sortable-item")==c){d=a(e.target)}if(!d){return false}if(this.options.handle&&!f){var g=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==e.target){g=true}});if(!g){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,b){var g=this.options,c=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;(g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!b){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,c._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(f){this.position=this._generatePosition(f);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var g=this.options,b=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+g.scrollSpeed}else{if(f.pageY-this.overflowOffset.top<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-g.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+g.scrollSpeed}else{if(f.pageX-this.overflowOffset.left<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-g.scrollSpeed}}}else{if(f.pageY-a(document).scrollTop()<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)}else{if(a(window).height()-(f.pageY-a(document).scrollTop())<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)}}if(f.pageX-a(document).scrollLeft()<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)}else{if(a(window).width()-(f.pageX-a(document).scrollLeft())<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)}}}if(b!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,f)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d],c=e.item[0],h=this._intersectsWithPointer(e);if(!h){continue}if(c!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=c&&!a.ui.contains(this.placeholder[0],c)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],c):true)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e)){this._rearrange(f,e)}else{break}this._trigger("change",f,this._uiHash());break}}this._contactContainers(f);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,f)}this._trigger("sort",f,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,d){if(!c){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,c)}if(this.options.revert){var b=this;var e=b.placeholder.offset();b.reverting=true;a(this.helper).animate({left:e.left-this.offset.parent.left-b.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-b.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){b._clear(c)})}else{this._clear(c,d)}return false},cancel:function(){var b=this;if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,b._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,b._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};a(b).each(function(){var e=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));if(e){c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))}});return c.join("&")},toArray:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};b.each(function(){c.push(a(d.item||this).attr(d.attribute||"id")||"")});return c},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(d){var e=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),g=e&&c,b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(!g){return false}return this.floating?(((f&&f=="right")||b=="down")?2:1):(b&&(b=="down"?2:1))},_intersectsWithSides:function(e){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+(e.height/2),e.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+(e.width/2),e.width),b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(this.floating&&f){return((f=="right"&&d)||(f=="left"&&!d))}else{return b&&((b=="down"&&c)||(b=="up"&&!c))}},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;return b!=0&&(b>0?"down":"up")},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;return b!=0&&(b>0?"right":"left")},refresh:function(b){this._refreshItems(b);this.refreshPositions();return this},_connectWith:function(){var b=this.options;return b.connectWith.constructor==String?[b.connectWith]:b.connectWith},_getItemsAsjQuery:function(b){var l=this;var g=[];var e=[];var h=this._connectWith();if(h&&b){for(var d=h.length-1;d>=0;d--){var k=a(h[d]);for(var c=k.length-1;c>=0;c--){var f=a.data(k[c],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),f])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var d=e.length-1;d>=0;d--){e[d][0].each(function(){g.push(this)})}return a(g)},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data(sortable-item)");for(var c=0;c<this.items.length;c++){for(var b=0;b<d.length;b++){if(d[b]==this.items[c].item[0]){this.items.splice(c,1)}}}},_refreshItems:function(b){this.items=[];this.containers=[this];var h=this.items;var p=this;var f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]];var l=this._connectWith();if(l){for(var e=l.length-1;e>=0;e--){var m=a(l[e]);for(var d=m.length-1;d>=0;d--){var g=a.data(m[d],"sortable");if(g&&g!=this&&!g.options.disabled){f.push([a.isFunction(g.options.items)?g.options.items.call(g.element[0],b,{item:this.currentItem}):a(g.options.items,g.element),g]);this.containers.push(g)}}}}for(var e=f.length-1;e>=0;e--){var k=f[e][1];var c=f[e][0];for(var d=0,n=c.length;d<n;d++){var o=a(c[d]);o.data("sortable-item",k);h.push({item:o,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];var c=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!b){e.width=c.outerWidth();e.height=c.outerHeight()}var f=c.offset();e.left=f.left;e.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var d=this.containers.length-1;d>=0;d--){var f=this.containers[d].element.offset();this.containers[d].containerCache.left=f.left;this.containers[d].containerCache.top=f.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}return this},_createPlaceholder:function(d){var b=d||this,e=b.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(b.currentItem[0].nodeName)).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);e.placeholder.update(b,b.placeholder)},_contactContainers:function(b){var d=null,k=null;for(var f=this.containers.length-1;f>=0;f--){if(a.ui.contains(this.currentItem[0],this.containers[f].element[0])){continue}if(this._intersectsWith(this.containers[f].containerCache)){if(d&&a.ui.contains(this.containers[f].element[0],d.element[0])){continue}d=this.containers[f];k=f}else{if(this.containers[f].containerCache.over){this.containers[f]._trigger("out",b,this._uiHash(this));this.containers[f].containerCache.over=0}}}if(!d){return}if(this.containers.length===1){this.containers[k]._trigger("over",b,this._uiHash(this));this.containers[k].containerCache.over=1}else{if(this.currentContainer!=this.containers[k]){var h=10000;var g=null;var c=this.positionAbs[this.containers[k].floating?"left":"top"];for(var e=this.items.length-1;e>=0;e--){if(!a.ui.contains(this.containers[k].element[0],this.items[e].item[0])){continue}var l=this.items[e][this.containers[k].floating?"left":"top"];if(Math.abs(l-c)<h){h=Math.abs(l-c);g=this.items[e]}}if(!g&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[k];g?this._rearrange(b,g,null,true):this._rearrange(b,null,this.containers[k].element,true);this._trigger("change",b,this._uiHash());this.containers[k]._trigger("change",b,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[k]._trigger("over",b,this._uiHash(this));this.containers[k].containerCache.over=1}}},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):(d.helper=="clone"?this.currentItem.clone():this.currentItem);if(!b.parents("body").length){a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0])}if(b[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(b[0].style.width==""||d.forceHelperSize){b.width(this.currentItem.width())}if(b[0].style.height==""||d.forceHelperSize){b.height(this.currentItem.height())}return b},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}}if("left" in b){this.offset.click.left=b.left+this.margins.left}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if("top" in b){this.offset.click.top=b.top+this.margins.top}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)){var c=a(e.containment)[0];var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_rearrange:function(g,f,c,e){c?c[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this,b=this.counter;window.setTimeout(function(){if(b==d.counter){d.refreshPositions(!e)}},0)},_clear:function(d,e){this.reverting=false;var f=[],b=this;if(!this._noFinalSort&&this.currentItem[0].parentNode){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())})}for(var c=this.containers.length-1;c>=0;c--){if(a.ui.contains(this.containers[c].element[0],this.currentItem[0])&&!e){f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.containers[c]));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.containers[c]))}}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var b=c||this;return{helper:b.helper,placeholder:b.placeholder||a([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:c?c.element:null}}});a.extend(a.ui.sortable,{version:"1.8"})})(jQuery);;

/**//**/

/*
 * jQuery UI Slider 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(b){var a=5;b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var c=this,d=this.options;this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");if(d.disabled){this.element.addClass("ui-slider-disabled ui-disabled")}this.range=b([]);if(d.range){if(d.range===true){this.range=b("<div></div>");if(!d.values){d.values=[this._valueMin(),this._valueMin()]}if(d.values.length&&d.values.length!=2){d.values=[d.values[0],d.values[0]]}}else{this.range=b("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(d.range=="min"||d.range=="max"){this.range.addClass("ui-slider-range-"+d.range)}this.range.addClass("ui-widget-header")}if(b(".ui-slider-handle",this.element).length==0){b('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}if(d.values&&d.values.length){while(b(".ui-slider-handle",this.element).length<d.values.length){b('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}}this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).hover(function(){if(!d.disabled){b(this).addClass("ui-state-hover")}},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(!d.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}else{b(this).blur()}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(e){b(this).data("index.ui-slider-handle",e)});this.handles.keydown(function(j){var g=true;var f=b(this).data("index.ui-slider-handle");if(c.options.disabled){return}switch(j.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:g=false;if(!c._keySliding){c._keySliding=true;b(this).addClass("ui-state-active");c._start(j,f)}break}var h,e,i=c._step();if(c.options.values&&c.options.values.length){h=e=c.values(f)}else{h=e=c.value()}switch(j.keyCode){case b.ui.keyCode.HOME:e=c._valueMin();break;case b.ui.keyCode.END:e=c._valueMax();break;case b.ui.keyCode.PAGE_UP:e=h+((c._valueMax()-c._valueMin())/a);break;case b.ui.keyCode.PAGE_DOWN:e=h-((c._valueMax()-c._valueMin())/a);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(h==c._valueMax()){return}e=h+i;break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(h==c._valueMin()){return}e=h-i;break}c._slide(j,f,e);return g}).keyup(function(f){var e=b(this).data("index.ui-slider-handle");if(c._keySliding){c._keySliding=false;c._stop(f,e);c._change(f,e);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(e){var f=this.options;if(f.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var i={x:e.pageX,y:e.pageY};var k=this._normValueFromMouse(i);var d=this._valueMax()-this._valueMin()+1,g;var l=this,j;this.handles.each(function(m){var n=Math.abs(k-l.values(m));if(d>n){d=n;g=b(this);j=m}});if(f.range==true&&this.values(1)==f.min){g=b(this.handles[++j])}this._start(e,j);this._mouseSliding=true;l._handleIndex=j;g.addClass("ui-state-active").focus();var h=g.offset();var c=!b(e.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=c?{left:0,top:0}:{left:e.pageX-h.left-(g.width()/2),top:e.pageY-h.top-(g.height()/2)-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)};k=this._normValueFromMouse(i);this._slide(e,j,k);this._animateOff=true;return true},_mouseStart:function(c){return true},_mouseDrag:function(e){var c={x:e.pageX,y:e.pageY};var d=this._normValueFromMouse(c);this._slide(e,this._handleIndex,d);return false},_mouseStop:function(c){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(c,this._handleIndex);this._change(c,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var d,i;if("horizontal"==this.orientation){d=this.elementSize.width;i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}var g=(i/d);if(g>1){g=1}if(g<0){g=0}if("vertical"==this.orientation){g=1-g}var f=this._valueMax()-this._valueMin(),j=g*f,c=j%this.options.step,h=this._valueMin()+j-c;if(c>(this.options.step/2)){h+=this.options.step}return parseFloat(h.toFixed(5))},_start:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("start",e,c)},_slide:function(g,f,e){var h=this.handles[f];if(this.options.values&&this.options.values.length){var c=this.values(f?0:1);if((this.options.values.length==2&&this.options.range===true)&&((f==0&&e>c)||(f==1&&e<c))){e=c}if(e!=this.values(f)){var d=this.values();d[f]=e;var i=this._trigger("slide",g,{handle:this.handles[f],value:e,values:d});var c=this.values(f?0:1);if(i!==false){this.values(f,e,true)}}}else{if(e!=this.value()){var i=this._trigger("slide",g,{handle:this.handles[f],value:e});if(i!==false){this.value(e)}}}},_stop:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("stop",e,c)},_change:function(e,d){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("change",e,c)}},value:function(c){if(arguments.length){this.options.value=this._trimValue(c);this._refreshValue();this._change(null,0)}return this._value()},values:function(e,h){if(arguments.length>1){this.options.values[e]=this._trimValue(h);this._refreshValue();this._change(null,e)}if(arguments.length){if(b.isArray(arguments[0])){var g=this.options.values,d=arguments[0];for(var f=0,c=g.length;f<c;f++){g[f]=this._trimValue(d[f]);this._change(null,f)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(e)}else{return this.value()}}}else{return this._values()}},_setOption:function(d,e){var c,f=0;if(jQuery.isArray(this.options.values)){f=this.options.values.length}b.Widget.prototype._setOption.apply(this,arguments);switch(d){case"disabled":if(e){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c++){this._change(null,c)}this._animateOff=false;break}},_step:function(){var c=this.options.step;return c},_value:function(){var c=this.options.value;c=this._trimValue(c);return c},_values:function(d){if(arguments.length){var g=this.options.values[d];g=this._trimValue(g);return g}else{var f=this.options.values.slice();for(var e=0,c=f.length;e<c;e++){f[e]=this._trimValue(f[e])}return f}},_trimValue:function(c){if(c<this._valueMin()){c=this._valueMin()}if(c>this._valueMax()){c=this._valueMax()}return c},_valueMin:function(){var c=this.options.min;return c},_valueMax:function(){var c=this.options.max;return c},_refreshValue:function(){var g=this.options.range,e=this.options,m=this;var d=(!this._animateOff)?e.animate:false;if(this.options.values&&this.options.values.length){var j,i;this.handles.each(function(q,o){var p=(m.values(q)-m._valueMin())/(m._valueMax()-m._valueMin())*100;var n={};n[m.orientation=="horizontal"?"left":"bottom"]=p+"%";b(this).stop(1,1)[d?"animate":"css"](n,e.animate);if(m.options.range===true){if(m.orientation=="horizontal"){(q==0)&&m.range.stop(1,1)[d?"animate":"css"]({left:p+"%"},e.animate);(q==1)&&m.range[d?"animate":"css"]({width:(p-lastValPercent)+"%"},{queue:false,duration:e.animate})}else{(q==0)&&m.range.stop(1,1)[d?"animate":"css"]({bottom:(p)+"%"},e.animate);(q==1)&&m.range[d?"animate":"css"]({height:(p-lastValPercent)+"%"},{queue:false,duration:e.animate})}}lastValPercent=p})}else{var k=this.value(),h=this._valueMin(),l=this._valueMax(),f=l!=h?(k-h)/(l-h)*100:0;var c={};c[m.orientation=="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[d?"animate":"css"](c,e.animate);(g=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[d?"animate":"css"]({width:f+"%"},e.animate);(g=="max")&&(this.orientation=="horizontal")&&this.range[d?"animate":"css"]({width:(100-f)+"%"},{queue:false,duration:e.animate});(g=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[d?"animate":"css"]({height:f+"%"},e.animate);(g=="max")&&(this.orientation=="vertical")&&this.range[d?"animate":"css"]({height:(100-f)+"%"},{queue:false,duration:e.animate})}}});b.extend(b.ui.slider,{version:"1.8"})})(jQuery);;

/**//**/

/*
 * jQuery UI Autocomplete 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(a){a.widget("ui.autocomplete",{options:{minLength:1,delay:300},_create:function(){var b=this,c=this.element[0].ownerDocument;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(d){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:b._move("previousPage",d);break;case e.PAGE_DOWN:b._move("nextPage",d);break;case e.UP:b._move("previous",d);d.preventDefault();break;case e.DOWN:b._move("next",d);d.preventDefault();break;case e.ENTER:if(b.menu.active){d.preventDefault()}case e.TAB:if(!b.menu.active){return}b.menu.select();break;case e.ESCAPE:b.element.val(b.term);b.close(d);break;case e.SHIFT:case e.CONTROL:case 18:break;default:clearTimeout(b.searching);b.searching=setTimeout(function(){b.search(null,d)},b.options.delay);break}}).bind("focus.autocomplete",function(){b.previous=b.element.val()}).bind("blur.autocomplete",function(d){clearTimeout(b.searching);b.closing=setTimeout(function(){b.close(d)},150)});this._initSource();this.response=function(){return b._response.apply(b,arguments)};this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo("body",c).menu({focus:function(e,f){var d=f.item.data("item.autocomplete");if(false!==b._trigger("focus",null,{item:d})){b.element.val(d.value)}},selected:function(e,f){var d=f.item.data("item.autocomplete");if(false!==b._trigger("select",e,{item:d})){b.element.val(d.value)}b.close(e);b.previous=b.element.val();if(b.element[0]!==c.activeElement){b.element.focus()}},blur:function(d,e){if(b.menu.element.is(":visible")){b.element.val(b.term)}}}).zIndex(this.element.zIndex()+2).css({top:0,left:0}).hide().data("menu");if(a.fn.bgiframe){this.menu.element.bgiframe()}},destroy:function(){this.element.removeClass("ui-autocomplete-input ui-widget ui-widget-content").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();a.Widget.prototype.destroy.call(this)},_setOption:function(b){a.Widget.prototype._setOption.apply(this,arguments);if(b==="source"){this._initSource()}},_initSource:function(){var c,b;if(a.isArray(this.options.source)){c=this.options.source;this.source=function(e,d){var f=new RegExp(a.ui.autocomplete.escapeRegex(e.term),"i");d(a.grep(c,function(g){return f.test(g.label||g.value||g)}))}}else{if(typeof this.options.source==="string"){b=this.options.source;this.source=function(e,d){a.getJSON(b,e,d)}}else{this.source=this.options.source}}},search:function(c,b){c=c!=null?c:this.element.val();if(c.length<this.options.minLength){return this.close(b)}clearTimeout(this.closing);if(this._trigger("search")===false){return}return this._search(c)},_search:function(b){this.term=this.element.addClass("ui-autocomplete-loading").val();this.source({term:b},this.response)},_response:function(b){if(b.length){b=this._normalize(b);this._suggest(b);this._trigger("open")}else{this.close()}this.element.removeClass("ui-autocomplete-loading")},close:function(b){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this._trigger("close",b);this.menu.element.hide();this.menu.deactivate()}if(this.previous!==this.element.val()){this._trigger("change",b)}},_normalize:function(b){if(b.length&&b[0].label&&b[0].value){return b}return a.map(b,function(c){if(typeof c==="string"){return{label:c,value:c}}return a.extend({label:c.label||c.value,value:c.value||c.label},c)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+2),d,e;this._renderMenu(c,b);this.menu.deactivate();this.menu.refresh();this.menu.element.show().position({my:"left top",at:"left bottom",of:this.element,collision:"none"});d=c.width("").width();e=this.element.width();c.width(Math.max(d,e))},_renderMenu:function(d,c){var b=this;a.each(c,function(e,f){b._renderItem(d,f)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append("<a>"+c.label+"</a>").appendTo(b)},_move:function(c,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)){this.element.val(this.term);this.menu.deactivate();return}this.menu[c]()},widget:function(){return this.menu.element}});a.extend(a.ui.autocomplete,{escapeRegex:function(b){return b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")}})}(jQuery));(function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){c.preventDefault();b.select()});this.refresh()},refresh:function(){var c=this;var b=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");b.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(){c.activate(a(this).parent())}).mouseleave(function(){c.deactivate()})},activate:function(d){this.deactivate();if(this.hasScroll()){var e=d.offset().top-this.element.offset().top,b=this.element.attr("scrollTop"),c=this.element.height();if(e<0){this.element.attr("scrollTop",b+e)}else{if(e>c){this.element.attr("scrollTop",b+e-c+d.height())}}}this.active=d.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",null,{item:d})},deactivate:function(){if(!this.active){return}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(){this.move("next","li:first")},previous:function(){this.move("prev","li:last")},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(d,c){if(!this.active){this.activate(this.element.children(c));return}var b=this.active[d]();if(b.length){this.activate(b)}else{this.activate(this.element.children(c))}},nextPage:function(){if(this.hasScroll()){if(!this.active||this.last()){this.activate(this.element.children(":first"));return}var d=this.active.offset().top,c=this.element.height(),b=this.element.children("li").filter(function(){var e=a(this).offset().top-d-c+a(this).height();return e<10&&e>-10});if(!b.length){b=this.element.children(":last")}this.activate(b)}else{this.activate(this.element.children(!this.active||this.last()?":first":":last"))}},previousPage:function(){if(this.hasScroll()){if(!this.active||this.first()){this.activate(this.element.children(":last"));return}var c=this.active.offset().top,b=this.element.height();result=this.element.children("li").filter(function(){var d=a(this).offset().top-c+b-a(this).height();return d<10&&d>-10});if(!result.length){result=this.element.children(":first")}this.activate(result)}else{this.activate(this.element.children(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(){this._trigger("selected",null,{item:this.active})}})}(jQuery));;

/**//**/

/*
 * jQuery UI Datepicker 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function($){$.extend($.ui,{datepicker:{version:"1.8"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"_default",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=$('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){target.id="dp"+(++this.uuid)}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst)},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{$.datepicker._showDatepicker(input[0])}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst)},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id="dp"+(++this.uuid);this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);extendRemove(inst.settings,settings);this._attachments($(target),inst);this._autoSize(inst);this._setDateDatepicker(target,date);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass,inst.dpDiv).add($("td."+$.datepicker._currentClass,inst.dpDiv));if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(event){$.datepicker.log(event)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true)}var beforeShow=$.datepicker._get(inst,"beforeShow");extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){$.datepicker._datepickerShowing=true;var borders=$.datepicker._getBorders(inst.dpDiv);inst.dpDiv.find("iframe.ui-datepicker-cover").css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})};inst.dpDiv.zIndex($(input).zIndex()+1);if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var self=this;var borders=$.datepicker._getBorders(inst.dpDiv);inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).bind("mouseover",function(){if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}else{inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1)){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst);this._curInst=null};if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target);if($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear&&!$.browser.msie){inst.input.focus()}inst._selectingMonthYear=!inst._selectingMonthYear},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);for(var i=0;i<names.length;i++){if(value.substr(iValue,names[i].length)==names[i]){iValue+=names[i].length;return i+1}}throw"Unknown name at position "+iValue};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",(date.getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000,3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return}var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};date=(date==null?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):date)));date=(date&&date.toString()=="Invalid Date"?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0)}return this._daylightSavingAdjust(date)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!(date);var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;date=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=date.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+inst.id+"',"+printDate.getMonth()+","+printDate.getFullYear()+', this);return false;"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'M');\" onclick=\"DP_jQuery_"+dpuuid+".datepicker._clickMonthYear('#"+inst.id+"');\">";for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+dpuuid+".datepicker._clickMonthYear('#"+inst.id+"');\">";for(;year<=endYear;year++){html+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}html+="</select>"}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);return date},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8";window["DP_jQuery_"+dpuuid]=$})(jQuery);;

/**//**/
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Date: 2/19/2008
 * @author Ariel Flesler
 * @version 1.3.3
 */
;(function($){var o=$.scrollTo=function(a,b,c){o.window().scrollTo(a,b,c)};o.defaults={axis:'y',duration:1};o.window=function(){return $($.browser.safari?'body':'html')};$.fn.scrollTo=function(l,m,n){if(typeof m=='object'){n=m;m=0}n=$.extend({},o.defaults,n);m=m||n.speed||n.duration;n.queue=n.queue&&n.axis.length>1;if(n.queue)m/=2;n.offset=j(n.offset);n.over=j(n.over);return this.each(function(){var a=this,b=$(a),t=l,c,d={},w=b.is('html,body');switch(typeof t){case'number':case'string':if(/^([+-]=)?\d+(px)?$/.test(t)){t=j(t);break}t=$(t,this);case'object':if(t.is||t.style)c=(t=$(t)).offset()}$.each(n.axis.split(''),function(i,f){var P=f=='x'?'Left':'Top',p=P.toLowerCase(),k='scroll'+P,e=a[k],D=f=='x'?'Width':'Height';if(c){d[k]=c[p]+(w?0:e-b.offset()[p]);if(n.margin){d[k]-=parseInt(t.css('margin'+P))||0;d[k]-=parseInt(t.css('border'+P+'Width'))||0}d[k]+=n.offset[p]||0;if(n.over[p])d[k]+=t[D.toLowerCase()]()*n.over[p]}else d[k]=t[p];if(/^\d+$/.test(d[k]))d[k]=d[k]<=0?0:Math.min(d[k],h(D));if(!i&&n.queue){if(e!=d[k])g(n.onAfterFirst);delete d[k]}});g(n.onAfter);function g(a){b.animate(d,m,n.easing,a&&function(){a.call(this,l)})};function h(D){var b=w?$.browser.opera?document.body:document.documentElement:a;return b['scroll'+D]-b['client'+D]}})};function j(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/**//**/
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' && color != 'rgba(0, 0, 0, 0)' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);
/**//**/
/* 
 * Auto Expanding Text Area (1.2.2)
 * by Chrys Bader (www.chrysbader.com)
 * chrysb@gmail.com
 *
 * Special thanks to:
 * Jake Chapa - jake@hybridstudio.com
 * John Resig - jeresig@gmail.com
 *
 * Copyright (c) 2008 Chrys Bader (www.chrysbader.com)
 * Licensed under the GPL (GPL-LICENSE.txt) license. 
 *
 *
 * NOTE: This script requires jQuery to work.  Download jQuery at www.jquery.com
 *
 */
 
(function(jQuery) {
		  
	var self = null;
 
	jQuery.fn.autogrow = function(o)
	{	
		return this.each(function() {
			new jQuery.autogrow(this, o);
		});
	};
	

    /**
     * The autogrow object.
     *
     * @constructor
     * @name jQuery.autogrow
     * @param Object e The textarea to create the autogrow for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     * @cat Plugins/autogrow
     */
	
	jQuery.autogrow = function (e, o)
	{
		this.options		  	= o || {};
		this.dummy			  	= null;
		this.interval	 	  	= null;
		this.line_height	  	= this.options.lineHeight || parseInt(jQuery(e).css('line-height'), 10);
		this.min_height		  	= this.options.minHeight || parseInt(jQuery(e).css('min-height'), 10);
		this.max_height		  	= this.options.maxHeight || parseInt(jQuery(e).css('max-height'), 10);
		this.textarea		  	= jQuery(e);
		
		if(this.line_height == NaN)
		  this.line_height = 0;
		
		// Only one textarea activated at a time, the one being used
		this.init();
	};
	
	jQuery.autogrow.fn = jQuery.autogrow.prototype = {
    autogrow: '1.2.2'
  };
	
 	jQuery.autogrow.fn.extend = jQuery.autogrow.extend = jQuery.extend;
	
	jQuery.autogrow.fn.extend({
						 
		init: function() {			
			var self = this;			
			this.textarea.css({overflow: 'hidden', display: 'block'});
			this.textarea.bind('focus', function() { self.startExpand(); } ).bind('blur', function() { self.stopExpand(); });
			this.checkExpand();	
		},
						 
		startExpand: function() {				
		  var self = this;
			this.interval = window.setInterval(function() {self.checkExpand();}, 400);
		},
		
		stopExpand: function() {
			clearInterval(this.interval);	
		},
		
		checkExpand: function() {
			
			if (this.dummy == null)
			{
				this.dummy = jQuery('<div></div>');
				this.dummy.css({
												'font-size'  : this.textarea.css('font-size'),
												'font-family': this.textarea.css('font-family'),
												'width'      : this.textarea.css('width'),
												// IE shits its pants if you uncomment the next line!
												//'padding'    : this.textarea.css('padding'),
												'line-height': this.line_height + 'px',
												'overflow-x' : 'hidden',
												'position'   : 'absolute',
												'top'        : 0,
												'left'		 : -9999
												}).appendTo('body');
			}
			
			// Strip HTML tags
			var html = this.textarea.val().replace(/(<|>)/g, '');
			
			// IE is different, as per usual
			if ($.browser.msie)
			{
				html = html.replace(/\n/g, '<BR>new');
			}
			else
			{
				html = html.replace(/\n/g, '<br>new');
			}
			
			if (this.dummy.html() != html)
			{
				this.dummy.html(html);	
				
				if (this.max_height > 0 && (this.dummy.height() + this.line_height > this.max_height))
				{
					this.textarea.css('overflow-y', 'auto');	
				}
				else
				{
					this.textarea.css('overflow-y', 'hidden');
					if (this.textarea.height() < this.dummy.height() + this.line_height || (this.dummy.height() < this.textarea.height()))
					{	
						this.textarea.animate({height: (this.dummy.height() + this.line_height) + 'px'}, 100);	
					}
				}
			}
		}
	 });
})(jQuery);
/**//**/

(function(b){var c,a=[];function e(g,f,i){var h;h=b.fn[f];b.fn[f]=function(){var j;if(g!=="after"){j=i.apply(this,arguments);if(j!==undefined){return j}}j=h.apply(this,arguments);if(g!=="before"){i.apply(this,arguments)}return j}}b.fn.tinymce=function(i){var h=this,g,j="",f;if(!h.length){return}if(!i){return tinyMCE.get(this[0].id)}function k(){if(d){d();d=null}h.each(function(m,p){var l,o=p.id||tinymce.DOM.uniqueId();p.id=o;l=new tinymce.Editor(o,i);l.render()})}if(!window.tinymce&&!c&&(g=i.script_url)){c=1;if(/_(src|dev)\.js/g.test(g)){j="_src"}window.tinyMCEPreInit={base:g.substring(0,g.lastIndexOf("/")),suffix:j,query:""};b.getScript(g,function(){tinymce.dom.Event.domLoaded=1;c=2;k();b.each(a,function(l,m){m()})})}else{if(c===1){a.push(k)}else{k()}}};b.extend(b.expr[":"],{tinymce:function(f){return f.id&&!!tinyMCE.get(f.id)}});function d(){function f(){this.find("span.mceEditor,div.mceEditor").each(function(j,k){var h;if(h=tinyMCE.get(k.id.replace(/_parent$/,""))){h.remove()}})}function g(i){var h;if(i!==undefined){f.call(this);this.each(function(k,l){var j;if(j=tinyMCE.get(l.id)){j.setContent(i)}})}else{if(this.length>0){if(h=tinyMCE.get(this[0].id)){return h.getContent()}}}}e("both","text",function(h){if(h!==undefined){return g.call(this,h)}if(this.length>0){if(ed=tinyMCE.get(this[0].id)){return ed.getContent().replace(/<[^>]+>/g,"")}}});b.each(["val","html"],function(j,h){e("both",h,g)});b.each(["append","prepend"],function(j,h){e("before",h,function(i){if(i!==undefined){this.each(function(l,m){var k;if(k=tinyMCE.get(m.id)){if(h==="append"){k.setContent(k.getContent()+i)}else{k.setContent(i+k.getContent())}}})}})});e("both","attr",function(h,i){if(h&&h==="value"){return g.call(this,i)}});b.each(["remove","replaceWith","replaceAll","empty"],function(j,h){e("before",h,f)})}})(jQuery);

/**//**/

/**
 * jquery.simpletip 1.3.1. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.3.1
 * Released: February 5, 2009 - 11:04am
 */
(function($){function Simpletip(elem,conf){var self=this;elem=jQuery(elem);var tooltip=jQuery(document.createElement('div')).addClass(conf.baseClass).addClass((conf.fixed)?conf.fixedClass:'').addClass((conf.persistent)?conf.persistentClass:'').html(conf.content).appendTo(elem);if(!conf.hidden)tooltip.show();else tooltip.hide();if(!conf.persistent){elem.hover(function(event){self.show(event)},function(){self.hide()});if(!conf.fixed){elem.mousemove(function(event){if(tooltip.css('display')!=='none')self.updatePos(event);});};}else
{elem.click(function(event){if(event.target===elem.get(0)){if(tooltip.css('display')!=='none')self.hide();else
self.show();};});jQuery(window).mousedown(function(event){if(tooltip.css('display')!=='none'){var check=(conf.focus)?jQuery(event.target).parents('.tooltip').andSelf().filter(function(){return this===tooltip.get(0)}).length:0;if(check===0)self.hide();};});};jQuery.extend(self,{getVersion:function(){return[1,2,0];},getParent:function(){return elem;},getTooltip:function(){return tooltip;},getPos:function(){return tooltip.offset();},setPos:function(posX,posY){var elemPos=elem.offset();if(typeof posX=='string')posX=parseInt(posX)+elemPos.left;if(typeof posY=='string')posY=parseInt(posY)+elemPos.top;tooltip.css({left:posX,top:posY});return self;},show:function(event){conf.onBeforeShow.call(self);self.updatePos((conf.fixed)?null:event);switch(conf.showEffect){case'fade':tooltip.fadeIn(conf.showTime);break;case'slide':tooltip.slideDown(conf.showTime,self.updatePos);break;case'custom':conf.showCustom.call(tooltip,conf.showTime);break;default:case'none':tooltip.show();break;};tooltip.addClass(conf.activeClass);conf.onShow.call(self);return self;},hide:function(){conf.onBeforeHide.call(self);switch(conf.hideEffect){case'fade':tooltip.fadeOut(conf.hideTime);break;case'slide':tooltip.slideUp(conf.hideTime);break;case'custom':conf.hideCustom.call(tooltip,conf.hideTime);break;default:case'none':tooltip.hide();break;};tooltip.removeClass(conf.activeClass);conf.onHide.call(self);return self;},update:function(content){tooltip.html(content);conf.content=content;return self;},load:function(uri,data){conf.beforeContentLoad.call(self);tooltip.load(uri,data,function(){conf.onContentLoad.call(self);});return self;},boundryCheck:function(posX,posY){var newX=posX+tooltip.outerWidth();var newY=posY+tooltip.outerHeight();var windowWidth=jQuery(window).width()+jQuery(window).scrollLeft();var windowHeight=jQuery(window).height()+jQuery(window).scrollTop();return[(newX>=windowWidth),(newY>=windowHeight)];},updatePos:function(event){var tooltipWidth=tooltip.outerWidth();var tooltipHeight=tooltip.outerHeight();if(!event&&conf.fixed){if(conf.position.constructor==Array){posX=parseInt(conf.position[0]);posY=parseInt(conf.position[1]);}else if(jQuery(conf.position).attr('nodeType')===1){var offset=jQuery(conf.position).offset();posX=offset.left;posY=offset.top;}else
{var elemPos=elem.offset();var elemWidth=elem.outerWidth();var elemHeight=elem.outerHeight();switch(conf.position){case'top':var posX=elemPos.left-(tooltipWidth/2)+(elemWidth/2);var posY=elemPos.top-tooltipHeight;break;case'bottom':var posX=elemPos.left-(tooltipWidth/2)+(elemWidth/2);var posY=elemPos.top+elemHeight;break;case'left':var posX=elemPos.left-tooltipWidth;var posY=elemPos.top-(tooltipHeight/2)+(elemHeight/2);break;case'right':var posX=elemPos.left+elemWidth;var posY=elemPos.top-(tooltipHeight/2)+(elemHeight/2);break;default:case'default':var posX=(elemWidth/2)+elemPos.left+20;var posY=elemPos.top;break;};};}else
{var posX=event.pageX;var posY=event.pageY;};if(typeof conf.position!='object'){posX=posX+conf.offset[0];posY=posY+conf.offset[1];if(conf.boundryCheck){var overflow=self.boundryCheck(posX,posY);if(overflow[0])posX=posX-(tooltipWidth/2)-(2*conf.offset[0]);if(overflow[1])posY=posY-(tooltipHeight/2)-(2*conf.offset[1]);}}else
{if(typeof conf.position[0]=="string")posX=String(posX);if(typeof conf.position[1]=="string")posY=String(posY);};self.setPos(posX,posY);return self;}});};jQuery.fn.simpletip=function(conf){var api=jQuery(this).eq(typeof conf=='number'?conf:0).data("simpletip");if(api)return api;var defaultConf={content:'A simple tooltip',persistent:false,focus:false,hidden:true,position:'default',offset:[0,0],boundryCheck:true,fixed:true,showEffect:'fade',showTime:150,showCustom:null,hideEffect:'fade',hideTime:150,hideCustom:null,baseClass:'tooltip',activeClass:'active',fixedClass:'fixed',persistentClass:'persistent',focusClass:'focus',onBeforeShow:function(){},onShow:function(){},onBeforeHide:function(){},onHide:function(){},beforeContentLoad:function(){},onContentLoad:function(){}};jQuery.extend(defaultConf,conf);this.each(function(){var el=new Simpletip(jQuery(this),defaultConf);jQuery(this).data("simpletip",el);});return this;};})();

/**/
var GYG = window.GYG || {};
GYG.config = {
	googleKey: "ABQIAAAAeBm7urHXe8_9VJTj4DFwOhQdVuuz67yag3R4CRRaNUH1b-5XxBQYaUd585zHWpwCS9r_IX1Ypv289Q"
};/**/

GYG.ImagePreloader = {
	imgs: {},
	load: function(a_imgs,isStatic) {
		var imgUrl = "img/";
		var staticUrl = "img/";
		if(typeof a_imgs == "string") {
			return GYG.ImagePreloader.load([a_imgs]);
		}
		var i=-1,img;
		while(++i < a_imgs.length) {
			if(!GYG.ImagePreloader.imgs[a_imgs[i]]) {
				img=new Image();
				if(isStatic) {
					img.src=staticUrl+a_imgs[i];
				} else {
					img.src=imgUrl+a_imgs[i];
				}
				GYG.ImagePreloader.imgs[a_imgs[i]] = img;
			}
		}
	}
};

/**//**/

// Encoding and decoding URL conform
GYG.decodeURL = function(string, type) {
	
	// ==========================================================================
	// JavaScript-Tool zur URL-Kodierung/Dekodierung
	// Copyright (C) 2006 Netzreport (netzreport.googlepages.com)
	//
	// Website: http://netzreport.googlepages.com/online_tool_zur_url_kodierung_de.html
	//
	// Dieses Programm steht unter der GNU General Public License. Der
	// rechtlich gültige Lizenzhinweis und Lizenztext sind leider nur
	// in englischer Sprache verfügbar:
	//
	// This program is free software; you can redistribute it and/or
	// modify it under the terms of the GNU General Public License
	// as published by the Free Software Foundation; either version 2
	// of the License, or (at your option) any later version.
	//
	// This program is distributed in the hope that it will be useful,
	// but WITHOUT ANY WARRANTY; without even the implied warranty of
	// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	// GNU General Public License for more details.
	//
	// You should have received a copy of the GNU General Public License
	// along with this program; if not, write to the Free Software
	// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA
	//
	// The GNU General Public License is also available from:
	// http://www.gnu.org/copyleft/gpl.html
	//
	// Eine lokale Kopie der GNU General Public License ist hier abrufbar:
	// http://netzreport.googlepages.com/gpl.txt
	// ==========================================================================
	//
	// --------------------------------------------------------------------------
	// 2006-12-18: Changed character encoding. Now, one can choose between URL
	//             encoding/decoding strings that are character encoded as ASCII
	//             or UTF-8.
	// 2006-11-19: First release
	// --------------------------------------------------------------------------

	// According to RFC 3986, only characters from a set of reserved and a set
	// of unreserved characters are allowed in a URL:
	var unreserved = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_.~";
	var reserved = "!*'();:@&=+$,/?%#[]";
	var allowed = unreserved + reserved;
	var hexchars = "0123456789ABCDEFabcdef";

	// --------------------------------- Encoding -------------------------------

	// This function returns a percent sign followed by two hexadecimal digits.
	// Input is a decimal value not greater than 255.
	var gethex = function(decimal) {
	  return "%" + hexchars.charAt(decimal >> 4) + hexchars.charAt(decimal & 0xF);
	};

	var encode = function(string) {

	  // Some variables:
	  var decoded = string;
	  var encoded = "";

	  // ---------------- If UTF-8 character encoding was chosen: ----------------

	    for (var i = 0; i < decoded.length; i++ ) {
	      var ch = decoded.charAt(i);
	      // Check if character is an unreserved character:
	      if (unreserved.indexOf(ch) != -1) {
	        encoded = encoded + ch;
	      } else {

	        // The position in the Unicode table tells us how many bytes are needed.
	        // Note that if we talk about first, second, etc. in the following, we are
	        // counting from left to right:
	        //
	        //   Position in   |  Bytes needed   | Binary representation
	        //  Unicode table  |   for UTF-8     |       of UTF-8
	        // ----------------------------------------------------------
	        //     0 -     127 |    1 byte       | 0XXX.XXXX
	        //   128 -    2047 |    2 bytes      | 110X.XXXX 10XX.XXXX
	        //  2048 -   65535 |    3 bytes      | 1110.XXXX 10XX.XXXX 10XX.XXXX
	        // 65536 - 2097151 |    4 bytes      | 1111.0XXX 10XX.XXXX 10XX.XXXX 10XX.XXXX

	        var charcode = decoded.charCodeAt(i);

	        // Position 0 - 127 is equal to percent-encoding with ASCII character encoding:
	        if (charcode < 128) {
	          encoded = encoded + gethex(charcode);
	        }

	        // Position 128 - 2047: two bytes for UTF-8 character encoding.
	        if (charcode > 127 && charcode < 2048) {
	          // First UTF byte: Mask the first five bits of charcode with binary 110X.XXXX:
	          encoded = encoded + gethex((charcode >> 6) | 0xC0);
	          // Second UTF byte: Get last six bits of charcode and mask them with binary 10XX.XXXX:
	          encoded = encoded + gethex((charcode & 0x3F) | 0x80);
	        }

	        // Position 2048 - 65535: three bytes for UTF-8 character encoding.
	        if (charcode > 2047 && charcode < 65536) {
	          // First UTF byte: Mask the first four bits of charcode with binary 1110.XXXX:
	          encoded = encoded + gethex((charcode >> 12) | 0xE0);
	          // Second UTF byte: Get the next six bits of charcode and mask them binary 10XX.XXXX:
	          encoded = encoded + gethex(((charcode >> 6) & 0x3F) | 0x80);
	          // Third UTF byte: Get the last six bits of charcode and mask them binary 10XX.XXXX:
	          encoded = encoded + gethex((charcode & 0x3F) | 0x80);
	        }

	        // Position 65536 - : four bytes for UTF-8 character encoding.
	        if (charcode > 65535) {
	          // First UTF byte: Mask the first three bits of charcode with binary 1111.0XXX:
	          encoded = encoded + gethex((charcode >> 18) | 0xF0);
	          // Second UTF byte: Get the next six bits of charcode and mask them binary 10XX.XXXX:
	          encoded = encoded + gethex(((charcode >> 12) & 0x3F) | 0x80);
	          // Third UTF byte: Get the last six bits of charcode and mask them binary 10XX.XXXX:
	          encoded = encoded + gethex(((charcode >> 6) & 0x3F) | 0x80);
	          // Fourth UTF byte: Get the last six bits of charcode and mask them binary 10XX.XXXX:
	          encoded = encoded + gethex((charcode & 0x3F) | 0x80);
	        }

	      }

	    }  // end of for ...

	    // return result:
	    return encoded;
	};

	// --------------------------------- Decoding -------------------------------

	// This function returns the decimal value of two hexadecimal digits.
	// Input is a percent sign followed by two hexadecimal digits. If the input
	// string is shorter than three characters, the percent sign is missing or if
	// not a hexadecimal numeral is used, then the decimal value 256 is returned:
	var getdec = function(hexencoded) {
	  if (hexencoded.length == 3) {
	    if (hexencoded.charAt(0) == "%") {
	      if (hexchars.indexOf(hexencoded.charAt(1)) != -1 && hexchars.indexOf(hexencoded.charAt(2)) != -1) {
	        return parseInt(hexencoded.substr(1,2),16);
	      }
	    }
	  }
	  return 256;
	};

	var decode = function(string) {

	  // Some variables:
	  var encoded = string;
	  var decoded = "";
	  // Remember characters that are not allowed in a URL:
	  var notallowed = "";
	  // Remember illegal percent encoding:
	  var illegalencoding = "";

	  // ---------------- If UTF-8 character encoding was chosen: ----------------
	  
	    // UTF-8 bytes from left to right:
	    var byte1, byte2, byte3, byte4 = 0;

	    var i = 0;
	    while (i < encoded.length) {
	      var ch = encoded.charAt(i);
	      // Check for percent-encoded string:
	      if (ch == "%") {

	        // Check for legal percent-encoding of first byte:
	        if (getdec(encoded.substr(i,3)) < 255) {

	          // Get the decimal values of all (potential) UTF-bytes:
	          byte1 = getdec(encoded.substr(i,3));
	          byte2 = getdec(encoded.substr(i+3,3));
	          byte3 = getdec(encoded.substr(i+6,3));
	          byte4 = getdec(encoded.substr(i+9,3));

	          // Check for one byte UTF-8 character encoding:
	          if (byte1 < 128) {
	            decoded = decoded + String.fromCharCode(byte1);
	            i = i + 3;
	          }

	          // Check for illegal one byte UTF-8 character encoding:
	          if (byte1 > 127 && byte1 < 192) {
	            decoded = decoded + encoded.substr(i,3);
	            illegalencoding = illegalencoding + encoded.substr(i,3) + " ";
	            i = i + 3;
	          }

	          // Check for two byte UTF-8 character encoding:
	          if (byte1 > 191 && byte1 < 224) {
	            if (byte2 > 127 && byte2 < 192) {
	              decoded = decoded + String.fromCharCode(((byte1 & 0x1F) << 6) | (byte2 & 0x3F));
	            } else {
	              decoded = decoded + encoded.substr(i,6);
	              illegalencoding = illegalencoding + encoded.substr(i,6) + " ";
	            }
	            i = i + 6;
	          }

	          // Check for three byte UTF-8 character encoding:
	          if (byte1 > 223 && byte1 < 240) {
	            if (byte2 > 127 && byte2 < 192) {
	              if (byte3 > 127 && byte3 < 192) {
	                decoded = decoded + String.fromCharCode(((byte1 & 0xF) << 12) | ((byte2 & 0x3F) << 6) | (byte3 & 0x3F));
	              } else {
	                decoded = decoded + encoded.substr(i,9);
	                illegalencoding = illegalencoding + encoded.substr(i,9) + " ";
	              }
	            } else {
	              decoded = decoded + encoded.substr(i,9);
	              illegalencoding = illegalencoding + encoded.substr(i,9) + " ";
	            }
	            i = i + 9;
	          }

	          // Check for four byte UTF-8 character encoding:
	          if (byte1 > 239) {
	            if (byte2 > 127 && byte2 < 192) {
	              if (byte3 > 127 && byte3 < 192) {
	                if (byte4 > 127 && byte4 < 192) {
	                  decoded = decoded + String.fromCharCode(((byte1 & 0x7) << 18) | ((byte2 & 0x3F) << 12) | ((byte3 & 0x3F) << 6) | (byte4 & 0x3F));
	                } else {
	                  decoded = decoded + encoded.substr(i,12);
	                  illegalencoding = illegalencoding + encoded.substr(i,12) + " ";
	                }
	              } else {
	                decoded = decoded + encoded.substr(i,12);
	                illegalencoding = illegalencoding + encoded.substr(i,12) + " ";
	              }
	            } else {
	              decoded = decoded + encoded.substr(i,12);
	              illegalencoding = illegalencoding + encoded.substr(i,12) + " ";
	            }
	            i = i + 12;
	          }

	        } else {  // the first byte is not legally percent-encoded
	          decoded = decoded + encoded.substr(i,3);
	          illegalencoding = illegalencoding + encoded.substr(i,3) + " ";
	          i = i + 3;
	        }

	      } else {  // the string is not percent encoded
	        // Check if character is an allowed character:
	        if (allowed.indexOf(ch) == -1) notallowed = notallowed + ch + " ";
	        decoded = decoded + ch;
	        i++;
	      }
	    }  // end of while ...

	    // Write result:
	    return decoded;

	    // Display warning message if necessary:
	    //var warning = "";
	    //if (notallowed != "") warning = warning + "Zeichen, die nicht in einer URL vorkommen dürfen:\n" + notallowed + "\n\n";
	    //if (illegalencoding != "") warning = warning + "Illegale Kodierung (für UTF-8):\n" + illegalencoding  + "\n\n";
	    //if (warning != "") alert("Warnung: Illegale Zeichen(ketten) im kodierten Text!\n\n" + warning);
	};
	
	
	// GYG Code:
	var output;
	
	if(type == 'decode') {
		output = decode(string);
	} else if(type == 'encode') {
		output = encode(string);
	}
	
	return output;
};

/**//**/

GYG.GYGindow = function(settings) {
	if(!settings) {
		throw "ERROR: No settings specified";
	}

	// No GYGindow running, so display it
	if(!GYG.GYGindow.running) {
		this.initialize(settings);
	}
	// Thre's allready a GYGindow running, so queue it
	else {
		var self = this;
		GYG.GYGindow.queue.push(function() { self.initialize.apply(self, [settings]); });
	}
};

GYG.GYGindow.confirm = function(settings) {
	return new GYG.GYGindow({
		content: {
			title: settings.title,
			content: '<p id="gygindow-confirm-message">'+settings.message+'</p>',
			confirm: {
				title: settings.confirm
			},
			cancel: {
				title: settings.cancel
			}
		},
		callBack: settings.callBack
	});
};

GYG.GYGindow.alert = function(msg) {
	msg = msg.replace(/\n/g, '<br />');
	return new GYG.GYGindow({
		content: {
			content: '<p id="gygindow-alert-message">'+msg+'</p>',
			cancel: false
		}
	});
};

GYG.GYGindow.processLinks = function() {
	$(document).ready(function() {
		var el = $('a[rel*="gygindow"][href]');
		if(!el.length) return;
		el.unbind("click");
		el.click(function(event) {
			event.preventDefault();
			return new GYG.GYGindow({ element: this });
		}).attr("rel", el.attr("rel").replace(/gygindow/, ""));
		// if(count) {
		// 	GYG.ImagePreloader.load(GYG.GYGindow.settings.images);
		// }
	});
};

GYG.GYGindow.processLinks();

GYG.GYGindow.queue = [];

GYG.GYGindow.settings = {
	urlPrefix: "/ajax/gygindow/",
	urlSuffix: ".php",
	images: [
		"gygindow/corners.png",
		"gygindow/tb.png",
		"gygindow/lr.png",
		"gygindow/close.png",
		"spinners/333333-on-ffffff-medium.gif"
	]
};

$.extend(GYG.GYGindow.prototype, {
	initialize: function(settings) {
		GYG.GYGindow.running = this;
		
		GYG.ImagePreloader.load(['button_hover_black.png','button_pressed_black.png']);
		
		if(settings.element) {
			settings.element = $(settings.element);
		}
		
		// if we have no title, extract it from the element
		if(settings.content && !settings.content.title && settings.element) {
			settings.content.title = (settings.element.attr("title") && settings.element.attr("title") !== "" ? settings.element.attr("title") : undefined);
		}
		
		if(!settings.url && settings.element) {
			settings.url = (settings.element[0].nodeName.toLowerCase() === "a" && settings.element.attr("href") && settings.element.attr("href") !== "") ? settings.element.attr("href") : undefined;
		}
		
		this.settings = $.extend({
			method: "GET",
			modal: false
		}, settings);
		
		this.buildWindow();
	},
	
	// method that build the window
	buildWindow: function() {
		var self = this;
				
		this.elements = {};
		
		this.elements.bg = $('<div id="gygindow-bg"></div>').hide().appendTo(document.body);
		this.elements.outerFrame = $('<div id="gygindow-outer-frame"></div>').appendTo(this.elements.bg);
		
		if(!$.browser.msie || ($.browser.msie && $.browser.version >= 7)) {
			$('<div id="gygindow-top"></div>').appendTo(this.elements.outerFrame);
			$('<div id="gygindow-right"></div>').appendTo(this.elements.outerFrame);
			$('<div id="gygindow-bottom"></div>').appendTo(this.elements.outerFrame);
			$('<div id="gygindow-left"></div>').appendTo(this.elements.outerFrame);
			$('<div id="gygindow-top-left"></div>').appendTo(this.elements.outerFrame);
			$('<div id="gygindow-top-right"></div>').appendTo(this.elements.outerFrame);
			$('<div id="gygindow-bottom-right"></div>').appendTo(this.elements.outerFrame);
			$('<div id="gygindow-bottom-left"></div>').appendTo(this.elements.outerFrame);
		}
		
		this.elements.close = $('<a href="#" id="gygindow-close"></a>').appendTo(this.elements.outerFrame).click(function(event) { event.preventDefault(); self.cancel.apply(self); });
		if(this.settings.modal) {
			this.elements.close.hide();
		}
		
		this.elements.innerFrame = $('<div id="gygindow-inner-frame"></div>').appendTo(this.elements.outerFrame);
		
		this.elements.title = $('<div id="gygindow-title"'+(this.settings.title ? '>'+this.settings.title : ' style="display:none;">')+'</div>').appendTo(this.elements.innerFrame);
		
		this.elements.content = $('<div id="gygindow-content"></div>').appendTo(this.elements.innerFrame);
		
		this.elements.buttons = $('<div id="gygindow-buttons"></div>').appendTo(this.elements.innerFrame);
		
		this.elements.cancel = $('<input id="gygindow-cancel" type="button" value="'+GYG.translation.GYGindow.cancel+'" />').appendTo(this.elements.buttons).click(function(event) { event.preventDefault(); self.cancel.apply(self); });
		this.elements.confirm = $('<input id="gygindow-confirm" type="button" />').appendTo(this.elements.buttons).hide().click(function(event) { event.preventDefault(); self.confirm.apply(self); });
		
		this.elements.bg.fadeIn("fast");
		
		if(this.settings.url) {
			// if there's a url to load, ignore the content passed as argument 
			if(this.settings.content && this.settings.content.content) {
				delete this.settings.content.content;
			}
			
			this.loadContent(this.settings);
		} else if(this.settings.content) {
			this.processContent(this.settings.content);
		}
		
		$(document).keydown(function(event) {
			if(event.keyCode == 27) { // esc
				if(!self.settings.modal) {
					self.cancel.apply(self);
				}
			}
		});
		
		$(window).scroll(function(event) { 
			event.preventDefault();
		});
	},
	
	// loads new content
	loadContent: function(settings) {
		if(!settings.url) {
			throw "ERROR: No URL specified to load.";
		}
		
		var self = this;
		
		settings = $.extend({
			method: "GET",
			loadingTitle: GYG.translation.GYGindow.loading,
			allowCancel: true
		}, settings, this.processURL(settings.url));
		
		this.elements.content.empty().append('<div id="gygindow-status" class="loading"><img width="32" height="32" src="img/spinners/333333-on-ffffff-medium.gif" /><br /><span>'+settings.loadingTitle+'…</span></div>');
		
		this.elements.confirm.hide();
		
		if(!settings.allowCancel) {
			this.elements.buttons.hide();
			this.elements.close.hide();
		}
		
		$.ajax({
			type: settings.method,
			url: settings.url,
			dataType: "json",
			data: settings.data,
			cache: false,
			success: function() { 
				self.loaded.apply(self, arguments);
			},
			error: function() { 
				self.showError.apply(self); 
			}
		});
	},
	
	// corrects a target style url
	processURL: function(url) {
		var data;
		var substrPosition;
		
		if(url.indexOf("?") >= 0) {
			data = url.substr(url.indexOf("?")+1);
			url = url.substr(0, url.indexOf("?"));
		}
	
		if(url.indexOf("#") >= 0) {
			//IE 7 Bugfix: this browser adds the document url to every anchor link
			substrPosition = url.indexOf('#')+1;
			url = GYG.GYGindow.settings.urlPrefix + url.substr(substrPosition) + GYG.GYGindow.settings.urlSuffix;
		}
		
		return { url: url, data: data };
	},
	
	// error occured while loading
	showError: function(msg, relocate) {
		if(!msg || typeof msg === "object") {
			msg = GYG.translation.GYGindow.error;
		}
		
		this.elements.content.empty().append('<div id="gygindow-status"><img width="32" height="32" src="img/red-cross.gif" /><br /><span>'+msg+'</span></div>');
		this.elements.cancel.val(GYG.translation.GYGindow.ok).show();
		this.elements.confirm.hide();
		this.elements.close.show();
		
		if(relocate != "" && relocate != undefined) {
			this.elements.cancel.unbind("click").click(function(event) { event.preventDefault(); window.location.href=relocate; }).show();
			this.elements.close.unbind("click").click(function(event) { event.preventDefault(); window.location.href=relocate; }).show();
		}
	},
	
	// Successful submitted
	showSuccess: function(msg, relocate) {
		if(!msg) {
			msg = "";
		}
		
		this.elements.content.empty().append('<div id="gygindow-status"><img width="32" height="32" src="img/green-tick.png" /><br /><span>'+msg+'</span></div>');
		this.elements.confirm.val(GYG.translation.GYGindow.ok).show();
		this.elements.cancel.hide();
		var self = this;

		if(relocate != "") {
			this.elements.confirm.unbind("click").click(function(event) { event.preventDefault(); window.location.href=relocate; }).show();
			this.elements.close.unbind("click").click(function(event) { event.preventDefault(); window.location.href=relocate; }).show();
		} else {
			this.elements.close.unbind("click").click(function(event) { event.preventDefault(); self.confirm.apply(self); }).show();
		}
	},
	
	// Relocate when click confirm
	relocateOnConfirm: function(relocate) {
		if(relocate != "") {
			this.elements.confirm.unbind("click").click(function(event) { event.preventDefault(); window.location.href=relocate; }).show();
		}
	},
	
	// loading external ressource ended, show the content
	loaded: function(json) {
		if(json.modal) {
			this.settings.modal = true;
		}
		this.settings.content = json;
		this.processContent();
	},
	
	// ssl content through iframe loaded
	sslLoaded: function(json) {
		if(typeof json == "object") {
			this.loaded(json);
		} else {
			this.showError();
		}
	},
	
	processContent: function() {
		var self = this;
		
		var c = this.settings.content;
		
		if(c.confirm_relocate){
			self.relocateOnConfirm.apply(self, [c.confirm_relocate]);
		}
		
		if(this.settings.modal) {
			this.elements.close.hide();
		}
		
		this.elements.content.empty();
		if(c.content) {
			this.elements.content.append(c.content);
			var form = $("form", this.elements.content).submit(function(event) {
				event.preventDefault();
				self.confirm.apply(self);
			});
			
			form.append('<input type="submit" id="gygindow-submit-form" value="IE dummy" />');
			
			if(form.length && form.attr("action").indexOf("https://") >= 0) {
				if(!document.getElementById('gygindow-ssl-frame')) this.elements.sslFrame = $('<iframe id="gygindow-ssl-frame" name="gygindow-ssl-frame" src="img/blank.gif"></iframe>').appendTo(this.elements.bg);
				form.attr("target", "gygindow-ssl-frame");
			}
			
			$('a[rel*="gygindow"][href]', this.elements.content).click(function(event) { 
				event.preventDefault();
				self.loadContent.apply(self, [{url: $(this).attr("href")}]);
			});
		}
		if(c.title) {
			this.elements.title.text(c.title).show();
		}

		if(this.settings.modal) {
			this.elements.close.hide();
		} else {
			this.elements.close.show();
		}
		
		if(c.confirm) {
			if(typeof c.confirm == "string") {
				var confirmTitle = c.confirm;
				c.confirm = this.settings.content.confirm = {
					title: confirmTitle
				};
			}
			if(c.confirm.title) {
				this.elements.confirm.val(c.confirm.title).show()[0].focus();
			}
		} else {
			this.elements.confirm.val(GYG.translation.GYGindow.ok).show()[0].focus();
		}
		
		if(c.cancel && c.cancel !== false) {
			if(typeof c.cancel == "string") {
				var cancelTitle = c.cancel;
				c.cancel = this.settings.content.cancel = {
					title: cancelTitle
				};
			}
			if(c.cancel.title) {
				this.elements.cancel.val(c.cancel.title);
			}
		} else if(c.cancel === false) {
			this.elements.cancel.hide();
			if(!this.settings.modal) {
				this.elements.close.unbind("click").click(function(event) { event.preventDefault(); self.confirm.apply(self); });
			}
		}
		
		this.elements.buttons.show();
		
		if(c.show_success) {
			if(c.success_message != "") {
				if(c.success_relocate != undefined) {
					self.showSuccess.apply(self, [c.success_message, c.success_relocate]);
				} else {
					self.showSuccess.apply(self, [c.success_message, ""]);
				}
			} else {
				if(c.success_relocate != undefined) {
					self.showSuccess.apply(self, ["", c.success_relocate]);
				} else {
					self.showSuccess.apply(self, ["", ""]);
				}
			}
		}
		
		if(c.show_error) {
			if(c.error_relocate != undefined) {
				self.showError.apply(self, [c.error_message, c.error_relocate]);
			} else {
				self.showError.apply(self, [c.error_message, ""]);
			}
		}
		
		if(c.set_focus != undefined) {
			$("input[name='"+c.set_focus+"']").focus(); 
		}
		
		if(c.load) {
			var obj = {
				content: this.elements.content,
				loadContent: function(settings) {
					self.loadContent.apply(self, [settings]);
				}
			};
			if(typeof this.settings.content.load === "string") {
				eval("this.settings.content.load = "+this.settings.content.load+";");
			}
			this.settings.content.load(obj);
		}
		
	},
	
	// method called when confirm button clicked
	confirm: function() {
		var self = this;
				
		// should we end? ask the handler, else yes
		var end = true;
		
		if(this.settings.content && this.settings.content.confirm && this.settings.content.confirm.handler) {
			var obj = {
				content: this.elements.content,
				loadContent: function(settings) {
					self.loadContent.apply(self, [settings]);
				},
				showError: function(msg) {
					self.showError.apply(self, [msg]);
				},
				showSuccess: function(msg) {
					self.showSuccess.apply(self, [msg]);
				}
			};
			if(typeof this.settings.content.confirm.handler === "string") {
				eval("this.settings.content.confirm.handler = "+this.settings.content.confirm.handler+";");
			}
			end = (this.settings.content.confirm.handler(obj) === false) ? false : true;
		}
				
		// if there's a form in the content, submit the form through gygindow.
		var form = $("form", this.elements.content);
		if(form.length > 0) {
			end = false;
			
			if(form.attr("action").indexOf("https://") === 0) {
				form.unbind("submit").submit();
				if(this.settings.content.allowCancel === false) {
					this.elements.buttons.hide();
					this.elements.close.hide();
				}	
				this.elements.confirm.hide();
				// FIrefox 2 bug, wait 1 millisecond to remove the form, else submit wont work.
				setTimeout(function() {
					self.elements.content.empty().append('<div id="gygindow-status" class="loading"><img width="32" height="32" src="img/spinners/333333-on-ffffff-medium.gif" /><br /><span>'+(self.settings.content.form && self.settings.content.form.loadingTitle ? self.settings.content.form.loadingTitle : GYG.translation.GYGindow.loading)+'…</span></div>');
				}, 1);
			} else {
				this.loadContent({
					data: form.serialize(),
					method: form.attr("method"),
					url: form.attr("action"),
					allowCancel: (this.settings.content.form) ? this.settings.content.form.allowCancel : undefined,
					loadingTitle: (this.settings.content.form) ? this.settings.content.form.loadingTitle : undefined
				});
			}
		}
		
		if(end) {
			this.terminate(true);
		}
	},
	
	cancel: function() {
		// should we end? ask the handler, else yes
		var end = true;
		
		if(this.settings.content && this.settings.content.cancel && this.settings.content.cancel.handler) {
			var obj = {
				content: this.elements.content,
				loadContent: function(settings) {
					self.loadContent.apply(self, [settings]);
				},
				showError: function(msg) {
					self.showError.apply(self, [msg]);
				},
				showSuccess: function(msg) {
					self.showSuccess.apply(self, [msg]);
				}
			};
			if(typeof this.settings.content.cancel.handler === "string") {
				eval("this.settings.content.cancel.handler = "+this.settings.content.cancel.handler+";");
			}
			end = (this.settings.content.cancel.handler(obj) === false) ? false : true;
		}
		if(end) {
			this.terminate(false);
		}
	},
	
	// method called to clean up
	terminate: function(ret) {
		$(document).unbind("keydown", function(event) {
			if(event.keyCode == 27) { // esc
				if(!self.settings.modal) {
					self.cancel.apply(self);
				}
			}
		});
		
		$(window).unbind("scroll", function(event) { 
			event.preventDefault();
		});
		
		if(this.settings.content && this.settings.content.unload) {
			if(typeof this.settings.content.unload === "string") {
				eval("("+this.settings.content.unload+")")(ret);
			} else {
				this.settings.content.unload(ret);
			}
		}

		if(this.settings.callBack) {
			this.settings.callBack(ret);
		}
		this.elements.bg.remove();
		delete GYG.GYGindow.running;

		if(GYG.GYGindow.queue.length) {
			GYG.GYGindow.queue.shift()();
		}
	}
});

/**//**/

GYG.Slideshow = function(items_) {
	/***** SETTINGS *****/
	this.settings = {
		shouldPreload: true
	};
	
	var spinner = new Image();
	spinner.src = "img/spinners/333333-on-ffffff-medium.gif";
	this.imageData = [];
	var self = this;
	
	this.playLink = $("a[href='#slideshow']").click(function(event) {
			event.preventDefault();
			self.startSlideshow.apply(self, [0]);
	});
	
	this.checkForNewPictures(items_);
	
	// if a link to this page contains the hash #slideshow, the slideshow automagicaly starts
	if(window.location.hash == "#slideshow") {
		this.startSlideshow(0);
		window.location.hash = "";
	}
};

// helper function to start a new slideshow object if there's a slideshow picture.
GYG.Slideshow.start = function(force) {
	var slideshowItems = $("a[rel^='slideshow']");
	if(slideshowItems.length || force) {
		GYG.Slideshow.running = new GYG.Slideshow(slideshowItems);
	}
	slideshowItems = null;
};

$.extend(GYG.Slideshow.prototype, {
	checkForNewPictures: function(items_) {
		var self = this;
		items_ = items_ ? items_ : $("a[rel^='slideshow']");
		var src, order, img, imgID;
		
		var newImageData = [];
		
		items_.each(function(i) {
			$this = $(this);
			img = $this.children("img");
			src = img.attr("src");
			order = $this.attr("rel").substr(10);
			imgID = parseInt(src.match(/img-(\d+)-\d+\./)[1], 10);
			
			if(this.slideshowProcessed && self.imageData[order]) {
				newImageData[order] = self.imageData[order];
				newImageData[order].loading = newImageData[order].loaded = undefined;
				return;
			}
			this.slideshowProcessed = true;
			
			newImageData[order] = {
				index: order,
				title: img.attr("title"),
				imgID: imgID
			};
			
			$this.click(function(event) {
				event.preventDefault();
				self.startSlideshow.apply(self, [parseInt($(this).attr("rel").substr(10), 10)]);
			});
			
			// preload the image when hovered, so when slideshow starts no waiting time needed.
			if(self.settings.shouldPreload) {
				$this.bind("mouseenter", function() {
					self.preloadItem.apply(self, [parseInt($(this).attr("rel").substr(10), 10)]);
				});
				self.playLink.bind("mouseenter", function() {
					self.preloadItem.apply(self, [0]);
				});
			}
		});
		
		this.imageData = newImageData;
	},
	preloadItem: function(index) {
		var self = this;
		if(!this.imageData[index].loading) {
			this.imageData[index].img = new Image();
			this.imageData[index].loading = true;
			$(this.imageData[index].img).load(function() { self.imageData[index].loaded = true; });
			
			this.imageData[index].img.src = "img/tour_img-"+this.imageData[index].imgID+"-21.jpg";
		}
	},
	startSlideshow: function(index) {
		var arrowKeyListener = function(event) {
			if(event.keyCode == 37) { // left
				self.goToPrevPicture.apply(self);
				event.stopPropagation();
			} else if(event.keyCode == 39) { // right
				self.goToNextPicture.apply(self);
				event.stopPropagation();
			}
		};
		
		this.GYGindow = new GYG.GYGindow({
			content: {
				content: '<div class="spinner">&nbsp;<img src="img/spinners/333333-on-ffffff-medium.gif" width="32" heigth="32" />&nbsp;</div><div class="img"></div><p class="caption"></p>',
				cancel: GYG.translation.Slideshow.close
			},
			callBack: function() {
				$(document).unbind("keydown", arrowKeyListener);
			}
		});
		this.GYGindow.elements.outerFrame.addClass("slideshow");
		if(this.imageData.length > 1) {
			var count = 
				GYG.translation.Slideshow.count
					.replace(/%1/, '<span id="current-img"></span>')
					.replace(/%2/, this.imageData.length);
			$('<div id="slideshow-controller"><input id="slideshow-prev" type="button" value="&#8592;" /> <span id="slideshow-count">'+count+'</span> <input id="slideshow-next" type="button" value="&#8594;" /></div>').appendTo($(this.GYGindow.elements.buttons).addClass("count"));
		}
		
		var self = this;
		this.GYGindow.elements.outerFrame.click(function(event) { event.stopPropagation(); });
		this.GYGindow.elements.bg.click(function(event) { event.preventDefault(); self.GYGindow.cancel.apply(self.GYGindow); });

		var self = this;
		$("#slideshow-prev").click(function() { self.goToPrevPicture.apply(self); });
		$("#slideshow-next").click(function() { self.goToNextPicture.apply(self); });

		this.goToPicture(index);
		
		// listen to left / right arrow to navigate
		$(document).keydown(arrowKeyListener);
	},
	goToPicture: function(index) {
		var self = this;
		
		var showPicture = function() {
			$(self.imageData[index].img).appendTo($(".img", self.GYGindow.elements.content)).css({
				padding: ((480-self.imageData[index].img.height)/2)+"px "+((640-self.imageData[index].img.width)/2)+"px"
			}).hide().fadeIn("fast");
		};
		
		var showAlreadyLoadedPicture = function() {
			$(self.imageData[index].img).appendTo($(".img", self.GYGindow.elements.content)).css({
				padding: ((480-self.imageData[index].img.height)/2)+"px "+((640-self.imageData[index].img.width)/2)+"px"
			}).hide().fadeIn("fast", function() { $(this).prev().remove(); });
		};
		
		if(!this.imageData[index].loaded) {
			$(".spinner", self.GYGindow.elements.content).show();
			$(".img", self.GYGindow.elements.content).children().fadeOut("fast");
			if(!this.imageData[index].loading) {
				this.preloadItem(index);
			}
			$(this.imageData[index].img).load(showPicture);
		} else {
			$(".spinner", self.GYGindow.elements.content).hide();
			showAlreadyLoadedPicture();
		}
		
		var caption = this.imageData[index].title;
		if(caption.match(/^\s*$/)) {
			$(".caption", this.GYGindow.elements.content).addClass("no").text(GYG.translation.Slideshow.nodesc);
		} else {
			$(".caption", this.GYGindow.elements.content).removeClass("no").text(caption);
		}
		$("#current-img").text(index+1);
		
		// preload prev and next image and show hide equivalent buttons
		if(index == 0) {
			$("#slideshow-prev").css("visibility", "hidden");
		} else {
			if(this.settings.shouldPreload) {
				this.preloadItem(index-1);
			}
			$("#slideshow-prev").css("visibility", "");
		}
		if(index == this.imageData.length-1) {
			$("#slideshow-next").css("visibility", "hidden");
		} else {
			if(this.settings.shouldPreload) {
				this.preloadItem(index+1);
			}
			$("#slideshow-next").css("visibility", "");
		}
		this.currentIndex = index;
	},
	goToNextPicture: function() {
		if(this.currentIndex == this.imageData.length-1) { return; }
		$(".img img", this.GYGindow.elements.content).addClass("old");
		this.goToPicture(this.currentIndex+1);
	},
	goToPrevPicture: function() {
		if(this.currentIndex == 0) { return; }
		$(".img img", this.GYGindow.elements.content).addClass("old");
		this.goToPicture(this.currentIndex-1);
	}
});

/**//**/

GYG.BiggerMap = function(center, zoom) {
	var self = this;
	var GYGindow, gMapObj;
	
	var initialize = function() {
		// show gygindow
		GYGindow = new GYG.GYGindow({
			content: {
				content: '<div class="spinner">&nbsp;<img src="image/loader.gif" width="32" heigth="32" />&nbsp;</div><div class="map"></div>',
				cancel: GYG.translation.Slideshow.close
			},
			callBack: mapWasClosed
		});
		GYGindow.elements.outerFrame.addClass("slideshow");
		
		GYGindow.elements.outerFrame.click(function(event) { event.stopPropagation(); });
		GYGindow.elements.bg.click(function(event) { event.preventDefault(); GYGindow.cancel.apply(GYGindow); });
		
		if(!GYG.config.googleMapsLoaded) {
			// load the google maps script
			window.GMapLoaded = function() {
				GYG.config.googleMapsLoaded = true;
				initializeMap.apply(self);
			};
			$.getScript("http://maps.google.com/maps?file=api&v=2&async=2&callback=GMapLoaded&hl="+$("html").attr("lang")+"&key="+GYG.config.googleKey);
		} else {
			initializeMap();
		}
	};
	
	var initializeMap = function() {
		var centerLatLng = new GLatLng(parseFloat(center[0]),parseFloat(center[1]));
		gMapObj = new GMap2($("#gygindow-content .map")[0], { size: new GSize(640, 480) });
		gMapObj.setCenter(centerLatLng);
		gMapObj.setZoom(parseInt(zoom, 10));
		var marker = new GMarker(centerLatLng, { icon: GYG.DefaultGMarkerIcon() });
		gMapObj.addOverlay(marker);
		gMapObj.enableContinuousZoom();
		
		var customUI = gMapObj.getDefaultUI();
		customUI.maptypes.hybrid = false;
		gMapObj.setUI(customUI);
		gMapObj.enableContinuousZoom();
		$(window).unload(GUnload);
	};
	
	var mapWasClosed = function() {
		
	};
	
	initialize();
};

$(document).ready(function() {
	if((document.body.id == "create" && document.body.className == "step6") || document.body.id == "tour-edit")
	$("a[href^='#biggermap']").click(function(event) {
		event.preventDefault();
		var href = $(this).attr("href");
		new GYG.BiggerMap(href.match(/center=(-?\d*\.?\d*),(-?\d*\.?\d*)/).slice(1), href.match(/zoom=(\d*)/)[1]);
	});
});

/**//**/

GYG.textShadow = function(element, offsetX, offsetY, opacity) {
	var c = element.css("color");
	var p = element.css("position");
	if(p != "fixed" && p != "absolute" && p != "relative") {
		element.css("position", "relative");
		if($.browser.msie && $.browser.version < 8)
			offsetY+=2;
	}
	element
		.wrapInner("<span></span>")
		.prepend(element.html())
		.children(":first-child")
			.css({
				position: "absolute",
				top: offsetY+"px",
				left: offsetX+"px",
				opacity: opacity,
				color: (c == "#000" || c == "#000000" || c == "black") ? "#fff" : "#000"
			})
			.end()
		.children(":last-child")
			.css("position", "relative");
};

$(document).ready(function() {
	var e = $(".textshadow");
	if(e.length > 0) {
		var needs = true;
		try {
			var s = $(e[0]).css("text-shadow");
			if(s && s != "")
				needs = false;
		} catch(er) {}
		
		if(needs) {
			e.each(function() {
				GYG.textShadow($(this), 0, 1, .75);
			});
		}
	}
});

/**//**/

GYG.TextFieldCounter = function() {
	var self = this;
	
	var init = function() {
		$("p.counter").remove();
		var $textareas = $("textarea[class*='maxlength_'].counter");
		if($textareas.length) {
			$textareas.each(function() {
				$this = $(this);
				if($this.val() != "") {
					startLimit.apply(self, [$this, parseInt($this.attr("class").match(/maxlength_(\d+)/)[1], 10)]);
				} else {
					$this.one("focus", function() {
						$this = $(this);
						startLimit.apply(self, [$this, parseInt($this.attr("class").match(/maxlength_(\d+)/)[1], 10)]);
						$this.focus();
					});
				}
			});
			new GYG.TextAreaLimit();
		}
		
		$("input[maxlength].counter").each(function() {
			$this = $(this);
			if($this.val() != "") {
				startLimit.apply(self, [$this, parseInt($this.attr("maxlength"), 10)]);
			} else {
				$this.one("focus", function() {
					$this = $(this);
					startLimit.apply(self, [$this, parseInt($this.attr("maxlength"), 10)]);
					$this.focus();
				});
			}
		});
	};
	
	var startLimit = function($el, maxlength) {
		var $counter = $('<p class="counter">'+GYG.translation.TextFieldCounter.message.replace(/%1/, maxlength-$el.val().length)+'</p>');
		
		$el.after($counter);
		
		$el.bind("keyup keydown", function() {
			$counter.text(GYG.translation.TextFieldCounter.message.replace(/%1/, maxlength-this.value.length));
		});
	};
	
	init();
};

GYG.TextAreaLimit = function() {
	var self = this;
	
	var init = function() {
		$("textarea[class*='maxlength_']").each(function() {
			$this = $(this);
			$this.one("focus", function() {
				$this = $(this);
				startLimit.apply(self, [$this, parseInt($this.attr("class").match(/maxlength_(\d+)/)[1], 10)]);
			});
		});
	};
	
	var startLimit = function($el, maxlength) {
		$el.keyup(function(event) {
			if(this.value.length > maxlength) {
				this.value = this.value.substr(0, maxlength);
				$(this).keyup();
			}
		});
		$el.keydown(function(event) {
			if(this.value.length >= maxlength) {
				
				if(
					(
						event.keyCode != 8 && // backspace
						event.keyCode != 46 && // delete
						event.keyCode != 37 && // left
						event.keyCode != 38 && // up
						event.keyCode != 39 && // right
						event.keyCode != 40 && // down
						!event.metaKey &&
						!event.ctrlKey
					) ||
					(
						// no pasting (cmd + v or ctrl + v)
						(event.metaKey || event.ctrlKey) &&
						event.keyCode == 86
					)
				) {
					event.preventDefault();
				}
			}
		});
	};
	
	init();
};

/**//**/

GYG.DropDown = function() {
	var self = this;
	
	var init = function() {
		$(".drop-down span")
		.click(function() {
			var li = $(this).parent();
			if($("ul", li).is(":hidden")) {
				// hide all others
				$('.drop-down.active').removeClass('active');

				li.addClass("active");
				$('.drop-down.active').show();
			} else {
				li.removeClass("active");
			}
		})
		.hover(
			function() {
				var li = $(this).parent();
				if($("ul", li).is(":hidden"))
					window.DropDownTimeout = setTimeout(function() {
						li.addClass("active");
					}, 750);
			},
			function(){
				if(window.DropDownTimeout)
					clearTimeout(window.DropDownTimeout);
			}
		);
		
		$(".drop-down")
		.hover(
			function() {
				if(window.DropDownTimeout2)
					clearTimeout(window.DropDownTimeout2);
			},
			function() {
				var li = this;
				window.DropDownTimeout2 = setTimeout(function() {
					$(li).removeClass("active");
				}, 500);
			}
		);
	};
	
	init();
};

/**//**/

GYG.NarrowDownBox = function() {
	// =========================
	// = VARIABLES DECLARATION =
	// =========================
	var self = this;
	// the delegate which helps us
	var _delegate;
	// errors
	var _errors = {
		'No Selector': 'No selector for the wrapper element specified.',
		'No Element': 'No element found with the specified selector.',
		'No Delegate': 'No delegate was specified which handles the events.',
		'No Methods': 'Not all required delegate methods were implemented by this delegate.',
		'No Strings': 'No strings were provided to show as info text and no results text.'
	};
	// the narrowdownbox wrapper div
	var _$wrapper, _$list, _$input;
	
	// specifies if the box is active, i.e. open
	var _isOpen = false;
	
	// the index of the currently highlighted item when navigating with arrow keys.
	// -1 means nothing is selected
	var _selectedItemIndex = -1;
	// number of items in list
	var _$listItems;
	// last filtered text
	var _lastFilter = '', _nextFilter = '';
	
	// no results message
	var _$noResultsMessage;
	
	// timeout for filter to fire inly when stopping to type
	var filterTimeout;
	
	// ===================
	// = PRIVATE METHODS =
	// ===================
	
	var initialize = function(options) {
		// get the wrapper div
		try {
			if(options.delegate === undefined)
				throw new GYG.DEV.Error(_errors['No Delegate']);
			
			if(options.delegate.itemSelectedWithIndex === undefined || typeof options.delegate.itemSelectedWithIndex !== 'function'
			|| options.delegate.filterWithString === undefined || typeof options.delegate.filterWithString !== 'function')
				throw new GYG.DEV.Error(_errors['No Methods']);
				
			if(options.noResultsMessage === undefined || typeof options.noResultsMessage !== 'string'
			|| options.textFieldPlaceholder === undefined || typeof options.textFieldPlaceholder !== 'string')
				throw new GYG.DEV.Error(_errors['No Strings']);
			
			if(options.selector === undefined)
				throw new GYG.DEV.Error(_errors['No ID']);
				
			_$wrapper = $(options.selector);
			if(_$wrapper.length != 1)
				throw new GYG.DEV.Error(_errors['No Element']);

		} catch(error) {
			GYG.DEV.showError(error);
			return new Boolean(false);
		}
		
		_delegate = options.delegate;
		
		buildHTML(options.noResultsMessage, options.textFieldPlaceholder);
		
		if(_delegate.initializeAsDelegate) _delegate.initializeAsDelegate(self, self.listItems());
		
		updateListItems();
		
		setupEventHandlers();
		
		return self;
	};
	
	var buildHTML = function(noResultsMessage, textFieldPlaceholder) {
		_$wrapper
			.wrapInner('<div class="list"></div>')
			.prepend('<div class="form"><span class="ndb-button"></span><input type="text" class="placeholder" /></div>');
		
		_$wrapper.find('input').attr('title', textFieldPlaceholder);
		
		_$noResultsMessage = $('<div class="no-results"></div>');
		_$noResultsMessage.text(noResultsMessage);
			
		_$input = _$wrapper.find('input');
		// initiate textfield as placeholder field
		GYG.PlaceHolder();
		
		_$list = _$wrapper.find('.list');
	};
	
	var setupEventHandlers = function() {
		// hover effect on list items
		_$list.children().children('li').hover(
			function() {
				if(_$listItems.length <= 1) return; // when only one item is visible it will always be selected
				removeSelection.apply(self);
				$(this).addClass('active');
			},
			function() {
				if(_$listItems.length <= 1) return; // when only one item is visible it will always be selected
				$(this).removeClass('active');
			}
		)
		.click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			$this = $(this);
			var index = $this.parent().children().index($this) - $this.prevAll('.hidden').length;
			confirmSelection.apply(self, [index]);
		});
		
		// show dropdown when focusing the textfield
		_$input.focus(function() {
			if(!_isOpen)
				activate.apply(self);
		});
		
		// show when clicking on the wrapper
		_$wrapper.click(function() {
			_$input.focus();
		});
		
		// close when clicking outside
		$(document).click(function(e) {
			var closest = $(e.target).closest('.narrowdownbox');
			if(_isOpen && (closest.length == 0 || (closest[0] !== _$wrapper[0]))) {
				deactivate.apply(self);
			}
		});
		
		// button to show / hide
		_$wrapper.find('.ndb-button').click(function(event) {
			if(_isOpen) {
				event.stopPropagation();
				deactivate.apply(self);
			}
		});
		
		// set up keyboard navigation
		$(document).keydown(function(event) {
			if(!_isOpen) return;
			/*
			 * 38: up
			 * 40: down
			 * 13: return
			 * 27: escape
			 */
			switch(event.keyCode){
			case 38:
				moveSelectionUp.apply(self);
				break;
			case 40:
				moveSelectionDown.apply(self);
				break;
			case 13:
				if(_selectedItemIndex >= 0)
					confirmSelection.apply(self);
				break;
			case 27:
				deactivate.apply(self);
				break;
			default:
				return;
			}

			event.preventDefault();
			event.stopPropagation();
		});
		
		// set up type to filter
		_$input.keyup(function() {
			filter.apply(self);
		});
	};
	
	// updates the the variable holding the list items to the visible items in the list
	var updateListItems = function() {
		_$listItems = _$list.children().children(':not(.hidden)');
	};
	
	var activate = function() {
		_isOpen = true;
		_$wrapper.addClass('active');
		if(_$listItems.length == 1) 
			moveSelectionDown();
		if(_$listItems.length > 0)
			_$list.slideDown(150, 'swing');
	};
	
	var deactivate = function() {
		_$list.fadeOut(50, function() {
			filter.apply(self, ['']);
		});
		_$input.val('');
		_$input.blur();
		_isOpen = false;
		_$wrapper.removeClass('active');
		removeSelection();
	};
	
	// keyboard navigation:
	// when pressing up arrow
	var moveSelectionUp = function() {
		if(_$listItems.length === 0) return;
		// when first or none is selected, move to last
		if(_selectedItemIndex == 0 || _selectedItemIndex == -1) {
			_$listItems.eq(_selectedItemIndex).removeClass('active');
			_selectedItemIndex = _$listItems.length-1;
			_$listItems.eq(_selectedItemIndex).addClass('active')[0].scrollIntoView();
		}
		// else just move to prev one
		else {
			_$listItems.eq(_selectedItemIndex).removeClass('active');
			var x = _$listItems.eq(--_selectedItemIndex).addClass('active')[0];
			if(x.scrollIntoViewIfNeeded)
				x.scrollIntoViewIfNeeded();
			else
				x.scrollIntoView();
		}
	};
	// when pressing down arrow
	var moveSelectionDown = function() {
		if(_$listItems.length === 0) return;
		// when last or none is selected, move to first
		if(_selectedItemIndex == _$listItems.length-1 || _selectedItemIndex == -1) {
			_$listItems.eq(_selectedItemIndex).removeClass('active');
			_selectedItemIndex = 0;
			_$listItems.eq(_selectedItemIndex).addClass('active')[0].scrollIntoView();
		}
		// else just move to prev one
		else {
			_$listItems.eq(_selectedItemIndex).removeClass('active');
			var x = _$listItems.eq(++_selectedItemIndex).addClass('active')[0];
			if(x.scrollIntoViewIfNeeded)
				x.scrollIntoViewIfNeeded();
			else
				x.scrollIntoView(false);
		}
	};
	// removes the selection
	var removeSelection = function() {
		_$listItems.removeClass('active');
		_selectedItemIndex = -1;
	};
	// confirm selection on enter
	var confirmSelection = function(index) {
		if(_$listItems.length === 0) return;
		index = index !== undefined ? index : _selectedItemIndex;
		_delegate.itemSelectedWithIndex(self, index);
		deactivate();
	};
	
	// when filtering too much we show a message
	var showNoResultsMessage = function() {
		_$noResultsMessage.appendTo(_$list);
	};
	// remove that message
	var hideNoResultsMessage = function() {
		_$noResultsMessage.remove();
	};
	
	// textfield changed so we have to change the filter
	var filter = function(filter) {
		var newFilter = filter !== undefined ? filter : $.trim(_$input.val());
		if(newFilter != _nextFilter) {
			var timeout;
			if(newFilter.length === 0) {
				timeout = 0;
			} else {
				timeout = 500 - newFilter.length * 100;
				if(timeout < 0) timeout = 0;
			}
			
			if(filterTimeout) {
				clearTimeout(filterTimeout);
			}
			_nextFilter = newFilter;
			
			filterTimeout = setTimeout(function() {
				if(_nextFilter === _lastFilter) return;
				_lastFilter = _nextFilter;
				_delegate.filterWithString(self, _nextFilter);
				self.listWasUpdated.apply(self);
			}, timeout);
		}
	};
	
	// ==================
	// = PUBLIC MEHTODS =
	// ==================
	this.listWasUpdated = function() {
		removeSelection();
		updateListItems();
		if(_$listItems.length === 0) {
			showNoResultsMessage();
		} else {
			hideNoResultsMessage();
			if(_$listItems.length === 1) {
				moveSelectionDown();
			}
		}
	};
	
	this.listItems = function() {
		return _$list.children().children();
	};
	
	// call initialization
	return initialize.apply(self, arguments);
};

/**//**/

GYG.PlaceHolder = function() {
	$("input[type='text'].placeholder, textarea.placeholder").each(function() {
		var $this = $(this);
		if($this.attr('placeholder')) return;
		
		$this.attr("placeholder", $this.attr("title")).removeAttr("title");
		
		// safari has built in support for placeholders
		if($.browser.safari && $this[0].tagName.toLowerCase() == "input") {
			$this.removeClass("placeholder");
			return;
		}
		
		var val = $this.val();
		if($.trim(val) === "" || val === $this.attr("placeholder")) {
			$this.val($this.attr("placeholder")).addClass("placeholder");
		} else {
			$this.removeClass("placeholder");
		}
		
		$this.focus(function() {
			var $this = $(this);
			if($this.hasClass("placeholder")) {
				$this.val("").removeClass("placeholder");
			}
		});
		$this.blur(function() {
			var $this = $(this);
			var val = $this.val();
			if($.trim(val) === "" || val === $this.attr("placeholder")) {
				$this.val($this.attr("placeholder")).addClass("placeholder");
			}
		});
	});
};

$(document).ready(GYG.PlaceHolder);

/**//**/

// tooltip
GYG.createTooltip = function(elmts) {
	var $elmts = $(elmts);
	$elmts.each(function() {
		var $el = $(this);
		var $b = $(".ttip-button", $el);
		var c = $(".ttip-content", $el).html();
		var options = {
			onBeforeShow: function() {
				var t = this.getTooltip();
				t.appendTo($el);
			},
			fixed: false,
			content: c,
			showTime: 50,
			hideTime: 50,
			offset: [8,12]
		};
		$b.simpletip(options);
	});
};

$(document).ready(function() {
	
	// add our own marker to the static map
	$("#create.step6 #map, #tour-edit #map").append('<span id="map-dot"></span>');
	
	// need inner span for arrow image on black buttons
	$(".black-button").wrapInner('<span></span>');
	
	var buttonsCount = $('input[type="button"], input[type="submit"], input[type="image"], input[type="reset"], .button').length;
	if(buttonsCount > 0) {
		GYG.ImagePreloader.load(['button_hover_black.png','button_pressed_black.png','button_hover_green.png','button_pressed_green.png'], false);
	}
	
	//dropdown header
	GYG.headerNavDropdown = function(type) {
		$("#"+type+"-dropdown-list").appendTo("#"+type+"-dropdown");
		var $DD = $("#"+type+"-dropdown");
		$("a:first-child", $DD).hover(
			function() {
				if($("ul", $DD).is(":hidden")) $DD.addClass("active");
			},
			function(){}
		);
		$DD.hover(
			function() {},
			function() {
				if($DD.hasClass("active")) $DD.removeClass("active");
			}
		);
		$("a", $DD).click(function(){
			$DD.removeClass("active");
		});
	};
	GYG.headerNavDropdown("des");
	GYG.headerNavDropdown("cat");
	
	// preload ajax error gif
	GYG.ImagePreloader.load(['red-cross.gif'], false);
	
	// Autocomplete Options
	var acCache = {};
	var acIsCached = false;
	var acAjax = function(request, response) {
			$.ajax({
			url: "/ajax/location_suggest.php",
			dataType: "json",
			type: "POST",
			data: {
				query: request.term.substr(0,1)
			},
			success: function(data) {
				acCache.term = request.term.substr(0,1).toLowerCase();
				acCache.content = data;
				acIsCached = true;
				response(data);
			}
		});
	};
	var acOptions = {
		minLength: 1,
		delay: 20,
		source: function(request, response) {
			if(acIsCached) {
				if (acCache.term == request.term.substr(0,1).toLowerCase() && acCache.content) {
					//var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
					var matcher = function(value) {
						var length = request.term.length;
						if(value.substr(0,length).toLowerCase() == request.term.toLowerCase())
							return true;
						else
							return false;
					};
					response($.grep(acCache.content, function(value) {
	    				//return matcher.test(value);
						return matcher(value);
					}));
				} else {
					acIsCached = false;
					acAjax(request, response);
				}
			} else {
				acAjax(request, response);
			}
		}
	};
	
	/**** Submit SEARCH ****/
	var submitSearch = function($el) {
		var localeHost = $el.attr("action");
		var $what = $("input[name='what']", $el),
			$where = $("input[name='where']", $el),
			query = [],
			what = $what.val(),
			where = $where.val();
		if(what != "") {
			what = GYG.decodeURL(what, 'encode');
			query.push("what="+what);
		}
		if(where != "") {
			where = GYG.decodeURL(where, 'encode');
			query.push("where="+where);
		}
		if(query.length) {
			window.location.href = localeHost+"#"+query.join("&");
		}
	};
	
	// Search im header
	if($("#head-search").length) {
		// init autocomplete
		$("#head-search input[name='where']").autocomplete(acOptions);
		$("#head-search-submit").click(function(event){
			event.preventDefault();
			$("form#head-search").submit();
		});
		$("form#head-search").submit(function(event) {
			event.preventDefault();
			submitSearch($(this));
			// close autocomplete
			$("#head-search input[name='where']").autocomplete( "close" );
		});
	}
	
	//world map and Carousel Index
	if($("#index").length) {
		var $map = $("map[name='world-image-map']");
		var $world = $("#world");
		var continent = "";
		
		$("area", $map).hover(function() {
			continent = $(this).attr("id").substr(4);
			$world.attr("class", continent);
		},function() {
			continent = "";
			$world.attr("class", "");
		});
		
		$("#carousel").jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			auto: 6000,
			speed: 400,
			start: GYG.index_carousel_start
		});
	}
	
	// pages where the slideshow object creation is forced
	// e.g. pages where images will appear only after certain actions
	var force = $("#create.step5").length;
	GYG.Slideshow.start(force);
	
	if($("#static-pages-menu").length || $("#allready-visited").length || $("#shopping-cart").length || $("#location-menu").length || $("#index").length) {
		GYG.createTooltip($("#recently-list .r-tour"));
	}
	if($("#supplier-details").length) {
		GYG.createTooltip($("#tours-of-supplier .tour"));
	}
	
	$(".r-close").click(function(event) {
		event.preventDefault();
		var $tour = $(this).closest('.r-tour');
		var tourId = $tour.attr("id").substr(2);
		var c = $.cookie('recently_visited');
		var reg = new RegExp("(^|,)"+tourId+"($|,)","g")
		var c = c.replace(reg, ',').replace(/(^,)|(,$)/,'');
		$tour.fadeOut('fast', function() {
			$(this).remove();
			if($(".r-tour").size() == 0) {
				$("#recently-visited-products").remove();
			}
		});
		$.cookie('recently_visited', c, { path: '/' });
		
	});
});

GYG.DefaultGMarkerIcon = function() {
	if(GIcon && G_DEFAULT_ICON) {
		return $.extend(G_DEFAULT_ICON, {
			image: "images/map-point.png",
			iconSize: new GSize(19, 19),
			shadow: undefined,
			shadowSize: new GSize(0, 0),
			iconAnchor: new GPoint(10, 10)
		});
	} else
		return undefined;
};

// argument 1: css selector or jQuery object
// argument 2: object with variables for "duration" and "color"
GYG.flashElement = function($e, options) {
	$e = $($e);
	options = $.extend({
		duration: 1500,
		color: "#FDF285",
		noOldBG: false
	}, options);
	
	$e.each(function() {
		$this = $(this);
		var oldBG, $elem = $this;
		
		// get color. if color is transparent, get parent's color and so on.
		do {
			oldBG = $elem.css("background-color");

			// Keep going until we find an element that has color, or we hit the body
			if (oldBG != '' && oldBG != 'transparent' && oldBG != 'rgba(0, 0, 0, 0)') {
				break;
			} else if($elem[0]===document.body) {
				oldBG = false;
				break;
			}

		} while ($elem = $elem.parent());
		
		if(options.noOldBG) {
			oldBG = false;
		}
		
		$this.css("background-color", options.color);
		if(oldBG)
			$this.animate({ backgroundColor: oldBG }, options.duration);
		else
			$this.animate({ backgroundColor: "#fff" }, options.duration, "linear", function() {
				$(this).css("background-color", "transparent");
			});
	});
};

// prints the support email
GYG.printEmail = function(account) {
	if(!account) account = "support";
	var a="bookyourtout",b="com",c=account+"@"+a+"."+b;
	document.write('<a class="mail-link" href="mailto:'+c+'">'+c+'</a>');
};

// links with js
GYG.linkTo = function(url) {
	document.location.href = url;
}

/**//**/

GYG.Manage = function() {
	this.init();
};

$.extend(GYG.Manage.prototype, {
	filter: '',
	init: function() {
		var self = this;
		
		// Global Filter Variable
		this.filter = "all";
		
		new GYG.DropDown();
		
		self.showCount.apply(self);
		
		// Filter Tours
		if($("li.tours").size() == 0) {
			$("#no-results").show();
			$("#no-tours-yet").show();
		} else {
			$("#no-results").hide();
			$("#filter-matched-no-tours").show();
			self.filterTours.apply(self);
			self.sortTours.apply(self);
			self.findToursByTitle.apply(self);
			self.triggerDeleteTour.apply(self);
			self.triggerEditStatus.apply(self);
			self.triggerFreeSale.apply(self);
		}
	},
	
	triggerDeleteTour: function() {
		var self = this;
		
		$("a[href='#delete']").click(function(event) {
			event.preventDefault();
			var $li = $(this).parents("li");
			self.confirmTourDelete.apply(self, [$li.attr("id").replace(/t/, ''), 'delete', $(".tour-picture", $li).attr("src").match(/img-([^-]+)-\d+./)[1]]);
		});
	},
	triggerFreeSale: function() {
		var self = this;
		$("a[href='#enable-free-sale']").unbind();
		$("a[href='#disable-free-sale']").unbind();
		
		$("a[href='#enable-free-sale']").click(function(event) {
			event.preventDefault();
			var $li = $(this).parents("li");
			self.confirmEditFreeSaleStatus.apply(self, [$li.attr("id").replace(/t/, ''), 'enable', $(".tour-picture", $li).attr("src").match(/img-([^-]+)-\d+./)[1]])
		});
		
		$("a[href='#disable-free-sale']").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var $li = $(this).parents("li");
			self.editFreeSaleStatus.apply(self, [$li.attr("id").replace(/t/, ''), 'disable', $(".tour-picture", $li).attr("src").match(/img-([^-]+)-\d+./)[1]])
		});
	},
	triggerEditStatus: function() {
		var self = this;
		$("a[href='#deactivate']").unbind();
		$("a[href='#activate']").unbind();
		
		$("a[href='#deactivate']").click(function(event) {
			event.preventDefault();
			var $li = $(this).parents("li");
			self.confirmTourDeactivate.apply(self, [$li.attr("id").replace(/t/, ''), 'deactivate', $(".tour-picture", $li).attr("src").match(/img-([^-]+)-\d+./)[1]]);
		});
		$("a[href='#activate']").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var $li = $(this).parents("li");
			self.editTourStatus.apply(self, [$li.attr("id").replace(/t/, ''), 'activate', $(".tour-picture", $li).attr("src").match(/img-([^-]+)-\d+./)[1]]);
		});
	},
	
	confirmTourDelete: function(id, action, picID) {
		var self = this;
		GYG.GYGindow.confirm({
			title:   GYG.translation.Manage.deleteConfirmTitle,
			message: '<img src="img/tour_img-'+picID+'-8.jpg" width="55" height="55" />'+GYG.translation.Manage.deleteConfirmMessage.replace(/%1/, "<strong>"+$("#t"+id).find("h3 span:not(.fs)").text()+"</strong>"),
			confirm: GYG.translation.Manage.deleteConfirmConfirm,
			cancel:  GYG.translation.Manage.deleteConfirmCancel,
			callBack: function(shouldDelete) {
				if(shouldDelete) self.editTourStatus.apply(self, [id, action]);
			}
		});
	},	
	confirmTourDeactivate: function(id, deactivate, picID) {
		var self = this;
		GYG.GYGindow.confirm({
			title:   GYG.translation.Manage.deactivateConfirmTitle,
			message: '<img src="img/tour_img-'+picID+'-8.jpg" width="55" height="55" />'+GYG.translation.Manage.deactivateConfirmMessage.replace(/%1/, "<strong>"+$("#t"+id).find("h3 span:not(.fs)").text()+"</strong>"),
			confirm: GYG.translation.Manage.deactivateConfirmConfirm,
			cancel:  GYG.translation.Manage.deactivateConfirmCancel,
			callBack: function(shouldDelete) {
				if(shouldDelete) self.editTourStatus.apply(self, [id, deactivate]);
			}
		});
	},
	confirmEditFreeSaleStatus: function(id, enable, picID) {
		var self = this;
		GYG.GYGindow.confirm({
			title:   GYG.translation.Manage.freeSaleConfirmTitle,
			message: '<img src="img/tour_img-'+picID+'-8.jpg" width="55" height="55" />'+GYG.translation.Manage.freeSaleConfirmMessage.replace(/%1/, "<strong>"+$("#t"+id).find("h3 span:not(.fs)").text()+"</strong>"),
			confirm: GYG.translation.Manage.freeSaleConfirmConfirm,
			cancel:  GYG.translation.Manage.freeSaleConfirmCancel,
			callBack: function(shouldDelete) {
				if(shouldDelete) self.editFreeSaleStatus.apply(self, [id, enable]);
			}
		});
	},
	
	editTourStatus: function(id, action) {
		var self = this;
		
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/product_edit.php",
			data: {
				field: "tour_user_status",
				action: action,
				tour_id: id
			},
			dataType: "json",
			success: function(data) {
				if(data.success) {
					if(data.action == 'delete') {
						self.removeTour.apply(self, [data.tour_id]);
					} else {
						var $li = $("li#t"+data.tour_id);
						if(data.action == 'activate') {
							var indicator = $("span.status-deactivated", $li);

							indicator.removeClass("status-deactivated").addClass("status-active");
							if($li.is(".gyg_new")) {
								$("div.info", $li).html(GYG.translation.Manage.statusNewInfoText.replace(/%1/g, "<strong>").replace(/%2/g, "</strong>"));
								indicator.text(GYG.translation.Manage.statusNew);
							} else {
								$li.removeClass("status_inactive").addClass("status_active");
								$("div.info", $li).remove();
								if(!$("#availability-error").length) {
									$("h3", $li).removeClass("no-bottom-border");
								}
								indicator.text(GYG.translation.Manage.statusActive);
							}
							$("#availability-error").removeClass("hidden");
							$("a[href='#activate']", $li).attr("href", "#deactivate").text(GYG.translation.Manage.activate);

						} else if(data.action == 'deactivate') {
							var indicator = $("span.status-active", $li);
							var deactivatedText = GYG.translation.Manage.statusDeactivatedInfoText.replace(/%1/g, "<strong>").replace(/%2/g, "</strong>");

							$li.removeClass("status_active").addClass("status_inactive");
							indicator.removeClass("status-active").addClass("status-deactivated");
							indicator.text(GYG.translation.Manage.statusDeactivated);
							if($li.is(".gyg_new")) {
								$("div.info", $li).html(deactivatedText);
							} else {
								var info = "<div class='info'>"+deactivatedText+"</div>";
								$("h3", $li).addClass("no-bottom-border");
								$("h3", $li).after(info);
							}
							$("#availability-error").addClass("hidden");
							$("a[href='#deactivate']", $li).attr("href", "#activate").text(GYG.translation.Manage.deactivate);
						}
						self.triggerEditStatus.apply(self);
						self.showCount.apply(self);
						$("#spinner").hide();
					}
				} else {
					$("#spinner").hide();
					self.showGYGindowError.apply(self);
				}
			},
			error: function() { 
				$("#spinner").hide();
				self.showGYGindowError.apply(self);
			}
		});
	},
	editFreeSaleStatus: function(id, action) {
		var self = this;
		
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/product_edit.php",
			data: {
				field: "free_sale",
				action: action,
				tour_id: id
			},
			dataType: "json",
			success: function(data) {
				if(data.success) {
					var $li = $("li#t"+data.tour_id);
					if(data.action == 'enable') {
						$(".enable-free-sale:not(.hidden)", $li).addClass("hidden");
						$(".free-sale.hidden", $li).removeClass("hidden");
					} else if(data.action == 'disable') {
						$(".enable-free-sale.hidden", $li).removeClass("hidden");
						$(".free-sale:not(.hidden)", $li).addClass("hidden");
					}
					$("#spinner").hide();
				} else {
					$("#spinner").hide();
					self.showGYGindowError.apply(self);
				}
			},
			error: function() { 
				$("#spinner").hide();
				self.showGYGindowError.apply(self);
			}
		});
	},
	removeTour: function(id) {
		var self = this;
		
		$("#t"+id).fadeOut("slow", function() {
			$("#t"+id).remove();
			if($("li.tours").size() == 0) {
				$("#filter-matched-no-tours").hide();
				$("#no-results").show();
				$("#no-tours-yet").show();
			}
			self.showCount.apply(self);
		});
	},
	
	filterTours: function() {
		var self = this;
		$("#filter a").each(function() {
			var $this = $(this);
			$this.click(function(event) {
				$("#spinner").show();
				event.preventDefault();
				$("li.selected", $(this).parent().parent()).removeClass("selected");
				$(this).parent().addClass("selected");
				self.filter = $this.attr("href").replace(/#/, '');
				self.showFilteredTours.apply(self);
			});
		});
	},
	showFilteredTours: function() {
		var self = this;
		var $tours = $("#tours");
		
		$tours.fadeOut("fast", function() {
			$("li.tours", $tours).hide();
			$("li.tours.search", $tours).removeClass("search");
			$("#no-results", $tours).hide();
			$("li#no-tours:not(.hidden)", $tours).addClass("hidden");
			if(self.filter != 'all') {
				$("li.tours.status_"+self.filter, $tours).show();
				$("li.tours.status_"+self.filter+":not(.search)", $tours).addClass("search");
			} else {
				$("li.tours", $tours).show();
				$("li.tours:not(.search)", $tours).addClass("search");
			}
			$tours.show();
			if($("li.tours:visible", $tours).size() == 0) {
				$("#no-results", $tours).show();
			}
			// reset Search
			$("form#quicksearch").remove();
			self.findToursByTitle.apply(self);
			$("#spinner").hide();
		});
	},
	sortTours: function() {
		var self = this;
		
		// Title alpabetic A-Z
		$("#sort-tu").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var startArray = new Array();
			
			$(this).parent().parent().attr("class", "tu");
			
			$("li.tours").each(function() {
				var $this = $(this);
				var text = $("h3 span", $this).text().toLowerCase();
				startArray.push(text+"_:tid:_"+parseInt($this.attr("id").match(/t(\d+)/)[1] ,10));
			});
			startArray.sort();
			self.generateSortedOutput.apply(self, [startArray]);
		});
		
		// Title alpabetic Z-A
		$("#sort-td").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var startArray = new Array();
			$(this).parent().parent().attr("class", "td");
			
			$("li.tours").each(function() {
				var $this = $(this);
				var text = $("h3 span", $this).text().toLowerCase();
				startArray.push(text+"_:tid:_"+parseInt($this.attr("id").match(/t(\d+)/)[1] ,10));
			});
			startArray.sort();
			startArray.reverse();
			self.generateSortedOutput.apply(self, [startArray]);
		});
		
		// Price Acending
		$("#sort-pu").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var startArray = new Array();
			$(this).parent().parent().attr("class", "pu");
			
			$("li.tours").each(function() {
				var $this = $(this);
				if($(".price", $this).text() != "") {
					var price = $(".price", $this).text();
				} else {
					var price = 0;
				}
				startArray.push(price+"_:tid:_"+parseInt($this.attr("id").match(/t(\d+)/)[1] ,10));
			});
			
			function numSort(a, b) {
				a = parseFloat(a.match(/([\d\.]+)_/)[1]);
				b = parseFloat(b.match(/([\d\.]+)_/)[1]);
				return a - b;
			}
			startArray.sort(numSort);
			self.generateSortedOutput.apply(self, [startArray]);
		});
		
		// Price Decending
		$("#sort-pd").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var startArray = new Array();
			$(this).parent().parent().attr("class", "pd");
			
			$("li.tours").each(function() {
				var $this = $(this);
				if($(".price", $this).text() != "") {
					var price = $(".price", $this).text();
				} else {
					var price = 0;
				}
				startArray.push(price+"_:tid:_"+parseInt($this.attr("id").match(/t(\d+)/)[1] ,10));
			});
			
			function numSort(a, b) {
				a = parseFloat(a.match(/([\d\.]+)_/)[1]);
				b = parseFloat(b.match(/([\d\.]+)_/)[1]);
				return a - b;
			}
			startArray.sort(numSort);
			startArray.reverse();
			self.generateSortedOutput.apply(self, [startArray]);
		});
		
		// Rating Acending
		$("#sort-ru").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var startArray = new Array();
			$(this).parent().parent().attr("class", "ru");
			
			$("li.tours").each(function() {
				var $this = $(this);
				if($(".rating", $this).text() != "") {
					var rating = $(".rating", $this).text();
				} else {
					var rating = 0;
				}
				startArray.push(rating+"_:tid:_"+parseInt($this.attr("id").match(/t(\d+)/)[1] ,10));
			});
			
			function numSort(a, b) {
				a = parseFloat(a.match(/([\d\.]+)_/)[1]);
				b = parseFloat(b.match(/([\d\.]+)_/)[1]);
				return a - b;
			}
			startArray.sort(numSort);
			self.generateSortedOutput.apply(self, [startArray]);
		});
		
		// Rating Decending
		$("#sort-rd").click(function(event) {
			event.preventDefault();
			$("#spinner").show();
			var startArray = new Array();
			$(this).parent().parent().attr("class", "rd");
			
			$("li.tours").each(function() {
				var $this = $(this);
				if($(".rating", $this).text() != "") {
					var rating = $(".rating", $this).text();
				} else {
					var rating = 0;
				}
				startArray.push(rating+"_:tid:_"+parseInt($this.attr("id").match(/t(\d+)/)[1] ,10));
			});
			
			function numSort(a, b) {
				a = parseFloat(a.match(/([\d\.]+)_/)[1]);
				b = parseFloat(b.match(/([\d\.]+)_/)[1]);
				return a - b;
			}
			startArray.sort(numSort);
			startArray.reverse();
			self.generateSortedOutput.apply(self, [startArray]);
		});
	},
	generateSortedOutput: function(startArray) {
		var self = this;
		var $tours = $("#tours");
		var sortedContent = new Array();
		var sortedIds = new Array();
		var sortedClasses = new Array();
		var sortedStatus = new Array();
		
		for (var i=0; i < startArray.length; i++) {
			var $li = $("li#t"+startArray[i].match(/_:tid:_(\d+)/)[1]);
			sortedIds[i] = "t"+startArray[i].match(/_:tid:_(\d+)/)[1];
			sortedContent[i] = $li.html();
			sortedClasses[i] = $li.attr("class").match(/status_(\w+)/)[1];
			if($li.is(".search")) {
				sortedStatus[i] = "visible";
			} else {
				sortedStatus[i] = "hidden";
			}
		}
		$tours.fadeOut("fast", function() {
			$("li.tours").remove();
			for (var i=0; i < sortedIds.length; i++) {
				$tours.append("<li id='new'></li>");
				var $newEl = $("li#new", $tours);
				$newEl.attr("id", sortedIds[i]);
				$newEl.attr("class", "tours status_"+sortedClasses[i]);
				$newEl.html(sortedContent[i]);
				if(sortedStatus[i] == "visible") {
					$newEl.addClass("search");
				} else {
					$newEl.hide();
				}
			}
			new GYG.DropDown();
			$tours.show();
			// reset Search
			$("form#quicksearch").remove();
			self.findToursByTitle.apply(self);
			self.triggerDeleteTour.apply(self);
			self.triggerEditStatus.apply(self);
			self.triggerFreeSale.apply(self);
			$("#spinner").hide();
		});
	},
	findToursByTitle: function() {
		$("#tours li.search h3 span:not(.fs)").quicksearch({
			attached: '#search-form',
			position: 'append',
			loaderId: '#spinner',
			labelText: '',
			hideElement: 'grandparent',
			inputText: GYG.translation.Manage.searchPlaceholder,
		  	delay: 500
		});
	},
	showCount: function() {
		$("span.all-number").text("("+$("li.tours").size()+")");
		$("span.active-number").text("("+$("li.tours.status_active").size()+")");
		$("span.inactive-number").text("("+$("li.tours.status_inactive").size()+")");
		$("span.temp-number").text("("+$("li.tours.status_temp").size()+")");
	},
	
	showGYGindowError: function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.General.errorTitle,
				show_error: true,
				error_message: GYG.translation.General.errorMessage
			}
		});
	}
});

// run if on manage page
$(function() {
	if($("#manage").length) {
		GYG.Manage.running = new GYG.Manage();
	}
});


/**//**/

GYG.HelpLang = {
	activate: function(li) {
		var active = $("#help-lang-supplier li.active");
		if(active != li) {
			active.removeClass("active");
			li.addClass("active");
		}
	}
};

$(document).ready(function() {
	$("#help-lang-supplier span")
	.click(function() {
		var li = $(this).parent();
		if($("ul", li).is(":hidden")) {
			GYG.HelpLang.activate(li);
		} else {
			li.removeClass("active");
		}
	})
	.hover(
		function() {
			var li = $(this).parent();
			if($("ul", li).is(":hidden"))
				window.helplangTimeout = setTimeout(function() {
					GYG.HelpLang.activate(li);
				}, 750);
		},
		function(){
			if(window.helplangTimeout)
				clearTimeout(window.helplangTimeout);
		}
	);
	
	$("#help-lang-supplier li")
	.hover(
		function() {
			if(window.helplangTimeout2 && $(this).hasClass("active"))
				clearTimeout(window.helplangTimeout2);
		},
		function() {
			if($(this).hasClass("active")) {
				var li = this;
				window.helplangTimeout2 = setTimeout(function() {
					$(li).removeClass("active");
				}, 500);
			}
		}
	);
});

/**//*/**/

/*
Script: GrowingInput.js
	Alters the size of an input depending on its content

	License:
		MIT-style license.

	Authors:
		Guillermo Rauch
*/

(function(){

GrowingInput = function(element, options){
	
	var value, lastValue, calc;
	
	options = $.extend({
		min: 0,
		max: null,
		startWidth: 15,
		correction: 15
	}, options);
	
	element = $(element).data('growing', this);
	
	var self = this;
	var init = function(){
		calc = $('<span></span>').css({
			'float': 'left',
			'display': 'inline-block',
			'position': 'absolute',
			'left': -1000
		}).insertAfter(element);
		$.each(['font-size', 'font-family', 'padding-left', 'padding-top', 'padding-bottom', 
		 'padding-right', 'border-left', 'border-right', 'border-top', 'border-bottom', 
		 'word-spacing', 'letter-spacing', 'text-indent', 'text-transform'], function(i, p){				
				calc.css(p, element.css(p));
		});
		element.blur(resize).keyup(resize).keydown(resize).keypress(resize);
		resize();
	};
	
	var calculate = function(chars){
		calc.html(chars);
		var width = calc.width();
		return (width ? width : options.startWidth) + options.correction;
	};
	
	var resize = function(){
		lastValue = value;
		value = element.val();
		var retValue = value;		
		if(chk(options.min) && value.length < options.min){
			if(chk(lastValue) && (lastValue.length <= options.min)) return;
			retValue = str_pad(value, options.min, '-');
		} else if(chk(options.max) && value.length > options.max){
			if(chk(lastValue) && (lastValue.length >= options.max)) return;
			retValue = value.substr(0, options.max);
		}
		element.width(calculate(retValue));
		return self;
	};
	
	this.resize = resize;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var str_repeat = function(str, times){ return new Array(times + 1).join(str); };
var str_pad = function(self, length, str, dir){
	if (self.length >= length) return this;
	str = str || ' ';
	var pad = str_repeat(str, length - self.length).substr(0, length - self.length);
	if (!dir || dir == 'right') return self + pad;
	if (dir == 'left') return pad + self;
	return pad.substr(0, (pad.length / 2).floor()) + self + pad.substr(0, (pad.length / 2).ceil());
};

})();

/*
Script: TextboxList.js
	Displays a textbox as a combination of boxes an inputs (eg: facebook tokenizer)

	Authors:
		Guillermo Rauch
		
	Note:
		TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>. 
		Purchase to remove this message.
*/

(function($){
	
TextboxList = function(element, _options){
	
	var original, container, list, current, focused = false, index = [], blurtimer, events = {};
	var options = $.extend(true, {
    prefix: 'textboxlist',
    max: null,
		unique: false,
		uniqueInsensitive: true,
    endEditableBit: true,
		startEditableBit: true,
		hideEditableBits: true,
    inBetweenEditableBits: true,
		keys: {previous: 37, next: 39},
		bitsOptions: {editable: {}, box: {}},
    plugins: {},
		filter: function(str){ return $.trim(str.replace(/\s+/g, ' ')).replace(/,/g, ''); },
		encode: function(o){ return o ? o.join(',') : ''; },
		decode: function(o){ return o ? o.split(',') : []; }
  }, _options);
	
	element = $(element);
	
	var self = this;
	var init = function(){		
		original = element.css('display', 'none').attr('autocomplete', 'off').focus(focusLast);
		container = $('<div class="'+options.prefix+'" />')
			.insertAfter(element)
			.click(function(e){ 
				if ((e.target == list.get(0) || e.target == container.get(0)) && (!focused || current.toElement().get(0) != list.find(':last-child').get(0))) focusLast(); 			
			});			
		list = $('<ul class="'+ options.prefix +'-bits" />').appendTo(container);
		for (var name in options.plugins) enablePlugin(name, options.plugins[name]);		
		afterInit();
	};
	
	var enablePlugin = function(name, options){
		self.plugins[name] = new TextboxList[camelCase(capitalize(name))](self, options);
	};
	
	var afterInit = function(){
		if (options.endEditableBit) create('editable', null, {tabIndex: original.tabIndex}).inject(list);
		addEvent('bitAdd', update, true);
		addEvent('bitRemove', update, true);
		$(document).click(function(e){
			if (!focused) return;
			if (e.target.className.indexOf(options.prefix) != -1){				
				if (e.target == $(container).get(0)) return;				
				var parent = $(e.target).parents('div.' + options.prefix);
				if (parent.get(0) == container.get(0)) return;
			}
			blur();
		}).keydown(function(ev){
			if (!focused || !current) return;
			var caret = current.is('editable') ? current.getCaret() : null;
			var value = current.getValue()[1];
			var special = !!$.map(['shift', 'alt', 'meta', 'ctrl'], function(e){ return ev[e]; }).length;
			var custom = special || (current.is('editable') && current.isSelected());
			var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
			switch (ev.which){
				case 8:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.previous:
					if (current.is('box') || ((caret == 0 || !value.length) && !custom)){
						evStop();
						focusRelative('prev');
					}
					break;
				case 46:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.next: 
					if (current.is('box') || (caret == value.length && !custom)){
						evStop();
						focusRelative('next');
					}
			}
		});
		setValues(options.decode(original.val()));
	};
	
	var create = function(klass, value, opt){
		if (klass == 'box'){
			if (!value[0] && !value[1]) return false;
			if (chk(options.max) && list.getChildren('.' + options.prefix + '-bit-box').length + 1 > options.max) return false;
			if (options.unique && $.inArray(uniqueValue(value), index) != -1) return false;		
		}		
		return new TextboxListBit(klass, value, self, $.extend(true, options.bitsOptions[klass], opt));
	};
	
	var uniqueValue = function(value){
		return chk(value[0]) ? value[0] : (options.uniqueInsensitive ? value[1].toLowerCase() : value[1]);
	};
	
	var add = function(plain, id, html, afterEl){
		var b = create('box', [id, plain, html]);
		if (b){
			if (!afterEl || !afterEl.length) afterEl = list.find('.' + options.prefix + '-bit-box').filter(':last');
			b.inject(afterEl.length ? afterEl : list, afterEl.length ? 'after' : 'top');
		} 
		return self;
	};
	
	var focusRelative = function(dir, to){
		var el = getBit(to && $(to).length ? to : current).toElement();
		var b = getBit(el[dir]());
		if (b) b.focus();
		return self;
	};
	
	var focusLast = function(){
		var lastElement = list.children().filter(':last');
		if (lastElement) getBit(lastElement).focus();
		return self;
	};
	
	var blur = function(){	
		if (! focused) return self;
		if (current) current.blur();
		focused = false;
		return fireEvent('blur');
	};
	
	var getBit = function(obj){				
		return obj.jquery ? $(obj).data('textboxlist:bit') : obj;
	};
	
	var getValues = function(){
		return $.grep($.map(list.children(), function(el){
			var bit = getBit($(el));
			if (bit.is('editable')) return null;
			var v = bit.getValue();
			return (chk(v[0]) ? v[0] : options.filter(v[1])) || null;
		}), function(o){ return o != undefined; });
	};
	
	var setValues = function(values){
		if (!values) return;
		$.each(values, function(i, v){
			if (v) add.apply(self, $.isArray(v) ? [v[1], v[0], v[2]] : [v]);
		});		
	};
	
	var update = function(){
		original.val(options.encode(getValues()));
	};
	
	var addEvent = function(type, fn){
		if (events[type] == undefined) events[type] = [];
		var exists = false;
		$.each(events[type], function(f){
			if (f === fn){
				exists = true;
				return;
			};
		});
		if (!exists) events[type].push(fn);
		return self;
	};
	
	var fireEvent = function(type, args, delay){
		if (!events || !events[type]) return self;
		$.each(events[type], function(i, fn){		
			(function(){
				args = (args != undefined) ? splat(args) : Array.prototype.slice.call(arguments);
				var returns = function(){
					return fn.apply(self || null, args);
				};
				if (delay) return setTimeout(returns, delay);
				return returns();
			})();
		});
		return self;
	};
	
	var removeEvent = function(type, fn){
		if (events[type]){
			for (var i = events[type].length; i--; i){
				if (events[type][i] === fn) events[type].splice(i, 1);
			}
		} 
		return self;
	};
	
	this.onFocus = function(bit){
		if (current) current.blur();
		clearTimeout(blurtimer);
		current = bit;
		container.addClass(options.prefix + '-focus');		
		if (!focused){
			focused = true;
			fireEvent('focus', bit);
		}
	};
	
	this.onAdd = function(bit){
		if (options.unique && bit.is('box')) index.push(uniqueValue(bit.getValue()));
		if (bit.is('box')){
			var prior = getBit(bit.toElement().prev());
			if ((prior && prior.is('box') && options.inBetweenEditableBits) || (!prior && options.startEditableBit)){				
				var priorEl = prior && prior.toElement().length ? prior.toElement() : false;
				var b = create('editable').inject(priorEl || list, priorEl ? 'after' : 'top');
				if (options.hideEditableBits) b.hide();
			}
		}
	};
	
	this.onRemove = function(bit){
		if (!focused) return;
		if (options.unique && bit.is('box')){
			var i = $.inArray(uniqueValue(bit.getValue()), index);
			if (i != -1) index = index.splice(i + 1, 1);
		} 
		var prior = getBit(bit.toElement().prev());
		if (prior && prior.is('editable')) prior.remove();
		focusRelative('next', bit);
	};
	
	this.onBlur = function(bit, all){
		current = null;
		container.removeClass(options.prefix + '-focus');		
		blurtimer = setTimeout(blur, all ? 0 : 200);
	};
	
	this.setOptions = function(opt){
		options = $.extend(true, options, opt);
	};
	
	this.getOptions = function(){
		return options;
	};
	
	this.getContainer = function(){
		return container;
	};
	
	this.addEvent = addEvent;
	this.removeEvent = removeEvent;
	this.fireEvent = fireEvent;
	this.create = create;
	this.add = add;
	this.getValues = getValues;
	this.plugins = [];
	init();
};

TextboxListBit = function(type, value, textboxlist, _options){
	
	var element, bit, prefix, typeprefix, close, hidden, focused = false, name = capitalize(type); 
	var options = $.extend(true, type == 'box' ? {
		deleteButton: true
  } : {
		tabIndex: null,
		growing: true,
		growingOptions: {},
		stopEnter: true,
		addOnBlur: false,
		addKeys: 13
	}, _options);
	
	this.type = type;
	this.value = value;
	
	var self = this;
	var init = function(){
		prefix = textboxlist.getOptions().prefix + '-bit';
		typeprefix = prefix + '-' + type;
		bit = $('<li />').addClass(prefix).addClass(typeprefix)
			.data('textboxlist:bit', self)
			.hover(function(){ 
				bit.addClass(prefix + '-hover').addClass(typeprefix + '-hover'); 
			}, function(){
				bit.removeClass(prefix + '-hover').removeClass(typeprefix + '-hover'); 
			});
		if (type == 'box'){
			if(chk(self.value[2]))
				bit.html(self.value[2]);
			else
				bit.text(self.value[1]);
			bit.click(focus);
			if (options.deleteButton){
				bit.addClass(typeprefix + '-deletable');
				close = $('<a href="#" class="'+ typeprefix +'-deletebutton" />').click(function(event) { event.preventDefault(); remove(); }).appendTo(bit);
			}
			bit.children().click(function(e){ e.stopPropagation(); e.preventDefault(); });
		} else {
			element = $('<input type="text" class="'+ typeprefix +'-input" autocomplete="off" />').val(self.value ? self.value[1] : '').appendTo(bit);
			if (chk(options.tabIndex)) element.tabIndex = options.tabIndex;
			if (options.growing) new GrowingInput(element, options.growingOptions);		
			element.focus(function(){ focus(true); }).blur(function(){
				blur(true);
				if (options.addOnBlur) toBox(); 
			});				
			if (options.addKeys || options.stopEnter){
				element.keydown(function(ev){
					if (!focused) return;
					var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
					if (options.stopEnter && ev.which === 13) evStop();
					if ($.inArray(ev.which, splat(options.addKeys)) != -1){
						evStop();
						toBox();
					}
				});
			}
		}
	};
	
	var inject = function(el, where){
		switch(where || 'bottom'){
			case 'top': bit.prependTo(el); break;
			case 'bottom': bit.appendTo(el); break;
			case 'before': bit.insertBefore(el); break;			
			case 'after': bit.insertAfter(el); break;						
		}
		textboxlist.onAdd(self);	
		return fireBitEvent('add');
	};
	
	var focus = function(noReal){
		if (focused) return self;
		show();
		focused = true;
		textboxlist.onFocus(self);
		bit.addClass(prefix + '-focus').addClass(prefix + '-' + type + '-focus');
		fireBitEvent('focus');		
		if (type == 'editable' && !noReal) element.focus();
		return self;
	};
	
	var blur = function(noReal){
		if (!focused) return self;
		focused = false;
		textboxlist.onBlur(self);
		bit.removeClass(prefix + '-focus').removeClass(prefix + '-' + type + '-focus');
		fireBitEvent('blur');
		if (type == 'editable'){
			if (!noReal) element.blur();
			if (hidden && !element.val().length) hide();
		}
		return self;
	};
	
	var remove = function(){
		blur();
		textboxlist.onRemove(self);
		bit.remove();
		return fireBitEvent('remove');
	};
	
	var show = function(){
		bit.css('display', 'block');
		return self;
	};
	
	var hide = function(){
		bit.css('display', 'none');		
		hidden = true;
		return self;
	};
	
	var fireBitEvent = function(type){
		type = capitalize(type);
		textboxlist.fireEvent('bit' + type, self).fireEvent('bit' + name + type, self);
		return self;
	};
	
  this.is = function(t){
    return type == t;
  };

	this.setValue = function(v){
		if (type == 'editable'){
			element.val(chk(v[0]) ? v[0] : v[1]);
			if (options.growing) element.data('growing').resize();
		} else value = v;
		return self;
	};

 	this.getValue = function(){
		return type == 'editable' ? [null, element.val(), null] : value;
	};
	
	if (type == 'editable'){
		this.getCaret = function(){
 			var el = element.get(0);
			if (el.createTextRange){
		    var r = document.selection.createRange().duplicate();		
		  	r.moveEnd('character', el.value.length);
		  	if (r.text === '') return el.value.length;
		  	return el.value.lastIndexOf(r.text);
		  } else return el.selectionStart;
		};

		this.getCaretEnd = function(){
 			var el = element.get(0);			
			if (el.createTextRange){
				var r = document.selection.createRange().duplicate();
				r.moveStart('character', -el.value.length);
				return r.text.length;
			} else return el.selectionEnd;
		};
		
		this.isSelected = function(){
			return focused && (self.getCaret() !== self.getCaretEnd());
		};
		
		var toBox = function(){
			var value = self.getValue();				
			var b = textboxlist.create('box', value);
			if (b){
				b.inject(bit, 'before');
				self.setValue([null, '', null]);
				return b;
			}
			return null;
		};
		
		this.toBox = toBox;
	}
	
	this.toElement = function(){
		return bit;
	};
	
	this.focus = focus;
	this.blur = blur;
	this.remove = remove;
	this.inject = inject;
	this.show = show;
	this.hide = hide;
	this.fireBitEvent = fireBitEvent;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var splat = function(a){ return (Object.prototype.toString.call(a) === "[object Array]") ? a : [a]; };
var camelCase = function(str){ return str.replace(/-\D/g, function(match){ return match.charAt(1).toUpperCase(); }); };
var capitalize = function(str){ return str.replace(/\b[a-z]/g, function(A){ return A.toUpperCase(); }); };

})(jQuery);

/**//**/

GYG.TourEdit = function() {
	GYG.TourEdit.running = this;
	var self = this;
	var picturesInitialized;

	var init = function() {
		if(location.hash != '') {
			var hash = location.hash.replace(/#/, '');
			
			if(hash == "pictures") {
				initializePictures.apply(self);
			}
			
			var $tab = $(".tab#"+hash+"-tab");
			if($tab.length) {
				$(".tab-selected").attr("class", "tab");
				$("#tabs-menu a.selected").attr("class", "");
				$tab.attr("class", "tab-selected");
				$("a[href='#"+hash+"-tab']").attr("class", "selected");
				$("#translation-list a").each(function() {
					var link = $(this).attr("href");
					link += "#"+hash;
					$(this).attr("href", link);
				});
			}
		}
		
		$("#tabs-menu a").click(function(event) {
			event.preventDefault();
			if(this.className == "selected") return;
			
			$("#tabs-menu .selected").removeClass("selected");
			var $this = $(this);

			if($this.attr("href") == "#pictures-tab" && !picturesInitialized) initializePictures.apply(self);

			$this.addClass("selected");
			$(".tab-selected").fadeOut(100, function() {
				$(this).attr("class", "tab");
				$($this.attr("href")).fadeIn(100, function() { $(this).attr("class", "tab-selected"); });
			});
			
			// to stay on the same tab, if the language is changed
			var hash = $this.attr("href").match(/([#\w]+)-tab/)[1];
			$("#translation-list a").each(function() {
				var link = $(this).attr("href");
				if(link.match(/#/) != null) {
					link = link.replace(/#.*$/, '');
				}
				link += hash;
				$(this).attr("href", link);
			});
		});
		
		initKeywords();
		new GYG.DropDown();
		// textfields with 
		new GYG.TextFieldCounter();
		
		$("a[href='#edit']").click(function(event) {
			event.preventDefault();
			
			var $this = $(this);
			$this.hide();
			var item = $this.parent().parent();
			$("a[href='#cancel']", item).show();
			$(".default", item).slideUp("fast");
			$(".edit", item).slideDown(
				"fast",
				// IE blanks element after sliding, setting zoom to 1 helps
				($.browser.msie
					? function() { $(this).css("zoom", "1"); }
					: undefined)
			);
			
			if($(".edit", item).hasClass("need-to-parse")) {
				// WYSIWYG
				$("textarea.tiny-mce").tinymce({
					// Location of TinyMCE script
					script_url : '/js/lib/tiny_mce/tiny_mce.js',
		
					// General options
					theme : "advanced",
					mode : "exact",
					skin : "o2k7",
					plugins : "safari,paste",
					entity_encoding : "raw",
					paste_convert_middot_lists: false,
					
					setup: function(ed) {
						if($.browser.safari) {
							// Force Paste-as-Plain-Text
							ed.onPaste.add( function(ed, e, o) {
								ed.execCommand('mcePasteText', true);
								return tinymce.dom.Event.cancel(e);
							});
						}
					},
					
					// Theme options
					theme_advanced_buttons1 : "bold,italic,|,undo,redo",
					theme_advanced_buttons2 : "",
					theme_advanced_buttons3 : "",
					theme_advanced_buttons4 : "",
					theme_advanced_toolbar_location : "top",
					theme_advanced_toolbar_align : "left",
					theme_advanced_resizing : false
				});
			}
		});
		
		// Google map initialization
		$("#map-edit a[href='#edit']").one('click', function() {
			loadMap();
		});
		
		$("a[href='#cancel']").click(function(event) {
			event.preventDefault();
		
			var $this = $(this);
			$this.hide();
			var item = $this.parent().parent();
			$("a[href='#edit']", item).show();
			$(".edit", item).hide();
			$(".default", item).show();
			
			// remove old errors
			$("p.error", item).remove();
		});
		
		// listen for the language dropdown change
		this.selectedLanguages = [];
		$("#language_select select").change(function() {
			self.selectLanguage(this.value);
			// return to 'please select' value
			this.value = '';
		});
		
		// preselect the languages already set
		selectedLanguages = $("input[name=languages]").val().split("|").sort(function(a,b){return a-b;});
		for(var i=0; i<selectedLanguages.length; i++)
			self.selectLanguage(selectedLanguages[i]);
		
		$(".item form:not(.image):not(#new-availability):not(#new-price-season)").submit(function(event) {
			event.preventDefault();
			$form = $(this);
			
			// call any other event handlers
			$form.trigger('beforesubmit');
			
			$("a[href='#cancel']", $form.parents('.item')).hide();
			if($form.hasClass("need-to-parse")) {
				var parse = $("textarea.tiny-mce").val();
				self.parseDescription.apply(self, [parse]);
			}
			$.post("/supplier/ajax/tour_edit.php", $form.serializeArray(), function(data) { self.processResponse.apply(self, [data]); }, "json");
			self.showLoadingIndicator($form);
		});
	};
	
	var initializePictures = function() {
		picturesInitialized = true;
		var self = this;
		
		var $pictureList = $("#picture-list");

		$(".delete", $pictureList).click(function(event) {
			event.preventDefault();
			$(this).unbind();
			self.deletePictureWithId(parseInt($(this).parent().attr("id").replace(/pic-/, ''), 10));
		});
		
		// Firefox 2 bug:
		$.each($.browser, function(i, val) {
		  if(i=="mozilla" && $.browser.version.substr(0,3)=="1.8")
		     $("input[type='file']").css("opacity", "1");
		});
		

		var editHTML = 
		'<li id="pic-%pictureId%">\
			<div class="handle"></div>\
			<a href="#" class="slideshow" rel="slideshow-%order%" title="%slideshowTitle%">\
				<img class="orderID-%order%" src="img/tour_img-%pictureId%-7.jpg" width="70" height="70" />\
			</a>\
			<p class="order">%orderText%</p>\
			<p><label>%descriptionLabel%<br /><input type="text" name="picture_description[%pictureId%]" maxlength="%maxlength%" /></label></p>\
			<a href="#" class="delete" title="%deleteTitle%">X</a>\
		</li>';

		$.extend(this, {
			beginUpload: function() {
				$("ul.error").empty().hide();
				$("#picture-upload").addClass("uploading");
			},
			uploadEnded: function(data) {
				$("[name=picture]").val('');
				$("#picture-upload").removeClass("uploading");
				if(data.success) {
					this.insertNewImage(data.order_id, data.tour_picture_id);
				} else {
					this.showErrors(data.user_exceptions.picture);
				}
			},
			insertNewImage: function(order, pictureId) {
				var dummy = $("<b></b>");
				var li =
					editHTML
						.replace(/%pictureId%/g, pictureId)
						.replace(/%order%/g, order)
						.replace(/%slideshowTitle%/g, dummy.text(GYG.translation.TourEdit.slideshowTitle).html())
						.replace(/%id%/g, GYG.TourEdit.tour_id)
						.replace(/%maxlength%/g, GYG.TourEdit.pictureDescriptionMaxlength)
						.replace(/%orderText%/g, (order == 0) ? dummy.text(GYG.translation.TourEdit.mainPicture).html() : order+1)
						.replace(/%descriptionLabel%/g, dummy.text(GYG.translation.TourEdit.descriptionLabel).html())
						.replace(/%deleteTitle%/g, dummy.text(GYG.translation.TourEdit.deleteTitle).html());
				li = $(li);
				$pictureList.append(li.hide());
				$("a.delete", li).click(function(event) {
					event.preventDefault();
					$(this).unbind();
					self.deletePictureWithId(parseInt($(this).parent().attr("id").replace(/pic-/, ''), 10));
				});
				GYG.flashElement(li.slideDown());
				$pictureList.sortable("refresh");
				if($("a[rel^='slideshow']").length) GYG.Slideshow.running.checkForNewPictures();

				var newOrderVal = $("input[name=new_picture_order]").val();
				if(newOrderVal != "")
					$("input[name=new_picture_order]").val(newOrderVal+"|"+order);

				this.checkUploadCount();
			},
			showErrors: function(exceptions) {
				if(exceptions.length == 0) return;
				
				var $ul = $("ul.picture-error");
				var i = -1;
				while(++i < exceptions.length)
					$('<li></li>').text(exceptions[i]).appendTo($ul);
				$ul.show();
			},
			deletePictureWithId: function(id) {
				var self = this;

				$.ajax({
					type: "POST",
					url: "/supplier/ajax/tour_edit.php",
					data: {
						edit: "tour_picture_delete",
						tour_picture_id: id
					},
					dataType: "json",
					success: function(data) {
						if(data.success)
							self.removePictureWithId.apply(self, [id]);
						else
							self.unableToDeletePicture.apply(self);
					},
					error: function() { 
						self.unableToDeletePicture.apply(self);
					}
				 });
			},
			removePictureWithId: function(id) {
				$pic = $("#pic-"+id);
				$pic.slideUp("normal", function() {
					$(this).remove();
					self.checkUploadCount.apply(self);
					self.updatePictureNumbering.apply(self);
					if($("a[rel^='slideshow']").length) GYG.Slideshow.running.checkForNewPictures();
				});
			},
			unableToDeletePicture: function() {
				alert("error");
			},
			checkUploadCount: function() {
				if($pictureList.children().length >= GYG.TourEdit.maxFiles) {
					$("#limit-message").show();
				} else {
					$("#limit-message").hide();
				}
			},
			updatePictureNumbering: function() {
				$pictureList.children().removeClass("main").each(function(i) {
					if(i == 0)
						this.className="main";

					$(".order", this).text((i == 0) ? GYG.translation.TourEdit.mainPicture : i+1);
				});
			}
		});

		GYG.genericError = function(error) {
			self.uploadEnded({ user_exceptions: { picture: [error] }});
		};

		this.checkUploadCount();

		// when submitting the form with the descriptions and sort order we
		// have to set the value of the hidden field new_picture_order to the newly selected order.
		$("#picture-meta").bind('beforesubmit', function() {
			var newOrders = [];

			$pictureList.children().each(function(i) {
				newOrders.push($(this).attr("id").replace(/pic-/, ''));
			});

			$("input[name=new_picture_order]").val(newOrders.join("|"));
		});

		$("#picture-upload").submit(function() {
			self.beginUpload.apply(self);
		});

		// automatically submit after file selection
		$("#picture").change(function() {
			$("#picture-upload").submit();
		});

		$pictureList.sortable({
			handle: ".handle",
			axis: 'y',
			containment: 'parent',
			tolerance: 'pointer',
			start: function(event, ui) {
				if($.browser.safari)
					ui.item.addClass("webkit-dragging");
				// else
				// 	ui.item.addClass("dragging");
			},
			stop: function(event, ui) {
				ui.item.removeClass("dragging");
				ui.item.removeClass("webkit-dragging");

				self.updatePictureNumbering.apply(self);
			}
		});
	};
	
	var loadMap = function() {
		window.GMapLoaded = function() {
			initializeMap.apply(self);
		};
		$.getScript("http://maps.google.com/maps?file=api&v=2&async=2&callback=GMapLoaded&hl="+$("html").attr("lang")+"&key="+GYG.config.googleKey);
		gMapScriptStartedLoading = true;
	};
	
	this.parseDescription = function(parse) {
		// clean tags
		parse = parse
			.replace(/<strong>/gi, "[:strong:]")
			.replace(/<\/strong>/gi, "[:/strong:]")
			.replace(/<em>/gi, "[:em:]")
			.replace(/<\/em>/gi, "[:/em:]");
		
		// decode
		parse = parse
			.replace(/<p>/gi, "")
			.replace(/<\/p>/gi, "\n")
			.replace(/<br(\s+)?\/(\s+)?>/gi, "\n")
			.replace(/&amp;/g, "&")
        	.replace(/&lt;/g, "<")
        	.replace(/&gt;/g, ">")
        	.replace(/&nbsp;/g, " ");
        
        // cleanup
        parse = parse
        	.replace(/<[^>]+>/gi, "");
        	
        // reintroduce html
        parse = parse
        	.replace(/\[:strong:\]/g, "<strong>")
        	.replace(/\[:\/strong:\]/g, "</strong>")
        	.replace(/\[:em:\]/g, "<em>")
        	.replace(/\[:\/em:\]/g, "</em>");
        		                
        $("textarea[name='description']").val(parse);
	};
	
	var initializeMap = function() {
		self.gmap = gMapObj = new GMap2($("#gmap-canvas")[0], { size: new GSize(556, 400) });

		self.geocoder = new GClientGeocoder();

		GYG.DefaultGMarkerIcon();

		// initialize the marker
		var marker = new GMarker(new GLatLng(0,0), {draggable: true});

		//GEvent.addListener(marker, "dragstart", function() {
		//});

		GEvent.addListener(marker, "dragend", function() {
			setTimeout(function() {
				gMapObj.panTo(marker.getLatLng());
			}, 333);
			$("input[name=lat]").val(marker.getLatLng().lat());
			$("input[name=lng]").val(marker.getLatLng().lng());
		});
		
		// explanation for start point
		GEvent.addListener(marker, "dragend", function() {
			var text = GYG.translation.TourEdit.tourStartPoint;
			text = text.replace(/%1/g, "<strong>").replace(/%2/g, "</strong>");
			marker.openInfoWindowHtml("<div style='width: 220px;'>"+text+"</div>");
		});

		GEvent.addListener(gMapObj, "zoomend", function(oldLevel, newLevel) {
			$("input[name=map_zoom]").val(newLevel);
		});

		var markerIsOnMap = false;

		$(window).unload(GUnload);

		// do we already have all map infos?
		// if so, adjust the map
		if(
			$("input[name=lat]").val() != '' &&
			$("input[name=lng]").val() != '' &&
			$("input[name=map_zoom]").val() != ''
		) {
			var latlng = new GLatLng(parseFloat($("input[name=lat]").val()), parseFloat($("input[name=lng]").val()));
			gMapObj.setCenter(latlng, parseInt($("input[name=map_zoom]").val(), 10));
			marker.setLatLng(latlng);
			gMapObj.addOverlay(marker);
		} else {
			gMapObj.setCenter(new GLatLng(0, 15), 1);
		}

		gMapObj.addControl(new GSmallZoomControl3D());
		gMapObj.addControl(new GMenuMapTypeControl());
		gMapObj.enableContinuousZoom();
		gMapObj.disableDragging();
	};
	
	// Ajax Response
	this.processResponse = function(data, $editBlock) {
		if(!$editBlock)
			var $editBlock = $("input[name='edit'][value='"+data.edit+"']").parents(".edit");
		
		$editBlock.css("height", "auto");
		// hide loading indicator
		$(".loading-indicator", $editBlock).remove();
		
		// remove old errors
		$("p.error", $editBlock).remove();
		
		if(data.success) {
			$editBlock.hide();
			var $default = $editBlock.parent().children('.default');
			$default.show();
			// show cancel button
			$("a[href='#edit']", $editBlock.parents(".item")).show();
			
			this.updateWithNewValues[data.edit].apply(this, [data.new_values, $default]);;
		} else {
			// show cancel button
			$("a[href='#cancel']", $editBlock.parents(".item")).show();
			
			var $newEl, i, $error, $p;
			for(field in data.user_exceptions) {
				$newEl = $('<p class="error"></p>');
				
				$error = $("<span></span>");
				$error.text(data.user_exceptions[field][0]);
				$newEl.append($error);
				
				for(i = 1; i<data.user_exceptions[field].length; i++) {
					$newEl.append("<br />");
					$error = $("<span></span>");
					$error.text(data.user_exceptions[field][i]); 
					$newEl.append($error);
				}
				
				$p = $('[name="'+field+'"], input.'+field, $editBlock).parents('p, #price-table');
				$newEl.insertBefore($p);
			}
		}
	};
	
	this.showLoadingIndicator = function($el) {
		if(!$el.hasClass("edit")) {
			var $temp = $el.parents(".edit");
			if($temp.length)
				$el = $temp;
		}
		
		// limit $el height
		var height = $el.height();
		if(height > 200) {
			height = 200;
			var animate = true;
		}
		
		$("#content > .loading-indicator").clone().appendTo($el).css({
			"padding-top": (height-70)/2 + "px"
		});
		
		if(animate)
			$el.animate({ height: height }, 0);
	};
	
	this.showLoadingIndicatorHere = function($el) {
		// limit $el height
		var height = $el.height();
		if(height > 200) {
			height = 200;
			var animate = true;
		}

		$("#content > .loading-indicator").clone().appendTo($el).css({
			"padding-top": (height-70)/2 + "px"
		});

		if(animate)
			$el.animate({ height: height }, 0);
	};
	
	this.updateWithNewValues = {
		location: function(values, $el) {
			// adjust image
			var img = $("img", $el)[0];
			src = img.src.replace(/center=-?[\d]+\.[\d]+,-?[\d]+\.[\d]+/, 'center='+values.lat+","+values.lng);
			img.src = src;
			GYG.flashElement($el);
			// adjust bigger map link
			var $a = $el.find("a");
			var href = $a.attr("href");
			$a.attr("href", href.replace(/center=-?[\d]+\.[\d]+,-?[\d]+\.[\d]+/, 'center='+values.lat+","+values.lng));
		},
		title: function(values, $el) {
			var $title = $("#title-value", $el);
			var $headline = $("#top-bar h3");
			var $code = $("#product-code-value", $el);
			var headline = values.title;
			
			if(values.supplier_product_code == "") {
				$("#product-code-empty.hidden", $el).removeClass("hidden");
			} else {
				$("#product-code-empty:not(.hidden)", $el).addClass("hidden");
				headline = values.supplier_product_code+" | "+headline;
			}
			
			$title.text(values.title);
			$code.text(values.supplier_product_code);
			
			$span = $headline.html('<span></span>').children().text(headline);
			GYG.flashElement($el.add($span));
		},
		description: function(values, $el) {
			var $p = $('<p class="value"></p>');
			$p.html(values.description);
			$el.html($p);
			GYG.flashElement($el);
		},
		approximate_duration: function(values, $el) {
			var $p = $('<p class="value"></p>');
			$p.text(values.approximate_duration+' '+values.approximate_duration_unit_name);
			$el.html($p);
			GYG.flashElement($el);
		},
		// workaround as abstract is reserved in js
		'abstract': function (values, $el) {
			var $p = $('<p class="value"></p>');
			$p.text(values['abstract']);
			$el.html($p);
			GYG.flashElement($el);
		},
		voucher_information: function (values, $el) {
			var $voucher = $("#voucher-information-value", $el);
			var $emergency = $("#emergency-phone-nr-value", $el);
			
			if(values.voucher_information == "") {
				$("#voucher-information-empty.hidden", $el).removeClass("hidden");
			} else {
				$("#voucher-information-empty:not(.hidden)", $el).addClass("hidden");
			}
			
			if(values.emergency_phone_nr == "") {
				$("#emergency-phone-nr-empty.hidden", $el).removeClass("hidden");
			} else {
				$("#emergency-phone-nr-empty:not(.hidden)", $el).addClass("hidden");
			}
			
			$voucher.text(values.voucher_information);
			$emergency.text(values.emergency_phone_nr);
			GYG.flashElement($el);
		},
		keywords: function (values, $el) {
			var s = '<p class="value"><ul><li class="textboxlist-bit textboxlist-bit-box">' + values.keywords.replace(/\s*,\s*/g, "</li><li class=\"textboxlist-bit textboxlist-bit-box\">") + '</li></ul></p>';
			$el.html(s);
			GYG.flashElement($el);
		},
		additional_information: function (values, $el) {
			var $addNotes = $("#additional-notes-value", $el);
			var $pickup = $("#pickup-value", $el);
			var $inclu = $("#inclusions-value", $el);
			var $exclu = $("#exclusions-value", $el);
			
			if(values.inclusions == "") {
				$("#inclusions-empty.hidden", $el).removeClass("hidden");
			} else {
				$("#inclusions-empty:not(.hidden)", $el).addClass("hidden");
			}
			
			if(values.exclusions == "") {
				$("#exclusions-empty.hidden", $el).removeClass("hidden");
			} else {
				$("#exclusions-empty:not(.hidden)", $el).addClass("hidden");
			}
			
			if(values.pickup == "") {
				$("#pickup-empty.hidden", $el).removeClass("hidden");
			} else {
				$("#pickup-empty:not(.hidden)", $el).addClass("hidden");
			}
			
			if(values.additional_notes == "") {
				$("#additional-notes-empty.hidden", $el).removeClass("hidden");
			} else {
				$("#additional-notes-empty:not(.hidden)", $el).addClass("hidden");
			}
			
			$addNotes.text(values.additional_notes);
			$pickup.text(values.pickup);
			$inclu.text(values.inclusions);
			$exclu.text(values.exclusions);
			GYG.flashElement($el);
		},
		categories: function (values, $el) {
			var $cat = $("#categories-value", $el);
			var $budget = $("#budget-value", $el);
			var $target = $("#target-value", $el);
			var fullPath1 = values.category1.full_path.join(" &gt; ");
			var s = "<li>" + fullPath1 + " &gt; <strong>" + values.category1.category + "</strong></li>";
			var t = "<li>"+GYG.translation.TourEdit.allCategories+"</li>";
			
			if(values.category2.length != 0) {
				var fullPath2 = values.category2.full_path.join("&gt;");
				s = s + "<li>" + fullPath2 + " &gt; <strong>" + values.category2.category + "</strong></li>";
			}
			
			if(values.target_groups.length != 0) {
				t = "";
				for (var i=0; i < values.target_groups.length; i++) {
					t += "<li>"+values.target_groups[i]+"</li>";
				}
			}
			
			$target.html(t);
			$budget.text(values.budget_level);
			$cat.html(s);
			GYG.flashElement($el);
		},
		languages: function (values, $el) {
			var $lang = $("#languages-value");
			var s = "";
			
			for(var iLangId in values.languages) {
				s = s + '<li class="flag" style="background-image:url(img/flags/' + values.languages[iLangId].flag_code + '.png)">' + values.languages[iLangId].language + '</li>';
			}
			
			$lang.html(s);
			GYG.flashElement($el);
		},
		pictures: function(values, $el) {
			var valueHTML = 
			'<li>\
				<a href="#" class="slideshow" rel="slideshow-%order%" title="%slideshowTitle%">\
					<img alt="" src="img/tour_img-%pictureId%-7.jpg" title="%description%" width="70" height="70" />\
				</a>\
				<p class="order">%orderText%</p>\
				<p>%description%</p>\
			</li>';
			
			$pictureList = $("#pic-preview");
			$pictureList.empty();
			var li;
			var order = -1;
			// to get html from text
			var dummy = $("<b></b>");
			for (var picture_id in values.picture_description) {
				var li =
					valueHTML
						.replace(/%order%/g, ++order)
						.replace(/%slideshowTitle%/g, dummy.text(GYG.translation.TourEdit.slideshowTitle).html())
						.replace(/%id%/g, GYG.TourEdit.tour_id)
						.replace(/%pictureId%/g, picture_id)
						.replace(/%orderText%/g, (order == 0) ? dummy.text(GYG.translation.TourEdit.mainPicture).html() : order+1)
						.replace(/%description%/g, dummy.text(values.picture_description[picture_id]).html());
				li = $(li);
				if(order == 0)
					li.addClass("main");
				$pictureList.append(li);
			}
			
			if(values.picture_description.length == 0) {
				$pictureList.addClass("hidden");
				$("p.empty-field", $el).removeClass("hidden");
			} else {
				$pictureList.removeClass("hidden");
				$("p.empty-field:not(.hidden)", $el).addClass("hidden");
			}
			
			if($("a[rel^='slideshow']").length) GYG.Slideshow.running.checkForNewPictures();
			GYG.flashElement($el);
		}
	};
	
	this.highlightElement = function($e) {
		$e.css("background-color", "#FDF285");
		$e.animate({ backgroundColor: "#ffffff" }, 1500);
	};
	
	// makes TextBoxList for Keywords
	var initKeywords = function() {
		GYG.ImagePreloader.load(['close.gif'], false);
		var options = {
			editable: {
				addKeys: 188,
				addOnBlur: true,
				stopEnter: false,
				unique: true
			}
		};
		new TextboxList('#keywords', { bitsOptions: options, unique: true });
	};

	// Language Selection
	this.selectLanguage = function(langID) {
		var $select = $("#language_select select");
		if(langID == '' || $("option[value="+langID+"]", $select).length > 2) return;
		
		this.selectedLanguages.push(langID);
		$("input[name=languages]").val(this.selectedLanguages.join("|"));
		$("option[value="+langID+"]", $select).attr("disabled", true);
		
		// create li
		var langName = $("option[value="+langID+"]", $select).text();
		if($("option[value="+langID+"]", $select).length > 1) {
			langName = $("option[value="+langID+"]:first", $select).text();
		}
		var li = $('<li id="lang'+langID+'"></li>');
		li.text(langName);
		var a = $('<a href="#">X</a>').click(function(event) {
			event.preventDefault();
			self.deselectLanguage($(this).parent().attr("id").replace(/lang/,''));
		});
		a.prependTo(li);
		GYG.flashElement(li.insertBefore("#language_select"), { duration: 750 });
	};
	
	this.deselectLanguage = function(langID) {
		var $select = $("#language_select select");
		$("#lang"+langID).fadeOut("fast", function() { $(this).remove(); });
		var index = $.inArray(langID, this.selectedLanguages);
		if(index >= 0) {
			this.selectedLanguages.splice(index, 1);
			$("input[name=languages]").val(this.selectedLanguages.join("|"));
		}
		$("option[value="+langID+"]", $select).attr("disabled", false);
	};

	init.apply(this);
};

// run if on edit and manage page
$(function() {
	if(document.body.id == "tour-edit") {
		GYG.TourEdit.running = new GYG.TourEdit();
	}
});

/**//*/**/

/*
Script: GrowingInput.js
	Alters the size of an input depending on its content

	License:
		MIT-style license.

	Authors:
		Guillermo Rauch
*/

(function(){

GrowingInput = function(element, options){
	
	var value, lastValue, calc;
	
	options = $.extend({
		min: 0,
		max: null,
		startWidth: 15,
		correction: 15
	}, options);
	
	element = $(element).data('growing', this);
	
	var self = this;
	var init = function(){
		calc = $('<span></span>').css({
			'float': 'left',
			'display': 'inline-block',
			'position': 'absolute',
			'left': -1000
		}).insertAfter(element);
		$.each(['font-size', 'font-family', 'padding-left', 'padding-top', 'padding-bottom', 
		 'padding-right', 'border-left', 'border-right', 'border-top', 'border-bottom', 
		 'word-spacing', 'letter-spacing', 'text-indent', 'text-transform'], function(i, p){				
				calc.css(p, element.css(p));
		});
		element.blur(resize).keyup(resize).keydown(resize).keypress(resize);
		resize();
	};
	
	var calculate = function(chars){
		calc.html(chars);
		var width = calc.width();
		return (width ? width : options.startWidth) + options.correction;
	};
	
	var resize = function(){
		lastValue = value;
		value = element.val();
		var retValue = value;		
		if(chk(options.min) && value.length < options.min){
			if(chk(lastValue) && (lastValue.length <= options.min)) return;
			retValue = str_pad(value, options.min, '-');
		} else if(chk(options.max) && value.length > options.max){
			if(chk(lastValue) && (lastValue.length >= options.max)) return;
			retValue = value.substr(0, options.max);
		}
		element.width(calculate(retValue));
		return self;
	};
	
	this.resize = resize;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var str_repeat = function(str, times){ return new Array(times + 1).join(str); };
var str_pad = function(self, length, str, dir){
	if (self.length >= length) return this;
	str = str || ' ';
	var pad = str_repeat(str, length - self.length).substr(0, length - self.length);
	if (!dir || dir == 'right') return self + pad;
	if (dir == 'left') return pad + self;
	return pad.substr(0, (pad.length / 2).floor()) + self + pad.substr(0, (pad.length / 2).ceil());
};

})();

/*
Script: TextboxList.js
	Displays a textbox as a combination of boxes an inputs (eg: facebook tokenizer)

	Authors:
		Guillermo Rauch
		
	Note:
		TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>. 
		Purchase to remove this message.
*/

(function($){
	
TextboxList = function(element, _options){
	
	var original, container, list, current, focused = false, index = [], blurtimer, events = {};
	var options = $.extend(true, {
    prefix: 'textboxlist',
    max: null,
		unique: false,
		uniqueInsensitive: true,
    endEditableBit: true,
		startEditableBit: true,
		hideEditableBits: true,
    inBetweenEditableBits: true,
		keys: {previous: 37, next: 39},
		bitsOptions: {editable: {}, box: {}},
    plugins: {},
		filter: function(str){ return $.trim(str.replace(/\s+/g, ' ')).replace(/,/g, ''); },
		encode: function(o){ return o ? o.join(',') : ''; },
		decode: function(o){ return o ? o.split(',') : []; }
  }, _options);
	
	element = $(element);
	
	var self = this;
	var init = function(){		
		original = element.css('display', 'none').attr('autocomplete', 'off').focus(focusLast);
		container = $('<div class="'+options.prefix+'" />')
			.insertAfter(element)
			.click(function(e){ 
				if ((e.target == list.get(0) || e.target == container.get(0)) && (!focused || current.toElement().get(0) != list.find(':last-child').get(0))) focusLast(); 			
			});			
		list = $('<ul class="'+ options.prefix +'-bits" />').appendTo(container);
		for (var name in options.plugins) enablePlugin(name, options.plugins[name]);		
		afterInit();
	};
	
	var enablePlugin = function(name, options){
		self.plugins[name] = new TextboxList[camelCase(capitalize(name))](self, options);
	};
	
	var afterInit = function(){
		if (options.endEditableBit) create('editable', null, {tabIndex: original.tabIndex}).inject(list);
		addEvent('bitAdd', update, true);
		addEvent('bitRemove', update, true);
		$(document).click(function(e){
			if (!focused) return;
			if (e.target.className.indexOf(options.prefix) != -1){				
				if (e.target == $(container).get(0)) return;				
				var parent = $(e.target).parents('div.' + options.prefix);
				if (parent.get(0) == container.get(0)) return;
			}
			blur();
		}).keydown(function(ev){
			if (!focused || !current) return;
			var caret = current.is('editable') ? current.getCaret() : null;
			var value = current.getValue()[1];
			var special = !!$.map(['shift', 'alt', 'meta', 'ctrl'], function(e){ return ev[e]; }).length;
			var custom = special || (current.is('editable') && current.isSelected());
			var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
			switch (ev.which){
				case 8:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.previous:
					if (current.is('box') || ((caret == 0 || !value.length) && !custom)){
						evStop();
						focusRelative('prev');
					}
					break;
				case 46:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.next: 
					if (current.is('box') || (caret == value.length && !custom)){
						evStop();
						focusRelative('next');
					}
			}
		});
		setValues(options.decode(original.val()));
	};
	
	var create = function(klass, value, opt){
		if (klass == 'box'){
			if (!value[0] && !value[1]) return false;
			if (chk(options.max) && list.getChildren('.' + options.prefix + '-bit-box').length + 1 > options.max) return false;
			if (options.unique && $.inArray(uniqueValue(value), index) != -1) return false;		
		}		
		return new TextboxListBit(klass, value, self, $.extend(true, options.bitsOptions[klass], opt));
	};
	
	var uniqueValue = function(value){
		return chk(value[0]) ? value[0] : (options.uniqueInsensitive ? value[1].toLowerCase() : value[1]);
	};
	
	var add = function(plain, id, html, afterEl){
		var b = create('box', [id, plain, html]);
		if (b){
			if (!afterEl || !afterEl.length) afterEl = list.find('.' + options.prefix + '-bit-box').filter(':last');
			b.inject(afterEl.length ? afterEl : list, afterEl.length ? 'after' : 'top');
		} 
		return self;
	};
	
	var focusRelative = function(dir, to){
		var el = getBit(to && $(to).length ? to : current).toElement();
		var b = getBit(el[dir]());
		if (b) b.focus();
		return self;
	};
	
	var focusLast = function(){
		var lastElement = list.children().filter(':last');
		if (lastElement) getBit(lastElement).focus();
		return self;
	};
	
	var blur = function(){	
		if (! focused) return self;
		if (current) current.blur();
		focused = false;
		return fireEvent('blur');
	};
	
	var getBit = function(obj){				
		return obj.jquery ? $(obj).data('textboxlist:bit') : obj;
	};
	
	var getValues = function(){
		return $.grep($.map(list.children(), function(el){
			var bit = getBit($(el));
			if (bit.is('editable')) return null;
			var v = bit.getValue();
			return (chk(v[0]) ? v[0] : options.filter(v[1])) || null;
		}), function(o){ return o != undefined; });
	};
	
	var setValues = function(values){
		if (!values) return;
		$.each(values, function(i, v){
			if (v) add.apply(self, $.isArray(v) ? [v[1], v[0], v[2]] : [v]);
		});		
	};
	
	var update = function(){
		original.val(options.encode(getValues()));
	};
	
	var addEvent = function(type, fn){
		if (events[type] == undefined) events[type] = [];
		var exists = false;
		$.each(events[type], function(f){
			if (f === fn){
				exists = true;
				return;
			};
		});
		if (!exists) events[type].push(fn);
		return self;
	};
	
	var fireEvent = function(type, args, delay){
		if (!events || !events[type]) return self;
		$.each(events[type], function(i, fn){		
			(function(){
				args = (args != undefined) ? splat(args) : Array.prototype.slice.call(arguments);
				var returns = function(){
					return fn.apply(self || null, args);
				};
				if (delay) return setTimeout(returns, delay);
				return returns();
			})();
		});
		return self;
	};
	
	var removeEvent = function(type, fn){
		if (events[type]){
			for (var i = events[type].length; i--; i){
				if (events[type][i] === fn) events[type].splice(i, 1);
			}
		} 
		return self;
	};
	
	this.onFocus = function(bit){
		if (current) current.blur();
		clearTimeout(blurtimer);
		current = bit;
		container.addClass(options.prefix + '-focus');		
		if (!focused){
			focused = true;
			fireEvent('focus', bit);
		}
	};
	
	this.onAdd = function(bit){
		if (options.unique && bit.is('box')) index.push(uniqueValue(bit.getValue()));
		if (bit.is('box')){
			var prior = getBit(bit.toElement().prev());
			if ((prior && prior.is('box') && options.inBetweenEditableBits) || (!prior && options.startEditableBit)){				
				var priorEl = prior && prior.toElement().length ? prior.toElement() : false;
				var b = create('editable').inject(priorEl || list, priorEl ? 'after' : 'top');
				if (options.hideEditableBits) b.hide();
			}
		}
	};
	
	this.onRemove = function(bit){
		if (!focused) return;
		if (options.unique && bit.is('box')){
			var i = $.inArray(uniqueValue(bit.getValue()), index);
			if (i != -1) index = index.splice(i + 1, 1);
		} 
		var prior = getBit(bit.toElement().prev());
		if (prior && prior.is('editable')) prior.remove();
		focusRelative('next', bit);
	};
	
	this.onBlur = function(bit, all){
		current = null;
		container.removeClass(options.prefix + '-focus');		
		blurtimer = setTimeout(blur, all ? 0 : 200);
	};
	
	this.setOptions = function(opt){
		options = $.extend(true, options, opt);
	};
	
	this.getOptions = function(){
		return options;
	};
	
	this.getContainer = function(){
		return container;
	};
	
	this.addEvent = addEvent;
	this.removeEvent = removeEvent;
	this.fireEvent = fireEvent;
	this.create = create;
	this.add = add;
	this.getValues = getValues;
	this.plugins = [];
	init();
};

TextboxListBit = function(type, value, textboxlist, _options){
	
	var element, bit, prefix, typeprefix, close, hidden, focused = false, name = capitalize(type); 
	var options = $.extend(true, type == 'box' ? {
		deleteButton: true
  } : {
		tabIndex: null,
		growing: true,
		growingOptions: {},
		stopEnter: true,
		addOnBlur: false,
		addKeys: 13
	}, _options);
	
	this.type = type;
	this.value = value;
	
	var self = this;
	var init = function(){
		prefix = textboxlist.getOptions().prefix + '-bit';
		typeprefix = prefix + '-' + type;
		bit = $('<li />').addClass(prefix).addClass(typeprefix)
			.data('textboxlist:bit', self)
			.hover(function(){ 
				bit.addClass(prefix + '-hover').addClass(typeprefix + '-hover'); 
			}, function(){
				bit.removeClass(prefix + '-hover').removeClass(typeprefix + '-hover'); 
			});
		if (type == 'box'){
			if(chk(self.value[2]))
				bit.html(self.value[2]);
			else
				bit.text(self.value[1]);
			bit.click(focus);
			if (options.deleteButton){
				bit.addClass(typeprefix + '-deletable');
				close = $('<a href="#" class="'+ typeprefix +'-deletebutton" />').click(function(event) { event.preventDefault(); remove(); }).appendTo(bit);
			}
			bit.children().click(function(e){ e.stopPropagation(); e.preventDefault(); });
		} else {
			element = $('<input type="text" class="'+ typeprefix +'-input" autocomplete="off" />').val(self.value ? self.value[1] : '').appendTo(bit);
			if (chk(options.tabIndex)) element.tabIndex = options.tabIndex;
			if (options.growing) new GrowingInput(element, options.growingOptions);		
			element.focus(function(){ focus(true); }).blur(function(){
				blur(true);
				if (options.addOnBlur) toBox(); 
			});				
			if (options.addKeys || options.stopEnter){
				element.keydown(function(ev){
					if (!focused) return;
					var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
					if (options.stopEnter && ev.which === 13) evStop();
					if ($.inArray(ev.which, splat(options.addKeys)) != -1){
						evStop();
						toBox();
					}
				});
			}
		}
	};
	
	var inject = function(el, where){
		switch(where || 'bottom'){
			case 'top': bit.prependTo(el); break;
			case 'bottom': bit.appendTo(el); break;
			case 'before': bit.insertBefore(el); break;			
			case 'after': bit.insertAfter(el); break;						
		}
		textboxlist.onAdd(self);	
		return fireBitEvent('add');
	};
	
	var focus = function(noReal){
		if (focused) return self;
		show();
		focused = true;
		textboxlist.onFocus(self);
		bit.addClass(prefix + '-focus').addClass(prefix + '-' + type + '-focus');
		fireBitEvent('focus');		
		if (type == 'editable' && !noReal) element.focus();
		return self;
	};
	
	var blur = function(noReal){
		if (!focused) return self;
		focused = false;
		textboxlist.onBlur(self);
		bit.removeClass(prefix + '-focus').removeClass(prefix + '-' + type + '-focus');
		fireBitEvent('blur');
		if (type == 'editable'){
			if (!noReal) element.blur();
			if (hidden && !element.val().length) hide();
		}
		return self;
	};
	
	var remove = function(){
		blur();
		textboxlist.onRemove(self);
		bit.remove();
		return fireBitEvent('remove');
	};
	
	var show = function(){
		bit.css('display', 'block');
		return self;
	};
	
	var hide = function(){
		bit.css('display', 'none');		
		hidden = true;
		return self;
	};
	
	var fireBitEvent = function(type){
		type = capitalize(type);
		textboxlist.fireEvent('bit' + type, self).fireEvent('bit' + name + type, self);
		return self;
	};
	
  this.is = function(t){
    return type == t;
  };

	this.setValue = function(v){
		if (type == 'editable'){
			element.val(chk(v[0]) ? v[0] : v[1]);
			if (options.growing) element.data('growing').resize();
		} else value = v;
		return self;
	};

 	this.getValue = function(){
		return type == 'editable' ? [null, element.val(), null] : value;
	};
	
	if (type == 'editable'){
		this.getCaret = function(){
 			var el = element.get(0);
			if (el.createTextRange){
		    var r = document.selection.createRange().duplicate();		
		  	r.moveEnd('character', el.value.length);
		  	if (r.text === '') return el.value.length;
		  	return el.value.lastIndexOf(r.text);
		  } else return el.selectionStart;
		};

		this.getCaretEnd = function(){
 			var el = element.get(0);			
			if (el.createTextRange){
				var r = document.selection.createRange().duplicate();
				r.moveStart('character', -el.value.length);
				return r.text.length;
			} else return el.selectionEnd;
		};
		
		this.isSelected = function(){
			return focused && (self.getCaret() !== self.getCaretEnd());
		};
		
		var toBox = function(){
			var value = self.getValue();				
			var b = textboxlist.create('box', value);
			if (b){
				b.inject(bit, 'before');
				self.setValue([null, '', null]);
				return b;
			}
			return null;
		};
		
		this.toBox = toBox;
	}
	
	this.toElement = function(){
		return bit;
	};
	
	this.focus = focus;
	this.blur = blur;
	this.remove = remove;
	this.inject = inject;
	this.show = show;
	this.hide = hide;
	this.fireBitEvent = fireBitEvent;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var splat = function(a){ return (Object.prototype.toString.call(a) === "[object Array]") ? a : [a]; };
var camelCase = function(str){ return str.replace(/-\D/g, function(match){ return match.charAt(1).toUpperCase(); }); };
var capitalize = function(str){ return str.replace(/\b[a-z]/g, function(A){ return A.toUpperCase(); }); };

})(jQuery);

/**//**/

GYG.ProductEdit = function() {
	GYG.ProductEdit.running = this;
	var self = this;
	var oldHtml = {};
	var priceInitialized;
	var availabilityInitialized;

	var init = function() {
		$("a[href='#edit-form']").click(function(event) {
			event.preventDefault();
			
			var $this = $(this);
			var $part = $this.parent().parent();
			var fieldName = $(".ajax-load", $part).attr("id").replace(/field_/, "");
			
			$this.hide();
			
			// special availability handling
			if(fieldName != 'availability') {
				$("a[href='#cancel-edit-form']", $part).show();
			} else {
				oldHtml.availability = $("#field_availability").html();
				$("#field_availability").empty();
			}
			
			loadForm.apply(self, [fieldName]);
		});
		
		$("a[href='#cancel-edit-form']").click(function(event) {
			event.preventDefault();
		
			var $this = $(this);
			var $part = $this.parent().parent();
			var fieldName = $(".ajax-load", $part).attr("id").replace(/field_/, "");
			
			$this.hide();
			$("a[href='#edit-form']", $part).show();
			if(oldHtml[fieldName]) {
				$("#field_"+fieldName).html(oldHtml[fieldName]);
			} else {
				showGYGindowError.apply(self);
			}
		});
		
		// trigger functions
		triggerDeleteTour.apply(self);
		triggerEditStatus.apply(self);
		triggerFreeSale.apply(self);
		
		// target groups
		var $tGroupsAll = $("input[name='target_group_all']");
		// initial check
		if($(".t-groups:checked").size() == 0) {
			$tGroupsAll.attr("checked", true);
		}
		// on change of real target groups
		$(".t-groups").click(function() {
			if($(".t-groups:checked").size() == 0) {
				$tGroupsAll.attr("checked", true);
			} else if($(".t-groups:checked").size() > 0) {
				$tGroupsAll.attr("checked", false);
			}
		});
		// on change of all
		$tGroupsAll.click(function() {
			if(this.checked) {
				$(".t-groups:checked").attr("checked", false);
			}
		});
	};
	
	// edit product data
	var loadForm = function(fieldName) {
		var data = {
			action: "edit",
			field: fieldName,
			tour_id: GYG.ProductEdit.tour_id,
			language_id: GYG.ProductEdit.language_id
		};
		
		$.ajax({
			type: "post",
			url: "/supplier/ajax/product_edit.php",
			data: data,
			dataType: "json",
			success: function(json) {
				var data = json.data;
				var i = data.length;
				var $form;
				while(i--) {
					// save old values
					oldHtml[data[i].field] = $("#field_"+data[i].field).html();
					
					// replace startvalue with form
					$("#field_"+data[i].field).html(data[i].html);
					
					//special handling for avaialbility
					if(data[i].field == 'availability') {
						$("#availability-container p.info").removeClass("hidden");
						if($("#new-availability").hasClass("hidden")) {
							$("form.edit-form", $("#availability-container")).removeClass("hidden");
						}
						$("#availability-container").addClass("edit-active");
					}
					
					// initialize special js
					if(data[i].field == 'prices') {
						initializePrice.apply(self);
					}
					if(data[i].field == 'availability') {
						initializeAvailability.apply(self);
					}
					
					// form special submit event
					$form = $(".edit-form", $("#field_"+data[i].field).parent());
					$form.submit(function(event) {
						event.preventDefault();
						submitForm.apply(self, [$(this)]);
					});
					
					new GYG.TextFieldCounter();
				};
			},
			error: function() {
				showGYGindowError.apply(self);
				$("a[href='#cancel-edit-form']", $("#field_"+fieldName).parents(".part")).hide();
				$("a[href='#edit-form']", $("#field_"+fieldName).parents(".part")).show();
				//special for availability
				if(fieldName == 'availability') {
					$("#field_"+fieldName).html(oldHtml[fieldName]);
				}
			}
		});
	};
	var submitForm = function($form) {
		$("a[href='#cancel-edit-form']", $form.parents('.part')).hide();
		var data = $form.serialize();
		self.showLoadingIndicator.apply(self, [$form]);
		
		$.ajax({
			type: "post",
			url: "/supplier/ajax/product_edit.php",
			data: data,
			dataType: "json",
			success: function(json) {
				var data = json.data;
				var i = data.length;
				if(json.success) {
					$("a[href='#edit-form']", $("#field_"+json.field).parents('.part')).show();
					while(i--) {
						$("#field_"+data[i].field).html(data[i].html);
						
						// special availability handling
						if(data[i].field == 'availability') {
							$("#availability-container p.info").addClass("hidden");
							$("#availability-container").removeClass("edit-active");
							$(".loading-indicator", $("#availability-container .edit-form")).remove();
							$("#availability-container .edit-form").css("height", "auto");
							$("#availability-container .edit-form").addClass("hidden");
						}
					};
					self.highlightElement.apply(self, [$("#field_"+json.field)]);
				} else {
					if(json.field != 'availability') {
						$("a[href='#cancel-edit-form']", $("#field_"+json.field).parents('.part')).show();
					}
					while(i--) {
						$("#field_"+data[i].field).html(data[i].html);
						
						// initialize special js
						if(data[i].field == 'prices') {
							initializePrice.apply(self);
						}
						if(data[i].field == 'availability') {
							initializeAvailability.apply(self);
						}
						
						// form special submit event
						$form = $(".edit-form", $("#field_"+data[i].field).parent());
						$form.submit(function(event) {
							event.preventDefault();
							submitForm.apply(self, [$(this)]);
						});
					};
				}
			},
			error: function() {
				showGYGindowError.apply(self);
				$(".loading-indicator", $form).remove();
				$form.css("height", "auto");
			}
		});
	};
	
	var initializePrice = function() {
		priceInitialized = true;
		
		var p = new GYG.Prices();
		
		// hide praticipants if group price
		$("select[name='price_type']").change(function() {
			var $priceLi = $("#visible-price-table").parent().parent();
			var $minMax = $("#min-max-participants");
			
			// switch tables
			var hiddenTable = $("#hidden-price-container").html();
			var visibleTable = $("#visible-price-table").html();
			$("#hidden-price-container").html(visibleTable);
			$("#visible-price-table").html(hiddenTable);
			
			if($(this).val() == 'per_person') {
				$minMax.show();
			} else if($(this).val() == 'group') {
				$minMax.hide();
			}
			p.triggerAddColumn.apply(self);
			p.triggerDeleteSeason.apply(self);
			p.triggerDeleteCategory.apply(self);
		});
	};
	
	var initializeAvailability = function() {
		availabilityInitialized = true;
		
		var a = new GYG.Availability();
	};
	
	// edit product stati: delete, deactivate, free sale
	var triggerDeleteTour = function() {
		var self = this;
		
		$("a[href='#delete']").click(function(event) {
			event.preventDefault();
			var picID = "dummy";
			if($("#pic-preview img").length) {
				picID = $("#pic-preview img:first-child").attr("src").match(/img-([^-]+)-\d+./)[1];
			}
			confirmTourDelete.apply(self, [$(this).attr("name").replace(/t/, ''), 'delete', picID]);
		});
	};
	var triggerFreeSale = function() {
		var self = this;
		$("a[href='#enable-free-sale']").unbind();
		$("a[href='#disable-free-sale']").unbind();
		
		$("a[href='#enable-free-sale']").click(function(event) {
			event.preventDefault();
			var picID = "dummy";
			if($("#pic-preview img").length) {
				picID = $("#pic-preview img:first-child").attr("src").match(/img-([^-]+)-\d+./)[1];
			}
			confirmEditFreeSaleStatus.apply(self, [$(this).attr("name").replace(/t/, ''), 'enable', picID]);
		});
		
		$("a[href='#disable-free-sale']").click(function(event) {
			event.preventDefault();
			var picID = "dummy";
			if($("#pic-preview img").length) {
				picID = $("#pic-preview img:first-child").attr("src").match(/img-([^-]+)-\d+./)[1];
			}
			editFreeSaleStatus.apply(self, [$(this).attr("name").replace(/t/, ''), 'disable', picID]);
		});
	};
	var triggerEditStatus = function() {
		var self = this;
		$("a[href='#deactivate']").unbind();
		$("a[href='#activate']").unbind();
		
		$("a[href='#deactivate']").click(function(event) {
			event.preventDefault();
			var picID = "dummy";
			if($("#pic-preview img").length) {
				picID = $("#pic-preview img:first-child").attr("src").match(/img-([^-]+)-\d+./)[1];
			}
			confirmTourDeactivate.apply(self, [$(this).attr("name").replace(/t/, ''), 'deactivate', picID]);
		});
		$("a[href='#activate']").click(function(event) {
			event.preventDefault();
			var picID = "dummy";
			if($("#pic-preview img").length) {
				picID = $("#pic-preview img:first-child").attr("src").match(/img-([^-]+)-\d+./)[1];
			}
			editTourStatus.apply(self, [$(this).attr("name").replace(/t/, ''), 'activate', picID]);
		});
	};
	
	var confirmTourDelete = function(id, action, picID) {
		var self = this;
		GYG.GYGindow.confirm({
			title:   GYG.translation.TourEdit.deleteConfirmTitle,
			message: '<img src="img/tour_img-'+picID+'-8.jpg" width="55" height="55" />'+GYG.translation.TourEdit.deleteConfirmMessage.replace(/%1/, "<strong>"+$("#top-bar h3").text()+"</strong>"),
			confirm: GYG.translation.TourEdit.deleteConfirmConfirm,
			cancel:  GYG.translation.TourEdit.deleteConfirmCancel,
			callBack: function(shouldDelete) {
				if(shouldDelete) editTourStatus.apply(self, [id, action]);
			}
		});
	};
	var confirmTourDeactivate = function(id, deactivate, picID) {
		var self = this;
		GYG.GYGindow.confirm({
			title:   GYG.translation.TourEdit.deactivateConfirmTitle,
			message: '<img src="img/tour_img-'+picID+'-8.jpg" width="55" height="55" />'+GYG.translation.TourEdit.deactivateConfirmMessage.replace(/%1/, "<strong>"+$("#top-bar h3").text()+"</strong>"),
			confirm: GYG.translation.TourEdit.deactivateConfirmConfirm,
			cancel:  GYG.translation.TourEdit.deactivateConfirmCancel,
			callBack: function(shouldDelete) {
				if(shouldDelete) editTourStatus.apply(self, [id, deactivate]);
			}
		});
	};
	var confirmEditFreeSaleStatus = function(id, enable, picID) {
		var self = this;
		GYG.GYGindow.confirm({
			title:   GYG.translation.TourEdit.freeSaleConfirmTitle,
			message: '<img src="img/tour_img-'+picID+'-8.jpg" width="55" height="55" />'+GYG.translation.TourEdit.freeSaleConfirmMessage.replace(/%1/, "<strong>"+$("#top-bar h3").text()+"</strong>"),
			confirm: GYG.translation.TourEdit.freeSaleConfirmConfirm,
			cancel:  GYG.translation.TourEdit.freeSaleConfirmCancel,
			callBack: function(shouldDelete) {
				if(shouldDelete) editFreeSaleStatus.apply(self, [id, enable]);
			}
		});
	};
	
	var editTourStatus = function(id, action) {
		var self = this;
		var data = {
			field: "tour_user_status",
			action: action,
			tour_id: id
		};
		if(action == 'delete') {
			data.redirect = true;
		}
		
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/product_edit.php",
			data: data,
			dataType: "json",
			success: function(data) {
				if(data.success) {
					if(data.action == 'delete') {
						window.location.href = data.relocate;
					} else {
						var $li = $("li#t"+data.tour_id);
						if(data.action == 'activate') {
							$(".active.hidden").removeClass("hidden");
							$(".deactivated:not(.hidden)").addClass("hidden");
							$("a[href='#activate']:not(.hidden)").addClass("hidden");
							$("a[href='#deactivate'].hidden").removeClass("hidden");
							self.highlightElement.apply(self, [$(".active")]);
						} else if(data.action == 'deactivate') {
							$(".active:not(.hidden)").addClass("hidden");
							$(".deactivated.hidden").removeClass("hidden");
							$("a[href='#activate'].hidden").removeClass("hidden");
							$("a[href='#deactivate']:not(.hidden)").addClass("hidden");
							self.highlightElement.apply(self, [$(".deactivated")]);
						}
						triggerEditStatus.apply(self);
					}
				} else {
					showGYGindowError.apply(self);
				}
			},
			error: function() { 
				showGYGindowError.apply(self);
			}
		});
	};
	var editFreeSaleStatus = function(id, action) {
		var self = this;
		
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/product_edit.php",
			data: {
				field: "free_sale",
				action: action,
				tour_id: id
			},
			dataType: "json",
			success: function(data) {
				if(data.success) {
					if(data.action == 'enable') {
						$(".free-sale-enabled.hidden").removeClass("hidden");
						$(".free-sale-disabled:not(.hidden)").addClass("hidden");
						$("a[href='#enable-free-sale']:not(.hidden)").addClass("hidden");
						$("a[href='#disable-free-sale'].hidden").removeClass("hidden");
						//self.highlightElement.apply(self, [$(".free-sale-enabled")]);
					} else if(data.action == 'disable') {
						$(".free-sale-enabled:not(.hidden)").addClass("hidden");
						$(".free-sale-disabled.hidden").removeClass("hidden");
						$("a[href='#enable-free-sale'].hidden").removeClass("hidden");
						$("a[href='#disable-free-sale']:not(.hidden)").addClass("hidden");
						//self.highlightElement.apply(self, [$(".free-sale-disabled")]);
					}
				} else {
					showGYGindowError.apply(self);
				}
			},
			error: function() { 
				showGYGindowError.apply(self);
			}
		});
	};
	
	// general utilities
	this.highlightElement = function($e) {
		$e.css("background-color", "#FDF285");
		$e.animate({ backgroundColor: "#ffffff" }, 1500);
	};
	this.showLoadingIndicator = function($el) {
		// limit $el height
		var height = $el.height();
		var animate = false;
		if(height > 250) {
			height = 250;
			animate = true;
		}
		if(height < 150) {
			height = 150;
			animate = true;
		}

		$("#content > .loading-indicator").clone().appendTo($el).css({
			"padding-top": (height-70)/2 + "px"
		});

		if(animate)
			$el.animate({ height: height }, 0);
	};
	var showGYGindowError = function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.General.errorTitle,
				show_error: true,
				error_message: GYG.translation.General.errorMessage
			}
		});
	};
	
	init.apply(this);
};

// run if on edit
$(function() {
	if(document.body.id == "tour-edit") {
		GYG.ProductEdit.running = new GYG.ProductEdit();
	}
});

/**//**/

GYG.TourUpcoming = function() {
	var self = this;
	var firstTime = true;
	var items, object, strings = [];
	filteredItems = [];
	selectedItems = {
		count: 0
	};
	var narrowDownBox;
	var $filterList = $('#filter-list ul');
	var $datePicker = $("#start-date");
	var $list = $('#list ul');
	
	var initialize = function() {
		var options = {
			selector: '.narrowdownbox',
			delegate: self,
			textFieldPlaceholder: GYG.translation.TourUpcoming.textFieldPlaceholder,
			noResultsMessage: GYG.translation.TourUpcoming.noResultsMessage
		};
		narrowDownBox = new GYG.NarrowDownBox(options);
		
		$('#all-tours').click(function(event) {
			event.preventDefault();
			removeAllTours.apply(self);
		});
		
		$filterList.find('a').click(function(event) {
			event.preventDefault();
			removeTour.apply(self, [this.parentNode.id.substr(1)]);
		});
		
		// init date picker
		$datePicker.datepicker({
			firstDay: Date.firstDayOfWeek,
			currentText: Date.currentDate,
			dateFormat: 'dd-mm-yy',
			showOn: 'both',
			buttonImage: 'img/calendar.png',
			buttonImageOnly: true,
			buttonText: Date.chooseDate,
			minDate: new Date(),
			dayNamesMin: [
				Date.dayNames[0].substr(0, 2),
				Date.dayNames[1].substr(0, 2),
				Date.dayNames[2].substr(0, 2),
				Date.dayNames[3].substr(0, 2),
				Date.dayNames[4].substr(0, 2),
				Date.dayNames[5].substr(0, 2),
				Date.dayNames[6].substr(0, 2)
			],
			monthNames: Date.monthNames,
			nextText: Date.nextMonth,
			prevText: Date.previousMonth
		});
		
		$datePicker.change(function() {
			$("#filter-bar a").css('display', 'block');
			updateDisplayedTours.apply(self, [false]);
		});
		
		$("#filter-bar a").click(function(event) {
			event.preventDefault();
			$(this).css('display', '');
			$datePicker.val('');
			updateDisplayedTours.apply(self, [false]);
		});
		
		$("#filter-booked input[type='checkbox']").click(function() {
			if(this.checked) {
				$("#filter-booked:not(.active)").addClass("active");
			} else {
				$("#filter-booked.active").removeClass("active");
			}
			updateDisplayedTours.apply(self, [false]);
		});
		
		showVacanciesForm.apply(self);
		setVacancies.apply(self);
		loadMore.apply(self);
		toggleAccept.apply(self);
		showDetails.apply(self);
		showOngoingsHelp.apply(self);
		showNonEditableHelp.apply(self);
	};
	
	this.initializeAsDelegate = function(o, _items) {
		items = _items;
		items.each(function(i) {
			strings.push($(this).children('p').text());
			filteredItems.push(i);
 		});
		object = o;
		delete this.initializeAsDelegate;
	};
	this.filterWithString = function(o, string) {
		filteredItems = [];
		if(string.length === 0) { // no filter
			items.each(function(i) {
				if(selectedItems[this.id] === undefined) {
					var $this = $(this);
					$this.removeClass('hidden').show();
					filteredItems.push(i);
					if(this._hasFilter === true) {
						delete $this._hasFilter;
						$this.children('p').empty().text(strings[i]);
					}
				}
			});
		} else {
			var index, $p, $text, $highlight;
			items.each(function(i) {
				index = strings[i].toLowerCase().indexOf(string.toLowerCase());
				if(index == -1) {
					$(this).hide().addClass("hidden");
				} else if(selectedItems[this.id] === undefined) {
					$this = $(this);
					this._hasFilter = true;
					$p = $this.children('p');
					$this.show().removeClass("hidden");
					filteredItems.push(i);
					$p.empty();
					$text = $('<span></span>');
					$text.text(strings[i].substring(0,index));
					$p.append($text);
					$highlight = $('<span class="highlight"></span>');
					$highlight.text(strings[i].substr(index,string.length));
					$p.append($highlight);
					$text = $('<span></span>');
					$text.text(strings[i].substr(index+string.length));
					$p.append($text);
				}
			});
		}
	};
	this.itemSelectedWithIndex = function(o, index) {
		var realIndex = filteredItems[index];
		var $item = items.eq(realIndex);
		$("#f"+$item.attr("id").substr(1), $filterList).fadeIn("fast");
		selectedItems[$item.attr("id").substr(1)] = {
			index: realIndex
		};
		selectedItems.count++;
		$item.hide().addClass("hidden");
		filteredItems.splice(index,1);
		o.listWasUpdated();
		
		if(selectedItems.count === 1) {
			$filterList.parent().removeClass('all');
		}
		
		updateDisplayedTours.apply(self, [false]);
	};
	
	var removeTour = function(id) {
		$("#f"+id, $filterList).slideUp("fast");
		items.eq(selectedItems[id].index).removeClass('hidden').show();
		filteredItems.splice(selectedItems[id].index,0,selectedItems[id].index);
		delete selectedItems[id];
		if(--selectedItems.count === 0) {
			$filterList.parent().addClass('all');
		}
		narrowDownBox.listWasUpdated();
	
		updateDisplayedTours.apply(self, [false]);
	};
	
	var removeAllTours = function() {
		$filterList.children().slice(1).slideUp('fast');
		
		var i = -1;
		for (var i=0; i < items.length; i++) {
			filteredItems[i] = i;
		}
		
		for (var id in selectedItems) {
			if(id === 'count') continue;
			items.removeClass('hidden').show();
			delete selectedItems[id];
		}
		selectedItems.count = 0;
		$filterList.parent().addClass('all');
		narrowDownBox.listWasUpdated();
		
		updateDisplayedTours.apply(self, [false]);
	};
	
	var loadMore = function() {
		$("a.load-more").unbind("click");
		$("a.load-more").click(function(event) {
			event.preventDefault();
			$(this).unbind("click");
			updateDisplayedTours.apply(self, [true]);
		});
	};
	var showDetails = function() {
		$("a[href*='#event-details']").unbind();
		$("a[href*='#event-details']").click(function(event) {
			event.preventDefault();
			var $li = $(this).parent().parent().parent();
			var $details = $(".event-details", $li);
			if($(this).hasClass("open")) {
				$(this).removeClass("open");
				$details.slideUp("fast");
			} else {
				$(this).addClass("open");
				if($details.hasClass("empty")) {
					$details.removeClass("empty");
					$(".accept-new", $li).hide();
					$(".loading-indicator", $li).show();
					$.ajax({
						type: "POST",
						url: "/supplier/ajax/upcomings_load.php",
						data: {
								action: 'one_event_details',
								tour_id: parseInt($("input[name='tour_id']", $li).val(), 10),
								start_datetime: $("input[name='start_datetime']", $li).val()
							},
						dataType: "json",
						success: function(data) {
						 	if(data.success) {
								$details.html(data.one_event_details_html);
								$(".loading-indicator", $li).hide();
								$(".accept-new", $li).show();
								$details.slideDown("fast");
								GYG.GYGindow.processLinks();
							} else {
								$(".loading-indicator", $li).hide();
								$(".accept-new", $li).show();
								showGYGindowError.apply(self);
							}
						},
						error: function() {
							$(".loading-indicator", $li).hide();
							$(".accept-new", $li).show();
							showGYGindowError.apply(self);
						}
					});
				} else {
					$details.slideDown("fast");
				}
			}
		});
	};
	var showVacanciesForm = function() {
		$(".show-vacancies-form").unbind();
		$(".show-vacancies-form").click(function(event) {
			event.preventDefault();
			$("dd.vacancies", $(this).parent().parent().parent()).hide();
			$("dd.form", $(this).parent().parent().parent()).show();
			$("dd.form input[type='text']").css("background", "");
		});
	};
	var updateDisplayedTours = function(loadMoreItems) {
		var data = {
			action: 'filter',
			filter_booked_tours_only: 0
		};
		if(selectedItems.count > 0) {
			var tours = [];
			for (var id in selectedItems) {
				if(id === 'count') continue;
				tours.push(id);
			}
			data.filter_tour_ids = tours.join(',');
		}
		if($.trim($datePicker.val()).length > 0) {
			data.filter_start_date = $datePicker.val();
		}
		if(loadMoreItems) {
			data.number_of_loaded_items = $list.find('li.event').length;
		}
		if($("#filter-booked input[type='checkbox']").is(":checked")) {
			data.filter_booked_tours_only = 1;
		}
		
		$("#spinner").show();
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/upcomings_load.php",
			data: data,
			dataType: "json",
			success: function(data) {
			 	if(data.success) {
					if(data.start_at_0) {
						$list.fadeOut("fast", function() {
							$(".event", $list).remove();
							if(data.upcoming_list_html == "") {
								$("#no-results").show();
								$("#no-events-yet").hide();
								$("#filter-matched-no-events").show();
							} else {
								$("#no-results").hide();
								$("#no-events-yet").hide();
								$("#filter-matched-no-events").hide();
								$list.append(data.upcoming_list_html);
							}
							$list.fadeIn("fast");
							setVacancies.apply(self);
							showVacanciesForm.apply(self);
							toggleAccept.apply(self);
							showDetails.apply(self);
							showOngoingsHelp.apply(self);
							showNonEditableHelp.apply(self);
							GYG.GYGindow.processLinks();
						});
					} else {
						$list.append(data.upcoming_list_html);
						setVacancies.apply(self);
						showVacanciesForm.apply(self);
						toggleAccept.apply(self);
						showDetails.apply(self);
						showOngoingsHelp.apply(self);
						showNonEditableHelp.apply(self);
						GYG.GYGindow.processLinks();
					}
					if(data.more_items_available) {
						$("a.load-more.hidden").removeClass("hidden");
					} else {
						$("a.load-more:not(.hidden)").addClass("hidden");
					}
					loadMore.apply(self);
					$("#spinner").hide();
				} else {
					$("#spinner").hide();
					showGYGindowError.apply(self);
				}
			},
			error: function() {
				$("#spinner").hide();
				showGYGindowError.apply(self);
			}
		});
	};
	var setVacancies = function() {
		$("dd.form form").unbind();
		$("dd.form form").submit(function(event) {
			event.preventDefault();
			var $form = $(this);
			var $dl = $form.parent().parent();
			var $li = $dl.parent().parent();
			$(".accept-new", $li).hide();
			$(".loading-indicator", $li).show();
			$.ajax({
				type: "POST",
				url: "/supplier/ajax/upcomings_load.php",
				data: $form.serializeArray(),
				dataType: "json",
				success: function(data) {
				 	if(data.success) {
						$form.parent().hide();
						$("dd.vacancies span.vac", $dl).text(data.new_vacancies);
						$("dd.vacancies", $dl).show();
						$(".loading-indicator", $li).hide();
						$(".accept-new", $li).show();
						var bookings = parseInt($(".bookings", $li).text(), 10);
						var vacancies = parseInt(data.new_vacancies, 10);
						var sum = bookings+vacancies;
						if(sum != 0) {
							var offset = Math.round(bookings/sum*44);
						} else {
							var offset = 0;
						}
						$(".fill-indicator", $li).css("background-position", "0 -"+offset+"px");
					} else {
						$(".loading-indicator", $li).hide();
						$(".accept-new", $li).show();
						$("input[type='text']", $form).css("background", "#FDCBCC").css("border-color", "#C60006");
					}
				},
				error: function() {
					$(".loading-indicator", $li).hide();
					$(".accept-new", $li).show();
					showGYGindowError.apply(self);
				}
			});
		});
	};
	var toggleAccept = function() {
		$(".toggle a").unbind();
		$(".toggle a").click(function(event) {
			event.preventDefault();
			var accept;
			var $li = $(this).parent().parent().parent().parent();
			var tourId = parseInt($("input[name='tour_id']", $li).val(), 10);
			var startDatetime = $("input[name='start_datetime']", $li).val();
			if($(this).hasClass("on")) {
				accept = 1;
			} else if($(this).hasClass("off")) {
				accept = 0;
			}
			setAcceptNewBookings.apply(self, [accept, tourId, startDatetime, $li]);
		});
	};
	var setAcceptNewBookings = function(accept, id, datetime, $li) {
		$(".accept-new", $li).hide();
		$(".loading-indicator", $li).show();
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/upcomings_load.php",
			data: {
					action: 'accept_new_bookings',
					accept: accept,
					tour_id: id,
					start_datetime: datetime
				},
			dataType: "json",
			success: function(data) {
			 	if(data.success) {
					if(data.new_accept) {
						$(".toggle.off", $li).removeClass("off");
						$(".toggle:not(.on)", $li).addClass("on");
						$("dd.vacancies span.vac", $li).text(data.new_vacancies);
						$("input[name='vacancies']", $li).val(data.new_vacancies);
						var bookings = parseInt($(".bookings", $li).text(), 10);
						var vacancies = parseInt(data.new_vacancies, 10);
						var sum = bookings+vacancies;
						if(sum != 0) {
							var offset = Math.round(bookings/sum*44);
						} else {
							var offset = 0;
						}
						$li.removeClass("closed");
						$(".fill-indicator", $li).css("background-position", "0 -"+offset+"px");
					} else {
						$(".toggle:not(.off)", $li).addClass("off");
						$(".toggle.on", $li).removeClass("on");
						$li.addClass("closed");
					}
					$(".loading-indicator", $li).hide();
					$(".accept-new", $li).show();
				} else {
					$(".loading-indicator", $li).hide();
					$(".accept-new", $li).show();
					showGYGindowError.apply(self);
				}
			},
			error: function() {
				$(".loading-indicator", $li).hide();
				$(".accept-new", $li).show();
				showGYGindowError.apply(self);
			}
		});
	};
	var showOngoingsHelp = function () {
		$(".temp-bookings").unbind();
		$(".temp-bookings").click(function() {
			showGYGindowOngoingBookingsHelp.apply(self);
		});
	};
	var showNonEditableHelp = function () {
		$(".tour-deleted").unbind();
		$(".tour-deleted").click(function() {
			showGYGindowNonEditableHelp.apply(self);
		});
	};
	var showGYGindowError = function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.General.errorTitle,
				show_error: true,
				error_message: GYG.translation.General.errorMessage,
				error_relocate: "/supplier/upcomings.php"
			}
		});
	};
	var showGYGindowOngoingBookingsHelp = function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.TourUpcoming.ongoingHelpTitle,
				content: "<p id='ongoing-help'>"+GYG.translation.TourUpcoming.ongoingHelpText+"</p>",
				cancel: false
			}
		});
	};
	var showGYGindowNonEditableHelp = function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.TourUpcoming.nonEditableHelpTitle,
				content: "<p id='ongoing-help'>"+GYG.translation.TourUpcoming.nonEditableHelpText+"</p>",
				cancel: false
			}
		});
	}; 
	
	initialize.apply(self, arguments);
};

$(function() {
	if(document.body.id == "upcomings") {
		GYG.TourEdit.running = new GYG.TourUpcoming();
	}
});

/**//**/

GYG.SupplierRegister = function() {
	this.init();
};

$.extend(GYG.SupplierRegister.prototype, {
	init: function() {
		var self = this;
	}
});

// run if on supplier info page
$(function() {
	if($("#register").length) {
		GYG.SupplierRegister.running = new GYG.SupplierRegister();
	}
});


/**//**/

GYG.SupplierInfo = function() {
	this.init();
};

$.extend(GYG.SupplierInfo.prototype, {
	init: function() {
		var self = this;
		
		// Feature menue
		$("#feature-menue a").click(function(event) {
			event.preventDefault();
			var hash = $(this).attr("href").replace(/#/, "");
			var $whiteBox = $("#features-tab .white");
			
			$("#feature-menue a.selected").removeClass("selected");
			$whiteBox.attr("class", "white "+hash);
			$("#features-tab div.short-description:not(hidden)").hide();
			$("#features-tab .play").attr("href", "#"+hash+"-movie");
			
			$("#feature-menue a[href='#"+hash+"']").addClass("selected");
			$("#features-tab div.short-description."+hash).fadeIn("fast");
		});
	}
});

// run if on supplier info page
$(function() {
	if($("#supplier-info").length) {
		GYG.SupplierInfo.running = new GYG.SupplierInfo();
	}
});

/**//**/

GYG.SupplierSettings = function() {
	this.init();
};

$.extend(GYG.SupplierSettings.prototype, {
	init: function() {
		var self = this;
		
		if(document.body.id == "settings") {
			if(location.hash != '') {
				var hash = location.hash.replace(/#/, '');
				var $tab = $(".tab#"+hash+"-tab");
				if($tab.length) {
					$(".tab-selected").attr("class", "tab");
					$("#tabs-menu a.selected").attr("class", "");
					$tab.attr("class", "tab-selected");
					$("a[href='#"+hash+"-tab']").attr("class", "selected");
				}
			}
		}
		
		$("#tabs-menu a").click(function(event) {
			event.preventDefault();
			if(this.className == "selected") return;
			$("#tabs-menu .selected").removeClass("selected");
			$this = $(this);
			$this.addClass("selected");
			$(".tab-selected").fadeOut(100, function() {
				$(this).attr("class", "tab");
				$($this.attr("href")).fadeIn(100, function() { $(this).attr("class", "tab-selected"); });
			});
		});
		
		$("a[href='#edit']").click(function(event) {
			event.preventDefault();
			
			$this = $(this);
			$this.hide();
			var item = $this.parent().parent();
			$("a[href='#cancel']", item).show();
			$(".default", item).slideUp("fast");
			$(".edit", item).slideDown(
				"fast",
				// IE blanks element after sliding, setting zoom to 1 helps
				($.browser.msie
					? function() { $(this).css("zoom", "1"); }
					: undefined)
			);
		});
		
		$("a[href='#cancel']").click(function(event) {
			event.preventDefault();
		
			$this = $(this);
			$this.hide();
			var item = $this.parent().parent();
			$("a[href='#edit']", item).show();
			$(".edit", item).hide();
			$(".default", item).show();
			
			// remove old errors
			$("p.error", item).remove();
		});
		
		$(".item form:not(.image):not(#user-delete)").submit(function(event) {
			event.preventDefault();
			var $form = $(this);
			$("a[href='#cancel']", $form.parent()).hide();
			
			$.post("/supplier/ajax/settings_edit.php", $form.serializeArray(), function(data) { self.processResponse.apply(self, [data]); }, "json");
			self.showLoadingIndicator($form);
		});
		
		// upload new picture
		$(".item form.image").submit(function(event) {

			var $form = $(this);
			
			$("a[href='#cancel']", $form.parent()).hide();
			
			self.showLoadingIndicator($form);
		});
		
		$("#picture").change(function() {
			$("#picture-upload").submit();
		});
		
		// user Delete
		shouldDeleteUser = false;
		$("#user-delete").submit(function(event) {
			if(!shouldDeleteUser) {
				event.preventDefault();
				self.confirmUserDelete.apply(self);
			}
		});
		
		$("#user-delete a").click(function(event) {
			event.preventDefault();
			$(this).parent().submit();
		});
	},
	
	processResponse: function(data, $editBlock) {
		if(!$editBlock)
			var $editBlock = $("input[name='edit'][value='"+data.edit+"']").parents(".edit");
		
		$editBlock.css("height", "auto");
		// hide loading indicator
		$(".loading-indicator", $editBlock).remove();
		
		// remove old errors
		$("p.error", $editBlock).remove();
		
		if(data.success) {
			$editBlock.hide();
			var $default = $editBlock.parent().children('.default');
			$default.show();
			// show cancel button
			$("a[href='#edit']", $editBlock.parents(".item")).show();
			
			this.updateWithNewValues[data.edit].apply(this, [data.new_values, $default]);;
		} else {
			// show cancel button
			$("a[href='#cancel']", $editBlock.parents(".item")).show();
			
			var $newEl, i, $error, $p;
			for(field in data.user_exceptions) {
				$newEl = $('<p class="error"></p>');
				
				$error = $("<span></span>");
				$error.text(data.user_exceptions[field][0]);
				$newEl.append($error);
				
				for(i = 1; i<data.user_exceptions[field].length; i++) {
					$newEl.append("<br />");
					$error = $("<span></span>");
					$error.text(data.user_exceptions[field][i]); 
					$newEl.append($error);
				}
				
				$p = $('[name="'+field+'"]', $editBlock).parents('p');
				$newEl.insertBefore($p);
			}
		}
	},
	
	processImageUploadResponse: function(data) {
		if(data.picture_type == 'insurance_policy') {
			$.extend(data, {
				edit:'insurance_policy_upload'
			});
		} else {
			$.extend(data, {
				edit:'profile_picture_upload'
			});
		}
		GYG.SupplierSettings.running.processResponse.apply(GYG.SupplierSettings.running, [data, $("form.image")]);
	},
	
	showLoadingIndicator: function($el) {
		// limit $el height
		var height = $el.height();
		if(height > 200) {
			height = 200;
			var animate = true;
		}
		
		$("#content > .loading-indicator").clone().appendTo($el).css({
			"padding-top": (height-70)/2 + "px"
		});
		
		if(animate)
			$el.animate({ height: height }, 0);
	},
	
	updateWithNewValues: {
		name: function(values, $el) {
			var s = values.salutation + " " + values.prename + " " + values.lastname;
			var $p = $('<p class="value"></p>');
			$p.text(s);
			$el.html($p);
			GYG.flashElement($el);
		},
		
		password: function(values, $el) {
			GYG.flashElement($el);
		},
		
		contact_details: function(values, $el) {
			$el.empty();
			
			if(values.company_name != '') {
				$el.append($('<p class="value"></p>').append($("<strong></strong>").text(values.company_name)));
			}
			
			var $address = $('<address class="value"></address>');
			var $span = $("<span></span>").text(values.street);
			$address.append($span).append("<br />");
			
			if(values.address_suffix != '') {
				$span = $("<span></span>").text(values.address_suffix);
				$address.append($span).append("<br />");
			}
			
			$span = $("<span></span>").text(values.zip+" – "+values.city);
			$address.append($span).append("<br />");
			
			if(values.state != '') {
				$span = $("<span></span>").text(values.state);
				$address.append($span).append("<br />");
			}
			
			$span = $("<span></span>").text(values.country);
			$address.append($span);
			
			$el.append($address);
			
			var $table = $('<table class="value"></table>');
			var $row = $("<tr></tr>");
			var $cell = $("<th></th>").text(GYG.translation.SupplierSettings.phone);
			$row.append($cell);
			$cell = $("<td></td>").text(values.phone_nr);
			$row.append($cell);
			$table.append($row);
			
			if(values.fax_nr != '') {
				$row = $("<tr></tr>");
				$cell = $("<th></th>").text(GYG.translation.SupplierSettings.fax);
				$row.append($cell);
				$cell = $("<td></td>").text(values.fax_nr);
				$row.append($cell);
				$table.append($row);
			}
			
			if(values.webpage != '') {
				$row = $("<tr></tr>");
				$cell = $("<th></th>").text(GYG.translation.SupplierSettings.webpage);
				$row.append($cell);
				$cell = $("<td></td>");
				var $a = $('<a></a>').attr("href", values.webpage).text(values.webpage.replace(/^http:\/\//, '').replace(/\/$/, ''));
				$cell.append($a);
				$row.append($cell);
				$table.append($row);
			}
			
			$el.append($table);
			
			GYG.flashElement($el);
		},
		
		profile_picture_delete: function(values, $el) {
			$("img", $el)[0].src+="&x";
			GYG.flashElement($el);
		},
		
		profile_picture_upload: function(values, $el) {
			$("img", $el)[0].src+="&x="+ +new Date();
			$("img.hidden", $el).removeClass("hidden");
			$("span.empty-field:not(.hidden)", $el).addClass("hidden");
			GYG.flashElement($el);
		},
		
		insurance_policy_upload: function(values, $el) {
			var now = new Date()
			$(".value", $el).html("<p class='insurace-uploaded'>"+GYG.translation.SupplierSettings.insuranceUploaded+" ("+now.getDate()+"-"+Date.monthNames[now.getMonth()]+"-"+now.getFullYear()+")</p>");
			GYG.flashElement($el);
		},
		
		email: function(values, $el) {
			$('p.value:eq(1)', $el).remove();
			$('<p class="value">'+values.unconfirmed_email+" "+GYG.translation.SupplierSettings.emailUnconfirmed+'</p>').appendTo($el);
			GYG.flashElement($el);
		},
		
		username: function(values, $el) {
			var $p = $('<p class="value"></p>');
			$p.text(values.username);
			$el.html($p);
			GYG.flashElement($el);
		},
		
		self_description: function(values, $el) {
			var $p = $("#self-description-value", $el);
			
			if(values.self_description == "") {
				$(".empty-field.hidden", $el).removeClass("hidden");
			} else {
				$(".empty-field:not(.hidden)", $el).addClass("hidden");
			}
			
			$p.text(values.self_description);
			GYG.flashElement($el);
		},
		
		newsletter: function(values, $el) {
			var $p = $('<p class="value"></p>');
			$p.text(values.newsletter);
			$el.html($p);
			GYG.flashElement($el);
		},
		
		timezone: function(values, $el) {
			var $p = $('<p class="value"></p>');
			$p.text(values.timezone);
			$el.html($p);
			GYG.flashElement($el);
		},
		
		currency: function(values, $el) {
			var $p = $('<p class="value"></p>');
			var text = values.currency_name+" ("+values.currency_symbol+")";
			$p.text(text);
			$el.html($p);
			GYG.flashElement($el);
		},
		
		date_of_birth: function(values, $el) {
			var $p = $('<p class="value"></p>');
			var text = '';
			if(values.date_of_birth == '') {
				text = GYG.translation.SupplierSettings.dateOfBirthNotSet;
			} else {
				text = values.date_of_birth_day+Date.dayExtension[values.date_of_birth_day-1]+" "+Date.monthNames[values.date_of_birth_month-1]+" "+values.date_of_birth_year;
			}
			$p.text(text);
			$el.html($p);
			GYG.flashElement($el);
		}
	},
	
	highlightElement: function($e) {
		$e.css("background-color", "#FDF285");
		$e.animate({ backgroundColor: "#ffffff" }, 1500);
	},
	
	confirmUserDelete: function() {
		var self = this;
		GYG.GYGindow.confirm({
			title:   GYG.translation.SupplierSettings.deleteConfirmTitle,
			message: GYG.translation.SupplierSettings.deleteConfirmMessage.replace(/%1/g, "<strong>").replace(/%2/g, "</strong>"),
			confirm: GYG.translation.SupplierSettings.deleteConfirmConfirm,
			cancel:  GYG.translation.SupplierSettings.deleteConfirmCancel,
			callBack: function(shouldDelete) {
				if(shouldDelete) {
					shouldDeleteUser = true;
					$("#user-delete").submit();
				}
			}
		});
	}
});

// run if on settings page
$(function() {
	if($("body#settings, body#profile").length) {
		GYG.SupplierSettings.running = new GYG.SupplierSettings();
		
		GYG.genericError = function(error) {
			GYG.SupplierSettings.running.processResponse.apply(GYG.SupplierSettings.running, [{ "success": false, "user_exceptions": { "picture": [error], "insurance_policy": [error] }}, $("form.image")]);
		};
	}
});

/**//*/**/

/*
Script: GrowingInput.js
	Alters the size of an input depending on its content

	License:
		MIT-style license.

	Authors:
		Guillermo Rauch
*/

(function(){

GrowingInput = function(element, options){
	
	var value, lastValue, calc;
	
	options = $.extend({
		min: 0,
		max: null,
		startWidth: 15,
		correction: 15
	}, options);
	
	element = $(element).data('growing', this);
	
	var self = this;
	var init = function(){
		calc = $('<span></span>').css({
			'float': 'left',
			'display': 'inline-block',
			'position': 'absolute',
			'left': -1000
		}).insertAfter(element);
		$.each(['font-size', 'font-family', 'padding-left', 'padding-top', 'padding-bottom', 
		 'padding-right', 'border-left', 'border-right', 'border-top', 'border-bottom', 
		 'word-spacing', 'letter-spacing', 'text-indent', 'text-transform'], function(i, p){				
				calc.css(p, element.css(p));
		});
		element.blur(resize).keyup(resize).keydown(resize).keypress(resize);
		resize();
	};
	
	var calculate = function(chars){
		calc.html(chars);
		var width = calc.width();
		return (width ? width : options.startWidth) + options.correction;
	};
	
	var resize = function(){
		lastValue = value;
		value = element.val();
		var retValue = value;		
		if(chk(options.min) && value.length < options.min){
			if(chk(lastValue) && (lastValue.length <= options.min)) return;
			retValue = str_pad(value, options.min, '-');
		} else if(chk(options.max) && value.length > options.max){
			if(chk(lastValue) && (lastValue.length >= options.max)) return;
			retValue = value.substr(0, options.max);
		}
		element.width(calculate(retValue));
		return self;
	};
	
	this.resize = resize;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var str_repeat = function(str, times){ return new Array(times + 1).join(str); };
var str_pad = function(self, length, str, dir){
	if (self.length >= length) return this;
	str = str || ' ';
	var pad = str_repeat(str, length - self.length).substr(0, length - self.length);
	if (!dir || dir == 'right') return self + pad;
	if (dir == 'left') return pad + self;
	return pad.substr(0, (pad.length / 2).floor()) + self + pad.substr(0, (pad.length / 2).ceil());
};

})();

/*
Script: TextboxList.js
	Displays a textbox as a combination of boxes an inputs (eg: facebook tokenizer)

	Authors:
		Guillermo Rauch
		
	Note:
		TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>. 
		Purchase to remove this message.
*/

(function($){
	
TextboxList = function(element, _options){
	
	var original, container, list, current, focused = false, index = [], blurtimer, events = {};
	var options = $.extend(true, {
    prefix: 'textboxlist',
    max: null,
		unique: false,
		uniqueInsensitive: true,
    endEditableBit: true,
		startEditableBit: true,
		hideEditableBits: true,
    inBetweenEditableBits: true,
		keys: {previous: 37, next: 39},
		bitsOptions: {editable: {}, box: {}},
    plugins: {},
		filter: function(str){ return $.trim(str.replace(/\s+/g, ' ')).replace(/,/g, ''); },
		encode: function(o){ return o ? o.join(',') : ''; },
		decode: function(o){ return o ? o.split(',') : []; }
  }, _options);
	
	element = $(element);
	
	var self = this;
	var init = function(){		
		original = element.css('display', 'none').attr('autocomplete', 'off').focus(focusLast);
		container = $('<div class="'+options.prefix+'" />')
			.insertAfter(element)
			.click(function(e){ 
				if ((e.target == list.get(0) || e.target == container.get(0)) && (!focused || current.toElement().get(0) != list.find(':last-child').get(0))) focusLast(); 			
			});			
		list = $('<ul class="'+ options.prefix +'-bits" />').appendTo(container);
		for (var name in options.plugins) enablePlugin(name, options.plugins[name]);		
		afterInit();
	};
	
	var enablePlugin = function(name, options){
		self.plugins[name] = new TextboxList[camelCase(capitalize(name))](self, options);
	};
	
	var afterInit = function(){
		if (options.endEditableBit) create('editable', null, {tabIndex: original.tabIndex}).inject(list);
		addEvent('bitAdd', update, true);
		addEvent('bitRemove', update, true);
		$(document).click(function(e){
			if (!focused) return;
			if (e.target.className.indexOf(options.prefix) != -1){				
				if (e.target == $(container).get(0)) return;				
				var parent = $(e.target).parents('div.' + options.prefix);
				if (parent.get(0) == container.get(0)) return;
			}
			blur();
		}).keydown(function(ev){
			if (!focused || !current) return;
			var caret = current.is('editable') ? current.getCaret() : null;
			var value = current.getValue()[1];
			var special = !!$.map(['shift', 'alt', 'meta', 'ctrl'], function(e){ return ev[e]; }).length;
			var custom = special || (current.is('editable') && current.isSelected());
			var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
			switch (ev.which){
				case 8:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.previous:
					if (current.is('box') || ((caret == 0 || !value.length) && !custom)){
						evStop();
						focusRelative('prev');
					}
					break;
				case 46:
					if (current.is('box')){ 
						evStop();
						return current.remove(); 
					}
				case options.keys.next: 
					if (current.is('box') || (caret == value.length && !custom)){
						evStop();
						focusRelative('next');
					}
			}
		});
		setValues(options.decode(original.val()));
	};
	
	var create = function(klass, value, opt){
		if (klass == 'box'){
			if (!value[0] && !value[1]) return false;
			if (chk(options.max) && list.getChildren('.' + options.prefix + '-bit-box').length + 1 > options.max) return false;
			if (options.unique && $.inArray(uniqueValue(value), index) != -1) return false;		
		}		
		return new TextboxListBit(klass, value, self, $.extend(true, options.bitsOptions[klass], opt));
	};
	
	var uniqueValue = function(value){
		return chk(value[0]) ? value[0] : (options.uniqueInsensitive ? value[1].toLowerCase() : value[1]);
	};
	
	var add = function(plain, id, html, afterEl){
		var b = create('box', [id, plain, html]);
		if (b){
			if (!afterEl || !afterEl.length) afterEl = list.find('.' + options.prefix + '-bit-box').filter(':last');
			b.inject(afterEl.length ? afterEl : list, afterEl.length ? 'after' : 'top');
		} 
		return self;
	};
	
	var focusRelative = function(dir, to){
		var el = getBit(to && $(to).length ? to : current).toElement();
		var b = getBit(el[dir]());
		if (b) b.focus();
		return self;
	};
	
	var focusLast = function(){
		var lastElement = list.children().filter(':last');
		if (lastElement) getBit(lastElement).focus();
		return self;
	};
	
	var blur = function(){	
		if (! focused) return self;
		if (current) current.blur();
		focused = false;
		return fireEvent('blur');
	};
	
	var getBit = function(obj){				
		return obj.jquery ? $(obj).data('textboxlist:bit') : obj;
	};
	
	var getValues = function(){
		return $.grep($.map(list.children(), function(el){
			var bit = getBit($(el));
			if (bit.is('editable')) return null;
			var v = bit.getValue();
			return (chk(v[0]) ? v[0] : options.filter(v[1])) || null;
		}), function(o){ return o != undefined; });
	};
	
	var setValues = function(values){
		if (!values) return;
		$.each(values, function(i, v){
			if (v) add.apply(self, $.isArray(v) ? [v[1], v[0], v[2]] : [v]);
		});		
	};
	
	var update = function(){
		original.val(options.encode(getValues()));
	};
	
	var addEvent = function(type, fn){
		if (events[type] == undefined) events[type] = [];
		var exists = false;
		$.each(events[type], function(f){
			if (f === fn){
				exists = true;
				return;
			};
		});
		if (!exists) events[type].push(fn);
		return self;
	};
	
	var fireEvent = function(type, args, delay){
		if (!events || !events[type]) return self;
		$.each(events[type], function(i, fn){		
			(function(){
				args = (args != undefined) ? splat(args) : Array.prototype.slice.call(arguments);
				var returns = function(){
					return fn.apply(self || null, args);
				};
				if (delay) return setTimeout(returns, delay);
				return returns();
			})();
		});
		return self;
	};
	
	var removeEvent = function(type, fn){
		if (events[type]){
			for (var i = events[type].length; i--; i){
				if (events[type][i] === fn) events[type].splice(i, 1);
			}
		} 
		return self;
	};
	
	this.onFocus = function(bit){
		if (current) current.blur();
		clearTimeout(blurtimer);
		current = bit;
		container.addClass(options.prefix + '-focus');		
		if (!focused){
			focused = true;
			fireEvent('focus', bit);
		}
	};
	
	this.onAdd = function(bit){
		if (options.unique && bit.is('box')) index.push(uniqueValue(bit.getValue()));
		if (bit.is('box')){
			var prior = getBit(bit.toElement().prev());
			if ((prior && prior.is('box') && options.inBetweenEditableBits) || (!prior && options.startEditableBit)){				
				var priorEl = prior && prior.toElement().length ? prior.toElement() : false;
				var b = create('editable').inject(priorEl || list, priorEl ? 'after' : 'top');
				if (options.hideEditableBits) b.hide();
			}
		}
	};
	
	this.onRemove = function(bit){
		if (!focused) return;
		if (options.unique && bit.is('box')){
			var i = $.inArray(uniqueValue(bit.getValue()), index);
			if (i != -1) index = index.splice(i + 1, 1);
		} 
		var prior = getBit(bit.toElement().prev());
		if (prior && prior.is('editable')) prior.remove();
		focusRelative('next', bit);
	};
	
	this.onBlur = function(bit, all){
		current = null;
		container.removeClass(options.prefix + '-focus');		
		blurtimer = setTimeout(blur, all ? 0 : 200);
	};
	
	this.setOptions = function(opt){
		options = $.extend(true, options, opt);
	};
	
	this.getOptions = function(){
		return options;
	};
	
	this.getContainer = function(){
		return container;
	};
	
	this.addEvent = addEvent;
	this.removeEvent = removeEvent;
	this.fireEvent = fireEvent;
	this.create = create;
	this.add = add;
	this.getValues = getValues;
	this.plugins = [];
	init();
};

TextboxListBit = function(type, value, textboxlist, _options){
	
	var element, bit, prefix, typeprefix, close, hidden, focused = false, name = capitalize(type); 
	var options = $.extend(true, type == 'box' ? {
		deleteButton: true
  } : {
		tabIndex: null,
		growing: true,
		growingOptions: {},
		stopEnter: true,
		addOnBlur: false,
		addKeys: 13
	}, _options);
	
	this.type = type;
	this.value = value;
	
	var self = this;
	var init = function(){
		prefix = textboxlist.getOptions().prefix + '-bit';
		typeprefix = prefix + '-' + type;
		bit = $('<li />').addClass(prefix).addClass(typeprefix)
			.data('textboxlist:bit', self)
			.hover(function(){ 
				bit.addClass(prefix + '-hover').addClass(typeprefix + '-hover'); 
			}, function(){
				bit.removeClass(prefix + '-hover').removeClass(typeprefix + '-hover'); 
			});
		if (type == 'box'){
			if(chk(self.value[2]))
				bit.html(self.value[2]);
			else
				bit.text(self.value[1]);
			bit.click(focus);
			if (options.deleteButton){
				bit.addClass(typeprefix + '-deletable');
				close = $('<a href="#" class="'+ typeprefix +'-deletebutton" />').click(function(event) { event.preventDefault(); remove(); }).appendTo(bit);
			}
			bit.children().click(function(e){ e.stopPropagation(); e.preventDefault(); });
		} else {
			element = $('<input type="text" class="'+ typeprefix +'-input" autocomplete="off" />').val(self.value ? self.value[1] : '').appendTo(bit);
			if (chk(options.tabIndex)) element.tabIndex = options.tabIndex;
			if (options.growing) new GrowingInput(element, options.growingOptions);		
			element.focus(function(){ focus(true); }).blur(function(){
				blur(true);
				if (options.addOnBlur) toBox(); 
			});				
			if (options.addKeys || options.stopEnter){
				element.keydown(function(ev){
					if (!focused) return;
					var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
					if (options.stopEnter && ev.which === 13) evStop();
					if ($.inArray(ev.which, splat(options.addKeys)) != -1){
						evStop();
						toBox();
					}
				});
			}
		}
	};
	
	var inject = function(el, where){
		switch(where || 'bottom'){
			case 'top': bit.prependTo(el); break;
			case 'bottom': bit.appendTo(el); break;
			case 'before': bit.insertBefore(el); break;			
			case 'after': bit.insertAfter(el); break;						
		}
		textboxlist.onAdd(self);	
		return fireBitEvent('add');
	};
	
	var focus = function(noReal){
		if (focused) return self;
		show();
		focused = true;
		textboxlist.onFocus(self);
		bit.addClass(prefix + '-focus').addClass(prefix + '-' + type + '-focus');
		fireBitEvent('focus');		
		if (type == 'editable' && !noReal) element.focus();
		return self;
	};
	
	var blur = function(noReal){
		if (!focused) return self;
		focused = false;
		textboxlist.onBlur(self);
		bit.removeClass(prefix + '-focus').removeClass(prefix + '-' + type + '-focus');
		fireBitEvent('blur');
		if (type == 'editable'){
			if (!noReal) element.blur();
			if (hidden && !element.val().length) hide();
		}
		return self;
	};
	
	var remove = function(){
		blur();
		textboxlist.onRemove(self);
		bit.remove();
		return fireBitEvent('remove');
	};
	
	var show = function(){
		bit.css('display', 'block');
		return self;
	};
	
	var hide = function(){
		bit.css('display', 'none');		
		hidden = true;
		return self;
	};
	
	var fireBitEvent = function(type){
		type = capitalize(type);
		textboxlist.fireEvent('bit' + type, self).fireEvent('bit' + name + type, self);
		return self;
	};
	
  this.is = function(t){
    return type == t;
  };

	this.setValue = function(v){
		if (type == 'editable'){
			element.val(chk(v[0]) ? v[0] : v[1]);
			if (options.growing) element.data('growing').resize();
		} else value = v;
		return self;
	};

 	this.getValue = function(){
		return type == 'editable' ? [null, element.val(), null] : value;
	};
	
	if (type == 'editable'){
		this.getCaret = function(){
 			var el = element.get(0);
			if (el.createTextRange){
		    var r = document.selection.createRange().duplicate();		
		  	r.moveEnd('character', el.value.length);
		  	if (r.text === '') return el.value.length;
		  	return el.value.lastIndexOf(r.text);
		  } else return el.selectionStart;
		};

		this.getCaretEnd = function(){
 			var el = element.get(0);			
			if (el.createTextRange){
				var r = document.selection.createRange().duplicate();
				r.moveStart('character', -el.value.length);
				return r.text.length;
			} else return el.selectionEnd;
		};
		
		this.isSelected = function(){
			return focused && (self.getCaret() !== self.getCaretEnd());
		};
		
		var toBox = function(){
			var value = self.getValue();				
			var b = textboxlist.create('box', value);
			if (b){
				b.inject(bit, 'before');
				self.setValue([null, '', null]);
				return b;
			}
			return null;
		};
		
		this.toBox = toBox;
	}
	
	this.toElement = function(){
		return bit;
	};
	
	this.focus = focus;
	this.blur = blur;
	this.remove = remove;
	this.inject = inject;
	this.show = show;
	this.hide = hide;
	this.fireBitEvent = fireBitEvent;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var splat = function(a){ return (Object.prototype.toString.call(a) === "[object Array]") ? a : [a]; };
var camelCase = function(str){ return str.replace(/-\D/g, function(match){ return match.charAt(1).toUpperCase(); }); };
var capitalize = function(str){ return str.replace(/\b[a-z]/g, function(A){ return A.toUpperCase(); }); };

})(jQuery);

/**//**/

GYG.SupplierEdit = function() {
	GYG.SupplierEdit.running = this;
	var self = this;
	var oldHtml = {};
	var userAddressInitialized;

	var init = function() {
		$("a[href='#edit-form']").click(function(event) {
			event.preventDefault();
			
			var $this = $(this);
			var $part = $this.parent().parent();
			var fieldName = $(".ajax-load", $part).attr("id").replace(/field_/, "");
			
			$this.hide();
			$("a[href='#cancel-edit-form']", $part).show();
			
			loadForm.apply(self, [fieldName]);
		});
		
		$("a[href='#cancel-edit-form']").click(function(event) {
			event.preventDefault();
		
			var $this = $(this);
			var $part = $this.parent().parent();
			var fieldName = $(".ajax-load", $part).attr("id").replace(/field_/, "");
			
			$this.hide();
			$("a[href='#edit-form']", $part).show();
			if(oldHtml[fieldName]) {
				$("#field_"+fieldName).html(oldHtml[fieldName]);
			} else {
				showGYGindowError.apply(self);
			}
		});
	};
	
	// edit product data
	var loadForm = function(fieldName) {
		var data = {
			action: "edit",
			field: fieldName,
			supplier_id: GYG.SupplierEdit.supplier_id
		};
		
		$.ajax({
			type: "post",
			url: "/supplier/ajax/supplier_edit.php",
			data: data,
			dataType: "json",
			success: function(json) {
				var data = json.data;
				var i = data.length;
				var $form;
				while(i--) {
					// save old values
					oldHtml[data[i].field] = $("#field_"+data[i].field).html();
					
					// replace startvalue with form
					$("#field_"+data[i].field).html(data[i].html);
					
					// form special submit event
					$form = $(".edit-form", $("#field_"+data[i].field).parent());
					$form.submit(function(event) {
						event.preventDefault();
						submitForm.apply(self, [$(this)]);
					});
					
					new GYG.TextFieldCounter();
					triggerNewUserAdress.apply(self);
				};
			},
			error: function() {
				showGYGindowError.apply(self);
				$("a[href='#cancel-edit-form']", $("#field_"+fieldName).parents(".part")).hide();
				$("a[href='#edit-form']", $("#field_"+fieldName).parents(".part")).show();
			}
		});
	};
	var submitForm = function($form) {
		$("a[href='#cancel-edit-form']", $form.parents('.part')).hide();
		var data = $form.serialize();
		self.showLoadingIndicator.apply(self, [$form]);
		
		$.ajax({
			type: "post",
			url: "/supplier/ajax/supplier_edit.php",
			data: data,
			dataType: "json",
			success: function(json) {
				var data = json.data;
				var i = data.length;
				if(json.success) {
					$("a[href='#edit-form']", $("#field_"+json.field).parents('.part')).show();
					while(i--) {
						$("#field_"+data[i].field).html(data[i].html);
					};
					self.highlightElement.apply(self, [$("#field_"+json.field)]);
				} else {
					$("a[href='#cancel-edit-form']", $("#field_"+json.field).parents('.part')).show();
					while(i--) {
						$("#field_"+data[i].field).html(data[i].html);
						
						// form special submit event
						$form = $(".edit-form", $("#field_"+data[i].field).parent());
						$form.submit(function(event) {
							event.preventDefault();
							submitForm.apply(self, [$(this)]);
						});
						triggerNewUserAdress.apply(self);
					};
				}
			},
			error: function() {
				showGYGindowError.apply(self);
				$(".loading-indicator", $form).remove();
				$form.css("height", "auto");
			}
		});
	};
	
	var initializeUserAdress = function() {
		userAddressInitialized = true;
		
		var a = new GYG.UserAdress();
	};
	
	var triggerNewUserAdress = function() {
		// count the user addresses
		var startCount;
		if($("div.address", $("#new-user-address-container")).size() > 0) {
			var startCount = parseInt($("div.address:last-child", $("#new-user-address-container")).attr("id").match(/ua_(new)?(\d+)/)[2], 10);
		} else {
			startCount = 1;
		}
		
		// add user address
		$("#new-user-address").unbind();
		$("#new-user-address").click(function(event) {
			event.preventDefault();
			startCount++;
			var html = $("#hidden-new-user-address").html().replace(/new_ua_id/g,"new"+startCount);
			$("#new-user-address-container").append(html);
			triggerDeleteUserAdress.apply(self);
		});
		triggerDeleteUserAdress.apply(self);
	};
	
	var triggerDeleteUserAdress = function() {
		// delete user address
		$(".delete-user-address").unbind();
		$(".delete-user-address").click(function(event) {
			event.preventDefault();
			$(this).parents("div.address").remove();
		});
	};
	
	// general utilities
	this.highlightElement = function($e) {
		$e.css("background-color", "#FDF285");
		$e.animate({ backgroundColor: "#ffffff" }, 1500);
	};
	this.showLoadingIndicator = function($el) {
		// limit $el height
		var height = $el.height();
		var animate = false;
		if(height > 250) {
			height = 250;
			animate = true;
		}
		if(height < 150) {
			height = 150;
			animate = true;
		}

		$("#content > .loading-indicator").clone().appendTo($el).css({
			"padding-top": (height-70)/2 + "px"
		});

		if(animate)
			$el.animate({ height: height }, 0);
	};
	var showGYGindowError = function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.General.errorTitle,
				show_error: true,
				error_message: GYG.translation.General.errorMessage
			}
		});
	};
	
	init.apply(this);
};

// run if on edit
$(function() {
	if(document.body.id == "settings") {
		GYG.SupplierEdit.running = new GYG.SupplierEdit();
	}
});

/**//**/

GYG.Analytics = function() {
	
	var self = this;
	
	var tourId, chartType, graph, $spinner;
	
	var init = function() {
		$spinner = $("#spinner");
		
		tourId = -1;
		graph = new GYG.Analytics.Graph();
		
		if(location.hash != '') {
			var hash = location.hash.replace(/#/, '');
			
			var $a = $("#frame ul a[href='#"+hash+"']");
			if($a.length) {
				$("#frame ul a.selected").removeClass("selected");
				$a.addClass("selected");
				chartType = hash;
			} else {
				chartType = $("#frame ul a.selected").attr("href").substr(1);
			}
			updateChart.apply(self);
		} else {
			chartType = $("#frame ul a.selected").attr("href").substr(1);
		}
		
		$("#frame ul a").click(function(event) {
			event.preventDefault();
			self.switchToTab.apply(self, [$(this)]);
		});
		
		$("input.datepicker").change(function(event) {
			event.preventDefault();
			
			var startDate = $("#timeframe-start").val();
			var endDate = $("#timeframe-end").val();
			startDate = new Date(startDate.substr(6), parseInt(startDate.substr(3, 2), 10)-1, startDate.substr(0, 2));
			endDate = new Date(endDate.substr(6), parseInt(endDate.substr(3, 2), 10)-1, endDate.substr(0, 2));
			
			if(startDate < endDate) {
				updateChart.apply(self);
			} else {
				showGYGindowError.apply(self);
				var end = new Date();
				var start = new Date();
				if(start.getMonth() == 0) {
					start.setMonth(11);
				} else {
					start.setMonth(start.getMonth()-1);
				}
				var startD = start.getDate();
				if(startD < 10) {
					startD = "0"+startD;
				}
				var endD = end.getDate();
				if(endD < 10) {
					endD = "0"+endD;
				}
				var startM = start.getMonth()+1;
				if(startM < 10) {
					startM = "0"+startM;
				}
				var endM = end.getMonth()+1;
				if(endM < 10) {
					endM = "0"+endM;
				}
				$("#timeframe-start").val(startD+"-"+startM+"-"+start.getFullYear());
				$("#timeframe-end").val(endD+"-"+endM+"-"+end.getFullYear());
				updateChart.apply(self);
			}
		});
		
		$("select[name='filter_tour_id']").change(function() {
			if($(this).val() == 'all') {
				tourId = -1;
			} else {
				tourId = parseInt($(this).val(), 10);
			} 
			updateChart.apply(self);
		});
		
		initDatepicker.apply(self);
		self.switchToTab($("#frame ul a.selected"));
	};
	
	var initDatepicker = function() {
		$("input.datepicker").datepicker({
			firstDay: Date.firstDayOfWeek,
			currentText: Date.currentDate,
			dateFormat: 'dd-mm-yy',
			maxDate: new Date(),
			dayNamesMin: [
				Date.dayNames[0].substr(0, 2),
				Date.dayNames[1].substr(0, 2),
				Date.dayNames[2].substr(0, 2),
				Date.dayNames[3].substr(0, 2),
				Date.dayNames[4].substr(0, 2),
				Date.dayNames[5].substr(0, 2),
				Date.dayNames[6].substr(0, 2)
			],
			monthNames: Date.monthNames,
			nextText: Date.nextMonth,
			prevText: Date.previousMonth
		});
	};
	
	this.switchToTab = function($link) {
		$("#frame ul a.selected").removeClass("selected");
		$link.addClass("selected");
		
		chartType = $link.attr("href").substr(1);
		updateChart();
	};
	
	var updateChart = function() {
		$spinner.show();
		
		var data = {
			from_date: $("#timeframe-start").val(),
			to_date:   $("#timeframe-end").val(),
			type:      chartType,
			tour_id:   tourId
		};
		
		$.ajax({
			type: "get",
			url: "/supplier/ajax/analytics_data.php",
			data: data,
			dataType: "json",
			success: function(data) {
				$spinner.hide();
				graph.draw(data);
			},
			error: function() {
				$spinner.hide();
				showGYGindowError.apply(self);
			}
		 });
		
	};
	
	var showGYGindowError = function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.General.errorTitle,
				show_error: true,
				error_message: GYG.translation.General.errorMessage
			}
		});
	};
	
	init();
};

/**/
/*/**/

GYG.Analytics.Graph = function() {
	var self = this;
	var useAnimation = true;
	var hasDrawing = false;
	var paper, tooltip, tooltipElements, rects, grid;
	var showZero = true;
	var isTooltipVisible = false;
	var tooltipLeaveTimer;
	var dataCache;
	var dimensions = {
		offset: {
			x: 41,
			y: 15
		},
		size: {
			w: 610,
			h: 320
		},
		canvas: {
			w: 666,
			h: 350
		},
		trim: {
			x: ($.browser.msie) ? 0 : 0.5,
			y: ($.browser.msie) ? 0 : 0.5
		},
		tooltip: {
			w: 92,
			h: 52,
			r: 2
		},
		labelOffset: {
			x: -7,
			y: 0
		}
	};
	var css = {
		circle: {
			fill: '#385BAC',
			stroke: '#fff',
			'stroke-width': '1.5px'
		},
		path: {
			stroke: '#385BAC',
			'stroke-width': 4,
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round'
		},
		bg: {
			stroke: 'none',
			'stroke-width': 0,
			fill: '#385BAC',
			opacity: .2
		},
		label: {
			font: '13px "Lucida Grande", Verdana, sans-serif',
			fill: '#333',
			'text-anchor': 'end'
		},
		grid: {
			color: '#ccc'
		},
		tooltip: {
			outer: {
				fill: '#666',
				stroke: 'none',
				'stroke-width': 0,
				'-webkit-box-shadow': '0 3px 10px #000'
			},
			inner: {
				fill: '#fff',
				stroke: 'none',
				'stroke-width': 0
			},
			label: {
				value: {
					'font-family': '"Lucida Grande", Verdana, sans-serif',
					'font-size': '16pt',
					fill: '#333',
					'font-weight': 'bold'
				},
				key: {
					'font-family': '"Lucida Grande", Verdana, sans-serif',
					'font-size': '9pt',
					fill: '#fff'
				}
			}
		}
	};
	var keys,values;
	
	var initialize = function(data) {
		paper = Raphael('graph', dimensions.canvas.w, dimensions.canvas.h);
		if(data)
			this.draw(data);
	};
	
	this.draw = function(data) {
		if(hasDrawing) {
			this.clear();
		}
		dataCache = data;
		hasDrawing = true;
		
		keys = []; values = [];
		var max, min;
		if(showZero) min = 0;
		var first = true;
		for(var key in data) {
			data[key] = parseInt(data[key], 10);
			keys.push(key);
			values.push(data[key]);
			max = (data[key] > max || first) ? data[key] : max;
			min = (data[key] < min || (first && !showZero)) ? data[key] : min;
			if(first) first = false;
		}
		if(keys.length < 2) return;
		
		var bounds = calculateBounds(min, max);
		min = bounds.min;
		max = bounds.max;
		drawGrid(min, max, keys.length);
		drawZeroLine(min, max);
		drawGraph(min, max, keys.length);
		drawTooltip();
	};
	
	var drawZeroLine = function(min, max) {
		if((!showZero && min >= 0) || min == 0) return; // don't draw if no negativ values
		var y = Math.round((1 - (-min)/(max-min)) * dimensions.size.h + dimensions.offset.y);
		// var t = paper.text(dimensions.offset.x-20, y, "0").attr(css.label);
		paper.path(css.zeroLine).moveTo(dimensions.offset.x + dimensions.trim.x, y + dimensions.trim.y).lineTo(dimensions.offset.x + dimensions.size.w + dimensions.trim.x, y + dimensions.trim.y);
	};
	
	var drawGrid = function (min, max, dataCount) {
		var x = dimensions.offset.x + dimensions.trim.x;
		var y = dimensions.offset.y + dimensions.trim.y;
		var w = dimensions.size.w;
		var h = dimensions.size.h;
		var hv = calculateRowNumber(min,max);
		var wv = calculateColumnNumber(dataCount);
		
		var path = ["M", x, y, "L", x + w, y, x + w, y + h, x, y + h, x, y],
			rowHeight = h / hv,
			columnWidth = w / wv;
		for (var i = 1; i < hv; i++) {
			path = path.concat(["M", x, y + Math.round(i * rowHeight), "L", x + w, y + Math.round(i * rowHeight)]);
		}
		for (var i = 1; i < wv; i++) {
			path = path.concat(["M", x + Math.round(i * columnWidth), y, "L", x + Math.round(i * columnWidth), y + h]);
		}
		grid = paper.path({stroke: css.grid.color, "stroke-width": 1}, path.join(","));
    };

	var drawGraph = function(min, max, count) {
		var deltaX = dimensions.size.w/(count-1);
		var chartDelta = max - min;
		var c;
		var x, y;
		var path = paper.path().attr(css.path);
		if(count > 40)
			path.attr({'stroke-width': Math.ceil(css.path['stroke-width']/2)});
		var rect;
		
		var bgY = Math.round((1 - (-min)/chartDelta) * dimensions.size.h + dimensions.offset.y);
		bgY = (bgY > dimensions.offset.y + dimensions.size.h) ? dimensions.offset.y + dimensions.size.h : bgY;
		var bg = paper.path().attr(css.bg).moveTo(
			dimensions.offset.x + dimensions.trim.x,
			bgY + dimensions.trim.y
		);
		rects = paper.set();
		for(var i = 0; i < count; i++) {
			x = Math.round(dimensions.offset.x + deltaX*i);
			y = Math.round((1 - (values[i]-min)/chartDelta) * dimensions.size.h + dimensions.offset.y); // flip coordinates as they start on top
			if(count <= 40) {
				c = paper.circle(
					x + dimensions.trim.x,
					y + dimensions.trim.y,
					5
				);
				c.attr(css.circle);
			}
			path[i == 0 ? "moveTo" : "cplineTo"](x, y, (count <= 40 ? deltaX/3 : 0));
			bg[i == 0 ? "lineTo" : "cplineTo"](x, y, (count <= 40 ? deltaX/3 : 0));
			rect = paper.rect(
				Math.floor(dimensions.offset.x + deltaX*i - deltaX/2) + dimensions.trim.x,
				dimensions.offset.y + dimensions.trim.y - 15,
				Math.ceil(deltaX),
				dimensions.size.h + 30
			).attr({opacity:'0',fill:'#fff'});
			rects.push(rect);
			
			(function (x, y, value, key, dot) {
				var timer;
				rect.node.onmouseover = function() {
					clearTimeout(tooltipLeaveTimer);
					tooltip.show();
					
					tooltipElements[2].attr({text: value+''});
					tooltipElements[3].attr({text: key+''});
					
					var correctX = (x > dimensions.canvas.w - dimensions.tooltip.w - 15) ? -20-dimensions.tooltip.w : 0;
					var correctY = (y < dimensions.tooltip.h + 25) ? dimensions.tooltip.h + 25 : 0;
					
					var _x = [
						x + 10 + correctX,
						x + 10 + 2 + correctX,
						x + dimensions.tooltip.w/2 + 10 + correctX,
						x + dimensions.tooltip.w/2 + 10 + correctX
					];
					
					var _y = [
						y-dimensions.tooltip.h-20 + correctY,
						y-dimensions.tooltip.h-18 + correctY,
						y-54 + correctY,
						y-29 + correctY
					];
					
					if(useAnimation) {
						for (var i = 0; i < 4; i++) {
							tooltipElements[i].animate(
								{
									x: _x[i],
									y: _y[i]
								},
								100 * isTooltipVisible,
								'>'
							);
						}
					} else {
						for (var i = 0; i < 4; i++) {
							tooltipElements[i].attr({
								x: _x[i],
								y: _y[i]
							});
						}
					}
					
					if(dot) dot.attr("r", 7);
					isTooltipVisible = true;
					//r.safari();
				};
				rect.node.onmouseout = function () {
					if(dot) dot.attr("r", 5);
					//r.safari();
					tooltipLeaveTimer = setTimeout(function () {
						tooltip.hide();
						//label[0].hide();
						//label[1].hide();
						isTooltipVisible = false;
						//r.safari();
					}, 1);
				};
			})(x, y, values[i], keys[i], c);
		}
		bg.lineTo(
			dimensions.offset.x + dimensions.size.w + dimensions.trim.x,
			bgY + dimensions.trim.y
		).andClose().toBack();
		grid.toBack();
	};
	
	var drawTooltip = function() {
		tooltip = paper.set();
		tooltipElements = [
			paper.rect(0, 0, dimensions.tooltip.w, dimensions.tooltip.h, dimensions.tooltip.r).attr(css.tooltip.outer),
			paper.rect(0, 0, dimensions.tooltip.w - 4, 31).attr(css.tooltip.inner),
			paper.text(0, -43, 'x').attr(css.tooltip.label.value),
			paper.text(0, -18, 'x').attr(css.tooltip.label.key)
		];
		tooltip.push.apply(tooltip, tooltipElements);
		
		rects.toFront();
		tooltip.hide();
	};

	var calculateColumnNumber = function(dataCount) {
		dataCount--;
		if(dataCount < 10)
			return dataCount * 2;
		else if(dataCount > 20)
			return dataCount/Math.ceil(dataCount/20);
		else
			return dataCount;
	};
	
	var calculateRowNumber = function(min, max) {
		var d = max-min;
		
		var labelCount, rowCount;
		
		if(d%10 == 0) {
			labelCount = 6;
			rowCount = 10;
		} else if(d%9 == 0) {
			labelCount = 4;
			rowCount = 9;
		} else if(d%8 == 0) {
			labelCount = 5;
			rowCount = 8;
		} else if(d%7 == 0) {
			labelCount = 8;
			rowCount = 7;
		} else if(d%6 == 0) {
			labelCount = 4;
			rowCount = 6;
		} else if(d%5 == 0) {
			labelCount = 6;
			rowCount = 10;
		} else if(d%4 == 0) {
			labelCount = 5;
			rowCount = 8;
		} else if(d%3 == 0) {
			labelCount = 4;
			rowCount = 9;
		} else if(d%2 == 0) {
			labelCount = 5;
			rowCount = 8;
		} else {
			labelCount = 2;
			rowCount = 5;
		}
		
		drawLabels(labelCount, min, max);
		return rowCount;
	};
	
	var calculateBounds = function(min, max) {
		max = Math.ceil(max/10)*10;
		min = Math.floor(min/10)*10;
		
		if(max == min) max+=1;
		
		paper.text(dimensions.offset.x+dimensions.labelOffset.x, dimensions.offset.y + dimensions.labelOffset.y, max).attr(css.label).attr({ fill: max >= 0 ? css.label.fill : '#f00' });
		paper.text(dimensions.offset.x+dimensions.labelOffset.x, dimensions.offset.y + dimensions.size.h + dimensions.labelOffset.y, min).attr(css.label).attr({ fill: min >= 0 ? css.label.fill : '#f00' });
		return {
			min: min,
			max: max
		};
	};
	
	var drawLabels = function(count, min, max) {
		var value;
		var d = (max-min)/(count-1);
		for(var i = 1; i < count-1; i++) {
			value = min+i*d;
			paper.text(
				dimensions.offset.x + dimensions.labelOffset.x,
				Math.round((1 - (value-min)/(max-min)) * dimensions.size.h + dimensions.offset.y) + dimensions.labelOffset.y,
				Math.round(value)
			).attr(css.label).attr({ fill: value >= 0 ? css.label.fill : '#f00' });;
		}
	};
	
	this.setShowZero = function(showZero_) {
		if(showZero_ === undefined) return;
		showZero_ = !!showZero_;
		if(showZero_ === showZero) return;
		showZero = showZero_;
		if(dataCache) {
			this.draw(dataCache);
		}
	};
	
	this.clear = function() {
		dataCache = undefined;
		paper.clear();
	};
	
	initialize.apply(self, arguments);
};

/**//**/

$(function() {
	if($("#analytics").length)
		GYG.analytics = new GYG.Analytics();
});

/**//**/

GYG.Payments = function() {
	this.init();
};

$.extend(GYG.Payments.prototype, {
	init: function() {
		var self = this;
		
		$("h4 a").click(function(event) {
			event.preventDefault();
			//$(this).parent().next().slideToggle();
			self.toggleState.apply(self, [$(this).parent().parent()]);
		});
		
		$("h5 a").click(function(event) {
			event.preventDefault();
			//$(this).parent().next().slideToggle();
			self.toggleState.apply(self, [$(this).parent().parent()]);
		});
	},
	
	// expands / collapses the specified month or year
	toggleState: function($li) {
		if($li.hasClass("expanded"))
			$li.removeClass("expanded");
		else
			$li.addClass("expanded");
	}
});

$(function() {
	if($("body#payments").length)
		new GYG.Payments();
});

/**//**/

GYG.Bookings = function() {
	this.init();
};

$.extend(GYG.Bookings.prototype, {
	init: function() {
		var self = this;
		
		self.initDatepicker.apply(self);
		self.showHideMoreInfos.apply(self);
		self.guideConfirmBooking.apply(self);
		self.filterByTourId.apply(self);
		self.filterByTourStartDate.apply(self);
		self.showResetButton.apply(self);
		self.resetTourStartDateFilter.apply(self);
		self.loadMore.apply(self);
		
		if(GYG.Bookings.tour_id != "") {
			$("#spinner").show();
			$("#no-results").hide();
			$("a.load-more:not(.hidden)").addClass("hidden");
			self.showBookingsForFilter.apply(self, [GYG.Bookings.tour_id, -1, 0]);
			$("select[name='filter_tour_id'] option[value='"+GYG.Bookings.tour_id+"']").attr("selected", true);
		}
	},
	
	initDatepicker: function() {
		$("input[name='filter_tour_start_date']").datepicker({
			firstDay: Date.firstDayOfWeek,
			currentText: Date.currentDate,
			showOn: 'both',
			buttonImage: 'img/calendar.png',
			buttonImageOnly: true,
			buttonText: Date.chooseDate,
			dateFormat: 'dd-mm-yy',
			dayNamesMin: [
				Date.dayNames[0].substr(0, 2),
				Date.dayNames[1].substr(0, 2),
				Date.dayNames[2].substr(0, 2),
				Date.dayNames[3].substr(0, 2),
				Date.dayNames[4].substr(0, 2),
				Date.dayNames[5].substr(0, 2),
				Date.dayNames[6].substr(0, 2)
			],
			monthNames: Date.monthNames,
			nextText: Date.nextMonth,
			prevText: Date.previousMonth
		});
	},
	showHideMoreInfos: function() {
		$("a[href*='#more-infos']").unbind();
		$("a[href*='#more-infos']").click(function(event) {
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass("open")) {
				$that.removeClass("open");
				$("div.more-info", $that.parent().parent().parent()).slideUp("fast");
			} else {
				$that.addClass("open");
				$("div.more-info", $that.parent().parent().parent()).slideDown("fast");
			}
		});
	},
	guideConfirmBooking: function() {
		var self = this;
		$("a[href*='#accept-booking']").unbind("click");
		$("a[href*='#accept-booking']").click(function(event) {
			event.preventDefault();
			var bookingId = parseInt($(this).parent().parent().parent().parent().parent().parent().parent().parent().attr("id").match(/b_(\d+)/)[1], 10);
			$("#spinner").show();
			self.acceptBookingWithId.apply(self, [bookingId]);
		});
	},
	acceptBookingWithId: function(id) {
		var self = this;
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/bookings_load.php",
			data: {
				action: "confirm",
				booking_id: id
			},
			dataType: "json",
			success: function(data) {
			 	if(data.success && data.booking_id == id) {
					var $li = $("li#b_"+id);
					$li.removeClass("unconfirmed");
					$("span.accept-b", $li).addClass("hidden");
					$("span.accepted", $li).removeClass("hidden");
					if(data.unconfirmed_bookings != 0) {
						$("#bookings-unconfirmed-count").text(data.unconfirmed_bookings);
					} else {
						$("#bookings-unconfirmed-count").hide();
					}
					$("div.more-info", $li).html(data.html);
					$("div.more-info", $li).slideDown("fast");
					$("a[href*='#more-infos']", $li).addClass("open");
					$("#spinner").hide();
				} else {
					$("#spinner").hide();
					self.showGYGindowError.apply(self);
				}
			},
			error: function() {
				$("#spinner").hide();
				self.showGYGindowError.apply(self);
			}
		});
	},
	filterByTourId: function() {
		var self = this;
		$("select[name='filter_tour_id']").change(function() {
			if($("input[name='filter_tour_start_date']").val() == "") {
				var tourStartDate = -1;
			} else {
				var tourStartDate = $("input[name='filter_tour_start_date']").val();
			}
			if($(this).val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($(this).val(), 10);
			}
			$("#spinner").show();
			self.showBookingsForFilter.apply(self, [tourId, tourStartDate, 0]);
		});
	},
	filterByTourStartDate: function() {
		var self = this;
		$("input[name='filter_tour_start_date']").change(function() {
			if($(this).val() == "") {
				var tourStartDate = -1;
			} else {
				var tourStartDate = $(this).val();
			}
			if($("select[name='filter_tour_id']").val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($("select[name='filter_tour_id']").val(), 10);
			}
			$("#spinner").show();
			self.showResetButton.apply(self);
			self.showBookingsForFilter.apply(self, [tourId, tourStartDate, 0]);
		});
	},
	showResetButton: function() {
		if($("input[name='filter_tour_start_date']").val() != "") {
			$("a[href='#clear_tour_date'].hidden").removeClass("hidden");
		} else {
			$("a[href='#clear_tour_date']:not(.hidden)").addClass("hidden");
		}
	},
	resetTourStartDateFilter: function() {
		var self = this;
		$("a[href='#clear_tour_date']").click(function(event) {
			event.preventDefault();
			$("input[name='filter_tour_start_date']").val("");
			var tourStartDate = -1;
			if($("select[name='filter_tour_id']").val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($("select[name='filter_tour_id']").val(), 10);
			}
			$("#spinner").show();
			self.showResetButton.apply(self);
			self.showBookingsForFilter.apply(self, [tourId, tourStartDate, 0]);
		});
	},
	loadMore: function() {
		var self = this;
		$("a.load-more").click(function(event) {
			event.preventDefault();
			$(this).unbind("click");
			var numberOfBookings = parseInt($("#bookings-list .bookings").size(), 10);
			if($("select[name='filter_tour_id']").val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($("select[name='filter_tour_id']").val(), 10);
			}
			if($("input[name='filter_tour_start_date']").val() == "") {
				var tourStartDate = -1;
			} else {
				var tourStartDate = $("input[name='filter_tour_start_date']").val();
			}
			$("#spinner").show();
			self.showBookingsForFilter.apply(self, [tourId, tourStartDate, numberOfBookings]);
		});
	},
	showBookingsForFilter: function(id, date, number) {
		var self = this;
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/bookings_load.php",
			data: {
				action: "filter",
				tour_id: id,
				tour_start_date: date,
				number_of_loaded_bookings: number
			},
			dataType: "json",
			success: function(data) {
			 	if(data.success && data.tour_id == id) {
					var $bList = $("#bookings-list");
					if(data.start_at_0) {
						$bList.fadeOut("fast", function() {
							$(".bookings", $bList).remove();
							if(data.bookings_list_html == "") {
								$("#no-results").show();
								$("#no-bookings-yet").hide();
								$("#filter-matched-no-bookings").show();
							} else {
								$("#no-results").hide();
								$("#no-bookings-yet").hide();
								$("#filter-matched-no-bookings").hide();
								$bList.append(data.bookings_list_html);
								self.showHideMoreInfos.apply(self);
								self.guideConfirmBooking.apply(self);
								GYG.GYGindow.processLinks();
							}
							$bList.fadeIn("fast");
						});
					} else {
						$bList.append(data.bookings_list_html);
						self.showHideMoreInfos.apply(self);
						self.guideConfirmBooking.apply(self);
						GYG.GYGindow.processLinks();
					}
					if(data.more_bookings_available) {
						$("a.load-more.hidden").removeClass("hidden");
					} else {
						$("a.load-more:not(.hidden)").addClass("hidden");
					}
					self.loadMore.apply(self);
					$("#spinner").hide();
				} else {
					$("#spinner").hide();
					self.showGYGindowError.apply(self);
				}
			},
			error: function() {
				$("#spinner").hide();
				self.showGYGindowError.apply(self);
			}
		});
	},
	showGYGindowError: function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.TourUpcoming.errorTitle,
				show_error: true,
				error_message: GYG.translation.TourUpcoming.errorMessage,
				error_relocate: "/supplier/bookings.php"
			}
		});
	}
});

// run if on bookings page
$(function() {
	if($("#bookings").length) {
		GYG.Bookings.running = new GYG.Bookings();
	}
});

/**//**/

GYG.Reviews = function() {
	this.init();
};

$.extend(GYG.Reviews.prototype, {
	init: function() {
		var self = this;
		
		self.showHideMoreInfos.apply(self);
		self.filterByTourId.apply(self);
		self.loadMore.apply(self);
		
		if(GYG.Reviews.tour_id != "") {
			$("#spinner").show();
			$("#no-results").hide();
			$("a.load-more:not(.hidden)").addClass("hidden");
			self.showForFilter.apply(self, [GYG.Reviews.tour_id, 0]);
			$("select[name='filter_tour_id'] option[value='"+GYG.Reviews.tour_id+"']").attr("selected", true);
		}
	},
	
	showHideMoreInfos: function() {
		var self = this;
		$("a[href*='#more-infos']").unbind("click");
		$("a[href*='#more-infos']").click(function(event) {
			event.preventDefault();
			var $this = $(this);
			var $li = $this.parent().parent().parent();
			var reviewId = parseInt($li.attr("id").match(/r_(\d+)/)[1], 10);
			if($this.hasClass("open")) {
				$this.removeClass("open");
				$("div.more-info", $this.parent().parent().parent()).slideUp("fast");
			} else {
				$this.addClass("open");
				$("div.more-info", $this.parent().parent().parent()).slideDown("fast");
			}
			if($li.hasClass("unread")) {
				self.markAsRead.apply(self, [reviewId]);
			}
		});
	},
	filterByTourId: function() {
		var self = this;
		$("select[name='filter_tour_id']").change(function() {
			if($(this).val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($(this).val(), 10);
			}
			$("#spinner").show();
			self.showForFilter.apply(self, [tourId, 0]);
		});
	},
	loadMore: function() {
		var self = this;
		$("a.load-more").click(function(event) {
			event.preventDefault();
			$(this).unbind("click");
			var number = parseInt($("#reviews-list .reviews").size(), 10);
			if($("select[name='filter_tour_id']").val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($("select[name='filter_tour_id']").val(), 10);
			}
			$("#spinner").show();
			self.showForFilter.apply(self, [tourId, number]);
		});
	},
	showForFilter: function(id, number) {
		var self = this;
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/reviews_load.php",
			data: {
				action: "filter",
				tour_id: id,
				number_of_loaded_reviews: number
			},
			dataType: "json",
			success: function(data) {
			 	if(data.success && data.tour_id == id) {
					var $rList = $("#reviews-list");
					if(data.start_at_0) {
						$rList.fadeOut("fast", function() {
							$(".reviews", $rList).remove();
							if(data.reviews_list_html == "") {
								$("#no-results").show();
								$("#no-reviews-yet").hide();
								$("#filter-matched-no-reviews").show();
							} else {
								$("#no-results").hide();
								$("#no-reviews-yet").hide();
								$("#filter-matched-no-reviews").hide();
								$rList.append(data.reviews_list_html);
								self.showHideMoreInfos.apply(self);
							}
							$rList.fadeIn("fast");
						});
					} else {
						$rList.append(data.reviews_list_html);
						self.showHideMoreInfos.apply(self);
					}
					if(data.more_reviews_available) {
						$("a.load-more.hidden").removeClass("hidden");
					} else {
						$("a.load-more:not(.hidden)").addClass("hidden");
					}
					self.loadMore.apply(self);
					$("#spinner").hide();
				} else {
					$("#spinner").hide();
					self.showGYGindowError.apply(self);
				}
			},
			error: function() {
				$("#spinner").hide();
				self.showGYGindowError.apply(self);
			}
		});
	},
	markAsRead: function(id) {
		var self = this;
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/reviews_load.php",
			data: {
				action: "mark_as_read",
				review_id: id
			},
			dataType: "json",
			success: function(data) {
			 	if(data.success && data.review_id == id) {
					var $li = $("#r_"+id);
					$li.removeClass("unread");
					if(data.unread_reviews != 0) {
						$("#reviews-unread-count").text(data.unread_reviews);
					} else {
						$("#reviews-unread-count").hide();
					}
					$("#spinner").hide();
				} else {
					$("#spinner").hide();
					self.showGYGindowError.apply(self);
				}
			},
			error: function() {
				$("#spinner").hide();
				self.showGYGindowError.apply(self);
			}
		});
	},
	showGYGindowError: function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.TourUpcoming.errorTitle,
				show_error: true,
				error_message: GYG.translation.TourUpcoming.errorMessage,
				error_relocate: "/supplier/reviews.php"
			}
		});
	}
});

// run if on reviews page
$(function() {
	if($("#reviews").length) {
		GYG.Reviews.running = new GYG.Reviews();
	}
});

/**//**/

GYG.Questions = function() {
	this.init();
};

$.extend(GYG.Questions.prototype, {
	init: function() {
		var self = this;
		
		self.showHideMoreInfos.apply(self);
		self.filterByTourId.apply(self);
		self.loadMore.apply(self);
		self.showEditFormForPublicPosts.apply(self);
		self.cancelInput.apply(self);
		self.validateContactInfo.apply(self);
		// Ajax answer Question
		self.answerQuestion.apply(self);
		
		if(GYG.Questions.tour_id != "") {
			$("#spinner").show();
			$("#no-results").hide();
			$("a.load-more:not(.hidden)").addClass("hidden");
			self.showForFilter.apply(self, [GYG.Questions.tour_id, 0]);
			$("select[name='filter_tour_id'] option[value='"+GYG.Questions.tour_id+"']").attr("selected", true);
		}
		
		// textfields with 
		new GYG.TextFieldCounter();
	},
	
	cancelInput: function() {
		$("input[type='button'].cancel").unbind();
		$("input[type='button'].cancel").click(function() {
			var $li = $(this).parent().parent().parent().parent();
			var $form = $(this).parent().parent();
			$form.fadeOut("fast", function() {
				if($form.attr("id") == "post-answer") {
					$("a[href='#next-answer']", $li).parent().removeClass("hidden");
				} else if ($form.attr("id") == "edit-answer") {
					$("li.answer", $li).show();
				}
			});
		});
	},
	showEditFormForPublicPosts: function() {
		$("a[href='#edit']").unbind();
		$("a[href='#edit']").click(function(event) {
			event.preventDefault();
			var $list = $(this).parent().parent().parent().parent().parent();
			var articleId = parseInt($("li.answer:last", $list).attr("class").match(/a_(\d+)/)[1], 10);
			var articleText = $("li.answer:last .article-text", $list).text();
			
			$("li.answer:last", $list).hide();
			$("#edit-answer input[name='tour_question_article_id']").val(articleId);
			$("#edit-answer textarea").val(articleText);
			$("#edit-answer", $list).show();
			$("#edit-answer textarea").focus();
		});
	},
	showHideMoreInfos: function() {
		$("a[href*='#more-infos']").unbind("click");
		$("a[href*='#more-infos']").click(function(event) {
			event.preventDefault();
			var $this = $(this);
			var $el = $this.parent().parent().parent();
			if($this.hasClass("open")) {
				$this.removeClass("open");
				$("div.more-info", $el).slideUp("fast");
			} else {
				$this.addClass("open");
				$("div.more-info", $el).slideDown("fast");
			}
			
			//Reset
			setTimeout(function() {
				$("form p.error", $el).remove();
				$("li.answer", $el).show();
				$("#edit-answer", $el).hide();
			}, 100);
		});
	},
	filterByTourId: function() {
		var self = this;
		$("select[name='filter_tour_id']").change(function() {
			if($(this).val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($(this).val(), 10);
			}
			$("#spinner").show();
			self.showForFilter.apply(self, [tourId, 0]);
		});
	},
	loadMore: function() {
		var self = this;
		$("a.load-more").click(function(event) {
			event.preventDefault();
			$(this).unbind("click");
			var number = parseInt($("#questions-list .questions").size(), 10);
			if($("select[name='filter_tour_id']").val() == "all") {
				var tourId = -1;
			} else {
				var tourId = parseInt($("select[name='filter_tour_id']").val(), 10);
			}
			$("#spinner").show();
			self.showForFilter.apply(self, [tourId, number]);
		});
	},
	showForFilter: function(id, number) {
		var self = this;
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/questions_load.php",
			data: {
				action: "filter",
				tour_id: id,
				number_of_loaded_questions: number
			},
			dataType: "json",
			success: function(data) {
			 	if(data.success && data.tour_id == id) {
					var $qList = $("#questions-list");
					if(data.start_at_0) {
						$qList.fadeOut("fast", function() {
							$(".questions", $qList).remove();
							if(data.questions_list_html == "") {
								$("#no-results").show();
								$("#no-questions-yet").hide();
								$("#filter-matched-no-questions").show();
							} else {
								$("#no-results").hide();
								$("#no-questions-yet").hide();
								$("#filter-matched-no-questions").hide();
								$qList.append(data.questions_list_html);
								
								//Reset
								self.showHideMoreInfos.apply(self);
								$("textarea[class*='maxlength_'].counter").unbind();
								new GYG.TextFieldCounter();
								self.answerQuestion.apply(self);
								self.showEditFormForPublicPosts.apply(self);
								self.cancelInput.apply(self);
								self.validateContactInfo.apply(self);
							}
							$qList.fadeIn("fast");
						});
					} else {
						$qList.append(data.questions_list_html);
						
						//Reset
						self.showHideMoreInfos.apply(self);
						$("textarea[class*='maxlength_'].counter").unbind();
						new GYG.TextFieldCounter();
						self.answerQuestion.apply(self);
						self.showEditFormForPublicPosts.apply(self);
						self.cancelInput.apply(self);
						self.validateContactInfo.apply(self);
					}
					if(data.more_questions_available) {
						$("a.load-more.hidden").removeClass("hidden");
					} else {
						$("a.load-more:not(.hidden)").addClass("hidden");
					}
					self.loadMore.apply(self);
					$("#spinner").hide();
				} else {
					$("#spinner").hide();
					self.showGYGindowError.apply(self);
				}
			},
			error: function() {
				$("#spinner").hide();
				self.showGYGindowError.apply(self);
			}
		});
	},
	answerQuestion: function() {
		var self = this;
		$(".more-info form").unbind();
		$(".more-info form").submit(function(event) {
			event.preventDefault();
			var $form = $(this);
			var $li = $form.parent().parent();
			var questionId = parseInt($li.attr("id").match(/q_(\d+)/)[1], 10);
			var questionType = $li.attr("class").match(/type_(\w+)/)[1];
			var editLink = "";
			editLink = "(<a href='#edit'>"+GYG.translation.Questions.edit+"</a>)";
			
			//remove old errors
			$("p.error", $li).remove();
			
			// loading indicator
			self.showLoadingIndicator.apply(self, [$form]);
			
			$("a[href='#answer-question']:not(.hidden)", $li).addClass("hidden");
			$.ajax({
				type: "POST",
				url: "/supplier/ajax/questions_load.php",
				data: $form.serializeArray(),
				dataType: "json",
				success: function(data) {
				 	if(data.success && questionId == data.tour_question_id) {
						$li.removeClass("open");
						$form.fadeOut("fast", function() {
							var $newEl = 
								"<li class='answer a_"+data.tour_question_article_id+"'>"+
									"<p>"+
										"<strong>&raquo; "+GYG.translation.Questions.youAnswered+"</strong> "+
										"<span class='small-grey'>"+GYG.translation.Questions.answeredOn+" "+data.datetime+" "+editLink+"</span><br/>"+
									"</p>"+
									"<span class='article-text'>"+data.text+"</span>"+
								"</li>";
							$(".article-list", $li).append($newEl);
							$(".loading-indicator", $form).remove();
							if(data.open_questions != 0) {
								$("#questions-new-count").text(data.open_questions);
							} else {
								$("#questions-new-count").hide();
							}
							self.showEditFormForPublicPosts.apply(self);
							GYG.flashElement($(".article-list li:last", $li));
						});
					} else {
						$(".loading-indicator", $form).remove();
						var $errorEl, i, $error;
						for(field in data.user_exceptions) {
							$errorEl = $('<p class="error"></p>');
							$error = $("<span></span>");
							$error.text(data.user_exceptions[field][0]);
							$errorEl.append($error);
							for(i = 1; i<data.user_exceptions[field].length; i++) {
								$errorEl.append("<br />");
								$error = $("<span></span>");
								$error.text(data.user_exceptions[field][i]); 
								$newEl.append($error);
							}
							$errorEl.insertBefore($("textarea",$form));
						}
					}
				},
				error: function() {
					$(".loading-indicator", $form).remove();
					self.showGYGindowError.apply(self);
				}
			});
		});
	},
	showLoadingIndicator: function($el) {
		var height = $el.height();
		$("#content > .loading-indicator").clone().appendTo($el).css({
			"padding-top": (height-70)/2 + "px"
		});
	},
	showGYGindowError: function() {
		new GYG.GYGindow({
			content: {
				title: GYG.translation.TourUpcoming.errorTitle,
				show_error: true,
				error_message: GYG.translation.TourUpcoming.errorMessage,
				error_relocate: "/supplier/questions.php"
			}
		});
	},
	validateContactInfo: function() {
		$("textarea[name='answer']").unbind("keyup");
		$("textarea[name='answer']").keyup(function() {
			if($(this).val().search(/([\ 0-9\-\.\+]{8,}|[\ a-z0-9\._-]+(@|[\(\[]+(&auml;|a)t[\]\)])[a-z0-9.-\[\]\(\)\{\}]+|[\ a-z0-9\._-]+\(.*?\)[\ a-z0-9._-]+\(.*?\)[\ a-z0-9._-]+|skype|http:\S*|https:\S*|www\.\S*)/gi) != -1) {
				$(".contact-details-alert", $(this).parent()).slideDown();
			} else {
				$(".contact-details-alert", $(this).parent()).hide();
			}
		});
	}
});

// run if on questions page
$(function() {
	if($("#questions").length) {
		GYG.Questions.running = new GYG.Questions();
	}
});

/**//**/

GYG.PromotionBacklinks = function() {
	this.init();
};

$.extend(GYG.PromotionBacklinks.prototype, {
	init: function() {
		var self = this;
		
		if($("#supplier-seal").length) {
			self.generateSupplierSourceCode.apply();
		}
		if($("#product-seal").length) {
			self.generateProductSourceCode.apply();
		}
		
		$("select[name='product-urls']").change(function() {
			self.generateProductSourceCode.apply();
		});
	},
	generateProductSourceCode: function() {
		var $productLinkSource = $("#product-seal");
		var url = $("select[name='product-urls']").val().match(/(.+)_\|\|_/)[1];
		var title = $("select[name='product-urls']").val().match(/_\|\|_(.+)/)[1];
		$("a", $productLinkSource).attr("href", url);
		$("#gyg-p-title", $productLinkSource).text(title);
		var html = $productLinkSource.html().replace(/ä/g, "&auml;").replace(/Ä/g, "&Auml;").replace(/ö/g, "&ouml;").replace(/Ö/g, "&Ouml;").replace(/ü/g, "&uuml;").replace(/Ü/g, "&Uuml;");
		$("textarea[name='product']").val(html);
	},
	generateSupplierSourceCode: function() {
		var html = $("#supplier-seal").html().replace(/ä/g, "&auml;").replace(/Ä/g, "&Auml;").replace(/ö/g, "&ouml;").replace(/Ö/g, "&Ouml;").replace(/ü/g, "&uuml;").replace(/Ü/g, "&Uuml;");
		$("textarea[name='supplier']").val(html);
	}
});

// run if on promotions page
$(function() {
	if($("#promotion-backlinks").length) {
		GYG.PromotionBacklinks.running = new GYG.PromotionBacklinks();
	}
});

/**//**/

$(document).ready(function() {
	$('textarea.expanding').autogrow({
		maxHeight: 400,
		lineHeight: 14.7
	});
	
	// Hide User Information 
	$("a[href='#hide-user-info']").click(function(event) {
		event.preventDefault();
		var $box = $(this).parent();
		var pageId = $box.attr("rel");
		var boxId = $box.attr("name");
		
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/user_information.php",
			data: {
				action: "hide",
				page_id: pageId,
				box_id: boxId
			},
			dataType: "json",
			success: function(data) {
			 	if(data.success) {
					$box.fadeOut();
				} else {
					alert("Error");
				}
			},
			error: function() {
				alert("Error");
			}
		});
	});
	
	// Show User Information 
	$("a[href='#show-user-info']").click(function(event) {
		event.preventDefault();
		var $this = $(this);
		var pageId = $this.attr("rel");
		
		$.ajax({
			type: "POST",
			url: "/supplier/ajax/user_information.php",
			data: {
				action: "show_all",
				page_id: pageId
			},
			dataType: "json",
			success: function(data) {
			 	if(data.success) {
					$("#info-box.info").fadeIn();
					$this.parent().parent().parent().removeClass("active");
				} else {
					alert("Error");
				}
			},
			error: function() {
				alert("Error");
			}
		});
	});
	
	// Show more info for blue Boxes
	$("#info-points a[href='#point']").click(function(event) {
		event.preventDefault();
		var $point = $(this).parent();
		if($("span", $point).is(":hidden")) {
			$("span", $point).slideDown("fast");
		} else {
			$("span", $point).hide();
		}	
	});
});

/**/
