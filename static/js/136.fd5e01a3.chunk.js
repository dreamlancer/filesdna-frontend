(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[136],{132:function(e,t,n){"use strict";n(28),n(149)},134:function(e,t,n){"use strict";var c=n(26),a=n.n(c),r=n(25),o=n.n(r),l=n(38),i=n.n(l),s=n(0),u=n(24),f=n.n(u),p=n(58),d=n(106),m=n.n(d),h=n(272),b=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},g=function(e){var t,n=e.prefixCls,c=e.className,r=e.checked,l=e.onChange,i=e.onClick,u=b(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,s.useContext(h.b).getPrefixCls)("tag",n),d=f()(p,(t={},a()(t,"".concat(p,"-checkable"),!0),a()(t,"".concat(p,"-checkable-checked"),r),t),c);return s.createElement("span",o()({},u,{className:d,onClick:function(e){l&&l(!r),i&&i(e)}}))},v=n(83),x=n(160),y=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},O=new RegExp("^(".concat(v.a.join("|"),")(-inverse)?$")),E=new RegExp("^(".concat(v.b.join("|"),")$")),w=function(e,t){var n,c=e.prefixCls,r=e.className,l=e.style,u=e.children,d=e.icon,b=e.color,g=e.onClose,v=e.closeIcon,w=e.closable,C=void 0!==w&&w,j=y(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),N=s.useContext(h.b),k=N.getPrefixCls,P=N.direction,S=s.useState(!0),I=i()(S,2),R=I[0],T=I[1];s.useEffect((function(){"visible"in j&&T(j.visible)}),[j.visible]);var W=function(){return!!b&&(O.test(b)||E.test(b))},L=o()({backgroundColor:b&&!W()?b:void 0},l),z=W(),H=k("tag",c),$=f()(H,(n={},a()(n,"".concat(H,"-").concat(b),z),a()(n,"".concat(H,"-has-color"),b&&!z),a()(n,"".concat(H,"-hidden"),!R),a()(n,"".concat(H,"-rtl"),"rtl"===P),n),r),q=function(e){e.stopPropagation(),g&&g(e),e.defaultPrevented||"visible"in j||T(!1)},J="onClick"in j||u&&"a"===u.type,M=Object(p.default)(j,["visible"]),_=d||null,A=_?s.createElement(s.Fragment,null,_,s.createElement("span",null,u)):u,B=s.createElement("span",o()({},M,{ref:t,className:$,style:L}),A,C?v?s.createElement("span",{className:"".concat(H,"-close-icon"),onClick:q},v):s.createElement(m.a,{className:"".concat(H,"-close-icon"),onClick:q}):null);return J?s.createElement(x.a,null,B):B},C=s.forwardRef(w);C.displayName="Tag",C.CheckableTag=g;t.a=C},149:function(e,t,n){},158:function(e,t,n){"use strict";var c=n(26),a=n.n(c),r=n(25),o=n.n(r),l=n(60),i=n.n(l),s=n(0),u=n(24),f=n.n(u),p=n(169),d=n(272),m=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};var h=["xs","sm","md","lg","xl","xxl"],b=s.forwardRef((function(e,t){var n,c=s.useContext(d.b),r=c.getPrefixCls,l=c.direction,u=s.useContext(p.a),b=u.gutter,g=u.wrap,v=e.prefixCls,x=e.span,y=e.order,O=e.offset,E=e.push,w=e.pull,C=e.className,j=e.children,N=e.flex,k=e.style,P=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=r("col",v),I={};h.forEach((function(t){var n,c={},r=e[t];"number"===typeof r?c.span=r:"object"===i()(r)&&(c=r||{}),delete P[t],I=o()(o()({},I),(n={},a()(n,"".concat(S,"-").concat(t,"-").concat(c.span),void 0!==c.span),a()(n,"".concat(S,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),a()(n,"".concat(S,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),a()(n,"".concat(S,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),a()(n,"".concat(S,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),a()(n,"".concat(S,"-rtl"),"rtl"===l),n))}));var R=f()(S,(n={},a()(n,"".concat(S,"-").concat(x),void 0!==x),a()(n,"".concat(S,"-order-").concat(y),y),a()(n,"".concat(S,"-offset-").concat(O),O),a()(n,"".concat(S,"-push-").concat(E),E),a()(n,"".concat(S,"-pull-").concat(w),w),n),C,I),T=o()({},k);return b&&(T=o()(o()(o()({},b[0]>0?{paddingLeft:b[0]/2,paddingRight:b[0]/2}:{}),b[1]>0?{paddingTop:b[1]/2,paddingBottom:b[1]/2}:{}),T)),N&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(N),"auto"!==N||!1!==g||T.minWidth||(T.minWidth=0)),s.createElement("div",o()({},P,{style:T,className:R,ref:t}),j)}));b.displayName="Col",t.a=b},1857:function(e,t,n){"use strict";n.r(t);n(65);var c=n(66),a=(n(132),n(134)),r=(n(72),n(73)),o=n(0),l=n.n(o),i=n(45),s=n(110),u=n(53),f=n(93),p=n(184);t.default=function(){var e=Object(f.useSelector)((function(e){return e.Auth.userData})),t=Object(u.isObject)(e)?e:{};return l.a.createElement(s.d,null,l.a.createElement(c.a,{gutter:[16]},l.a.createElement(r.a,{xs:24},l.a.createElement("h2",{className:"userSettingsTitle"},l.a.createElement(i.a,{id:"settings.userVerification"}),l.a.createElement("small",{className:"ml5"},"(".concat(p.j.is_verify_email.weightage,"%)")))),l.a.createElement(r.a,{xs:24,xxl:12,xl:20,lg:20},l.a.createElement("div",{className:"proofWrapper"},l.a.createElement("div",null,l.a.createElement("h3",{className:"uploadTitleWrap"},l.a.createElement(i.a,{id:"verification.email"})),l.a.createElement(a.a,{color:"green",style:{marginLeft:8}},l.a.createElement(i.a,{id:"settings.verified"})))),l.a.createElement("div",{className:"phoneWrapper"},l.a.createElement("span",{className:"phonoNumber"},t.email)))))}},65:function(e,t,n){"use strict";n(28),n(82)},66:function(e,t,n){"use strict";var c=n(896);t.a=c.a},72:function(e,t,n){"use strict";n(28),n(82)},73:function(e,t,n){"use strict";var c=n(158);t.a=c.a},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var c=n(125),a=Object(c.a)("success","processing","error","default","warning"),r=Object(c.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var c=n(26),a=n.n(c),r=n(25),o=n.n(r),l=["xxl","xl","lg","md","sm","xs"],i={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,u=-1,f={},p={matchHandlers:{},dispatch:function(e){return f=e,s.forEach((function(e){return e(f)})),s.size>=1},subscribe:function(e){return s.size||this.register(),u+=1,s.set(u,e),e(f),u},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(i).forEach((function(t){var n=i[t],c=e.matchHandlers[n];null===c||void 0===c||c.mql.removeListener(null===c||void 0===c?void 0:c.listener)})),s.clear()},register:function(){var e=this;Object.keys(i).forEach((function(t){var n=i[t],c=function(n){var c=n.matches;e.dispatch(o()(o()({},f),a()({},t,c)))},r=window.matchMedia(n);r.addListener(c),e.matchHandlers[n]={mql:r,listener:c},c(r)}))}};t.a=p}}]);