(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Tx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mm={exports:{}},jl={},wm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Cx=Symbol.for("react.fragment"),kx=Symbol.for("react.strict_mode"),Rx=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Px=Symbol.for("react.context"),Lx=Symbol.for("react.forward_ref"),Dx=Symbol.for("react.suspense"),Ux=Symbol.for("react.memo"),Ix=Symbol.for("react.lazy"),Uh=Symbol.iterator;function Fx(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,Am={};function Va(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Em}Va.prototype.isReactComponent={};Va.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Va.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cm(){}Cm.prototype=Va.prototype;function wd(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Em}var Ed=wd.prototype=new Cm;Ed.constructor=wd;Tm(Ed,Va.prototype);Ed.isPureReactComponent=!0;var Ih=Array.isArray,km=Object.prototype.hasOwnProperty,Td={current:null},Rm={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)km.call(e,i)&&!Rm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ys,type:t,key:a,ref:s,props:r,_owner:Td.current}}function Ox(t,e){return{$$typeof:Ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ys}function zx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fh=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zx(""+t.key):e.toString(36)}function qo(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ys:case Ax:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+hc(s,0):i,Ih(r)?(n="",t!=null&&(n=t.replace(Fh,"$&/")+"/"),qo(r,e,n,"",function(u){return u})):r!=null&&(Ad(r)&&(r=Ox(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Fh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Ih(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+hc(a,o);s+=qo(a,e,n,l,r)}else if(l=Fx(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+hc(a,o++),s+=qo(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return qo(t,i,"","",function(a){return e.call(n,a,r++)}),i}function Bx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Yo={transition:null},jx={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Td};function Pm(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Va;Ye.Fragment=Cx;Ye.Profiler=Rx;Ye.PureComponent=wd;Ye.StrictMode=kx;Ye.Suspense=Dx;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Ye.act=Pm;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!Rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ys,type:t.type,key:r,ref:a,props:i,_owner:s}};Ye.createContext=function(t){return t={$$typeof:Px,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};Ye.createElement=Nm;Ye.createFactory=function(t){var e=Nm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Lx,render:t}};Ye.isValidElement=Ad;Ye.lazy=function(t){return{$$typeof:Ix,_payload:{_status:-1,_result:t},_init:Bx}};Ye.memo=function(t,e){return{$$typeof:Ux,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};Ye.unstable_act=Pm;Ye.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ye.useContext=function(t){return rn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ye.useId=function(){return rn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ye.useRef=function(t){return rn.current.useRef(t)};Ye.useState=function(t){return rn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return rn.current.useTransition()};Ye.version="18.3.1";wm.exports=Ye;var we=wm.exports;const Hx=Tx(we);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx=we,Vx=Symbol.for("react.element"),Wx=Symbol.for("react.fragment"),Xx=Object.prototype.hasOwnProperty,Kx=Gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qx={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Xx.call(e,i)&&!qx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vx,type:t,key:a,ref:s,props:r,_owner:Kx.current}}jl.Fragment=Wx;jl.jsx=Lm;jl.jsxs=Lm;Mm.exports=jl;var c=Mm.exports,Su={},Dm={exports:{}},Sn={},Um={exports:{}},Im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,D){var M=U.length;U.push(D);e:for(;0<M;){var E=M-1>>>1,j=U[E];if(0<r(j,D))U[E]=D,U[M]=j,M=E;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var D=U[0],M=U.pop();if(M!==D){U[0]=M;e:for(var E=0,j=U.length,I=j>>>1;E<I;){var G=2*(E+1)-1,J=U[G],ne=G+1,Z=U[ne];if(0>r(J,M))ne<j&&0>r(Z,J)?(U[E]=Z,U[ne]=M,E=ne):(U[E]=J,U[G]=M,E=G);else if(ne<j&&0>r(Z,M))U[E]=Z,U[ne]=M,E=ne;else break e}}return D}function r(U,D){var M=U.sortIndex-D.sortIndex;return M!==0?M:U.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],u=[],h=1,p=null,f=3,m=!1,y=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var D=n(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=U)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function S(U){if(_=!1,v(U),!y)if(n(l)!==null)y=!0,$(N);else{var D=n(u);D!==null&&ee(S,D.startTime-U)}}function N(U,D){y=!1,_&&(_=!1,d(F),F=-1),m=!0;var M=f;try{for(v(D),p=n(l);p!==null&&(!(p.expirationTime>D)||U&&!W());){var E=p.callback;if(typeof E=="function"){p.callback=null,f=p.priorityLevel;var j=E(p.expirationTime<=D);D=t.unstable_now(),typeof j=="function"?p.callback=j:p===n(l)&&i(l),v(D)}else i(l);p=n(l)}if(p!==null)var I=!0;else{var G=n(u);G!==null&&ee(S,G.startTime-D),I=!1}return I}finally{p=null,f=M,m=!1}}var k=!1,R=null,F=-1,w=5,C=-1;function W(){return!(t.unstable_now()-C<w)}function Y(){if(R!==null){var U=t.unstable_now();C=U;var D=!0;try{D=R(!0,U)}finally{D?Q():(k=!1,R=null)}}else k=!1}var Q;if(typeof x=="function")Q=function(){x(Y)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,V=P.port2;P.port1.onmessage=Y,Q=function(){V.postMessage(null)}}else Q=function(){g(Y,0)};function $(U){R=U,k||(k=!0,Q())}function ee(U,D){F=g(function(){U(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,$(N))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var M=f;f=D;try{return U()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,D){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var M=f;f=U;try{return D()}finally{f=M}},t.unstable_scheduleCallback=function(U,D,M){var E=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?E+M:E):M=E,U){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=M+j,U={id:h++,callback:D,priorityLevel:U,startTime:M,expirationTime:j,sortIndex:-1},M>E?(U.sortIndex=M,e(u,U),n(l)===null&&U===n(u)&&(_?(d(F),F=-1):_=!0,ee(S,M-E))):(U.sortIndex=j,e(l,U),y||m||(y=!0,$(N))),U},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(U){var D=f;return function(){var M=f;f=D;try{return U.apply(this,arguments)}finally{f=M}}}})(Im);Um.exports=Im;var Yx=Um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=we,yn=Yx;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fm=new Set,ks={};function Or(t,e){La(t,e),La(t+"Capture",e)}function La(t,e){for(ks[t]=e,t=0;t<e.length;t++)Fm.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,Jx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},zh={};function Zx(t){return bu.call(zh,t)?!0:bu.call(Oh,t)?!1:Jx.test(t)?zh[t]=!0:(Oh[t]=!0,!1)}function Qx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ev(t,e,n,i){if(e===null||typeof e>"u"||Qx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,kd);Ht[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,kd);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,kd);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ev(e,n,r,i)&&(n=null),i||r===null?Zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),da=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),Om=Symbol.for("react.provider"),zm=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Ld=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Bm=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function Za(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,fc;function hs(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var pc=!1;function mc(t,e){if(!t||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hs(t):""}function tv(t){switch(t.tag){case 5:return hs(t.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 2:case 15:return t=mc(t.type,!1),t;case 11:return t=mc(t.type.render,!1),t;case 1:return t=mc(t.type,!0),t;default:return""}}function Tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ha:return"Fragment";case da:return"Portal";case Mu:return"Profiler";case Nd:return"StrictMode";case wu:return"Suspense";case Eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zm:return(t.displayName||"Context")+".Consumer";case Om:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ld:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}function nv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iv(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=iv(t))}function Hm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Au(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gm(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function Cu(t,e){Gm(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fs=Array.isArray;function Ea(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(fs(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Vm(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,Xm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function Km(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Km(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var av=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pu(t,e){if(e){if(av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,Ta=null,Aa=null;function Wh(t){if(t=Zs(t)){if(typeof Uu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Xl(e),Uu(t.stateNode,t.type,e))}}function Ym(t){Ta?Aa?Aa.push(t):Aa=[t]:Ta=t}function $m(){if(Ta){var t=Ta,e=Aa;if(Aa=Ta=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function Jm(t,e){return t(e)}function Zm(){}var gc=!1;function Qm(t,e,n){if(gc)return t(e,n);gc=!0;try{return Jm(t,e,n)}finally{gc=!1,(Ta!==null||Aa!==null)&&(Zm(),$m())}}function Ns(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Iu=!1;if(bi)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{Iu=!1}function sv(t,e,n,i,r,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var vs=!1,ul=null,dl=!1,Fu=null,ov={onError:function(t){vs=!0,ul=t}};function lv(t,e,n,i,r,a,s,o,l){vs=!1,ul=null,sv.apply(ov,arguments)}function cv(t,e,n,i,r,a,s,o,l){if(lv.apply(this,arguments),vs){if(vs){var u=ul;vs=!1,ul=null}else throw Error(se(198));dl||(dl=!0,Fu=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xh(t){if(zr(t)!==t)throw Error(se(188))}function uv(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Xh(r),t;if(a===i)return Xh(r),e;a=a.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function t0(t){return t=uv(t),t!==null?n0(t):null}function n0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n0(t);if(e!==null)return e;t=t.sibling}return null}var i0=yn.unstable_scheduleCallback,Kh=yn.unstable_cancelCallback,dv=yn.unstable_shouldYield,hv=yn.unstable_requestPaint,yt=yn.unstable_now,fv=yn.unstable_getCurrentPriorityLevel,Ud=yn.unstable_ImmediatePriority,r0=yn.unstable_UserBlockingPriority,hl=yn.unstable_NormalPriority,pv=yn.unstable_LowPriority,a0=yn.unstable_IdlePriority,Hl=null,ni=null;function mv(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:vv,gv=Math.log,xv=Math.LN2;function vv(t){return t>>>=0,t===0?32:31-(gv(t)/xv|0)|0}var co=64,uo=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=ps(o):(a&=s,a!==0&&(i=ps(a)))}else s=n&~r,s!==0?i=ps(s):a!==0&&(i=ps(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function _v(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-Kn(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=_v(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s0(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function Sv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function o0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l0,Fd,c0,u0,d0,zu=!1,ho=[],Vi=null,Wi=null,Xi=null,Ps=new Map,Ls=new Map,Oi=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function es(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Zs(e),e!==null&&Fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Mv(t,e,n,i,r){switch(e){case"focusin":return Vi=es(Vi,t,e,n,i,r),!0;case"dragenter":return Wi=es(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=es(Xi,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return Ps.set(a,es(Ps.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Ls.set(a,es(Ls.get(a)||null,t,e,n,i,r)),!0}return!1}function h0(t){var e=br(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=e0(n),e!==null){t.blockedOn=e,d0(t.priority,function(){c0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Du=i,n.target.dispatchEvent(i),Du=null}else return e=Zs(n),e!==null&&Fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Yh(t,e,n){$o(t)&&n.delete(e)}function wv(){zu=!1,Vi!==null&&$o(Vi)&&(Vi=null),Wi!==null&&$o(Wi)&&(Wi=null),Xi!==null&&$o(Xi)&&(Xi=null),Ps.forEach(Yh),Ls.forEach(Yh)}function ts(t,e){t.blockedOn===e&&(t.blockedOn=null,zu||(zu=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,wv)))}function Ds(t){function e(r){return ts(r,t)}if(0<ho.length){ts(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&ts(Vi,t),Wi!==null&&ts(Wi,t),Xi!==null&&ts(Xi,t),Ps.forEach(e),Ls.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&Oi.shift()}var Ca=Ci.ReactCurrentBatchConfig,pl=!0;function Ev(t,e,n,i){var r=rt,a=Ca.transition;Ca.transition=null;try{rt=1,Od(t,e,n,i)}finally{rt=r,Ca.transition=a}}function Tv(t,e,n,i){var r=rt,a=Ca.transition;Ca.transition=null;try{rt=4,Od(t,e,n,i)}finally{rt=r,Ca.transition=a}}function Od(t,e,n,i){if(pl){var r=Bu(t,e,n,i);if(r===null)Ac(t,e,i,ml,n),qh(t,i);else if(Mv(r,t,e,n,i))i.stopPropagation();else if(qh(t,i),e&4&&-1<bv.indexOf(t)){for(;r!==null;){var a=Zs(r);if(a!==null&&l0(a),a=Bu(t,e,n,i),a===null&&Ac(t,e,i,ml,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Ac(t,e,i,null,n)}}var ml=null;function Bu(t,e,n,i){if(ml=null,t=Dd(i),t=br(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function f0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fv()){case Ud:return 1;case r0:return 4;case hl:case pv:return 16;case a0:return 536870912;default:return 16}default:return 16}}var Bi=null,zd=null,Jo=null;function p0(){if(Jo)return Jo;var t,e=zd,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Jo=r.slice(t,1<i?1-i:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function $h(){return!1}function bn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?fo:$h,this.isPropagationStopped=$h,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bd=bn(Wa),Js=gt({},Wa,{view:0,detail:0}),Av=bn(Js),vc,_c,ns,Gl=gt({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?(vc=t.screenX-ns.screenX,_c=t.screenY-ns.screenY):_c=vc=0,ns=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Jh=bn(Gl),Cv=gt({},Gl,{dataTransfer:0}),kv=bn(Cv),Rv=gt({},Js,{relatedTarget:0}),yc=bn(Rv),Nv=gt({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=bn(Nv),Lv=gt({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=bn(Lv),Uv=gt({},Wa,{data:0}),Zh=bn(Uv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ov[t])?!!e[t]:!1}function jd(){return zv}var Bv=gt({},Js,{key:function(t){if(t.key){var e=Iv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=bn(Bv),Hv=gt({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=bn(Hv),Gv=gt({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),Vv=bn(Gv),Wv=gt({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=bn(Wv),Kv=gt({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=bn(Kv),Yv=[9,13,27,32],Hd=bi&&"CompositionEvent"in window,_s=null;bi&&"documentMode"in document&&(_s=document.documentMode);var $v=bi&&"TextEvent"in window&&!_s,m0=bi&&(!Hd||_s&&8<_s&&11>=_s),ef=" ",tf=!1;function g0(t,e){switch(t){case"keyup":return Yv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fa=!1;function Jv(t,e){switch(t){case"compositionend":return x0(e);case"keypress":return e.which!==32?null:(tf=!0,ef);case"textInput":return t=e.data,t===ef&&tf?null:t;default:return null}}function Zv(t,e){if(fa)return t==="compositionend"||!Hd&&g0(t,e)?(t=p0(),Jo=zd=Bi=null,fa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qv[t.type]:e==="textarea"}function v0(t,e,n,i){Ym(i),e=gl(e,"onChange"),0<e.length&&(n=new Bd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ys=null,Us=null;function e_(t){k0(t,0)}function Vl(t){var e=ga(t);if(Hm(e))return t}function t_(t,e){if(t==="change")return e}var _0=!1;if(bi){var Sc;if(bi){var bc="oninput"in document;if(!bc){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),bc=typeof rf.oninput=="function"}Sc=bc}else Sc=!1;_0=Sc&&(!document.documentMode||9<document.documentMode)}function af(){ys&&(ys.detachEvent("onpropertychange",y0),Us=ys=null)}function y0(t){if(t.propertyName==="value"&&Vl(Us)){var e=[];v0(e,Us,t,Dd(t)),Qm(e_,e)}}function n_(t,e,n){t==="focusin"?(af(),ys=e,Us=n,ys.attachEvent("onpropertychange",y0)):t==="focusout"&&af()}function i_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Us)}function r_(t,e){if(t==="click")return Vl(e)}function a_(t,e){if(t==="input"||t==="change")return Vl(e)}function s_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:s_;function Is(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function of(t,e){var n=sf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sf(n)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b0(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o_(t){var e=b0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(i!==null&&Gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=of(n,a);var s=of(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l_=bi&&"documentMode"in document&&11>=document.documentMode,pa=null,ju=null,Ss=null,Hu=!1;function lf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||pa==null||pa!==cl(i)||(i=pa,"selectionStart"in i&&Gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ss&&Is(Ss,i)||(Ss=i,i=gl(ju,"onSelect"),0<i.length&&(e=new Bd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=pa)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ma={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Mc={},M0={};bi&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Wl(t){if(Mc[t])return Mc[t];if(!ma[t])return t;var e=ma[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return Mc[t]=e[n];return t}var w0=Wl("animationend"),E0=Wl("animationiteration"),T0=Wl("animationstart"),A0=Wl("transitionend"),C0=new Map,cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){C0.set(t,e),Or(e,[t])}for(var wc=0;wc<cf.length;wc++){var Ec=cf[wc],c_=Ec.toLowerCase(),u_=Ec[0].toUpperCase()+Ec.slice(1);ar(c_,"on"+u_)}ar(w0,"onAnimationEnd");ar(E0,"onAnimationIteration");ar(T0,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(A0,"onTransitionEnd");La("onMouseEnter",["mouseout","mouseover"]);La("onMouseLeave",["mouseout","mouseover"]);La("onPointerEnter",["pointerout","pointerover"]);La("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function uf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cv(i,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;uf(r,o,u),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;uf(r,o,u),a=l}}}if(dl)throw t=Fu,dl=!1,Fu=null,t}function lt(t,e){var n=e[Ku];n===void 0&&(n=e[Ku]=new Set);var i=t+"__bubble";n.has(i)||(R0(e,t,2,!1),n.add(i))}function Tc(t,e,n){var i=0;e&&(i|=4),R0(n,t,i,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Fs(t){if(!t[mo]){t[mo]=!0,Fm.forEach(function(n){n!=="selectionchange"&&(d_.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,Tc("selectionchange",!1,e))}}function R0(t,e,n,i){switch(f0(e)){case 1:var r=Ev;break;case 4:r=Tv;break;default:r=Od}n=r.bind(null,e,n,t),r=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ac(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=br(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}Qm(function(){var u=a,h=Dd(n),p=[];e:{var f=C0.get(t);if(f!==void 0){var m=Bd,y=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":m=jv;break;case"focusin":y="focus",m=yc;break;case"focusout":y="blur",m=yc;break;case"beforeblur":case"afterblur":m=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Vv;break;case w0:case E0:case T0:m=Pv;break;case A0:m=Xv;break;case"scroll":m=Av;break;case"wheel":m=qv;break;case"copy":case"cut":case"paste":m=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qh}var _=(e&4)!==0,g=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=Ns(x,d),S!=null&&_.push(Os(x,S,v)))),g)break;x=x.return}0<_.length&&(f=new m(f,y,null,n,h),p.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Du&&(y=n.relatedTarget||n.fromElement)&&(br(y)||y[Mi]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?br(y):null,y!==null&&(g=zr(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Jh,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Qh,S="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?f:ga(m),v=y==null?f:ga(y),f=new _(S,x+"leave",m,n,h),f.target=g,f.relatedTarget=v,S=null,br(h)===u&&(_=new _(d,x+"enter",y,n,h),_.target=v,_.relatedTarget=g,S=_),g=S,m&&y)t:{for(_=m,d=y,x=0,v=_;v;v=Wr(v))x++;for(v=0,S=d;S;S=Wr(S))v++;for(;0<x-v;)_=Wr(_),x--;for(;0<v-x;)d=Wr(d),v--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=Wr(_),d=Wr(d)}_=null}else _=null;m!==null&&df(p,f,m,_,!1),y!==null&&g!==null&&df(p,g,y,_,!0)}}e:{if(f=u?ga(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=t_;else if(nf(f))if(_0)N=a_;else{N=i_;var k=n_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=r_);if(N&&(N=N(t,u))){v0(p,N,n,h);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ku(f,"number",f.value)}switch(k=u?ga(u):window,t){case"focusin":(nf(k)||k.contentEditable==="true")&&(pa=k,ju=u,Ss=null);break;case"focusout":Ss=ju=pa=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,lf(p,n,h);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":lf(p,n,h)}var R;if(Hd)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else fa?g0(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(m0&&n.locale!=="ko"&&(fa||F!=="onCompositionStart"?F==="onCompositionEnd"&&fa&&(R=p0()):(Bi=h,zd="value"in Bi?Bi.value:Bi.textContent,fa=!0)),k=gl(u,F),0<k.length&&(F=new Zh(F,t,null,n,h),p.push({event:F,listeners:k}),R?F.data=R:(R=x0(n),R!==null&&(F.data=R)))),(R=$v?Jv(t,n):Zv(t,n))&&(u=gl(u,"onBeforeInput"),0<u.length&&(h=new Zh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=R))}k0(p,e)})}function Os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ns(t,n),a!=null&&i.unshift(Os(t,a,r)),a=Ns(t,e),a!=null&&i.push(Os(t,a,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ns(n,a),l!=null&&s.unshift(Os(n,l,o))):r||(l=Ns(n,a),l!=null&&s.push(Os(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var h_=/\r\n?/g,f_=/\u0000|\uFFFD/g;function hf(t){return(typeof t=="string"?t:""+t).replace(h_,`
`).replace(f_,"")}function go(t,e,n){if(e=hf(e),hf(t)!==e&&n)throw Error(se(425))}function xl(){}var Gu=null,Vu=null;function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,p_=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,m_=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(t){return ff.resolve(null).then(t).catch(g_)}:Xu;function g_(t){setTimeout(function(){throw t})}function Cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ds(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ds(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xa=Math.random().toString(36).slice(2),ti="__reactFiber$"+Xa,zs="__reactProps$"+Xa,Mi="__reactContainer$"+Xa,Ku="__reactEvents$"+Xa,x_="__reactListeners$"+Xa,v_="__reactHandles$"+Xa;function br(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pf(t);t!==null;){if(n=t[ti])return n;t=pf(t)}return e}t=n,n=t.parentNode}return null}function Zs(t){return t=t[ti]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ga(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Xl(t){return t[zs]||null}var qu=[],xa=-1;function sr(t){return{current:t}}function ut(t){0>xa||(t.current=qu[xa],qu[xa]=null,xa--)}function ot(t,e){xa++,qu[xa]=t.current,t.current=e}var nr={},Zt=sr(nr),cn=sr(!1),Nr=nr;function Da(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function vl(){ut(cn),ut(Zt)}function mf(t,e,n){if(Zt.current!==nr)throw Error(se(168));ot(Zt,e),ot(cn,n)}function N0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,nv(t)||"Unknown",r));return gt({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Nr=Zt.current,ot(Zt,t),ot(cn,cn.current),!0}function gf(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=N0(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,ut(cn),ut(Zt),ot(Zt,t)):ut(cn),ot(cn,n)}var gi=null,Kl=!1,kc=!1;function P0(t){gi===null?gi=[t]:gi.push(t)}function __(t){Kl=!0,P0(t)}function or(){if(!kc&&gi!==null){kc=!0;var t=0,e=rt;try{var n=gi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Kl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),i0(Ud,or),r}finally{rt=e,kc=!1}}return null}var va=[],_a=0,yl=null,Sl=0,Tn=[],An=0,Pr=null,vi=1,_i="";function mr(t,e){va[_a++]=Sl,va[_a++]=yl,yl=t,Sl=e}function L0(t,e,n){Tn[An++]=vi,Tn[An++]=_i,Tn[An++]=Pr,Pr=t;var i=vi;t=_i;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var a=32-Kn(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,vi=1<<32-Kn(e)+r|n<<r|i,_i=a+t}else vi=1<<a|n<<r|i,_i=t}function Vd(t){t.return!==null&&(mr(t,1),L0(t,1,0))}function Wd(t){for(;t===yl;)yl=va[--_a],va[_a]=null,Sl=va[--_a],va[_a]=null;for(;t===Pr;)Pr=Tn[--An],Tn[An]=null,_i=Tn[--An],Tn[An]=null,vi=Tn[--An],Tn[An]=null}var vn=null,xn=null,dt=!1,Hn=null;function D0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,xn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:vi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,xn=null,!0):!1;default:return!1}}function Yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $u(t){if(dt){var e=xn;if(e){var n=e;if(!xf(t,e)){if(Yu(t))throw Error(se(418));e=Ki(n.nextSibling);var i=vn;e&&xf(t,e)?D0(i,n):(t.flags=t.flags&-4097|2,dt=!1,vn=t)}}else{if(Yu(t))throw Error(se(418));t.flags=t.flags&-4097|2,dt=!1,vn=t}}}function vf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function xo(t){if(t!==vn)return!1;if(!dt)return vf(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wu(t.type,t.memoizedProps)),e&&(e=xn)){if(Yu(t))throw U0(),Error(se(418));for(;e;)D0(t,e),e=Ki(e.nextSibling)}if(vf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=vn?Ki(t.stateNode.nextSibling):null;return!0}function U0(){for(var t=xn;t;)t=Ki(t.nextSibling)}function Ua(){xn=vn=null,dt=!1}function Xd(t){Hn===null?Hn=[t]:Hn.push(t)}var y_=Ci.ReactCurrentBatchConfig;function is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function vo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _f(t){var e=t._init;return e(t._payload)}function I0(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Ji(d,x),d.index=0,d.sibling=null,d}function a(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,v,S){return x===null||x.tag!==6?(x=Ic(v,d.mode,S),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,S){var N=v.type;return N===ha?h(d,x,v.props.children,S,v.key):x!==null&&(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ii&&_f(N)===x.type)?(S=r(x,v.props),S.ref=is(d,x,v),S.return=d,S):(S=al(v.type,v.key,v.props,null,d.mode,S),S.ref=is(d,x,v),S.return=d,S)}function u(d,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Fc(v,d.mode,S),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function h(d,x,v,S,N){return x===null||x.tag!==7?(x=Ar(v,d.mode,S,N),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ic(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case so:return v=al(x.type,x.key,x.props,null,d.mode,v),v.ref=is(d,null,x),v.return=d,v;case da:return x=Fc(x,d.mode,v),x.return=d,x;case Ii:var S=x._init;return p(d,S(x._payload),v)}if(fs(x)||Za(x))return x=Ar(x,d.mode,v,null),x.return=d,x;vo(d,x)}return null}function f(d,x,v,S){var N=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:o(d,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case so:return v.key===N?l(d,x,v,S):null;case da:return v.key===N?u(d,x,v,S):null;case Ii:return N=v._init,f(d,x,N(v._payload),S)}if(fs(v)||Za(v))return N!==null?null:h(d,x,v,S,null);vo(d,v)}return null}function m(d,x,v,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,o(x,d,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case so:return d=d.get(S.key===null?v:S.key)||null,l(x,d,S,N);case da:return d=d.get(S.key===null?v:S.key)||null,u(x,d,S,N);case Ii:var k=S._init;return m(d,x,v,k(S._payload),N)}if(fs(S)||Za(S))return d=d.get(v)||null,h(x,d,S,N,null);vo(x,S)}return null}function y(d,x,v,S){for(var N=null,k=null,R=x,F=x=0,w=null;R!==null&&F<v.length;F++){R.index>F?(w=R,R=null):w=R.sibling;var C=f(d,R,v[F],S);if(C===null){R===null&&(R=w);break}t&&R&&C.alternate===null&&e(d,R),x=a(C,x,F),k===null?N=C:k.sibling=C,k=C,R=w}if(F===v.length)return n(d,R),dt&&mr(d,F),N;if(R===null){for(;F<v.length;F++)R=p(d,v[F],S),R!==null&&(x=a(R,x,F),k===null?N=R:k.sibling=R,k=R);return dt&&mr(d,F),N}for(R=i(d,R);F<v.length;F++)w=m(R,d,F,v[F],S),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?F:w.key),x=a(w,x,F),k===null?N=w:k.sibling=w,k=w);return t&&R.forEach(function(W){return e(d,W)}),dt&&mr(d,F),N}function _(d,x,v,S){var N=Za(v);if(typeof N!="function")throw Error(se(150));if(v=N.call(v),v==null)throw Error(se(151));for(var k=N=null,R=x,F=x=0,w=null,C=v.next();R!==null&&!C.done;F++,C=v.next()){R.index>F?(w=R,R=null):w=R.sibling;var W=f(d,R,C.value,S);if(W===null){R===null&&(R=w);break}t&&R&&W.alternate===null&&e(d,R),x=a(W,x,F),k===null?N=W:k.sibling=W,k=W,R=w}if(C.done)return n(d,R),dt&&mr(d,F),N;if(R===null){for(;!C.done;F++,C=v.next())C=p(d,C.value,S),C!==null&&(x=a(C,x,F),k===null?N=C:k.sibling=C,k=C);return dt&&mr(d,F),N}for(R=i(d,R);!C.done;F++,C=v.next())C=m(R,d,F,C.value,S),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?F:C.key),x=a(C,x,F),k===null?N=C:k.sibling=C,k=C);return t&&R.forEach(function(Y){return e(d,Y)}),dt&&mr(d,F),N}function g(d,x,v,S){if(typeof v=="object"&&v!==null&&v.type===ha&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case so:e:{for(var N=v.key,k=x;k!==null;){if(k.key===N){if(N=v.type,N===ha){if(k.tag===7){n(d,k.sibling),x=r(k,v.props.children),x.return=d,d=x;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ii&&_f(N)===k.type){n(d,k.sibling),x=r(k,v.props),x.ref=is(d,k,v),x.return=d,d=x;break e}n(d,k);break}else e(d,k);k=k.sibling}v.type===ha?(x=Ar(v.props.children,d.mode,S,v.key),x.return=d,d=x):(S=al(v.type,v.key,v.props,null,d.mode,S),S.ref=is(d,x,v),S.return=d,d=S)}return s(d);case da:e:{for(k=v.key;x!==null;){if(x.key===k)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Fc(v,d.mode,S),x.return=d,d=x}return s(d);case Ii:return k=v._init,g(d,x,k(v._payload),S)}if(fs(v))return y(d,x,v,S);if(Za(v))return _(d,x,v,S);vo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=Ic(v,d.mode,S),x.return=d,d=x),s(d)):n(d,x)}return g}var Ia=I0(!0),F0=I0(!1),bl=sr(null),Ml=null,ya=null,Kd=null;function qd(){Kd=ya=Ml=null}function Yd(t){var e=bl.current;ut(bl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ka(t,e){Ml=t,Kd=ya=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Kd!==t)if(t={context:t,memoizedValue:e,next:null},ya===null){if(Ml===null)throw Error(se(308));ya=t,Ml.dependencies={lanes:0,firstContext:t}}else ya=ya.next=t;return e}var Mr=null;function $d(t){Mr===null?Mr=[t]:Mr.push(t)}function O0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$d(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function Jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,$d(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function Qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}function yf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var r=t.updateQueue;Fi=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(a!==null){var p=r.baseState;s=0,h=u=l=null,o=a;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(f=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=gt({},p,f);break e;case 2:Fi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,l=p):h=h.next=m,s|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Dr|=s,t.lanes=s,t.memoizedState=p}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Qs={},ii=sr(Qs),Bs=sr(Qs),js=sr(Qs);function wr(t){if(t===Qs)throw Error(se(174));return t}function Zd(t,e){switch(ot(js,e),ot(Bs,t),ot(ii,Qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nu(e,t)}ut(ii),ot(ii,e)}function Fa(){ut(ii),ut(Bs),ut(js)}function B0(t){wr(js.current);var e=wr(ii.current),n=Nu(e,t.type);e!==n&&(ot(Bs,t),ot(ii,n))}function Qd(t){Bs.current===t&&(ut(ii),ut(Bs))}var pt=sr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function eh(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var el=Ci.ReactCurrentDispatcher,Nc=Ci.ReactCurrentBatchConfig,Lr=0,mt=null,Tt=null,Dt=null,Tl=!1,bs=!1,Hs=0,S_=0;function Wt(){throw Error(se(321))}function th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function nh(t,e,n,i,r,a){if(Lr=a,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?E_:T_,t=n(i,r),bs){a=0;do{if(bs=!1,Hs=0,25<=a)throw Error(se(301));a+=1,Dt=Tt=null,e.updateQueue=null,el.current=A_,t=n(i,r)}while(bs)}if(el.current=Al,e=Tt!==null&&Tt.next!==null,Lr=0,Dt=Tt=mt=null,Tl=!1,e)throw Error(se(300));return t}function ih(){var t=Hs!==0;return Hs=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Dn(){if(Tt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,Tt=t;else{if(t===null)throw Error(se(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Gs(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,u=a;do{var h=u.lane;if((Lr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,s=i):l=l.next=p,mt.lanes|=h,Dr|=h}u=u.next}while(u!==null&&u!==a);l===null?s=i:l.next=o,Yn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,mt.lanes|=a,Dr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);Yn(a,e.memoizedState)||(ln=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function j0(){}function H0(t,e){var n=mt,i=Dn(),r=e(),a=!Yn(i.memoizedState,r);if(a&&(i.memoizedState=r,ln=!0),i=i.queue,rh(W0.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Vs(9,V0.bind(null,n,i,r,e),void 0,null),It===null)throw Error(se(349));Lr&30||G0(n,e,r)}return r}function G0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,i){e.value=n,e.getSnapshot=i,X0(e)&&K0(t)}function W0(t,e,n){return n(function(){X0(e)&&K0(t)})}function X0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function K0(t){var e=wi(t,1);e!==null&&qn(e,t,1,-1)}function bf(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:t},e.queue=t,t=t.dispatch=w_.bind(null,mt,t),[e.memoizedState,t]}function Vs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function q0(){return Dn().memoizedState}function tl(t,e,n,i){var r=Qn();mt.flags|=t,r.memoizedState=Vs(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=Dn();i=i===void 0?null:i;var a=void 0;if(Tt!==null){var s=Tt.memoizedState;if(a=s.destroy,i!==null&&th(i,s.deps)){r.memoizedState=Vs(e,n,a,i);return}}mt.flags|=t,r.memoizedState=Vs(1|e,n,a,i)}function Mf(t,e){return tl(8390656,8,t,e)}function rh(t,e){return ql(2048,8,t,e)}function Y0(t,e){return ql(4,2,t,e)}function $0(t,e){return ql(4,4,t,e)}function J0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z0(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,J0.bind(null,e,t),n)}function ah(){}function Q0(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function eg(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function tg(t,e,n){return Lr&21?(Yn(n,e)||(n=s0(),mt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function b_(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{rt=n,Nc.transition=i}}function ng(){return Dn().memoizedState}function M_(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ig(t))rg(e,n);else if(n=O0(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),ag(n,e,i)}}function w_(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ig(t))rg(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,Yn(o,s)){var l=e.interleaved;l===null?(r.next=r,$d(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=O0(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),ag(n,e,i))}}function ig(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function rg(t,e){bs=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ag(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}var Al={readContext:Ln,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},E_={readContext:Ln,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Mf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,J0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M_.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:bf,useDebugValue:ah,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=bf(!1),e=t[0];return t=b_.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Qn();if(dt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),It===null)throw Error(se(349));Lr&30||G0(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,Mf(W0.bind(null,i,a,t),[t]),i.flags|=2048,Vs(9,V0.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=Qn(),e=It.identifierPrefix;if(dt){var n=_i,i=vi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=S_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},T_={readContext:Ln,useCallback:Q0,useContext:Ln,useEffect:rh,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:$0,useMemo:eg,useReducer:Pc,useRef:q0,useState:function(){return Pc(Gs)},useDebugValue:ah,useDeferredValue:function(t){var e=Dn();return tg(e,Tt.memoizedState,t)},useTransition:function(){var t=Pc(Gs)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:H0,useId:ng,unstable_isNewReconciler:!1},A_={readContext:Ln,useCallback:Q0,useContext:Ln,useEffect:rh,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:$0,useMemo:eg,useReducer:Lc,useRef:q0,useState:function(){return Lc(Gs)},useDebugValue:ah,useDeferredValue:function(t){var e=Dn();return Tt===null?e.memoizedState=t:tg(e,Tt.memoizedState,t)},useTransition:function(){var t=Lc(Gs)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:H0,useId:ng,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=$i(t),a=Si(i,r);a.payload=e,n!=null&&(a.callback=n),e=qi(t,a,r),e!==null&&(qn(e,t,r,i),Qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=$i(t),a=Si(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=qi(t,a,r),e!==null&&(qn(e,t,r,i),Qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=$i(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(qn(e,t,i,n),Qo(e,t,i))}};function wf(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!Is(n,i)||!Is(r,a):!0}function sg(t,e,n){var i=!1,r=nr,a=e.contextType;return typeof a=="object"&&a!==null?a=Ln(a):(r=un(e)?Nr:Zt.current,i=e.contextTypes,a=(i=i!=null)?Da(t,r):nr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function Ef(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jd(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=Ln(a):(a=un(e)?Nr:Zt.current,r.context=Da(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Zu(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Oa(t,e){try{var n="",i=e;do n+=tv(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function og(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,ud=i),ed(t,e)},n}function lg(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ed(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Tf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=H_.bind(null,t,e,n),e.then(t,t))}function Af(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var k_=Ci.ReactCurrentOwner,ln=!1;function en(t,e,n,i){e.child=t===null?F0(e,null,n,i):Ia(e,t.child,n,i)}function kf(t,e,n,i,r){n=n.render;var a=e.ref;return ka(e,r),i=nh(t,e,n,i,a,r),n=ih(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(dt&&n&&Vd(e),e.flags|=1,en(t,e,i,r),e.child)}function Rf(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!fh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,cg(t,e,a,i,r)):(t=al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(s,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=Ji(a,i),t.ref=e.ref,t.return=e,e.child=t}function cg(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Is(a,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return td(t,e,n,i,r)}function ug(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ba,gn),gn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ba,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,ot(ba,gn),gn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,ot(ba,gn),gn|=i;return en(t,e,r,n),e.child}function dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,i,r){var a=un(n)?Nr:Zt.current;return a=Da(e,a),ka(e,r),n=nh(t,e,n,i,a,r),i=ih(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(dt&&i&&Vd(e),e.flags|=1,en(t,e,n,r),e.child)}function Nf(t,e,n,i,r){if(un(n)){var a=!0;_l(e)}else a=!1;if(ka(e,r),e.stateNode===null)nl(t,e),sg(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=un(n)?Nr:Zt.current,u=Da(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Ef(e,s,i,u),Fi=!1;var f=e.memoizedState;s.state=f,wl(e,i,s,r),l=e.memoizedState,o!==i||f!==l||cn.current||Fi?(typeof h=="function"&&(Zu(e,n,h,i),l=e.memoizedState),(o=Fi||wf(e,n,o,i,f,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,z0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Bn(e.type,o),s.props=u,p=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=un(n)?Nr:Zt.current,l=Da(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Ef(e,s,i,l),Fi=!1,f=e.memoizedState,s.state=f,wl(e,i,s,r);var y=e.memoizedState;o!==p||f!==y||cn.current||Fi?(typeof m=="function"&&(Zu(e,n,m,i),y=e.memoizedState),(u=Fi||wf(e,n,u,i,f,y,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return nd(t,e,n,i,a,r)}function nd(t,e,n,i,r,a){dg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&gf(e,n,!1),Ei(t,e,a);i=e.stateNode,k_.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ia(e,t.child,null,a),e.child=Ia(e,null,o,a)):en(t,e,o,a),e.memoizedState=i.state,r&&gf(e,n,!0),e.child}function hg(t){var e=t.stateNode;e.pendingContext?mf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mf(t,e.context,!1),Zd(t,e.containerInfo)}function Pf(t,e,n,i,r){return Ua(),Xd(r),e.flags|=256,en(t,e,n,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function fg(t,e,n){var i=e.pendingProps,r=pt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return $u(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Zl(s,i,0,null),t=Ar(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=rd(n),e.memoizedState=id,t):sh(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return R_(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=Ji(o,a):(a=Ar(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?rd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=id,i}return a=t.child,t=a.sibling,i=Ji(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sh(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _o(t,e,n,i){return i!==null&&Xd(i),Ia(e,t.child,null,n),t=sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function R_(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(se(422))),_o(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Zl({mode:"visible",children:i.children},r,0,null),a=Ar(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ia(e,t.child,null,s),e.child.memoizedState=rd(s),e.memoizedState=id,a);if(!(e.mode&1))return _o(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(se(419)),i=Dc(a,i,void 0),_o(t,e,s,i)}if(o=(s&t.childLanes)!==0,ln||o){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,wi(t,r),qn(i,t,r,-1))}return hh(),i=Dc(Error(se(421))),_o(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=G_.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,xn=Ki(r.nextSibling),vn=e,dt=!0,Hn=null,t!==null&&(Tn[An++]=vi,Tn[An++]=_i,Tn[An++]=Pr,vi=t.id,_i=t.overflow,Pr=e),e=sh(e,i.children),e.flags|=4096,e)}function Lf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Uc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function pg(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(en(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lf(t,n,e);else if(t.tag===19)Lf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uc(e,!0,n,null,a);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N_(t,e,n){switch(e.tag){case 3:hg(e),Ua();break;case 5:B0(e);break;case 1:un(e.type)&&_l(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?fg(t,e,n):(ot(pt,pt.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return pg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,ug(t,e,n)}return Ei(t,e,n)}var mg,ad,gg,xg;mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};gg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ii.current);var a=null;switch(n){case"input":r=Au(t,r),i=Au(t,i),a=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),a=[];break;case"textarea":r=Ru(t,r),i=Ru(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Pu(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};xg=function(t,e,n,i){n!==i&&(e.flags|=4)};function rs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function P_(t,e,n){var i=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return un(e.type)&&vl(),Xt(e),null;case 3:return i=e.stateNode,Fa(),ut(cn),ut(Zt),eh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(fd(Hn),Hn=null))),ad(t,e),Xt(e),null;case 5:Qd(e);var r=wr(js.current);if(n=e.type,t!==null&&e.stateNode!=null)gg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Xt(e),null}if(t=wr(ii.current),xo(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[ti]=e,i[zs]=a,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<ms.length;r++)lt(ms[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":jh(i,a),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},lt("invalid",i);break;case"textarea":Gh(i,a),lt("invalid",i)}Pu(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",""+o]):ks.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":oo(i),Hh(i,a,!0);break;case"textarea":oo(i),Vh(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ti]=e,t[zs]=i,mg(t,e,!1,!1),e.stateNode=t;e:{switch(s=Lu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ms.length;r++)lt(ms[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":jh(t,i),r=Au(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Gh(t,i),r=Ru(t,i),lt("invalid",t);break;default:r=i}Pu(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?qm(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xm(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rs(t,l):typeof l=="number"&&Rs(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ks.hasOwnProperty(a)?l!=null&&a==="onScroll"&&lt("scroll",t):l!=null&&Rd(t,a,l,s))}switch(n){case"input":oo(t),Hh(t,i,!1);break;case"textarea":oo(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Ea(t,!!i.multiple,a,!1):i.defaultValue!=null&&Ea(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)xg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=wr(js.current),wr(ii.current),xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(a=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Xt(e),null;case 13:if(ut(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&xn!==null&&e.mode&1&&!(e.flags&128))U0(),Ua(),e.flags|=98560,a=!1;else if(a=xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(se(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(se(317));a[ti]=e}else Ua(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),a=!1}else Hn!==null&&(fd(Hn),Hn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?At===0&&(At=3):hh())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Fa(),ad(t,e),t===null&&Fs(e.stateNode.containerInfo),Xt(e),null;case 10:return Yd(e.type._context),Xt(e),null;case 17:return un(e.type)&&vl(),Xt(e),null;case 19:if(ut(pt),a=e.memoizedState,a===null)return Xt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)rs(a,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=El(t),s!==null){for(e.flags|=128,rs(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}a.tail!==null&&yt()>za&&(e.flags|=128,i=!0,rs(a,!1),e.lanes=4194304)}else{if(!i)if(t=El(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!dt)return Xt(e),null}else 2*yt()-a.renderingStartTime>za&&n!==1073741824&&(e.flags|=128,i=!0,rs(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return dh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function L_(t,e){switch(Wd(e),e.tag){case 1:return un(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fa(),ut(cn),ut(Zt),eh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(ut(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ua()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(pt),null;case 4:return Fa(),null;case 10:return Yd(e.type._context),null;case 22:case 23:return dh(),null;case 24:return null;default:return null}}var yo=!1,Yt=!1,D_=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Sa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function sd(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Df=!1;function U_(t,e){if(Gu=pl,t=b0(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=s+r),p!==a||i!==0&&p.nodeType!==3||(l=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=s),f===a&&++h===i&&(l=s),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},pl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,g=y.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Bn(e.type,_),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return y=Df,Df=!1,y}function Ms(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&sd(e,n,a)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vg(t){var e=t.alternate;e!==null&&(t.alternate=null,vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[zs],delete e[Ku],delete e[x_],delete e[v_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _g(t){return t.tag===5||t.tag===3||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Ft=null,jn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)yg(t,e,n),n=n.sibling}function yg(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Yt||Sa(n,e);case 6:var i=Ft,r=jn;Ft=null,Ri(t,e,n),Ft=i,jn=r,Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?Cc(t.parentNode,n):t.nodeType===1&&Cc(t,n),Ds(t)):Cc(Ft,n.stateNode));break;case 4:i=Ft,r=jn,Ft=n.stateNode.containerInfo,jn=!0,Ri(t,e,n),Ft=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&sd(n,e,s),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Yt&&(Sa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Ri(t,e,n),Yt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function If(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D_),e.forEach(function(i){var r=V_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,jn=!1;break e;case 3:Ft=o.stateNode.containerInfo,jn=!0;break e;case 4:Ft=o.stateNode.containerInfo,jn=!0;break e}o=o.return}if(Ft===null)throw Error(se(160));yg(a,s,r),Ft=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sg(e,t),e=e.sibling}function Sg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Zn(t),i&4){try{Ms(3,t,t.return),$l(3,t)}catch(_){vt(t,t.return,_)}try{Ms(5,t,t.return)}catch(_){vt(t,t.return,_)}}break;case 1:Un(e,t),Zn(t),i&512&&n!==null&&Sa(n,n.return);break;case 5:if(Un(e,t),Zn(t),i&512&&n!==null&&Sa(n,n.return),t.flags&32){var r=t.stateNode;try{Rs(r,"")}catch(_){vt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Gm(r,a),Lu(o,s);var u=Lu(o,a);for(s=0;s<l.length;s+=2){var h=l[s],p=l[s+1];h==="style"?qm(r,p):h==="dangerouslySetInnerHTML"?Xm(r,p):h==="children"?Rs(r,p):Rd(r,h,p,u)}switch(o){case"input":Cu(r,a);break;case"textarea":Vm(r,a);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Ea(r,!!a.multiple,m,!1):f!==!!a.multiple&&(a.defaultValue!=null?Ea(r,!!a.multiple,a.defaultValue,!0):Ea(r,!!a.multiple,a.multiple?[]:"",!1))}r[zs]=a}catch(_){vt(t,t.return,_)}}break;case 6:if(Un(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(_){vt(t,t.return,_)}}break;case 3:if(Un(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(e.containerInfo)}catch(_){vt(t,t.return,_)}break;case 4:Un(e,t),Zn(t);break;case 13:Un(e,t),Zn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(ch=yt())),i&4&&If(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(u=Yt)||h,Un(e,t),Yt=u):Un(e,t),Zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Se=t,h=t.child;h!==null;){for(p=Se=h;Se!==null;){switch(f=Se,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ms(4,f,f.return);break;case 1:Sa(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){vt(i,n,_)}}break;case 5:Sa(f,f.return);break;case 22:if(f.memoizedState!==null){Of(p);continue}}m!==null?(m.return=f,Se=m):Of(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Km("display",s))}catch(_){vt(t,t.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){vt(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Un(e,t),Zn(t),i&4&&If(t);break;case 21:break;default:Un(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_g(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Rs(r,""),i.flags&=-33);var a=Uf(t);cd(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Uf(t);ld(t,o,s);break;default:throw Error(se(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I_(t,e,n){Se=t,bg(t)}function bg(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||yo;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=yo;var u=Yt;if(yo=s,(Yt=l)&&!u)for(Se=r;Se!==null;)s=Se,l=s.child,s.tag===22&&s.memoizedState!==null?zf(r):l!==null?(l.return=s,Se=l):zf(r);for(;a!==null;)Se=a,bg(a),a=a.sibling;Se=r,yo=o,Yt=u}Ff(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,Se=a):Ff(t)}}function Ff(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Sf(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ds(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Yt||e.flags&512&&od(e)}catch(f){vt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Of(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function zf(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var a=e.return;try{od(e)}catch(l){vt(e,a,l)}break;case 5:var s=e.return;try{od(e)}catch(l){vt(e,s,l)}}}catch(l){vt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var F_=Math.ceil,Cl=Ci.ReactCurrentDispatcher,oh=Ci.ReactCurrentOwner,Pn=Ci.ReactCurrentBatchConfig,Qe=0,It=null,bt=null,Bt=0,gn=0,ba=sr(0),At=0,Ws=null,Dr=0,Jl=0,lh=0,ws=null,on=null,ch=0,za=1/0,mi=null,kl=!1,ud=null,Yi=null,So=!1,ji=null,Rl=0,Es=0,dd=null,il=-1,rl=0;function nn(){return Qe&6?yt():il!==-1?il:il=yt()}function $i(t){return t.mode&1?Qe&2&&Bt!==0?Bt&-Bt:y_.transition!==null?(rl===0&&(rl=s0()),rl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:f0(t.type)),t):1}function qn(t,e,n,i){if(50<Es)throw Es=0,dd=null,Error(se(185));$s(t,n,i),(!(Qe&2)||t!==It)&&(t===It&&(!(Qe&2)&&(Jl|=n),At===4&&zi(t,Bt)),dn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(za=yt()+500,Kl&&or()))}function dn(t,e){var n=t.callbackNode;yv(t,e);var i=fl(t,t===It?Bt:0);if(i===0)n!==null&&Kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Kh(n),e===1)t.tag===0?__(Bf.bind(null,t)):P0(Bf.bind(null,t)),m_(function(){!(Qe&6)&&or()}),n=null;else{switch(o0(i)){case 1:n=Ud;break;case 4:n=r0;break;case 16:n=hl;break;case 536870912:n=a0;break;default:n=hl}n=Rg(n,Mg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mg(t,e){if(il=-1,rl=0,Qe&6)throw Error(se(327));var n=t.callbackNode;if(Ra()&&t.callbackNode!==n)return null;var i=fl(t,t===It?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=Qe;Qe|=2;var a=Eg();(It!==t||Bt!==e)&&(mi=null,za=yt()+500,Tr(t,e));do try{B_();break}catch(o){wg(t,o)}while(!0);qd(),Cl.current=a,Qe=r,bt!==null?e=0:(It=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=Ou(t),r!==0&&(i=r,e=hd(t,r))),e===1)throw n=Ws,Tr(t,0),zi(t,i),dn(t,yt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!O_(r)&&(e=Nl(t,i),e===2&&(a=Ou(t),a!==0&&(i=a,e=hd(t,a))),e===1))throw n=Ws,Tr(t,0),zi(t,i),dn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:gr(t,on,mi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=ch+500-yt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xu(gr.bind(null,t,on,mi),e);break}gr(t,on,mi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Kn(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*F_(i/1960))-i,10<i){t.timeoutHandle=Xu(gr.bind(null,t,on,mi),i);break}gr(t,on,mi);break;case 5:gr(t,on,mi);break;default:throw Error(se(329))}}}return dn(t,yt()),t.callbackNode===n?Mg.bind(null,t):null}function hd(t,e){var n=ws;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=on,on=n,e!==null&&fd(e)),t}function fd(t){on===null?on=t:on.push.apply(on,t)}function O_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Yn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~lh,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function Bf(t){if(Qe&6)throw Error(se(327));Ra();var e=fl(t,0);if(!(e&1))return dn(t,yt()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=Ou(t);i!==0&&(e=i,n=hd(t,i))}if(n===1)throw n=Ws,Tr(t,0),zi(t,e),dn(t,yt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,on,mi),dn(t,yt()),null}function uh(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(za=yt()+500,Kl&&or())}}function Ur(t){ji!==null&&ji.tag===0&&!(Qe&6)&&Ra();var e=Qe;Qe|=1;var n=Pn.transition,i=rt;try{if(Pn.transition=null,rt=1,t)return t()}finally{rt=i,Pn.transition=n,Qe=e,!(Qe&6)&&or()}}function dh(){gn=ba.current,ut(ba)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p_(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Fa(),ut(cn),ut(Zt),eh();break;case 5:Qd(i);break;case 4:Fa();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:Yd(i.type._context);break;case 22:case 23:dh()}n=n.return}if(It=t,bt=t=Ji(t.current,null),Bt=gn=e,At=0,Ws=null,lh=Jl=Dr=0,on=ws=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}Mr=null}return t}function wg(t,e){do{var n=bt;try{if(qd(),el.current=Al,Tl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Lr=0,Dt=Tt=mt=null,bs=!1,Hs=0,oh.current=null,n===null||n.return===null){At=1,Ws=e,bt=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=Bt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Af(s);if(m!==null){m.flags&=-257,Cf(m,s,o,a,e),m.mode&1&&Tf(a,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Tf(a,u,e),hh();break e}l=Error(se(426))}}else if(dt&&o.mode&1){var g=Af(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Cf(g,s,o,a,e),Xd(Oa(l,o));break e}}a=l=Oa(l,o),At!==4&&(At=2),ws===null?ws=[a]:ws.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=og(a,l,e);yf(a,d);break e;case 1:o=l;var x=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yi===null||!Yi.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=lg(a,o,e);yf(a,S);break e}}a=a.return}while(a!==null)}Ag(n)}catch(N){e=N,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Eg(){var t=Cl.current;return Cl.current=Al,t===null?Al:t}function hh(){(At===0||At===3||At===2)&&(At=4),It===null||!(Dr&268435455)&&!(Jl&268435455)||zi(It,Bt)}function Nl(t,e){var n=Qe;Qe|=2;var i=Eg();(It!==t||Bt!==e)&&(mi=null,Tr(t,e));do try{z_();break}catch(r){wg(t,r)}while(!0);if(qd(),Qe=n,Cl.current=i,bt!==null)throw Error(se(261));return It=null,Bt=0,At}function z_(){for(;bt!==null;)Tg(bt)}function B_(){for(;bt!==null&&!dv();)Tg(bt)}function Tg(t){var e=kg(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?Ag(t):bt=e,oh.current=null}function Ag(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L_(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,bt=null;return}}else if(n=P_(n,e,gn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);At===0&&(At=5)}function gr(t,e,n){var i=rt,r=Pn.transition;try{Pn.transition=null,rt=1,j_(t,e,n,i)}finally{Pn.transition=r,rt=i}return null}function j_(t,e,n,i){do Ra();while(ji!==null);if(Qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(Sv(t,a),t===It&&(bt=It=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,Rg(hl,function(){return Ra(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Pn.transition,Pn.transition=null;var s=rt;rt=1;var o=Qe;Qe|=4,oh.current=null,U_(t,n),Sg(n,t),o_(Vu),pl=!!Gu,Vu=Gu=null,t.current=n,I_(n),hv(),Qe=o,rt=s,Pn.transition=a}else t.current=n;if(So&&(So=!1,ji=t,Rl=r),a=t.pendingLanes,a===0&&(Yi=null),mv(n.stateNode),dn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=ud,ud=null,t;return Rl&1&&t.tag!==0&&Ra(),a=t.pendingLanes,a&1?t===dd?Es++:(Es=0,dd=t):Es=0,or(),null}function Ra(){if(ji!==null){var t=o0(Rl),e=Pn.transition,n=rt;try{if(Pn.transition=null,rt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Rl=0,Qe&6)throw Error(se(331));var r=Qe;for(Qe|=4,Se=t.current;Se!==null;){var a=Se,s=a.child;if(Se.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Se=u;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:Ms(8,h,a)}var p=h.child;if(p!==null)p.return=h,Se=p;else for(;Se!==null;){h=Se;var f=h.sibling,m=h.return;if(vg(h),h===u){Se=null;break}if(f!==null){f.return=m,Se=f;break}Se=m}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Se=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,Se=s;else e:for(;Se!==null;){if(a=Se,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ms(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,Se=d;break e}Se=a.return}}var x=t.current;for(Se=x;Se!==null;){s=Se;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Se=v;else e:for(s=x;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:$l(9,o)}}catch(N){vt(o,o.return,N)}if(o===s){Se=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Se=S;break e}Se=o.return}}if(Qe=r,or(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{rt=n,Pn.transition=e}}return!1}function jf(t,e,n){e=Oa(n,e),e=og(t,e,1),t=qi(t,e,1),e=nn(),t!==null&&($s(t,1,e),dn(t,e))}function vt(t,e,n){if(t.tag===3)jf(t,t,n);else for(;e!==null;){if(e.tag===3){jf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=Oa(n,t),t=lg(e,t,1),e=qi(e,t,1),t=nn(),e!==null&&($s(e,1,t),dn(e,t));break}}e=e.return}}function H_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Bt&n)===n&&(At===4||At===3&&(Bt&130023424)===Bt&&500>yt()-ch?Tr(t,0):lh|=n),dn(t,e)}function Cg(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=nn();t=wi(t,e),t!==null&&($s(t,e,n),dn(t,n))}function G_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cg(t,n)}function V_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Cg(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,N_(t,e,n);ln=!!(t.flags&131072)}else ln=!1,dt&&e.flags&1048576&&L0(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Da(e,Zt.current);ka(e,n),r=nh(null,e,i,t,r,n);var a=ih();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(a=!0,_l(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jd(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=nd(null,e,i,!0,a,n)):(e.tag=0,dt&&a&&Vd(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=X_(i),t=Bn(i,t),r){case 0:e=td(null,e,i,t,n);break e;case 1:e=Nf(null,e,i,t,n);break e;case 11:e=kf(null,e,i,t,n);break e;case 14:e=Rf(null,e,i,Bn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Nf(t,e,i,r,n);case 3:e:{if(hg(e),t===null)throw Error(se(387));i=e.pendingProps,a=e.memoizedState,r=a.element,z0(t,e),wl(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Oa(Error(se(423)),e),e=Pf(t,e,i,n,r);break e}else if(i!==r){r=Oa(Error(se(424)),e),e=Pf(t,e,i,n,r);break e}else for(xn=Ki(e.stateNode.containerInfo.firstChild),vn=e,dt=!0,Hn=null,n=F0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ua(),i===r){e=Ei(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return B0(e),t===null&&$u(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,Wu(i,r)?s=null:a!==null&&Wu(i,a)&&(e.flags|=32),dg(t,e),en(t,e,s,n),e.child;case 6:return t===null&&$u(e),null;case 13:return fg(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ia(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),kf(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,ot(bl,i._currentValue),i._currentValue=s,a!==null)if(Yn(a.value,s)){if(a.children===r.children&&!cn.current){e=Ei(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Si(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ju(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(se(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ju(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ka(e,n),r=Ln(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Rf(t,e,i,r,n);case 15:return cg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),nl(t,e),e.tag=1,un(i)?(t=!0,_l(e)):t=!1,ka(e,n),sg(e,i,r),Qu(e,i,r,n),nd(null,e,i,!0,t,n);case 19:return pg(t,e,n);case 22:return ug(t,e,n)}throw Error(se(156,e.tag))};function Rg(t,e){return i0(t,e)}function W_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new W_(t,e,n,i)}function fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===Ld)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")fh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ha:return Ar(n.children,r,a,e);case Nd:s=8,r|=8;break;case Mu:return t=Nn(12,n,e,r|2),t.elementType=Mu,t.lanes=a,t;case wu:return t=Nn(13,n,e,r),t.elementType=wu,t.lanes=a,t;case Eu:return t=Nn(19,n,e,r),t.elementType=Eu,t.lanes=a,t;case Bm:return Zl(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Om:s=10;break e;case zm:s=9;break e;case Pd:s=11;break e;case Ld:s=14;break e;case Ii:s=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Nn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Ar(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function Zl(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Bm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ph(t,e,n,i,r,a,s,o,l){return t=new K_(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Nn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(a),t}function q_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:da,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ng(t){if(!t)return nr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(un(n))return N0(t,n,e)}return e}function Pg(t,e,n,i,r,a,s,o,l){return t=ph(n,i,!0,t,r,a,s,o,l),t.context=Ng(null),n=t.current,i=nn(),r=$i(n),a=Si(i,r),a.callback=e??null,qi(n,a,r),t.current.lanes=r,$s(t,r,i),dn(t,i),t}function Ql(t,e,n,i){var r=e.current,a=nn(),s=$i(r);return n=Ng(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,s),t!==null&&(qn(t,r,s,a),Qo(t,r,s)),s}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mh(t,e){Hf(t,e),(t=t.alternate)&&Hf(t,e)}function Y_(){return null}var Lg=typeof reportError=="function"?reportError:function(t){console.error(t)};function gh(t){this._internalRoot=t}ec.prototype.render=gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Ql(t,e,null,null)};ec.prototype.unmount=gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){Ql(null,t,null,null)}),e[Mi]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=u0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&h0(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gf(){}function $_(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var u=Pl(s);a.call(u)}}var s=Pg(e,i,t,0,null,!1,!1,"",Gf);return t._reactRootContainer=s,t[Mi]=s.current,Fs(t.nodeType===8?t.parentNode:t),Ur(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Pl(l);o.call(u)}}var l=ph(t,0,!1,null,null,!1,!1,"",Gf);return t._reactRootContainer=l,t[Mi]=l.current,Fs(t.nodeType===8?t.parentNode:t),Ur(function(){Ql(e,l,n,i)}),l}function nc(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=Pl(s);o.call(l)}}Ql(e,s,t,r)}else s=$_(n,e,t,r,i);return Pl(s)}l0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ps(e.pendingLanes);n!==0&&(Id(e,n|1),dn(e,yt()),!(Qe&6)&&(za=yt()+500,or()))}break;case 13:Ur(function(){var i=wi(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),mh(t,1)}};Fd=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}mh(t,134217728)}};c0=function(t){if(t.tag===13){var e=$i(t),n=wi(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}mh(t,e)}};u0=function(){return rt};d0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Uu=function(t,e,n){switch(e){case"input":if(Cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(se(90));Hm(i),Cu(i,r)}}}break;case"textarea":Vm(t,n);break;case"select":e=n.value,e!=null&&Ea(t,!!n.multiple,e,!1)}};Jm=uh;Zm=Ur;var J_={usingClientEntryPoint:!1,Events:[Zs,ga,Xl,Ym,$m,uh]},as={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z_={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t0(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||Y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Hl=bo.inject(Z_),ni=bo}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J_;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(se(200));return q_(t,e,null,n)};Sn.createRoot=function(t,e){if(!xh(t))throw Error(se(299));var n=!1,i="",r=Lg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ph(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Fs(t.nodeType===8?t.parentNode:t),new gh(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=t0(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Ur(t)};Sn.hydrate=function(t,e,n){if(!tc(e))throw Error(se(200));return nc(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=Lg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Pg(e,null,t,1,n??null,r,!1,a,s),t[Mi]=e.current,Fs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ec(e)};Sn.render=function(t,e,n){if(!tc(e))throw Error(se(200));return nc(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!tc(t))throw Error(se(40));return t._reactRootContainer?(Ur(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Sn.unstable_batchedUpdates=uh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return nc(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function Dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dg)}catch(t){console.error(t)}}Dg(),Dm.exports=Sn;var Q_=Dm.exports,Vf=Q_;Su.createRoot=Vf.createRoot,Su.hydrateRoot=Vf.hydrateRoot;let Xr=null;function eo(){if(!Xr){const t=window.AudioContext||window.webkitAudioContext;t&&(Xr=new t)}return Xr&&Xr.state==="suspended"&&Xr.resume(),Xr}function Wf(){try{const t=eo();if(!t)return;const e=t.sampleRate*.22,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*Math.exp(-o/(e*.28));const r=t.createBufferSource();r.buffer=n;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1400,t.currentTime),a.frequency.exponentialRampToValueAtTime(450,t.currentTime+.22),a.Q.value=1.8;const s=t.createGain();s.gain.setValueAtTime(.35,t.currentTime),s.gain.exponentialRampToValueAtTime(.01,t.currentTime+.22),r.connect(a),a.connect(s),s.connect(t.destination),r.start()}catch(t){console.warn("Audio play error:",t)}}function Ka(){try{const t=eo();if(!t)return;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(n,t.currentTime+i*.08),a.gain.setValueAtTime(.2,t.currentTime+i*.08),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+i*.08+.25),r.connect(a),a.connect(t.destination),r.start(t.currentTime+i*.08),r.stop(t.currentTime+i*.08+.25)})}catch{}}function ic(){try{const t=eo();if(!t)return;const e=t.createOscillator(),n=t.createGain();e.type="sawtooth",e.frequency.setValueAtTime(160,t.currentTime),e.frequency.exponentialRampToValueAtTime(110,t.currentTime+.25),n.gain.setValueAtTime(.2,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.25),e.connect(n),n.connect(t.destination),e.start(),e.stop(t.currentTime+.25)}catch{}}function qe(){try{const t=eo();if(!t)return;const e=t.createOscillator(),n=t.createGain();e.type="sine",e.frequency.setValueAtTime(800,t.currentTime),e.frequency.exponentialRampToValueAtTime(400,t.currentTime+.04),n.gain.setValueAtTime(.15,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.04),e.connect(n),n.connect(t.destination),e.start(),e.stop(t.currentTime+.04)}catch{}}function Br(){try{const t=eo();if(!t)return;[{t:0,f:[523.25,659.25,783.99]},{t:.15,f:[587.33,739.99,880]},{t:.3,f:[659.25,830.61,987.77]},{t:.45,f:[783.99,987.77,1046.5,1318.51]}].forEach(({t:n,f:i})=>{i.forEach(r=>{const a=t.createOscillator(),s=t.createGain();a.type="triangle",a.frequency.setValueAtTime(r,t.currentTime+n),s.gain.setValueAtTime(.12,t.currentTime+n),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+n+.5),a.connect(s),s.connect(t.destination),a.start(t.currentTime+n),a.stop(t.currentTime+n+.5)})})}catch{}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ug=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ty={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=we.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:a,iconNode:s,...o},l)=>we.createElement("svg",{ref:l,...ty,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Ug("lucide",r),...o},[...s.map(([u,h])=>we.createElement(u,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(t,e)=>{const n=we.forwardRef(({className:i,...r},a)=>we.createElement(ny,{ref:a,iconNode:e,className:Ug(`lucide-${ey(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$t=Je("ArrowRight",iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ir=Je("Award",ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],vh=Je("BookOpen",ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],oy=Je("Boxes",sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],cy=Je("Check",ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Mo=Je("ChevronLeft",uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gs=Je("ChevronRight",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xf=Je("CircleCheckBig",hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Er=Je("CircleCheck",fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ig=Je("CircleHelp",py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],_h=Je("CircleX",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fg=Je("Compass",gy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vy=Je("Eye",xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],yy=Je("FileText",_y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],by=Je("Gamepad2",Sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],Og=Je("HeartHandshake",My);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Kf=Je("Heart",wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ty=Je("Info",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]],Cy=Je("MessageSquareWarning",Ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Ry=Je("Pause",ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Py=Je("PhoneCall",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Dy=Je("Play",Ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Iy=Je("Printer",Uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ri=Je("RotateCcw",Fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],zy=Je("Save",Oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],jy=Je("School",By);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Gy=Je("ShieldAlert",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wy=Je("ShieldCheck",Vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],sl=Je("Shield",Xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],qy=Je("Smartphone",Ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],yh=Je("Sparkles",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Jy=Je("TrendingUp",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ol=Je("TriangleAlert",Zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],e1=Je("UserX",Qy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],n1=Je("Users",t1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zg=Je("X",i1);function r1({spreadIndex:t,totalSpreads:e,onSpreadChange:n,leftContent:i,rightContent:r,nextLeftContent:a,nextRightContent:s,prevLeftContent:o,prevRightContent:l}){const[u,h]=we.useState(!1),[p,f]=we.useState("next"),[m,y]=we.useState("left"),_=we.useRef(0),g=we.useRef(0),d=we.useRef(!1),x=we.useRef(0),v=()=>{t>=e-1||u||(Wf(),f("next"),h(!0),setTimeout(()=>{n(t+1),y("left"),h(!1)},680))},S=()=>{t<=0||u||(Wf(),f("prev"),h(!0),setTimeout(()=>{n(t-1),y("right"),h(!1)},680))},N=()=>{u||(m==="left"?(qe(),y("right")):t<e-1&&v())},k=()=>{u||(m==="right"?(qe(),y("left")):t>0&&S())};we.useEffect(()=>{const Q=P=>{["INPUT","TEXTAREA"].includes(P.target.tagName)||(P.key==="ArrowRight"||P.key==="PageDown"||P.key===" "?window.innerWidth<768?N():v():(P.key==="ArrowLeft"||P.key==="PageUp")&&(window.innerWidth<768?k():S()))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[t,u,e,m]);const R=Q=>{_.current=Q.touches[0].clientX,g.current=Q.touches[0].clientY},F=Q=>{if(u)return;const P=Q.changedTouches[0].clientX-_.current,V=Q.changedTouches[0].clientY-g.current;Math.abs(P)>Math.abs(V)&&Math.abs(P)>35&&(P<0?window.innerWidth<768?N():v():window.innerWidth<768?k():S())},w=Q=>{["BUTTON","INPUT","TEXTAREA","A"].includes(Q.target.tagName)||(d.current=!0,x.current=Q.clientX)},C=Q=>{if(!d.current||u)return;d.current=!1;const P=Q.clientX-x.current;Math.abs(P)>45&&(P<0?window.innerWidth<768?N():v():window.innerWidth<768?k():S())},W=t*2+(m==="left"?1:2),Y=e*2;return c.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-1 sm:p-3 md:p-6 select-none book-stage overflow-hidden",onTouchStart:R,onTouchEnd:F,onMouseDown:w,onMouseUp:C,children:[c.jsxs("div",{className:"md:hidden w-full max-w-md flex items-center justify-between px-3 py-1.5 mb-2 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl z-30",children:[c.jsx("button",{onClick:k,disabled:t===0&&m==="left",className:"p-1 rounded-lg bg-slate-800 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition","aria-label":"Halaman Sebelumnya",children:c.jsx(Mo,{size:18})}),c.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-black",children:[c.jsxs("button",{onClick:()=>{qe(),y("left")},className:`px-2.5 py-1 rounded-xl transition-all ${m==="left"?"bg-amber-400 text-slate-950 shadow font-black scale-105":"text-slate-400 hover:text-white"}`,children:["Hal ",t*2+1]}),c.jsx("span",{className:"text-slate-600 font-bold",children:"•"}),c.jsxs("button",{onClick:()=>{qe(),y("right")},className:`px-2.5 py-1 rounded-xl transition-all ${m==="right"?"bg-sky-400 text-slate-950 shadow font-black scale-105":"text-slate-400 hover:text-white"}`,children:["Hal ",t*2+2]}),c.jsxs("span",{className:"text-[10px] text-slate-500 font-bold ml-1",children:["(",W,"/",Y,")"]})]}),c.jsx("button",{onClick:N,disabled:t===e-1&&m==="right",className:"p-1 rounded-lg bg-slate-800 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition","aria-label":"Halaman Selanjutnya",children:c.jsx(gs,{size:18})})]}),c.jsxs("div",{className:"relative w-full max-w-6xl h-full max-h-[840px] book-3d flex items-stretch justify-center",children:[c.jsx("div",{className:"absolute -inset-2 sm:-inset-3.5 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] rounded-3xl md:rounded-[40px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] border-2 border-slate-700/50 -z-20 transform -translate-y-1"}),c.jsx("div",{className:"hidden md:flex absolute -top-3.5 left-1/2 -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-rose-600 via-rose-500 to-amber-400 z-30 drop-shadow-lg rounded-b-md items-end justify-center pb-1",children:c.jsx("div",{className:"w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-amber-400"})}),c.jsxs("div",{className:`relative flex-1 bg-[#FFFDF9] rounded-2xl sm:rounded-3xl md:rounded-none md:rounded-l-[32px] border-2 sm:border-[3px] md:border-y-[3px] md:border-l-[3px] md:border-r border-slate-800/80 cartoon-paper-smooth md:page-arch-left flex flex-col overflow-hidden z-10 transition-all ${m==="right"?"hidden md:flex":"flex"}`,children:[c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-amber-300/30 via-amber-200/20 to-transparent pointer-events-none z-20"}),c.jsx("div",{className:"hidden md:block absolute right-0 top-0 bottom-0 w-16 spine-crease-left pointer-events-none z-20"}),c.jsxs("div",{className:"px-4 sm:px-6 pt-2.5 sm:pt-3.5 pb-1 flex items-center justify-between text-xs font-black text-slate-400 border-b border-amber-200/50 shrink-0",children:[c.jsxs("span",{className:"flex items-center gap-1.5 text-blue-950 font-black text-[10px] sm:text-[11px] tracking-wide truncate max-w-[70%]",children:[c.jsx(vh,{size:14,className:"text-amber-500 shrink-0"}),c.jsx("span",{className:"truncate",children:"STOP BULLYING, START CARING"})]}),c.jsxs("span",{className:"bg-amber-100 text-amber-900 px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black border border-amber-300/80 shadow-xs shrink-0",children:["HALAMAN ",t*2+1]})]}),c.jsx("div",{className:"flex-1 p-3.5 sm:p-5 md:p-7 pb-16 md:pb-8 overflow-y-auto cartoon-scroll relative z-10",children:i}),c.jsxs("div",{className:"md:hidden absolute bottom-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between pointer-events-none",children:[t>0?c.jsxs("button",{onClick:k,disabled:u,className:"pointer-events-auto px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-[11px] shadow-lg border-2 border-slate-700 transition flex items-center gap-1 active:scale-95",children:[c.jsx(Mo,{size:14}),c.jsxs("span",{children:["Hal ",t*2]})]}):c.jsx("div",{}),c.jsxs("button",{onClick:N,disabled:u,className:"pointer-events-auto px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-[11px] shadow-lg border-2 border-slate-900 transition flex items-center gap-1 active:scale-95 ml-auto",children:[c.jsxs("span",{children:["Hal ",t*2+2]}),c.jsx(gs,{size:14})]})]}),t>0&&c.jsxs("button",{onClick:S,disabled:u,className:"hidden md:flex absolute bottom-3 left-3 z-30 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md border-2 border-slate-900 transition items-center gap-1 hover:scale-105 active:scale-95",title:"Balik Halaman Sebelumnya",children:[c.jsx(Mo,{size:16}),c.jsx("span",{children:"Sebelumnya"})]})]}),c.jsxs("div",{className:"hidden md:flex w-3.5 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 z-30 shadow-inner flex-col justify-around items-center py-6",children:[c.jsx("div",{className:"w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm"}),c.jsx("div",{className:"w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm"}),c.jsx("div",{className:"w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm"}),c.jsx("div",{className:"w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm"}),c.jsx("div",{className:"w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm"})]}),c.jsxs("div",{className:`relative flex-1 bg-[#FFFDF9] rounded-2xl sm:rounded-3xl md:rounded-none md:rounded-r-[32px] border-2 sm:border-[3px] md:border-y-[3px] md:border-r-[3px] md:border-l border-slate-800/80 cartoon-paper-smooth md:page-arch-right flex flex-col overflow-hidden z-10 transition-all ${m==="left"?"hidden md:flex":"flex"}`,children:[c.jsx("div",{className:"hidden md:block absolute left-0 top-0 bottom-0 w-16 spine-crease-right pointer-events-none z-20"}),c.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-amber-300/30 via-amber-200/20 to-transparent pointer-events-none z-20"}),c.jsxs("div",{className:"px-4 sm:px-6 pt-2.5 sm:pt-3.5 pb-1 flex items-center justify-between text-xs font-black text-slate-400 border-b border-amber-200/50 shrink-0",children:[c.jsxs("span",{className:"bg-sky-100 text-sky-900 px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black border border-sky-300/80 shadow-xs shrink-0",children:["HALAMAN ",t*2+2]}),c.jsx("span",{className:"text-[10px] sm:text-[11px] text-slate-600 font-extrabold truncate ml-2",children:"MTs SA Riyadul Bayan"})]}),c.jsx("div",{className:"flex-1 p-3.5 sm:p-5 md:p-7 pb-16 md:pb-8 overflow-y-auto cartoon-scroll relative z-10",children:r}),c.jsxs("div",{className:"md:hidden absolute bottom-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between pointer-events-none",children:[c.jsxs("button",{onClick:k,disabled:u,className:"pointer-events-auto px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-[11px] shadow-lg border-2 border-slate-700 transition flex items-center gap-1 active:scale-95",children:[c.jsx(Mo,{size:14}),c.jsxs("span",{children:["Hal ",t*2+1]})]}),t<e-1?c.jsxs("button",{onClick:N,disabled:u,className:"pointer-events-auto px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-[11px] shadow-lg border-2 border-slate-900 transition flex items-center gap-1 active:scale-95 ml-auto",children:[c.jsxs("span",{children:["Hal ",t*2+3]}),c.jsx(gs,{size:14})]}):c.jsx("div",{})]}),t<e-1&&c.jsxs("button",{onClick:v,disabled:u,className:"hidden md:flex absolute bottom-3 right-3 z-30 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs shadow-md border-2 border-slate-900 transition items-center gap-1 hover:scale-105 active:scale-95",title:"Buka Halaman Berikutnya",children:[c.jsx("span",{children:"Selanjutnya"}),c.jsx(gs,{size:16})]})]}),u&&c.jsxs("div",{className:`hidden md:block flipping-page-container ${p==="next"?"flip-next-smooth":"flip-prev-smooth"}`,children:[c.jsx("div",{className:"absolute inset-0 bg-[#FFFDF9] border-[3px] border-slate-800 rounded-r-[30px] cartoon-paper-smooth p-6 overflow-hidden flipping-face-front shadow-2xl",children:c.jsx("div",{className:"w-full h-full opacity-60 pointer-events-none",children:p==="next"?r:i})}),c.jsx("div",{className:"absolute inset-0 bg-[#FBF7EC] border-[3px] border-slate-800 rounded-l-[30px] cartoon-paper-smooth p-6 overflow-hidden flipping-face-back shadow-2xl",children:c.jsx("div",{className:"w-full h-full opacity-60 pointer-events-none",children:p==="next"?a:l})})]})]})]})}function qf({onStart:t}){return c.jsxs("div",{className:"flex flex-col h-full justify-between select-none space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsxs("span",{className:"px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] sm:text-xs border-2 border-slate-900 shadow-sm flex items-center gap-1.5",children:[c.jsx(yh,{size:12,className:"shrink-0"}),c.jsx("span",{children:"E-MODUL KARTUN 3D"})]}),c.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold text-slate-500 truncate",children:"MTs SA Riyadul Bayan"})]}),c.jsxs("div",{className:"my-auto py-2 sm:py-3 text-center space-y-2 sm:space-y-3",children:[c.jsxs("div",{className:"relative inline-block group",children:[c.jsx("div",{className:"w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-amber-300 via-yellow-200 to-sky-300 border-3 sm:border-4 border-slate-900 p-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] sm:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] animate-bounce duration-1000 flex items-center justify-center",children:c.jsx("span",{className:"text-4xl sm:text-6xl select-none",children:"🤝"})}),c.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-300 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black tracking-wider uppercase whitespace-nowrap border-2 border-amber-300",children:"PEDULI TEMAN"})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("h1",{className:"text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight",children:["STOP ",c.jsx("span",{className:"text-rose-600 underline decoration-wavy decoration-amber-400",children:"BULLYING"}),",",c.jsx("br",{}),"START ",c.jsx("span",{className:"text-blue-600",children:"CARING!"})]}),c.jsx("div",{className:"inline-block bg-sky-100 border-2 border-sky-400 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl text-sky-950 font-black text-[10px] sm:text-xs tracking-wider uppercase mt-1",children:"Kenali • Cegah • Peduli"})]}),c.jsx("p",{className:"text-[11px] sm:text-xs text-slate-600 font-bold max-w-xs mx-auto leading-relaxed",children:'"Kenali Perilakunya, Cegah Perundungannya, Mulai dari Kepedulian Kita di Madrasah."'})]}),c.jsx("div",{className:"pt-1 sm:pt-2",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full py-2.5 sm:py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl sm:rounded-2xl border-3 sm:border-4 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] sm:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-0.5 transition flex items-center justify-center gap-2 active:scale-98",children:[c.jsx(vh,{size:16,className:"shrink-0"}),c.jsx("span",{children:"MULAI BACA BUKU"})]})})]})}function Yf({onSelectSpread:t}){const e=[{spread:1,title:"Pendahuluan & Pretest (Uji Awal)",subtitle:"10 Pertanyaan Ya/Tidak pemahaman dasar",icon:c.jsx(Ig,{size:16,className:"text-blue-600"}),color:"bg-blue-100 border-blue-400",tag:"Uji Awal"},{spread:2,title:"Bab 1 & 2: Mengenal & Bentuk Bullying",subtitle:"Fisik, Verbal, Sosial, dan Cyberbullying",icon:c.jsx(yy,{size:16,className:"text-amber-600"}),color:"bg-amber-100 border-amber-400",tag:"Materi Inti"},{spread:3,title:"🎭 Simulasi 3D Karakter & Mini Game 1",subtitle:"Karakter 3D bergerak bullying + Detektif Kasus",icon:c.jsx(oy,{size:16,className:"text-rose-600"}),color:"bg-rose-100 border-rose-400",tag:"3D & Game",highlight:!0},{spread:4,title:"Faktor Penyebab & Mini Game 2",subtitle:"Cyber Shield Defender (Tangkis Pesan Jahat)",icon:c.jsx(by,{size:16,className:"text-cyan-600"}),color:"bg-cyan-100 border-cyan-400",tag:"Action Game"},{spread:5,title:"Bab 4 & 5: Dampak & Siapa yang Terlibat?",subtitle:"Pelaku, Korban, dan Upstander Pembela",icon:c.jsx(Og,{size:16,className:"text-purple-600"}),color:"bg-purple-100 border-purple-400",tag:"Materi"},{spread:6,title:"Mini Game 3 & 4: Upstander & Mitos",subtitle:"Simulasi Cerita Pilihan Aksi + Mitos vs Fakta",icon:c.jsx(Fg,{size:16,className:"text-emerald-600"}),color:"bg-emerald-100 border-emerald-400",tag:"2 Mini Games",highlight:!0},{spread:7,title:"Bab 6 & 7: Cara Cegah & Alur Penanganan",subtitle:"Budaya 5S dan Alur Pengaduan Resmi Guru BK",icon:c.jsx(Gy,{size:16,className:"text-teal-600"}),color:"bg-teal-100 border-teal-400",tag:"Solusi"},{spread:8,title:"Refleksi Diri & Posttest Akhir",subtitle:"Ikrar Komitmen Siswa + 10 Soal Evaluasi",icon:c.jsx(ir,{size:16,className:"text-yellow-600"}),color:"bg-yellow-100 border-yellow-400",tag:"Evaluasi"}];return c.jsxs("div",{className:"flex flex-col h-full justify-between select-none",children:[c.jsxs("div",{className:"pb-2 border-b-2 border-slate-800 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300",children:"Daftar Materi"}),c.jsx("h2",{className:"text-base sm:text-xl font-black text-slate-900 mt-0.5",children:"📑 Peta Menu E-Modul"})]}),c.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold text-slate-500",children:"Pilih Bab"})]}),c.jsx("div",{className:"grid grid-cols-1 gap-1.5 sm:gap-2 my-2 overflow-y-auto cartoon-scroll flex-1 pr-1",children:e.map(n=>c.jsxs("button",{onClick:()=>{qe(),t(n.spread)},className:`w-full text-left p-2 sm:p-2.5 rounded-xl border-2 border-slate-800 transition flex items-center justify-between gap-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 active:translate-y-0.5 ${n.highlight?"bg-amber-100 hover:bg-amber-200":"bg-white hover:bg-slate-50"}`,children:[c.jsxs("div",{className:"flex items-center gap-2 sm:gap-2.5 overflow-hidden",children:[c.jsx("div",{className:`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-slate-800 flex items-center justify-center shrink-0 ${n.color}`,children:n.icon}),c.jsxs("div",{className:"truncate",children:[c.jsx("span",{className:"text-[11px] sm:text-xs font-black text-slate-900 block truncate",children:n.title}),c.jsx("span",{className:"text-[9px] sm:text-[10px] font-bold text-slate-500 block truncate",children:n.subtitle})]})]}),c.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[c.jsx("span",{className:"text-[9px] sm:text-[10px] font-black bg-slate-900 text-white px-1.5 sm:px-2 py-0.5 rounded-md",children:"Buka"}),c.jsx(gs,{size:14,className:"text-slate-900 shrink-0"})]})]},n.spread))}),c.jsx("div",{className:"text-[10px] sm:text-[11px] text-center font-extrabold text-slate-600 bg-amber-200/50 p-1.5 sm:p-2 rounded-xl border-2 border-amber-300",children:"💡 Sentuh menu untuk lompat, atau usap (swipe) halaman!"})]})}function a1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full",children:"Pendahuluan"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"Mengapa Kita Harus Peduli Pencegahan Bullying?"})]}),c.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1",children:[c.jsxs("p",{className:"text-[11px] sm:text-xs",children:["Sekolah adalah rumah kedua bagi setiap siswa untuk menimba ilmu, mengembangkan potensi, dan menjalin persahabatan yang bermakna. Namun, fenomena perundungan atau ",c.jsx("i",{children:"bullying"})," kerap membayangi lingkungan sekolah."]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1",children:[c.jsxs("span",{className:"font-black text-blue-900 text-xs flex items-center gap-1.5",children:[c.jsx(jy,{size:15})," Visi Madrasah Ramah Anak"]}),c.jsx("p",{className:"text-[11px] text-blue-950",children:"Mewujudkan lingkungan belajar MTs SA Riyadul Bayan yang aman, inklusif, dan bebas kekerasan."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1",children:[c.jsxs("span",{className:"font-black text-amber-900 text-xs flex items-center gap-1.5",children:[c.jsx(Og,{size:15})," Kekuatan Solidaritas"]}),c.jsx("p",{className:"text-[11px] text-amber-950",children:"Satu suara pembelaan dari teman sebaya dapat mengubah hidup seorang korban perundungan."})]})]}),c.jsx("h3",{className:"font-black text-xs sm:text-sm text-slate-900 pt-1",children:"Tujuan Pembelajaran Modul Ini:"}),c.jsxs("ul",{className:"space-y-1.5 text-[11px] sm:text-xs",children:[c.jsxs("li",{className:"flex items-start gap-1.5",children:[c.jsx(Er,{size:15,className:"text-emerald-600 shrink-0 mt-0.5"}),c.jsx("span",{children:"Mengenali definisi dan 3 karakteristik khas perilaku perundungan."})]}),c.jsxs("li",{className:"flex items-start gap-1.5",children:[c.jsx(Er,{size:15,className:"text-emerald-600 shrink-0 mt-0.5"}),c.jsx("span",{children:"Mengidentifikasi empat bentuk bullying lewat visualisasi karakter 3D."})]}),c.jsxs("li",{className:"flex items-start gap-1.5",children:[c.jsx(Er,{size:15,className:"text-emerald-600 shrink-0 mt-0.5"}),c.jsx("span",{children:"Memahami faktor pemicu dan dampak psikologis jangka panjang."})]}),c.jsxs("li",{className:"flex items-start gap-1.5",children:[c.jsx(Er,{size:15,className:"text-emerald-600 shrink-0 mt-0.5"}),c.jsxs("span",{children:["Mentransformasikan peran menjadi ",c.jsx("b",{children:"Upstander (Saksi Pembela)"}),"."]})]})]})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Lanjut ke Pretest"}),c.jsx($t,{size:14})]})})]})}function s1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full",children:"Bab 1 • Konsep Dasar"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"Mengenal Apa Itu Bullying"})]}),c.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1",children:[c.jsx("div",{className:"p-3 sm:p-4 rounded-xl bg-blue-900 text-white shadow-md",children:c.jsxs("p",{className:"text-[11px] sm:text-xs font-medium leading-relaxed",children:[c.jsx("b",{children:"Bullying (Perundungan)"})," adalah tindakan agresif yang disengaja oleh seseorang atau kelompok terhadap orang lain yang lebih lemah, dilakukan secara berulang-ulang, dan menimbulkan rasa sakit fisik, emosional, atau psikologis."]})}),c.jsx("h3",{className:"font-black text-xs sm:text-sm text-slate-900 pt-1",children:"3 Elemen Kunci yang Membedakan Bullying dari Candaan:"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1",children:[c.jsx("span",{className:"w-5 h-5 rounded-full bg-rose-100 text-rose-700 font-black text-[11px] flex items-center justify-center",children:"1"}),c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"Niat Sengaja (Intentional)"}),c.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-600",children:"Pelaku secara sadar bermaksud menyakiti atau mempermalukan korban."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1",children:[c.jsx("span",{className:"w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-black text-[11px] flex items-center justify-center",children:"2"}),c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"Berulang Kali (Repetitive)"}),c.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-600",children:"Tindakan tidak terjadi sekali kebetulan, melainkan terus berulang."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1",children:[c.jsx("span",{className:"w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-black text-[11px] flex items-center justify-center",children:"3"}),c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"Ketimpangan Kuasa"}),c.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-600",children:"Ada perbedaan kekuatan fisik, status sosial, jumlah anggota, atau popularitas."})]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-[11px] sm:text-xs text-amber-900",children:[c.jsx("b",{children:"Ingat Rumus:"})," Jika hanya satu pihak yang tertawa sedangkan pihak lain tersiksa, itu ",c.jsx("b",{children:"BUKAN"})," bercanda, melainkan ",c.jsx("b",{children:"PERUNDUNGAN"}),"."]})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Lanjut ke Bentuk Bullying"}),c.jsx($t,{size:14})]})})]})}function o1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full",children:"Bab 2 • Klasifikasi Kasus"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"4 Bentuk Utama Perundungan di Sekolah"})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-rose-200 shadow-sm space-y-1.5",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0",children:c.jsx(e1,{size:16})}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"1. Bullying Fisik"}),c.jsx("span",{className:"text-[9px] text-rose-600 font-semibold",children:"Tampak kasat mata"})]})]}),c.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Kontak fisik kekerasan: memukul, menendang, mendorong, merusak atau merampas barang milik teman."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-amber-200 shadow-sm space-y-1.5",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0",children:c.jsx(Cy,{size:16})}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"2. Bullying Verbal"}),c.jsx("span",{className:"text-[9px] text-amber-600 font-semibold",children:"Paling sering terjadi"})]})]}),c.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Menghina fisik (body shaming), memberi julukan buruk, mencemooh nama orang tua, dan memaki kasar."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-purple-200 shadow-sm space-y-1.5",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0",children:c.jsx(n1,{size:16})}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"3. Bullying Sosial"}),c.jsx("span",{className:"text-[9px] text-purple-600 font-semibold",children:"Merusak pergaulan"})]})]}),c.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Mengucilkan dari kelompok belajar, menyebarkan gosip palsu, dan mempermalukan di depan umum."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-cyan-200 shadow-sm space-y-1.5",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0",children:c.jsx(qy,{size:16})}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"4. Cyberbullying"}),c.jsx("span",{className:"text-[9px] text-cyan-700 font-semibold",children:"Dunia maya & medsos"})]})]}),c.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Meneror via WhatsApp/medsos, mengunggah aib teman tanpa izin, dan membuat akun palsu penghina."})]})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Simulasi Karakter 3D"}),c.jsx($t,{size:14})]})})]})}function l1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full",children:"Bab 3 • Akar Permasalahan"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"Mengapa Seseorang Menjadi Pelaku Bullying?"})]}),c.jsxs("div",{className:"space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1",children:[c.jsx("p",{className:"text-[11px] sm:text-xs",children:"Bullying dipicu oleh kombinasi faktor psikologis individu dan lingkungan pergaulan:"}),c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5",children:[c.jsx("span",{className:"text-lg",children:"👤"}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"Faktor Individu"}),c.jsx("p",{className:"text-[11px] text-slate-600 mt-0.5",children:"Rasa rendah diri yang ditutupi dominasi, amarah tak terkontrol, minim empati."})]})]}),c.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5",children:[c.jsx("span",{className:"text-lg",children:"🏡"}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"Faktor Keluarga"}),c.jsx("p",{className:"text-[11px] text-slate-600 mt-0.5",children:"Kurang perhatian orang tua, pola asuh keras, atau menyaksikan pertengkaran rumah."})]})]}),c.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5",children:[c.jsx("span",{className:"text-lg",children:"👥"}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"Faktor Teman Sebaya"}),c.jsx("p",{className:"text-[11px] text-slate-600 mt-0.5",children:"Ingin diakui dalam geng dan takut dikucilkan jika tidak ikut menindas."})]})]}),c.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5",children:[c.jsx("span",{className:"text-lg",children:"📱"}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"Faktor Media & Konten"}),c.jsx("p",{className:"text-[11px] text-slate-600 mt-0.5",children:'Paparan konten kekerasan, bahasa kasar medsos, dan tren "prank" yang merendahkan.'})]})]})]})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Lanjut ke Dampak Bullying"}),c.jsx($t,{size:14})]})})]})}function c1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-rose-800 uppercase bg-rose-100 px-2.5 py-0.5 rounded-full",children:"Bab 4 • Konsekuensi"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"Dampak Nyata Bullying Bagi Semua Pihak"})]}),c.jsxs("div",{className:"space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1",children:[c.jsxs("h4",{className:"font-bold text-xs text-rose-900 flex items-center gap-1.5",children:[c.jsx(ol,{size:15})," Bagi Korban (Victim)"]}),c.jsx("p",{className:"text-[11px] text-rose-950",children:"Trauma psikologis, cemas berlebih, penurunan nilai pelajaran, takut ke sekolah, hingga depresi."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1",children:[c.jsxs("h4",{className:"font-bold text-xs text-amber-900 flex items-center gap-1.5",children:[c.jsx(ol,{size:15})," Bagi Pelaku (Bully)"]}),c.jsx("p",{className:"text-[11px] text-amber-950",children:"Menjadi kebiasaan agresif, rentan masalah hukum di masa depan, dan dijauhi teman tulus."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-purple-50 border border-purple-200 space-y-1",children:[c.jsxs("h4",{className:"font-bold text-xs text-purple-900 flex items-center gap-1.5",children:[c.jsx(ol,{size:15})," Bagi Saksi (Bystander)"]}),c.jsx("p",{className:"text-[11px] text-purple-950",children:"Mengalami rasa bersalah karena tidak membela, merasa lingkungan sekolah tidak aman."})]})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Lanjut ke Peran Siswa"}),c.jsx($t,{size:14})]})})]})}function u1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full",children:"Bab 5 • Peran Sosial"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"Siapa Saja yang Terlibat dalam Bullying?"})]}),c.jsxs("div",{className:"space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5",children:[c.jsx("span",{className:"text-xs font-black text-rose-700",children:"1. Pelaku (The Bully)"}),c.jsx("p",{className:"text-[11px] text-slate-600",children:"Pihak yang menginisiasi agresi untuk memperlihatkan dominasi kekuatan."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5",children:[c.jsx("span",{className:"text-xs font-black text-blue-700",children:"2. Korban (The Victim)"}),c.jsx("p",{className:"text-[11px] text-slate-600",children:"Pihak sasaran yang berada dalam posisi rentan atau tidak berdaya melawan."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-slate-100 border border-slate-300 space-y-0.5",children:[c.jsx("span",{className:"text-xs font-black text-slate-700",children:"3. Saksi Pasif (Bystander)"}),c.jsx("p",{className:"text-[11px] text-slate-600",children:"Hanya menonton atau tertawa. Diamnya saksi memperkuat keberanian pelaku!"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-emerald-50 border-2 border-emerald-400 space-y-0.5 shadow-sm",children:[c.jsxs("span",{className:"text-xs font-black text-emerald-800 flex items-center gap-1",children:[c.jsx(sl,{size:13})," 4. Upstander (Saksi Pembela)"]}),c.jsx("p",{className:"text-[11px] text-emerald-950 font-medium",children:"Pahlawan sekolah! Berani menegur cerdas, merangkul korban, dan melapor guru."})]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white shadow-md space-y-0.5",children:[c.jsx("h4",{className:"font-black text-xs text-amber-300",children:"Jadilah UPSTANDER:"}),c.jsxs("p",{className:"text-[11px] text-emerald-100 leading-relaxed",children:["Data membuktikan ",c.jsx("b",{children:"57% perundungan berhenti dalam kurang dari 10 detik"})," ketika seorang saksi sebaya berani bersuara membelanya!"]})]})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Mini Game 3: Pilih Aksi"}),c.jsx($t,{size:14})]})})]})}function d1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-emerald-800 uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full",children:"Bab 6 • Aksi Preventif"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"Cara Efektif Mencegah Bullying di Sekolah"})]}),c.jsxs("div",{className:"space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5",children:[c.jsx("span",{className:"text-xs font-black text-emerald-700",children:"🌟 Budaya 5S"}),c.jsx("p",{className:"text-[11px] text-slate-600",children:"Senyum, Sapa, Salam, Sopan, dan Santun kepada seluruh warga madrasah."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5",children:[c.jsx("span",{className:"text-xs font-black text-emerald-700",children:"🤝 Tolak Geng Eksklusif"}),c.jsx("p",{className:"text-[11px] text-slate-600",children:"Pertemanan terbuka dan merangkul teman yang pemalu atau pendiam."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5",children:[c.jsx("span",{className:"text-xs font-black text-emerald-700",children:"📜 Kesepakatan Kelas"}),c.jsx("p",{className:"text-[11px] text-slate-600",children:"Menyepakati bersama aturan anti-ejekan dan anti-kekerasan bersama guru."})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5",children:[c.jsx("span",{className:"text-xs font-black text-emerald-700",children:"📱 Etika Berdigital"}),c.jsx("p",{className:"text-[11px] text-slate-600",children:"Saring sebelum sharing, jangan berkomentar jahat, dan hormati privasi teman."})]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px] sm:text-xs text-emerald-950 font-medium",children:["💡 ",c.jsx("b",{children:"Kebaikan Menular:"})," Menyapa teman di koridor atau mengajak makan bersama dapat memulihkan semangat teman yang sedih."]})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Lanjut ke Alur Penanganan"}),c.jsx($t,{size:14})]})})]})}function h1({onNext:t}){return c.jsxs("div",{className:"flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none",children:[c.jsxs("div",{className:"pb-2.5 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full",children:"Bab 7 • Alur Lapor"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug",children:"Ayo Bertindak: Alur Penanganan & Pengaduan"})]}),c.jsxs("div",{className:"space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1",children:[c.jsxs("div",{className:"bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-1.5",children:[c.jsxs("h4",{className:"font-bold text-xs text-blue-900 flex items-center gap-1.5",children:[c.jsx(Py,{size:15})," Saluran Pengaduan Resmi MTs SA Riyadul Bayan:"]}),c.jsxs("ul",{className:"space-y-1 text-[11px] text-slate-700",children:[c.jsxs("li",{children:[c.jsx("b",{children:"1. Guru BK:"})," Ruang Konseling Ramah Siswa."]}),c.jsxs("li",{children:[c.jsx("b",{children:"2. Wali Kelas & Guru Piket:"})," Melapor langsung saat jam istirahat."]}),c.jsxs("li",{children:[c.jsx("b",{children:"3. Kotak Aspirasi & Curhat:"})," Tersedia di depan ruang perpustakaan."]}),c.jsxs("li",{children:[c.jsx("b",{children:"4. Orang Tua:"})," Bercerita secara terbuka kepada keluarga di rumah."]})]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1",children:[c.jsx("h4",{className:"font-bold text-xs text-blue-950",children:"Langkah Tanggap Jika Kamu Sasaran:"}),c.jsxs("ol",{className:"list-decimal list-inside space-y-0.5 text-[11px] text-blue-900 font-medium",children:[c.jsxs("li",{children:["Tetap tenang, tatap mata pelaku: katakan ",c.jsx("b",{children:'"Hentikan!"'}),"."]}),c.jsx("li",{children:"Segera mendekat ke keramaian atau datangi guru terdekat."}),c.jsx("li",{children:"Simpan bukti tangkapan layar jika terjadi di internet."}),c.jsx("li",{children:"Ceritakan kepada guru atau orang tua yang dipercaya."})]})]}),c.jsx("div",{className:"p-2.5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-[11px] text-amber-950 font-bold",children:"Ingat: Kamu tidak sendirian, dan kamu berhak aman di madrasah!"})]}),c.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:c.jsxs("button",{onClick:()=>{qe(),t()},className:"w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2",children:[c.jsx("span",{children:"Masuk ke Refleksi Diri"}),c.jsx($t,{size:14})]})})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="160",f1=0,$f=1,p1=2,Bg=1,jg=2,pi=3,rr=0,hn=1,xi=2,Zi=0,Na=1,Jf=2,Zf=3,Qf=4,m1=5,_r=100,g1=101,x1=102,ep=103,tp=104,v1=200,_1=201,y1=202,S1=203,pd=204,md=205,b1=206,M1=207,w1=208,E1=209,T1=210,A1=211,C1=212,k1=213,R1=214,N1=0,P1=1,L1=2,Ll=3,D1=4,U1=5,I1=6,F1=7,Hg=0,O1=1,z1=2,Qi=0,B1=1,j1=2,H1=3,Gg=4,G1=5,V1=6,Vg=300,Ba=301,ja=302,gd=303,xd=304,rc=306,vd=1e3,Wn=1001,_d=1002,tn=1003,np=1004,Oc=1005,Cn=1006,W1=1007,Xs=1008,er=1009,X1=1010,K1=1011,bh=1012,Wg=1013,Hi=1014,Gi=1015,Ks=1016,Xg=1017,Kg=1018,Cr=1020,q1=1021,Xn=1023,Y1=1024,$1=1025,kr=1026,Ha=1027,J1=1028,qg=1029,Z1=1030,Yg=1031,$g=1033,zc=33776,Bc=33777,jc=33778,Hc=33779,ip=35840,rp=35841,ap=35842,sp=35843,Jg=36196,op=37492,lp=37496,cp=37808,up=37809,dp=37810,hp=37811,fp=37812,pp=37813,mp=37814,gp=37815,xp=37816,vp=37817,_p=37818,yp=37819,Sp=37820,bp=37821,Gc=36492,Mp=36494,wp=36495,Q1=36283,Ep=36284,Tp=36285,Ap=36286,Zg=3e3,Rr=3001,eS=3200,tS=3201,Qg=0,nS=1,Rn="",Ot="srgb",Ti="srgb-linear",Mh="display-p3",ac="display-p3-linear",Dl="linear",ct="srgb",Ul="rec709",Il="p3",Kr=7680,Cp=519,iS=512,rS=513,aS=514,ex=515,sS=516,oS=517,lS=518,cS=519,kp=35044,Rp="300 es",yd=1035,yi=2e3,Fl=2001;class qa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,Sd=180/Math.PI;function to(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function uS(t,e){return(t%e+e)%e}function Wc(t,e,n){return(1-n)*t+n*e}function Np(t){return(t&t-1)===0&&t!==0}function bd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,n=0){Ee.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,a,s,o,l,u){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,u)}set(e,n,i,r,a,s,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],y=i[8],_=r[0],g=r[3],d=r[6],x=r[1],v=r[4],S=r[7],N=r[2],k=r[5],R=r[8];return a[0]=s*_+o*x+l*N,a[3]=s*g+o*v+l*k,a[6]=s*d+o*S+l*R,a[1]=u*_+h*x+p*N,a[4]=u*g+h*v+p*k,a[7]=u*d+h*S+p*R,a[2]=f*_+m*x+y*N,a[5]=f*g+m*v+y*k,a[8]=f*d+m*S+y*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*s*h-n*o*u-i*a*h+i*o*l+r*a*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*s-o*u,f=o*l-h*a,m=u*a-s*l,y=n*p+i*f+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=p*_,e[1]=(r*u-h*i)*_,e[2]=(o*i-r*s)*_,e[3]=f*_,e[4]=(h*n-r*l)*_,e[5]=(r*a-o*n)*_,e[6]=m*_,e[7]=(i*l-u*n)*_,e[8]=(s*n-i*a)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-r*u,r*l,-r*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Ke;function tx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ol(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dS(){const t=Ol("canvas");return t.style.display="block",t}const Pp={};function Ts(t){t in Pp||(Pp[t]=!0,console.warn(t))}const Lp=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[Ti]:{transfer:Dl,primaries:Ul,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:ct,primaries:Ul,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:Dl,primaries:Il,toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp)},[Mh]:{transfer:ct,primaries:Il,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp).convertLinearToSRGB()}},hS=new Set([Ti,ac]),at={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===Rn?Dl:wo[t].transfer}};function Pa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=Ol("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Pa(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pa(n[i]/255)*255):n[i]=Pa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class ix{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=to(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(qc(r[s].image)):a.push(qc(r[s]))}else a=qc(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pS=0;class _n extends qa{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Wn,r=Wn,a=Cn,s=Xs,o=Xn,l=er,u=_n.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=to(),this.name="",this.source=new ix(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Rr?Ot:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Rr:Zg}set encoding(e){Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rr?Ot:Rn}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Vg;_n.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,u=l[0],h=l[4],p=l[8],f=l[1],m=l[5],y=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-_)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+_)<.1&&Math.abs(y+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(m+1)/2,N=(d+1)/2,k=(h+f)/4,R=(p+_)/4,F=(y+g)/4;return v>S&&v>N?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=k/i,a=R/i):S>N?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=k/r,a=F/r):N<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(N),i=R/a,r=F/a),this.set(i,r,a,n),this}let x=Math.sqrt((g-y)*(g-y)+(p-_)*(p-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-y)/x,this.y=(p-_)/x,this.z=(f-h)/x,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mS extends qa{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rr?Ot:Rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ix(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends mS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rx extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gS extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const f=a[s+0],m=a[s+1],y=a[s+2],_=a[s+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=y,e[n+3]=_;return}if(p!==_||l!==f||u!==m||h!==y){let g=1-o;const d=l*f+u*m+h*y+p*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const N=Math.sqrt(v),k=Math.atan2(N,d*x);g=Math.sin(g*k)/N,o=Math.sin(o*k)/N}const S=o*x;if(l=l*g+f*S,u=u*g+m*S,h=h*g+y*S,p=p*g+_*S,g===1-o){const N=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=N,u*=N,h*=N,p*=N}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=a[s],f=a[s+1],m=a[s+2],y=a[s+3];return e[n]=o*y+h*p+l*m-u*f,e[n+1]=l*y+h*f+u*p-o*m,e[n+2]=u*y+h*m+o*f-l*p,e[n+3]=h*y-o*p-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),p=o(a/2),f=l(i/2),m=l(r/2),y=l(a/2);switch(s){case"XYZ":this._x=f*h*p+u*m*y,this._y=u*m*p-f*h*y,this._z=u*h*y+f*m*p,this._w=u*h*p-f*m*y;break;case"YXZ":this._x=f*h*p+u*m*y,this._y=u*m*p-f*h*y,this._z=u*h*y-f*m*p,this._w=u*h*p+f*m*y;break;case"ZXY":this._x=f*h*p-u*m*y,this._y=u*m*p+f*h*y,this._z=u*h*y+f*m*p,this._w=u*h*p-f*m*y;break;case"ZYX":this._x=f*h*p-u*m*y,this._y=u*m*p+f*h*y,this._z=u*h*y-f*m*p,this._w=u*h*p+f*m*y;break;case"YZX":this._x=f*h*p+u*m*y,this._y=u*m*p+f*h*y,this._z=u*h*y-f*m*p,this._w=u*h*p-f*m*y;break;case"XZY":this._x=f*h*p-u*m*y,this._y=u*m*p-f*h*y,this._z=u*h*y+f*m*p,this._w=u*h*p+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-u)*m,this._z=(s-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(a-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(s-r)/m,this._x=(a+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+s*o+r*u-a*l,this._y=r*h+s*l+a*o-i*u,this._z=a*h+s*u+i*l-r*o,this._w=s*h-i*o-r*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*a+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),p=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=s*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*r-o*i),h=2*(o*n-a*r),p=2*(a*i-s*n);return this.x=n+l*u+s*p-o*h,this.y=i+l*h+o*u-a*p,this.z=r+l*p+a*h-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new O,Up=new no;class io{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,In):In.fromBufferAttribute(a,s),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),To.subVectors(this.max,os),Yr.subVectors(e.a,os),$r.subVectors(e.b,os),Jr.subVectors(e.c,os),Ni.subVectors($r,Yr),Pi.subVectors(Jr,$r),dr.subVectors(Yr,Jr);let n=[0,-Ni.z,Ni.y,0,-Pi.z,Pi.y,0,-dr.z,dr.y,Ni.z,0,-Ni.x,Pi.z,0,-Pi.x,dr.z,0,-dr.x,-Ni.y,Ni.x,0,-Pi.y,Pi.x,0,-dr.y,dr.x,0];return!$c(n,Yr,$r,Jr,To)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,Yr,$r,Jr,To))?!1:(Ao.crossVectors(Ni,Pi),n=[Ao.x,Ao.y,Ao.z],$c(n,Yr,$r,Jr,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new O,new O,new O,new O,new O,new O,new O,new O],In=new O,Eo=new io,Yr=new O,$r=new O,Jr=new O,Ni=new O,Pi=new O,dr=new O,os=new O,To=new O,Ao=new O,hr=new O;function $c(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){hr.fromArray(t,a);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),u=n.dot(hr),h=i.dot(hr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const xS=new io,ls=new O,Jc=new O;class wh{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xS.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const n=ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Jc)),this.expandByPoint(ls.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new O,Zc=new O,Co=new O,Li=new O,Qc=new O,ko=new O,eu=new O;class vS{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zc.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(Zc);const a=e.distanceTo(n)*.5,s=-this.direction.dot(Co),o=Li.dot(this.direction),l=-Li.dot(Co),u=Li.lengthSq(),h=Math.abs(1-s*s);let p,f,m,y;if(h>0)if(p=s*l-o,f=s*o-l,y=a*h,p>=0)if(f>=-y)if(f<=y){const _=1/h;p*=_,f*=_,m=p*(p+s*f+2*o)+f*(s*p+f+2*l)+u}else f=a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+u;else f=-a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+u;else f<=-y?(p=Math.max(0,-(-s*a+o)),f=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+u):f<=y?(p=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+u):(p=Math.max(0,-(s*a+o)),f=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+u);else f=s>0?-a:a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Zc).addScaledVector(Co,f),m}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,a){Qc.subVectors(n,e),ko.subVectors(i,e),eu.crossVectors(Qc,ko);let s=this.direction.dot(eu),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(ko.crossVectors(Li,ko));if(l<0)return null;const u=o*this.direction.dot(Qc.cross(Li));if(u<0||l+u>s)return null;const h=-o*Li.dot(eu);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,a,s,o,l,u,h,p,f,m,y,_,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,u,h,p,f,m,y,_,g)}set(e,n,i,r,a,s,o,l,u,h,p,f,m,y,_,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=y,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),a=1/Zr.setFromMatrixColumn(e,1).length(),s=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const f=s*h,m=s*p,y=o*h,_=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+y*u,n[5]=f-_*u,n[9]=-o*l,n[2]=_-f*u,n[6]=y+m*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,y=u*h,_=u*p;n[0]=f+_*o,n[4]=y*o-m,n[8]=s*u,n[1]=s*p,n[5]=s*h,n[9]=-o,n[2]=m*o-y,n[6]=_+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,y=u*h,_=u*p;n[0]=f-_*o,n[4]=-s*p,n[8]=y+m*o,n[1]=m+y*o,n[5]=s*h,n[9]=_-f*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*h,m=s*p,y=o*h,_=o*p;n[0]=l*h,n[4]=y*u-m,n[8]=f*u+_,n[1]=l*p,n[5]=_*u+f,n[9]=m*u-y,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*u,y=o*l,_=o*u;n[0]=l*h,n[4]=_-f*p,n[8]=y*p+m,n[1]=p,n[5]=s*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+y,n[10]=f-_*p}else if(e.order==="XZY"){const f=s*l,m=s*u,y=o*l,_=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=f*p+_,n[5]=s*h,n[9]=m*p-y,n[2]=y*p-m,n[6]=o*h,n[10]=_*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,yS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Di.crossVectors(i,pn),Di.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Di.crossVectors(i,pn)),Di.normalize(),Ro.crossVectors(pn,Di),r[0]=Di.x,r[4]=Ro.x,r[8]=pn.x,r[1]=Di.y,r[5]=Ro.y,r[9]=pn.y,r[2]=Di.z,r[6]=Ro.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],y=i[2],_=i[6],g=i[10],d=i[14],x=i[3],v=i[7],S=i[11],N=i[15],k=r[0],R=r[4],F=r[8],w=r[12],C=r[1],W=r[5],Y=r[9],Q=r[13],P=r[2],V=r[6],$=r[10],ee=r[14],U=r[3],D=r[7],M=r[11],E=r[15];return a[0]=s*k+o*C+l*P+u*U,a[4]=s*R+o*W+l*V+u*D,a[8]=s*F+o*Y+l*$+u*M,a[12]=s*w+o*Q+l*ee+u*E,a[1]=h*k+p*C+f*P+m*U,a[5]=h*R+p*W+f*V+m*D,a[9]=h*F+p*Y+f*$+m*M,a[13]=h*w+p*Q+f*ee+m*E,a[2]=y*k+_*C+g*P+d*U,a[6]=y*R+_*W+g*V+d*D,a[10]=y*F+_*Y+g*$+d*M,a[14]=y*w+_*Q+g*ee+d*E,a[3]=x*k+v*C+S*P+N*U,a[7]=x*R+v*W+S*V+N*D,a[11]=x*F+v*Y+S*$+N*M,a[15]=x*w+v*Q+S*ee+N*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],y=e[3],_=e[7],g=e[11],d=e[15];return y*(+a*l*p-r*u*p-a*o*f+i*u*f+r*o*m-i*l*m)+_*(+n*l*m-n*u*f+a*s*f-r*s*m+r*u*h-a*l*h)+g*(+n*u*p-n*o*m-a*s*p+i*s*m+a*o*h-i*u*h)+d*(-r*o*h-n*l*p+n*o*f+r*s*p-i*s*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],y=e[12],_=e[13],g=e[14],d=e[15],x=p*g*u-_*f*u+_*l*m-o*g*m-p*l*d+o*f*d,v=y*f*u-h*g*u-y*l*m+s*g*m+h*l*d-s*f*d,S=h*_*u-y*p*u+y*o*m-s*_*m-h*o*d+s*p*d,N=y*p*l-h*_*l-y*o*f+s*_*f+h*o*g-s*p*g,k=n*x+i*v+r*S+a*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/k;return e[0]=x*R,e[1]=(_*f*a-p*g*a-_*r*m+i*g*m+p*r*d-i*f*d)*R,e[2]=(o*g*a-_*l*a+_*r*u-i*g*u-o*r*d+i*l*d)*R,e[3]=(p*l*a-o*f*a-p*r*u+i*f*u+o*r*m-i*l*m)*R,e[4]=v*R,e[5]=(h*g*a-y*f*a+y*r*m-n*g*m-h*r*d+n*f*d)*R,e[6]=(y*l*a-s*g*a-y*r*u+n*g*u+s*r*d-n*l*d)*R,e[7]=(s*f*a-h*l*a+h*r*u-n*f*u-s*r*m+n*l*m)*R,e[8]=S*R,e[9]=(y*p*a-h*_*a-y*i*m+n*_*m+h*i*d-n*p*d)*R,e[10]=(s*_*a-y*o*a+y*i*u-n*_*u-s*i*d+n*o*d)*R,e[11]=(h*o*a-s*p*a-h*i*u+n*p*u+s*i*m-n*o*m)*R,e[12]=N*R,e[13]=(h*_*r-y*p*r+y*i*f-n*_*f-h*i*g+n*p*g)*R,e[14]=(y*o*r-s*_*r-y*i*l+n*_*l+s*i*g-n*o*g)*R,e[15]=(s*p*r-h*o*r+h*i*l-n*p*l-s*i*f+n*o*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,u=a*s,h=a*o;return this.set(u*s+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*s,0,u*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,u=a+a,h=s+s,p=o+o,f=a*u,m=a*h,y=a*p,_=s*h,g=s*p,d=o*p,x=l*u,v=l*h,S=l*p,N=i.x,k=i.y,R=i.z;return r[0]=(1-(_+d))*N,r[1]=(m+S)*N,r[2]=(y-v)*N,r[3]=0,r[4]=(m-S)*k,r[5]=(1-(f+d))*k,r[6]=(g+x)*k,r[7]=0,r[8]=(y+v)*R,r[9]=(g-x)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=Zr.set(r[0],r[1],r[2]).length();const s=Zr.set(r[4],r[5],r[6]).length(),o=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/a,h=1/s,p=1/o;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=p,Fn.elements[9]*=p,Fn.elements[10]*=p,n.setFromRotationMatrix(Fn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=yi){const l=this.elements,u=2*a/(n-e),h=2*a/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,y;if(o===yi)m=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Fl)m=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=yi){const l=this.elements,u=1/(n-e),h=1/(i-r),p=1/(s-a),f=(n+e)*u,m=(i+r)*h;let y,_;if(o===yi)y=(s+a)*p,_=-2*p;else if(o===Fl)y=a*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new O,Fn=new Mt,_S=new O(0,0,0),yS=new O(1,1,1),Di=new O,Ro=new O,pn=new O,Ip=new Mt,Fp=new no;class sc{constructor(e=0,n=0,i=0,r=sc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sc.DEFAULT_ORDER="XYZ";class ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SS=0;const Op=new O,Qr=new no,di=new Mt,No=new O,cs=new O,bS=new O,MS=new no,zp=new O(1,0,0),Bp=new O(0,1,0),jp=new O(0,0,1),wS={type:"added"},ES={type:"removed"};class jt extends qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new O,n=new sc,i=new no,r=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ke}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?No.copy(e):No.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(cs,No,this.up):di.lookAt(No,cs,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(di),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ES)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),h=s(e.images),p=s(e.shapes),f=s(e.skeletons),m=s(e.animations),y=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new O(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new O,hi=new O,tu=new O,fi=new O,ea=new O,ta=new O,Hp=new O,nu=new O,iu=new O,ru=new O;let Po=!1;class Gn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){On.subVectors(r,n),hi.subVectors(i,n),tu.subVectors(e,n);const s=On.dot(On),o=On.dot(hi),l=On.dot(tu),u=hi.dot(hi),h=hi.dot(tu),p=s*u-o*o;if(p===0)return a.set(0,0,0),null;const f=1/p,m=(u*l-o*h)*f,y=(s*h-o*l)*f;return a.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,a,s,o,l){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),this.getInterpolation(e,n,i,r,a,s,o,l)}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,fi.x),l.addScaledVector(s,fi.y),l.addScaledVector(o,fi.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),hi.subVectors(e,n),On.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;ea.subVectors(r,i),ta.subVectors(a,i),nu.subVectors(e,i);const l=ea.dot(nu),u=ta.dot(nu);if(l<=0&&u<=0)return n.copy(i);iu.subVectors(e,r);const h=ea.dot(iu),p=ta.dot(iu);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*u;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(ea,s);ru.subVectors(e,a);const m=ea.dot(ru),y=ta.dot(ru);if(y>=0&&m<=y)return n.copy(a);const _=m*u-l*y;if(_<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(ta,o);const g=h*y-m*p;if(g<=0&&p-h>=0&&m-y>=0)return Hp.subVectors(a,r),o=(p-h)/(p-h+(m-y)),n.copy(r).addScaledVector(Hp,o);const d=1/(g+_+f);return s=_*d,o=f*d,n.copy(i).addScaledVector(ea,s).addScaledVector(ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=uS(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=au(s,a,e+1/3),this.g=au(s,a,e),this.b=au(s,a,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=sx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=Kc(e.r),this.g=Kc(e.g),this.b=Kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return at.fromWorkingColorSpace(qt.copy(this),e),Math.round(zt(qt.r*255,0,255))*65536+Math.round(zt(qt.g*255,0,255))*256+Math.round(zt(qt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,a=qt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,u;const h=(o+s)/2;if(o===s)l=0,u=0;else{const p=s-o;switch(u=h<=.5?p/(s+o):p/(2-s-o),s){case i:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-i)/p+2;break;case a:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=at.workingColorSpace){return at.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ot){at.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Lo);const i=Wc(Ui.h,Lo.h,n),r=Wc(Ui.s,Lo.s,n),a=Wc(Ui.l,Lo.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ze;Ze.NAMES=sx;let TS=0;class ro extends qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Na,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ll&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zl extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new O,Do=new Ee;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),a=sn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),e}}class ox extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class lx extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jt extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let AS=0;const wn=new Mt,su=new jt,na=new O,mn=new io,us=new io,Pt=new O;class si extends qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tx(e)?lx:ox)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Jt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(mn.min,us.min),mn.expandByPoint(Pt),Pt.addVectors(mn.max,us.max),mn.expandByPoint(Pt)):(mn.expandByPoint(us.min),mn.expandByPoint(us.max))}mn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Pt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Pt.fromBufferAttribute(o,u),l&&(na.fromBufferAttribute(e,u),Pt.add(na)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,s=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let C=0;C<o;C++)u[C]=new O,h[C]=new O;const p=new O,f=new O,m=new O,y=new Ee,_=new Ee,g=new Ee,d=new O,x=new O;function v(C,W,Y){p.fromArray(r,C*3),f.fromArray(r,W*3),m.fromArray(r,Y*3),y.fromArray(s,C*2),_.fromArray(s,W*2),g.fromArray(s,Y*2),f.sub(p),m.sub(p),_.sub(y),g.sub(y);const Q=1/(_.x*g.y-g.x*_.y);isFinite(Q)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(m,-_.y).multiplyScalar(Q),x.copy(m).multiplyScalar(_.x).addScaledVector(f,-g.x).multiplyScalar(Q),u[C].add(d),u[W].add(d),u[Y].add(d),h[C].add(x),h[W].add(x),h[Y].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let C=0,W=S.length;C<W;++C){const Y=S[C],Q=Y.start,P=Y.count;for(let V=Q,$=Q+P;V<$;V+=3)v(i[V+0],i[V+1],i[V+2])}const N=new O,k=new O,R=new O,F=new O;function w(C){R.fromArray(a,C*3),F.copy(R);const W=u[C];N.copy(W),N.sub(R.multiplyScalar(R.dot(W))).normalize(),k.crossVectors(F,W);const Q=k.dot(h[C])<0?-1:1;l[C*4]=N.x,l[C*4+1]=N.y,l[C*4+2]=N.z,l[C*4+3]=Q}for(let C=0,W=S.length;C<W;++C){const Y=S[C],Q=Y.start,P=Y.count;for(let V=Q,$=Q+P;V<$;V+=3)w(i[V+0]),w(i[V+1]),w(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,a=new O,s=new O,o=new O,l=new O,u=new O,h=new O,p=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const y=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,g),h.subVectors(s,a),p.subVectors(r,a),h.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),o.add(h),l.add(h),u.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,a),p.subVectors(r,a),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(l.length*h);let m=0,y=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)f[y++]=u[m++]}return new ai(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new si,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const a=e.morphAttributes;for(const u in a){const h=[],p=a[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,h=s.length;u<h;u++){const p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new Mt,fr=new vS,Uo=new wh,Vp=new O,ia=new O,ra=new O,aa=new O,ou=new O,Io=new O,Fo=new Ee,Oo=new Ee,zo=new Ee,Wp=new O,Xp=new O,Kp=new O,Bo=new O,jo=new O;class nt extends jt{constructor(e=new si,n=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Io.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const h=o[l],p=a[l];h!==0&&(ou.fromBufferAttribute(p,e),s?Io.addScaledVector(ou,h):Io.addScaledVector(ou.sub(n),h))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(a),fr.copy(e.ray).recast(e.near),!(Uo.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Uo,Vp)===null||fr.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(Gp.copy(a).invert(),fr.copy(e.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let y=0,_=f.length;y<_;y++){const g=f[y],d=s[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,N=v;S<N;S+=3){const k=o.getX(S),R=o.getX(S+1),F=o.getX(S+2);r=Ho(this,d,e,i,u,h,p,k,R,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=y,d=_;g<d;g+=3){const x=o.getX(g),v=o.getX(g+1),S=o.getX(g+2);r=Ho(this,s,e,i,u,h,p,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,_=f.length;y<_;y++){const g=f[y],d=s[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,N=v;S<N;S+=3){const k=S,R=S+1,F=S+2;r=Ho(this,d,e,i,u,h,p,k,R,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=y,d=_;g<d;g+=3){const x=g,v=g+1,S=g+2;r=Ho(this,s,e,i,u,h,p,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function CS(t,e,n,i,r,a,s,o){let l;if(e.side===hn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===rr,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(jo);return u<n.near||u>n.far?null:{distance:u,point:jo.clone(),object:t}}function Ho(t,e,n,i,r,a,s,o,l,u){t.getVertexPosition(o,ia),t.getVertexPosition(l,ra),t.getVertexPosition(u,aa);const h=CS(t,e,n,i,ia,ra,aa,Bo);if(h){r&&(Fo.fromBufferAttribute(r,o),Oo.fromBufferAttribute(r,l),zo.fromBufferAttribute(r,u),h.uv=Gn.getInterpolation(Bo,ia,ra,aa,Fo,Oo,zo,new Ee)),a&&(Fo.fromBufferAttribute(a,o),Oo.fromBufferAttribute(a,l),zo.fromBufferAttribute(a,u),h.uv1=Gn.getInterpolation(Bo,ia,ra,aa,Fo,Oo,zo,new Ee),h.uv2=h.uv1),s&&(Wp.fromBufferAttribute(s,o),Xp.fromBufferAttribute(s,l),Kp.fromBufferAttribute(s,u),h.normal=Gn.getInterpolation(Bo,ia,ra,aa,Wp,Xp,Kp,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new O,materialIndex:0};Gn.getNormal(ia,ra,aa,p.normal),h.face=p}return h}class Vn extends si{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],h=[],p=[];let f=0,m=0;y("z","y","x",-1,-1,i,n,e,s,a,0),y("z","y","x",1,-1,i,n,-e,s,a,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,a,4),y("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(p,2));function y(_,g,d,x,v,S,N,k,R,F,w){const C=S/R,W=N/F,Y=S/2,Q=N/2,P=k/2,V=R+1,$=F+1;let ee=0,U=0;const D=new O;for(let M=0;M<$;M++){const E=M*W-Q;for(let j=0;j<V;j++){const I=j*C-Y;D[_]=I*x,D[g]=E*v,D[d]=P,u.push(D.x,D.y,D.z),D[_]=0,D[g]=0,D[d]=k>0?1:-1,h.push(D.x,D.y,D.z),p.push(j/R),p.push(1-M/F),ee+=1}}for(let M=0;M<F;M++)for(let E=0;E<R;E++){const j=f+E+V*M,I=f+E+V*(M+1),G=f+(E+1)+V*(M+1),J=f+(E+1)+V*M;l.push(j,I,J),l.push(I,G,J),U+=6}o.addGroup(m,U,w),m+=U,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ga(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ga(t[n]);for(const r in i)e[r]=i[r]}return e}function kS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cx(t){return t.getRenderTarget()===null?t.outputColorSpace:at.workingColorSpace}const RS={clone:Ga,merge:Qt};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=PS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=kS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ux extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends ux{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const sa=-90,oa=1;class LS extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(sa,oa,e,n);r.layers=this.layers,this.add(r);const a=new kn(sa,oa,e,n);a.layers=this.layers,this.add(a);const s=new kn(sa,oa,e,n);s.layers=this.layers,this.add(s);const o=new kn(sa,oa,e,n);o.layers=this.layers,this.add(o);const l=new kn(sa,oa,e,n);l.layers=this.layers,this.add(l);const u=new kn(sa,oa,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class dx extends _n{constructor(e,n,i,r,a,s,o,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Ba,super(e,n,i,r,a,s,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DS extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rr?Ot:Rn),this.texture=new dx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vn(5,5,5),a=new Fr({name:"CubemapFromEquirect",uniforms:Ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Zi});a.uniforms.tEquirect.value=n;const s=new nt(r,a),o=n.minFilter;return n.minFilter===Xs&&(n.minFilter=Cn),new LS(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const lu=new O,US=new O,IS=new Ke;class xr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lu.subVectors(i,n).cross(US.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IS.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new wh,Go=new O;class Eh{constructor(e=new xr,n=new xr,i=new xr,r=new xr,a=new xr,s=new xr){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],u=r[4],h=r[5],p=r[6],f=r[7],m=r[8],y=r[9],_=r[10],g=r[11],d=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-a,f-u,g-m,S-d).normalize(),i[1].setComponents(l+a,f+u,g+m,S+d).normalize(),i[2].setComponents(l+s,f+h,g+y,S+x).normalize(),i[3].setComponents(l-s,f-h,g-y,S-x).normalize(),i[4].setComponents(l-o,f-p,g-_,S-v).normalize(),n===yi)i[5].setComponents(l+o,f+p,g+_,S+v).normalize();else if(n===Fl)i[5].setComponents(o,p,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hx(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function FS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,h){const p=u.array,f=u.usage,m=p.byteLength,y=t.createBuffer();t.bindBuffer(h,y),t.bufferData(h,p,f),u.onUploadCallback();let _;if(p instanceof Float32Array)_=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=t.SHORT;else if(p instanceof Uint32Array)_=t.UNSIGNED_INT;else if(p instanceof Int32Array)_=t.INT;else if(p instanceof Int8Array)_=t.BYTE;else if(p instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:m}}function a(u,h,p){const f=h.array,m=h._updateRange,y=h.updateRanges;if(t.bindBuffer(p,u),m.count===-1&&y.length===0&&t.bufferSubData(p,0,f),y.length!==0){for(let _=0,g=y.length;_<g;_++){const d=y[_];n?t.bufferSubData(p,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):t.bufferSubData(p,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(t.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);if(p===void 0)i.set(u,r(u,h));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,u,h),p.version=u.version}}return{get:s,remove:o,update:l}}class qs extends si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,p=e/o,f=n/l,m=[],y=[],_=[],g=[];for(let d=0;d<h;d++){const x=d*f-s;for(let v=0;v<u;v++){const S=v*p-a;y.push(S,-x,0),_.push(0,0,1),g.push(v/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const v=x+u*d,S=x+u*(d+1),N=x+1+u*(d+1),k=x+1+u*d;m.push(v,S,k),m.push(S,N,k)}this.setIndex(m),this.setAttribute("position",new Jt(y,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var OS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ob=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ob=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,WM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:OS,alphahash_pars_fragment:zS,alphamap_fragment:BS,alphamap_pars_fragment:jS,alphatest_fragment:HS,alphatest_pars_fragment:GS,aomap_fragment:VS,aomap_pars_fragment:WS,batching_pars_vertex:XS,batching_vertex:KS,begin_vertex:qS,beginnormal_vertex:YS,bsdfs:$S,iridescence_fragment:JS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:eb,clipping_planes_pars_vertex:tb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:rb,color_pars_vertex:ab,color_vertex:sb,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:db,emissivemap_fragment:hb,emissivemap_pars_fragment:fb,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:xb,envmap_pars_fragment:vb,envmap_pars_vertex:_b,envmap_physical_pars_fragment:Nb,envmap_vertex:yb,fog_vertex:Sb,fog_pars_vertex:bb,fog_fragment:Mb,fog_pars_fragment:wb,gradientmap_pars_fragment:Eb,lightmap_fragment:Tb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Cb,lights_lambert_pars_fragment:kb,lights_pars_begin:Rb,lights_toon_fragment:Pb,lights_toon_pars_fragment:Lb,lights_phong_fragment:Db,lights_phong_pars_fragment:Ub,lights_physical_fragment:Ib,lights_physical_pars_fragment:Fb,lights_fragment_begin:Ob,lights_fragment_maps:zb,lights_fragment_end:Bb,logdepthbuf_fragment:jb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Vb,map_fragment:Wb,map_pars_fragment:Xb,map_particle_fragment:Kb,map_particle_pars_fragment:qb,metalnessmap_fragment:Yb,metalnessmap_pars_fragment:$b,morphcolor_vertex:Jb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Qb,morphtarget_vertex:eM,normal_fragment_begin:tM,normal_fragment_maps:nM,normal_pars_fragment:iM,normal_pars_vertex:rM,normal_vertex:aM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:oM,clearcoat_normal_fragment_maps:lM,clearcoat_pars_fragment:cM,iridescence_pars_fragment:uM,opaque_fragment:dM,packing:hM,premultiplied_alpha_fragment:fM,project_vertex:pM,dithering_fragment:mM,dithering_pars_fragment:gM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:vM,shadowmap_pars_fragment:_M,shadowmap_pars_vertex:yM,shadowmap_vertex:SM,shadowmask_pars_fragment:bM,skinbase_vertex:MM,skinning_pars_vertex:wM,skinning_vertex:EM,skinnormal_vertex:TM,specularmap_fragment:AM,specularmap_pars_fragment:CM,tonemapping_fragment:kM,tonemapping_pars_fragment:RM,transmission_fragment:NM,transmission_pars_fragment:PM,uv_pars_fragment:LM,uv_pars_vertex:DM,uv_vertex:UM,worldpos_vertex:IM,background_vert:FM,background_frag:OM,backgroundCube_vert:zM,backgroundCube_frag:BM,cube_vert:jM,cube_frag:HM,depth_vert:GM,depth_frag:VM,distanceRGBA_vert:WM,distanceRGBA_frag:XM,equirect_vert:KM,equirect_frag:qM,linedashed_vert:YM,linedashed_frag:$M,meshbasic_vert:JM,meshbasic_frag:ZM,meshlambert_vert:QM,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:aw,meshphong_frag:sw,meshphysical_vert:ow,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:dw,points_frag:hw,shadow_vert:fw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},fe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ei={basic:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Qt([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Qt([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Qt([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Qt([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Qt([fe.lights,fe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ei.physical={uniforms:Qt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Vo={r:0,b:0,g:0};function xw(t,e,n,i,r,a,s){const o=new Ze(0);let l=a===!0?0:1,u,h,p=null,f=0,m=null;function y(g,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===rc)?(h===void 0&&(h=new nt(new Vn(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Ga(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,k,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=at.getTransfer(v.colorSpace)!==ct,(p!==v||f!==v.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=v,f=v.version,m=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new nt(new qs(2,2),new Fr({name:"BackgroundMaterial",uniforms:Ga(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=at.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||f!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=v,f=v.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function _(g,d){g.getRGB(Vo,cx(t)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(g,d=1){o.set(g),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(o,l)},render:y}}function vw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=g(null);let u=l,h=!1;function p(P,V,$,ee,U){let D=!1;if(s){const M=_(ee,$,V);u!==M&&(u=M,m(u.object)),D=d(P,ee,$,U),D&&x(P,ee,$,U)}else{const M=V.wireframe===!0;(u.geometry!==ee.id||u.program!==$.id||u.wireframe!==M)&&(u.geometry=ee.id,u.program=$.id,u.wireframe=M,D=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(D||h)&&(h=!1,F(P,V,$,ee),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function f(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):a.bindVertexArrayOES(P)}function y(P){return i.isWebGL2?t.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function _(P,V,$){const ee=$.wireframe===!0;let U=o[P.id];U===void 0&&(U={},o[P.id]=U);let D=U[V.id];D===void 0&&(D={},U[V.id]=D);let M=D[ee];return M===void 0&&(M=g(f()),D[ee]=M),M}function g(P){const V=[],$=[],ee=[];for(let U=0;U<r;U++)V[U]=0,$[U]=0,ee[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:ee,object:P,attributes:{},index:null}}function d(P,V,$,ee){const U=u.attributes,D=V.attributes;let M=0;const E=$.getAttributes();for(const j in E)if(E[j].location>=0){const G=U[j];let J=D[j];if(J===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;M++}return u.attributesNum!==M||u.index!==ee}function x(P,V,$,ee){const U={},D=V.attributes;let M=0;const E=$.getAttributes();for(const j in E)if(E[j].location>=0){let G=D[j];G===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));const J={};J.attribute=G,G&&G.data&&(J.data=G.data),U[j]=J,M++}u.attributes=U,u.attributesNum=M,u.index=ee}function v(){const P=u.newAttributes;for(let V=0,$=P.length;V<$;V++)P[V]=0}function S(P){N(P,0)}function N(P,V){const $=u.newAttributes,ee=u.enabledAttributes,U=u.attributeDivisors;$[P]=1,ee[P]===0&&(t.enableVertexAttribArray(P),ee[P]=1),U[P]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),U[P]=V)}function k(){const P=u.newAttributes,V=u.enabledAttributes;for(let $=0,ee=V.length;$<ee;$++)V[$]!==P[$]&&(t.disableVertexAttribArray($),V[$]=0)}function R(P,V,$,ee,U,D,M){M===!0?t.vertexAttribIPointer(P,V,$,U,D):t.vertexAttribPointer(P,V,$,ee,U,D)}function F(P,V,$,ee){if(i.isWebGL2===!1&&(P.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=ee.attributes,D=$.getAttributes(),M=V.defaultAttributeValues;for(const E in D){const j=D[E];if(j.location>=0){let I=U[E];if(I===void 0&&(E==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),E==="instanceColor"&&P.instanceColor&&(I=P.instanceColor)),I!==void 0){const G=I.normalized,J=I.itemSize,ne=n.get(I);if(ne===void 0)continue;const Z=ne.buffer,le=ne.type,xe=ne.bytesPerElement,me=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||I.gpuType===Wg);if(I.isInterleavedBufferAttribute){const Me=I.data,z=Me.stride,$e=I.offset;if(Me.isInstancedInterleavedBuffer){for(let ce=0;ce<j.locationSize;ce++)N(j.location+ce,Me.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ce=0;ce<j.locationSize;ce++)S(j.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let ce=0;ce<j.locationSize;ce++)R(j.location+ce,J/j.locationSize,le,G,z*xe,($e+J/j.locationSize*ce)*xe,me)}else{if(I.isInstancedBufferAttribute){for(let Me=0;Me<j.locationSize;Me++)N(j.location+Me,I.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Me=0;Me<j.locationSize;Me++)S(j.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let Me=0;Me<j.locationSize;Me++)R(j.location+Me,J/j.locationSize,le,G,J*xe,J/j.locationSize*Me*xe,me)}}else if(M!==void 0){const G=M[E];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(j.location,G);break;case 3:t.vertexAttrib3fv(j.location,G);break;case 4:t.vertexAttrib4fv(j.location,G);break;default:t.vertexAttrib1fv(j.location,G)}}}}k()}function w(){Y();for(const P in o){const V=o[P];for(const $ in V){const ee=V[$];for(const U in ee)y(ee[U].object),delete ee[U];delete V[$]}delete o[P]}}function C(P){if(o[P.id]===void 0)return;const V=o[P.id];for(const $ in V){const ee=V[$];for(const U in ee)y(ee[U].object),delete ee[U];delete V[$]}delete o[P.id]}function W(P){for(const V in o){const $=o[V];if($[P.id]===void 0)continue;const ee=$[P.id];for(const U in ee)y(ee[U].object),delete ee[U];delete $[P.id]}}function Y(){Q(),h=!0,u!==l&&(u=l,m(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Y,resetDefaultState:Q,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:S,disableUnusedAttributes:k}}function _w(t,e,n,i){const r=i.isWebGL2;let a;function s(h){a=h}function o(h,p){t.drawArrays(a,h,p),n.update(p,a,1)}function l(h,p,f){if(f===0)return;let m,y;if(r)m=t,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](a,h,p,f),n.update(p,a,f)}function u(h,p,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<f;y++)this.render(h[y],p[y]);else{m.multiDrawArraysWEBGL(a,h,0,p,0,f);let y=0;for(let _=0;_<f;_++)y+=p[_];n.update(y,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function yw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=s||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=s||e.has("OES_texture_float"),N=v&&S,k=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:N,maxSamples:k}}function Sw(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new xr,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const y=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||y===null||y.length===0||a&&!g)a?h(null):u();else{const x=a?0:i,v=x*4;let S=d.clippingState||null;l.value=S,S=h(y,f,v,m);for(let N=0;N!==v;++N)S[N]=n[N];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,y){const _=p!==null?p.length:0;let g=null;if(_!==0){if(g=l.value,y!==!0||g===null){const d=m+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,S=m;v!==_;++v,S+=4)s.copy(p[v]).applyMatrix4(x,o),s.normal.toArray(g,S),g[S+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function bw(t){let e=new WeakMap;function n(s,o){return o===gd?s.mapping=Ba:o===xd&&(s.mapping=ja),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===gd||o===xd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new DS(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class fx extends ux{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ma=4,qp=[.125,.215,.35,.446,.526,.582],yr=20,cu=new fx,Yp=new Ze;let uu=null,du=0,hu=0;const vr=(1+Math.sqrt(5))/2,la=1/vr,$p=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,vr,la),new O(0,vr,-la),new O(la,0,vr),new O(-la,0,vr),new O(vr,la,0),new O(-vr,la,0)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,du,hu),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ba||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ks,format:Xn,colorSpace:Ti,depthBuffer:!1},r=Zp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mw(a)),this._blurMaterial=ww(a,e,n)}return r}_compileMaterial(e){const n=new nt(this._lodPlanes[0],e);this._renderer.compile(n,cu)}_sceneToCubeUV(e,n,i,r){const o=new kn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Yp),h.toneMapping=Qi,h.autoClear=!1;const m=new zl({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),y=new nt(new Vn,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(Yp),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;Wo(r,x*v,d>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ba||e.mapping===ja;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new nt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=$p[(r-1)%$p.length];this._blur(e,r-1,r,a,s)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new nt(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*yr-1),_=a/y,g=isFinite(a)?1+Math.floor(h*_):yr;g>yr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yr}`);const d=[];let x=0;for(let R=0;R<yr;++R){const F=R/_,w=Math.exp(-F*F/2);d.push(w),R===0?x+=w:R<g&&(x+=2*w)}for(let R=0;R<d.length;R++)d[R]=d[R]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=y,f.mipInt.value=v-i;const S=this._sizeLods[r],N=3*S*(r>v-Ma?r-v+Ma:0),k=4*(this._cubeSize-S);Wo(n,N,k,3*S,2*S),l.setRenderTarget(n),l.render(p,cu)}}function Mw(t){const e=[],n=[],i=[];let r=t;const a=t-Ma+1+qp.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-Ma?l=qp[s-t+Ma-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,y=6,_=3,g=2,d=1,x=new Float32Array(_*y*m),v=new Float32Array(g*y*m),S=new Float32Array(d*y*m);for(let k=0;k<m;k++){const R=k%3*2/3-1,F=k>2?0:-1,w=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];x.set(w,_*y*k),v.set(f,g*y*k);const C=[k,k,k,k,k,k];S.set(C,d*y*k)}const N=new si;N.setAttribute("position",new ai(x,_)),N.setAttribute("uv",new ai(v,g)),N.setAttribute("faceIndex",new ai(S,d)),e.push(N),r>Ma&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zp(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ww(t,e,n){const i=new Float32Array(yr),r=new O(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Qp(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function em(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ew(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===gd||l===xd,h=l===Ba||l===ja;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return n===null&&(n=new Jp(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(u&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new Jp(t));const f=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Tw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Aw(t,e,n,i){const r={},a=new WeakMap;function s(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const _=f.morphAttributes[y];for(let g=0,d=_.length;g<d;g++)e.remove(_[g])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const y in m){const _=m[y];for(let g=0,d=_.length;g<d;g++)e.update(_[g],t.ARRAY_BUFFER)}}function u(p){const f=[],m=p.index,y=p.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,S=x.length;v<S;v+=3){const N=x[v+0],k=x[v+1],R=x[v+2];f.push(N,k,k,R,R,N)}}else if(y!==void 0){const x=y.array;_=y.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const N=v+0,k=v+1,R=v+2;f.push(N,k,k,R,R,N)}}else return;const g=new(tx(f)?lx:ox)(f,1);g.version=_;const d=a.get(p);d&&e.remove(d),a.set(p,g)}function h(p){const f=a.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Cw(t,e,n,i){const r=i.isWebGL2;let a;function s(m){a=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function h(m,y){t.drawElements(a,y,o,m*l),n.update(y,a,1)}function p(m,y,_){if(_===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](a,y,o,m*l,_),n.update(y,a,_)}function f(m,y,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<_;d++)this.render(m[d]/l,y[d]);else{g.multiDrawElementsWEBGL(a,y,0,o,m,0,_);let d=0;for(let x=0;x<_;x++)d+=y[x];n.update(d,a,1)}}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=f}function kw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Rw(t,e){return t[0]-e[0]}function Nw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Pw(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new Ut,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,h,p){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=y!==void 0?y.length:0;let g=a.get(h);if(g===void 0||g.count!==_){let V=function(){Q.dispose(),a.delete(h),h.removeEventListener("dispose",V)};var m=V;g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,N=h.morphAttributes.color!==void 0,k=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let w=0;v===!0&&(w=1),S===!0&&(w=2),N===!0&&(w=3);let C=h.attributes.position.count*w,W=1;C>e.maxTextureSize&&(W=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Y=new Float32Array(C*W*4*_),Q=new rx(Y,C,W,_);Q.type=Gi,Q.needsUpdate=!0;const P=w*4;for(let $=0;$<_;$++){const ee=k[$],U=R[$],D=F[$],M=C*W*4*$;for(let E=0;E<ee.count;E++){const j=E*P;v===!0&&(s.fromBufferAttribute(ee,E),Y[M+j+0]=s.x,Y[M+j+1]=s.y,Y[M+j+2]=s.z,Y[M+j+3]=0),S===!0&&(s.fromBufferAttribute(U,E),Y[M+j+4]=s.x,Y[M+j+5]=s.y,Y[M+j+6]=s.z,Y[M+j+7]=0),N===!0&&(s.fromBufferAttribute(D,E),Y[M+j+8]=s.x,Y[M+j+9]=s.y,Y[M+j+10]=s.z,Y[M+j+11]=D.itemSize===4?s.w:1)}}g={count:_,texture:Q,size:new Ee(C,W)},a.set(h,g),h.addEventListener("dispose",V)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const x=h.morphTargetsRelative?1:1-d;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",f),p.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const y=f===void 0?0:f.length;let _=i[h.id];if(_===void 0||_.length!==y){_=[];for(let S=0;S<y;S++)_[S]=[S,0];i[h.id]=_}for(let S=0;S<y;S++){const N=_[S];N[0]=S,N[1]=f[S]}_.sort(Nw);for(let S=0;S<8;S++)S<y&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Rw);const g=h.morphAttributes.position,d=h.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const N=o[S],k=N[0],R=N[1];k!==Number.MAX_SAFE_INTEGER&&R?(g&&h.getAttribute("morphTarget"+S)!==g[k]&&h.setAttribute("morphTarget"+S,g[k]),d&&h.getAttribute("morphNormal"+S)!==d[k]&&h.setAttribute("morphNormal"+S,d[k]),r[S]=R,x+=R):(g&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const v=h.morphTargetsRelative?1:1-x;p.getUniforms().setValue(t,"morphTargetBaseInfluence",v),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Lw(t,e,n,i){let r=new WeakMap;function a(l){const u=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function s(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:s}}class px extends _n{constructor(e,n,i,r,a,s,o,l,u,h){if(h=h!==void 0?h:kr,h!==kr&&h!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===kr&&(i=Hi),i===void 0&&h===Ha&&(i=Cr),super(null,r,a,s,o,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const mx=new _n,gx=new px(1,1);gx.compareFunction=ex;const xx=new rx,vx=new gS,_x=new dx,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),am=new Float32Array(4);function Ya(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=tm[r];if(a===void 0&&(a=new Float32Array(r),tm[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oc(t,e){let n=nm[e];n===void 0&&(n=new Int32Array(e),nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function Ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ct(n,i))return;am.set(i),t.uniformMatrix2fv(this.addr,!1,am),kt(n,i)}}function zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ct(n,i))return;rm.set(i),t.uniformMatrix3fv(this.addr,!1,rm),kt(n,i)}}function Bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ct(n,i))return;im.set(i),t.uniformMatrix4fv(this.addr,!1,im),kt(n,i)}}function jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function Ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const a=this.type===t.SAMPLER_2D_SHADOW?gx:mx;n.setTexture2D(e||a,r)}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vx,r)}function Jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_x,r)}function Zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xx,r)}function Qw(t){switch(t){case 5126:return Dw;case 35664:return Uw;case 35665:return Iw;case 35666:return Fw;case 35674:return Ow;case 35675:return zw;case 35676:return Bw;case 5124:case 35670:return jw;case 35667:case 35671:return Hw;case 35668:case 35672:return Gw;case 35669:case 35673:return Vw;case 5125:return Ww;case 36294:return Xw;case 36295:return Kw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return Zw}}function eE(t,e){t.uniform1fv(this.addr,e)}function tE(t,e){const n=Ya(e,this.size,2);t.uniform2fv(this.addr,n)}function nE(t,e){const n=Ya(e,this.size,3);t.uniform3fv(this.addr,n)}function iE(t,e){const n=Ya(e,this.size,4);t.uniform4fv(this.addr,n)}function rE(t,e){const n=Ya(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aE(t,e){const n=Ya(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sE(t,e){const n=Ya(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oE(t,e){t.uniform1iv(this.addr,e)}function lE(t,e){t.uniform2iv(this.addr,e)}function cE(t,e){t.uniform3iv(this.addr,e)}function uE(t,e){t.uniform4iv(this.addr,e)}function dE(t,e){t.uniform1uiv(this.addr,e)}function hE(t,e){t.uniform2uiv(this.addr,e)}function fE(t,e){t.uniform3uiv(this.addr,e)}function pE(t,e){t.uniform4uiv(this.addr,e)}function mE(t,e,n){const i=this.cache,r=e.length,a=oc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),kt(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||mx,a[s])}function gE(t,e,n){const i=this.cache,r=e.length,a=oc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),kt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||vx,a[s])}function xE(t,e,n){const i=this.cache,r=e.length,a=oc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),kt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||_x,a[s])}function vE(t,e,n){const i=this.cache,r=e.length,a=oc(n,r);Ct(i,a)||(t.uniform1iv(this.addr,a),kt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||xx,a[s])}function _E(t){switch(t){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return aE;case 35676:return sE;case 5124:case 35670:return oE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return uE;case 5125:return dE;case 36294:return hE;case 36295:return fE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return vE}}class yE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Qw(n.type)}}class SE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_E(n.type)}}class bE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const fu=/(\w+)(\])?(\[|\.)?/g;function sm(t,e){t.seq.push(e),t.map[e.id]=e}function ME(t,e,n){const i=t.name,r=i.length;for(fu.lastIndex=0;;){const a=fu.exec(i),s=fu.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===r){sm(n,u===void 0?new yE(o,t,e):new SE(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new bE(o),sm(n,p)),n=p}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);ME(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function om(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wE=37297;let EE=0;function TE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function AE(t){const e=at.getPrimaries(at.workingColorSpace),n=at.getPrimaries(t);let i;switch(e===n?i="":e===Il&&n===Ul?i="LinearDisplayP3ToLinearSRGB":e===Ul&&n===Il&&(i="LinearSRGBToLinearDisplayP3"),t){case Ti:case ac:return[i,"LinearTransferOETF"];case Ot:case Mh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function lm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+TE(t.getShaderSource(e),s)}else return r}function CE(t,e){const n=AE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kE(t,e){let n;switch(e){case B1:n="Linear";break;case j1:n="Reinhard";break;case H1:n="OptimizedCineon";break;case Gg:n="ACESFilmic";break;case V1:n="AgX";break;case G1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wa).join(`
`)}function NE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wa).join(`
`)}function PE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function wa(t){return t!==""}function cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(t){return t.replace(DE,IE)}const UE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IE(t,e){let n=He[e];if(n===void 0){const i=UE.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Md(n)}const FE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(t){return t.replace(FE,OE)}function OE(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function hm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===jg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function BE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ba:case ja:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ja:e="ENVMAP_MODE_REFRACTION";break}return e}function HE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case O1:e="ENVMAP_BLENDING_MIX";break;case z1:e="ENVMAP_BLENDING_ADD";break}return e}function GE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function VE(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=zE(n),u=BE(n),h=jE(n),p=HE(n),f=GE(n),m=n.isWebGL2?"":RE(n),y=NE(n),_=PE(a),g=r.createProgram();let d,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wa).join(`
`),d.length>0&&(d+=`
`),x=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wa).join(`
`),x.length>0&&(x+=`
`)):(d=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),x=[m,hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?He.tonemapping_pars_fragment:"",n.toneMapping!==Qi?kE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,CE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wa).join(`
`)),s=Md(s),s=cm(s,n),s=um(s,n),o=Md(o),o=cm(o,n),o=um(o,n),s=dm(s),o=dm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+d+s,N=v+x+o,k=om(r,r.VERTEX_SHADER,S),R=om(r,r.FRAGMENT_SHADER,N);r.attachShader(g,k),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function F(Y){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(k).trim(),V=r.getShaderInfoLog(R).trim();let $=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,k,R);else{const U=lm(r,k,"vertex"),D=lm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+U+`
`+D)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||V==="")&&(ee=!1);ee&&(Y.diagnostics={runnable:$,programLog:Q,vertexShader:{log:P,prefix:d},fragmentShader:{log:V,prefix:x}})}r.deleteShader(k),r.deleteShader(R),w=new ll(r,g),C=LE(r,g)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(g,wE)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=k,this.fragmentShader=R,this}let WE=0;class XE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KE(e),n.set(e,i)),i}}class KE{constructor(e){this.id=WE++,this.code=e,this.usedTimes=0}}function qE(t,e,n,i,r,a,s){const o=new ax,l=new XE,u=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===0?"uv":`uv${w}`}function g(w,C,W,Y,Q){const P=Y.fog,V=Q.geometry,$=w.isMeshStandardMaterial?Y.environment:null,ee=(w.isMeshStandardMaterial?n:e).get(w.envMap||$),U=ee&&ee.mapping===rc?ee.image.height:null,D=y[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const M=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,E=M!==void 0?M.length:0;let j=0;V.morphAttributes.position!==void 0&&(j=1),V.morphAttributes.normal!==void 0&&(j=2),V.morphAttributes.color!==void 0&&(j=3);let I,G,J,ne;if(D){const wt=ei[D];I=wt.vertexShader,G=wt.fragmentShader}else I=w.vertexShader,G=w.fragmentShader,l.update(w),J=l.getVertexShaderID(w),ne=l.getFragmentShaderID(w);const Z=t.getRenderTarget(),le=Q.isInstancedMesh===!0,xe=Q.isBatchedMesh===!0,me=!!w.map,Me=!!w.matcap,z=!!ee,$e=!!w.aoMap,ce=!!w.lightMap,Te=!!w.bumpMap,ge=!!w.normalMap,Ve=!!w.displacementMap,oe=!!w.emissiveMap,T=!!w.metalnessMap,b=!!w.roughnessMap,H=w.anisotropy>0,ae=w.clearcoat>0,te=w.iridescence>0,ie=w.sheen>0,be=w.transmission>0,de=H&&!!w.anisotropyMap,ve=ae&&!!w.clearcoatMap,Ae=ae&&!!w.clearcoatNormalMap,De=ae&&!!w.clearcoatRoughnessMap,re=te&&!!w.iridescenceMap,Be=te&&!!w.iridescenceThicknessMap,Fe=ie&&!!w.sheenColorMap,Ce=ie&&!!w.sheenRoughnessMap,ke=!!w.specularMap,_e=!!w.specularColorMap,Ie=!!w.specularIntensityMap,We=be&&!!w.transmissionMap,st=be&&!!w.thicknessMap,je=!!w.gradientMap,ue=!!w.alphaMap,L=w.alphaTest>0,he=!!w.alphaHash,pe=!!w.extensions,Pe=!!V.attributes.uv1,Ne=!!V.attributes.uv2,et=!!V.attributes.uv3;let it=Qi;return w.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:h,shaderID:D,shaderType:w.type,shaderName:w.name,vertexShader:I,fragmentShader:G,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:xe,instancing:le,instancingColor:le&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ti,map:me,matcap:Me,envMap:z,envMapMode:z&&ee.mapping,envMapCubeUVHeight:U,aoMap:$e,lightMap:ce,bumpMap:Te,normalMap:ge,displacementMap:f&&Ve,emissiveMap:oe,normalMapObjectSpace:ge&&w.normalMapType===nS,normalMapTangentSpace:ge&&w.normalMapType===Qg,metalnessMap:T,roughnessMap:b,anisotropy:H,anisotropyMap:de,clearcoat:ae,clearcoatMap:ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,iridescence:te,iridescenceMap:re,iridescenceThicknessMap:Be,sheen:ie,sheenColorMap:Fe,sheenRoughnessMap:Ce,specularMap:ke,specularColorMap:_e,specularIntensityMap:Ie,transmission:be,transmissionMap:We,thicknessMap:st,gradientMap:je,opaque:w.transparent===!1&&w.blending===Na,alphaMap:ue,alphaTest:L,alphaHash:he,combine:w.combine,mapUv:me&&_(w.map.channel),aoMapUv:$e&&_(w.aoMap.channel),lightMapUv:ce&&_(w.lightMap.channel),bumpMapUv:Te&&_(w.bumpMap.channel),normalMapUv:ge&&_(w.normalMap.channel),displacementMapUv:Ve&&_(w.displacementMap.channel),emissiveMapUv:oe&&_(w.emissiveMap.channel),metalnessMapUv:T&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:de&&_(w.anisotropyMap.channel),clearcoatMapUv:ve&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(w.sheenRoughnessMap.channel),specularMapUv:ke&&_(w.specularMap.channel),specularColorMapUv:_e&&_(w.specularColorMap.channel),specularIntensityMapUv:Ie&&_(w.specularIntensityMap.channel),transmissionMapUv:We&&_(w.transmissionMap.channel),thicknessMapUv:st&&_(w.thicknessMap.channel),alphaMapUv:ue&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||H),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ne,vertexUv3s:et,pointsUvs:Q.isPoints===!0&&!!V.attributes.uv&&(me||ue),fog:!!P,useFog:w.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:me&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xi,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:pe&&w.extensions.derivatives===!0,extensionFragDepth:pe&&w.extensions.fragDepth===!0,extensionDrawBuffers:pe&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const W in w.defines)C.push(W),C.push(w.defines[W]);return w.isRawShaderMaterial===!1&&(x(C,w),v(C,w),C.push(t.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function x(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function v(w,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),w.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function S(w){const C=y[w.type];let W;if(C){const Y=ei[C];W=RS.clone(Y.uniforms)}else W=w.uniforms;return W}function N(w,C){let W;for(let Y=0,Q=u.length;Y<Q;Y++){const P=u[Y];if(P.cacheKey===C){W=P,++W.usedTimes;break}}return W===void 0&&(W=new VE(t,C,w,a),u.push(W)),W}function k(w){if(--w.usedTimes===0){const C=u.indexOf(w);u[C]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:N,releaseProgram:k,releaseShaderCache:R,programs:u,dispose:F}}function YE(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function $E(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pm(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(p,f,m,y,_,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:m,groupOrder:y,renderOrder:p.renderOrder,z:_,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=m,d.groupOrder=y,d.renderOrder=p.renderOrder,d.z=_,d.group=g),e++,d}function o(p,f,m,y,_,g){const d=s(p,f,m,y,_,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(p,f,m,y,_,g){const d=s(p,f,m,y,_,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,f){n.length>1&&n.sort(p||$E),i.length>1&&i.sort(f||fm),r.length>1&&r.sort(f||fm)}function h(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:u}}function JE(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new pm,t.set(i,[s])):r>=a.length?(s=new pm,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ze};break;case"SpotLight":n={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function QE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let e2=0;function t2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function n2(t,e){const n=new ZE,i=QE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new O);const a=new O,s=new Mt,o=new Mt;function l(h,p){let f=0,m=0,y=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,g=0,d=0,x=0,v=0,S=0,N=0,k=0,R=0,F=0,w=0;h.sort(t2);const C=p===!0?Math.PI:1;for(let Y=0,Q=h.length;Y<Q;Y++){const P=h[Y],V=P.color,$=P.intensity,ee=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=V.r*$*C,m+=V.g*$*C,y+=V.b*$*C;else if(P.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(P.sh.coefficients[D],$);w++}else if(P.isDirectionalLight){const D=n.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity*C),P.castShadow){const M=P.shadow,E=i.get(P);E.shadowBias=M.bias,E.shadowNormalBias=M.normalBias,E.shadowRadius=M.radius,E.shadowMapSize=M.mapSize,r.directionalShadow[_]=E,r.directionalShadowMap[_]=U,r.directionalShadowMatrix[_]=P.shadow.matrix,S++}r.directional[_]=D,_++}else if(P.isSpotLight){const D=n.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(V).multiplyScalar($*C),D.distance=ee,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,r.spot[d]=D;const M=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,M.updateMatrices(P),P.castShadow&&F++),r.spotLightMatrix[d]=M.matrix,P.castShadow){const E=i.get(P);E.shadowBias=M.bias,E.shadowNormalBias=M.normalBias,E.shadowRadius=M.radius,E.shadowMapSize=M.mapSize,r.spotShadow[d]=E,r.spotShadowMap[d]=U,k++}d++}else if(P.isRectAreaLight){const D=n.get(P);D.color.copy(V).multiplyScalar($),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=D,x++}else if(P.isPointLight){const D=n.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity*C),D.distance=P.distance,D.decay=P.decay,P.castShadow){const M=P.shadow,E=i.get(P);E.shadowBias=M.bias,E.shadowNormalBias=M.normalBias,E.shadowRadius=M.radius,E.shadowMapSize=M.mapSize,E.shadowCameraNear=M.camera.near,E.shadowCameraFar=M.camera.far,r.pointShadow[g]=E,r.pointShadowMap[g]=U,r.pointShadowMatrix[g]=P.shadow.matrix,N++}r.point[g]=D,g++}else if(P.isHemisphereLight){const D=n.get(P);D.skyColor.copy(P.color).multiplyScalar($*C),D.groundColor.copy(P.groundColor).multiplyScalar($*C),r.hemi[v]=D,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==_||W.pointLength!==g||W.spotLength!==d||W.rectAreaLength!==x||W.hemiLength!==v||W.numDirectionalShadows!==S||W.numPointShadows!==N||W.numSpotShadows!==k||W.numSpotMaps!==R||W.numLightProbes!==w)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=k+R-F,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=w,W.directionalLength=_,W.pointLength=g,W.spotLength=d,W.rectAreaLength=x,W.hemiLength=v,W.numDirectionalShadows=S,W.numPointShadows=N,W.numSpotShadows=k,W.numSpotMaps=R,W.numLightProbes=w,r.version=e2++)}function u(h,p){let f=0,m=0,y=0,_=0,g=0;const d=p.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const N=r.directional[f];N.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(d),f++}else if(S.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(d),N.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(d),y++}else if(S.isRectAreaLight){const N=r.rectArea[_];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(d),o.identity(),s.copy(S.matrixWorld),s.premultiply(d),o.extractRotation(s),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const N=r.point[m];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const N=r.hemi[g];N.direction.setFromMatrixPosition(S.matrixWorld),N.direction.transformDirection(d),g++}}}return{setup:l,setupView:u,state:r}}function mm(t,e){const n=new n2(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(p){i.push(p)}function o(p){r.push(p)}function l(p){n.setup(i,p)}function u(p){n.setupView(i,p)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function i2(t,e){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let l;return o===void 0?(l=new mm(t,e),n.set(a,[l])):s>=o.length?(l=new mm(t,e),o.push(l)):l=o[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class r2 extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a2 extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l2(t,e,n){let i=new Eh;const r=new Ee,a=new Ee,s=new Ut,o=new r2({depthPacking:tS}),l=new a2,u={},h=n.maxTextureSize,p={[rr]:hn,[hn]:rr,[xi]:xi},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:s2,fragmentShader:o2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const y=new si;y.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(y,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let d=this.type;this.render=function(k,R,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||k.length===0)return;const w=t.getRenderTarget(),C=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Zi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=d!==pi&&this.type===pi,P=d===pi&&this.type!==pi;for(let V=0,$=k.length;V<$;V++){const ee=k[V],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const D=U.getFrameExtents();if(r.multiply(D),a.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/D.x),r.x=a.x*D.x,U.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/D.y),r.y=a.y*D.y,U.mapSize.y=a.y)),U.map===null||Q===!0||P===!0){const E=this.type!==pi?{minFilter:tn,magFilter:tn}:{};U.map!==null&&U.map.dispose(),U.map=new Ir(r.x,r.y,E),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const M=U.getViewportCount();for(let E=0;E<M;E++){const j=U.getViewport(E);s.set(a.x*j.x,a.y*j.y,a.x*j.z,a.y*j.w),Y.viewport(s),U.updateMatrices(ee,E),i=U.getFrustum(),S(R,F,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===pi&&x(U,F),U.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(w,C,W)};function x(k,R){const F=e.update(_);f.defines.VSM_SAMPLES!==k.blurSamples&&(f.defines.VSM_SAMPLES=k.blurSamples,m.defines.VSM_SAMPLES=k.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ir(r.x,r.y)),f.uniforms.shadow_pass.value=k.map.texture,f.uniforms.resolution.value=k.mapSize,f.uniforms.radius.value=k.radius,t.setRenderTarget(k.mapPass),t.clear(),t.renderBufferDirect(R,null,F,f,_,null),m.uniforms.shadow_pass.value=k.mapPass.texture,m.uniforms.resolution.value=k.mapSize,m.uniforms.radius.value=k.radius,t.setRenderTarget(k.map),t.clear(),t.renderBufferDirect(R,null,F,m,_,null)}function v(k,R,F,w){let C=null;const W=F.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(W!==void 0)C=W;else if(C=F.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=C.uuid,Q=R.uuid;let P=u[Y];P===void 0&&(P={},u[Y]=P);let V=P[Q];V===void 0&&(V=C.clone(),P[Q]=V,R.addEventListener("dispose",N)),C=V}if(C.visible=R.visible,C.wireframe=R.wireframe,w===pi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=t.properties.get(C);Y.light=F}return C}function S(k,R,F,w,C){if(k.visible===!1)return;if(k.layers.test(R.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===pi)&&(!k.frustumCulled||i.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,k.matrixWorld);const Q=e.update(k),P=k.material;if(Array.isArray(P)){const V=Q.groups;for(let $=0,ee=V.length;$<ee;$++){const U=V[$],D=P[U.materialIndex];if(D&&D.visible){const M=v(k,D,w,C);k.onBeforeShadow(t,k,R,F,Q,M,U),t.renderBufferDirect(F,null,Q,M,k,U),k.onAfterShadow(t,k,R,F,Q,M,U)}}}else if(P.visible){const V=v(k,P,w,C);k.onBeforeShadow(t,k,R,F,Q,V,null),t.renderBufferDirect(F,null,Q,V,k,null),k.onAfterShadow(t,k,R,F,Q,V,null)}}const Y=k.children;for(let Q=0,P=Y.length;Q<P;Q++)S(Y[Q],R,F,w,C)}function N(k){k.target.removeEventListener("dispose",N);for(const F in u){const w=u[F],C=k.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function c2(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const he=new Ut;let pe=null;const Pe=new Ut(0,0,0,0);return{setMask:function(Ne){pe!==Ne&&!L&&(t.colorMask(Ne,Ne,Ne,Ne),pe=Ne)},setLocked:function(Ne){L=Ne},setClear:function(Ne,et,it,ht,wt){wt===!0&&(Ne*=ht,et*=ht,it*=ht),he.set(Ne,et,it,ht),Pe.equals(he)===!1&&(t.clearColor(Ne,et,it,ht),Pe.copy(he))},reset:function(){L=!1,pe=null,Pe.set(-1,0,0,0)}}}function a(){let L=!1,he=null,pe=null,Pe=null;return{setTest:function(Ne){Ne?xe(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(Ne){he!==Ne&&!L&&(t.depthMask(Ne),he=Ne)},setFunc:function(Ne){if(pe!==Ne){switch(Ne){case N1:t.depthFunc(t.NEVER);break;case P1:t.depthFunc(t.ALWAYS);break;case L1:t.depthFunc(t.LESS);break;case Ll:t.depthFunc(t.LEQUAL);break;case D1:t.depthFunc(t.EQUAL);break;case U1:t.depthFunc(t.GEQUAL);break;case I1:t.depthFunc(t.GREATER);break;case F1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Ne}},setLocked:function(Ne){L=Ne},setClear:function(Ne){Pe!==Ne&&(t.clearDepth(Ne),Pe=Ne)},reset:function(){L=!1,he=null,pe=null,Pe=null}}}function s(){let L=!1,he=null,pe=null,Pe=null,Ne=null,et=null,it=null,ht=null,wt=null;return{setTest:function(tt){L||(tt?xe(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(tt){he!==tt&&!L&&(t.stencilMask(tt),he=tt)},setFunc:function(tt,Et,Gt){(pe!==tt||Pe!==Et||Ne!==Gt)&&(t.stencilFunc(tt,Et,Gt),pe=tt,Pe=Et,Ne=Gt)},setOp:function(tt,Et,Gt){(et!==tt||it!==Et||ht!==Gt)&&(t.stencilOp(tt,Et,Gt),et=tt,it=Et,ht=Gt)},setLocked:function(tt){L=tt},setClear:function(tt){wt!==tt&&(t.clearStencil(tt),wt=tt)},reset:function(){L=!1,he=null,pe=null,Pe=null,Ne=null,et=null,it=null,ht=null,wt=null}}}const o=new r,l=new a,u=new s,h=new WeakMap,p=new WeakMap;let f={},m={},y=new WeakMap,_=[],g=null,d=!1,x=null,v=null,S=null,N=null,k=null,R=null,F=null,w=new Ze(0,0,0),C=0,W=!1,Y=null,Q=null,P=null,V=null,$=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,D=0;const M=t.getParameter(t.VERSION);M.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(M)[1]),U=D>=1):M.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),U=D>=2);let E=null,j={};const I=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),J=new Ut().fromArray(I),ne=new Ut().fromArray(G);function Z(L,he,pe,Pe){const Ne=new Uint8Array(4),et=t.createTexture();t.bindTexture(L,et),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<pe;it++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(he+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return et}const le={};le[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(t.DEPTH_TEST),l.setFunc(Ll),oe(!1),T($f),xe(t.CULL_FACE),ge(Zi);function xe(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function me(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function Me(L,he){return m[L]!==he?(t.bindFramebuffer(L,he),m[L]=he,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function z(L,he){let pe=_,Pe=!1;if(L)if(pe=y.get(he),pe===void 0&&(pe=[],y.set(he,pe)),L.isWebGLMultipleRenderTargets){const Ne=L.texture;if(pe.length!==Ne.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let et=0,it=Ne.length;et<it;et++)pe[et]=t.COLOR_ATTACHMENT0+et;pe.length=Ne.length,Pe=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,Pe=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function $e(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const ce={[_r]:t.FUNC_ADD,[g1]:t.FUNC_SUBTRACT,[x1]:t.FUNC_REVERSE_SUBTRACT};if(i)ce[ep]=t.MIN,ce[tp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ce[ep]=L.MIN_EXT,ce[tp]=L.MAX_EXT)}const Te={[v1]:t.ZERO,[_1]:t.ONE,[y1]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[T1]:t.SRC_ALPHA_SATURATE,[w1]:t.DST_COLOR,[b1]:t.DST_ALPHA,[S1]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[E1]:t.ONE_MINUS_DST_COLOR,[M1]:t.ONE_MINUS_DST_ALPHA,[A1]:t.CONSTANT_COLOR,[C1]:t.ONE_MINUS_CONSTANT_COLOR,[k1]:t.CONSTANT_ALPHA,[R1]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(L,he,pe,Pe,Ne,et,it,ht,wt,tt){if(L===Zi){d===!0&&(me(t.BLEND),d=!1);return}if(d===!1&&(xe(t.BLEND),d=!0),L!==m1){if(L!==x||tt!==W){if((v!==_r||k!==_r)&&(t.blendEquation(t.FUNC_ADD),v=_r,k=_r),tt)switch(L){case Na:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jf:t.blendFunc(t.ONE,t.ONE);break;case Zf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Na:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Zf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,N=null,R=null,F=null,w.set(0,0,0),C=0,x=L,W=tt}return}Ne=Ne||he,et=et||pe,it=it||Pe,(he!==v||Ne!==k)&&(t.blendEquationSeparate(ce[he],ce[Ne]),v=he,k=Ne),(pe!==S||Pe!==N||et!==R||it!==F)&&(t.blendFuncSeparate(Te[pe],Te[Pe],Te[et],Te[it]),S=pe,N=Pe,R=et,F=it),(ht.equals(w)===!1||wt!==C)&&(t.blendColor(ht.r,ht.g,ht.b,wt),w.copy(ht),C=wt),x=L,W=!1}function Ve(L,he){L.side===xi?me(t.CULL_FACE):xe(t.CULL_FACE);let pe=L.side===hn;he&&(pe=!pe),oe(pe),L.blending===Na&&L.transparent===!1?ge(Zi):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Pe=L.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(L){Y!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Y=L)}function T(L){L!==f1?(xe(t.CULL_FACE),L!==Q&&(L===$f?t.cullFace(t.BACK):L===p1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),Q=L}function b(L){L!==P&&(U&&t.lineWidth(L),P=L)}function H(L,he,pe){L?(xe(t.POLYGON_OFFSET_FILL),(V!==he||$!==pe)&&(t.polygonOffset(he,pe),V=he,$=pe)):me(t.POLYGON_OFFSET_FILL)}function ae(L){L?xe(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+ee-1),E!==L&&(t.activeTexture(L),E=L)}function ie(L,he,pe){pe===void 0&&(E===null?pe=t.TEXTURE0+ee-1:pe=E);let Pe=j[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},j[pe]=Pe),(Pe.type!==L||Pe.texture!==he)&&(E!==pe&&(t.activeTexture(pe),E=pe),t.bindTexture(L,he||le[L]),Pe.type=L,Pe.texture=he)}function be(){const L=j[E];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){J.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function We(L){ne.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function st(L,he){let pe=p.get(he);pe===void 0&&(pe=new WeakMap,p.set(he,pe));let Pe=pe.get(L);Pe===void 0&&(Pe=t.getUniformBlockIndex(he,L.name),pe.set(L,Pe))}function je(L,he){const Pe=p.get(he).get(L);h.get(he)!==Pe&&(t.uniformBlockBinding(he,Pe,L.__bindingPointIndex),h.set(he,Pe))}function ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},E=null,j={},m={},y=new WeakMap,_=[],g=null,d=!1,x=null,v=null,S=null,N=null,k=null,R=null,F=null,w=new Ze(0,0,0),C=0,W=!1,Y=null,Q=null,P=null,V=null,$=null,J.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:xe,disable:me,bindFramebuffer:Me,drawBuffers:z,useProgram:$e,setBlending:ge,setMaterial:Ve,setFlipSided:oe,setCullFace:T,setLineWidth:b,setPolygonOffset:H,setScissorTest:ae,activeTexture:te,bindTexture:ie,unbindTexture:be,compressedTexImage2D:de,compressedTexImage3D:ve,texImage2D:ke,texImage3D:_e,updateUBOMapping:st,uniformBlockBinding:je,texStorage2D:Fe,texStorage3D:Ce,texSubImage2D:Ae,texSubImage3D:De,compressedTexSubImage2D:re,compressedTexSubImage3D:Be,scissor:Ie,viewport:We,reset:ue}}function u2(t,e,n,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,b){return m?new OffscreenCanvas(T,b):Ol("canvas")}function _(T,b,H,ae){let te=1;if((T.width>ae||T.height>ae)&&(te=ae/Math.max(T.width,T.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ie=b?bd:Math.floor,be=ie(te*T.width),de=ie(te*T.height);p===void 0&&(p=y(be,de));const ve=H?y(be,de):p;return ve.width=be,ve.height=de,ve.getContext("2d").drawImage(T,0,0,be,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+de+")."),ve}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function g(T){return Np(T.width)&&Np(T.height)}function d(T){return o?!1:T.wrapS!==Wn||T.wrapT!==Wn||T.minFilter!==tn&&T.minFilter!==Cn}function x(T,b){return T.generateMipmaps&&b&&T.minFilter!==tn&&T.minFilter!==Cn}function v(T){t.generateMipmap(T)}function S(T,b,H,ae,te=!1){if(o===!1)return b;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=b;if(b===t.RED&&(H===t.FLOAT&&(ie=t.R32F),H===t.HALF_FLOAT&&(ie=t.R16F),H===t.UNSIGNED_BYTE&&(ie=t.R8)),b===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.R8UI),H===t.UNSIGNED_SHORT&&(ie=t.R16UI),H===t.UNSIGNED_INT&&(ie=t.R32UI),H===t.BYTE&&(ie=t.R8I),H===t.SHORT&&(ie=t.R16I),H===t.INT&&(ie=t.R32I)),b===t.RG&&(H===t.FLOAT&&(ie=t.RG32F),H===t.HALF_FLOAT&&(ie=t.RG16F),H===t.UNSIGNED_BYTE&&(ie=t.RG8)),b===t.RGBA){const be=te?Dl:at.getTransfer(ae);H===t.FLOAT&&(ie=t.RGBA32F),H===t.HALF_FLOAT&&(ie=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ie=be===ct?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function N(T,b,H){return x(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==Cn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function k(T){return T===tn||T===np||T===Oc?t.NEAREST:t.LINEAR}function R(T){const b=T.target;b.removeEventListener("dispose",R),w(b),b.isVideoTexture&&h.delete(b)}function F(T){const b=T.target;b.removeEventListener("dispose",F),W(b)}function w(T){const b=i.get(T);if(b.__webglInit===void 0)return;const H=T.source,ae=f.get(H);if(ae){const te=ae[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(T),Object.keys(ae).length===0&&f.delete(H)}i.remove(T)}function C(T){const b=i.get(T);t.deleteTexture(b.__webglTexture);const H=T.source,ae=f.get(H);delete ae[b.__cacheKey],s.memory.textures--}function W(T){const b=T.texture,H=i.get(T),ae=i.get(b);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),s.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let ie=0;ie<H.__webglFramebuffer[te].length;ie++)t.deleteFramebuffer(H.__webglFramebuffer[te][ie]);else t.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)t.deleteFramebuffer(H.__webglFramebuffer[te]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let te=0,ie=b.length;te<ie;te++){const be=i.get(b[te]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),s.memory.textures--),i.remove(b[te])}i.remove(b),i.remove(T)}let Y=0;function Q(){Y=0}function P(){const T=Y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),Y+=1,T}function V(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function $(T,b){const H=i.get(T);if(T.isVideoTexture&&Ve(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const ae=T.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,T,b);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+b)}function ee(T,b){const H=i.get(T);if(T.version>0&&H.__version!==T.version){J(H,T,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+b)}function U(T,b){const H=i.get(T);if(T.version>0&&H.__version!==T.version){J(H,T,b);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+b)}function D(T,b){const H=i.get(T);if(T.version>0&&H.__version!==T.version){ne(H,T,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+b)}const M={[vd]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},E={[tn]:t.NEAREST,[np]:t.NEAREST_MIPMAP_NEAREST,[Oc]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[W1]:t.LINEAR_MIPMAP_NEAREST,[Xs]:t.LINEAR_MIPMAP_LINEAR},j={[iS]:t.NEVER,[cS]:t.ALWAYS,[rS]:t.LESS,[ex]:t.LEQUAL,[aS]:t.EQUAL,[lS]:t.GEQUAL,[sS]:t.GREATER,[oS]:t.NOTEQUAL};function I(T,b,H){if(H?(t.texParameteri(T,t.TEXTURE_WRAP_S,M[b.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,M[b.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,M[b.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,E[b.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,E[b.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==Wn||b.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,k(b.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,k(b.minFilter)),b.minFilter!==tn&&b.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===tn||b.minFilter!==Oc&&b.minFilter!==Xs||b.type===Gi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ks&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(T,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function G(T,b){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",R));const ae=b.source;let te=f.get(ae);te===void 0&&(te={},f.set(ae,te));const ie=V(b);if(ie!==T.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),te[ie].usedTimes++;const be=te[T.__cacheKey];be!==void 0&&(te[T.__cacheKey].usedTimes--,be.usedTimes===0&&C(b)),T.__cacheKey=ie,T.__webglTexture=te[ie].texture}return H}function J(T,b,H){let ae=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=t.TEXTURE_3D);const te=G(T,b),ie=b.source;n.bindTexture(ae,T.__webglTexture,t.TEXTURE0+H);const be=i.get(ie);if(ie.version!==be.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const de=at.getPrimaries(at.workingColorSpace),ve=b.colorSpace===Rn?null:at.getPrimaries(b.colorSpace),Ae=b.colorSpace===Rn||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=d(b)&&g(b.image)===!1;let re=_(b.image,De,!1,r.maxTextureSize);re=oe(b,re);const Be=g(re)||o,Fe=a.convert(b.format,b.colorSpace);let Ce=a.convert(b.type),ke=S(b.internalFormat,Fe,Ce,b.colorSpace,b.isVideoTexture);I(ae,b,Be);let _e;const Ie=b.mipmaps,We=o&&b.isVideoTexture!==!0&&ke!==Jg,st=be.__version===void 0||te===!0,je=N(b,re,Be);if(b.isDepthTexture)ke=t.DEPTH_COMPONENT,o?b.type===Gi?ke=t.DEPTH_COMPONENT32F:b.type===Hi?ke=t.DEPTH_COMPONENT24:b.type===Cr?ke=t.DEPTH24_STENCIL8:ke=t.DEPTH_COMPONENT16:b.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===kr&&ke===t.DEPTH_COMPONENT&&b.type!==bh&&b.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Hi,Ce=a.convert(b.type)),b.format===Ha&&ke===t.DEPTH_COMPONENT&&(ke=t.DEPTH_STENCIL,b.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Cr,Ce=a.convert(b.type))),st&&(We?n.texStorage2D(t.TEXTURE_2D,1,ke,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ke,re.width,re.height,0,Fe,Ce,null));else if(b.isDataTexture)if(Ie.length>0&&Be){We&&st&&n.texStorage2D(t.TEXTURE_2D,je,ke,Ie[0].width,Ie[0].height);for(let ue=0,L=Ie.length;ue<L;ue++)_e=Ie[ue],We?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,_e.width,_e.height,Fe,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,ue,ke,_e.width,_e.height,0,Fe,Ce,_e.data);b.generateMipmaps=!1}else We?(st&&n.texStorage2D(t.TEXTURE_2D,je,ke,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,Fe,Ce,re.data)):n.texImage2D(t.TEXTURE_2D,0,ke,re.width,re.height,0,Fe,Ce,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){We&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,ke,Ie[0].width,Ie[0].height,re.depth);for(let ue=0,L=Ie.length;ue<L;ue++)_e=Ie[ue],b.format!==Xn?Fe!==null?We?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,re.depth,Fe,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,ke,_e.width,_e.height,re.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,re.depth,Fe,Ce,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,ke,_e.width,_e.height,re.depth,0,Fe,Ce,_e.data)}else{We&&st&&n.texStorage2D(t.TEXTURE_2D,je,ke,Ie[0].width,Ie[0].height);for(let ue=0,L=Ie.length;ue<L;ue++)_e=Ie[ue],b.format!==Xn?Fe!==null?We?n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,_e.width,_e.height,Fe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,ke,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,_e.width,_e.height,Fe,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,ue,ke,_e.width,_e.height,0,Fe,Ce,_e.data)}else if(b.isDataArrayTexture)We?(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,ke,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Fe,Ce,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,re.width,re.height,re.depth,0,Fe,Ce,re.data);else if(b.isData3DTexture)We?(st&&n.texStorage3D(t.TEXTURE_3D,je,ke,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Fe,Ce,re.data)):n.texImage3D(t.TEXTURE_3D,0,ke,re.width,re.height,re.depth,0,Fe,Ce,re.data);else if(b.isFramebufferTexture){if(st)if(We)n.texStorage2D(t.TEXTURE_2D,je,ke,re.width,re.height);else{let ue=re.width,L=re.height;for(let he=0;he<je;he++)n.texImage2D(t.TEXTURE_2D,he,ke,ue,L,0,Fe,Ce,null),ue>>=1,L>>=1}}else if(Ie.length>0&&Be){We&&st&&n.texStorage2D(t.TEXTURE_2D,je,ke,Ie[0].width,Ie[0].height);for(let ue=0,L=Ie.length;ue<L;ue++)_e=Ie[ue],We?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Fe,Ce,_e):n.texImage2D(t.TEXTURE_2D,ue,ke,Fe,Ce,_e);b.generateMipmaps=!1}else We?(st&&n.texStorage2D(t.TEXTURE_2D,je,ke,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Fe,Ce,re)):n.texImage2D(t.TEXTURE_2D,0,ke,Fe,Ce,re);x(b,Be)&&v(ae),be.__version=ie.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ne(T,b,H){if(b.image.length!==6)return;const ae=G(T,b),te=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+H);const ie=i.get(te);if(te.version!==ie.__version||ae===!0){n.activeTexture(t.TEXTURE0+H);const be=at.getPrimaries(at.workingColorSpace),de=b.colorSpace===Rn?null:at.getPrimaries(b.colorSpace),ve=b.colorSpace===Rn||be===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,re=[];for(let ue=0;ue<6;ue++)!Ae&&!De?re[ue]=_(b.image[ue],!1,!0,r.maxCubemapSize):re[ue]=De?b.image[ue].image:b.image[ue],re[ue]=oe(b,re[ue]);const Be=re[0],Fe=g(Be)||o,Ce=a.convert(b.format,b.colorSpace),ke=a.convert(b.type),_e=S(b.internalFormat,Ce,ke,b.colorSpace),Ie=o&&b.isVideoTexture!==!0,We=ie.__version===void 0||ae===!0;let st=N(b,Be,Fe);I(t.TEXTURE_CUBE_MAP,b,Fe);let je;if(Ae){Ie&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,st,_e,Be.width,Be.height);for(let ue=0;ue<6;ue++){je=re[ue].mipmaps;for(let L=0;L<je.length;L++){const he=je[L];b.format!==Xn?Ce!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,he.width,he.height,Ce,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,he.width,he.height,Ce,ke,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,_e,he.width,he.height,0,Ce,ke,he.data)}}}else{je=b.mipmaps,Ie&&We&&(je.length>0&&st++,n.texStorage2D(t.TEXTURE_CUBE_MAP,st,_e,re[0].width,re[0].height));for(let ue=0;ue<6;ue++)if(De){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,re[ue].width,re[ue].height,Ce,ke,re[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,_e,re[ue].width,re[ue].height,0,Ce,ke,re[ue].data);for(let L=0;L<je.length;L++){const pe=je[L].image[ue].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,pe.width,pe.height,Ce,ke,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,_e,pe.width,pe.height,0,Ce,ke,pe.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce,ke,re[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,_e,Ce,ke,re[ue]);for(let L=0;L<je.length;L++){const he=je[L];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,Ce,ke,he.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,_e,Ce,ke,he.image[ue])}}}x(b,Fe)&&v(t.TEXTURE_CUBE_MAP),ie.__version=te.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Z(T,b,H,ae,te,ie){const be=a.convert(H.format,H.colorSpace),de=a.convert(H.type),ve=S(H.internalFormat,be,de,H.colorSpace);if(!i.get(b).__hasExternalTextures){const De=Math.max(1,b.width>>ie),re=Math.max(1,b.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,ve,De,re,b.depth,0,be,de,null):n.texImage2D(te,ie,ve,De,re,0,be,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),ge(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,te,i.get(H).__webglTexture,0,Te(b)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,te,i.get(H).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(T,b,H){if(t.bindRenderbuffer(t.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let ae=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ge(b)){const te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Gi?ae=t.DEPTH_COMPONENT32F:te.type===Hi&&(ae=t.DEPTH_COMPONENT24));const ie=Te(b);ge(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ae,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ae,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){const ae=Te(b);H&&ge(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,b.width,b.height):ge(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const ae=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<ae.length;te++){const ie=ae[te],be=a.convert(ie.format,ie.colorSpace),de=a.convert(ie.type),ve=S(ie.internalFormat,be,de,ie.colorSpace),Ae=Te(b);H&&ge(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ve,b.width,b.height):ge(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ve,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ve,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const ae=i.get(b.depthTexture).__webglTexture,te=Te(b);if(b.depthTexture.format===kr)ge(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(b.depthTexture.format===Ha)ge(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function me(T){const b=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");xe(b.__webglFramebuffer,T)}else if(H){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]=t.createRenderbuffer(),le(b.__webglDepthbuffer[ae],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),le(b.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(T,b,H){const ae=i.get(T);b!==void 0&&Z(ae.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&me(T)}function z(T){const b=T.texture,H=i.get(T),ae=i.get(b);T.addEventListener("dispose",F),T.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=b.version,s.memory.textures++);const te=T.isWebGLCubeRenderTarget===!0,ie=T.isWebGLMultipleRenderTargets===!0,be=g(T)||o;if(te){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let ve=0;ve<b.mipmaps.length;ve++)H.__webglFramebuffer[de][ve]=t.createFramebuffer()}else H.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)H.__webglFramebuffer[de]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const de=T.texture;for(let ve=0,Ae=de.length;ve<Ae;ve++){const De=i.get(de[ve]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ge(T)===!1){const de=ie?b:[b];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){const Ae=de[ve];H.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);const De=a.convert(Ae.format,Ae.colorSpace),re=a.convert(Ae.type),Be=S(Ae.internalFormat,De,re,Ae.colorSpace,T.isXRRenderTarget===!0),Fe=Te(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Be,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),le(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),I(t.TEXTURE_CUBE_MAP,b,be);for(let de=0;de<6;de++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Z(H.__webglFramebuffer[de][ve],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else Z(H.__webglFramebuffer[de],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(b,be)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const de=T.texture;for(let ve=0,Ae=de.length;ve<Ae;ve++){const De=de[ve],re=i.get(De);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),I(t.TEXTURE_2D,De,be),Z(H.__webglFramebuffer,T,De,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),x(De,be)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?de=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ae.__webglTexture),I(de,b,be),o&&b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Z(H.__webglFramebuffer[ve],T,b,t.COLOR_ATTACHMENT0,de,ve);else Z(H.__webglFramebuffer,T,b,t.COLOR_ATTACHMENT0,de,0);x(b,be)&&v(de),n.unbindTexture()}T.depthBuffer&&me(T)}function $e(T){const b=g(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0,te=H.length;ae<te;ae++){const ie=H[ae];if(x(ie,b)){const be=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(ie).__webglTexture;n.bindTexture(be,de),v(be),n.unbindTexture()}}}function ce(T){if(o&&T.samples>0&&ge(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,ae=T.height;let te=t.COLOR_BUFFER_BIT;const ie=[],be=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(T),ve=T.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ae=0;Ae<b.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){ie.push(t.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&ie.push(be);const De=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(De===!1&&(T.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),ve){const re=i.get(b[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,H,ae,0,0,H,ae,te,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ae=0;Ae<b.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const De=i.get(b[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Te(T){return Math.min(r.maxSamples,T.samples)}function ge(T){const b=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ve(T){const b=s.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function oe(T,b){const H=T.colorSpace,ae=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===yd||H!==Ti&&H!==Rn&&(at.getTransfer(H)===ct?o===!1?e.has("EXT_sRGB")===!0&&ae===Xn?(T.format=yd,T.minFilter=Cn,T.generateMipmaps=!1):b=nx.sRGBToLinear(b):(ae!==Xn||te!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=U,this.setTextureCube=D,this.rebindTextures=Me,this.setupRenderTarget=z,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ge}function d2(t,e,n){const i=n.isWebGL2;function r(a,s=Rn){let o;const l=at.getTransfer(s);if(a===er)return t.UNSIGNED_BYTE;if(a===Xg)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Kg)return t.UNSIGNED_SHORT_5_5_5_1;if(a===X1)return t.BYTE;if(a===K1)return t.SHORT;if(a===bh)return t.UNSIGNED_SHORT;if(a===Wg)return t.INT;if(a===Hi)return t.UNSIGNED_INT;if(a===Gi)return t.FLOAT;if(a===Ks)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===q1)return t.ALPHA;if(a===Xn)return t.RGBA;if(a===Y1)return t.LUMINANCE;if(a===$1)return t.LUMINANCE_ALPHA;if(a===kr)return t.DEPTH_COMPONENT;if(a===Ha)return t.DEPTH_STENCIL;if(a===yd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===J1)return t.RED;if(a===qg)return t.RED_INTEGER;if(a===Z1)return t.RG;if(a===Yg)return t.RG_INTEGER;if(a===$g)return t.RGBA_INTEGER;if(a===zc||a===Bc||a===jc||a===Hc)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===zc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===zc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Hc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ip||a===rp||a===ap||a===sp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ip)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===rp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ap)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===sp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Jg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===op||a===lp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===op)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===lp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===cp||a===up||a===dp||a===hp||a===fp||a===pp||a===mp||a===gp||a===xp||a===vp||a===_p||a===yp||a===Sp||a===bp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===cp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===up)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===dp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===gp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===xp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_p)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Sp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===bp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gc||a===Mp||a===wp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Gc)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===wp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Q1||a===Ep||a===Tp||a===Ap)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Gc)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ep)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ap)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Cr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class h2 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f2={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),d=this._getHandJoint(u,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,y=.005;u.inputState.pinching&&f>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class p2 extends qa{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,u=null,h=null,p=null,f=null,m=null,y=null;const _=n.getContextAttributes();let g=null,d=null;const x=[],v=[],S=new Ee;let N=null;const k=new kn;k.layers.enable(1),k.viewport=new Ut;const R=new kn;R.layers.enable(2),R.viewport=new Ut;const F=[k,R],w=new h2;w.layers.enable(1),w.layers.enable(2);let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let G=x[I];return G===void 0&&(G=new pu,x[I]=G),G.getTargetRaySpace()},this.getControllerGrip=function(I){let G=x[I];return G===void 0&&(G=new pu,x[I]=G),G.getGripSpace()},this.getHand=function(I){let G=x[I];return G===void 0&&(G=new pu,x[I]=G),G.getHandSpace()};function Y(I){const G=v.indexOf(I.inputSource);if(G===-1)return;const J=x[G];J!==void 0&&(J.update(I.inputSource,I.frame,u||s),J.dispatchEvent({type:I.type,data:I.inputSource}))}function Q(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",P);for(let I=0;I<x.length;I++){const G=v[I];G!==null&&(v[I]=null,x[I].disconnect(G))}C=null,W=null,e.setRenderTarget(g),m=null,f=null,p=null,r=null,d=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,n,G),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Ir(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,J=null,ne=null;_.depth&&(ne=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,G=_.stencil?Ha:kr,J=_.stencil?Cr:Hi);const Z={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:a};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Ir(f.textureWidth,f.textureHeight,{format:Xn,type:er,depthTexture:new px(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const le=e.properties.get(d);le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(I){for(let G=0;G<I.removed.length;G++){const J=I.removed[G],ne=v.indexOf(J);ne>=0&&(v[ne]=null,x[ne].disconnect(J))}for(let G=0;G<I.added.length;G++){const J=I.added[G];let ne=v.indexOf(J);if(ne===-1){for(let le=0;le<x.length;le++)if(le>=v.length){v.push(J),ne=le;break}else if(v[le]===null){v[le]=J,ne=le;break}if(ne===-1)break}const Z=x[ne];Z&&Z.connect(J)}}const V=new O,$=new O;function ee(I,G,J){V.setFromMatrixPosition(G.matrixWorld),$.setFromMatrixPosition(J.matrixWorld);const ne=V.distanceTo($),Z=G.projectionMatrix.elements,le=J.projectionMatrix.elements,xe=Z[14]/(Z[10]-1),me=Z[14]/(Z[10]+1),Me=(Z[9]+1)/Z[5],z=(Z[9]-1)/Z[5],$e=(Z[8]-1)/Z[0],ce=(le[8]+1)/le[0],Te=xe*$e,ge=xe*ce,Ve=ne/(-$e+ce),oe=Ve*-$e;G.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(oe),I.translateZ(Ve),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const T=xe+Ve,b=me+Ve,H=Te-oe,ae=ge+(ne-oe),te=Me*me/b*T,ie=z*me/b*T;I.projectionMatrix.makePerspective(H,ae,te,ie,T,b),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function U(I,G){G===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(G.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;w.near=R.near=k.near=I.near,w.far=R.far=k.far=I.far,(C!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,W=w.far);const G=I.parent,J=w.cameras;U(w,G);for(let ne=0;ne<J.length;ne++)U(J[ne],G);J.length===2?ee(w,k,R):w.projectionMatrix.copy(k.projectionMatrix),D(I,w,G)};function D(I,G,J){J===null?I.matrix.copy(G.matrixWorld):(I.matrix.copy(J.matrixWorld),I.matrix.invert(),I.matrix.multiply(G.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(G.projectionMatrix),I.projectionMatrixInverse.copy(G.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Sd*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)};let M=null;function E(I,G){if(h=G.getViewerPose(u||s),y=G,h!==null){const J=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ne=!1;J.length!==w.cameras.length&&(w.cameras.length=0,ne=!0);for(let Z=0;Z<J.length;Z++){const le=J[Z];let xe=null;if(m!==null)xe=m.getViewport(le);else{const Me=p.getViewSubImage(f,le);xe=Me.viewport,Z===0&&(e.setRenderTargetTextures(d,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(d))}let me=F[Z];me===void 0&&(me=new kn,me.layers.enable(Z),me.viewport=new Ut,F[Z]=me),me.matrix.fromArray(le.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(le.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(xe.x,xe.y,xe.width,xe.height),Z===0&&(w.matrix.copy(me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ne===!0&&w.cameras.push(me)}}for(let J=0;J<x.length;J++){const ne=v[J],Z=x[J];ne!==null&&Z!==void 0&&Z.update(ne,G,u||s)}M&&M(I,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),y=null}const j=new hx;j.setAnimationLoop(E),this.setAnimationLoop=function(I){M=I},this.dispose=function(){}}}function m2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,cx(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(g,d):d.isMeshToonMaterial?(a(g,d),p(g,d)):d.isMeshPhongMaterial?(a(g,d),h(g,d)):d.isMeshStandardMaterial?(a(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(a(g,d),y(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),_(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===hn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===hn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function g2(t,e,n,i){let r={},a={},s=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(y(x),S=h(x),r[x.id]=S,x.addEventListener("dispose",g));const N=v.program;i.updateUBOMapping(x,N);const k=e.render.frame;a[x.id]!==k&&(f(x),a[x.id]=k)}function h(x){const v=p();x.__bindingPointIndex=v;const S=t.createBuffer(),N=x.__size,k=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,k),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],S=x.uniforms,N=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let k=0,R=S.length;k<R;k++){const F=Array.isArray(S[k])?S[k]:[S[k]];for(let w=0,C=F.length;w<C;w++){const W=F[w];if(m(W,k,w,N)===!0){const Y=W.__offset,Q=Array.isArray(W.value)?W.value:[W.value];let P=0;for(let V=0;V<Q.length;V++){const $=Q[V],ee=_($);typeof $=="number"||typeof $=="boolean"?(W.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,Y+P,W.__data)):$.isMatrix3?(W.__data[0]=$.elements[0],W.__data[1]=$.elements[1],W.__data[2]=$.elements[2],W.__data[3]=0,W.__data[4]=$.elements[3],W.__data[5]=$.elements[4],W.__data[6]=$.elements[5],W.__data[7]=0,W.__data[8]=$.elements[6],W.__data[9]=$.elements[7],W.__data[10]=$.elements[8],W.__data[11]=0):($.toArray(W.__data,P),P+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,v,S,N){const k=x.value,R=v+"_"+S;if(N[R]===void 0)return typeof k=="number"||typeof k=="boolean"?N[R]=k:N[R]=k.clone(),!0;{const F=N[R];if(typeof k=="number"||typeof k=="boolean"){if(F!==k)return N[R]=k,!0}else if(F.equals(k)===!1)return F.copy(k),!0}return!1}function y(x){const v=x.uniforms;let S=0;const N=16;for(let R=0,F=v.length;R<F;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let C=0,W=w.length;C<W;C++){const Y=w[C],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,V=Q.length;P<V;P++){const $=Q[P],ee=_($),U=S%N;U!==0&&N-U<ee.boundary&&(S+=N-U),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ee.storage}}}const k=S%N;return k>0&&(S+=N-k),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},a={}}return{bind:l,update:u,dispose:d}}class yx{constructor(e={}){const{canvas:n=dS(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=s;const m=new Uint32Array(4),y=new Int32Array(4);let _=null,g=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const v=this;let S=!1,N=0,k=0,R=null,F=-1,w=null;const C=new Ut,W=new Ut;let Y=null;const Q=new Ze(0);let P=0,V=n.width,$=n.height,ee=1,U=null,D=null;const M=new Ut(0,0,V,$),E=new Ut(0,0,V,$);let j=!1;const I=new Eh;let G=!1,J=!1,ne=null;const Z=new Mt,le=new Ee,xe=new O,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return R===null?ee:1}let z=i;function $e(A,B){for(let K=0;K<A.length;K++){const q=A[K],X=n.getContext(q,B);if(X!==null)return X}return null}try{const A={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sh}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",he,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),z=$e(B,A),z===null)throw $e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,Te,ge,Ve,oe,T,b,H,ae,te,ie,be,de,ve,Ae,De,re,Be,Fe,Ce,ke,_e,Ie,We;function st(){ce=new Tw(z),Te=new yw(z,ce,e),ce.init(Te),_e=new d2(z,ce,Te),ge=new c2(z,ce,Te),Ve=new kw(z),oe=new YE,T=new u2(z,ce,ge,oe,Te,_e,Ve),b=new bw(v),H=new Ew(v),ae=new FS(z,Te),Ie=new vw(z,ce,ae,Te),te=new Aw(z,ae,Ve,Ie),ie=new Lw(z,te,ae,Ve),Fe=new Pw(z,Te,T),De=new Sw(oe),be=new qE(v,b,H,ce,Te,Ie,De),de=new m2(v,oe),ve=new JE,Ae=new i2(ce,Te),Be=new xw(v,b,H,ge,ie,f,l),re=new l2(v,ie,Te),We=new g2(z,Ve,Te,ge),Ce=new _w(z,ce,Ve,Te),ke=new Cw(z,ce,Ve,Te),Ve.programs=be.programs,v.capabilities=Te,v.extensions=ce,v.properties=oe,v.renderLists=ve,v.shadowMap=re,v.state=ge,v.info=Ve}st();const je=new p2(v,z);this.xr=je,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(V,$,!1))},this.getSize=function(A){return A.set(V,$)},this.setSize=function(A,B,K=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,$=B,n.width=Math.floor(A*ee),n.height=Math.floor(B*ee),K===!0&&(n.style.width=A+"px",n.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(V*ee,$*ee).floor()},this.setDrawingBufferSize=function(A,B,K){V=A,$=B,ee=K,n.width=Math.floor(A*K),n.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(M)},this.setViewport=function(A,B,K,q){A.isVector4?M.set(A.x,A.y,A.z,A.w):M.set(A,B,K,q),ge.viewport(C.copy(M).multiplyScalar(ee).floor())},this.getScissor=function(A){return A.copy(E)},this.setScissor=function(A,B,K,q){A.isVector4?E.set(A.x,A.y,A.z,A.w):E.set(A,B,K,q),ge.scissor(W.copy(E).multiplyScalar(ee).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){ge.setScissorTest(j=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(A=!0,B=!0,K=!0){let q=0;if(A){let X=!1;if(R!==null){const ye=R.texture.format;X=ye===$g||ye===Yg||ye===qg}if(X){const ye=R.texture.type,Re=ye===er||ye===Hi||ye===bh||ye===Cr||ye===Xg||ye===Kg,Le=Be.getClearColor(),Ue=Be.getClearAlpha(),Ge=Le.r,Oe=Le.g,ze=Le.b;Re?(m[0]=Ge,m[1]=Oe,m[2]=ze,m[3]=Ue,z.clearBufferuiv(z.COLOR,0,m)):(y[0]=Ge,y[1]=Oe,y[2]=ze,y[3]=Ue,z.clearBufferiv(z.COLOR,0,y))}else q|=z.COLOR_BUFFER_BIT}B&&(q|=z.DEPTH_BUFFER_BIT),K&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ve.dispose(),Ae.dispose(),oe.dispose(),b.dispose(),H.dispose(),ie.dispose(),Ie.dispose(),We.dispose(),be.dispose(),je.dispose(),je.removeEventListener("sessionstart",wt),je.removeEventListener("sessionend",tt),ne&&(ne.dispose(),ne=null),Et.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Ve.autoReset,B=re.enabled,K=re.autoUpdate,q=re.needsUpdate,X=re.type;st(),Ve.autoReset=A,re.enabled=B,re.autoUpdate=K,re.needsUpdate=q,re.type=X}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const B=A.target;B.removeEventListener("dispose",pe),Pe(B)}function Pe(A){Ne(A),oe.remove(A)}function Ne(A){const B=oe.get(A).programs;B!==void 0&&(B.forEach(function(K){be.releaseProgram(K)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,q,X,ye){B===null&&(B=me);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Le=Rt(A,B,K,q,X);ge.setMaterial(q,Re);let Ue=K.index,Ge=1;if(q.wireframe===!0){if(Ue=te.getWireframeAttribute(K),Ue===void 0)return;Ge=2}const Oe=K.drawRange,ze=K.attributes.position;let _t=Oe.start*Ge,fn=(Oe.start+Oe.count)*Ge;ye!==null&&(_t=Math.max(_t,ye.start*Ge),fn=Math.min(fn,(ye.start+ye.count)*Ge)),Ue!==null?(_t=Math.max(_t,0),fn=Math.min(fn,Ue.count)):ze!=null&&(_t=Math.max(_t,0),fn=Math.min(fn,ze.count));const Nt=fn-_t;if(Nt<0||Nt===1/0)return;Ie.setup(X,q,Le,K,Ue);let li,ft=Ce;if(Ue!==null&&(li=ae.get(Ue),ft=ke,ft.setIndex(li)),X.isMesh)q.wireframe===!0?(ge.setLineWidth(q.wireframeLinewidth*Me()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(X.isLine){let Xe=q.linewidth;Xe===void 0&&(Xe=1),ge.setLineWidth(Xe*Me()),X.isLineSegments?ft.setMode(z.LINES):X.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else X.isPoints?ft.setMode(z.POINTS):X.isSprite&&ft.setMode(z.TRIANGLES);if(X.isBatchedMesh)ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ft.renderInstances(_t,Nt,X.count);else if(K.isInstancedBufferGeometry){const Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,lc=Math.min(K.instanceCount,Xe);ft.renderInstances(_t,Nt,lc)}else ft.render(_t,Nt)};function et(A,B,K){A.transparent===!0&&A.side===xi&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Jn(A,B,K),A.side=rr,A.needsUpdate=!0,Jn(A,B,K),A.side=xi):Jn(A,B,K)}this.compile=function(A,B,K=null){K===null&&(K=A),g=Ae.get(K),g.init(),x.push(g),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),A!==K&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(v._useLegacyLights);const q=new Set;return A.traverse(function(X){const ye=X.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Le=ye[Re];et(Le,K,X),q.add(Le)}else et(ye,K,X),q.add(ye)}),x.pop(),g=null,q},this.compileAsync=function(A,B,K=null){const q=this.compile(A,B,K);return new Promise(X=>{function ye(){if(q.forEach(function(Re){oe.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){X(A);return}setTimeout(ye,10)}ce.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let it=null;function ht(A){it&&it(A)}function wt(){Et.stop()}function tt(){Et.start()}const Et=new hx;Et.setAnimationLoop(ht),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(A){it=A,je.setAnimationLoop(A),A===null?Et.stop():Et.start()},je.addEventListener("sessionstart",wt),je.addEventListener("sessionend",tt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(B),B=je.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,R),g=Ae.get(A,x.length),g.init(),x.push(g),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),I.setFromProjectionMatrix(Z),J=this.localClippingEnabled,G=De.init(this.clippingPlanes,J),_=ve.get(A,d.length),_.init(),d.push(_),Gt(A,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(U,D),this.info.render.frame++,G===!0&&De.beginShadows();const K=g.state.shadowsArray;if(re.render(K,A,B),G===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(_,A),g.setupLights(v._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let X=0,ye=q.length;X<ye;X++){const Re=q[X];jr(_,A,Re,Re.viewport)}}else jr(_,A,B);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,B),Ie.resetDefaultState(),F=-1,w=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Gt(A,B,K,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||I.intersectsSprite(A)){q&&xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const Re=ie.update(A),Le=A.material;Le.visible&&_.push(A,Re,Le,K,xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||I.intersectsObject(A))){const Re=ie.update(A),Le=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),xe.copy(Re.boundingSphere.center)),xe.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Le)){const Ue=Re.groups;for(let Ge=0,Oe=Ue.length;Ge<Oe;Ge++){const ze=Ue[Ge],_t=Le[ze.materialIndex];_t&&_t.visible&&_.push(A,Re,_t,K,xe.z,ze)}}else Le.visible&&_.push(A,Re,Le,K,xe.z,null)}}const ye=A.children;for(let Re=0,Le=ye.length;Re<Le;Re++)Gt(ye[Re],B,K,q)}function jr(A,B,K,q){const X=A.opaque,ye=A.transmissive,Re=A.transparent;g.setupLightsView(K),G===!0&&De.setGlobalState(v.clippingPlanes,K),ye.length>0&&$a(X,ye,B,K),q&&ge.viewport(C.copy(q)),X.length>0&&$n(X,B,K),ye.length>0&&$n(ye,B,K),Re.length>0&&$n(Re,B,K),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function $a(A,B,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const ye=Te.isWebGL2;ne===null&&(ne=new Ir(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Ks:er,minFilter:Xs,samples:ye?4:0})),v.getDrawingBufferSize(le),ye?ne.setSize(le.x,le.y):ne.setSize(bd(le.x),bd(le.y));const Re=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(Q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=Qi,$n(A,K,q),T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne);let Ue=!1;for(let Ge=0,Oe=B.length;Ge<Oe;Ge++){const ze=B[Ge],_t=ze.object,fn=ze.geometry,Nt=ze.material,li=ze.group;if(Nt.side===xi&&_t.layers.test(q.layers)){const ft=Nt.side;Nt.side=hn,Nt.needsUpdate=!0,Hr(_t,K,q,fn,Nt,li),Nt.side=ft,Nt.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne)),v.setRenderTarget(Re),v.setClearColor(Q,P),v.toneMapping=Le}function $n(A,B,K){const q=B.isScene===!0?B.overrideMaterial:null;for(let X=0,ye=A.length;X<ye;X++){const Re=A[X],Le=Re.object,Ue=Re.geometry,Ge=q===null?Re.material:q,Oe=Re.group;Le.layers.test(K.layers)&&Hr(Le,B,K,Ue,Ge,Oe)}}function Hr(A,B,K,q,X,ye){A.onBeforeRender(v,B,K,q,X,ye),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(v,B,K,q,A,ye),X.transparent===!0&&X.side===xi&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,v.renderBufferDirect(K,B,q,X,A,ye),X.side=rr,X.needsUpdate=!0,v.renderBufferDirect(K,B,q,X,A,ye),X.side=xi):v.renderBufferDirect(K,B,q,X,A,ye),A.onAfterRender(v,B,K,q,X,ye)}function Jn(A,B,K){B.isScene!==!0&&(B=me);const q=oe.get(A),X=g.state.lights,ye=g.state.shadowsArray,Re=X.state.version,Le=be.getParameters(A,X.state,ye,B,K),Ue=be.getProgramCacheKey(Le);let Ge=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?H:b).get(A.envMap||q.environment),Ge===void 0&&(A.addEventListener("dispose",pe),Ge=new Map,q.programs=Ge);let Oe=Ge.get(Ue);if(Oe!==void 0){if(q.currentProgram===Oe&&q.lightsStateVersion===Re)return Vr(A,Le),Oe}else Le.uniforms=be.getUniforms(A),A.onBuild(K,Le,v),A.onBeforeCompile(Le,v),Oe=be.acquireProgram(Le,Ue),Ge.set(Ue,Oe),q.uniforms=Le.uniforms;const ze=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=De.uniform),Vr(A,Le),q.needsLights=lr(A),q.lightsStateVersion=Re,q.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Oe,q.uniformsList=null,Oe}function Gr(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=ll.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Vr(A,B){const K=oe.get(A);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Rt(A,B,K,q,X){B.isScene!==!0&&(B=me),T.resetTextureUnits();const ye=B.fog,Re=q.isMeshStandardMaterial?B.environment:null,Le=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ti,Ue=(q.isMeshStandardMaterial?H:b).get(q.envMap||Re),Ge=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!K.morphAttributes.position,_t=!!K.morphAttributes.normal,fn=!!K.morphAttributes.color;let Nt=Qi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const li=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=li!==void 0?li.length:0,Xe=oe.get(q),lc=g.state.lights;if(G===!0&&(J===!0||A!==w)){const Mn=A===w&&q.id===F;De.setState(q,A,Mn)}let xt=!1;q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==lc.state.version||Xe.outputColorSpace!==Le||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||Xe.envMap!==Ue||q.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==De.numPlanes||Xe.numIntersection!==De.numIntersection)||Xe.vertexAlphas!==Ge||Xe.vertexTangents!==Oe||Xe.morphTargets!==ze||Xe.morphNormals!==_t||Xe.morphColors!==fn||Xe.toneMapping!==Nt||Te.isWebGL2===!0&&Xe.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,Xe.__version=q.version);let cr=Xe.currentProgram;xt===!0&&(cr=Jn(q,B,X));let Lh=!1,Ja=!1,cc=!1;const Vt=cr.getUniforms(),ur=Xe.uniforms;if(ge.useProgram(cr.program)&&(Lh=!0,Ja=!0,cc=!0),q.id!==F&&(F=q.id,Ja=!0),Lh||w!==A){Vt.setValue(z,"projectionMatrix",A.projectionMatrix),Vt.setValue(z,"viewMatrix",A.matrixWorldInverse);const Mn=Vt.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,xe.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&Vt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Vt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Ja=!0,cc=!0)}if(X.isSkinnedMesh){Vt.setOptional(z,X,"bindMatrix"),Vt.setOptional(z,X,"bindMatrixInverse");const Mn=X.skeleton;Mn&&(Te.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Vt.setValue(z,"boneTexture",Mn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Vt.setOptional(z,X,"batchingTexture"),Vt.setValue(z,"batchingTexture",X._matricesTexture,T));const uc=K.morphAttributes;if((uc.position!==void 0||uc.normal!==void 0||uc.color!==void 0&&Te.isWebGL2===!0)&&Fe.update(X,K,cr),(Ja||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Vt.setValue(z,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ur.envMap.value=Ue,ur.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ja&&(Vt.setValue(z,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&ki(ur,cc),ye&&q.fog===!0&&de.refreshFogUniforms(ur,ye),de.refreshMaterialUniforms(ur,q,ee,$,ne),ll.upload(z,Gr(Xe),ur,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ll.upload(z,Gr(Xe),ur,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Vt.setValue(z,"center",X.center),Vt.setValue(z,"modelViewMatrix",X.modelViewMatrix),Vt.setValue(z,"normalMatrix",X.normalMatrix),Vt.setValue(z,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Mn=q.uniformsGroups;for(let dc=0,Ex=Mn.length;dc<Ex;dc++)if(Te.isWebGL2){const Dh=Mn[dc];We.update(Dh,cr),We.bind(Dh,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function ki(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function lr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,B,K){oe.get(A.texture).__webglTexture=B,oe.get(A.depthTexture).__webglTexture=K;const q=oe.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=K===void 0,q.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const K=oe.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,K=0){R=A,N=B,k=K;let q=!0,X=null,ye=!1,Re=!1;if(A){const Ue=oe.get(A);Ue.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):Ue.__webglFramebuffer===void 0?T.setupRenderTarget(A):Ue.__hasExternalTextures&&T.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const Oe=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?X=Oe[B][K]:X=Oe[B],ye=!0):Te.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?X=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[K]:X=Oe,C.copy(A.viewport),W.copy(A.scissor),Y=A.scissorTest}else C.copy(M).multiplyScalar(ee).floor(),W.copy(E).multiplyScalar(ee).floor(),Y=j;if(ge.bindFramebuffer(z.FRAMEBUFFER,X)&&Te.drawBuffers&&q&&ge.drawBuffers(A,X),ge.viewport(C),ge.scissor(W),ge.setScissorTest(Y),ye){const Ue=oe.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,K)}else if(Re){const Ue=oe.get(A.texture),Ge=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,K||0,Ge)}F=-1},this.readRenderTargetPixels=function(A,B,K,q,X,ye,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){ge.bindFramebuffer(z.FRAMEBUFFER,Le);try{const Ue=A.texture,Ge=Ue.format,Oe=Ue.type;if(Ge!==Xn&&_e.convert(Ge)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===Ks&&(ce.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Oe!==er&&_e.convert(Oe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Gi&&(Te.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&K>=0&&K<=A.height-X&&z.readPixels(B,K,q,X,_e.convert(Ge),_e.convert(Oe),ye)}finally{const Ue=R!==null?oe.get(R).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,B,K=0){const q=Math.pow(2,-K),X=Math.floor(B.image.width*q),ye=Math.floor(B.image.height*q);T.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,A.x,A.y,X,ye),ge.unbindTexture()},this.copyTextureToTexture=function(A,B,K,q=0){const X=B.image.width,ye=B.image.height,Re=_e.convert(K.format),Le=_e.convert(K.type);T.setTexture2D(K,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,A.x,A.y,X,ye,Re,Le,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Re,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,A.x,A.y,Re,Le,B.image),q===0&&K.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,B,K,q,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=A.max.x-A.min.x+1,Re=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ue=_e.convert(q.format),Ge=_e.convert(q.type);let Oe;if(q.isData3DTexture)T.setTexture3D(q,0),Oe=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)T.setTexture2DArray(q,0),Oe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const ze=z.getParameter(z.UNPACK_ROW_LENGTH),_t=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fn=z.getParameter(z.UNPACK_SKIP_PIXELS),Nt=z.getParameter(z.UNPACK_SKIP_ROWS),li=z.getParameter(z.UNPACK_SKIP_IMAGES),ft=K.isCompressedTexture?K.mipmaps[X]:K.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?z.texSubImage3D(Oe,X,B.x,B.y,B.z,ye,Re,Le,Ue,Ge,ft.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Oe,X,B.x,B.y,B.z,ye,Re,Le,Ue,ft.data)):z.texSubImage3D(Oe,X,B.x,B.y,B.z,ye,Re,Le,Ue,Ge,ft),z.pixelStorei(z.UNPACK_ROW_LENGTH,ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,li),X===0&&q.generateMipmaps&&z.generateMipmap(Oe),ge.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){N=0,k=0,R=null,ge.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mh?"display-p3":"srgb",n.unpackColorSpace=at.workingColorSpace===ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Rr:Zg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rr?Ot:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class x2 extends yx{}x2.prototype.isWebGL1Renderer=!0;class Ah{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=n}clone(){return new Ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class v2 extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),a=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),n.push(a),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const a=i.length;let s;n?s=n:s=e*i[a-1];let o=0,l=a-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=i[r]-s,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const h=i[r],f=i[r+1]-h,m=(s-h)/f;return(r+m)/(a-1)}getTangent(e,n){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=n||(s.isVector2?new Ee:new O);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],a=[],s=[],o=new O,l=new Mt;for(let m=0;m<=e;m++){const y=m/e;r[m]=this.getTangentAt(y,new O)}a[0]=new O,s[0]=new O;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=u&&(u=h,i.set(1,0,0)),p<=u&&(u=p,i.set(0,1,0)),f<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),s[m]=s[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const y=Math.acos(zt(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(l.makeRotationAxis(o,y))}s[m].crossVectors(r[m],a[m])}if(n===!0){let m=Math.acos(zt(a[0].dot(a[e]),-1,1));m/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(m=-m);for(let y=1;y<=e;y++)a[y].applyMatrix4(l.makeRotationAxis(r[y],m*y)),s[y].crossVectors(r[y],a[y])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ch extends oi{constructor(e=0,n=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,n){const i=n||new Ee,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,m=u-this.aY;l=f*h-m*p+this.aX,u=f*p+m*h+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _2 extends Ch{constructor(e,n,i,r,a,s){super(e,n,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function kh(){let t=0,e=0,n=0,i=0;function r(a,s,o,l){t=a,e=o,n=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){r(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,h,p){let f=(s-a)/u-(o-a)/(u+h)+(o-s)/h,m=(o-s)/h-(l-s)/(h+p)+(l-o)/p;f*=h,m*=h,r(s,o,f,m)},calc:function(a){const s=a*a,o=s*a;return t+e*a+n*s+i*o}}}const Xo=new O,mu=new kh,gu=new kh,xu=new kh;class y2 extends oi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let u,h;this.closed||o>0?u=r[(o-1)%a]:(Xo.subVectors(r[0],r[1]).add(r[0]),u=Xo);const p=r[o%a],f=r[(o+1)%a];if(this.closed||o+2<a?h=r[(o+2)%a]:(Xo.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let y=Math.pow(u.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),y<1e-4&&(y=_),g<1e-4&&(g=_),mu.initNonuniformCatmullRom(u.x,p.x,f.x,h.x,y,_,g),gu.initNonuniformCatmullRom(u.y,p.y,f.y,h.y,y,_,g),xu.initNonuniformCatmullRom(u.z,p.z,f.z,h.z,y,_,g)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(u.x,p.x,f.x,h.x,this.tension),gu.initCatmullRom(u.y,p.y,f.y,h.y,this.tension),xu.initCatmullRom(u.z,p.z,f.z,h.z,this.tension));return i.set(mu.calc(l),gu.calc(l),xu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gm(t,e,n,i,r){const a=(i-e)*.5,s=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+a+s)*l+(-3*n+3*i-2*a-s)*o+a*t+n}function S2(t,e){const n=1-t;return n*n*e}function b2(t,e){return 2*(1-t)*t*e}function M2(t,e){return t*t*e}function As(t,e,n,i){return S2(t,e)+b2(t,n)+M2(t,i)}function w2(t,e){const n=1-t;return n*n*n*e}function E2(t,e){const n=1-t;return 3*n*n*t*e}function T2(t,e){return 3*(1-t)*t*t*e}function A2(t,e){return t*t*t*e}function Cs(t,e,n,i,r){return w2(t,e)+E2(t,n)+T2(t,i)+A2(t,r)}class Sx extends oi{constructor(e=new Ee,n=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ee){const i=n,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Cs(e,r.x,a.x,s.x,o.x),Cs(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C2 extends oi{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Cs(e,r.x,a.x,s.x,o.x),Cs(e,r.y,a.y,s.y,o.y),Cs(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bx extends oi{constructor(e=new Ee,n=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ee){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ee){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k2 extends oi{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mx extends oi{constructor(e=new Ee,n=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ee){const i=n,r=this.v0,a=this.v1,s=this.v2;return i.set(As(e,r.x,a.x,s.x),As(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R2 extends oi{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,a=this.v1,s=this.v2;return i.set(As(e,r.x,a.x,s.x),As(e,r.y,a.y,s.y),As(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wx extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ee){const i=n,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],u=r[s],h=r[s>r.length-2?r.length-1:s+1],p=r[s>r.length-3?r.length-1:s+2];return i.set(gm(o,l.x,u.x,h.x,p.x),gm(o,l.y,u.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ee().fromArray(r))}return this}}var xm=Object.freeze({__proto__:null,ArcCurve:_2,CatmullRomCurve3:y2,CubicBezierCurve:Sx,CubicBezierCurve3:C2,EllipseCurve:Ch,LineCurve:bx,LineCurve3:k2,QuadraticBezierCurve:Mx,QuadraticBezierCurve3:R2,SplineCurve:wx});class N2 extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xm[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),u=l===0?0:1-s/l;return o.getPointAt(u,n)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let u=0;u<l.length;u++){const h=l[u];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new xm[r.type]().fromJSON(r))}return this}}class P2 extends N2{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new bx(this.currentPoint.clone(),new Ee(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const a=new Mx(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,a,s){const o=new Sx(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r),new Ee(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new wx(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,n+l,i,r,a,s),this}absarc(e,n,i,r,a,s){return this.absellipse(e,n,i,i,r,a,s),this}ellipse(e,n,i,r,a,s,o,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,n+h,i,r,a,s,o,l),this}absellipse(e,n,i,r,a,s,o,l){const u=new Ch(e,n,i,r,a,s,o,l);if(this.curves.length>0){const p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Rh extends si{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=zt(r,0,Math.PI*2);const a=[],s=[],o=[],l=[],u=[],h=1/n,p=new O,f=new Ee,m=new O,y=new O,_=new O;let g=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,m.x=d*1,m.y=-g,m.z=d*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,m.x=d*1,m.y=-g,m.z=d*0,y.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(y)}for(let x=0;x<=n;x++){const v=i+x*h*r,S=Math.sin(v),N=Math.cos(v);for(let k=0;k<=e.length-1;k++){p.x=e[k].x*S,p.y=e[k].y,p.z=e[k].x*N,s.push(p.x,p.y,p.z),f.x=x/n,f.y=k/(e.length-1),o.push(f.x,f.y);const R=l[3*k+0]*S,F=l[3*k+1],w=l[3*k+0]*N;u.push(R,F,w)}}for(let x=0;x<n;x++)for(let v=0;v<e.length-1;v++){const S=v+x*e.length,N=S,k=S+e.length,R=S+e.length+1,F=S+1;a.push(N,k,F),a.push(R,F,k)}this.setIndex(a),this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.points,e.segments,e.phiStart,e.phiLength)}}class zn extends Rh{constructor(e=1,n=1,i=4,r=8){const a=new P2;a.absarc(0,-n/2,e,Math.PI*1.5,0),a.absarc(0,n/2,e,0,Math.PI*.5),super(a.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new zn(e.radius,e.length,e.capSegments,e.radialSegments)}}class Bl extends si{constructor(e=1,n=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),a=Math.floor(a);const h=[],p=[],f=[],m=[];let y=0;const _=[],g=i/2;let d=0;x(),s===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(m,2));function x(){const S=new O,N=new O;let k=0;const R=(n-e)/i;for(let F=0;F<=a;F++){const w=[],C=F/a,W=C*(n-e)+e;for(let Y=0;Y<=r;Y++){const Q=Y/r,P=Q*l+o,V=Math.sin(P),$=Math.cos(P);N.x=W*V,N.y=-C*i+g,N.z=W*$,p.push(N.x,N.y,N.z),S.set(V,R,$).normalize(),f.push(S.x,S.y,S.z),m.push(Q,1-C),w.push(y++)}_.push(w)}for(let F=0;F<r;F++)for(let w=0;w<a;w++){const C=_[w][F],W=_[w+1][F],Y=_[w+1][F+1],Q=_[w][F+1];h.push(C,W,Q),h.push(W,Y,Q),k+=6}u.addGroup(d,k,0),d+=k}function v(S){const N=y,k=new Ee,R=new O;let F=0;const w=S===!0?e:n,C=S===!0?1:-1;for(let Y=1;Y<=r;Y++)p.push(0,g*C,0),f.push(0,C,0),m.push(.5,.5),y++;const W=y;for(let Y=0;Y<=r;Y++){const P=Y/r*l+o,V=Math.cos(P),$=Math.sin(P);R.x=w*$,R.y=g*C,R.z=w*V,p.push(R.x,R.y,R.z),f.push(0,C,0),k.x=V*.5+.5,k.y=$*.5*C+.5,m.push(k.x,k.y),y++}for(let Y=0;Y<r;Y++){const Q=N+Y,P=W+Y;S===!0?h.push(P,P+1,Q):h.push(P+1,P,Q),F+=3}u.addGroup(d,F,S===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sr extends si{constructor(e=1,n=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let u=0;const h=[],p=new O,f=new O,m=[],y=[],_=[],g=[];for(let d=0;d<=i;d++){const x=[],v=d/i;let S=0;d===0&&s===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let N=0;N<=n;N++){const k=N/n;p.x=-e*Math.cos(r+k*a)*Math.sin(s+v*o),p.y=e*Math.cos(s+v*o),p.z=e*Math.sin(r+k*a)*Math.sin(s+v*o),y.push(p.x,p.y,p.z),f.copy(p).normalize(),_.push(f.x,f.y,f.z),g.push(k+S,1-v),x.push(u++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const v=h[d][x+1],S=h[d][x],N=h[d+1][x],k=h[d+1][x+1];(d!==0||s>0)&&m.push(v,S,k),(d!==i-1||l<Math.PI)&&m.push(S,N,k)}this.setIndex(m),this.setAttribute("position",new Jt(y,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class En extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nh extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class L2 extends Nh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const vu=new Mt,vm=new O,_m=new O;class D2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eh,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vm.setFromMatrixPosition(e.matrixWorld),n.position.copy(vm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U2 extends D2{constructor(){super(new fx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ym extends Nh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new U2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I2 extends Nh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class F2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Sm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Sm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);const bm=[{id:"fisik",title:"1. Simulasi Bullying Fisik",subtitle:"Mendorong & Mengintimidasi Secara Fisik",description:"Pelaku mendorong korban dengan agresif hingga terhuyung ke belakang. Kontak fisik kasar tanpa persetujuan melanggar hak keamanan pribadi di sekolah.",moral:"⚠️ Kontak fisik agresif adalah pelanggaran serius yang wajib dilaporkan kepada Guru BK atau Wali Kelas.",badge:"Bullying Fisik",badgeColor:"bg-rose-500",speechBully:"Sini uang jajanmu, jangan banyak alasan!",speechVictim:"Tolong jangan dorong aku..."},{id:"verbal",title:"2. Simulasi Bullying Verbal",subtitle:"Mengejek, Menunjuk & Menertawakan",description:"Pelaku menunjuk korban sambil tertawa mengejek julukan fisik buruk di depan teman-teman. Ejekan verbal berulang merusak mental dan harga diri.",moral:"⚠️ Ejekan bukan candaan jika membuat orang lain terluka, terhina, atau malu di depan umum.",badge:"Bullying Verbal",badgeColor:"bg-amber-500",speechBully:"Hahaha, dasar anak aneh ga punya teman!",speechVictim:"Kenapa kalian selalu mengejekku..."},{id:"sosial",title:"3. Simulasi Bullying Sosial",subtitle:"Mengucilkan & Berbisik Membicarakan Teman",description:"Dua siswa sengaja berbalik badan, berbisik-bisik rahasia sambil tertawa, dan melarang korban bergabung dalam kelompok belajar.",moral:"⚠️ Pengucilan sosial sengaja membuat korban merasa terasing, kesepian, dan memicu depresi berat.",badge:"Bullying Sosial",badgeColor:"bg-purple-500",speechBully:"Sstt, jangan ajak dia ya, kita jauhi saja!",speechVictim:"Bolehkah aku ikut belajar kelompok?..."},{id:"cyber",title:"4. Simulasi Cyberbullying",subtitle:"Meneror Lewat Pesan Digital Smartphone",description:"Pelaku mengetik pesan bernada hinaan di media sosial ponsel. Korban menerima pesan tersebut dan merasa cemas serta ketakutan.",moral:"⚠️ Jejak digital perundungan bersifat permanen dan dapat ditindak secara hukum (UU ITE).",badge:"Cyberbullying",badgeColor:"bg-cyan-600",speechBully:"Kukirim pesan hinaan biar dia malu di medsos!",speechVictim:"Ponselku penuh teror pesan kasar..."},{id:"pencegahan",title:"5. Simulasi Pencegahan (Upstander)",subtitle:"Saksi Berani Membela & Merangkul Korban",description:'Saksi tidak tinggal diam! Ia maju ke depan menghadang pelaku dengan isyarat tegas "STOP!" dan merangkul bahu korban untuk memberi rasa aman.',moral:"🛡️ Upstander Sejati: Satu tindakan keberanianmu dapat menghentikan perundungan dalam waktu kurang dari 10 detik!",badge:"Aksi Pencegahan",badgeColor:"bg-emerald-600",speechBully:"Ehh, ada yang berani ikut campur?!",speechVictim:"Terima kasih sudah membela dan menemaniku..."},{id:"penanganan",title:"6. Simulasi Penanganan (Lapor Guru)",subtitle:"Melapor Bersama ke Guru Pembimbing/BK",description:"Siswa korban dan saksi melapor resmi kepada Guru BK. Guru mendengarkan kronologi dengan empati dan siap memberikan perlindungan.",moral:"🌟 Melapor Bukan Mengadu: Melapor bertujuan menyelamatkan teman dan mewujudkan madrasah ramah anak.",badge:"Alur Penanganan",badgeColor:"bg-blue-600",speechBully:"Guru BK mendengarkan pengaduan...",speechVictim:"Pak Guru, kami ingin melaporkan kejadian tadi."}];function O2(){const t=we.useRef(null),[e,n]=we.useState(0),[i,r]=we.useState(!0),[a,s]=we.useState(1),o=we.useRef({sceneIdx:0,isPlaying:!0,speed:1,animTime:0});we.useEffect(()=>{o.current.sceneIdx=e,o.current.isPlaying=i,o.current.speed=a},[e,i,a]),we.useEffect(()=>{const f=t.current;if(!f)return;const m=f.clientWidth||550,y=f.clientHeight||360,_=new v2;_.background=new Ze(15857145),_.fog=new Ah(15857145,.035);const g=new kn(42,m/y,.1,80);g.position.set(0,3,7.2),g.lookAt(0,1.25,0);const d=new yx({antialias:!0,alpha:!1,powerPreference:"high-performance"});d.setSize(m,y),d.setPixelRatio(Math.min(window.devicePixelRatio,2.5)),d.shadowMap.enabled=!0,d.shadowMap.type=jg,d.toneMapping=Gg,d.toneMappingExposure=1.15,f.appendChild(d.domElement);const x=new I2(16777215,.85);_.add(x);const v=new L2(16776171,14870768,.5);v.position.set(0,10,0),_.add(v);const S=new ym(16775149,1.1);S.position.set(5,9,6),S.castShadow=!0,S.shadow.mapSize.width=2048,S.shadow.mapSize.height=2048,S.shadow.camera.near=.5,S.shadow.camera.far=22,S.shadow.camera.left=-5.5,S.shadow.camera.right=5.5,S.shadow.camera.top=5.5,S.shadow.camera.bottom=-5.5,S.shadow.bias=-6e-4,_.add(S);const N=new ym(3718648,.65);N.position.set(-6,4,-4),_.add(N);const k=new qs(16,16),R=new En({color:14870768,roughness:.6,metalness:.05}),F=new nt(k,R);F.rotation.x=-Math.PI/2,F.receiveShadow=!0,_.add(F);const w=new qs(16,6.5),C=new En({color:16317180,roughness:.85}),W=new nt(w,C);W.position.set(0,3.2,-3.8),W.receiveShadow=!0,_.add(W);const Y=new Vn(6.4,2.4,.08),Q=new En({color:16777215,roughness:.2,metalness:.1}),P=new nt(Y,Q);P.position.set(0,3.3,-3.74),P.castShadow=!0,P.receiveShadow=!0,_.add(P);const V=new Vn(6.55,2.55,.05),$=new En({color:1981066,roughness:.5}),ee=new nt(V,$);ee.position.set(0,3.3,-3.76),_.add(ee);function U({shirtColor:oe=1981066,pantsColor:T=1976635,skinColor:b=16768964,hairColor:H=1841431,roleName:ae="Siswa",isTeacher:te=!1,hasHijab:ie=!1}){const be=new Lt;be.name=ae;const de=new En({color:b,roughness:.55,metalness:.02}),ve=new En({color:oe,roughness:.65}),Ae=new En({color:T,roughness:.75}),De=new En({color:988970,roughness:.8}),re=new En({color:H,roughness:.7}),Be=new Lt;Be.position.y=1.08,be.add(Be);const Fe=new nt(new Bl(.24,.22,.24,16),Ae);Fe.castShadow=!0,Be.add(Fe);const Ce=new Lt;Ce.position.y=.14,Be.add(Ce);const ke=new nt(new zn(.26,.32,12,16),ve);if(ke.position.y=.26,ke.castShadow=!0,Ce.add(ke),te){const Rt=new nt(new Vn(.12,.16,.02),new En({color:1096065}));Rt.position.set(.12,.26,.28),Ce.add(Rt)}else{const Rt=new Vn(.08,.34,.04),ki=new En({color:165063}),lr=new nt(Rt,ki);lr.position.set(0,.26,.27),Ce.add(lr)}const _e=new Lt;_e.position.y=.52,Ce.add(_e);const Ie=new nt(new Bl(.09,.1,.12,14),de);Ie.position.y=.06,_e.add(Ie);const We=new Lt;We.position.y=.2,_e.add(We);const st=new nt(new Sr(.26,24,24),de);if(st.position.y=.18,st.scale.set(1,1.08,1),st.castShadow=!0,We.add(st),ie){const Rt=new nt(new Sr(.3,24,24),new En({color:16317180,roughness:.85}));Rt.position.y=.2,Rt.scale.set(1.06,1.15,1.12),Rt.castShadow=!0,We.add(Rt)}else{const Rt=new nt(new Sr(.28,20,20),re);Rt.position.set(0,.24,-.02),Rt.scale.set(1.05,1.06,1.1),Rt.castShadow=!0,We.add(Rt)}const je=new zl({color:16777215}),ue=new zl({color:988970}),L=Rt=>{const ki=new Lt;ki.position.set(Rt,.18,.23);const lr=new nt(new Sr(.042,12,12),je);lr.scale.set(1,1.2,.5),ki.add(lr);const A=new nt(new Sr(.024,10,10),ue);return A.position.set(0,0,.022),A.scale.set(1,1,.4),ki.add(A),ki};We.add(L(-.09)),We.add(L(.09));const he=new Lt;he.position.set(-.36,.44,0),Ce.add(he);const pe=new nt(new zn(.065,.24,8,12),ve);pe.position.y=-.14,pe.castShadow=!0,he.add(pe);const Pe=new Lt;Pe.position.y=-.28,he.add(Pe);const Ne=new nt(new zn(.055,.22,8,12),de);Ne.position.y=-.13,Ne.castShadow=!0,Pe.add(Ne);const et=new Lt;et.position.set(.36,.44,0),Ce.add(et);const it=new nt(new zn(.065,.24,8,12),ve);it.position.y=-.14,it.castShadow=!0,et.add(it);const ht=new Lt;ht.position.y=-.28,et.add(ht);const wt=new nt(new zn(.055,.22,8,12),de);wt.position.y=-.13,wt.castShadow=!0,ht.add(wt);const tt=new Lt;tt.position.set(-.13,-.1,0),Be.add(tt);const Et=new nt(new zn(.08,.38,8,12),Ae);Et.position.y=-.24,Et.castShadow=!0,tt.add(Et);const Gt=new Lt;Gt.position.y=-.44,tt.add(Gt);const jr=new nt(new zn(.07,.38,8,12),Ae);jr.position.y=-.22,jr.castShadow=!0,Gt.add(jr);const $a=new nt(new Vn(.12,.09,.22),De);$a.position.set(0,-.46,.05),$a.castShadow=!0,Gt.add($a);const $n=new Lt;$n.position.set(.13,-.1,0),Be.add($n);const Hr=new nt(new zn(.08,.38,8,12),Ae);Hr.position.y=-.24,Hr.castShadow=!0,$n.add(Hr);const Jn=new Lt;Jn.position.y=-.44,$n.add(Jn);const Gr=new nt(new zn(.07,.38,8,12),Ae);Gr.position.y=-.22,Gr.castShadow=!0,Jn.add(Gr);const Vr=new nt(new Vn(.12,.09,.22),De);return Vr.position.set(0,-.46,.05),Vr.castShadow=!0,Jn.add(Vr),{root:be,pelvis:Be,spine:Ce,neck:_e,head:We,leftShoulder:he,leftElbow:Pe,rightShoulder:et,rightElbow:ht,leftHip:tt,leftKnee:Gt,rightHip:$n,rightKnee:Jn}}const D=U({shirtColor:1981066,pantsColor:1976635,skinColor:16498468,hairColor:1579035,roleName:"Pelaku"});_.add(D.root);const M=U({shirtColor:165063,pantsColor:3359061,skinColor:16772565,hairColor:4674921,roleName:"Korban"});_.add(M.root);const E=U({shirtColor:1096065,pantsColor:413243,skinColor:16701354,hairColor:1976635,roleName:"Saksi",hasHijab:!0});_.add(E.root);const j=U({shirtColor:9584654,pantsColor:1579035,skinColor:16638023,hairColor:592139,roleName:"Guru BK",isTeacher:!0});_.add(j.root);function I(){[D,M,E,j].forEach(oe=>{oe.root.position.set(0,0,0),oe.root.rotation.set(0,0,0),oe.pelvis.position.set(0,1.08,0),oe.pelvis.rotation.set(0,0,0),oe.spine.rotation.set(0,0,0),oe.head.rotation.set(0,0,0),oe.leftShoulder.rotation.set(0,0,.15),oe.leftElbow.rotation.set(0,0,0),oe.rightShoulder.rotation.set(0,0,-.15),oe.rightElbow.rotation.set(0,0,0),oe.leftHip.rotation.set(0,0,0),oe.leftKnee.rotation.set(0,0,0),oe.rightHip.rotation.set(0,0,0),oe.rightKnee.rotation.set(0,0,0),oe.root.visible=!1})}let G=!1,J=0,ne=0,Z=0,le=.32;const xe=oe=>{G=!0,J=oe.clientX,ne=oe.clientY},me=oe=>{if(!G)return;const T=oe.clientX-J,b=oe.clientY-ne;J=oe.clientX,ne=oe.clientY,Z-=T*.007,le=Math.max(.12,Math.min(1.1,le+b*.007))},Me=()=>{G=!1};f.addEventListener("mousedown",xe),window.addEventListener("mousemove",me),window.addEventListener("mouseup",Me);const z=oe=>{oe.touches.length===1&&(G=!0,J=oe.touches[0].clientX,ne=oe.touches[0].clientY)},$e=oe=>{if(!G||oe.touches.length!==1)return;const T=oe.touches[0].clientX-J,b=oe.touches[0].clientY-ne;J=oe.touches[0].clientX,ne=oe.touches[0].clientY,Z-=T*.009,le=Math.max(.12,Math.min(1.1,le+b*.009))};f.addEventListener("touchstart",z,{passive:!0}),window.addEventListener("touchmove",$e,{passive:!0}),window.addEventListener("touchend",Me);let ce,Te=new F2;const ge=()=>{ce=requestAnimationFrame(ge);const oe=Te.getDelta(),T=o.current;T.isPlaying&&(T.animTime+=oe*T.speed);const b=T.animTime,H=T.sceneIdx,ae=7.2;if(g.position.x=Math.sin(Z)*Math.cos(le)*ae,g.position.y=Math.sin(le)*ae+1.25,g.position.z=Math.cos(Z)*Math.cos(le)*ae,g.lookAt(0,1.25,0),I(),H===0){D.root.visible=!0,M.root.visible=!0;const te=b%4.2;if(D.root.position.set(-1.25,0,0),D.root.rotation.y=Math.PI/2.1,M.root.position.set(1,0,0),M.root.rotation.y=-Math.PI/2.1,te<1.6){const ie=Math.sin(te/1.6*(Math.PI/2));D.root.position.x=-1.5+ie*.55,D.rightShoulder.rotation.x=ie*1.1,D.leftShoulder.rotation.x=ie*1}else if(te<2.8){const ie=(te-1.6)/1.2,be=Math.sin(ie*Math.PI)*.6;M.root.position.x=1+be,M.spine.rotation.z=-be*.5,M.head.rotation.z=-be*.4,M.leftShoulder.rotation.z=.8,M.rightShoulder.rotation.z=-.8,D.rightShoulder.rotation.x=1.2,D.leftShoulder.rotation.x=1.1}else M.root.position.x=1.3,M.head.rotation.x=.35,M.spine.rotation.x=.15,D.leftShoulder.rotation.x=.5,D.rightShoulder.rotation.x=.5}else if(H===1){D.root.visible=!0,M.root.visible=!0;const te=b%3.2;D.root.position.set(-1.2,0,0),D.root.rotation.y=Math.PI/2.3,M.root.position.set(1.2,0,0),M.root.rotation.y=-Math.PI/2.4,D.rightShoulder.rotation.x=1.4+Math.sin(te*4)*.08,D.head.rotation.y=Math.sin(te*3)*.12,D.spine.rotation.x=Math.sin(te*6)*.08,M.head.rotation.x=.38,M.leftShoulder.rotation.z=1.1,M.rightShoulder.rotation.z=-1.1,M.spine.rotation.x=.22}else H===2?(D.root.visible=!0,E.root.visible=!0,M.root.visible=!0,D.root.position.set(-.6,0,-.3),D.root.rotation.y=Math.PI/4,E.root.position.set(.4,0,-.3),E.root.rotation.y=-Math.PI/4,D.head.rotation.y=.35+Math.sin(b*2)*.06,E.head.rotation.y=-.35,M.root.position.set(1.7,0,.7),M.root.rotation.y=-Math.PI/1.9,b%4<2?(M.leftShoulder.rotation.x=1.1,M.head.rotation.x=-.1):(M.leftShoulder.rotation.x=.1,M.head.rotation.x=.42,M.spine.rotation.x=.2)):H===3?(D.root.visible=!0,M.root.visible=!0,D.root.position.set(-1.3,0,.2),D.root.rotation.y=Math.PI/3,D.rightShoulder.rotation.x=.85,D.leftShoulder.rotation.x=.85,D.rightElbow.rotation.y=-.7,D.leftElbow.rotation.y=.7,D.head.rotation.x=.35,M.root.position.set(1.3,0,0),M.root.rotation.y=-Math.PI/3,M.head.rotation.x=.25+Math.sin(b*2)*.05,M.spine.rotation.x=.15):H===4?(D.root.visible=!0,M.root.visible=!0,E.root.visible=!0,D.root.position.set(-1.8,0,0),D.root.rotation.y=Math.PI/2,D.rightShoulder.rotation.x=.4,E.root.position.set(-.35,0,.3),E.root.rotation.y=Math.PI/2.2,E.leftShoulder.rotation.x=1.45,E.leftShoulder.rotation.z=.15,E.rightShoulder.rotation.x=.45,E.rightShoulder.rotation.z=-.45,M.root.position.set(1.2,0,.2),M.root.rotation.y=-Math.PI/2,M.head.rotation.x=0):H===5&&(j.root.visible=!0,M.root.visible=!0,E.root.visible=!0,j.root.position.set(1.4,0,0),j.root.rotation.y=-Math.PI/2.2,j.head.rotation.x=Math.sin(b*1.8)*.06+.08,M.root.position.set(-.9,0,.3),M.root.rotation.y=Math.PI/2.5,E.root.position.set(-1.7,0,.2),E.root.rotation.y=Math.PI/2.8);d.render(_,g)};ge();const Ve=()=>{if(!f)return;const oe=f.clientWidth,T=f.clientHeight;g.aspect=oe/T,g.updateProjectionMatrix(),d.setSize(oe,T)};return window.addEventListener("resize",Ve),()=>{cancelAnimationFrame(ce),window.removeEventListener("resize",Ve),f.removeEventListener("mousedown",xe),window.removeEventListener("mousemove",me),window.removeEventListener("mouseup",Me),f.removeEventListener("touchstart",z),window.removeEventListener("touchmove",$e),window.removeEventListener("touchend",Me),d.domElement&&f.contains(d.domElement)&&f.removeChild(d.domElement),d.dispose()}},[]);const l=bm[e],u=f=>{qe(),n(f),o.current.animTime=0},h=()=>{qe(),r(!i)},p=()=>{qe(),o.current.animTime=0,r(!0)};return c.jsxs("div",{className:"flex flex-col h-full bg-slate-900/5 rounded-2xl border-2 border-slate-800 overflow-hidden shadow-inner select-none",children:[c.jsx("div",{className:"bg-slate-900 text-white p-1.5 sm:p-2 flex items-center gap-1 sm:gap-1.5 overflow-x-auto cartoon-scroll shrink-0",children:bm.map((f,m)=>c.jsx("button",{onClick:()=>u(m),className:`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-black transition-all whitespace-nowrap flex items-center gap-1 sm:gap-1.5 border shrink-0 ${e===m?`${f.badgeColor} text-white border-white shadow-md scale-105`:"bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700"}`,children:c.jsx("span",{children:f.id.toUpperCase()})},f.id))}),c.jsxs("div",{className:"relative flex-1 min-h-[200px] sm:min-h-[260px] md:min-h-[290px] w-full bg-slate-100 overflow-hidden group",children:[c.jsx("div",{ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing"}),c.jsxs("div",{className:"absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 pointer-events-none shadow",children:[c.jsx(vy,{size:11,className:"text-sky-400"}),c.jsx("span",{children:"Putar 3D: geser layar"})]}),c.jsxs("div",{className:"absolute top-2 right-2 bg-white/95 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow border border-slate-300 flex items-center gap-1 sm:gap-1.5",children:[c.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${l.badgeColor} animate-ping`}),c.jsx("span",{className:"text-[10px] sm:text-xs font-black text-slate-900",children:l.badge})]}),c.jsx("div",{className:"absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 bg-white/95 border-2 border-slate-900 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl shadow-xl text-center max-w-[85%] sm:max-w-xs pointer-events-none animate-float-gentle",children:c.jsxs("span",{className:"text-[10px] sm:text-[11px] font-black text-slate-900 block leading-tight",children:['💬 "',l.speechBully,'"']})}),c.jsxs("div",{className:"absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/90 backdrop-blur-md text-white px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 shadow-2xl border border-slate-700",children:[c.jsx("button",{onClick:h,className:"p-1 hover:bg-white/20 rounded-lg transition text-white",title:i?"Jeda Animasi":"Putar Animasi",children:i?c.jsx(Ry,{size:14}):c.jsx(Dy,{size:14,fill:"white"})}),c.jsx("button",{onClick:p,className:"p-1 hover:bg-white/20 rounded-lg transition text-slate-300 hover:text-white",title:"Ulangi Animasi",children:c.jsx(ri,{size:13})}),c.jsx("div",{className:"h-3 w-px bg-slate-700"}),c.jsx("div",{className:"flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px] font-black",children:[.5,1,1.5].map(f=>c.jsxs("button",{onClick:()=>{qe(),s(f)},className:`px-1 py-0.5 rounded transition ${a===f?"bg-sky-500 text-white":"text-slate-400 hover:text-white"}`,children:[f,"x"]},f))})]})]}),c.jsx("div",{className:"p-2.5 sm:p-3.5 bg-white border-t-2 border-slate-800 transition-all shrink-0",children:c.jsxs("div",{className:"flex items-start gap-2",children:[c.jsx("div",{className:"p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-blue-100 text-blue-900 shrink-0 mt-0.5 border border-blue-300",children:c.jsx(Ty,{size:14,className:"sm:w-4 sm:h-4"})}),c.jsxs("div",{className:"space-y-0.5 min-w-0",children:[c.jsx("h4",{className:"font-black text-[11px] sm:text-xs text-slate-900 truncate",children:l.title}),c.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-700 leading-snug line-clamp-2 sm:line-clamp-none",children:l.description}),c.jsx("div",{className:"pt-0.5 text-[10px] sm:text-[11px] font-bold text-rose-700",children:l.moral})]})]})})]})}const ds=[{id:"d1",text:"Menendang bangku teman hingga ia terjatuh saat hendak duduk.",correctCategory:"fisik",hint:"Melibatkan kontak tubuh langsung dan benda fisik",explanation:"Ini adalah bullying fisik karena menimbulkan potensi luka fisik dan merusak rasa aman lingkungan belajar."},{id:"d2",text:"Meneriakkan julukan buruk 'si cungkring bodoh' setiap kali teman lewat koridor.",correctCategory:"verbal",hint:"Menggunakan kata-kata lisan bernada hinaan",explanation:"Ini adalah bullying verbal karena menyerang kondisi fisik dan kecerdasan lewat ucapan menghina."},{id:"d3",text:"Membuat grup WA kelas lalu dengan sengaja mengeluarkan satu orang teman agar ia tidak tahu tugas kelompok.",correctCategory:"sosial",hint:"Mengucilkan dan merusak hubungan pertemanan",explanation:"Ini adalah bullying sosial/relasional yang bertujuan mengisolasi dan mendiskriminasi teman dari pergaulan."},{id:"d4",text:"Mengedit foto wajah teman menjadi meme tidak senonoh lalu menyebarkannya di TikTok.",correctCategory:"cyber",hint:"Menggunakan perangkat digital dan internet",explanation:"Ini adalah cyberbullying karena menggunakan teknologi untuk merusak martabat dan reputasi korban secara luas."},{id:"d5",text:"Memaksa teman membelikan jajan di kantin dengan ancaman akan dikunci di toilet jika menolak.",correctCategory:"fisik",hint:"Pemerasan disertai ancaman fisik",explanation:"Pemerasan dan ancaman kurungan fisik termasuk kategori bullying fisik dan intimidasi."},{id:"d6",text:"Menyebarkan kabar bohong bahwa teman mencuri uang infaq madrasah agar dijauhi teman sekelas.",correctCategory:"sosial",hint:"Fitnah untuk merusak reputasi sosial",explanation:"Fitnah terencana untuk merusak reputasi pertemanan merupakan bentuk bullying sosial/relasional."},{id:"d7",text:"Mengirimkan puluhan pesan spam berisi sumpah serapah di DM Instagram teman pada tengah malam.",correctCategory:"cyber",hint:"Pelecehan lewat platform media sosial",explanation:"Pengiriman pesan teror digital adalah bentuk pelecehan siber (cyber harassment)."},{id:"d8",text:"Meniru gaya bicara teman yang cadel atau gagap di depan kelas untuk ditertawakan bersama-sama.",correctCategory:"verbal",hint:"Meniru kekurangan bicara untuk dijadikan bahan olok-olok",explanation:"Meniru kekurangan fisik atau cara bicara teman adalah pelecehan verbal yang melukai rasa percaya diri."}],z2=[{id:"fisik",name:"Bullying Fisik",icon:"UserX",color:"from-red-500 to-rose-600",borderColor:"border-rose-400"},{id:"verbal",name:"Bullying Verbal",icon:"MessageSquareWarning",color:"from-amber-500 to-orange-600",borderColor:"border-amber-400"},{id:"sosial",name:"Bullying Sosial",icon:"Users",color:"from-purple-500 to-indigo-600",borderColor:"border-purple-400"},{id:"cyber",name:"Cyberbullying",icon:"Smartphone",color:"from-blue-500 to-cyan-600",borderColor:"border-cyan-400"}],_u=[{id:"c1",text:"Kamu ga pantas di sekolah ini!",toxic:!0,kindReplacement:"Setiap anak berhak belajar dengan nyaman!"},{id:"c2",text:"Semangat ya belajarnya, kamu pasti bisa!",toxic:!1,kindReplacement:null},{id:"c3",text:"Hapus akun kamu, mukamu jelek banget!",toxic:!0,kindReplacement:"Kita semua unik dan berharga apa adanya."},{id:"c4",text:"Yuk nanti istirahat makan bareng di kantin.",toxic:!1,kindReplacement:null},{id:"c5",text:"Gaya lu sok pinter banget deh, jijik!",toxic:!0,kindReplacement:"Apresiasi kerja keras teman adalah hal mulia."},{id:"c6",text:"Jangan temenin dia, dia bau dan miskin!",toxic:!0,kindReplacement:"Persahabatan sejati tidak memandang latar belakang."},{id:"c7",text:"Terima kasih sudah mau bantu jelasin PR tadi ya.",toxic:!1,kindReplacement:null},{id:"c8",text:"Awas lu besok pulang sekolah kita hadang!",toxic:!0,kindReplacement:"Kekerasan tidak menyelesaikan masalah apa pun."}],yu={initialScene:{id:"scene_start",speaker:"Narator",dialogue:"Saat bel istirahat berbunyi, kamu melihat Doni (siswa kelas 7) sedang dipojokkan oleh dua kakak kelas di dekat tangga belakang. Mereka merebut botol minum Doni dan mengancam akan membuangnya ke selokan sambil tertawa.",characterState:"cornered",options:[{text:"Pura-pura tidak melihat dan bergegas pergi ke kantin.",meterImpact:{courage:-20,empathy:-20,safety:10},nextScene:"scene_ignore"},{text:"Merekam kejadian dengan HP untuk diunggah ke status WhatsApp.",meterImpact:{courage:-10,empathy:-30,safety:-10},nextScene:"scene_record"},{text:"Mendekati dengan tenang: 'Kak, dicari Pak Guru BK di ruang piket sekarang'.",meterImpact:{courage:30,empathy:30,safety:20},nextScene:"scene_smart_defuse"},{text:"Langsung menyerang kakak kelas dengan memukulnya dari belakang.",meterImpact:{courage:10,empathy:10,safety:-40},nextScene:"scene_violence"}]},scenes:{scene_ignore:{id:"scene_ignore",speaker:"Akibat Tindakanmu (Bystander Pasif)",dialogue:"Doni akhirnya menangis karena botol minumnya dilempar ke selokan, dan pelaku merasa semakin berkuasa karena tidak ada yang berani menegur. Doni menjadi takut untuk berangkat ke sekolah keesokan harinya.",moral:"Membiarkan bullying terjadi sama dengan memberi lampu hijau kepada pelaku.",retryAvailable:!0},scene_record:{id:"scene_record",speaker:"Akibat Tindakanmu (Cyber Bystander)",dialogue:"Video statusmu tersebar dan membuat Doni semakin malu dan trauma karena seisi madrasah melihatnya saat sedang ditindas. Pihak sekolah menegurmu karena menyebarkan konten perundungan tanpa izin.",moral:"Merekam untuk konten viral melipatgandakan trauma korban. Yang korban butuhkan adalah pertolongan, bukan eksploitasi visual.",retryAvailable:!0},scene_violence:{id:"scene_violence",speaker:"Akibat Tindakanmu (Kekerasan Dibalas Kekerasan)",dialogue:"Terjadi perkelahian massal yang berbahaya. Kamu dan Doni sama-sama terluka, dan semuanya dipanggil ke ruang Kepala Madrasah. Masalah bukannya selesai, justru semakin runyam.",moral:"Kekerasan tidak dapat dipadamkan dengan kekerasan baru. Gunakan kecerdasan dan prosedur perlindungan.",retryAvailable:!0},scene_smart_defuse:{id:"scene_smart_defuse",speaker:"Langkah Berikutnya (Smart Upstander)",dialogue:"Mendengar nama guru BK disebut, kakak kelas tersebut terkejut, mengembalikan botol Doni, dan bergegas pergi. Sekarang kamu berdiri bersama Doni yang terlihat gemetar ketakutan.",characterState:"comforting",options:[{text:"Menenangkan Doni, memberinya air minum, lalu menemaninya melapor ke Wali Kelas/BK.",meterImpact:{courage:20,empathy:30,safety:30},nextScene:"scene_success"},{text:"Mengejek Doni: 'Makanya jadi cowok jangan cengeng!', lalu meninggalkannya.",meterImpact:{courage:-20,empathy:-40,safety:0},nextScene:"scene_victim_blame"}]},scene_victim_blame:{id:"scene_victim_blame",speaker:"Akibat Tindakanmu (Menyalahkan Korban)",dialogue:"Kamu menggagalkan niat baikmu sendiri. Doni semakin merasa tidak berharga dan terpuruk karena bahkan temannya sendiri malah menyalahkannya.",moral:"Jangan pernah menyalahkan korban (victim blaming). Berikan empati tulus.",retryAvailable:!0},scene_success:{id:"scene_success",speaker:"Hasil Akhir: Pahlawan Peduli (Upstander Sejati)!",dialogue:"Guru BK menyambut kalian dengan hangat, mencatat kronologi kejadian, dan memanggil pihak terkait untuk mediasi perlindungan. Doni merasa sangat bersyukur memiliki sahabat yang berani dan peduli sepertimu!",badge:"🛡️ Duta Keberanian & Empati YAPIRA",isVictory:!0}}},Ko=[{id:"mf1",statement:"Ejekan verbal cuma candaan wajar masa remaja dan akan membuat mental korban jadi lebih kuat.",isFact:!1,explanation:"MITOS! Ejekan berulang merusak rasa harga diri, memicu trauma mendalam, dan menurunkan kepercayaan diri, bukan membentuk mental sehat."},{id:"mf2",statement:"Siswa yang membela korban bullying (Upstander) memiliki pengaruh sangat besar dalam menghentikan perundungan di sekolah.",isFact:!0,explanation:"FAKTA! Penelitian menunjukkan lebih dari 57% aksi bullying berhenti dalam hitungan detik ketika saksi sebaya berani mengintervensi dengan positif."},{id:"mf3",statement:"Bullying di media sosial tidak berbahaya karena tidak menyebabkan luka fisik secara langsung.",isFact:!1,explanation:"MITOS! Cyberbullying terjadi 24 jam nonstop tanpa batas ruang, menyebabkan kecemasan parah, depresi, hingga keinginan menyakiti diri sendiri."},{id:"mf4",statement:"Melaporkan kejadian bullying kepada guru atau pihak madrasah adalah tindakan mulia untuk menyelamatkan teman, bukan tindakan pengecut.",isFact:!0,explanation:"FAKTA! Melapor demi keselamatan orang lain adalah bukti integritas dan kepedulian tingkat tinggi."},{id:"mf5",statement:"Korban bullying biasanya memang pantas ditindas karena mereka aneh atau pendiam.",isFact:!1,explanation:"MITOS! Tidak seorang pun manusia yang pantas ditindas atau direndahkan martabatnya dengan alasan apa pun. Tanggung jawab bullying 100% ada pada pelaku."}];var Ph={};(function t(e,n,i,r){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var M=new OffscreenCanvas(1,1),E=M.getContext("2d");E.fillRect(0,0,1,1);var j=M.transferToImageBitmap();E.createPattern(j,"no-repeat")}catch{return!1}return!0}();function l(){}function u(M){var E=n.exports.Promise,j=E!==void 0?E:e.Promise;return typeof j=="function"?new j(M):(M(l,l),null)}var h=function(M,E){return{transform:function(j){if(M)return j;if(E.has(j))return E.get(j);var I=new OffscreenCanvas(j.width,j.height),G=I.getContext("2d");return G.drawImage(j,0,0),E.set(j,I),I},clear:function(){E.clear()}}}(o,new Map),p=function(){var M=Math.floor(16.666666666666668),E,j,I={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(J){var ne=Math.random();return I[ne]=requestAnimationFrame(function Z(le){G===le||G+M-1<le?(G=le,delete I[ne],J()):I[ne]=requestAnimationFrame(Z)}),ne},j=function(J){I[J]&&cancelAnimationFrame(I[J])}):(E=function(J){return setTimeout(J,M)},j=function(J){return clearTimeout(J)}),{frame:E,cancel:j}}(),f=function(){var M,E,j={};function I(G){function J(ne,Z){G.postMessage({options:ne||{},callback:Z})}G.init=function(Z){var le=Z.transferControlToOffscreen();G.postMessage({canvas:le},[le])},G.fire=function(Z,le,xe){if(E)return J(Z,null),E;var me=Math.random().toString(36).slice(2);return E=u(function(Me){function z($e){$e.data.callback===me&&(delete j[me],G.removeEventListener("message",z),E=null,h.clear(),xe(),Me())}G.addEventListener("message",z),J(Z,me),j[me]=z.bind(null,{data:{callback:me}})}),E},G.reset=function(){G.postMessage({reset:!0});for(var Z in j)j[Z](),delete j[Z]}}return function(){if(M)return M;if(!i&&a){var G=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{M=new Worker(URL.createObjectURL(new Blob([G])))}catch(J){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",J),null}I(M)}return M}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(M,E){return E?E(M):M}function _(M){return M!=null}function g(M,E,j){return y(M&&_(M[E])?M[E]:m[E],j)}function d(M){return M<0?0:Math.floor(M)}function x(M,E){return Math.floor(Math.random()*(E-M))+M}function v(M){return parseInt(M,16)}function S(M){return M.map(N)}function N(M){var E=String(M).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:v(E.substring(0,2)),g:v(E.substring(2,4)),b:v(E.substring(4,6))}}function k(M){var E=g(M,"origin",Object);return E.x=g(E,"x",Number),E.y=g(E,"y",Number),E}function R(M){M.width=document.documentElement.clientWidth,M.height=document.documentElement.clientHeight}function F(M){var E=M.getBoundingClientRect();M.width=E.width,M.height=E.height}function w(M){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=M,E}function C(M,E,j,I,G,J,ne,Z,le){M.save(),M.translate(E,j),M.rotate(J),M.scale(I,G),M.arc(0,0,1,ne,Z,le),M.restore()}function W(M){var E=M.angle*(Math.PI/180),j=M.spread*(Math.PI/180);return{x:M.x,y:M.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:M.startVelocity*.5+Math.random()*M.startVelocity,angle2D:-E+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:M.color,shape:M.shape,tick:0,totalTicks:M.ticks,decay:M.decay,drift:M.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:M.gravity*3,ovalScalar:.6,scalar:M.scalar,flat:M.flat}}function Y(M,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var j=E.tick++/E.totalTicks,I=E.x+E.random*E.tiltCos,G=E.y+E.random*E.tiltSin,J=E.wobbleX+E.random*E.tiltCos,ne=E.wobbleY+E.random*E.tiltSin;if(M.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-j)+")",M.beginPath(),s&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))M.fill(ee(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(J-I)*.1,Math.abs(ne-G)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var Z=Math.PI/10*E.wobble,le=Math.abs(J-I)*.1,xe=Math.abs(ne-G)*.1,me=E.shape.bitmap.width*E.scalar,Me=E.shape.bitmap.height*E.scalar,z=new DOMMatrix([Math.cos(Z)*le,Math.sin(Z)*le,-Math.sin(Z)*xe,Math.cos(Z)*xe,E.x,E.y]);z.multiplySelf(new DOMMatrix(E.shape.matrix));var $e=M.createPattern(h.transform(E.shape.bitmap),"no-repeat");$e.setTransform(z),M.globalAlpha=1-j,M.fillStyle=$e,M.fillRect(E.x-me/2,E.y-Me/2,me,Me),M.globalAlpha=1}else if(E.shape==="circle")M.ellipse?M.ellipse(E.x,E.y,Math.abs(J-I)*E.ovalScalar,Math.abs(ne-G)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):C(M,E.x,E.y,Math.abs(J-I)*E.ovalScalar,Math.abs(ne-G)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var ce=Math.PI/2*3,Te=4*E.scalar,ge=8*E.scalar,Ve=E.x,oe=E.y,T=5,b=Math.PI/T;T--;)Ve=E.x+Math.cos(ce)*ge,oe=E.y+Math.sin(ce)*ge,M.lineTo(Ve,oe),ce+=b,Ve=E.x+Math.cos(ce)*Te,oe=E.y+Math.sin(ce)*Te,M.lineTo(Ve,oe),ce+=b;else M.moveTo(Math.floor(E.x),Math.floor(E.y)),M.lineTo(Math.floor(E.wobbleX),Math.floor(G)),M.lineTo(Math.floor(J),Math.floor(ne)),M.lineTo(Math.floor(I),Math.floor(E.wobbleY));return M.closePath(),M.fill(),E.tick<E.totalTicks}function Q(M,E,j,I,G){var J=E.slice(),ne=M.getContext("2d"),Z,le,xe=u(function(me){function Me(){Z=le=null,ne.clearRect(0,0,I.width,I.height),h.clear(),G(),me()}function z(){i&&!(I.width===r.width&&I.height===r.height)&&(I.width=M.width=r.width,I.height=M.height=r.height),!I.width&&!I.height&&(j(M),I.width=M.width,I.height=M.height),ne.clearRect(0,0,I.width,I.height),J=J.filter(function($e){return Y(ne,$e)}),J.length?Z=p.frame(z):Me()}Z=p.frame(z),le=Me});return{addFettis:function(me){return J=J.concat(me),xe},canvas:M,promise:xe,reset:function(){Z&&p.cancel(Z),le&&le()}}}function P(M,E){var j=!M,I=!!g(E||{},"resize"),G=!1,J=g(E,"disableForReducedMotion",Boolean),ne=a&&!!g(E||{},"useWorker"),Z=ne?f():null,le=j?R:F,xe=M&&Z?!!M.__confetti_initialized:!1,me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Me;function z(ce,Te,ge){for(var Ve=g(ce,"particleCount",d),oe=g(ce,"angle",Number),T=g(ce,"spread",Number),b=g(ce,"startVelocity",Number),H=g(ce,"decay",Number),ae=g(ce,"gravity",Number),te=g(ce,"drift",Number),ie=g(ce,"colors",S),be=g(ce,"ticks",Number),de=g(ce,"shapes"),ve=g(ce,"scalar"),Ae=!!g(ce,"flat"),De=k(ce),re=Ve,Be=[],Fe=M.width*De.x,Ce=M.height*De.y;re--;)Be.push(W({x:Fe,y:Ce,angle:oe,spread:T,startVelocity:b,color:ie[re%ie.length],shape:de[x(0,de.length)],ticks:be,decay:H,gravity:ae,drift:te,scalar:ve,flat:Ae}));return Me?Me.addFettis(Be):(Me=Q(M,Be,le,Te,ge),Me.promise)}function $e(ce){var Te=J||g(ce,"disableForReducedMotion",Boolean),ge=g(ce,"zIndex",Number);if(Te&&me)return u(function(b){b()});j&&Me?M=Me.canvas:j&&!M&&(M=w(ge),document.body.appendChild(M)),I&&!xe&&le(M);var Ve={width:M.width,height:M.height};Z&&!xe&&Z.init(M),xe=!0,Z&&(M.__confetti_initialized=!0);function oe(){if(Z){var b={getBoundingClientRect:function(){if(!j)return M.getBoundingClientRect()}};le(b),Z.postMessage({resize:{width:b.width,height:b.height}});return}Ve.width=Ve.height=null}function T(){Me=null,I&&(G=!1,e.removeEventListener("resize",oe)),j&&M&&(document.body.contains(M)&&document.body.removeChild(M),M=null,xe=!1)}return I&&!G&&(G=!0,e.addEventListener("resize",oe,!1)),Z?Z.fire(ce,Ve,T):z(ce,Ve,T)}return $e.reset=function(){Z&&Z.reset(),Me&&Me.reset()},$e}var V;function $(){return V||(V=P(null,{useWorker:!0,resize:!0})),V}function ee(M,E,j,I,G,J,ne){var Z=new Path2D(M),le=new Path2D;le.addPath(Z,new DOMMatrix(E));var xe=new Path2D;return xe.addPath(le,new DOMMatrix([Math.cos(ne)*G,Math.sin(ne)*G,-Math.sin(ne)*J,Math.cos(ne)*J,j,I])),xe}function U(M){if(!s)throw new Error("path confetti are not supported in this browser");var E,j;typeof M=="string"?E=M:(E=M.path,j=M.matrix);var I=new Path2D(E),G=document.createElement("canvas"),J=G.getContext("2d");if(!j){for(var ne=1e3,Z=ne,le=ne,xe=0,me=0,Me,z,$e=0;$e<ne;$e+=2)for(var ce=0;ce<ne;ce+=2)J.isPointInPath(I,$e,ce,"nonzero")&&(Z=Math.min(Z,$e),le=Math.min(le,ce),xe=Math.max(xe,$e),me=Math.max(me,ce));Me=xe-Z,z=me-le;var Te=10,ge=Math.min(Te/Me,Te/z);j=[ge,0,0,ge,-Math.round(Me/2+Z)*ge,-Math.round(z/2+le)*ge]}return{type:"path",path:E,matrix:j}}function D(M){var E,j=1,I="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof M=="string"?E=M:(E=M.text,j="scalar"in M?M.scalar:j,G="fontFamily"in M?M.fontFamily:G,I="color"in M?M.color:I);var J=10*j,ne=""+J+"px "+G,Z=new OffscreenCanvas(J,J),le=Z.getContext("2d");le.font=ne;var xe=le.measureText(E),me=Math.ceil(xe.actualBoundingBoxRight+xe.actualBoundingBoxLeft),Me=Math.ceil(xe.actualBoundingBoxAscent+xe.actualBoundingBoxDescent),z=2,$e=xe.actualBoundingBoxLeft+z,ce=xe.actualBoundingBoxAscent+z;me+=z+z,Me+=z+z,Z=new OffscreenCanvas(me,Me),le=Z.getContext("2d"),le.font=ne,le.fillStyle=I,le.fillText(E,$e,ce);var Te=1/j;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[Te,0,0,Te,-me*Te/2,-Me*Te/2]}}n.exports=function(){return $().apply(this,arguments)},n.exports.reset=function(){$().reset()},n.exports.create=P,n.exports.shapeFromPath=U,n.exports.shapeFromText=D})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ph,!1);const Ai=Ph.exports;Ph.exports.create;function B2({onScoreUpdate:t}){const[e,n]=we.useState(0),[i,r]=we.useState(0),[a,s]=we.useState(0),[o,l]=we.useState(null),[u,h]=we.useState(!1),[p,f]=we.useState([]),m=ds[e],y=d=>{if(o||u)return;qe();const x=d===m.correctCategory;if(x){Ka();const v=100+a*25,S=i+v,N=a+1;r(S),s(N),l({isCorrect:!0,message:`Tepat sekali! +${v} Poin (Combo ${N}x)`,explanation:m.explanation}),N>=3&&Ai({particleCount:40,spread:60,origin:{y:.7}}),t&&t(S)}else ic(),s(0),l({isCorrect:!1,message:"Kurang tepat! Coba pelajari alasannya:",explanation:m.explanation});f(v=>[...v,{item:m,isCorrect:x,chosenCategory:d}])},_=()=>{qe(),l(null),e+1<ds.length?n(e+1):(h(!0),Br(),Ai({particleCount:100,spread:90,origin:{y:.6}}))},g=()=>{qe(),n(0),r(0),s(0),l(null),h(!1),f([])};return c.jsxs("div",{className:"flex flex-col h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-navy-900 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-indigo-800/40 select-none overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"flex items-center justify-between pb-2.5 sm:pb-3 border-b border-indigo-800/50",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-sky-400 uppercase bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-800/50",children:"Mini Game 1 • Interaktif"}),c.jsx("h3",{className:"text-base sm:text-lg md:text-xl font-black text-white mt-1",children:"🕵️ Detektif Jenis Bullying"})]}),c.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[a>1&&c.jsxs("div",{className:"bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-black animate-pulse flex items-center gap-1",children:[c.jsx(yh,{size:12}),c.jsxs("span",{children:[a,"x"]})]}),c.jsxs("div",{className:"bg-slate-800/90 border border-slate-700 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl text-right",children:[c.jsx("span",{className:"text-[9px] text-slate-400 block uppercase font-bold",children:"Skor"}),c.jsx("span",{className:"text-sm sm:text-base font-black text-amber-400",children:i})]})]})]}),u?c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center py-6 space-y-4",children:[c.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center shadow-2xl text-slate-900",children:c.jsx(ir,{size:44})}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("h4",{className:"text-2xl font-black text-white",children:"Misi Detektif Selesai!"}),c.jsx("p",{className:"text-sm text-slate-300",children:"Kamu berhasil menganalisis seluruh kasus dengan skor total:"}),c.jsxs("div",{className:"text-4xl font-black text-amber-400 pt-2",children:[i," POIN"]})]}),c.jsx("p",{className:"text-xs text-slate-400 max-w-md bg-slate-800/60 p-3 rounded-xl border border-slate-700",children:i>=800?"Luar biasa! Mata elangmu sangat tajam dalam membedakan perundungan fisik, verbal, sosial, dan siber.":"Kerja bagus! Lanjutkan membaca materi untuk semakin peka mengenali tanda-tanda bullying di sekolah."}),c.jsxs("button",{onClick:g,className:"px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold rounded-xl shadow-lg transition flex items-center gap-2",children:[c.jsx(ri,{size:18}),c.jsx("span",{children:"Mainkan Lagi Misi Ini"})]})]}):c.jsxs("div",{className:"flex-1 flex flex-col justify-between pt-2.5 sm:pt-4",children:[c.jsx("div",{className:"w-full bg-slate-800 rounded-full h-1.5 sm:h-2 mb-3 overflow-hidden border border-slate-700",children:c.jsx("div",{className:"bg-gradient-to-r from-sky-400 to-indigo-500 h-full transition-all duration-300",style:{width:`${(e+1)/ds.length*100}%`}})}),c.jsxs("div",{className:"bg-slate-800/80 border-2 border-indigo-500/30 rounded-2xl p-3.5 sm:p-5 shadow-2xl relative",children:[c.jsxs("div",{className:"flex items-center justify-between text-[10px] sm:text-xs text-indigo-300 font-bold mb-1.5",children:[c.jsxs("span",{children:["KASUS #",e+1," / ",ds.length]}),c.jsx("span",{className:"bg-indigo-900/60 px-2 py-0.5 rounded-full text-[10px]",children:m.hint})]}),c.jsxs("p",{className:"text-sm sm:text-base md:text-lg font-bold text-slate-100 leading-snug my-2 sm:my-3",children:['"',m.text,'"']}),c.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 italic",children:"Pilihlah klasifikasi jenis perundungan yang paling tepat:"})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 my-3",children:z2.map(d=>{const x=o&&m.correctCategory===d.id;return c.jsxs("button",{onClick:()=>y(d.id),disabled:!!o,className:`p-2.5 sm:p-3 rounded-xl font-bold text-xs sm:text-sm text-left transition-all duration-200 border-2 flex items-center justify-between ${o?x?"bg-emerald-600 border-emerald-400 text-white scale-[1.01] shadow-lg":"bg-slate-800/50 border-slate-700/50 opacity-40 text-slate-400":"bg-slate-800/80 hover:bg-slate-750 border-slate-700 hover:border-sky-400 text-white active:scale-[0.99]"}`,children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-sky-400 shrink-0"}),c.jsx("span",{children:d.name})]}),o&&x&&c.jsx(Xf,{size:16,className:"text-white shrink-0"})]},d.id)})}),o&&c.jsxs("div",{className:`p-4 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 animate-fadeIn ${o.isCorrect?"bg-emerald-950/80 border-emerald-600 text-emerald-200":"bg-rose-950/80 border-rose-600 text-rose-200"}`,children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"font-black text-sm flex items-center gap-1.5",children:[o.isCorrect?c.jsx(Xf,{size:18}):c.jsx(_h,{size:18}),c.jsx("span",{children:o.message})]}),c.jsx("p",{className:"text-xs opacity-90 leading-relaxed",children:o.explanation})]}),c.jsxs("button",{onClick:_,className:"w-full md:w-auto px-5 py-2.5 bg-white text-slate-900 font-black rounded-xl hover:bg-sky-100 transition shadow-md flex items-center justify-center gap-1.5 shrink-0",children:[c.jsx("span",{children:e+1<ds.length?"Kasus Selanjutnya":"Lihat Hasil Akhir"}),c.jsx($t,{size:16})]})]})]})]})}function j2({onScoreUpdate:t}){const[e,n]=we.useState("ready"),[i,r]=we.useState(0),[a,s]=we.useState(3),[o,l]=we.useState(0),[u,h]=we.useState(0),[p,f]=we.useState(null),[m,y]=we.useState(null),_=x=>{if(x>=_u.length){n("finished"),Br(),Ai({particleCount:80,spread:70,origin:{y:.6}});return}f(_u[x]),y(null)},g=()=>{qe(),s(3),l(0),h(0),r(0),n("playing"),_(0)},d=x=>{if(!p||m)return;qe();const v=p.toxic;if(x&&v||!x&&!v){Ka();const N=120+u*30,k=o+N,R=u+1;l(k),h(R),y({status:"success",title:x?"🛡️ Ujaran Jahat Tertangkis!":"💖 Pesan Baik Diterima!",desc:x?`Diubah jadi pesan positif: "${p.kindReplacement}" (+${N} Poin)`:"Pesan kebaikan memperkuat persahabatan!"}),t&&t(k)}else{ic();const N=a-1;if(s(N),h(0),y({status:"error",title:x?"❌ Salah Tangkis!":"💔 Cyber Bullying Lolos!",desc:x?"Itu adalah pesan yang baik dan tidak perlu ditangkis!":"Kata-kata kasar melukai korban! Seharusnya gunakan Perisai Siber."}),N<=0){setTimeout(()=>{n("finished")},1200);return}}setTimeout(()=>{const N=i+1;r(N),_(N)},1600)};return c.jsxs("div",{className:"flex flex-col h-full bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-sky-800/40 select-none overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"flex items-center justify-between pb-2.5 sm:pb-3 border-b border-sky-800/50",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-cyan-400 uppercase bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/50",children:"Mini Game 2 • Action Refleks"}),c.jsx("h3",{className:"text-base sm:text-lg md:text-xl font-black text-white mt-1",children:"🛡️ Cyber Shield Defender"})]}),c.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[c.jsx("div",{className:"flex items-center gap-1 bg-slate-900/80 px-2 sm:px-3 py-1 rounded-xl border border-slate-700",children:[1,2,3].map(x=>c.jsx(Kf,{size:15,className:x<=a?"text-rose-500 fill-rose-500":"text-slate-600"},x))}),c.jsxs("div",{className:"bg-slate-900/80 border border-slate-700 px-2.5 sm:px-3.5 py-1 rounded-xl text-right",children:[c.jsx("span",{className:"text-[9px] text-slate-400 block uppercase font-bold",children:"Skor"}),c.jsx("span",{className:"text-sm sm:text-base font-black text-cyan-400",children:o})]})]})]}),e==="ready"&&c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center p-3 sm:p-6 space-y-3 sm:space-y-4",children:[c.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 animate-pulse",children:c.jsx(sl,{size:36,className:"sm:w-11 sm:h-11"})}),c.jsxs("div",{className:"space-y-1.5 max-w-md",children:[c.jsx("h4",{className:"text-lg sm:text-2xl font-black text-white",children:"Lindungi Temanmu di Medsos!"}),c.jsxs("p",{className:"text-[11px] sm:text-xs text-slate-300 leading-relaxed",children:["Pesan digital akan muncul di layar ponsel. Gunakan ",c.jsx("b",{className:"text-rose-400",children:"PERISAI SIBER"})," jika pesan berisi ujaran kebencian, atau tekan ",c.jsx("b",{className:"text-emerald-400",children:"TERIMA PESAN"})," jika pesan kebaikan."]})]}),c.jsx("button",{onClick:g,className:"px-6 py-2.5 sm:px-8 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-base rounded-xl shadow-xl transition active:scale-95",children:"Mulai Misi Penyelamatan"})]}),e==="playing"&&p&&c.jsxs("div",{className:"flex-1 flex flex-col justify-between py-2 sm:py-4",children:[c.jsxs("div",{className:"text-[10px] sm:text-xs text-slate-400 flex justify-between font-bold mb-1.5",children:[c.jsxs("span",{children:["Pesan #",i+1," / ",_u.length]}),u>1&&c.jsxs("span",{className:"text-amber-400",children:["🔥 ",u,"x Tangkisan!"]})]}),c.jsxs("div",{className:"bg-slate-900/90 border-2 border-cyan-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative my-auto max-w-lg mx-auto w-full",children:[c.jsxs("div",{className:"flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-800 text-[10px] sm:text-xs text-slate-400",children:[c.jsxs("span",{className:"flex items-center gap-1.5 font-bold text-slate-300",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Notifikasi Media Sosial"]}),c.jsx("span",{children:"Baru saja"})]}),c.jsxs("div",{className:"py-4 sm:py-6 text-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-slate-400 block mb-1",children:"Pengirim: Anonim_Madrasah"}),c.jsxs("p",{className:"text-base sm:text-xl md:text-2xl font-black text-white tracking-wide leading-snug",children:['"',p.text,'"']})]}),m?c.jsxs("div",{className:`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-center transition-all ${m.status==="success"?"bg-emerald-950/80 border-emerald-500 text-emerald-200":"bg-rose-950/80 border-rose-500 text-rose-200"}`,children:[c.jsx("div",{className:"font-black text-xs sm:text-sm",children:m.title}),c.jsx("div",{className:"text-[10px] sm:text-xs opacity-90 mt-0.5",children:m.desc})]}):c.jsx("div",{className:"text-[10px] sm:text-xs text-center text-slate-400",children:"Apakah ini pesan beracun (cyberbullying) atau pesan persahabatan?"})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-3",children:[c.jsxs("button",{onClick:()=>d(!0),disabled:!!m,className:"py-2.5 sm:py-4 px-3 sm:px-4 bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-rose-400/50 flex sm:flex-col items-center justify-center gap-1 active:scale-98 transition disabled:opacity-50",children:[c.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base",children:[c.jsx(sl,{size:18}),c.jsx("span",{children:"AKTIFKAN PERISAI"})]}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-rose-200 font-normal hidden sm:inline",children:"Tangkis Ujaran Kebencian"})]}),c.jsxs("button",{onClick:()=>d(!1),disabled:!!m,className:"py-2.5 sm:py-4 px-3 sm:px-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-emerald-400/50 flex sm:flex-col items-center justify-center gap-1 active:scale-98 transition disabled:opacity-50",children:[c.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base",children:[c.jsx(Kf,{size:18}),c.jsx("span",{children:"TERIMA PESAN"})]}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-emerald-200 font-normal hidden sm:inline",children:"Pesan Kebaikan & Dukungan"})]})]})]}),e==="finished"&&c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4",children:[c.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-200 text-slate-900 flex items-center justify-center shadow-2xl",children:c.jsx(sl,{size:44})}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("h4",{className:"text-2xl font-black text-white",children:a>0?"Selamat! Cyber Safe Berhasil!":"Misi Terhenti! HP Habis"}),c.jsx("p",{className:"text-sm text-slate-300",children:"Total Skor Perlindungan:"}),c.jsxs("div",{className:"text-4xl font-black text-cyan-400",children:[o," POIN"]})]}),c.jsx("p",{className:"text-xs text-slate-400 max-w-md bg-slate-900/60 p-3 rounded-xl border border-slate-800",children:a>0?"Refleks digitalmu mengagumkan! Kamu sudah siap melindungi diri dan teman dari toxic cyberbullying di internet.":"Jangan berkecil hati. Selalu waspada membedakan kritik sehat dengan ujaran perundungan."}),c.jsxs("button",{onClick:g,className:"px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold rounded-xl shadow-lg transition flex items-center gap-2",children:[c.jsx(ri,{size:18}),c.jsx("span",{children:"Coba Lagi Dari Awal"})]})]})]})}function H2({onComplete:t}){const[e,n]=we.useState(yu.initialScene),[i,r]=we.useState({courage:50,empathy:50,safety:50}),[a,s]=we.useState([]),o=u=>{qe();const h=Math.max(0,Math.min(100,i.courage+(u.meterImpact.courage||0))),p=Math.max(0,Math.min(100,i.empathy+(u.meterImpact.empathy||0))),f=Math.max(0,Math.min(100,i.safety+(u.meterImpact.safety||0)));r({courage:h,empathy:p,safety:f});const m=yu.scenes[u.nextScene];m&&(n(m),s(y=>[...y,{optionText:u.text,nextSceneId:u.nextScene}]),m.isVictory?(Br(),Ai({particleCount:100,spread:80,origin:{y:.6}}),t&&t(h+p+f)):m.retryAvailable&&ic())},l=()=>{qe(),n(yu.initialScene),r({courage:50,empathy:50,safety:50}),s([])};return c.jsxs("div",{className:"flex flex-col h-full bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-emerald-800/40 select-none overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"flex items-center justify-between pb-2.5 sm:pb-3 border-b border-emerald-800/50",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-emerald-400 uppercase bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/50",children:"Mini Game 3 • Skenario Nyata"}),c.jsx("h3",{className:"text-base sm:text-lg md:text-xl font-black text-white mt-1",children:"🧭 Dilema Upstander: Koridor"})]}),c.jsx("button",{onClick:l,className:"p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition",title:"Ulangi Skenario",children:c.jsx(ri,{size:15})})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-1.5 sm:gap-2.5 my-2.5 sm:my-3 bg-slate-900/80 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] sm:text-[11px] font-bold text-amber-300 mb-0.5",children:[c.jsx("span",{children:"Berani"}),c.jsxs("span",{children:[i.courage,"%"]})]}),c.jsx("div",{className:"w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden",children:c.jsx("div",{className:"bg-amber-400 h-full transition-all duration-300",style:{width:`${i.courage}%`}})})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] sm:text-[11px] font-bold text-rose-300 mb-0.5",children:[c.jsx("span",{children:"Empati"}),c.jsxs("span",{children:[i.empathy,"%"]})]}),c.jsx("div",{className:"w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden",children:c.jsx("div",{className:"bg-rose-400 h-full transition-all duration-300",style:{width:`${i.empathy}%`}})})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] sm:text-[11px] font-bold text-emerald-300 mb-0.5",children:[c.jsx("span",{children:"Aman"}),c.jsxs("span",{children:[i.safety,"%"]})]}),c.jsx("div",{className:"w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden",children:c.jsx("div",{className:"bg-emerald-400 h-full transition-all duration-300",style:{width:`${i.safety}%`}})})]})]}),c.jsxs("div",{className:"flex-1 flex flex-col justify-between space-y-3 sm:space-y-4",children:[c.jsxs("div",{className:"bg-slate-800/90 border-2 border-emerald-500/30 rounded-2xl p-3.5 sm:p-5 shadow-2xl space-y-2.5",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-emerald-300",children:[c.jsx(Fg,{size:15}),c.jsx("span",{children:e.speaker||"Situasi Lapangan"})]}),c.jsx("p",{className:"text-sm sm:text-base md:text-lg font-bold text-slate-100 leading-relaxed",children:e.dialogue}),e.moral&&c.jsxs("div",{className:"bg-rose-950/70 border border-rose-600/70 p-2.5 rounded-xl text-xs text-rose-200 flex items-start gap-2",children:[c.jsx(ol,{size:16,className:"shrink-0 text-rose-400 mt-0.5"}),c.jsx("span",{children:e.moral})]}),e.isVictory&&c.jsxs("div",{className:"bg-emerald-950/80 border border-emerald-500 p-3 sm:p-4 rounded-xl text-center space-y-1.5",children:[c.jsx("div",{className:"text-xl sm:text-2xl font-black text-amber-400",children:e.badge}),c.jsx("p",{className:"text-[11px] sm:text-xs text-emerald-200",children:"Kamu membuktikan bahwa satu tindakan berani yang cerdas dapat mengubah nasib korban dan mencegah kekerasan berkelanjutan di madrasah!"})]})]}),e.options&&c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider",children:"Tentukan Langkahmu:"}),e.options.map((u,h)=>c.jsxs("button",{onClick:()=>o(u),className:"w-full text-left p-2.5 sm:p-3.5 bg-slate-800/90 hover:bg-emerald-900/60 border-2 border-slate-700 hover:border-emerald-400 rounded-xl transition font-bold text-xs sm:text-sm text-white flex items-center justify-between gap-2.5 group active:scale-[0.99]",children:[c.jsx("span",{children:u.text}),c.jsx($t,{size:15,className:"text-emerald-400 group-hover:translate-x-1 transition shrink-0"})]},h))]}),e.retryAvailable&&c.jsxs("button",{onClick:l,className:"w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 font-black rounded-xl shadow-lg transition flex items-center justify-center gap-2 hover:brightness-110",children:[c.jsx(ri,{size:18}),c.jsx("span",{children:"Pilih Keputusan yang Lebih Bijak"})]}),e.isVictory&&c.jsxs("button",{onClick:l,className:"w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black rounded-xl shadow-lg transition flex items-center justify-center gap-2 hover:brightness-110",children:[c.jsx(ri,{size:18}),c.jsx("span",{children:"Eksplorasi Cabang Cerita Lain"})]})]})]})}function G2({onScoreUpdate:t}){const[e,n]=we.useState(0),[i,r]=we.useState(0),[a,s]=we.useState(null),[o,l]=we.useState(!1),u=Ko[e],h=m=>{if(a||o)return;if(qe(),m===u.isFact){Ka();const g=i+100;r(g),s({isCorrect:!0,title:"Tepat Sekali!",desc:u.explanation}),t&&t(g)}else ic(),s({isCorrect:!1,title:"Masih Keliru!",desc:u.explanation})},p=()=>{qe(),s(null),e+1<Ko.length?n(e+1):(l(!0),Br(),Ai({particleCount:80,spread:70,origin:{y:.6}}))},f=()=>{qe(),n(0),r(0),s(null),l(!1)};return c.jsxs("div",{className:"flex flex-col h-full bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-purple-800/40 select-none overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"flex items-center justify-between pb-2.5 sm:pb-3 border-b border-purple-800/50",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-purple-400 uppercase bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-800/50",children:"Mini Game 4 • Pematah Mitos"}),c.jsx("h3",{className:"text-base sm:text-lg md:text-xl font-black text-white mt-1",children:"💡 Mitos vs Fakta Bullying"})]}),c.jsxs("div",{className:"bg-slate-900/80 border border-slate-700 px-2.5 sm:px-3.5 py-1 rounded-xl text-right",children:[c.jsx("span",{className:"text-[9px] text-slate-400 block uppercase font-bold",children:"Skor"}),c.jsx("span",{className:"text-sm sm:text-base font-black text-purple-400",children:i})]})]}),o?c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4",children:[c.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 text-slate-900 flex items-center justify-center shadow-2xl",children:c.jsx(ir,{size:44})}),c.jsxs("div",{className:"space-y-1",children:[c.jsx("h4",{className:"text-2xl font-black text-white",children:"Hebat! Kamu Pematah Mitos Sejati!"}),c.jsx("p",{className:"text-sm text-slate-300",children:"Total Skor Akhir:"}),c.jsxs("div",{className:"text-4xl font-black text-purple-400",children:[i," POIN"]})]}),c.jsx("p",{className:"text-xs text-slate-400 max-w-md bg-slate-900/60 p-3 rounded-xl border border-slate-800",children:"Kini kamu tidak mudah tertipu anggapan keliru yang menormalisasi perundungan di kalangan remaja."}),c.jsxs("button",{onClick:f,className:"px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-extrabold rounded-xl shadow-lg transition flex items-center gap-2",children:[c.jsx(ri,{size:18}),c.jsx("span",{children:"Mainkan Lagi Mitos vs Fakta"})]})]}):c.jsxs("div",{className:"flex-1 flex flex-col justify-between py-2 sm:py-4",children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px] sm:text-xs text-purple-300 font-bold mb-1.5",children:[c.jsxs("span",{children:["Pernyataan #",e+1," dari ",Ko.length]}),c.jsx("span",{children:"Uji Pemahaman"})]}),c.jsxs("div",{className:"bg-slate-800/90 border-2 border-purple-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative my-auto",children:[c.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-2 sm:mb-3",children:c.jsx(Ig,{size:18,className:"sm:w-5 sm:h-5"})}),c.jsxs("p",{className:"text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed",children:['"',u.statement,'"']}),a&&c.jsxs("div",{className:`mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all ${a.isCorrect?"bg-emerald-950/80 border-emerald-500 text-emerald-200":"bg-rose-950/80 border-rose-500 text-rose-200"}`,children:[c.jsx("div",{className:"font-black text-xs sm:text-sm",children:a.title}),c.jsx("div",{className:"text-[10px] sm:text-xs opacity-95 mt-0.5 sm:mt-1 leading-relaxed",children:a.desc})]})]}),a?c.jsxs("button",{onClick:p,className:"w-full py-3 sm:py-4 bg-white text-slate-900 font-black rounded-xl sm:rounded-2xl shadow-xl hover:bg-purple-100 transition flex items-center justify-center gap-2 mt-3 text-xs sm:text-sm",children:[c.jsx("span",{children:e+1<Ko.length?"Pernyataan Selanjutnya":"Lihat Hasil Akhir"}),c.jsx($t,{size:16})]}):c.jsxs("div",{className:"grid grid-cols-2 gap-2.5 sm:gap-4 pt-3",children:[c.jsxs("button",{onClick:()=>h(!1),className:"py-3 sm:py-4 bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-500 hover:to-pink-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-rose-400/50 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-98 transition text-xs sm:text-sm",children:[c.jsx(zg,{size:18}),c.jsx("span",{children:"INI MITOS!"})]}),c.jsxs("button",{onClick:()=>h(!0),className:"py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-emerald-400/50 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-98 transition text-xs sm:text-sm",children:[c.jsx(cy,{size:18}),c.jsx("span",{children:"INI FAKTA!"})]})]})]})]})}const ca=[{id:1,question:"Bullying sama saja dengan bercanda biasa antar teman sebaya.",answer:!1,explanation:"Bullying berbeda dengan bercanda. Bullying ada unsur kesengajaan untuk menyakiti dan terjadi ketimpangan kuasa, sedangkan bercanda dinikmati oleh kedua belah pihak secara setara."},{id:2,question:"Menyebarkan foto aib teman di media sosial termasuk bentuk perundungan (cyberbullying).",answer:!0,explanation:"Benar. Menyebarkan rahasia atau foto pribadi tanpa izin dengan tujuan mempermalukan adalah cyberbullying."},{id:3,question:"Tindakan mendiamkan dan mengucilkan teman dari kelompok belajar termasuk bullying sosial/relasional.",answer:!0,explanation:"Benar. Bullying sosial mencakup pengucilan sengaja, mengabaikan, atau merusak reputasi sosial seseorang."},{id:4,question:"Menjadi saksi yang hanya menonton dan menertawakan aksi bullying tidak memiliki dampak apa pun.",answer:!1,explanation:"Salah. Saksi yang menonton atau menertawakan (bystander pasif) justru memperkuat keberanian pelaku dan memperparah trauma korban."},{id:5,question:"Bullying hanya terjadi dalam bentuk kekerasan fisik seperti memukul atau menendang.",answer:!1,explanation:"Salah. Bullying memiliki banyak bentuk: fisik, verbal (ejekan), sosial (pengucilan), dan cyber (digital)."},{id:6,question:"Korban bullying memiliki hak untuk merasa aman dan mendapatkan perlindungan di sekolah.",answer:!0,explanation:"Benar. Setiap siswa berhak atas lingkungan belajar yang aman, nyaman, dan bebas dari rasa takut."},{id:7,question:"Melaporkan kejadian bullying kepada guru BK atau wali kelas bukanlah tindakan mengadu/cepu, melainkan tindakan penyelamatan.",answer:!0,explanation:"Benar. Melapor bertujuan untuk melindungi keselamatan teman, bukan mencari muka atau merugikan orang lain."},{id:8,question:"Pelaku bullying selalu orang yang kuat secara mental dan tidak memerlukan bantuan bimbingan konseling.",answer:!1,explanation:"Salah. Pelaku sering kali memiliki masalah emosional, kurang empati, atau meniru kekerasan di lingkungan asalnya, sehingga butuh konseling dan pembinaan."},{id:9,question:"Memberi julukan yang mengejek kekurangan fisik teman termasuk bullying verbal.",answer:!0,explanation:"Benar. Body shaming atau panggilan bernada hinaan adalah bentuk bullying verbal."},{id:10,question:"Saya sebagai pelajar MTs memiliki peran penting untuk menciptakan madrasah yang ramah dan saling peduli.",answer:!0,explanation:"Benar! Perubahan budaya sekolah dimulai dari kepedulian setiap individu siswa."}];function V2({onComplete:t,onNavigateToMateri:e}){const[n,i]=we.useState({}),[r,a]=we.useState(!1),[s,o]=we.useState(0);we.useEffect(()=>{const f=localStorage.getItem("emodul_pretest_score");f!==null&&o(parseInt(f,10))},[]);const l=(f,m)=>{r||(qe(),i(y=>({...y,[f]:m})))},u=()=>{qe();let f=0;ca.forEach(y=>{n[y.id]===y.answer&&(f+=1)});const m=f*10;o(m),a(!0),localStorage.setItem("emodul_pretest_score",m.toString()),m>=70?(Ka(),Ai({particleCount:60,spread:60})):Br(),t&&t(m)},h=()=>{qe(),i({}),a(!1)},p=Object.keys(n).length;return c.jsxs("div",{className:"flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"pb-3 mb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-700 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full",children:"Evaluasi Awal (FR-07)"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1",children:"📝 Pretest: Uji Pemahaman Awal"}),c.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500 mt-0.5",children:"Jawablah 10 pertanyaan Ya/Tidak di bawah ini dengan jujur."})]}),r?c.jsxs("div",{className:"bg-blue-900 text-white px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-md self-start sm:self-auto",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[9px] text-blue-200 uppercase font-bold block",children:"Skor Pretest"}),c.jsxs("span",{className:"text-xl sm:text-2xl font-black text-yellow-300",children:[s," / 100"]})]}),c.jsx(ir,{className:"text-yellow-400 shrink-0",size:26})]}):c.jsxs("div",{className:"text-[11px] font-bold text-slate-500 bg-slate-200/70 px-2.5 py-1 rounded-xl self-start",children:["Terjawab: ",p," dari ",ca.length]})]}),c.jsx("div",{className:"space-y-3 flex-1",children:ca.map((f,m)=>{const y=n[f.id],_=r&&y===f.answer;return c.jsxs("div",{className:`p-3 sm:p-4 rounded-xl border transition-all ${r?_?"bg-emerald-50 border-emerald-300":"bg-rose-50 border-rose-300":"bg-white border-slate-200 shadow-sm"}`,children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{className:"space-y-0.5",children:[c.jsxs("span",{className:"text-[10px] sm:text-xs font-black text-blue-600 block",children:["SOAL ",m+1]}),c.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-800 leading-snug",children:f.question})]}),r&&c.jsx("div",{className:"shrink-0",children:_?c.jsx(Er,{className:"text-emerald-600",size:18}):c.jsx(_h,{className:"text-rose-500",size:18})})]}),c.jsxs("div",{className:"flex items-center gap-2.5 mt-2.5",children:[c.jsx("button",{onClick:()=>l(f.id,!0),disabled:r,className:`px-4 sm:px-5 py-1.5 rounded-xl text-xs font-black transition-all border ${y===!0?"bg-blue-600 text-white border-blue-600 shadow-sm":"bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"} ${r?"cursor-default":"active:scale-95"}`,children:"YA"}),c.jsx("button",{onClick:()=>l(f.id,!1),disabled:r,className:`px-4 sm:px-5 py-1.5 rounded-xl text-xs font-black transition-all border ${y===!1?"bg-blue-600 text-white border-blue-600 shadow-sm":"bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"} ${r?"cursor-default":"active:scale-95"}`,children:"TIDAK"})]}),r&&c.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-200/60 text-[11px] text-slate-600",children:[c.jsxs("span",{className:"font-bold text-slate-800",children:["Kunci: ",f.answer?"YA":"TIDAK","."," "]}),c.jsx("span",{children:f.explanation})]})]},f.id)})}),c.jsx("div",{className:"pt-5 mt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3",children:r?c.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-center justify-between gap-3",children:[c.jsxs("button",{onClick:h,className:"px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5",children:[c.jsx(ri,{size:15}),c.jsx("span",{children:"Coba Ulang Pretest"})]}),c.jsxs("button",{onClick:e,className:"w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-md flex items-center justify-center gap-2",children:[c.jsx(vh,{size:18}),c.jsx("span",{children:"Mulai Pelajari Materi E-Modul"}),c.jsx($t,{size:18})]})]}):c.jsx("button",{onClick:u,disabled:p<ca.length,className:`w-full sm:w-auto px-8 py-3 rounded-xl font-black text-sm transition shadow-md flex items-center justify-center gap-2 ${p===ca.length?"bg-blue-600 hover:bg-blue-500 text-white":"bg-slate-300 text-slate-500 cursor-not-allowed"}`,children:c.jsxs("span",{children:["Kirim Jawaban Pretest (",p,"/",ca.length,")"]})})})]})}const ua=[{id:1,question:"Manakah dari ciri berikut yang membedakan tindakan bullying dari perselisihan biasa?",options:[{key:"A",text:"Terjadi sekali saja secara spontan tanpa niat buruk"},{key:"B",text:"Ada ketimpangan kuasa, niat sengaja menyakiti, dan berulang kali"},{key:"C",text:"Kedua belah pihak saling bercanda dan tertawa gembira"},{key:"D",text:"Terjadi karena salah paham dan langsung selesai hari itu"}],correctAnswer:"B",explanation:"Tiga elemen utama bullying adalah: adanya niat sengaja menyakiti, dilakukan secara berulang (repetitif), dan terdapat ketimpangan kuasa (power imbalance)."},{id:2,question:"Rian sengaja menyembunyikan tas sekolah milik Dika dan membuang bukunya ke tong sampah. Bentuk bullying yang dilakukan Rian adalah...",options:[{key:"A",text:"Bullying Verbal"},{key:"B",text:"Bullying Fisik (Perusakan Barang)"},{key:"C",text:"Bullying Cyber"},{key:"D",text:"Bullying Rasial"}],correctAnswer:"B",explanation:"Bullying fisik tidak hanya memukul tubuh, tetapi juga merusak, menyembunyikan, atau merampas barang milik korban secara paksa."},{id:3,question:"Siti membuat grup obrolan rahasia untuk menyebarkan fitnah bahwa temannya mencuri uang kas, agar semua orang menjauhinya. Ini adalah contoh...",options:[{key:"A",text:"Bullying Sosial & Cyberbullying"},{key:"B",text:"Kritik membangun"},{key:"C",text:"Kebebasan berekspresi"},{key:"D",text:"Bercanda santai"}],correctAnswer:"A",explanation:"Menyebarkan rumor palsu untuk mengucilkan teman lewat media digital menggabungkan dampak bullying sosial dan media cyberbullying."},{id:4,question:"Dampak psikologis jangka panjang yang paling rentan dialami oleh korban bullying adalah...",options:[{key:"A",text:"Menjadi semakin populer dan percaya diri di kelas"},{key:"B",text:"Mengalami depresi, kecemasan berlebih, dan penurunan prestasi belajar"},{key:"C",text:"Memiliki banyak pengikut di media sosial"},{key:"D",text:"Mendapatkan nilai rapor yang melonjak drastis"}],correctAnswer:"B",explanation:"Korban perundungan sering mengalami trauma emosional, rasa tidak aman, cemas, depresi, enggan masuk sekolah, hingga penurunan prestasi akademis."},{id:5,question:"Seseorang yang menyaksikan kejadian bullying tetapi memilih menjadi 'Upstander' (saksi pembela) akan bertindak...",options:[{key:"A",text:"Merekam video kejadian lalu mengunggahnya ke medsos agar viral"},{key:"B",text:"Tertawa bersama pelaku agar dianggap keren"},{key:"C",text:"Mendampingi korban, berani menegur dengan tenang, dan melapor ke guru"},{key:"D",text:"Pura-pura tidak melihat dan langsung pergi meninggalkan korban"}],correctAnswer:"C",explanation:"Upstander adalah saksi yang berani bertindak positif: merangkul korban, tidak memvalidasi pelaku, dan mencari bantuan pihak berwenang seperti guru."},{id:6,question:"Faktor lingkungan sekolah yang dapat meningkatkan potensi terjadinya perundungan adalah...",options:[{key:"A",text:"Pengawasan guru yang ketat di sudut-sudut rawan sekolah"},{key:"B",text:"Aturan anti-bullying yang tegas dan sosialisasi rutin"},{key:"C",text:"Pembiaran terhadap ejekan kecil dengan anggapan cuma bercanda"},{key:"D",text:"Budaya apresiasi dan saling menghargai antar siswa"}],correctAnswer:"C",explanation:"Pembiaran atau normalisasi 'ah itu cuma guyonan' membuat pelaku merasa tindakannya wajar sehingga eskalasi kekerasan meningkat."},{id:7,question:"Ketika kamu menerima pesan ejekan atau ancaman melalui WhatsApp/Instagram, tindakan cyber-safety yang paling tepat adalah...",options:[{key:"A",text:"Membalas dengan kata-kata kasar yang lebih pedas"},{key:"B",text:"Tangkapi layar (screenshot) sebagai bukti, jangan dibalas, lalu blokir dan lapor"},{key:"C",text:"Menghapus aplikasi ponsel dan mengurung diri di kamar"},{key:"D",text:"Menuruti semua tuntutan pelaku agar mereka berhenti"}],correctAnswer:"B",explanation:"Langkah penanganan cyberbullying: Simpan bukti (screenshot), jangan terpancing membalas, blokir akun pelaku, dan laporkan kepada orang tua/guru."},{id:8,question:"Mengapa pelaku bullying sering kali membutuhkan konseling dan pendampingan, bukan hanya sekadar hukuman fisik?",options:[{key:"A",text:"Karena hukuman fisik dilarang undang-undang semata"},{key:"B",text:"Karena perilaku pelaku sering kali berakar dari trauma, masalah keluarga, atau kebutuhan validasi"},{key:"C",text:"Agar pelaku diberi hadiah dan dipuji oleh sekolah"},{key:"D",text:"Karena pelaku tidak bersalah sama sekali"}],correctAnswer:"B",explanation:"Bimbingan konseling membantu membongkar akar masalah emosional pelaku, menumbuhkan empati, dan merestrukturisasi perilaku menjadi positif."},{id:9,question:"Salah satu slogan utama dalam program pencegahan bullying di MTs SA Riyadul Bayan adalah...",options:[{key:"A",text:"Biar Kalah yang Penting Populer"},{key:"B",text:"Stop Bullying, Start Caring: Kenali • Cegah • Peduli"},{key:"C",text:"Kuat Menang, Lemah Tunduk"},{key:"D",text:"Jangan Ikut Campur Urusan Orang"}],correctAnswer:"B",explanation:"Slogan edukatif modul adalah 'Stop Bullying, Start Caring: Kenali, Cegah, Peduli'."},{id:10,question:"Komitmen nyata yang dapat kamu lakukan setiap hari di kelas untuk mencegah bullying adalah...",options:[{key:"A",text:"Membuat geng eksklusif yang hanya menerima teman kaya"},{key:"B",text:"Mengajak teman yang menyendiri untuk bergabung dan saling menghargai perbedaan"},{key:"C",text:"Memberikan julukan lucu berdasarkan nama orang tua"},{key:"D",text:"Menertawakan teman yang salah menjawab pertanyaan guru di depan kelas"}],correctAnswer:"B",explanation:"Menciptakan iklim kelas inklusif dengan merangkul teman yang menyendiri dan menghargai keragaman adalah aksi nyata peduli sesama."}];function W2({onComplete:t,onNavigateToSummary:e}){const[n,i]=we.useState({}),[r,a]=we.useState(!1),[s,o]=we.useState(0),[l,u]=we.useState(0);we.useEffect(()=>{const _=localStorage.getItem("emodul_pretest_score");_!==null&&u(parseInt(_,10));const g=localStorage.getItem("emodul_posttest_score");g!==null&&o(parseInt(g,10))},[]);const h=(_,g)=>{r||(qe(),i(d=>({...d,[_]:g})))},p=()=>{qe();let _=0;ua.forEach(d=>{n[d.id]===d.correctAnswer&&(_+=1)});const g=_*10;o(g),a(!0),localStorage.setItem("emodul_posttest_score",g.toString()),g>=70?(Br(),Ai({particleCount:120,spread:90,origin:{y:.5}})):Ka(),t&&t(g)},f=()=>{qe(),i({}),a(!1)},m=s-l,y=Object.keys(n).length;return c.jsxs("div",{className:"flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"pb-3 mb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-emerald-700 uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full",children:"Evaluasi Akhir (FR-08)"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1",children:"🎓 Posttest: Evaluasi Pemahaman"}),c.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500 mt-0.5",children:"Pilihlah satu jawaban yang paling tepat dari 10 soal evaluasi."})]}),r?c.jsxs("div",{className:"bg-emerald-900 text-white px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-md self-start sm:self-auto",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[9px] text-emerald-200 uppercase font-bold block",children:"Skor Posttest"}),c.jsxs("span",{className:"text-xl sm:text-2xl font-black text-yellow-300",children:[s," / 100"]})]}),c.jsx(ir,{className:"text-yellow-400 shrink-0",size:26})]}):c.jsxs("div",{className:"text-[11px] font-bold text-slate-500 bg-slate-200/70 px-2.5 py-1 rounded-xl self-start",children:["Terjawab: ",y," dari ",ua.length]})]}),r&&c.jsxs("div",{className:"mb-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("span",{className:"text-[10px] sm:text-xs text-sky-300 font-bold uppercase tracking-wider flex items-center gap-1.5",children:[c.jsx(Jy,{size:14}),"Perbandingan Pretest vs Posttest"]}),c.jsxs("div",{className:"flex items-center gap-3 pt-0.5",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] text-slate-300 block",children:"Pretest"}),c.jsx("span",{className:"text-base sm:text-lg font-bold text-slate-100",children:l})]}),c.jsx($t,{size:15,className:"text-sky-400 mt-1"}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] text-slate-300 block",children:"Posttest"}),c.jsx("span",{className:"text-base sm:text-lg font-black text-yellow-300",children:s})]}),c.jsxs("div",{className:"pl-2.5 border-l border-slate-700",children:[c.jsx("span",{className:"text-[10px] text-emerald-300 block",children:"Peningkatan"}),c.jsxs("span",{className:"text-base sm:text-lg font-black text-emerald-400",children:[m>=0?`+${m}`:m," Poin"]})]})]})]}),c.jsxs("button",{onClick:e,className:"w-full sm:w-auto px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-xs transition shadow flex items-center justify-center gap-1.5 shrink-0",children:[c.jsx("span",{children:"Klaim Sertifikat"}),c.jsx($t,{size:14})]})]}),c.jsx("div",{className:"space-y-4 flex-1",children:ua.map((_,g)=>{const d=n[_.id],x=r&&d===_.correctAnswer;return c.jsxs("div",{className:`p-4 rounded-xl border transition-all ${r?x?"bg-emerald-50/70 border-emerald-300":"bg-rose-50/70 border-rose-300":"bg-white border-slate-200 shadow-sm"}`,children:[c.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[c.jsxs("span",{className:"text-xs font-black text-emerald-700",children:["SOAL ",g+1]}),r&&c.jsx("span",{className:"text-xs font-bold",children:x?c.jsxs("span",{className:"text-emerald-700 font-black flex items-center gap-1",children:[c.jsx(Er,{size:16})," Benar"]}):c.jsxs("span",{className:"text-rose-600 font-black flex items-center gap-1",children:[c.jsx(_h,{size:16})," Kurang Tepat"]})})]}),c.jsx("p",{className:"text-sm font-bold text-slate-900 leading-snug mb-3",children:_.question}),c.jsx("div",{className:"space-y-2",children:_.options.map(v=>{const S=d===v.key,N=r&&v.key===_.correctAnswer,k=r&&S&&!N;return c.jsxs("button",{onClick:()=>h(_.id,v.key),disabled:r,className:`w-full text-left p-3 rounded-xl text-xs font-semibold transition border flex items-center gap-3 ${N?"bg-emerald-600 text-white border-emerald-600 shadow-sm":k?"bg-rose-600 text-white border-rose-600":S?"bg-blue-100 border-blue-500 text-blue-900 font-bold":"bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"}`,children:[c.jsx("span",{className:`w-6 h-6 rounded-lg flex items-center justify-center font-black shrink-0 ${N||k?"bg-white/20 text-white":S?"bg-blue-600 text-white":"bg-slate-200 text-slate-700"}`,children:v.key}),c.jsx("span",{className:"flex-1 leading-relaxed",children:v.text})]},v.key)})}),r&&c.jsxs("div",{className:"mt-3 pt-2.5 border-t border-slate-200 text-xs text-slate-600",children:[c.jsxs("span",{className:"font-bold text-slate-900",children:["Kunci Jawaban (",_.correctAnswer,"):"," "]}),c.jsx("span",{children:_.explanation})]})]},_.id)})}),c.jsx("div",{className:"pt-5 mt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3",children:r?c.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-center justify-between gap-3",children:[c.jsxs("button",{onClick:f,className:"px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5",children:[c.jsx(ri,{size:15}),c.jsx("span",{children:"Coba Ulang Posttest"})]}),c.jsxs("button",{onClick:e,className:"w-full sm:w-auto px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-black text-sm rounded-xl shadow-md flex items-center justify-center gap-2",children:[c.jsx(ir,{size:18,className:"text-yellow-400"}),c.jsx("span",{children:"Buka Ringkasan Hasil & Sertifikat"}),c.jsx($t,{size:18})]})]}):c.jsx("button",{onClick:p,disabled:y<ua.length,className:`w-full sm:w-auto px-8 py-3 rounded-xl font-black text-sm transition shadow-md flex items-center justify-center gap-2 ${y===ua.length?"bg-emerald-600 hover:bg-emerald-500 text-white":"bg-slate-300 text-slate-500 cursor-not-allowed"}`,children:c.jsxs("span",{children:["Kirim Jawaban Posttest (",y,"/",ua.length,")"]})})})]})}const X2=[{id:"r1",label:"Refleksi 1: Kejujuran Sikap",question:"Apakah saya pernah bercanda dengan teman sampai membuatnya terlihat diam, cemas, atau tidak nyaman?",placeholder:"Tuliskan pengalaman atau renunganmu secara jujur di sini..."},{id:"r2",label:"Refleksi 2: Keberanian Bersikap",question:"Apa yang akan saya lakukan jika mulai besok melihat ada teman di kelas yang diejek, diabaikan, atau dikucilkan?",placeholder:"Langkah nyata yang akan saya ambil sebagai saksi peduli (upstander)..."},{id:"r3",label:"Refleksi 3: Menghargai Perbedaan",question:"Bagaimana cara saya menunjukkan rasa hormat dan penerimaan kepada teman yang memiliki sifat, latar belakang, atau fisik yang berbeda?",placeholder:"Cara saya merangkul keberagaman teman di madrasah..."},{id:"r4",label:"Refleksi 4: Saluran Bantuan",question:"Siapa orang dewasa di madrasah (guru BK, wali kelas, atau orang tua) yang dapat saya hubungi dengan nyaman jika mengalami atau melihat perundungan?",placeholder:"Nama guru atau figur dewasa yang saya percaya..."},{id:"r5",label:"Refleksi 5: Aksi Nyata (Ikrar)",question:"Apa satu tindakan nyata yang berkomitmen saya lakukan hari ini untuk membuat kelas MTs SA Riyadul Bayan lebih aman dan nyaman bagi semua?",placeholder:"Ikrar komitmen diri saya untuk kelas yang peduli..."}];function K2({onSavePledge:t}){const[e,n]=we.useState({}),[i,r]=we.useState(""),[a,s]=we.useState(!1);we.useEffect(()=>{const u=localStorage.getItem("emodul_reflections");if(u)try{const h=JSON.parse(u);n(h.answers||{}),r(h.name||"")}catch{}},[]);const o=(u,h)=>{n(p=>({...p,[u]:h})),s(!1)},l=u=>{u.preventDefault(),qe(),localStorage.setItem("emodul_reflections",JSON.stringify({answers:e,name:i,savedAt:new Date().toISOString()})),s(!0),Ka(),Ai({particleCount:70,spread:70,origin:{y:.7}}),t&&t(i,e)};return c.jsxs("div",{className:"flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"pb-3 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-rose-700 uppercase bg-rose-100 px-2.5 py-0.5 rounded-full",children:"Refleksi & Komitmen (FR-09)"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 flex items-center gap-2",children:c.jsx("span",{children:"💖 Ruang Refleksi Diri & Ikrar"})}),c.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500 mt-0.5",children:"Perubahan madrasah yang ramah dimulai dari kesadaran diri sendiri."})]}),c.jsxs("form",{onSubmit:l,className:"space-y-3 flex-1",children:[c.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm",children:[c.jsx("label",{className:"text-[11px] sm:text-xs font-black text-blue-900 block mb-1",children:"Nama Lengkap Siswa MTs SA Riyadul Bayan:"}),c.jsx("input",{type:"text",required:!0,value:i,onChange:u=>{r(u.target.value),s(!1)},placeholder:"Contoh: Muhammad Rifqi Pratama",className:"w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-800 bg-slate-50"})]}),X2.map((u,h)=>c.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm space-y-1.5",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-black text-rose-600 block",children:u.label}),c.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-900 leading-snug",children:u.question}),c.jsx("textarea",{rows:2,value:e[u.id]||"",onChange:p=>o(u.id,p.target.value),placeholder:u.placeholder,className:"w-full p-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400 font-medium text-slate-700 bg-slate-50/70"})]},u.id)),c.jsx("div",{className:"pt-2",children:c.jsxs("button",{type:"submit",className:"w-full py-2.5 sm:py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 active:scale-98",children:[a?c.jsx(Er,{size:16}):c.jsx(zy,{size:16}),c.jsx("span",{children:a?"Ikrar Berhasil Disimpan!":"Simpan Refleksi & Teguhkan Ikrar"})]})})]})]})}function q2({studentName:t,preScore:e,postScore:n,onClose:i}){const r=we.useRef(null),a=()=>{qe(),window.print()},s=t||"Sahabat Peduli YAPIRA",o=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});return c.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto",children:c.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-6 md:p-8 shadow-2xl relative border-3 sm:border-4 border-amber-400 my-auto text-slate-800 max-h-[95vh] overflow-y-auto",children:[c.jsx("button",{onClick:i,className:"absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition",children:c.jsx(zg,{size:18})}),c.jsxs("div",{ref:r,className:"border-2 sm:border-4 border-double border-blue-900 p-3.5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#FFFDF9] text-center relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-5",children:c.jsx(ir,{size:300,className:"text-blue-950"})}),c.jsxs("div",{className:"relative z-10 space-y-2 sm:space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest text-blue-900 uppercase",children:[c.jsx(Wy,{className:"text-emerald-600",size:16}),c.jsx("span",{children:"MTs SA RIYADUL BAYAN (YAPIRA)"})]}),c.jsx("h1",{className:"text-lg sm:text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-tight leading-snug",children:"SERTIFIKAT KELULUSAN E-MODUL"}),c.jsx("div",{className:"inline-block px-3 py-0.5 bg-amber-100 border border-amber-300 text-amber-900 rounded-full text-[10px] sm:text-xs font-black",children:"🏆 DUTA PENCEGAHAN PERUNDUNGAN & KEPEDULIAN"}),c.jsx("p",{className:"text-[10px] sm:text-xs text-slate-600 italic pt-1",children:"Diberikan secara resmi sebagai pengakuan atas komitmen dan pemahaman edukasi:"}),c.jsx("div",{className:"py-1",children:c.jsx("span",{className:"text-lg sm:text-2xl md:text-3xl font-black text-blue-900 border-b-2 border-amber-400 pb-0.5 inline-block px-4 font-serif",children:s})}),c.jsxs("p",{className:"text-[10px] sm:text-xs text-slate-700 leading-relaxed max-w-lg mx-auto",children:["Telah menyelesaikan seluruh rangkaian pembelajaran interaktif ",c.jsx("b",{children:'"Stop Bullying, Start Caring"'}),", memperagakan simulasi 3D karakter, menuntaskan misi mini games, dan berkomitmen menciptakan madrasah yang aman, ramah, dan saling peduli."]}),c.jsxs("div",{className:"flex items-center justify-center gap-4 sm:gap-6 py-2 sm:py-3 border-y border-slate-200 text-xs",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-500 block text-[9px] sm:text-[10px]",children:"PRETEST"}),c.jsxs("span",{className:"font-bold text-slate-700 text-xs sm:text-sm",children:[e," Pts"]})]}),c.jsx("div",{className:"h-5 sm:h-6 w-px bg-slate-300"}),c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-500 block text-[9px] sm:text-[10px]",children:"POSTTEST"}),c.jsxs("span",{className:"font-black text-emerald-700 text-xs sm:text-sm",children:[n," / 100"]})]}),c.jsx("div",{className:"h-5 sm:h-6 w-px bg-slate-300"}),c.jsxs("div",{children:[c.jsx("span",{className:"text-slate-500 block text-[9px] sm:text-[10px]",children:"STATUS"}),c.jsx("span",{className:"font-black text-blue-900 uppercase text-xs sm:text-sm",children:"KOMPETEN"})]})]}),c.jsxs("div",{className:"flex items-end justify-between pt-2 sm:pt-4 text-[10px] sm:text-xs text-slate-600",children:[c.jsxs("div",{className:"text-left",children:[c.jsx("span",{className:"block text-[9px] text-slate-500",children:"Tanggal Terbit:"}),c.jsx("span",{className:"font-bold text-slate-800",children:o})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("span",{className:"font-bold text-slate-800 block",children:"Tim Pengembang E-Modul"}),c.jsx("span",{className:"text-[9px] text-slate-500",children:"Edukasi Anti-Bullying YAPIRA"})]})]})]})]}),c.jsxs("div",{className:"flex items-center justify-end gap-2.5 mt-4",children:[c.jsxs("button",{onClick:a,className:"px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 shadow",children:[c.jsx(Iy,{size:15}),c.jsx("span",{children:"Cetak / PDF"})]}),c.jsx("button",{onClick:i,className:"px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs transition",children:"Tutup"})]})]})})}function Y2({onRestartLearning:t,onNavigateToCover:e}){const[n,i]=we.useState(0),[r,a]=we.useState(0),[s,o]=we.useState("Sahabat Peduli YAPIRA"),[l,u]=we.useState(!1);we.useEffect(()=>{const f=localStorage.getItem("emodul_pretest_score");f!==null&&i(parseInt(f,10));const m=localStorage.getItem("emodul_posttest_score");m!==null&&a(parseInt(m,10));const y=localStorage.getItem("emodul_reflections");if(y)try{const _=JSON.parse(y);_.name&&o(_.name)}catch{}},[]);const h=r-n,p=()=>{qe(),Br(),u(!0),Ai({particleCount:90,spread:80})};return c.jsxs("div",{className:"flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll",children:[c.jsxs("div",{className:"pb-3 mb-3 border-b border-slate-200",children:[c.jsx("span",{className:"text-[10px] sm:text-[11px] font-extrabold tracking-wider text-indigo-700 uppercase bg-indigo-100 px-2.5 py-0.5 rounded-full",children:"Rangkuman Hasil Belajar (FR-10)"}),c.jsx("h2",{className:"text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1",children:"📊 Progres & Rekapitulasi Capaian"}),c.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500 mt-0.5",children:"Hasil evaluasi setelah menempuh seluruh modul interaktif."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 mb-4",children:[c.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm text-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-slate-400 uppercase",children:"Pretest (Awal)"}),c.jsx("div",{className:"text-2xl sm:text-3xl font-black text-blue-900 mt-0.5",children:n}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-500",children:"Uji dasar"})]}),c.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm text-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-slate-400 uppercase",children:"Posttest (Akhir)"}),c.jsx("div",{className:"text-2xl sm:text-3xl font-black text-emerald-600 mt-0.5",children:r}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-500",children:"Evaluasi pasca materi"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-indigo-900 to-blue-950 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm text-center",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-indigo-200 uppercase",children:"Peningkatan"}),c.jsxs("div",{className:"text-2xl sm:text-3xl font-black text-amber-400 mt-0.5",children:[h>=0?`+${h}`:h," Poin"]}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-indigo-200",children:h>0?"Kemajuan terbukti!":"Pemahaman stabil"})]})]}),c.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm mb-4 space-y-2 sm:space-y-3",children:[c.jsx("h4",{className:"text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-wider",children:"Lencana Interaktif Terbuka:"}),c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5",children:[c.jsxs("div",{className:"p-2 sm:p-3 rounded-xl bg-sky-50 border border-sky-200 text-center space-y-0.5",children:[c.jsx("span",{className:"text-xl sm:text-2xl block",children:"🕵️"}),c.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-sky-900 block truncate",children:"Detektif"}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-sky-600 block",children:"Game 1"})]}),c.jsxs("div",{className:"p-2 sm:p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-center space-y-0.5",children:[c.jsx("span",{className:"text-xl sm:text-2xl block",children:"🛡️"}),c.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-cyan-900 block truncate",children:"Defender"}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-cyan-600 block",children:"Game 2"})]}),c.jsxs("div",{className:"p-2 sm:p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-0.5",children:[c.jsx("span",{className:"text-xl sm:text-2xl block",children:"🧭"}),c.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-emerald-900 block truncate",children:"Upstander"}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-emerald-600 block",children:"Game 3"})]}),c.jsxs("div",{className:"p-2 sm:p-3 rounded-xl bg-purple-50 border border-purple-200 text-center space-y-0.5",children:[c.jsx("span",{className:"text-xl sm:text-2xl block",children:"💡"}),c.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-purple-900 block truncate",children:"Pematah Mitos"}),c.jsx("span",{className:"text-[9px] sm:text-[10px] text-purple-600 block",children:"Game 4"})]})]})]}),c.jsxs("div",{className:"bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 p-3.5 sm:p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 mb-3",children:[c.jsxs("div",{className:"space-y-0.5 text-center sm:text-left",children:[c.jsxs("div",{className:"flex items-center justify-center sm:justify-start gap-1.5 font-black text-xs sm:text-sm",children:[c.jsx(yh,{size:16}),c.jsx("span",{children:"Sertifikat Kelulusan Siap Diterbitkan!"})]}),c.jsxs("p",{className:"text-[11px] sm:text-xs text-slate-900 leading-snug",children:["Atas nama ",c.jsx("b",{children:s})," sebagai Duta Anti-Bullying MTs SA Riyadul Bayan."]})]}),c.jsxs("button",{onClick:p,className:"w-full sm:w-auto px-5 py-2.5 bg-slate-950 hover:bg-slate-900 text-white font-black text-xs rounded-xl shadow transition flex items-center justify-center gap-2 shrink-0 active:scale-95",children:[c.jsx(ir,{size:16,className:"text-amber-400"}),c.jsx("span",{children:"Buka Sertifikat"})]})]}),c.jsxs("div",{className:"pt-3 border-t border-slate-200 flex items-center justify-between",children:[c.jsxs("button",{onClick:t,className:"px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5",children:[c.jsx(ri,{size:15}),c.jsx("span",{children:"Baca Ulang Modul"})]}),c.jsxs("button",{onClick:e,className:"px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow",children:[c.jsx("span",{children:"Kembali ke Cover Buku"}),c.jsx($t,{size:15})]})]}),l&&c.jsx(q2,{studentName:s,preScore:n,postScore:r,onClose:()=>u(!1)})]})}function $2(){const[t,e]=we.useState(0),n=10,i=l=>{l>=0&&l<n&&e(l)},r=l=>{switch(l){case 0:return{left:c.jsx(qf,{onStart:()=>i(1)}),right:c.jsx(Yf,{onSelectSpread:i})};case 1:return{left:c.jsx(a1,{onNext:()=>i(2)}),right:c.jsx(V2,{onComplete:()=>{},onNavigateToMateri:()=>i(2)})};case 2:return{left:c.jsx(s1,{onNext:()=>i(3)}),right:c.jsx(o1,{onNext:()=>i(3)})};case 3:return{left:c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsx("div",{className:"pb-2 mb-2 border-b-2 border-slate-800 flex items-center justify-between",children:c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] font-black uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full border border-blue-300",children:"Animasi 3D Interaktif (FR-05)"}),c.jsx("h3",{className:"text-base font-black text-slate-900 mt-0.5",children:"Simulasi 3D Karakter Bullying"})]})}),c.jsx("div",{className:"flex-1 min-h-[320px]",children:c.jsx(O2,{})})]}),right:c.jsx(B2,{onScoreUpdate:()=>{}})};case 4:return{left:c.jsx(l1,{onNext:()=>i(5)}),right:c.jsx(j2,{onScoreUpdate:()=>{}})};case 5:return{left:c.jsx(c1,{onNext:()=>i(6)}),right:c.jsx(u1,{onNext:()=>i(6)})};case 6:return{left:c.jsx(H2,{onComplete:()=>{}}),right:c.jsx(G2,{onScoreUpdate:()=>{}})};case 7:return{left:c.jsx(d1,{onNext:()=>i(8)}),right:c.jsx(h1,{onNext:()=>i(8)})};case 8:return{left:c.jsx(K2,{onSavePledge:()=>{}}),right:c.jsx(W2,{onComplete:()=>{},onNavigateToSummary:()=>i(9)})};case 9:return{left:c.jsx(Y2,{onRestartLearning:()=>i(1),onNavigateToCover:()=>i(0)}),right:c.jsxs("div",{className:"flex flex-col h-full justify-center items-center text-center p-4 space-y-4",children:[c.jsxs("div",{className:"border-4 border-dashed border-amber-400 p-6 rounded-3xl bg-amber-50/70 w-full space-y-3",children:[c.jsx("span",{className:"text-5xl block animate-bounce",children:"🏆"}),c.jsx("h3",{className:"text-xl font-black text-blue-950 uppercase",children:"Selamat! Kamu Telah Menyelesaikan E-Modul"}),c.jsx("p",{className:"text-xs text-slate-700 leading-relaxed font-semibold",children:"Telah mempelajari seluruh materi, mempraktekkan simulasi 3D, dan menuntaskan 4 mini games anti-bullying MTs SA Riyadul Bayan."}),c.jsx("button",{onClick:()=>window.print(),className:"px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs rounded-xl shadow-lg border-2 border-slate-900",children:"🖨️ Cetak / Simpan Sertifikat Resmi"})]}),c.jsx("button",{onClick:()=>i(0),className:"text-xs font-black text-blue-800 underline hover:text-blue-600",children:"Kembali ke Halaman Sampul Depan & Menu"})]})};default:return{left:c.jsx(qf,{onStart:()=>i(1)}),right:c.jsx(Yf,{onSelectSpread:i})}}},a=r(t),s=t+1<n?r(t+1):null,o=t>0?r(t-1):null;return c.jsx("div",{className:"w-full min-h-[100dvh] h-[100dvh] cartoon-room-bg flex items-center justify-center overflow-hidden p-1.5 sm:p-3 md:p-4 select-none relative",children:c.jsx(r1,{spreadIndex:t,totalSpreads:n,onSpreadChange:e,leftContent:a.left,rightContent:a.right,nextLeftContent:s==null?void 0:s.left,nextRightContent:s==null?void 0:s.right,prevLeftContent:o==null?void 0:o.left,prevRightContent:o==null?void 0:o.right})})}Su.createRoot(document.getElementById("root")).render(c.jsx(Hx.StrictMode,{children:c.jsx($2,{})}));
