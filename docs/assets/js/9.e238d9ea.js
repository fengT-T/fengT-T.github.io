(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{51:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-基础知识点-类型转换骚操作集锦"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-基础知识点-类型转换骚操作集锦","aria-hidden":"true"}},[t._v("#")]),t._v(" JS 基础知识点 - 类型转换骚操作集锦")]),t._v(" "),s("h2",{attrs:{id:"原始（primitive）类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原始（primitive）类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原始（Primitive）类型")]),t._v(" "),s("p",[t._v("在 JS 中，存在着 6 种原始值，分别是：")]),t._v(" "),s("ul",[s("li",[t._v("boolean")]),t._v(" "),s("li",[t._v("null")]),t._v(" "),s("li",[t._v("undefined")]),t._v(" "),s("li",[t._v("number")]),t._v(" "),s("li",[t._v("string")]),t._v(" "),s("li",[t._v("symbol")])]),t._v(" "),s("p",[t._v("其中 JS 的 "),s("code",[t._v("number")]),t._v(" 类型是浮点类型的，在使用中会遇到某些 "),s("code",[t._v("Bug")]),t._v("，比如 0.1 + 0.2 !== 0.3，"),s("code",[t._v("string")]),t._v(" 类型是不可变的，无论你在 "),s("code",[t._v("string")]),t._v(" 类型上调用何种方法，都不会对值有改变。")]),t._v(" "),s("h2",{attrs:{id:"typeof-vs-instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof-vs-instanceof","aria-hidden":"true"}},[t._v("#")]),t._v(" typeof vs instanceof")]),t._v(" "),s("p",[s("code",[t._v("typeof")]),t._v(" 对于原始类型来说，除了 "),s("code",[t._v("null")]),t._v(" 都可以显示正确的类型。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ？？？？ 有毒吧")]),t._v("\n")])])]),s("p",[s("code",[t._v("instanceof")]),t._v(" 检查原型链，判断构造器。\n"),s("code",[t._v("Symbol.hasInstance")]),t._v(" 重新定义 "),s("code",[t._v("instanceof")]),t._v(" 行为")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrimitiveString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrimitiveString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h2",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),s("p",[t._v("js的类型转换其实很的单纯，没有三位一体之类的那么玄，本来破语言就是10天肝出来的，哪有那么多时间搞那么多操作。")]),t._v(" "),s("h3",{attrs:{id:"转-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转-boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" 转 Boolean")]),t._v(" "),s("p",[t._v("在条件判断时，除了 "),s("code",[t._v("undefined")]),t._v("， "),s("code",[t._v("null")]),t._v("， "),s("code",[t._v("false")]),t._v("， "),s("code",[t._v("NaN")]),t._v("， "),s("code",[t._v("''")]),t._v("， "),s("code",[t._v("0")]),t._v("， "),s("code",[t._v("-0")]),t._v("，其他所有值都转为 "),s("code",[t._v("true")]),t._v("，包括所有对象。")]),t._v(" "),s("p",[s("code",[t._v("js")]),t._v(" 转 "),s("code",[t._v("boolean")]),t._v(" 还是很稳的")]),t._v(" "),s("h3",{attrs:{id:"转-字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转-字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 转 字符串")]),t._v(" "),s("p",[t._v("转字符串有什么好讲的啊")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("原始值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("666 => '666'")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("'null'")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("'undefined'")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("'true'")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("'false'")])])])]),t._v(" "),s("p",[t._v("对象调用自己的 toString 方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("原始值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("{}")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('"[object Object]"')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("[1,2,4]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('"1,2,4"')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("() => {}")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('"() => {}"')])])])]),t._v(" "),s("h3",{attrs:{id:"转-数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转-数字","aria-hidden":"true"}},[t._v("#")]),t._v(" 转 数字")]),t._v(" "),s("p",[t._v("原始类型转数字（只需要记住下面几在个就行）：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("原始值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("'' => 0, '1' => 1, 'a' => NaN")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")])])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("parseInt 是个函数 行为 和 类型转换 稍微有一点不一样")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123da'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123da'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v('非原始类型转数字详细情况，见下一节的介绍当需要转数字的时候执行"number"转换。')]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("即先执行对象的 "),s("code",[t._v("valueOf")]),t._v("方法，如果没有得到原始类型的值（如果没有重写"),s("code",[t._v("valueOf")]),t._v("默认是返回对象本身所以肯定不是原始类型），再执行"),s("code",[t._v("toString")]),t._v("，"),s("code",[t._v("toString")]),t._v("默认返回字符串是原始类型，所以 对象转数字实际上如果没有重写 "),s("code",[t._v("valueOf")]),t._v(" "),s("code",[t._v("toString")]),t._v("的话，全是看 "),s("code",[t._v("toString")]),t._v("返回什么，然后根据 "),s("code",[t._v("toString")]),t._v(" 的结果来 转换成数字）")])]),t._v(" "),s("p",[t._v("举个例子如果没有重写那两个方法 对象转数字是下面的规律 ：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("原始值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("空数组0,存在一个元素为数字就转成数字，其他都是NaN")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("除数组以外的引用类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")])])])]),t._v(" "),s("p",[t._v("对于 "),s("code",[t._v("Array")]),t._v("， "),s("code",[t._v("[1, 2, 3] => '1,2,3' => NaN")]),t._v(" "),s("code",[t._v("[1] => '1' => 1")]),t._v(" 所以你知道为啥数组只有第一个元素为数字能转成数字别的都是返回"),s("code",[t._v("NaN")]),t._v("了吧，而对象的"),s("code",[t._v("toString")]),t._v(" 方法都是返回 "),s("code",[t._v('"[object Object]"')]),t._v(" 之类的鬼东西，当然全是 "),s("code",[t._v("NaN")]),t._v(" 了")]),t._v(" "),s("h2",{attrs:{id:"对象转原始类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象转原始类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象转原始类型")]),t._v(" "),s("p",[t._v("方法 "),s("code",[t._v("toString")]),t._v(" 和 "),s("code",[t._v("valueOf")]),t._v(" 来自上古时代。先执行谁，取决于上下文，转换具有所谓的“暗示”。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("对于对象，不存在 to-boolean 转换，因为所有对象在布尔上下文中都是 true。所以只有字符串和数值转换。布尔值不当人。")])]),t._v(" "),s("p",[t._v("这里有三种变体：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('"string" 当一个操作期望一个字符串时，对于对象到字符串的转换，比如 '),s("code",[t._v("a + '1'")])])]),t._v(" "),s("li",[s("p",[t._v('"number" 当一个操作需要一个数字时，用于对象到数字的转换，如 '),s("code",[t._v("a + 1")])])]),t._v(" "),s("li",[s("p",[t._v('"default" 在少数情况下发生，当操作者“不确定”期望的类型时。例如，二进制加 + 可以和字符串（连接）和数字（相加）发生作用，所以类型是字符串和数字都可以。或者当一个对象用 == 与一个字符串、数字或符号进行比较时。')])])]),t._v(" "),s("p",[t._v("大于/小于运算符 "),s("code",[t._v("<>")]),t._v(" 也可以同时用于字符串和数字。不过，它使用 “number” 暗示，而不是 “default”。这是历史原因。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("扯了这么多实际上只要不是暗示 string 其他的都是 "),s("code",[t._v("valueOf")]),t._v(" 先执行")])]),t._v(" "),s("p",[t._v("为了进行转换，JavaScript 尝试查找并调用三个对象方法：")]),t._v(" "),s("ul",[s("li",[t._v("如果"),s("code",[t._v("obj[Symbol.toPrimitive](hint)")]),t._v("这个方法存在的话，就仅仅只调用 "),s("code",[t._v("obj[Symbol.toPrimitive](hint)")]),t._v("方法， 换句话说如果有"),s("code",[t._v("obj[Symbol.toPrimitive](hint)")]),t._v("就只尝试调用这个方法，这个方法不返回基本类型就凉了，当场报错。")]),t._v(" "),s("li",[t._v('否则如果暗示是 "string"\n'),s("ul",[s("li",[t._v("尝试 "),s("code",[t._v("obj.toString()")]),t._v(" 和 "),s("code",[t._v("obj.valueOf()")]),t._v("，看谁先返回基础类型，返回的基础类型参与计算。")])])]),t._v(" "),s("li",[t._v('否则，如果暗示 "number" 或者 "default"\n'),s("ul",[s("li",[t._v("尝试 "),s("code",[t._v("obj.valueOf()")]),t._v(" 和 "),s("code",[t._v("obj.toString()")]),t._v("，看谁先返回基础类型，返回的基础类型参与计算。")])])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("如果返回的基础类型不满足运算条件，还会再次转换，例如 "),s("code",[t._v("1*[] = 0")]),t._v(", "),s("code",[t._v("[]")]),t._v(" 转成基础类型返回的是 "),s("code",[t._v("''")]),t._v(", "),s("code",[t._v("''")]),t._v(" 参与计算。但是乘法需要数字所以 "),s("code",[t._v("''")]),t._v(" 会再次转成数字 "),s("code",[t._v("0")]),t._v(",")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("实际上不重写"),s("code",[t._v("valueOf")]),t._v("的话，"),s("code",[t._v("valueOf")]),t._v("总是默认返回对象自己，对象又不是基础类型，到时候还是得看"),s("code",[t._v("toString")]),t._v("返回的，但是 js 鸡贼的很，"),s("code",[t._v("toString")]),t._v("默认返回字符串可以兜底，丝毫不慌。那么如果两个方法都没有返回基础类型呢。")]),t._v(" "),s("p",[t._v("事实上，如果你重写了"),s("code",[t._v("obj.valueOf()")]),t._v(" 和 "),s("code",[t._v("obj.toString()")]),t._v("让这两个都返回一个对象，那么转换为原始类型的时候当场报错"),s("code",[t._v("Uncaught TypeError: Cannot convert object to primitive value")])]),t._v(" "),s("p",[t._v("机智的你似乎想到了什么")]),t._v(" "),s("p",[t._v("一行代码让猪队友从此告别 对象类型转换")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("valueOf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("一个简单的例子，谁看谁知道：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toPrimitive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 3")]),t._v("\n")])])]),s("p",[t._v("关于“暗示”的一些例子，一般就加法比较特殊，因为字符串可以执行加法，才显得比较特殊")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就是'[object Object]' + '[object Object]'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object][object Object]'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就是'[object Object]' + 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ''转数字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就是 1 * ''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就是 1 + (+[])")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就是 +''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("{} + [] = 0 是一道思考题")])]),t._v(" "),s("h2",{attrs:{id:"比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较","aria-hidden":"true"}},[t._v("#")]),t._v(" 比较")]),t._v(" "),s("h3",{attrs:{id:"字符串间的比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串间的比较","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串间的比较")]),t._v(" "),s("p",[t._v("在比较字符串的大小时，会使用“字典”或“词典”顺序进行判定。")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("非ASSIC顺序，而是 Unicode 编码顺序\n也就是说 'a' > 'A',")]),t._v(" "),s("p",[t._v("py,rust等新语言对本条点赞, c 语言表示 不屑，")])]),t._v(" "),s("h3",{attrs:{id:"与-同类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-同类型","aria-hidden":"true"}},[t._v("#")]),t._v(" === 与 同类型 ==")]),t._v(" "),s("p",[t._v("这个没什么好讲的吧")]),t._v(" "),s("h3",{attrs:{id:"不同类型间的比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同类型间的比较","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同类型间的比较")]),t._v(" "),s("p",[t._v("当不同类型的值进行比较时，它们会首先被转为数字（number）再判定大小。")]),t._v(" "),s("p",[t._v("转换规则见上面的"),s("a",{attrs:{href:"#%E8%BD%AC-%E6%95%B0%E5%AD%97"}},[t._v("转 数字")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际上就是 '' == 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h3",{attrs:{id:"涉及-null-和-undefined-的不同类型间比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#涉及-null-和-undefined-的不同类型间比较","aria-hidden":"true"}},[t._v("#")]),t._v(" 涉及 null 和 undefined 的不同类型间比较")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",[t._v("FBI Warning")]),t._v(" "),s("p",[s("code",[t._v("undefined")]),t._v(" 和 "),s("code",[t._v("null")]),t._v(" 在不同类型间的相等性检测 "),s("code",[t._v("==")]),t._v(" 中不会进行任何的类型转换，它们有自己独立的比较规则，所以除了它们之间互等外不会等于任何其他的值。")]),t._v(" "),s("p",[s("code",[t._v("> < >= <=")]),t._v(" 不一样，这几个符合上面的转化成 数字 的解释")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 > 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 特殊规则，不类型转换等效于 null === 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 >= 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN > 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN < 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN == 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 特殊规则，就是相等，好气啊")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);