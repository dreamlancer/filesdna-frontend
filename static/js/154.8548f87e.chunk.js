(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[154],{1126:function(e,n,t){"use strict";t.r(n);var r=t(35),a=t.n(r),c=t(33),o=t(84),i=t(43),l=t(0),s=t.n(l),u=t(319),d=t(61),p=t(68),m=t(45),f=t(69),b=(t(79),t(64)),v=t(577),x=t(578),g=t(189),E=t(282),h=t(309),O=function(e){var n=e.text,t=e.index,r=e.selectedIndex,a=e.record,c=e.onClick,o=e.isRecording,i=e.deleteHandler,l=o&&r===t;return s.a.createElement(h.a,null,s.a.createElement("div",{className:"recordContent"},s.a.createElement("p",{className:"form-check-label"},n),s.a.createElement("div",{className:"recordAction"},s.a.createElement(b.a,{placement:"bottom",title:s.a.createElement(m.a,{id:"".concat(l?"common.stop":"record")})},s.a.createElement(E.a,null,s.a.createElement(d.a,{className:l&&"rec",shape:"circle",onClick:function(){return c(t)},danger:l,icon:l?s.a.createElement(v.a,null):s.a.createElement(x.a,null)}))),a&&!!a.file&&s.a.createElement(b.a,{placement:"bottom",title:s.a.createElement(m.a,{id:"voice.deleteRec"})},s.a.createElement("div",null,s.a.createElement(g.a,{onConfirm:function(){return i(t)}}))))),s.a.createElement("div",{className:"recordAudio"},a&&!!a.file&&s.a.createElement("audio",{src:null===a||void 0===a?void 0:a.sourceUrl,controls:!0})))},j=(t(707),["Difficult roads often lead to beautiful destinations.","To be the best, you must be able to handle the worst.","Tough times never last, but tough people do.","Hard work beats talent when talent doesn't work hard.","If anything is worth doing, do it with all your heart."]);n.default=function(e){var n=e.token,t=e.guest,r=void 0===t?null:t,b=e.enrollSuccess,v=e.onHandleCancel,x=Object(l.useState)(!1),g=Object(i.a)(x,2),E=g[0],h=g[1],y=Object(l.useState)(null),w=Object(i.a)(y,2),k=w[0],C=w[1],R=Object(l.useState)((function(){return j.map((function(){return null}))})),S=Object(i.a)(R,2),N=S[0],T=S[1],D=Object(u.a)((function(e){var n=new File([e],"audio_".concat(k,"_file.wav"),{type:e.type}),t=Object(o.a)(N);t[k]={file:n,sourceUrl:window.URL.createObjectURL(e)},T(t)}),(function(e){"NotAllowedError"===e.name&&Object(p.a)("error","record.permission")})),U=D.start,L=D.stop,P=D.isRecording;Object(l.useEffect)((function(){null!==k&&(P?L():U())}),[k]);var B=function(){var e=Object(c.a)(a.a.mark((function e(){var n,t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:null,e.prev=1,t=new FormData,n){e.next=8;break}return e.next=6,Object(f.a)("voice/reset",{},"POST");case 6:e.next=11;break;case 8:return t.append("email",n),e.next=11,Object(f.a)("voice-non-user/reset",t,"POST",{},!0);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0.message),Object(p.a)("error",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(">>> onEnrolUser()"),e.prev=1,h(!0),(t=new FormData).append("token",n),r&&r.isGuest&&r.guestEmail&&t.append("email",r.guestEmail),N.forEach((function(e){(null===e||void 0===e?void 0:e.file)&&t.append("audios[]",e.file)})),e.next=9,B((null===r||void 0===r?void 0:r.guestEmail)||null);case 9:return c=r&&r.isGuest?"voice-non-user/enroll":"voice/enroll",e.next=12,Object(f.a)(c,t,"POST",{},!0);case 12:e.sent.success?(Object(p.a)("success","voice.enrollSuccess"),b&&b(!0)):Object(p.a)("success","voice.enrollSuccess"),T(j.map((function(){return null}))),C(null),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),Object(p.a)("success","voice.enrollSuccess");case 21:return e.prev=21,h(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[1,18,21,24]])})));return function(){return e.apply(this,arguments)}}(),H=function(e){if(P)Object(p.a)("error","voice.stopRecDelete");else{var n=Object(o.a)(N);n[e]=null,T(n)}},I=function(e){var n=k===e;P?n?L():Object(p.a)("error","voice.stopChangeTxt"):n?U():C(e)},V=Object(l.useMemo)((function(){return Object(o.a)(N).filter((function(e){return!!e})).length}),[N]),_=5===V;return s.a.createElement("div",{className:"enrollContainer"},s.a.createElement("div",{className:"titleContent"},b&&s.a.createElement("h1",{className:"voice-title"},"Voice Recognition System"),s.a.createElement("h2",null,s.a.createElement(m.a,{id:"voice.masterVoiceRec"})),s.a.createElement("p",{className:"voice-description"},s.a.createElement(m.a,{id:"voice.masterVoiceSub"}))),s.a.createElement("div",null,j.map((function(e,n){return s.a.createElement(O,{key:e,index:n,name:"enrol",text:s.a.createElement(m.a,{id:"voice.testLine".concat(n+1)}),onClick:I,start:U,stop:L,deleteHandler:H,selectedIndex:k,record:N[n],isRecording:P})})),s.a.createElement("div",{className:"enrollContent"},s.a.createElement("div",null,s.a.createElement("span",null,s.a.createElement(m.a,{id:"voice.recorded"})," "),s.a.createElement("strong",null,V)),b&&s.a.createElement(d.a,{className:"mainBtn",type:"primary",onClick:function(){return v()}},s.a.createElement(m.a,{id:"common.cancel"})),s.a.createElement(d.a,{className:"mainBtn",type:"primary",onClick:A,loading:E,disabled:!_},s.a.createElement(m.a,{id:"voice.enroll"})))))}},180:function(e,n,t){"use strict";var r=t(5),a=t(4),c=t(56),o=t(50);function i(){var e=Object(r.a)(["\n  & .deleteCircle,\n  & .deleteCircle:hover {\n    color: ",";\n    border-width: 0px;\n  }\n"]);return i=function(){return e},e}var l=a.d.div(i(),Object(c.palette)("error",0));n.a=Object(o.a)(l)},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var r=t(35),a=t.n(r),c=t(29),o=t(33),i=t(0),l=t.n(i),s=t(297),u=t(61),d=(t(185),t(186).a),p=t(69),m=t(68),f=t(45),b=t(53),v=t(180);function x(e){var n=e.apiUrl,t=e.apiData,r=e.fetchData,i=void 0===r?function(){}:r,x=e.setState,g=void 0===x?function(){}:x,E=e.onConfirm,h=void 0===E?function(){}:E,O=e.btnId,j=e.btnProps,y=void 0===j?{}:j;function w(){return(w=Object(o.a)(a.a.mark((function e(){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(b.isObject)(t)||Object(b.isEmpty)(t)){e.next=17;break}return g((function(e){return Object(c.a)(Object(c.a)({},e),{},{loading:!0})})),e.prev=2,e.next=5,Object(p.a)(n,t,"POST");case 5:r=e.sent,o="error",r.success?(o="success",i()):g((function(e){return Object(c.a)(Object(c.a)({},e),{},{loading:!1})})),setTimeout((function(){Object(m.a)(o,r.message)}),200),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),g((function(e){return Object(c.a)(Object(c.a)({},e),{},{loading:!1})})),Object(m.a)("error");case 15:e.next=18;break;case 17:h();case 18:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return l.a.createElement(v.a,null,l.a.createElement(d,{title:l.a.createElement(f.a,{id:"common.sureDelete"}),okText:l.a.createElement(f.a,{id:"common.deleteCap"}),okButtonProps:{id:"delete-item"},cancelText:l.a.createElement(f.a,{id:"common.no"}),onConfirm:function(){return w.apply(this,arguments)},className:"deleteBtn",onCancel:null},l.a.createElement("div",null,l.a.createElement(u.a,Object.assign({id:O,shape:"circle",danger:!0,icon:l.a.createElement(s.a,null),className:"deleteCircle"},y)))))}},282:function(e,n,t){"use strict";var r=t(5),a=t(4),c=t(50);function o(){var e=Object(r.a)(["\n  @keyframes voice_pulse {\n    0% {\n      box-shadow: 0px 0px 5px 0px rgba(214, 214, 214, 0.7);\n    }\n    65% {\n      box-shadow: 0px 0px 5px 13px rgba(214, 214, 214, 0.9);\n    }\n    90% {\n      box-shadow: 0px 0px 5px 13px rgba(214, 214, 214, 0);\n    }\n  }\n\n  & .ant-btn-circle.rec {\n    animation-name: voice_pulse;\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    background-color: #ff4646;\n    color: #fff;\n    border-color: transparent !important;\n  }\n"]);return o=function(){return e},e}var i=Object(c.a)(a.d.div(o()));n.a=i},309:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(5),a=t(4);function c(){var e=Object(r.a)(["\n  padding: 5px 10px 5px 15px;\n  background: #f2f2f2;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 0px 0px 10px 0px;\n\n  & .recordContent {\n    display: flex;\n    align-items: center;\n\n    & .form-check-label {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      font-weight: 550;\n      padding-right: 10px;\n    }\n\n    & .recordAction {\n      display: flex;\n      align-items: center;\n\n      & > * {\n        margin-right: 5px;\n        &:last-child {\n          margin-right: 0px;\n        }\n      }\n    }\n  }\n"]);return c=function(){return e},e}function o(){var e=Object(r.a)(["\n  & .titleContent {\n    margin-bottom: 15px;\n\n    p {\n      font-size: 13px;\n    }\n  } \n\n  & .enrollContent {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 15px;\n  }\n\n  & .mainBtn {\n    font-size: 15px !important;\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n\n  & .resultContent {\n    & .ant-col {\n      text-align: center;\n\n      & h4 {\n        margin-bottom: 10px;\n      }\n\n      & .ant-alert {\n        width: 60%;\n        margin: 0 auto;\n      }\n    }\n  }\n\n  & .deleteVoice {\n    & p {\n      margin-bottom: 10px;\n    }\n  }\n"]);return o=function(){return e},e}var i=a.d.div(o()),l=a.d.div(c());n.b=i},319:function(e,n,t){"use strict";t.d(n,"b",(function(){return p}));var r=t(35),a=t.n(r),c=t(33),o=t(43),i=t(29),l=t(0),s=t(275),u={isRecording:!1,recorder:null,data:null,error:null},d=function(e,n){switch(n.type){case"start":case"stop":return Object(i.a)(Object(i.a)({},e),{},{isRecording:!1});case"startRecording":return Object(i.a)(Object(i.a)({},e),{},{isRecording:!0,recorder:n.payload.recorder});case"hasError":return Object(i.a)(Object(i.a)({},e),{},{isRecording:!1,error:n.payload.error});default:return e}},p=function(e,n){var t=Object(l.useReducer)(d,u),r=Object(o.a)(t,2),i=r[0],p=r[1],m=Object(l.useState)(0),f=Object(o.a)(m,2),b=f[0],v=f[1],x=function(n){var t=n.data;e(t)},g=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!i.isRecording){e.next=3;break}return e.abrupt("return");case 3:return p({type:"start"}),v(0),e.next=7,navigator.mediaDevices.getUserMedia({audio:!0});case 7:t=e.sent,r=new s.a(t,{mimeType:"audio/wav"}),p({type:"startRecording",payload:{recorder:r}}),r.start(),r.addEventListener("dataavailable",x),i.error&&p({type:"hasError",payload:{error:null}}),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ state.error",e.t0),n(e.t0),p({type:"hasError",payload:{error:e.t0}});case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){return function(){i.recorder&&i.recorder.removeEventListener("dataavailable",(function(){}))}}),[i.recorder]),{start:g,stop:function(){try{var e=i.recorder;p({type:"stop"}),e&&("inactive"!==e.state&&e.stop(),e.removeEventListener("dataavailable",x))}catch(t){n(t),p({type:"hasError",payload:{error:t}})}},recorder:i.recorder,isRecording:i.isRecording,error:i.error,countdown:b}};n.a=p},707:function(e,n,t){"use strict";n.a={"There is no such user, aborting.":"voice.verifyEnrollErr","There is already such user, aborting.":"voice.alreadyEnroll","Successfully compaired voice footprint":"voice.failedErr"}}}]);