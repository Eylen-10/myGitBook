(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{340:function(t,a,r){"use strict";r.r(a);var s=r(10),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动态规划-dynamic-programming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划-dynamic-programming"}},[t._v("#")]),t._v(" 动态规划（Dynamic Programming）")]),t._v(" "),a("p",[t._v("「动态规划」通常用来解决「最优化问题」（optimization problem）。在这类问题中，可以有很多可行的解，我们希望找到具有最优值（最大值或最小值）的解。")]),t._v(" "),a("h2",{attrs:{id:"动态规划与分治算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划与分治算法"}},[t._v("#")]),t._v(" 动态规划与分治算法")]),t._v(" "),a("p",[t._v("「动态规划」与「分治算法」相似，都是通过组合子问题的解来求解原问题。不同的是，「分治算法」是将问题划分为互不相交的子问题，通过递归来求解子问题，再将他们组合起来，求解原问题。而「动态规划」应用于子问题重叠的情况，即不同的子问题具有公共的子子问题。在这种情况下，如果通过「分治算法」进行求解，会造成大量的重复计算，效率很低。而在「动态规划」中，会仔细安排求解顺序，对每个子问题只求解一次，使用「备忘录」将结果记录下来，随后只需要查表就可以，避免了不必要的计算。「动态规划」用空间换时间，是典型的时空权衡的例子，可能将一个指数时间的解转化为一个多项式时间的解。")]),t._v(" "),a("h2",{attrs:{id:"动态规划与贪心算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划与贪心算法"}},[t._v("#")]),t._v(" 动态规划与贪心算法")]),t._v(" "),a("p",[t._v("求解最优化问题的算法通常需要经过一系列的步骤，在每个步骤都面临许多选择。对于许多最优化问题，使用动态规划算法来求解最优解有点浪费，可以使用更简单、高效的方法。「贪心算法」并不考虑整体最优，每一步都做出当时看起来最佳的选择，即局部最优的选择，寄希望可以导致全局最优解。「动态规划」算法通常以自底向上的方式解各子问题，而「贪心算法」则通常自顶向下的方式进行。")]),t._v(" "),a("h2",{attrs:{id:"动态规划的三要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的三要素"}},[t._v("#")]),t._v(" 动态规划的三要素")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("重叠子问题")]),t._v(" "),a("p",[t._v("「重叠子问题」指的是在求解子问题的过程中，存在公共的子子问题，会造成大量的重复计算，可以通过使用「备忘录」来避免。")])]),t._v(" "),a("li",[a("p",[t._v("最优子结构（optimal substructure）")]),t._v(" "),a("p",[t._v("「最优子结构」指的是可以通过子问题的最优解，来推导出问题的最优解。即下一个阶段的状态可以通过前一个阶段的状态推导出来。\n「最优子结构」是动态规划问题的必要条件。当遇到「最优子结构」失效的情况，可以通过改造问题来进一步求解。")])]),t._v(" "),a("li",[a("p",[t._v("状态转移方程")])])]),t._v(" "),a("p",[t._v("​\t根据「最优子结构」我们可以写出递推公式，聪明地穷举。")])])}),[],!1,null,null,null);a.default=v.exports}}]);