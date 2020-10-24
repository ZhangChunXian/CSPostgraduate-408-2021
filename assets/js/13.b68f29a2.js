(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{464:function(t,a,s){"use strict";s.r(a);var r=s(44),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"算法基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法基本概念"}},[t._v("#")]),t._v(" 算法基本概念")]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001358.jpg",alt:"image-20200616214853491"}})]),t._v(" "),s("h3",{attrs:{id:"什么是算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是算法"}},[t._v("#")]),t._v(" 什么是算法？")]),t._v(" "),s("p",[t._v("程序=数据结构+算法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001359.jpg",alt:"image-20200616215006166"}})]),t._v(" "),s("p",[t._v("###算法的特性")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("有穷性：一个算法必须总在执行有穷步之后结束，且每一步都可在有穷时间内完成。")]),t._v(" "),s("p",[t._v("注：算法必须是有穷的，二程序可以是无穷的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001400.jpg",alt:"image-20200616215340371"}})])]),t._v(" "),s("li",[s("p",[t._v("确定性：算法每一条指令必须有确切的含义，对于相同的输入只能得出相同的输出")])]),t._v(" "),s("li",[s("p",[t._v("可行性：算法描述的操作都可以通过已经实现的基本运算执行有限次来实现。")])]),t._v(" "),s("li",[s("p",[t._v("输入：一个算法有0个或多个输入，这些输入取自某个特定对象的集合。")])]),t._v(" "),s("li",[s("p",[t._v("输出：一个算法有一个或多个输出，这些输出是与输入有着某种特定关系的量。")]),t._v(" "),s("p",[t._v("五个特性，缺一不可")])])]),t._v(" "),s("p",[t._v("####“好”算法的特质")]),t._v(" "),s("ol",[s("li",[t._v("正确性：算法应能正确地解决求解问题。")]),t._v(" "),s("li",[t._v("可读性：算法应具有良好的可读性，帮助人们理解。")]),t._v(" "),s("li",[t._v("健壮性：输入非法数据时，算法能适当地做出反应或进行处理，而不会产生莫名其妙的输出结果。")]),t._v(" "),s("li",[t._v("高效率与底存储量需求：执行速度快，时间复杂度低。不费内存，空间复杂度低。")])]),t._v(" "),s("p",[t._v("###总结")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001401.jpg",alt:"image-20200616220536590"}})]),t._v(" "),s("h2",{attrs:{id:"算法效率的度量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法效率的度量"}},[t._v("#")]),t._v(" 算法效率的度量")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001402.jpg",alt:"image-20200616220923527"}})]),t._v(" "),s("h3",{attrs:{id:"如何评估算法时间开销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何评估算法时间开销"}},[t._v("#")]),t._v(" 如何评估算法时间开销？")]),t._v(" "),s("p",[s("strong",[t._v("让算法先运行，事后统计运行时间？")])]),t._v(" "),s("p",[t._v("存在的问题？")]),t._v(" "),s("ul",[s("li",[t._v("和机器性能有关，比如：超级计算机VS单片机")]),t._v(" "),s("li",[t._v("和编程语言有关，越高级的语言执行效率越低，没错，就是越低")]),t._v(" "),s("li",[t._v("和编译程序产生的机器指令质量有关")]),t._v(" "),s("li",[t._v("有些算法是不能事后统计的，比如，导弹控制算法。")])]),t._v(" "),s("p",[t._v("评价一个算法优劣时，需要排除与算法本身无关的外界因素，能否事先估计？")]),t._v(" "),s("h3",{attrs:{id:"算法时间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法时间复杂度"}},[t._v("#")]),t._v(" 算法时间复杂度")]),t._v(" "),s("p",[t._v("事前预估算法时间开销T(n)与问题规模n的关系（T 表示 time）")]),t._v(" "),s("p",[t._v("如何计算T，例子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001403.jpg",alt:"image-20200616234743261"}})]),t._v(" "),s("h4",{attrs:{id:"问题1-是否可以忽略表达式某些部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题1-是否可以忽略表达式某些部分"}},[t._v("#")]),t._v(" 问题1:是否可以忽略表达式某些部分？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001404.jpg",alt:"image-20200616235203889"}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("加法规则：多项相加，只保留最高阶的项，且系数变为1")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001405.jpg",alt:"image-20200616235558501"}})])]),t._v(" "),s("li",[s("p",[t._v("乘法规则：多项相乘，都保留")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001406.jpg",alt:"image-20200616235856976"}})])])]),t._v(" "),s("h5",{attrs:{id:"算法时间复杂度阶数顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法时间复杂度阶数顺序"}},[t._v("#")]),t._v(" 算法时间复杂度阶数顺序")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001407.jpg",alt:"image-20200617000121744"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001408.jpg",alt:"image-20200617000310666"}})]),t._v(" "),s("h4",{attrs:{id:"如果有好几千行代码-需要一行一行数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果有好几千行代码-需要一行一行数"}},[t._v("#")]),t._v(" 如果有好几千行代码，需要一行一行数？")]),t._v(" "),s("ol",[s("li",[t._v("顺序执行的代码只会影响常数项，可以忽略")]),t._v(" "),s("li",[t._v("只需要挑循环中的一个基本操作，分析它的执行次数和n的关系就好")]),t._v(" "),s("li",[t._v("如果有多层嵌套循环，只需要关注最深层的循环循环了几次")])]),t._v(" "),s("h4",{attrs:{id:"小练习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小练习"}},[t._v("#")]),t._v(" 小练习")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001409.jpg",alt:"image-20200617001603926"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001410.jpg",alt:"image-20200617001659516"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001411.jpg",alt:"image-20200617001353856"}})]),t._v(" "),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001412.jpg",alt:"image-20200617001826231"}})]),t._v(" "),s("p",[t._v("算法的性能问题只有在n很大时才会暴露出来。")]),t._v(" "),s("h3",{attrs:{id:"算法空间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法空间复杂度"}},[t._v("#")]),t._v(" 算法空间复杂度")]),t._v(" "),s("h4",{attrs:{id:"原地工作算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原地工作算法"}},[t._v("#")]),t._v(" 原地工作算法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001413.jpg",alt:"image-20200617002424730"}})]),t._v(" "),s("p",[t._v("分析空间复杂度时，只需关注与问题规模相关的变量就好（讲人话，就是，看程序中的变量就好）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001414.jpg",alt:"image-20200617002625466"}})]),t._v(" "),s("p",[t._v("加法法则")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001415.jpg",alt:"image-20200617002941853"}})]),t._v(" "),s("h4",{attrs:{id:"函数递归调用带来的内存开销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数递归调用带来的内存开销"}},[t._v("#")]),t._v(" 函数递归调用带来的内存开销")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001416.jpg",alt:"image-20200617003249255"}})]),t._v(" "),s("p",[t._v("在这种情况下，空间复杂度等于递归调用的深度。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001417.jpg",alt:"image-20200617003702543"}})]),t._v(" "),s("p",[t._v("递归调用的过程中，每一次开辟的内存空间也可以不一致，如上例。")]),t._v(" "),s("h4",{attrs:{id:"总结-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/MyPicStorage/2021-CSPostgraduate-408/20200810001418.jpg",alt:"image-20200617003857723"}})]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);