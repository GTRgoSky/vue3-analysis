(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{370:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"ui-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-是什么"}},[t._v("#")]),t._v(" UI 是什么")]),t._v(" "),a("p",[t._v("此前我们讨论到数据驱动视图时，得到了视图即数据的一种映射的结论，这一篇我们更加详尽的来讨论一下：在"),a("code",[t._v("Vue3")]),t._v("加持下"),a("strong",[t._v("UI")]),t._v("是什么？")]),t._v(" "),a("h2",{attrs:{id:"仅仅是数据到视图的映射吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仅仅是数据到视图的映射吗"}},[t._v("#")]),t._v(" 仅仅是数据到视图的映射吗")]),t._v(" "),a("p",[t._v("我们在前文中提到过一个表达"),a("strong",[t._v("UI")]),t._v("的方式：")]),t._v(" "),a("blockquote",[a("p",[t._v("UI = f(data)")])]),t._v(" "),a("h4",{attrs:{id:"但是仅仅数据映射到ui能够表达全部吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#但是仅仅数据映射到ui能够表达全部吗？"}},[t._v("#")]),t._v(" - 但是仅仅数据映射到"),a("strong",[t._v("UI")]),t._v("能够表达全部吗？")]),t._v(" "),a("blockquote",[a("p",[t._v("[列表项 1, 列表项 2, ...] --\x3e 列表")])]),t._v(" "),a("p",[t._v("展示一个列表似乎很容易用数据映射来表达的，毕竟我们拥有结构型指令"),a("code",[t._v("v-for")]),t._v("这样的映射关系，\n但是在用户界面上，我们不只有数据到视图的数据流，同时我们也有用户交互触发的行为到数据的流向；\n仅仅数据到视图的映射显然是不够的，我们需要建立如下的单向数据流模型：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/vue3-analysis/idea/UI-single.jpeg",alt:"UI-single"}})]),t._v(" "),a("p",[t._v("我们加入了一个行为的概念来描述来自视图的行为数据流，这里的行为包含了同步和异步两种，异步的行为是时间轴上的异步，\n最终还是要对应到数据上才能处于当前的单项数据流闭环中，不映射到数据上的行为那是另外的概念了，后面会提到。")]),t._v(" "),a("h4",{attrs:{id:"数据都对应着行为吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据都对应着行为吗？"}},[t._v("#")]),t._v(" - 数据都对应着行为吗？")]),t._v(" "),a("p",[t._v("显然对于我们的一个"),a("code",[t._v("Vue")]),t._v("组件来说传入的"),a("code",[t._v("props")]),t._v("属性是无法在当前组件中被更改的，那行为就无法对应到属性上；\n既然数据不是都对应着行为，那我们还需要重新定义数据；将不可变的部分拆分成属性，可变的用来对应行为的拆分为状态：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/vue3-analysis/idea/UI.jpg",alt:"UI"}})]),t._v(" "),a("h4",{attrs:{id:"状态是否包含了行为？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态是否包含了行为？"}},[t._v("#")]),t._v(" - 状态是否包含了行为？")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("Vue")]),t._v("的响应式特性，我们看到的状态和改变状态的行为本就是一体的，我们想要改变状态直接赋值修改即可；\n这里如果我们使用"),a("code",[t._v("React")]),t._v("的"),a("code",[t._v("setState")]),t._v("来理解改变状态的行为会更加具象，也就是说"),a("code",[t._v("state")]),t._v("是否包含了每一次的"),a("code",[t._v("setState")]),t._v("？\n实际上改变状态的行为的确是可以被状态包含的，其实我们不应该在将状态理解成一个值，而应该理解成一个包含了未来所有可能出现值的集合，\n就如同流一样，看起来像一个数据，其实它背后拥有一个时间相关的轴它包含了未来所有可能出现的值，影射了改变流的行为。\n如果行为能被封装到状态的背后，这样视图就不需要感知行为了它仅需要感知状态;\n因此我们很容易就将行为和状态简化到一起，这样"),a("strong",[t._v("UI")]),t._v("就成了视图和状态的循环：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/vue3-analysis/idea/UI-loop.jpg",alt:"UI loop"}})]),t._v(" "),a("h4",{attrs:{id:"作用于状态和视图之外的行为是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用于状态和视图之外的行为是什么？"}},[t._v("#")]),t._v(" - 作用于状态和视图之外的行为是什么？")]),t._v(" "),a("p",[t._v("这样的表述还是不够，我们依旧无法描述"),a("code",[t._v("setTimeout")]),t._v("、"),a("code",[t._v("console.log")]),t._v("和"),a("code",[t._v("location.href")]),t._v("等等并不作用于状态却又真实包含在视图描述中的行为，\n比如用户未登陆就跳转到登录页，用户登录是一个状态，"),a("code",[t._v("location.href")]),t._v("的跳转并没有改变这个状态但是它改变了视图，这种行为应该被如何定义呢？\n所以还需要引入作用的概念；如果我们统一理解，将状态理解成状态行为，因为改变状态本身就是一种用户行为；\n作用也理解成一种行为，"),a("code",[t._v("console.log")]),t._v("打印日志、"),a("code",[t._v("location.href")]),t._v("跳转本身也是一种行为；\n那么我们能够得到如下的对视图的描述：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/vue3-analysis/idea/UI-relation.jpg",alt:"UI relation"}})]),t._v(" "),a("h4",{attrs:{id:"关联的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联的关系"}},[t._v("#")]),t._v(" - 关联的关系")]),t._v(" "),a("p",[t._v("在最终我们的模型中真正传入视图的只有属性，其他的状态、上下文、作用等等都变成与视图关联的一部分；如果我们将状态行为、上下文、作用行为耦合到视图内部，\n那我们就没有办法做到复用这些行为；而关联的关系正是"),a("code",[t._v("Vue3 composition API")]),t._v("所带给我们的组合特性。\n再回到一开始的表达式，我们可以重新描述成如下形式：")]),t._v(" "),a("blockquote",[a("p",[t._v("UI = f(props) useComposable1, useComposable2 ...")])]),t._v(" "),a("p",[a("strong",[t._v("UI")]),t._v("变成了视图使用了组合 1、组合 2 等等，组合可以是一类状态和行为的封装，也可以是上下文、作用等等内容；\n至此我们再看一下"),a("code",[t._v("Vue3 composition API")]),t._v("的形态：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ object.foo }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" reactive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" watchEffect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用了状态 object")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用了作用 console.log")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 暴露状态给模板")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("这便是"),a("code",[t._v("composition API")]),t._v("为我们提供的新的描述"),a("strong",[t._v("UI")]),t._v("的方式，有属性、包含行为的状态、作用等等。")]),t._v(" "),a("h4",{attrs:{id:"composition-api下我们如何封装一个状态与行为呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api下我们如何封装一个状态与行为呢？"}},[t._v("#")]),t._v(" - "),a("code",[t._v("composition API")]),t._v("下我们如何封装一个状态与行为呢？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onMounted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onUnmounted "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMousePosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mousemove"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUnmounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mousemove"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useMousePosition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./mouse"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMousePosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他逻辑...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这是来自"),a("code",[t._v("Vue composition API RFC")]),t._v("官网的一个示例，封装了一个鼠标坐标的状态，视图使用了它就得到了它的状态；\n如果有一百个组件需要鼠标坐标状态，我们都仅需要声明一个逻辑块；这就是松散的关联关系带来的可复用性。\n而且在"),a("code",[t._v("useMousePosition")]),t._v("中鼠标坐标的状态显然就包含了更改它的行为，这与我们之前的结论相互印证。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("我们详细的讨论了"),a("code",[t._v("Vue3 composition API")]),t._v("下，"),a("strong",[t._v("UI")]),t._v("是什么；这样的思考方式其实来自于"),a("code",[t._v("React hooks")]),t._v("，这也是一种殊途同归吧，\n一个响应式数据、一个不可变数据最终却得到了相同的"),a("strong",[t._v("UI")]),t._v("描述形态。其实在"),a("code",[t._v("Vue3")]),t._v("和"),a("code",[t._v("React hooks")]),t._v("时代，\n我们完全不必要去纠结行为、状态和作用具体是哪个"),a("code",[t._v("API")]),t._v("来对应，框架赋予我们什么方法来描述状态、行为和作用这是框架设计的问题，\n而对于我们使用者来说这更像是一种思考方式我们需要在"),a("code",[t._v("Vue3")]),t._v("中做的是将不同种类、不同领域的状态及其行为进行抽离封装，\n最终与视图形成的只是松散的关联关系；我相信这已经很透彻的说明了在"),a("code",[t._v("composition API")]),t._v("下我们应该如何构建用户界面，\n这是更加偏如何使用的理论，接下来我们可以看看"),a("code",[t._v("Vue")]),t._v("的内在了。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/#%E4%BB%A3%E7%A0%81%E7%BB%84%E7%BB%87",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合式 API 征求意见稿"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1Ge411W7Ra",target:"_blank",rel:"noopener noreferrer"}},[t._v("React hooks 实战指南"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);