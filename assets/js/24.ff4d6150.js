(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{375:function(e,t,v){"use strict";v.r(t);var r=v(26),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" "),v("strong",[e._v("前言")])]),e._v(" "),v("p",[e._v("这一篇章我们将会开启对"),v("code",[e._v("reactivity")]),e._v("包的解析，这也是"),v("code",[e._v("Vue")]),e._v("中非常重要的响应式系统的实现，\n得益于"),v("code",[e._v("Vue3")]),e._v("的架构升级，"),v("code",[e._v("reactivity")]),e._v("从组件的内部分离出来，独立成一个响应式的库，\n现在我们阅读起源码也轻松了不少。")]),e._v(" "),v("h2",{attrs:{id:"前置准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前置准备"}},[e._v("#")]),e._v(" 前置准备")]),e._v(" "),v("p",[e._v("我们希望在阅读"),v("code",[e._v("reactivity")]),e._v("包的具体解析之前，您能对于"),v("code",[e._v("reactivity")]),e._v("所暴露的方法有一些使用上的大致了解；\n如果您还完全不了解，可以查看"),v("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 组合式 API 手册"),v("OutboundLink")],1),e._v("来学习。\n如果你先想了解"),v("code",[e._v("composition API")]),e._v("的设计初衷及其细节，\n可以通过"),v("a",{attrs:{href:"https://composition-api.vuejs.org/zh/#%E6%A6%82%E8%BF%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("组合式 API 征求意见稿"),v("OutboundLink")],1),e._v("来学习。")]),e._v(" "),v("h2",{attrs:{id:"目标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[e._v("#")]),e._v(" 目标")]),e._v(" "),v("p",[e._v("本篇章以"),v("code",[e._v("reactive")]),e._v("、"),v("code",[e._v("ref")]),e._v("以及"),v("code",[e._v("effect")]),e._v("为突破口来理解"),v("code",[e._v("Vue3")]),e._v("响应式系统的依赖收集和派发更新如何通过"),v("code",[e._v("proxy")]),e._v("来处理的，\n副作用函数又是如何被收集；后续再深入对于"),v("code",[e._v("computed")]),e._v("、"),v("code",[e._v("watch")]),e._v("等等"),v("code",[e._v("API")]),e._v("进行解析。")])])}),[],!1,null,null,null);t.default=_.exports}}]);