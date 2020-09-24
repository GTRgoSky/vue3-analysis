(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{376:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"计算属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算属性"}},[t._v("#")]),t._v(" 计算属性")]),t._v(" "),a("p",[a("code",[t._v("Vue3")]),t._v("中的计算属性已经被函数化，新的"),a("code",[t._v("API")]),t._v("形态如下：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plusOne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plusTwo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplusOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplusTwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("依旧是接收一个"),a("code",[t._v("getter")]),t._v("和"),a("code",[t._v("setter")]),t._v("返回的是一个"),a("code",[t._v("ref")]),t._v("类型，\n我们谈论计算属性时说的最多的就是它拥有缓存特性和延迟求值，我们就从计算属性的这两个特性出发来探究它背后的原理。")]),t._v(" "),a("h2",{attrs:{id:"本篇目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本篇目标"}},[t._v("#")]),t._v(" 本篇目标")]),t._v(" "),a("ol",[a("li",[t._v("理解"),a("code",[t._v("computed")]),t._v("的实现原理")]),t._v(" "),a("li",[t._v("理解计算属性的缓存和延迟求值特性")])]),t._v(" "),a("h2",{attrs:{id:"函数概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数概览"}},[t._v("#")]),t._v(" 函数概览")]),t._v(" "),a("p",[t._v("我从源码中提取出"),a("code",[t._v("computed")]),t._v("的类型声明如下：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只读的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Readonly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Readonly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可更改的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),a("p",[t._v("我们直接看到"),a("code",[t._v("computed")]),t._v("的函数体：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reactivity/computed.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  getterOrOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComputedGetter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" WritableComputedOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 处理getter/setter")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" getter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComputedGetter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" setter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComputedSetter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getterOrOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    getter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getterOrOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    setter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __DEV__\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Write operation failed: computed value is readonly"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOOP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    getter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getterOrOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    setter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getterOrOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否需要重新求值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dirty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缓存当前值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" computed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComputedRef"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 创建getter 副作用函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" runner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("effect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lazy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("scheduler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("dirty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dirty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TriggerOpTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 创建computed ref")]),t._v("\n  computed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识为ref对象")]),t._v("\n    __v_isRef"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只读标识")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ReactiveFlags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IS_READONLY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getterOrOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("getterOrOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向外暴露副作用函数，便于stop")]),t._v("\n    effect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要求取新值就运行runner")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dirty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dirty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发依赖收集")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("track")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TrackOpTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们依次来解析：")]),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"_1-处理-getter-setter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-处理-getter-setter"}},[t._v("#")]),t._v(" 1. 处理 getter/setter")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("computed")]),t._v("可以接收两种参数，我们需要预处理一下"),a("code",[t._v("getter/setter")]),t._v("，只传"),a("code",[t._v("getter")]),t._v("时，\n在开发环境下还会生成一个警示的"),a("code",[t._v("setter")]),t._v("函数以提醒开发。")])]),t._v(" "),a("li",[a("h3",{attrs:{id:"_2-创建-getter-副作用函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-getter-副作用函数"}},[t._v("#")]),t._v(" 2. 创建 getter 副作用函数")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("computed")]),t._v("内部使用了"),a("code",[t._v("effect")]),t._v("包裹"),a("code",[t._v("getter")]),t._v("函数，注意此时"),a("code",[t._v("effect")]),t._v("的第二个参数，\n将"),a("code",[t._v("lazy")]),t._v("设置成"),a("code",[t._v("true")]),t._v("并且传入了调度函数；我们知道"),a("code",[t._v("effect")]),t._v("在被"),a("code",[t._v("trigger")]),t._v("时，\n如果存在调度函数则会直接将"),a("code",[t._v("effect")]),t._v("传入调度函数来执行。可是这里传入的调度函数并没有使用传入的"),a("code",[t._v("effect")]),t._v("参数，\n这里我们需要存疑一下。再说"),a("code",[t._v("lazy")]),t._v("属性为"),a("code",[t._v("true")]),t._v("时，是不会立即执行"),a("code",[t._v("effect")]),t._v("的，我们需要手动调用"),a("code",[t._v("runner")]),t._v("来进行首次执行，\n这里我们也存疑一下，是在何时首次调用"),a("code",[t._v("runner")]),t._v("的。")])]),t._v(" "),a("li",[a("h3",{attrs:{id:"_3-创建-computed-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-computed-ref"}},[t._v("#")]),t._v(" 3. 创建 computed ref")]),t._v(" "),a("p",[a("code",[t._v("computedRef")]),t._v("的创建还是蛮简单的，我们需要关注的是"),a("code",[t._v("get")]),t._v("的实现，我们注意到"),a("code",[t._v("get")]),t._v("返回的是"),a("code",[t._v("computed")]),t._v("函数作用域下的"),a("code",[t._v("value")]),t._v("，\n也就意味着"),a("code",[t._v("computedRef.value")]),t._v("是通过维护这个值来提供的；在"),a("code",[t._v("get")]),t._v("函数内部我们看到了当"),a("code",[t._v("dirty")]),t._v("为"),a("code",[t._v("true")]),t._v("时会执行"),a("code",[t._v("runner")]),t._v("来求值，\n我们思考一下在访问"),a("code",[t._v("computedRef.value")]),t._v("时如果需要求新值我们就计算"),a("code",[t._v("runner")]),t._v("来求值并更新"),a("code",[t._v("value")]),t._v("，如果不需要则直接返回"),a("code",[t._v("value")]),t._v("。")])])]),t._v(" "),a("h4",{attrs:{id:"那么我们怎么知道何时需要求新值呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那么我们怎么知道何时需要求新值呢？"}},[t._v("#")]),t._v(" 那么我们怎么知道何时需要求新值呢？")]),t._v(" "),a("p",[t._v("要回答这个问题我们还得回到"),a("code",[t._v("runner")]),t._v("的声明，我们在副作用函数的调度函数选项中传入了这样一段逻辑：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("dirty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dirty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TriggerOpTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("我们先考虑这段逻辑何时执行，当我们第一次访问"),a("code",[t._v("computedRef.value")]),t._v("时会执行"),a("code",[t._v("runner")]),t._v("，\n经过上一节的解析我们知道"),a("code",[t._v("effect")]),t._v("返回的是一个包裹"),a("code",[t._v("getter")]),t._v("的副作用函数，\n我们执行"),a("code",[t._v("runner")]),t._v("就会触发"),a("code",[t._v("getter")]),t._v("内部访问的响应式变量的依赖收集，\n而当我们"),a("code",[t._v("getter")]),t._v("依赖的响应式数据发生变化是就会"),a("code",[t._v("trigger")]),t._v("以重新执行"),a("code",[t._v("runner")]),t._v("，\n但是我们传递了调度函数选项"),a("code",[t._v("runner")]),t._v("的调用就会以"),a("code",[t._v("scheduler")]),t._v("的形式来调用，这就回到了我们的疑惑何时执行"),a("code",[t._v("scheduler")]),t._v(";\n正是"),a("code",[t._v("getter")]),t._v("依赖的响应式数据产生变化时。"),a("br"),t._v("\n我们看到"),a("code",[t._v("scheduler")]),t._v("的内部实现，发现里面并没有进行直接通过"),a("code",[t._v("getter")]),t._v("求值，\n而是在"),a("code",[t._v("dirty")]),t._v("为"),a("code",[t._v("false")]),t._v("时去触发"),a("code",[t._v("computedRef")]),t._v("的"),a("code",[t._v("trigger")]),t._v("；这就意味着此时依赖于"),a("code",[t._v("computedRef")]),t._v("的副作用函数会重新执行，\n而在这个副作用函数中一定会对"),a("code",[t._v("computedRef")]),t._v("产生"),a("code",[t._v("get")]),t._v("访问，此时又回到"),a("code",[t._v("get")]),t._v("函数内部发现"),a("code",[t._v("drity")]),t._v("为需要求值，就执行"),a("code",[t._v("runner")]),t._v("进行真实的求值。"),a("br"),t._v("\n我们仔细体会这个过程我们不难发现需要求新值的时刻就发生在"),a("code",[t._v("computed")]),t._v("传入"),a("code",[t._v("getter")]),t._v("所依赖的响应式数据发生改变的时候。")]),t._v(" "),a("h2",{attrs:{id:"computed整体流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed整体流程图"}},[t._v("#")]),t._v(" "),a("code",[t._v("computed")]),t._v("整体流程图")]),t._v(" "),a("p",[t._v("光从文字的角度来描述"),a("code",[t._v("computed")]),t._v("的流程可能不是那么具象，于是我画了一张流程图如下："),a("br"),t._v(" "),a("img",{attrs:{src:"/vue3-analysis/reactivity/computed.jpg",alt:"computed"}})]),t._v(" "),a("p",[t._v("通过这张图可以描述用户操作的"),a("code",[t._v("get")]),t._v("和"),a("code",[t._v("set")]),t._v("是如何触发"),a("code",[t._v("computed")]),t._v("内部计算的，"),a("code",[t._v("computed")]),t._v("的缓存性就在于，\n需要"),a("code",[t._v("getter")]),t._v("依赖的响应式变化了才会重新计算求值，而延迟求值，则体现在需要求值是通过"),a("code",[t._v("dirty")]),t._v("来维护，\n在用户触发"),a("code",[t._v("get")]),t._v("时进行实际的求值。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("本篇我们着重讨论了"),a("code",[t._v("computed")]),t._v("的巧妙实现原理，也看到了"),a("code",[t._v("effect")]),t._v("函数的一次教科书式的使用指南，\n正是有了强大的依赖收集和派发更新我们才能组合出无限的可能。下一节我们会看"),a("code",[t._v("effect")]),t._v("的另一个应用"),a("code",[t._v("watch API")]),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);