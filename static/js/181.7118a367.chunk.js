(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[181],{1043:function(t,n,e){"use strict";e.r(n);e(95);var a=e(96),r=e(0),i=e.n(r),o=e(199),c=e(110),l=e(237),u=e.n(l),s=e(693),d=e(45),f=e(245),b=Object(r.lazy)((function(){return e.e(138).then(e.bind(null,1813))})),h=Object(r.lazy)((function(){return e.e(149).then(e.bind(null,776))}));n.default=function(t){var n=t.docData,e=void 0===n?{}:n,l=t.loggedIn,m=t.mHeight,g=e.data,v=e.loading,p=Object(f.g)(),H=Object(f.h)().search,x=u.a.parse(H),y=(null===x||void 0===x?void 0:x.active)||"file-info";return i.a.createElement(c.b,{className:"docOtherInfo",style:{height:m}},i.a.createElement(s.b,{activeKey:y||"file-info",onChange:function(t){return p.replace("?active=".concat(t))},defaultActiveKey:"file-info"},i.a.createElement(s.a,{tab:i.a.createElement(d.a,{id:"common.fInfo"}),key:"file-info"},i.a.createElement(r.Suspense,{fallback:i.a.createElement(a.a,null)},!v&&i.a.createElement(b,{dcData:g}))),l&&i.a.createElement(s.a,{tab:i.a.createElement(d.a,{id:"common.history"}),key:"history"},i.a.createElement(r.Suspense,{fallback:i.a.createElement(a.a,null)},i.a.createElement(o.a,{renderTrackHorizontal:function(t){return i.a.createElement("div",Object.assign({},t,{className:"track-horizontal"}))},autoHide:!1,autoHeight:!0,autoHeightMax:m-100},i.a.createElement(h,{activities:g.activities}))))))}},199:function(t,n,e){"use strict";var a=e(142),r=e(0),i=e.n(r),o=e(220);n.a=function(t){var n=t.id,e=t.style,r=t.children,c=t.className,l=t.autoHide,u=void 0===l||l,s=t.autoHeight,d=t.autoHeightMin,f=void 0===d?0:d,b=t.autoHeightMax,h=void 0===b?200:b,m=t.sRef,g=Object(a.a)(t,["id","style","children","className","autoHide","autoHeight","autoHeightMin","autoHeightMax","sRef"]);return i.a.createElement(o.Scrollbars,Object.assign({ref:m,id:n,className:c,style:e,autoHide:u,autoHideTimeout:1e3,autoHideDuration:200,thumbMinSize:30,universal:!0,autoHeight:s,autoHeightMin:f,autoHeightMax:h},g),r)}},693:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));e(353);var a=e(358),r=e(50),i=e(5),o=e(4),c=e(56);function l(){var t=Object(i.a)(["\n  &.ant-tabs {\n    color: ",";\n    .ant-tabs-tab-active {\n      color: ",";\n    }\n\n  \n    &:not(.ant-tabs-vertical) {\n      > .ant-tabs-content-animated {\n        display: ",";\n      }\n    }\n\n    .ant-tabs-nav {\n      .ant-tabs-ink-bar {\n        background-color: ",";\n      }\n\n      .ant-tabs-tab {\n        &:hover {\n          color: ",";\n        }\n        margin: ",";\n\n        .anticon:not(.anticon-close) {\n          margin: ",";\n\n          &.anticon-close{\n            right: ",";;\n            left: ",";;\n          }\n        }\n      }\n    }\n\n    .ant-tabs-tab-prev {\n      left: ",";\n      right ",";\n      transform: ",";\n\n    }\n\n    .ant-tabs-tab-next {\n      left: ",";\n      right ",";\n      transform: ",";\n    }\n\n    &.ant-tabs-vertical{\n      .ant-tabs-tab-prev,\n      .ant-tabs-tab-next{\n        transform: rotate(0);\n      }\n    }\n  }\n"]);return l=function(){return t},t}var u=function(t){return Object(o.d)(t)(l(),Object(c.palette)("text",0),Object(c.palette)("primary",0),(function(t){return"rtl"===t["data-rtl"]?"block":"flex"}),Object(c.palette)("primary",0),Object(c.palette)("primary",10),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 24px":"0 24px 0 0"}),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 8px":"0 8px 0 0"}),(function(t){return"rtl"===t["data-rtl"]?"inherit":"2px"}),(function(t){return"rtl"===t["data-rtl"]?"2px":"inherit"}),(function(t){return"rtl"===t["data-rtl"]?"inherit":"0"}),(function(t){return"rtl"===t["data-rtl"]?"2px":"inherit"}),(function(t){return"rtl"===t["data-rtl"]?"rotate(180deg)":"rotate(0)"}),(function(t){return"rtl"===t["data-rtl"]?"0":"inherit"}),(function(t){return"rtl"===t["data-rtl"]?"inherit":"2px"}),(function(t){return"rtl"===t["data-rtl"]?"rotate(180deg)":"rotate(0)"}))}(a.a),s=a.a.TabPane,d=Object(r.a)(u);n.b=d}}]);