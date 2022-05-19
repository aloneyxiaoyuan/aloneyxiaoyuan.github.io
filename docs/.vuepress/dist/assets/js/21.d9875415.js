(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{701:function(s,t,a){"use strict";a.r(t);var r=a(6),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#同源策略"}},[s._v("同源策略")])]),a("li",[a("a",{attrs:{href:"#什么是跨域"}},[s._v("什么是跨域?")])]),a("li",[a("a",{attrs:{href:"#怎样解决跨域"}},[s._v("怎样解决跨域?")]),a("ul",[a("li",[a("a",{attrs:{href:"#方式一-通过vue-cli配置代理服务器-最常用"}},[s._v("方式一:通过vue-cli配置代理服务器(最常用)")])]),a("li",[a("a",{attrs:{href:"#方式二-jsonp-需要前后端搭配"}},[s._v("方式二:jsonp(需要前后端搭配)")])]),a("li",[a("a",{attrs:{href:"#方式三-后端设置请求头"}},[s._v("方式三:后端设置请求头")])]),a("li",[a("a",{attrs:{href:"#方式四-设置nginx"}},[s._v("方式四:设置nginx")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[s._v("#")]),s._v(" 同源策略")]),s._v(" "),a("p",[a("code",[s._v("同源策略其实是浏览器的一种保护机制,它阻止了不同源之间进行数据交互,是为了保护不同页面之间信息安全")])]),s._v(" "),a("h2",{attrs:{id:"什么是跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[s._v("#")]),s._v(" 什么是跨域?")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("跨域")]),s._v(" "),a("p",[s._v("请求地址的组成:协议  域名  端口号,三者只要有一个不同,就认定为不同源\n在进行不同源的访问时,我们就认为是跨域.")])]),s._v(" "),a("h2",{attrs:{id:"怎样解决跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎样解决跨域"}},[s._v("#")]),s._v(" 怎样解决跨域?")]),s._v(" "),a("h3",{attrs:{id:"方式一-通过vue-cli配置代理服务器-最常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-通过vue-cli配置代理服务器-最常用"}},[s._v("#")]),s._v(" 方式一:通过vue-cli配置代理服务器(最常用)")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("配置代理")]),s._v(" "),a("p",[s._v("在vue.config.js中配置:(简便)")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("devServer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'目标地址'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("---缺点:\n不可控,当请求的资源在当前项目的public目录中存在时会直接返回,并不会将请求转发给指定的服务器\n不能代理多种请求\n在vue.config.js中配置:(详细)")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("devServer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'指定代理前缀'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//所有包含此前缀的请求将会被转发到目标地址")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("target")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'目标地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("pathRewrite")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'代理前缀'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将前缀去除,不然会导致目标服务器拿到错误的地址")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("ws")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用于支持websocket")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("changeOrigin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用于控制请求头中的host,如果为false就代表代理服务器会对目标服务器表明自己是与它相同域名的host,如果为true则代表代理服务器对目标服务器实话实说,表明自己真正的host")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("h3",{attrs:{id:"方式二-jsonp-需要前后端搭配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-jsonp-需要前后端搭配"}},[s._v("#")]),s._v(" 方式二:jsonp(需要前后端搭配)")]),s._v(" "),a("p",[a("code",[s._v("其实jsonp解决跨域问题的本质就是利用script标签的src属性来进行，由于script标签的src属性不受跨域的现在，所以我们可以将我们要请求的服务器的地址及相关参数作为src的值来进行传输，然后再由后台进行配合就可以实现跨域。")])]),s._v(" "),a("h3",{attrs:{id:"方式三-后端设置请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式三-后端设置请求头"}},[s._v("#")]),s._v(" 方式三:后端设置请求头")]),s._v(" "),a("h3",{attrs:{id:"方式四-设置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式四-设置nginx"}},[s._v("#")]),s._v(" 方式四:设置nginx")])])}),[],!1,null,null,null);t.default=e.exports}}]);